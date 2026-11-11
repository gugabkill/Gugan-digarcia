import {
  Wine,
  Ban,
  IdCard,
  ShieldAlert,
  Repeat,
  Truck,
  Gauge,
  Zap,
  CalendarX,
  Hourglass,
  Briefcase,
  Car,
  HeartPulse,
  Bike,
  ShieldX,
  Users,
  Scale,
  FileWarning,
  KeyRound,
  Landmark,
  Gavel,
  Smartphone,
  Percent,
  Receipt,
  Umbrella,
  Calculator,
  FileText,
  Camera,
  UserCheck,
  Building2,
  ClipboardList,
  GraduationCap,
  type LucideIcon,
} from "lucide-react"
import { waLink } from "@/lib/saude"

export type ProdutoTransito = {
  slug: string
  imagem: string
  problema: string
  waMessage: string
  badge: string
  h1: string
  h1Destaque: string
  subtitulo: string
  agirSe: string[]
  casosTitulo: string
  casos: { icon: LucideIcon; title: string; text: string }[]
  quandoProcurar: string[]
  analisamosTitulo: string
  analisamos: string[]
  destaque: { id: string; badge: string; titulo: string; cards: { title: string; itens: string[] }[] }
  entendaTitulo: string
  entenda: string[]
  baseLegal: { title: string; text: string }[]
  documentos: string[]
  textoAdvogado: string
  faqs: { question: string; answer: string }[]
  contatoTitulo: string
}

export const transitoProdutos: Record<string, ProdutoTransito> = {
  "defesa-bafometro": {
    slug: "defesa-bafometro",
    imagem: "/police-officer-conducting-breathalyzer-test-at-nig.jpg",
    problema: "Multa de bafômetro (Lei Seca)",
    waMessage: "Olá! Vim pelo site. Recebi uma multa de bafômetro (Lei Seca) e gostaria de uma análise do caso.",
    badge: "Multa de bafômetro e recusa ao teste",
    h1: "Multado no bafômetro ou por",
    h1Destaque: "recusar o teste?",
    subtitulo:
      "A multa da Lei Seca traz suspensão do direito de dirigir por 12 meses e multa de R$ 2.934,70. Uma defesa técnica analisa cada detalhe da abordagem e do processo para proteger a sua CNH.",
    agirSe: [
      "O resultado do bafômetro deu positivo",
      "Você recusou o teste e foi autuado",
      "Chegou notificação de autuação ou de suspensão",
      "Você depende da CNH para trabalhar",
    ],
    casosTitulo: "Casos que atendemos",
    casos: [
      { icon: Wine, title: "Teste positivo", text: "Autuação pelo art. 165 do CTB após o teste do etilômetro." },
      { icon: Ban, title: "Recusa ao teste", text: "Autuação pelo art. 165-A, com as mesmas penalidades." },
      { icon: IdCard, title: "Suspensão da CNH", text: "Defesa no processo de suspensão do direito de dirigir." },
      { icon: ShieldAlert, title: "CNH recolhida", text: "Orientação após o recolhimento do documento na abordagem." },
      { icon: Repeat, title: "Reincidência", text: "Nova autuação em 12 meses, com risco de cassação." },
      { icon: Truck, title: "Motoristas profissionais", text: "Aplicativo, caminhoneiros e quem vive de dirigir." },
    ],
    quandoProcurar: [
      "Você foi abordado e o teste deu positivo",
      "Recusou o teste e recebeu a notificação da multa",
      "A CNH foi recolhida ou há risco de suspensão",
      "Percebeu erros no procedimento da abordagem",
      "O auto de infração tem dados incompletos ou errados",
      "Você depende da CNH para trabalhar",
      "Já teve outra autuação nos últimos 12 meses",
      "Recebeu notificação e não sabe qual é o prazo",
    ],
    analisamosTitulo: "O que analisamos na defesa",
    analisamos: [
      "Verificação do etilômetro pelo Inmetro",
      "Margem de tolerância aplicada ao resultado",
      "Preenchimento correto do auto de infração",
      "Prazos de expedição das notificações",
      "Como a recusa foi oferecida e registrada",
      "Regularidade do processo de suspensão",
    ],
    destaque: {
      id: "penalidades",
      badge: "O que está em jogo",
      titulo: "As penalidades da Lei Seca",
      cards: [
        { title: "Multa", itens: ["R$ 2.934,70 (dez vezes a multa gravíssima)", "Em dobro na reincidência em 12 meses"] },
        { title: "Suspensão", itens: ["Suspensão do direito de dirigir por 12 meses", "Recolhimento da CNH e retenção do veículo"] },
        { title: "Cassação e crime", itens: ["Reincidência em 12 meses pode levar à cassação", "A partir de 0,3 mg/L, o caso pode ser tratado também como crime"] },
      ],
    },
    entendaTitulo: "Toda autuação precisa seguir o procedimento da lei",
    entenda: [
      "A Lei Seca prevê penalidades pesadas, mas a autuação só é válida se seguir à risca o procedimento previsto no Código de Trânsito e nas resoluções do CONTRAN. Falhas no equipamento, no auto de infração ou nas notificações podem levar à anulação.",
      "A recusa ao teste tem as mesmas penalidades administrativas do resultado positivo. Por isso, a defesa analisa também como a recusa foi oferecida e registrada pelo agente.",
      "Cada etapa tem prazo próprio. Agir logo depois da notificação garante que nenhuma oportunidade de defesa seja perdida, na via administrativa e, se preciso, na Justiça.",
    ],
    baseLegal: [
      { title: "Art. 165 do CTB", text: "Dirigir sob influência de álcool: multa e suspensão por 12 meses." },
      { title: "Art. 165-A do CTB", text: "Recusa ao teste: as mesmas penalidades do art. 165." },
      { title: "Resolução CONTRAN 432/2013", text: "Regras da fiscalização do consumo de álcool pelos agentes." },
    ],
    documentos: [
      "CNH (Carteira Nacional de Habilitação)",
      "Auto de infração ou notificação da multa",
      "Notificação de instauração do processo de suspensão, se já recebeu",
      "CRLV do veículo",
      "Documentos pessoais (RG e CPF)",
      "Fotos, vídeos ou informações sobre a abordagem, se tiver",
    ],
    textoAdvogado:
      "Atuo diariamente em defesas de Lei Seca: teste positivo, recusa ao bafômetro e suspensão da CNH. Analiso cada detalhe da abordagem e do processo para construir a defesa mais forte possível, na esfera administrativa e, se preciso, na Justiça.",
    faqs: [
      {
        question: "Posso recusar o teste do bafômetro?",
        answer:
          "Pode, mas a recusa gera autuação pelo art. 165-A, com as mesmas penalidades administrativas do teste positivo: multa e suspensão por 12 meses. Mesmo assim, existem defesas específicas, especialmente quando há falhas no procedimento.",
      },
      {
        question: "Quais são as penalidades da multa de bafômetro?",
        answer:
          "Multa de R$ 2.934,70, suspensão do direito de dirigir por 12 meses, recolhimento da CNH e retenção do veículo. Na reincidência em 12 meses, a multa dobra e pode haver cassação da habilitação.",
      },
      {
        question: "Qual é o prazo para apresentar defesa?",
        answer:
          "O prazo vem informado na própria notificação e, pela regra atual, não pode ser inferior a 30 dias. Ainda assim, quanto antes a defesa começar, melhor.",
      },
      {
        question: "Posso continuar dirigindo durante o processo?",
        answer:
          "A suspensão só é aplicada depois do processo administrativo, com direito de defesa. A situação do seu documento depende do que aconteceu na abordagem e da fase do processo, por isso analisamos o seu caso para orientar com segurança.",
      },
      {
        question: "Quais são as chances de reverter a multa?",
        answer:
          "Dependem de cada caso. Falhas no equipamento, no auto de infração, nas notificações ou no procedimento da abordagem são alguns dos pontos que podem levar à anulação.",
      },
      {
        question: "A defesa pode ser feita 100% online?",
        answer:
          "Sim. A consulta, o envio de documentos e o acompanhamento do processo podem ser feitos à distância, de qualquer lugar do Brasil.",
      },
      {
        question: "Quanto custa contratar um advogado?",
        answer:
          "O valor depende da fase e da complexidade do caso. A análise inicial é sem compromisso, e o orçamento é apresentado de forma clara antes de qualquer contratação.",
      },
    ],
    contatoTitulo: "Multado na Lei Seca? Fale com a gente.",
  },

  "suspensao-cnh": {
    slug: "suspensao-cnh",
    imagem: "/drivers-license-being-held-with-legal-documents.jpg",
    problema: "Suspensão ou cassação da CNH",
    waMessage: "Olá! Vim pelo site. Recebi uma notificação de suspensão ou cassação da CNH e gostaria de uma análise do caso.",
    badge: "Suspensão e cassação da CNH",
    h1: "A sua CNH vai ser",
    h1Destaque: "suspensa ou cassada?",
    subtitulo:
      "Suspensão por pontos, por infração que suspende diretamente ou cassação: cada processo tem prazos e regras próprias. Analisamos o seu histórico e o processo para defender o seu direito de dirigir.",
    agirSe: [
      "Chegou a notificação de abertura do processo de suspensão",
      "Você atingiu o limite de pontos em 12 meses",
      "Cometeu uma infração que suspende diretamente a CNH",
      "Recebeu notificação de cassação da habilitação",
    ],
    casosTitulo: "Casos que atendemos",
    casos: [
      { icon: Gauge, title: "Suspensão por pontos", text: "Quando a soma de pontos atinge o limite em 12 meses." },
      { icon: Zap, title: "Infrações que suspendem", text: "Lei Seca, racha, excesso de velocidade acima de 50% e outras." },
      { icon: ShieldX, title: "Cassação da CNH", text: "Dirigir com a CNH suspensa e reincidências graves." },
      { icon: FileWarning, title: "Pontos indevidos", text: "Multas com falhas que inflaram a sua pontuação." },
      { icon: CalendarX, title: "Prazo vencido", text: "Processos abertos fora do prazo que a lei permite." },
      { icon: Briefcase, title: "Motoristas profissionais", text: "Quem exerce atividade remunerada ao volante." },
    ],
    quandoProcurar: [
      "Recebeu a notificação de instauração do processo",
      "Está perto do limite de pontos",
      "Não reconhece algumas das multas na sua pontuação",
      "Recebeu notificação de cassação",
      "O processo se refere a infrações antigas",
      "Você depende da CNH para trabalhar",
      "Perdeu algum prazo e não sabe o que fazer",
      "Foi informado de que precisa entregar a CNH",
    ],
    analisamosTitulo: "O que analisamos na defesa",
    analisamos: [
      "Prazo para a abertura do processo (decadência)",
      "Prescrição da punição",
      "Validade de cada notificação recebida",
      "Multas com falhas que somam pontos",
      "Contagem correta do período de 12 meses",
      "Direito ao curso preventivo de reciclagem",
    ],
    destaque: {
      id: "pontuacao",
      badge: "Regras atuais",
      titulo: "Limites de pontos e prazos de suspensão",
      cards: [
        { title: "Limite de pontos em 12 meses", itens: ["20 pontos, com duas ou mais infrações gravíssimas", "30 pontos, com uma infração gravíssima", "40 pontos, sem infração gravíssima"] },
        { title: "Tempo de suspensão", itens: ["De 6 meses a 1 ano, na primeira vez", "De 8 meses a 2 anos, na reincidência em 12 meses"] },
        { title: "Cassação", itens: ["Casos previstos no art. 263 do CTB", "Nova habilitação só depois de 2 anos, com novo processo"] },
      ],
    },
    entendaTitulo: "Suspensão e cassação exigem um processo regular",
    entenda: [
      "A CNH não pode ser suspensa ou cassada sem um processo administrativo com direito de defesa. O órgão de trânsito precisa respeitar prazos para abrir o processo, notificar o condutor e decidir.",
      "Quando esses prazos não são respeitados, ou quando a pontuação inclui multas com falhas, a suspensão pode ser anulada. Por isso, a análise começa pelo histórico completo do condutor e por cada notificação.",
      "Mesmo depois de decisões desfavoráveis no DETRAN, ainda pode haver caminho na Justiça. O importante é não deixar os prazos correrem sem orientação.",
    ],
    baseLegal: [
      { title: "Art. 261 do CTB", text: "Regras de pontuação e tempo de suspensão do direito de dirigir." },
      { title: "Art. 263 do CTB", text: "Hipóteses de cassação da habilitação." },
      { title: "Resolução CONTRAN 723/2018", text: "Procedimentos dos processos de suspensão e cassação." },
    ],
    documentos: [
      "CNH (Carteira Nacional de Habilitação)",
      "Notificação de suspensão ou de cassação",
      "Extrato de pontuação do DETRAN",
      "Autos de infração relacionados",
      "Documentos pessoais (RG e CPF)",
    ],
    textoAdvogado:
      "Atuo em defesas de suspensão e cassação da CNH, com atenção especial aos prazos do processo, à prescrição e à validade de cada notificação. Analiso o seu histórico completo para encontrar a melhor estratégia.",
    faqs: [
      {
        question: "Qual a diferença entre suspensão e cassação da CNH?",
        answer:
          "A suspensão é temporária: o condutor fica de 6 meses a 1 ano sem dirigir (ou de 8 meses a 2 anos na reincidência) e faz curso de reciclagem. A cassação é mais grave: a habilitação é cancelada e só pode ser obtida de novo depois de 2 anos, com novo processo.",
      },
      {
        question: "Quantos pontos levam à suspensão?",
        answer:
          "Em 12 meses: 20 pontos se houver duas ou mais infrações gravíssimas, 30 pontos se houver uma, e 40 pontos se não houver nenhuma infração gravíssima.",
      },
      {
        question: "Posso dirigir durante o processo de suspensão?",
        answer:
          "Em regra, a penalidade só é cumprida depois da decisão final no processo administrativo. Enquanto houver defesa ou recurso em andamento, o caso precisa ser acompanhado de perto para você saber exatamente a sua situação.",
      },
      {
        question: "O processo pode ser anulado por demora do DETRAN?",
        answer:
          "Sim, em várias situações. A lei fixa prazos para a abertura do processo e para a punição. Quando eles são ultrapassados, é possível pedir a anulação.",
      },
      {
        question: "Sou motorista profissional. Existe alguma regra especial?",
        answer:
          "Quem exerce atividade remunerada ao volante pode ter direito a fazer o curso preventivo de reciclagem para evitar a suspensão por pontos. Vale analisar o seu caso.",
      },
      {
        question: "E se eu perdi o prazo de defesa?",
        answer:
          "Ainda pode haver recurso nas fases seguintes e, em alguns casos, ação judicial. Quanto antes você procurar ajuda, mais opções existem.",
      },
      {
        question: "Quanto custa o serviço?",
        answer:
          "O valor depende da fase e da complexidade do caso. A análise inicial é sem compromisso, e o orçamento é apresentado de forma clara antes de qualquer contratação.",
      },
    ],
    contatoTitulo: "CNH em risco? Fale com a gente.",
  },

  "acidentes-transito": {
    slug: "acidentes-transito",
    imagem: "/car-accident-scene-with-damaged-vehicles.jpg",
    problema: "Acidente de trânsito",
    waMessage: "Olá! Vim pelo site. Sofri um acidente de trânsito e gostaria de uma análise do caso.",
    badge: "Acidentes de trânsito e indenizações",
    h1: "Sofreu um",
    h1Destaque: "acidente de trânsito?",
    subtitulo:
      "Quem causou o acidente deve reparar os prejuízos: conserto do veículo, despesas médicas, dias sem trabalhar e danos morais. Cuidamos de cada etapa para que você seja ressarcido de forma justa.",
    agirSe: [
      "O seu veículo foi danificado por outro condutor",
      "Você se machucou ou teve despesas médicas",
      "Ficou sem trabalhar por causa do acidente",
      "A seguradora negou ou ofereceu pouco",
    ],
    casosTitulo: "Casos que atendemos",
    casos: [
      { icon: Car, title: "Veículo danificado", text: "Conserto, perda total, guincho e carro reserva." },
      { icon: HeartPulse, title: "Lesões e despesas médicas", text: "Tratamento, remédios, fisioterapia e sequelas." },
      { icon: Bike, title: "Motoboys e motoristas", text: "Dias parados e renda perdida (lucros cessantes)." },
      { icon: ShieldX, title: "Seguradora que nega", text: "Indenização recusada ou paga abaixo do devido." },
      { icon: Users, title: "Morte de familiar", text: "Danos morais e pensão para os dependentes." },
      { icon: Scale, title: "Acusado de causar", text: "Defesa de quem é apontado como responsável." },
    ],
    quandoProcurar: [
      "Logo depois do acidente, antes de assinar qualquer acordo",
      "Quando a seguradora se recusa a pagar",
      "Se você sofreu lesões no acidente",
      "Se o outro condutor fugiu do local",
      "Quando é chamado para depor ou responder processo",
      "Para calcular o valor correto da indenização",
      "Se a outra parte propõe um acordo informal",
      "Quando o veículo é a sua ferramenta de trabalho",
    ],
    analisamosTitulo: "O que reunimos para o seu caso",
    analisamos: [
      "Boletim de ocorrência e laudo pericial",
      "Fotos, vídeos e câmeras do local",
      "Orçamentos e notas de conserto",
      "Laudos e despesas médicas",
      "Comprovação da renda perdida",
      "Testemunhas do acidente",
    ],
    destaque: {
      id: "danos",
      badge: "Indenização",
      titulo: "Tipos de danos que podem ser indenizados",
      cards: [
        { title: "Danos materiais", itens: ["Conserto do veículo ou perda total", "Guincho, estacionamento e transporte", "Pertences danificados no acidente"] },
        { title: "Danos morais e estéticos", itens: ["Sofrimento e abalo emocional", "Cicatrizes e sequelas permanentes", "Perda de um familiar"] },
        { title: "Lucros cessantes e pensão", itens: ["Renda perdida durante a recuperação", "Redução da capacidade de trabalho", "Pensão para os dependentes"] },
      ],
    },
    entendaTitulo: "Quem causa o acidente tem o dever de reparar",
    entenda: [
      "Pelo Código Civil, quem causa dano a outra pessoa, por imprudência, negligência ou imperícia, tem o dever de indenizar. No trânsito, isso inclui o conserto do veículo, as despesas médicas, a renda perdida e os danos morais.",
      "A prova é o coração do caso: boletim de ocorrência, fotos, câmeras, testemunhas e orçamentos. Quanto antes ela for reunida, mais forte fica o pedido.",
      "Antes de aceitar qualquer acordo com o outro condutor ou com a seguradora, vale calcular o valor correto. Um acordo assinado às pressas pode impedir que você receba tudo o que tem direito.",
    ],
    baseLegal: [
      { title: "Arts. 186 e 927 do Código Civil", text: "Quem causa dano a outra pessoa tem o dever de indenizar." },
      { title: "Art. 206 do Código Civil", text: "Prazo de 3 anos para pedir a indenização na Justiça." },
      { title: "Arts. 302 e 303 do CTB", text: "Homicídio e lesão corporal culposos no trânsito." },
    ],
    documentos: [
      "Boletim de ocorrência, se tiver",
      "Fotos do local e dos veículos",
      "CNH e CRLV dos envolvidos",
      "Dados do seguro, se houver",
      "Laudos e recibos médicos, em caso de lesões",
      "Nome e contato de testemunhas",
      "Orçamentos ou notas fiscais de conserto",
    ],
    textoAdvogado:
      "Atuo em ações de indenização por acidentes de trânsito, buscando a reparação de danos materiais, lucros cessantes e danos morais. Cuido de cada etapa para que você seja ressarcido de forma justa.",
    faqs: [
      {
        question: "O que fazer logo depois de um acidente?",
        answer:
          "Verifique se há feridos e acione o SAMU (192) se precisar. Sinalize o local, fotografe tudo, anote os dados das testemunhas, registre o boletim de ocorrência e não assuma culpa no local. Fale com um advogado antes de fechar qualquer acordo.",
      },
      {
        question: "Quando posso pedir indenização?",
        answer:
          "Sempre que outra pessoa for responsável pelo acidente. A indenização pode incluir danos materiais, danos morais, lucros cessantes e danos estéticos.",
      },
      {
        question: "Qual é o prazo para entrar com a ação?",
        answer:
          "O prazo para pedir indenização contra o causador é de 3 anos. Nas questões com a própria seguradora, o prazo costuma ser menor, por isso é importante agir logo.",
      },
      {
        question: "A seguradora pode recusar a indenização?",
        answer:
          "Só nas hipóteses previstas no contrato e na lei. Recusas sem fundamento ou valores abaixo do devido podem ser contestados, inclusive na Justiça.",
      },
      {
        question: "Como é calculada a indenização?",
        answer:
          "Considera o conserto ou a perda do veículo, as despesas médicas, a renda perdida, os danos morais e estéticos e, nos casos graves, pensão por incapacidade ou para os dependentes.",
      },
      {
        question: "E se eu fui o culpado pelo acidente?",
        answer:
          "Você também tem direito à defesa. É possível discutir a responsabilidade, negociar acordos justos e atuar no processo criminal, quando houver.",
      },
    ],
    contatoTitulo: "Sofreu um acidente? Fale com a gente.",
  },

  "busca-apreensao": {
    slug: "busca-apreensao",
    imagem: "/tow-truck-removing-vehicle-at-night.jpg",
    problema: "Busca e apreensão de veículo",
    waMessage: "Olá! Vim pelo site. O meu veículo está com ação de busca e apreensão e gostaria de uma análise do caso.",
    badge: "Busca e apreensão de veículo",
    h1: "O seu veículo foi",
    h1Destaque: "apreendido pelo banco?",
    subtitulo:
      "Na busca e apreensão, os prazos são de poucos dias. Analisamos o contrato e o processo para defender o seu veículo, negociar com o credor e questionar cobranças abusivas.",
    agirSe: [
      "Você recebeu a citação da ação de busca e apreensão",
      "O veículo já foi apreendido",
      "As parcelas estão atrasadas e o banco ameaça apreender",
      "Você precisa do veículo para trabalhar",
    ],
    casosTitulo: "Casos que atendemos",
    casos: [
      { icon: Gavel, title: "Ação recebida", text: "Defesa logo depois da citação no processo." },
      { icon: KeyRound, title: "Veículo apreendido", text: "Caminhos para recuperar o veículo." },
      { icon: Hourglass, title: "Parcelas atrasadas", text: "Negociação antes que o banco entre na Justiça." },
      { icon: Percent, title: "Juros abusivos", text: "Contrato com cobranças que podem ser revistas." },
      { icon: Landmark, title: "Leilão e saldo devedor", text: "Cobrança do saldo depois da venda do veículo." },
      { icon: Smartphone, title: "Motoristas de aplicativo", text: "Quem depende do carro para trabalhar." },
    ],
    quandoProcurar: [
      "Recebeu a citação da ação de busca e apreensão",
      "O veículo foi apreendido pela financeira",
      "Está com parcelas atrasadas",
      "Recebeu notificação de cobrança do banco",
      "Quer negociar antes da ação judicial",
      "Suspeita de cobranças abusivas no contrato",
      "Não consegue mais pagar as parcelas",
      "Precisa do veículo para trabalhar",
    ],
    analisamosTitulo: "O que analisamos no seu caso",
    analisamos: [
      "Comprovação da mora pelo banco",
      "Regularidade da notificação enviada",
      "Juros e encargos cobrados no contrato",
      "Tarifas e seguros embutidos",
      "Cálculo do saldo devedor",
      "Prazos e atos do processo",
    ],
    destaque: {
      id: "prazos",
      badge: "Atenção aos prazos",
      titulo: "O que acontece depois da apreensão",
      cards: [
        { title: "5 dias", itens: ["Prazo para pagar a dívida pendente e recuperar o veículo", "Conta a partir do cumprimento da liminar"] },
        { title: "15 dias", itens: ["Prazo para apresentar defesa no processo", "Permite questionar o contrato e o procedimento"] },
        { title: "Depois do prazo", itens: ["O banco pode vender o veículo", "E cobrar o saldo que restar da dívida"] },
      ],
    },
    entendaTitulo: "Mesmo com atraso, você tem direitos",
    entenda: [
      "Na busca e apreensão, o banco precisa comprovar o atraso e seguir o procedimento da lei. Falhas na comprovação da mora ou no processo podem ser questionadas.",
      "Depois da apreensão, os prazos são curtos: 5 dias para pagar a dívida pendente e recuperar o veículo, e 15 dias para apresentar defesa. Por isso, o ideal é procurar ajuda assim que receber a citação.",
      "Juros acima da média do mercado, tarifas e seguros embutidos sem escolha podem ser revistos. Em muitos casos, a defesa é feita junto com a revisão do contrato.",
    ],
    baseLegal: [
      { title: "Decreto-Lei 911/1969", text: "Regras da busca e apreensão em contratos com alienação fiduciária." },
      { title: "Entendimento do STJ", text: "Para recuperar o veículo, é preciso pagar a integralidade da dívida pendente." },
      { title: "Código de Defesa do Consumidor", text: "Cláusulas abusivas nos contratos bancários podem ser revistas." },
    ],
    documentos: [
      "Contrato de financiamento",
      "Citação ou notificação da ação",
      "Comprovantes de pagamento das parcelas",
      "CRLV do veículo",
      "Documentos pessoais (RG e CPF)",
      "Auto de apreensão, se o veículo já foi levado",
      "Cartas e mensagens recebidas do banco",
    ],
    textoAdvogado:
      "Atuo na defesa de quem teve o veículo apreendido ou está sob risco de busca e apreensão. Analiso o contrato, a notificação e cada prazo do processo para agir rápido e proteger o seu veículo.",
    faqs: [
      {
        question: "O que é a ação de busca e apreensão?",
        answer:
          "É a ação em que o banco pede a retomada do veículo financiado quando há atraso nas parcelas. O juiz pode conceder uma liminar para a apreensão logo no início do processo.",
      },
      {
        question: "É possível recuperar um veículo já apreendido?",
        answer:
          "Sim. Em até 5 dias depois da apreensão, é possível pagar a dívida pendente e recuperar o veículo. Também há caminhos por meio da defesa no processo e da negociação com o banco.",
      },
      {
        question: "Basta pagar as parcelas atrasadas?",
        answer:
          "Segundo o entendimento do STJ, para recuperar o veículo nesse prazo é preciso pagar a integralidade da dívida pendente, conforme os valores apresentados pelo credor. Por isso, a análise rápida do caso é essencial.",
      },
      {
        question: "Posso contestar a busca e apreensão?",
        answer:
          "Sim. A defesa pode apontar falhas na comprovação da mora, no procedimento e cobranças abusivas no contrato. Cada caso deve ser analisado individualmente.",
      },
      {
        question: "A revisão do contrato ajuda nesse caso?",
        answer:
          "Muitas vezes, sim. A revisão pode questionar juros e cobranças indevidas e reduzir o valor discutido.",
      },
      {
        question: "Quanto custa a defesa?",
        answer:
          "O valor depende da complexidade do caso. A análise inicial é sem compromisso, e o orçamento é apresentado de forma clara antes de qualquer contratação.",
      },
    ],
    contatoTitulo: "Veículo apreendido ou ameaçado? Fale com a gente.",
  },

  "revisional-financiamento": {
    slug: "revisional-financiamento",
    imagem: "/contract-and-car-keys-on-desk-with-calculator.jpg",
    problema: "Revisão de financiamento",
    waMessage: "Olá! Vim pelo site. Gostaria de uma análise do meu contrato de financiamento de veículo.",
    badge: "Revisão de financiamento de veículo",
    h1: "As parcelas do financiamento estão",
    h1Destaque: "pesando demais?",
    subtitulo:
      "Juros muito acima da média do mercado, tarifas e seguros embutidos podem ser revistos. Analisamos o seu contrato para identificar cobranças indevidas e buscar a redução do que você paga.",
    agirSe: [
      "As parcelas parecem não diminuir a dívida",
      "Os juros estão muito acima da média do mercado",
      "Há tarifas ou seguros que você não pediu",
      "Está difícil manter as parcelas em dia",
    ],
    casosTitulo: "O que costuma ser revisto",
    casos: [
      { icon: Percent, title: "Juros acima da média", text: "Taxas muito acima da média divulgada pelo Banco Central." },
      { icon: Umbrella, title: "Seguro embutido", text: "Seguro incluído sem liberdade de escolha (venda casada)." },
      { icon: Receipt, title: "Tarifas indevidas", text: "Cobranças por serviços não prestados ou não permitidos." },
      { icon: Calculator, title: "Saldo devedor", text: "Recálculo da dívida sem as cobranças abusivas." },
      { icon: FileText, title: "Contrato confuso", text: "Cláusulas pouco claras sobre juros e encargos." },
      { icon: Hourglass, title: "Parcelas atrasadas", text: "Revisão aliada à negociação e à defesa." },
    ],
    quandoProcurar: [
      "As parcelas parecem não reduzir o saldo devedor",
      "Os juros do contrato são muito altos",
      "Você paga tarifas que não entende",
      "Há seguros que você não escolheu contratar",
      "O total financiado ficou muito acima do preço do veículo",
      "Está com dificuldade para pagar",
      "Recebeu ameaça de negativação ou de busca e apreensão",
      "Quer saber se está pagando um valor justo",
    ],
    analisamosTitulo: "O que analisamos no contrato",
    analisamos: [
      "Taxa de juros comparada à média do Banco Central",
      "Forma de cobrança dos juros",
      "Tarifas cobradas na contratação",
      "Seguros e serviços incluídos",
      "Encargos em caso de atraso",
      "Cálculo do saldo devedor",
    ],
    destaque: {
      id: "cobrancas",
      badge: "Cobranças comuns",
      titulo: "O que pode estar encarecendo o seu contrato",
      cards: [
        { title: "Juros", itens: ["Taxa muito acima da média do mercado", "Cobrança de juros sem previsão clara"] },
        { title: "Tarifas", itens: ["Tarifas por serviços não prestados", "Cobranças que não são mais permitidas"] },
        { title: "Seguros e encargos", itens: ["Seguro imposto sem escolha", "Encargos de atraso acumulados de forma indevida"] },
      ],
    },
    entendaTitulo: "Contrato bancário também pode ser revisto",
    entenda: [
      "O contrato de financiamento é uma relação de consumo. Cláusulas que colocam o consumidor em desvantagem exagerada podem ser revistas pela Justiça.",
      "Os tribunais admitem a revisão quando os juros ficam muito acima da média de mercado, quando há tarifas por serviços não prestados ou quando o seguro é imposto sem liberdade de escolha.",
      "O resultado depende do contrato de cada pessoa. Por isso, o primeiro passo é uma análise técnica do documento, antes de qualquer promessa de economia.",
    ],
    baseLegal: [
      { title: "Art. 51 do CDC", text: "Cláusulas abusivas nos contratos de consumo são nulas." },
      { title: "Entendimento do STJ", text: "Seguro imposto como condição do financiamento é venda casada." },
      { title: "Taxa média do Banco Central", text: "Referência usada para avaliar se os juros são abusivos." },
    ],
    documentos: [
      "Contrato de financiamento (todas as páginas)",
      "Comprovantes de pagamento das parcelas",
      "Boletos ou carnês",
      "Documentos pessoais (RG e CPF)",
      "CRLV do veículo financiado",
      "Cartas ou notificações do banco, se houver",
    ],
    textoAdvogado:
      "Analiso contratos de financiamento de veículos em busca de juros abusivos, tarifas e seguros indevidos. Explico com clareza o que pode ser revisto antes de qualquer decisão.",
    faqs: [
      {
        question: "O que é a ação revisional?",
        answer:
          "É a ação que pede à Justiça a correção de cláusulas abusivas do contrato, como juros muito acima da média, tarifas indevidas e seguros impostos, o que pode reduzir as parcelas ou o saldo devedor.",
      },
      {
        question: "Quanto posso economizar?",
        answer:
          "Depende das cláusulas do seu contrato. Só a análise técnica mostra o que pode ser revisto e qual é o impacto real no valor que você paga.",
      },
      {
        question: "Posso pedir a revisão mesmo com as parcelas em dia?",
        answer:
          "Sim. A revisão pode ser pedida estando em dia ou em atraso, sempre que houver cobranças abusivas.",
      },
      {
        question: "Preciso parar de pagar durante o processo?",
        answer:
          "Não é recomendado parar de pagar por conta própria. A estratégia de pagamento deve ser definida com o advogado, para não colocar o veículo em risco.",
      },
      {
        question: "Quais cobranças podem ser consideradas abusivas?",
        answer:
          "Juros muito acima da média de mercado, seguros impostos sem escolha, tarifas por serviços não prestados e encargos de atraso cobrados de forma indevida, entre outras.",
      },
      {
        question: "E se o banco entrar com busca e apreensão?",
        answer:
          "A defesa na busca e apreensão pode ser feita junto com a discussão do contrato. O importante é agir rápido, porque os prazos são curtos.",
      },
    ],
    contatoTitulo: "Quer revisar o seu financiamento? Fale com a gente.",
  },

  "defesas-administrativas": {
    slug: "defesas-administrativas",
    imagem: "/administrative-documents-and-detran-forms.jpg",
    problema: "Multa de trânsito",
    waMessage: "Olá! Vim pelo site. Recebi uma multa de trânsito e gostaria de uma análise para recorrer.",
    badge: "Defesa e recurso de multas",
    h1: "Recebeu uma",
    h1Destaque: "multa de trânsito?",
    subtitulo:
      "Muitas multas têm falhas que levam ao cancelamento. Analisamos o auto de infração e as notificações e apresentamos defesas e recursos em todas as instâncias, para evitar pontos e penalidades indevidas.",
    agirSe: [
      "Chegou a notificação de autuação ou de penalidade",
      "Você não reconhece a infração",
      "O auto de infração tem dados errados",
      "A pontuação está perto do limite",
    ],
    casosTitulo: "Casos que atendemos",
    casos: [
      { icon: FileWarning, title: "Auto de infração com falhas", text: "Dados obrigatórios ausentes ou errados." },
      { icon: Camera, title: "Radar e fiscalização eletrônica", text: "Equipamento, aferição e sinalização do local." },
      { icon: UserCheck, title: "Indicação do condutor", text: "Quando quem dirigia era outra pessoa." },
      { icon: Gauge, title: "Pontos perto do limite", text: "Defesas para evitar a suspensão da CNH." },
      { icon: CalendarX, title: "Notificação fora do prazo", text: "Prazos que o órgão de trânsito não respeitou." },
      { icon: Gavel, title: "Recursos à JARI e 2ª instância", text: "Acompanhamento até a decisão final." },
    ],
    quandoProcurar: [
      "Recebeu notificação de multa de trânsito",
      "Encontrou erros no auto de infração",
      "A infração foi cometida por outra pessoa",
      "Está perto do limite de pontos",
      "Recebeu notificação de suspensão da CNH",
      "A multa foi aplicada em local onde você não estava",
      "Suspeita de falha no equipamento de fiscalização",
      "Quer recorrer, mas não sabe como",
    ],
    analisamosTitulo: "O que analisamos na defesa",
    analisamos: [
      "Dados obrigatórios do auto de infração",
      "Prazo de expedição da notificação",
      "Aferição do equipamento eletrônico",
      "Sinalização do local da infração",
      "Identificação do veículo e do condutor",
      "Fundamentação das decisões anteriores",
    ],
    destaque: {
      id: "etapas",
      badge: "Etapas",
      titulo: "As fases da defesa de uma multa",
      cards: [
        { title: "Defesa prévia", itens: ["Apresentada depois da notificação de autuação", "Prazo informado na notificação"] },
        { title: "Recurso à JARI", itens: ["Depois da notificação da penalidade", "Primeira instância de recurso"] },
        { title: "Segunda instância", itens: ["CETRAN ou, no DF, o CONTRANDIFE", "Última fase antes da via judicial"] },
      ],
    },
    entendaTitulo: "Toda multa precisa seguir as regras do CTB",
    entenda: [
      "O auto de infração precisa trazer informações obrigatórias, e as notificações têm prazos que o órgão de trânsito deve respeitar. Quando isso não acontece, a multa pode ser cancelada.",
      "A defesa pode ser feita em três fases: defesa prévia, recurso à JARI e recurso à segunda instância. Cada uma é uma nova chance de cancelar a penalidade.",
      "Em regra, a pontuação só é registrada depois que a penalidade fica definitiva na esfera administrativa, o que torna a defesa ainda mais importante para quem está perto do limite.",
    ],
    baseLegal: [
      { title: "Art. 280 do CTB", text: "Informações obrigatórias do auto de infração." },
      { title: "Art. 281 do CTB", text: "Prazo para o órgão expedir a notificação de autuação." },
      { title: "Arts. 285 a 289 do CTB", text: "Recursos à JARI e à segunda instância." },
    ],
    documentos: [
      "CNH (Carteira Nacional de Habilitação)",
      "CRLV do veículo",
      "Auto de infração ou notificação da multa",
      "Fotos ou vídeos, se tiver",
      "Documentos pessoais (RG e CPF)",
      "Notificações anteriores, se houver",
      "Extrato de pontuação da CNH",
    ],
    textoAdvogado:
      "Atuo em defesas e recursos de multas de trânsito em todas as instâncias administrativas. Analiso o auto de infração e cada notificação para identificar falhas e proteger a sua habilitação.",
    faqs: [
      {
        question: "Qual é o prazo para apresentar defesa?",
        answer:
          "O prazo da defesa prévia vem na notificação de autuação e, pela regra atual, não pode ser inferior a 30 dias. Os recursos à JARI e à segunda instância também têm prazo de 30 dias.",
      },
      {
        question: "Vale a pena recorrer de uma multa?",
        answer:
          "Na maioria dos casos, sim. Muitas multas têm falhas formais ou técnicas que levam ao cancelamento, e a análise mostra se há chances reais.",
      },
      {
        question: "Quais são as falhas mais comuns nas multas?",
        answer:
          "Falta de informações obrigatórias no auto, erro na identificação do veículo, equipamento sem aferição válida, sinalização inadequada e notificação enviada fora do prazo.",
      },
      {
        question: "Se eu perder na JARI, ainda posso recorrer?",
        answer:
          "Sim. Ainda cabe recurso à segunda instância (CETRAN ou, no Distrito Federal, CONTRANDIFE) e, em alguns casos, ação judicial.",
      },
      {
        question: "Os pontos entram na CNH durante o recurso?",
        answer:
          "Em regra, a pontuação só é registrada depois que a penalidade fica definitiva na esfera administrativa.",
      },
      {
        question: "A infração foi cometida por outra pessoa. O que fazer?",
        answer:
          "É possível indicar o condutor dentro do prazo informado na notificação. Se o prazo passou, ainda vale analisar o caso.",
      },
    ],
    contatoTitulo: "Recebeu uma multa? Fale com a gente.",
  },

  "consultoria-preventiva": {
    slug: "consultoria-preventiva",
    imagem: "/professional-consultation-meeting-with-documents.jpg",
    problema: "Consultoria para frotas",
    waMessage: "Olá! Vim pelo site. Gostaria de uma proposta de consultoria jurídica de trânsito para a frota da minha empresa.",
    badge: "Consultoria para empresas com frota",
    h1: "A sua empresa tem",
    h1Destaque: "frota de veículos?",
    subtitulo:
      "Multas, identificação de condutores, documentos e acidentes: cuidamos da parte jurídica de trânsito da sua frota para reduzir custos e proteger a empresa e os motoristas.",
    agirSe: [
      "A empresa recebe muitas multas todo mês",
      "Os condutores nem sempre são indicados no prazo",
      "Motoristas estão perto da suspensão da CNH",
      "Houve acidente com veículo da empresa",
    ],
    casosTitulo: "Serviços para empresas",
    casos: [
      { icon: ClipboardList, title: "Gestão de multas", text: "Acompanhamento e análise de todas as autuações." },
      { icon: UserCheck, title: "Indicação de condutores", text: "Processo para transferir os pontos ao motorista certo." },
      { icon: Gavel, title: "Defesas em lote", text: "Recursos para as multas que podem ser contestadas." },
      { icon: FileText, title: "Documentação", text: "Controle de CNH, CRLV e licenciamentos." },
      { icon: Car, title: "Acidentes com a frota", text: "Orientação imediata, perícias e processos." },
      { icon: GraduationCap, title: "Treinamento", text: "Orientação jurídica para os motoristas." },
    ],
    quandoProcurar: [
      "Alto volume de multas todos os meses",
      "Dificuldade para indicar condutores no prazo",
      "Motoristas com CNH perto da suspensão",
      "Falta de controle sobre vencimentos de documentos",
      "Perda de prazos de defesa e recurso",
      "Multas por não indicação do condutor",
      "Acidentes sem assessoria jurídica",
      "Custos altos com infrações recorrentes",
    ],
    analisamosTitulo: "O que organizamos na sua empresa",
    analisamos: [
      "Fluxo de recebimento das notificações",
      "Prazos de indicação de condutor",
      "Histórico de multas por veículo e motorista",
      "Multas que podem ser contestadas",
      "Vencimentos de documentos",
      "Relatórios para a gestão",
    ],
    destaque: {
      id: "beneficios",
      badge: "Benefícios",
      titulo: "O que a sua empresa ganha",
      cards: [
        { title: "Menos custos", itens: ["Redução do valor pago em multas", "Fim das multas por não indicação"] },
        { title: "Mais controle", itens: ["Processos claros para cada notificação", "Relatórios periódicos"] },
        { title: "Mais segurança", itens: ["Respaldo jurídico em acidentes", "Motoristas orientados e protegidos"] },
      ],
    },
    entendaTitulo: "A empresa responde pelas multas dos seus veículos",
    entenda: [
      "Quando o veículo está no nome da empresa, as multas chegam para ela. Se o condutor não for indicado no prazo, a empresa recebe uma nova multa por não indicação, que pode ser bem mais cara que a original.",
      "Com um processo organizado, cada notificação é analisada, o condutor certo é indicado e as multas com falhas são contestadas.",
      "O resultado é menos gasto, menos risco para os motoristas e mais tempo para a empresa cuidar do próprio negócio.",
    ],
    baseLegal: [
      { title: "Art. 257 do CTB", text: "Responsabilidade pelas infrações e indicação do condutor." },
      { title: "Multa por não indicação", text: "Penalidade aplicada à pessoa jurídica que não indica o condutor." },
      { title: "Arts. 280 a 289 do CTB", text: "Autuação, notificação e recursos." },
    ],
    documentos: [
      "CNPJ e documentos da empresa",
      "Relação dos veículos da frota",
      "CRLV dos veículos",
      "Lista de motoristas e CNHs",
      "Histórico de multas dos últimos 12 meses",
      "Contratos de locação, se houver",
    ],
    textoAdvogado:
      "Atendo empresas de todos os tamanhos na gestão jurídica de trânsito da frota, com processos claros, prazos sob controle e defesas técnicas.",
    faqs: [
      {
        question: "Como funciona a gestão de multas da frota?",
        answer:
          "Acompanhamos todas as notificações, analisamos cada multa, indicamos os condutores no prazo e apresentamos defesa quando há falhas. Você recebe relatórios periódicos.",
      },
      {
        question: "A empresa responde pelas multas dos motoristas?",
        answer:
          "As multas chegam para a empresa proprietária. Por isso é essencial indicar o condutor dentro do prazo, para que os pontos vão para quem dirigia e para evitar a multa por não indicação.",
      },
      {
        question: "Vale a pena recorrer das multas da frota?",
        answer:
          "Sim, quando há falhas. Em frotas com muitos veículos, contestar as multas com problemas representa economia relevante ao longo do ano.",
      },
      {
        question: "Vocês atendem empresas de qualquer tamanho?",
        answer:
          "Sim. O serviço é ajustado ao volume de veículos e às necessidades de cada empresa.",
      },
      {
        question: "Vocês ajudam em acidentes com veículos da empresa?",
        answer:
          "Sim. Damos orientação imediata, acompanhamos perícias e atuamos nos processos que surgirem.",
      },
    ],
    contatoTitulo: "Quer uma proposta para a sua frota? Fale com a gente.",
  },
}

export function produtoTransitoWa(p: ProdutoTransito) {
  return waLink(p.waMessage)
}

export const transitoMenu = [
  { href: "/transito", label: "Direito de Trânsito" },
  { href: "#casos", label: "Casos" },
  { href: "#quando-procurar", label: "Quando procurar" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
]

export const transitoLinks = [
  { label: "Multa de Bafômetro", href: "/servicos/defesa-bafometro" },
  { label: "Suspensão e Cassação da CNH", href: "/servicos/suspensao-cnh" },
  { label: "Acidentes de Trânsito", href: "/servicos/acidentes-transito" },
  { label: "Defesas Administrativas", href: "/servicos/defesas-administrativas" },
  { label: "Revisão de Financiamento", href: "/servicos/revisional-financiamento" },
  { label: "Busca e Apreensão", href: "/servicos/busca-apreensao" },
  { label: "Consultoria para Frotas", href: "/servicos/consultoria-preventiva" },
]
