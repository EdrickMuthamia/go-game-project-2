# Go Game MVP

SDFT-14

## 🎯 Features

### Core Gameplay
- **19x19 Traditional Board**: Full-size professional Go board with star points
- **Turn-based Play**: Alternating turns between black and white players
- **Stone Placement**: Click-to-place stones with visual feedback
- **Capture Mechanics**: Automatic capture of opponent stones with no liberties
- **Suicide Prevention**: Invalid moves (including suicide) are prevented
- **Last Move Indicator**: Visual highlighting of the most recent move

### UI/UX
- **Responsive Design**: Clean, modern interface optimized for desktop play
- **Real-time Scoring**: Live count of stones on the board for both players
- **Current Player Display**: Clear indication of whose turn it is
- **Game Reset**: One-click game reset functionality
- **Visual Feedback**: Hover effects and clear stone differentiation

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:EdrickMuthamia/go-game-project.git
   cd GO-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
npm run preview
```

## 🎮 How to Play

1. **Starting the Game**: Black player goes first
2. **Placing Stones**: Click on any empty intersection to place a stone
3. **Capturing**: Surround opponent stones to capture them (stones with no liberties are removed)
4. **Turn Taking**: Players alternate turns automatically
5. **Scoring**: Current stone count is displayed in real-time
6. **Reset**: Use the "RESET GAME" button to start over

### Basic Go Rules Implemented
- ✅ Stone placement on empty intersections
- ✅ Capture by surrounding (removing stones with no liberties)
- ✅ Suicide prevention (cannot place stones that would immediately be captured)
- ✅ Turn alternation
- ❌ Ko rule (preventing immediate recapture) - *Not implemented in MVP*
- ❌ Territory scoring - *Not implemented in MVP*
- ❌ Pass/End game mechanics - *Not implemented in MVP*

## 🏗️ Architecture

### Project Structure
```
src/
├── components/          # React components
│   ├── Board.jsx       # Main game board component
│   ├── Intersection.jsx # Individual board intersection
│   └── ScoreBoard.jsx  # Score display and game controls
├── logic/              # Game logic and state management
│   ├── gameEngine.js   # Core Go game rules and mechanics
│   └── useGoGame.js    # React hook for game state
├── styles/             # CSS styling
│   └── board.css       # Board and game styling
└── types/              # Type definitions
    └── index.js        # JSDoc type definitions
```

### Key Components

#### `gameEngine.js`
- Core game logic implementation
- Board state management
- Capture detection and resolution
- Move validation (including suicide prevention)

#### `useGoGame.js`
- React hook managing game state
- Turn management
- Move execution
- Last move tracking

#### `Board.jsx`
- Renders the 19x19 game board
- Handles user interactions
- Displays star points for traditional board layout

#### `ScoreBoard.jsx`
- Real-time stone counting
- Game reset functionality
- Score display for both players

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Language**: JavaScript (with JSDoc for type safety)
- **Styling**: CSS3 with CSS Grid for board layout
- **Code Quality**: ESLint for code linting

## 🎨 Design Decisions

### Board Rendering
- **CSS Grid Layout**: Efficient 19x19 grid rendering with responsive design
- **Intersection-based**: Each board point is an individual component for precise click handling
- **Visual Hierarchy**: Clear distinction between empty intersections, black stones, and white stones

### State Management
- **React Hooks**: Leveraging `useState` for simple, predictable state management
- **Immutable Updates**: Board state is updated immutably to prevent rendering issues
- **Separation of Concerns**: Game logic separated from UI components

### Performance Considerations
- **Efficient Re-renders**: Strategic use of React keys to optimize board updates
- **Minimal State**: Only essential game state is tracked
- **Pure Functions**: Game logic functions are pure for predictable behavior

## 🔮 Future Enhancements

### Gameplay Features
- [ ] **Ko Rule**: Prevent immediate recapture situations
- [ ] **Pass Mechanism**: Allow players to pass their turn
- [ ] **Territory Scoring**: Implement area-based scoring system
- [ ] **Game End Detection**: Automatic game end when both players pass
- [ ] **Handicap System**: Support for handicap stones for skill balancing

### UI/UX Improvements
- [ ] **Move History**: Display and navigate through game history
- [ ] **Undo Functionality**: Allow players to undo recent moves
- [ ] **Board Size Options**: Support for 9x9 and 13x13 boards
- [ ] **Theme Customization**: Multiple board and stone themes
- [ ] **Sound Effects**: Audio feedback for stone placement and captures

### Technical Enhancements
- [ ] **TypeScript Migration**: Convert to TypeScript for better type safety
- [ ] **Unit Testing**: Comprehensive test coverage for game logic
- [ ] **Multiplayer Support**: Online multiplayer functionality
- [ ] **Game Persistence**: Save/load game states
- [ ] **Mobile Optimization**: Touch-friendly mobile interface

## 📝 Development Notes

### Code Quality
- JSDoc type annotations for better IDE support and documentation
- Consistent naming conventions following React best practices
- Modular architecture for easy testing and maintenance

### Performance
- Efficient board rendering using CSS Grid
- Minimal re-renders through strategic component structure
- Pure function game logic for predictable performance

### Accessibility
- Click-based interactions suitable for various input methods
- Clear visual feedback for all game actions
- Semantic HTML structure where applicable

## 🤝 Contributing

This is an MVP implementation focused on core Go gameplay. Contributions are welcome, particularly for:
- Bug fixes in game logic
- UI/UX improvements
- Performance optimizations
- Documentation enhancements

## 📜 License

MIT
---

**Enjoy playing Go!** 🥌

*This MVP implements the fundamental mechanics of Go while maintaining clean, readable code that can be easily extended with additional features.*
