# Valentine's Week Website - Documentation

## 🌹 What's Been Created

Your `giftslice.js` now contains a complete Redux state management setup for a Valentine's week website with **8 special days**:

1. **Rose Day** (Feb 7) - Love & Beauty 🌹
2. **Propose Day** (Feb 8) - Commitment & Promise 💍
3. **Chocolate Day** (Feb 9) - Sweetness & Joy 🍫
4. **Teddy Day** (Feb 10) - Comfort & Cuddles 🧸
5. **Promise Day** (Feb 11) - Trust & Commitment 🤝
6. **Hug Day** (Feb 12) - Warmth & Affection 🤗
7. **Kiss Day** (Feb 13) - Passion & Romance 💋
8. **Valentine's Day** (Feb 14) - Love & Celebration ❤️

## 📁 Files Created/Modified

### 1. `giftslice.js` - Redux State Management
Contains:
- **State**: 
  - `currentDayIndex`: Tracks which day is currently being displayed
  - `valentineDays`: Array of all 8 days with their details

- **Each Day Object Has**:
  - `day`: Name of the day
  - `date`: Date in February
  - `theme`: Theme of the day
  - `color`: Primary color code
  - `bgGradient`: Tailwind gradient classes
  - `icon`: Emoji icon
  - `message`: Personal message for your girlfriend
  - `description`: What the day represents
  - `gift`: Your gift/promise for that day

- **Actions (Functions)**:
  - `nextDay()`: Move to the next day
  - `previousDay()`: Go back to previous day
  - `goToDay(index)`: Jump to a specific day
  - `resetToFirstDay()`: Go back to Rose Day

### 2. `store.js` - Redux Store Configuration
- Fixed typo: `configurestore` → `configureStore`
- Connected the gift reducer to the store

### 3. `ValentineCard.jsx` - Beautiful UI Component
A stunning, responsive card component featuring:
- Animated icons
- Gradient backgrounds that change per day
- Personal messages
- Navigation buttons
- Day indicators (dots)
- Glassmorphism effects
- Hover animations

### 4. `App.jsx` - Main App
Updated to display the ValentineCard component

### 5. `main.jsx` - Redux Provider Setup
Added Redux Provider to enable state management

## 🎨 How to Customize

### Change Messages
Edit the `message` field in each day object in `giftslice.js`:
```javascript
message: 'Your personalized message here'
```

### Change Gifts
Edit the `gift` field:
```javascript
gift: 'Your special gift description'
```

### Change Colors/Themes
Each day has:
- `color`: Hex color code
- `bgGradient`: Tailwind gradient classes (e.g., `'from-rose-500 to-pink-500'`)

### Add More Features
You can add more fields to each day object like:
- `photos`: Array of image URLs
- `memories`: Special memories
- `playlist`: Song links
- `video`: Video message URL

## 🚀 How It Works

1. **Redux Store** holds all the Valentine's week data
2. **ValentineCard component** reads the current day from the store
3. **User clicks navigation buttons** → dispatches actions
4. **Actions update the state** → component re-renders with new day
5. **Beautiful animations** make transitions smooth

## 💡 Usage Example

```javascript
// In any component
import { useDispatch } from 'react-redux'
import { nextDay, goToDay } from './features/gift/giftslice'

function MyComponent() {
  const dispatch = useDispatch()
  
  // Move to next day
  dispatch(nextDay())
  
  // Jump to Valentine's Day (index 7)
  dispatch(goToDay(7))
}
```

## 🎁 Next Steps

You can enhance this by:
1. Adding photos for each day
2. Creating animations when switching days
3. Adding music/sounds
4. Creating a countdown timer
5. Adding a "reveal" button for each day
6. Storing which days she's already seen
7. Adding a special final surprise on Valentine's Day

## ❤️ Personal Touch

All the messages are heartfelt and romantic. Feel free to customize them to match your relationship and inside jokes!

---

**Your girlfriend is going to love this! 💕**
