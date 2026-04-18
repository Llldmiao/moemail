"use client"

import { SessionProvider } from "next-auth/react"
import { FontStyleProvider } from "@/components/theme/font-style-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <FontStyleProvider>
        {children}
      </FontStyleProvider>
    </SessionProvider>
  )
} 
