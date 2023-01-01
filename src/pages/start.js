import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Start() {
    const [player, setPlayer] = useState('')
    const [error, setError] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    const handleChange = e => {
        setPlayer(e.target.value)
        localStorage.setItem('player', JSON.stringify(e.target.value))
    }

    const checkError = useCallback(() => {
        if (player === '') {
            setError('Player name is required')
            return false
        }
        setError('')
        return true
    }, [player])

    const room = (roomType, gameType = '') => checkError() && navigate('/game', { state: { player, roomType, gameType } })
    const openModal = () => checkError() && setModal(true)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('player'))
        if (data !== undefined && data !== null && typeof data === 'string' && data !== '') {
            setPlayer(data)
        }
    }, [])

    useEffect(() => {
        checkError()
    }, [player, checkError])

    return (
        <div>
            <h1>Dots and Boxes</h1>
            <div>
                <input
                    type='text'
                    placeholder='Enter player name'
                    value={player}
                    onChange={handleChange}
                    onBlur={() => setIsTouched(true)}
                />
                { error && isTouched && <span>{error}</span> }
            </div>
            <div>
                <button onClick={openModal}>Create room</button>
                <button onClick={() => room('join')}>Join room</button>
            </div>
            <div>
                <button onClick={() => room('create', '3x3')} >3x3</button>
                <button onClick={() => room('create', '5x5')} >5x5</button>
            </div>
        </div>
    )
}

export default Start