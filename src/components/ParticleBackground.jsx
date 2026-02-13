import { useEffect, useRef } from 'react'

function ParticleBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        // Particle class
        class Particle {
            constructor() {
                this.reset()
            }

            reset() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 3 + 1
                this.speedX = Math.random() * 0.5 - 0.25
                this.speedY = Math.random() * 0.5 - 0.25
                this.opacity = Math.random() * 0.5 + 0.3
                this.pulseSpeed = Math.random() * 0.02 + 0.01
                this.pulsePhase = Math.random() * Math.PI * 2
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY
                this.pulsePhase += this.pulseSpeed

                // Wrap around screen
                if (this.x > canvas.width) this.x = 0
                if (this.x < 0) this.x = canvas.width
                if (this.y > canvas.height) this.y = 0
                if (this.y < 0) this.y = canvas.height
            }

            draw() {
                const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7
                ctx.fillStyle = `rgba(255, 182, 193, ${this.opacity * pulse})`
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2)
                ctx.fill()

                // Add sparkle effect
                if (Math.random() > 0.98) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`
                    ctx.beginPath()
                    ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2)
                    ctx.fill()
                }
            }
        }

        // Create particles
        const particles = []
        const particleCount = 80
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            requestAnimationFrame(animate)
        }

        animate()

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.4 }}
        />
    )
}

export default ParticleBackground
