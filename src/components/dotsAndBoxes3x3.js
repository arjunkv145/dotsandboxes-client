import React from 'react'

function DotsAndBoxes3x3({ game, setGame }) {
    const { checks } = game
    const handleCheck = e => setGame(prev => {
        const tempChecks = [...prev.checks]
        tempChecks[e.target.name.split('_')[1]] = true
        return ({
            ...prev,
            checks: [...tempChecks]
        })
    })
    return (
        <div className='game-board-3x3'>
            <div className='horizontal'>
                <input type='radio' name='check_1' onChange={handleCheck} checked={checks[1]} />
                <input type='radio' name='check_2' onChange={handleCheck} checked={checks[2]} />
                <input type='radio' name='check_3' onChange={handleCheck} checked={checks[3]} />
            </div>
            <div className='vertical'>
                <input type='radio' name='check_4' onChange={handleCheck} checked={checks[4]} />
                <input type='radio' name='check_5' onChange={handleCheck} checked={checks[5]} />
                <input type='radio' name='check_6' onChange={handleCheck} checked={checks[6]} />
                <input type='radio' name='check_7' onChange={handleCheck} checked={checks[7]} />
            </div>
            <div className='horizontal'>
                <input type='radio' name='check_8' onChange={handleCheck} checked={checks[8]} />
                <input type='radio' name='check_9' onChange={handleCheck} checked={checks[9]} />
                <input type='radio' name='check_10' onChange={handleCheck} checked={checks[10]} />
            </div>
            <div className='vertical'>
                <input type='radio' name='check_11' onChange={handleCheck} checked={checks[11]} />
                <input type='radio' name='check_12' onChange={handleCheck} checked={checks[12]} />
                <input type='radio' name='check_13' onChange={handleCheck} checked={checks[13]} />
                <input type='radio' name='check_14' onChange={handleCheck} checked={checks[14]} />
            </div>
            <div className='horizontal'>
                <input type='radio' name='check_15' onChange={handleCheck} checked={checks[15]} />
                <input type='radio' name='check_16' onChange={handleCheck} checked={checks[16]} />
                <input type='radio' name='check_17' onChange={handleCheck} checked={checks[17]} />
            </div>
            <div className='vertical'>
                <input type='radio' name='check_18' onChange={handleCheck} checked={checks[18]} />
                <input type='radio' name='check_19' onChange={handleCheck} checked={checks[19]} />
                <input type='radio' name='check_20' onChange={handleCheck} checked={checks[20]} />
                <input type='radio' name='check_21' onChange={handleCheck} checked={checks[21]} />
            </div>
            <div className='horizontal'>
                <input type='radio' name='check_22' onChange={handleCheck} checked={checks[22]} />
                <input type='radio' name='check_23' onChange={handleCheck} checked={checks[23]} />
                <input type='radio' name='check_24' onChange={handleCheck} checked={checks[24]} />
            </div>
            <div className='dots'>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default DotsAndBoxes3x3