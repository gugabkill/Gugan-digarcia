/**
 * Teto de reajuste da ANS para planos individuais e familiares, por ciclo.
 * O índice do ano X vale para os aniversários de maio do ano X até abril do ano X+1.
 */
export const ANS: Record<number, number> = {
  2011: 7.69,
  2012: 7.93,
  2013: 9.04,
  2014: 9.65,
  2015: 13.55,
  2016: 13.57,
  2017: 13.55,
  2018: 10,
  2019: 7.35,
  2020: 8.14,
  2021: -8.19,
  2022: 15.5,
  2023: 9.63,
  2024: 6.91,
  2025: 6.06,
  2026: 5.11,
}

const ULTIMO_CICLO = Math.max(...Object.keys(ANS).map(Number))
export const PRIMEIRO_ANO = Math.min(...Object.keys(ANS).map(Number))

export type Aniversario = { ano: number; mes: number; indice: number; pelaAns: number; estimada: number }

export type Resultado = {
  aniversarios: Aniversario[]
  mensalidadePelaAns: number
  diferencaMensal: number
  totalPagoAMais: number
  periodoInicio: { ano: number; mes: number }
  periodoFim: { ano: number; mes: number }
}

/**
 * mes: 0 a 11. Considera os aniversários anuais do contrato até a data de referência.
 * Como só temos a mensalidade inicial e a atual, os reajustes efetivamente aplicados são
 * estimados por uma taxa anual média que leva da primeira à mensalidade atual.
 */
export function simular(
  inicial: number,
  atual: number,
  anoInicio: number,
  mesInicio: number,
  hoje: Date = new Date(),
): Resultado {
  const anoHoje = hoje.getFullYear()
  const mesHoje = hoje.getMonth()
  const fim = anoHoje * 12 + mesHoje
  const ini = anoInicio * 12 + mesInicio

  const aniversarios: Aniversario[] = []
  for (let y = anoInicio + 1; y * 12 + mesInicio <= fim; y++) {
    const ciclo = mesInicio >= 4 ? y : y - 1
    const indice = ANS[ciclo] ?? ANS[ULTIMO_CICLO]
    aniversarios.push({ ano: y, mes: mesInicio, indice, pelaAns: 0, estimada: 0 })
  }

  const n = aniversarios.length
  const taxa = n ? Math.pow(atual / inicial, 1 / n) : 1
  let pelaAns = inicial
  let estimada = inicial
  for (const a of aniversarios) {
    pelaAns *= 1 + a.indice / 100
    estimada *= taxa
    a.pelaAns = pelaAns
    a.estimada = estimada
  }

  const valorEm = (t: number) => {
    let A = inicial
    let R = inicial
    for (const a of aniversarios) {
      if (a.ano * 12 + a.mes <= t) {
        A = a.pelaAns
        R = a.estimada
      }
    }
    return [A, R] as const
  }

  // Últimos 36 meses (prazo de 3 anos para pedir a devolução)
  const inicio36 = Math.max(ini, fim - 35)
  let total = 0
  for (let t = inicio36; t <= fim; t++) {
    const [A, R] = valorEm(t)
    total += Math.max(0, R - A)
  }
  const [A0] = valorEm(fim)

  return {
    aniversarios,
    mensalidadePelaAns: A0,
    diferencaMensal: Math.max(0, atual - A0),
    totalPagoAMais: total,
    periodoInicio: { ano: Math.floor(inicio36 / 12), mes: inicio36 % 12 },
    periodoFim: { ano: anoHoje, mes: mesHoje },
  }
}

export const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
export const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
