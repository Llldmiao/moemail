export const FONT_STYLES = ["pixel", "system", "serif"] as const

export type FontStyle = typeof FONT_STYLES[number]

export const DEFAULT_FONT_STYLE: FontStyle = "pixel"

export function normalizeFontStyle(fontStyle?: string | null): FontStyle {
  return FONT_STYLES.includes(fontStyle as FontStyle)
    ? fontStyle as FontStyle
    : DEFAULT_FONT_STYLE
}
