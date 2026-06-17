import { describe, expect, it } from 'vitest'
import { teamAccent, teamGradient } from './teamColor'

describe('teamColor', () => {
  it('returns deterministic gradient for the same team id', () => {
    const id = 'team-abc-123'
    expect(teamGradient(id)).toBe(teamGradient(id))
    expect(teamGradient(id)).toMatch(/^linear-gradient\(/)
  })

  it('returns deterministic accent for the same team id', () => {
    const id = 'team-abc-123'
    expect(teamAccent(id)).toBe(teamAccent(id))
    expect(teamAccent(id)).toMatch(/^#[0-9a-f]{6}$/i)
  })

  it('can map different team ids to different palette slots', () => {
    const gradients = new Set(['a', 'b', 'c', 'd', 'e'].map(teamGradient))
    expect(gradients.size).toBeGreaterThan(1)
  })
})