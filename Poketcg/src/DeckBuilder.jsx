import React, { createElement } from 'react';
import './App.css'
import { useState } from 'react';
import {Card, CardDisplay} from './components/Card';
import TCGdex from '@tcgdex/sdk'
import SearchField from './components/SearchField';

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

      {/* SVG Component */}
      <SearchField tcgdex={tcgdex} />

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

async function addCardToDeck(id, tcgdex) {
  const cards= await tcgdex.card.list(new Query().equal('name', "Furret"));
  console.log(cards[0]);
  return cards[0];
}

function renderSearchResults(cards) {
     let y=0;
    return () => {
      cards.map((card) => {
        CardDisplay(card.image, y);
        y+=120;
      })
    }
}