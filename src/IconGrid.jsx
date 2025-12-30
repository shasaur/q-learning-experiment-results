import { useCallback, useState } from 'react'

import agentImg from './assets/agent.png'
import keyImg from './assets/key.png'
import rewardImg from './assets/reward.png'

function getRandomDistinctIndices(count, maxExclusive) {
  if (count > maxExclusive) {
    throw new Error(
      `Cannot pick ${count} distinct indices from range size ${maxExclusive}`
    )
  }

  const picked = new Set()
  while (picked.size < count) {
    picked.add(Math.floor(Math.random() * maxExclusive))
  }
  return Array.from(picked)
}

export default function IconGrid() {
  const gridSize = 3
  const cellCount = gridSize * gridSize

  const [iconPositions, setIconPositions] = useState(() => {
    const [agent, key, reward] = getRandomDistinctIndices(3, cellCount)
    return { agent, key, reward }
  })

  const reshuffleIcons = useCallback(() => {
    const [agent, key, reward] = getRandomDistinctIndices(3, cellCount)
    setIconPositions({ agent, key, reward })
  }, [cellCount])

  return (
    <div
      onClick={reshuffleIcons}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') reshuffleIcons()
      }}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridSize}, 50px)`,
        gridTemplateRows: `repeat(${gridSize}, 50px)`,
        gap: '2px',
        marginBottom: '20px',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      aria-label="Grid (click to reshuffle icons)"
    >
      {Array.from({ length: cellCount }, (_, index) => {
        const row = Math.floor(index / gridSize)
        const col = index % gridSize
        const isBlack = (row + col) % 2 === 0

        let icon = null
        if (index === iconPositions.agent) {
          icon = (
            <img src={agentImg} alt="Agent" style={{ width: 28, height: 28 }} />
          )
        } else if (index === iconPositions.key) {
          icon = <img src={keyImg} alt="Key" style={{ width: 28, height: 28 }} />
        } else if (index === iconPositions.reward) {
          icon = (
            <img src={rewardImg} alt="Reward" style={{ width: 28, height: 28 }} />
          )
        }

        return (
          <div
            key={index}
            style={{
              backgroundColor: isBlack ? '#000' : '#666',
              border: '1px solid #333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </div>
        )
      })}
    </div>
  )
}


