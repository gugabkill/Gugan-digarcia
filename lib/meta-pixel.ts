// Pixel do Meta (Gerenciador de Eventos, portfólio Di Garcia)
export const META_PIXEL_ID = "__PIXEL_ID__"

type Fbq = (...args: unknown[]) => void

function fbq(): Fbq | undefined {
  if (typeof window === "undefined") return undefined
  return (window as unknown as { fbq?: Fbq }).fbq
}

export function pixelTrack(event: string, params?: Record<string, unknown>) {
  fbq()?.("track", event, params)
}

export function pixelTrackCustom(event: string, params?: Record<string, unknown>) {
  fbq()?.("trackCustom", event, params)
}
