import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextDay, previousDay, goToDay, resetToFirstDay } from '../features/gift/giftslice'
import BouquetModal from './BouquetModal'
import ProposeModal from './ProposeModal'
import ChocolateModal from './ChocolateModal'
import TeddyModal from './TeddyModal'
import PromiseModal from './PromiseModal'
import HugModal from './HugModal'
import KissModal from './KissModal'
import ValentineModal from './ValentineModal'
import ConfettiBurst from './ConfettiBurst'

function ValentineCard({ onDayViewed }) {
    const dispatch = useDispatch()
    const { currentDayIndex, valentineDays } = useSelector((state) => state.gift)
    const currentDay = valentineDays[currentDayIndex]
    const [isBouquetOpen, setIsBouquetOpen] = useState(false)
    const [isProposeOpen, setIsProposeOpen] = useState(false)
    const [isChocolateOpen, setIsChocolateOpen] = useState(false)
    const [isTeddyOpen, setIsTeddyOpen] = useState(false)
    const [isPromiseOpen, setIsPromiseOpen] = useState(false)
    const [isHugOpen, setIsHugOpen] = useState(false)
    const [isKissOpen, setIsKissOpen] = useState(false)
    const [isValentineOpen, setIsValentineOpen] = useState(false)
    const [cardKey, setCardKey] = useState(0)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const [confetti, setConfetti] = useState(null)

    // Trigger card animation when day changes
    useEffect(() => {
        setCardKey(prev => prev + 1)
    }, [currentDayIndex])

    // 3D tilt effect on mouse move
    const handleMouseMove = (e) => {
        const card = e.currentTarget
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20

        setTilt({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 })
    }

    // Helper to open modal and track viewing with confetti
    const openModal = (setModalOpen, dayIndex, event) => {
        // Trigger confetti at click position
        if (event) {
            const rect = event.currentTarget.getBoundingClientRect()
            setConfetti({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            })
        }

        setModalOpen(true)
        if (onDayViewed) {
            onDayViewed(dayIndex)
        }
    }

    // Special handler for "Will you be my Valentine?" answer
    const handleValentineAnswer = (answer, event) => {
        if (answer === 'yes') {
            openModal(setIsValentineOpen, 7, event)
        } else {
            // Move the "No" button or show a funny message (optional enhancement)
            alert("Wrong answer! Try again 😜")
        }
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 py-8 md:py-0 bg-pink-50/50 overflow-y-auto">
            {/* Background Image Overlay */}
            <div
                className="fixed inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'url(https://www.transparenttextures.com/patterns/hearts.png)',
                }}
            ></div>

            <div className="max-w-6xl w-full relative z-10">
                {/* Main Card Container - Postcard Style */}
                <div key={cardKey} className="animate-slideInUp bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-0 md:min-h-[600px] border-8 border-white">

                    {/* Left Side: Hero Image */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden shrink-0">
                        <img
                            src={currentDay.image}
                            alt={currentDay.day}
                            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://media.tenor.com/uR6l7z9m9xAAAAAM/milk-and-mocha-heart.gif";
                            }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${currentDay.bgGradient} opacity-20`}></div>

                        {/* Day Label Badge */}
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg z-10">
                            <span className="text-pink-600 font-bold tracking-wider text-xs md:text-sm uppercase">
                                Day {currentDayIndex + 1} • {currentDay.date}
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Content & Message */}
                    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white relative grow">
                        {/* Decorative background elements on right side */}
                        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-bl-[50%] -z-0"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-rose-50 rounded-tr-[50%] -z-0"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between md:justify-center">
                            {/* Header */}
                            <div className="text-center mb-6 md:mb-8 mt-2 md:mt-0">
                                <div className="text-5xl md:text-6xl mb-2 md:mb-4 animate-bounce inline-block">{currentDay.icon}</div>
                                <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-3 text-gray-800" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                                    {currentDay.day}
                                </h1>
                                <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-pink-300 to-rose-400 mx-auto rounded-full"></div>
                                <p className="mt-2 md:mt-3 text-rose-500 font-medium tracking-wide uppercase text-xs md:text-sm">
                                    {currentDay.theme}
                                </p>
                            </div>

                            {/* Message Area */}
                            <div className="mb-6 md:mb-8 text-center px-2">
                                <p className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed italic" style={{ fontFamily: '"Crimson Text", serif' }}>
                                    "{currentDay.message}"
                                </p>
                            </div>

                            {/* Day 8 Special Layout: Proposal Buttons */}
                            {currentDayIndex === 7 ? (
                                <div className="flex flex-col gap-4 items-center animate-fadeIn w-full">
                                    <p className="text-base md:text-lg font-semibold text-rose-600 mb-2">My Dearest Lintuu...</p>
                                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                                        <button
                                            onClick={(e) => handleValentineAnswer('yes', e)}
                                            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse"
                                        >
                                            Absolutely! 💖
                                        </button>
                                        <button
                                            onClick={(e) => handleValentineAnswer('no', e)}
                                            className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full font-medium text-base md:text-lg transition-all duration-300 transform hover:rotate-2"
                                        >
                                            Ummm... 🤔
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                /* Standard Day Layout: Gift Action Button */
                                <div className="text-center w-full">
                                    {/* Action Buttons based on day index */}
                                    {currentDayIndex === 0 && (
                                        <button onClick={(e) => openModal(setIsBouquetOpen, 0, e)} className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                                            <span className="mr-2 group-hover:animate-spin inline-block">🌹</span> Receive My Rose
                                        </button>
                                    )}
                                    {currentDayIndex === 1 && (
                                        <button onClick={(e) => openModal(setIsProposeOpen, 1, e)} className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                                            <span className="mr-2 group-hover:animate-bounce inline-block">💍</span> See The Question
                                        </button>
                                    )}
                                    {currentDayIndex === 2 && (
                                        <button onClick={(e) => openModal(setIsChocolateOpen, 2, e)} className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                                            <span className="mr-2 group-hover:animate-bounce inline-block">🍫</span> Open Sweet Box
                                        </button>
                                    )}
                                    {currentDayIndex === 3 && (
                                        <button onClick={(e) => openModal(setIsTeddyOpen, 3, e)} className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                                            <span className="mr-2 group-hover:animate-pulse inline-block">🧸</span> Hug The Teddy
                                        </button>
                                    )}
                                    {currentDayIndex === 4 && (
                                        <button onClick={(e) => openModal(setIsPromiseOpen, 4, e)} className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                                            <span className="mr-2 group-hover:animate-bounce inline-block">🤝</span> Read My Promise
                                        </button>
                                    )}
                                    {currentDayIndex === 5 && (
                                        <button onClick={(e) => openModal(setIsHugOpen, 5, e)} className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                                            <span className="mr-2 group-hover:animate-ping inline-block">🤗</span> Feel The Warmth
                                        </button>
                                    )}
                                    {currentDayIndex === 6 && (
                                        <button onClick={(e) => openModal(setIsKissOpen, 6, e)} className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                                            <span className="mr-2 group-hover:animate-pulse inline-block">💋</span> Catch A Kiss
                                        </button>
                                    )}
                                </div>
                            )}

                            {/* Navigation Controls */}
                            <div className="flex justify-between items-center mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-100 w-full">
                                <button
                                    onClick={() => dispatch(previousDay())}
                                    disabled={currentDayIndex === 0}
                                    className="text-gray-400 hover:text-rose-500 disabled:opacity-30 disabled:hover:text-gray-400 transition-colors flex items-center gap-1 md:gap-2 font-medium text-sm md:text-base px-2 py-2"
                                >
                                    ← Prev
                                </button>

                                <div className="flex gap-1.5 md:gap-2 overflow-x-auto px-2 max-w-[200px] md:max-w-none no-scrollbar">
                                    {valentineDays.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => dispatch(goToDay(index))}
                                            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 shrink-0 ${index === currentDayIndex ? 'bg-rose-500 w-4 md:w-6' : 'bg-gray-200 hover:bg-rose-300'}`}
                                            title={`Go to Day ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={() => dispatch(nextDay())}
                                    disabled={currentDayIndex === valentineDays.length - 1}
                                    className="text-gray-500 hover:text-rose-500 disabled:opacity-30 disabled:hover:text-gray-500 transition-colors flex items-center gap-1 md:gap-2 font-medium text-sm md:text-base px-2 py-2"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals remain the same */}
            <BouquetModal isOpen={isBouquetOpen} onClose={() => setIsBouquetOpen(false)} />
            <ProposeModal isOpen={isProposeOpen} onClose={() => setIsProposeOpen(false)} />
            <ChocolateModal isOpen={isChocolateOpen} onClose={() => setIsChocolateOpen(false)} />
            <TeddyModal isOpen={isTeddyOpen} onClose={() => setIsTeddyOpen(false)} />
            <PromiseModal isOpen={isPromiseOpen} onClose={() => setIsPromiseOpen(false)} />
            <HugModal isOpen={isHugOpen} onClose={() => setIsHugOpen(false)} />
            <KissModal isOpen={isKissOpen} onClose={() => setIsKissOpen(false)} />
            <ValentineModal isOpen={isValentineOpen} onClose={() => setIsValentineOpen(false)} />

            {/* Confetti burst effect */}
            {confetti && (
                <ConfettiBurst
                    x={confetti.x}
                    y={confetti.y}
                    onComplete={() => setConfetti(null)}
                />
            )}
        </div>
    )
}

export default ValentineCard
