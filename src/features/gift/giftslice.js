import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    currentDayIndex: 0,
    valentineDays: [
        {
            id: nanoid(),
            day: 'Rose Day',
            date: 'February 7',
            theme: 'Love & Beauty',
            color: '#FF1744',
            bgGradient: 'from-rose-500 to-pink-500',
            icon: '🌹',
            image: '/images/rose.jpg', // Local Image for Rose Day
            message: 'Like a rose, you bring beauty and joy to my life every single day.',
            description: 'A day to express love through the timeless symbol of roses.',
            gift: 'A bouquet of red roses symbolizing my eternal love for you.'
        },
        {
            id: nanoid(),
            day: 'Propose Day',
            date: 'February 8',
            theme: 'Commitment & Promise',
            color: '#E91E63',
            bgGradient: 'from-pink-500 to-rose-600',
            icon: '💍',
            image: '/images/propose.jpg', // Local Image for Propose Day
            message: 'Every day with you feels like a dream. Will you continue being my forever?',
            description: 'A day to express your feelings and propose your love.',
            gift: 'My heart, my time, and my promise to love you endlessly.'
        },
        {
            id: nanoid(),
            day: 'Chocolate Day',
            date: 'February 9',
            theme: 'Sweetness & Joy',
            color: '#6D4C41',
            bgGradient: 'from-amber-700 to-orange-600',
            icon: '🍫',
            image: '/images/chocolate.avif', // Local Image for Chocolate Day
            message: 'You\'re sweeter than the sweetest chocolate in the world!',
            description: 'Celebrate the sweetness of your relationship with chocolates.',
            gift: 'A box of your favorite chocolates, as sweet as our memories together.'
        },
        {
            id: nanoid(),
            day: 'Teddy Day',
            date: 'February 10',
            theme: 'Comfort & Cuddles',
            color: '#8D6E63',
            bgGradient: 'from-orange-400 to-amber-500',
            icon: '🧸',
            image: '/images/teddy.avif', // Local Image for Teddy Day
            message: 'Just like a teddy bear, I want to be your comfort and warmth always.',
            description: 'Gift a cuddly teddy to show your affection and care.',
            gift: 'A soft teddy bear to remind you of my warm hugs.'
        },
        {
            id: nanoid(),
            day: 'Promise Day',
            date: 'February 11',
            theme: 'Trust & Commitment',
            color: '#9C27B0',
            bgGradient: 'from-purple-500 to-pink-500',
            icon: '🤝',
            image: '/images/promise.jpg', // Local Image for Promise Day
            message: 'I promise to stand by you, support you, and love you unconditionally.',
            description: 'Make meaningful promises to strengthen your bond.',
            gift: 'My promise to always be there for you, through thick and thin.'
        },
        {
            id: nanoid(),
            day: 'Hug Day',
            date: 'February 12',
            theme: 'Warmth & Affection',
            color: '#E91E63',
            bgGradient: 'from-pink-400 to-purple-500',
            icon: '🤗',
            image: '/images/hug.jpeg', // Local Image for Hug Day
            message: 'In your arms, I find my home, my peace, and my happiness.',
            description: 'Express your love through warm and comforting hugs.',
            gift: 'A thousand virtual hugs until I can hold you in my arms.'
        },
        {
            id: nanoid(),
            day: 'Kiss Day',
            date: 'February 13',
            theme: 'Passion & Romance',
            color: '#F50057',
            bgGradient: 'from-red-500 to-pink-600',
            icon: '💋',
            image: '/images/kiss.jpg', // Local Image for Kiss Day
            message: 'Every kiss with you feels like the first time - magical and unforgettable.',
            description: 'Celebrate romance and intimacy with your loved one.',
            gift: 'All my kisses, sealed with love and devotion.'
        },
        {
            id: nanoid(),
            day: 'Valentine\'s Day',
            date: 'February 14',
            theme: 'Love & Celebration',
            color: '#D32F2F',
            bgGradient: 'from-red-600 to-rose-600',
            icon: '❤️',
            image: '/images/valentine.jpg', // Local Image for Valentine's Day
            message: 'Happy Valentine\'s Day, my love! You are my everything, today and always.',
            description: 'The ultimate day to celebrate love in all its forms.',
            gift: 'My heart, my soul, and my eternal love - all yours forever.'
        }
    ]
}

export const giftSlice = createSlice({
    name: 'gift',
    initialState,
    reducers: {
        nextDay: (state) => {
            if (state.currentDayIndex < state.valentineDays.length - 1) {
                state.currentDayIndex += 1
            }
        },
        previousDay: (state) => {
            if (state.currentDayIndex > 0) {
                state.currentDayIndex -= 1
            }
        },
        goToDay: (state, action) => {
            const index = action.payload
            if (index >= 0 && index < state.valentineDays.length) {
                state.currentDayIndex = index
            }
        },
        resetToFirstDay: (state) => {
            state.currentDayIndex = 0
        }
    }
})

export const { nextDay, previousDay, goToDay, resetToFirstDay } = giftSlice.actions

export default giftSlice.reducer