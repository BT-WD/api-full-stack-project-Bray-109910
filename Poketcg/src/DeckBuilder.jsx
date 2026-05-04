import React from 'react';
import './App.css'
import { useState } from 'react';
import Card from './components/Card';
import TCGdex from '@tcgdex/sdk'

const DeckBuilder = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const tcgdex = new TCGdex('en');
  return (
    <div className="app">
      <div className='title' style={{ top: '10%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute', color: '#F9F9F9', fontSize: '32px', fontWeight: 700 }}>
        Deck Builder
      </div>
      {/* Left Panel */}
      <div
        style={{
          width: '227px',
          height: '100%',
          left: '0px',
          top: '113px',
          position: 'absolute',
          background: '#D9D9D9',
        }}
      >
        <Cardinfo ability="Fire Blast" move1="Flame Thrower" move2="Dragon Claw" retreat="2" />
      </div>
      {/* Right Panel */}
      <div
      className='right-panel'
        style={{
          width: '227px',
          height: '100%',
          left: '85%',
          top: '113px',
          position: 'absolute',
          background: '#D9D9D9',
        }}
      >
      </div>

      {/* SVG Component */}
      <SVGComponent />

      {/* Profile Info Section */}
      <ProfileInfo />
      <script src="https://cdn.jsdelivr.net/npm/@tcgdex/sdk@2/dist/tcgdex.browser.global.min.js"></script>
        </div>
  );
};
export default DeckBuilder

const Cardinfo = (props) => {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '10px' }}>
        <image src="" alt="Card Image" style={{ width: '100%', height: 'auto' }} />
        <div style={{ color: 'black', fontSize: '20px' }}>{"Ability: " + props.ability}</div>
        <div style={{ color: 'black', fontSize: '20px' }}>{ props.move1}</div>
        <div style={{ color: 'black', fontSize: '20px' }}>{ props.move2}</div>
        <div style={{ color: 'black', fontSize: '20px' }}>{"Retreat: " + props.retreat}</div>
      </div>
  );
}
const SVGComponent = () => (
  <div
    style={{
      left: '86.5%',
      top: '129.13px',
      position: 'absolute',
    }}
  >
    <svg width="190" height="82" viewBox="0 0 190 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M189.986 43.7803C189.986 55.1625 189.986 60.8536 185.817 65.3682C179.782 71.9029 167.713 77.077 152.471 79.6643C141.941 81.4518 128.666 81.4518 102.117 81.4518H87.8685C61.3196 81.4518 48.0451 81.4517 37.5148 79.6643C22.2726 77.077 10.204 71.9029 4.16921 65.3682C-3.39721e-06 60.8536 -2.31752e-06 55.1625 3.46447e-09 43.7803L1.24915e-06 37.6714C3.57013e-06 26.2892 4.81272e-06 20.5981 4.16922 16.0836C10.204 9.54883 22.2726 4.37472 37.5149 1.78744C48.0451 -1.45647e-06 61.3196 -9.9358e-07 87.8685 1.48391e-09L102.117 5.35539e-07C128.666 1.5306e-06 141.941 2.06333e-06 152.471 1.78745C167.713 4.37473 179.782 9.54884 185.817 16.0836C189.986 20.5981 189.986 26.2892 189.986 37.6714V43.7803Z"
        fill="#7F47AA"
      />
    </svg>
    <div className="field" style={{ position: 'absolute', top: '20px', left: '20px' }}>
            <div className="field-label" style={{justifySelf: "left"}}>Search Cards</div>
            <input
              className="Pass"
              placeholder="Search for cards"
              style={{background: 'black', color: 'white', height: '20px', width: '140px', borderRadius: '4px', padding: '5px', top: '-11px', left: '0px', position: 'relative' }}
            onKeyDown={ (event) => { if(event.key === 'Enter') addCardToDeck("furret") } }
            />
    </div>
  </div>
);
const ProfileInfo = () => (
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

);

async function addCardToDeck(name) {
  let card=await tcgdex.random.card()
  console.log(card);
}