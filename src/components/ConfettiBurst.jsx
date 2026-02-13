import { useState, useEffect } from 'react'

function ConfettiBurst({ x, y, onComplete }) {
    const [confetti, setConfetti] = useState([])

    useEffect(() => {
        // Create confetti pieces
        const pieces = []
        const emojis = ['❤️', '💕', '💖', '💗', '💝', '✨', '🌟', '⭐']

        for (let i = 0; i < 20; i++) {
            const angle = (Math.PI * 2 * i) / 20
            const velocity = 50 + Math.random() * 100
            const xVel = Math.cos(angle) * velocity
            const yVel = Math.sin(angle) * velocity

            pieces.push({
                id: i,
                emoji: emojis[Math.floor(Math.random() * emojis.length)],
                x: xVel,
                y: yVel,
                rotation: Math.random() * 360,
                scale: 0.5 + Math.random() * 0.5,
            })
        }

        setConfetti(pieces)

        // Clean up after animation
        const timer = setTimeout(() => {
            if (onComplete) onComplete()
        }, 800)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <div
            className="fixed pointer-events-none z-50"
            style={{
                left: `${x}px`,
                top: `${y}px`,
            }}
        >
            {confetti.map((piece) => (
                <div
                    key={piece.id}
                    className="absolute confetti-piece text-2xl"
                    style={{
                        '--x': `${piece.x}px`,
                        '--y': `${piece.y}px`,
                        transform: `rotate(${piece.rotation}deg) scale(${piece.scale})`,
                    }}
                >
                    {piece.emoji}
                </div>
            ))}
        </div>
    )
}

export default ConfettiBurst
