import './App.css'
import SignIn from './components/SignIn'

function App() {
  return (
    <div className="app">
      <div className="top-left">
        <div className="avatar" data-svg-wrapper data-shape="Circle" data-size="Large" data-type="Image">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_32_17)">
              <rect width="40" height="40" fill="url(#pattern0_32_17)" />
            </g>
            <defs>
              <pattern id="pattern0_32_17" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_32_17" transform="scale(0.00195312)" />
              </pattern>
              <clipPath id="clip0_32_17">
                <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ color: '#F9F9F9', fontSize: '16px', fontWeight: 600 }}>Name</div>
          <div style={{ color: '#F9F9F9', fontSize: '16px' }}>Rank</div>
        </div>
      </div>

      <div className="title-block" aria-hidden="true">
        <div className="title">PokeTCG Player</div>

        <svg className="decor-svg bottom-decor" viewBox="0 0 397 85" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M396.992 26.5671C395.667 109.067 196.452 80.0528 196.452 80.0528C196.452 80.0528 1.33043 108.884 0.00769075 26.5671C-1.31505 -55.7495 168.39 80.0528 196.452 80.0528C224.514 80.0528 398.318 -55.9326 396.992 26.5671Z" fill="#D9D9D9" />
        </svg>

        <svg className="decor-svg top-decor" viewBox="0 0 397 85" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0.00753784 58.3996C1.3331 -24.1 200.5 4.96674 200.5 4.96674C200.5 4.96674 395.67 -23.9169 396.992 58.3997C398.315 140.716 228.562 4.96675 200.5 4.96674C172.438 4.96672 -1.31802 140.899 0.00753784 58.3996Z" fill="#f55d5d" />
        </svg>
      </div>

      <div className="content">
        <SignIn />
      </div>
    </div>
  )
}

export default App

