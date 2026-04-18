export const EMAIL_CONFIG = {
  MAX_ACTIVE_EMAILS: 30, // Maximum number of active emails
  POLL_INTERVAL: 10_000, // Polling interval in milliseconds
  DEFAULT_DAILY_SEND_LIMITS: {
    emperor: 0,   // 皇帝无限制
    duke: 5,      // 公爵每日5封
    knight: 2,    // 骑士每日2封
    civilian: -1, // 平民禁止发件
  },
} as const

export type EmailConfig = typeof EMAIL_CONFIG 

export const DEFAULT_EMAIL_DOMAINS = "moemail.app"

export function parseEmailDomains(emailDomains?: string | null) {
  return (emailDomains || DEFAULT_EMAIL_DOMAINS)
    .split(',')
    .map(domain => domain.trim())
    .filter(Boolean)
}

export function normalizeEmailDomains(emailDomains?: string | null) {
  return parseEmailDomains(emailDomains).join(',')
}
