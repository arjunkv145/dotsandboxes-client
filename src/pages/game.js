import React, { useState } from 'react'
import DotsAndBoxes3x3 from '../components/dotsAndBoxes3x3'

function Game() {
    const [game, setGame] = useState({
        checks: [,
            false, false, false,
            false, false, false, false,
            false, false, false,
            false, false, false, false,
            false, false, false,
            false, false, false, false,
            false, false, false
        ]
    })
    return (
        <div>
            <DotsAndBoxes3x3 game={game} setGame={setGame} />
        </div>
  )
}

export default Game