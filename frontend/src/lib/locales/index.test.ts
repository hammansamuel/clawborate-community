import { describe, expect, it } from 'vitest'
import { getT } from './index'

describe('getT', () => {
  it('returns English translations for en', () => {
    expect(getT('en').nav.teams).toBe('Teams')
  })

  it('returns Chinese translations for zh', () => {
    expect(getT('zh').nav.teams).toBe('团队')
  })

  it('falls back to English for unknown locale keys', () => {
    // @ts-expect-error — exercising runtime fallback for invalid lang input
    expect(getT('fr').nav.teams).toBe('Teams')
  })
})