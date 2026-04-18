"use client"

import { useEffect } from "react"
import { DEFAULT_FONT_STYLE } from "@/config"
import { useConfig } from "@/hooks/use-config"

export function FontStyleProvider({ children }: { children: React.ReactNode }) {
  const { config } = useConfig()
  const fontStyle = config?.fontStyle || DEFAULT_FONT_STYLE

  useEffect(() => {
    document.documentElement.dataset.fontStyle = fontStyle
  }, [fontStyle])

  return children
}
