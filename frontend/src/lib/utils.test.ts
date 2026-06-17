import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { formatTime } from './utils'

describe('formatTime', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-06-16T14:05:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('formats time as 24-hour HH:MM', () => {
    expect(formatTime()).toBe('14:05')
  })
})