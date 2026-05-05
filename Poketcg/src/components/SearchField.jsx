import { useState, useRef } from "react";
import {Card, CardDisplay} from './Card';
import TCGdex from '@tcgdex/sdk'
import { Query } from '@tcgdex/sdk';

export default function SearchField({ tcgdex }) {
  const [cards, setCards] = useState([]);
  const inputRef = useRef(null);

  const handleSearch = async () => {
    const query = inputRef.current.value;
    console.log('searching for', query);

    const results = await tcgdex.card.list(
      new Query().like('name', query).paginate(1, 10)
    );

    console.log(cards[0]);
    setCards(results);
  };

  return (
    
  <div>
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
          <div
    style={{
      left: '0',
      top: '0',
      position: 'relative',
    }}
  >
<div
  className="field"
  style={{
    position: "relative",
    left: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "190px",
    height: "82px",
  }}
>
  <svg
    width="190"
    height="82"
    viewBox="0 0 190 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", top: 0, left: 0 }}
  >
    <path
      d="M189.986 43.7803C189.986 55.1625 189.986 60.8536 185.817 65.3682C179.782 71.9029 167.713 77.077 152.471 79.6643C141.941 81.4518 128.666 81.4518 102.117 81.4518H87.8685C61.3196 81.4518 48.0451 81.4517 37.5148 79.6643C22.2726 77.077 10.204 71.9029 4.16921 65.3682C-3.39721e-06 60.8536 -2.31752e-06 55.1625 3.46447e-09 43.7803L1.24915e-06 37.6714C3.57013e-06 26.2892 4.81272e-06 20.5981 4.16922 16.0836C10.204 9.54883 22.2726 4.37472 37.5149 1.78744C48.0451 -1.45647e-06 61.3196 -9.9358e-07 87.8685 1.48391e-09L102.117 5.35539e-07C128.666 1.5306e-06 141.941 2.06333e-06 152.471 1.78745C167.713 4.37473 179.782 9.54884 185.817 16.0836C189.986 20.5981 189.986 26.2892 189.986 37.6714V43.7803Z"
      fill="#7F47AA"
    />
  </svg>

  <div className="field-label">Search Cards</div>

  <input
    ref={inputRef}
    className="Pass"
    placeholder="Search for cards"
    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    style={{
      background: "black",
      color: "white",
      height: "20px",
      width: "140px",
      borderRadius: "4px",
      padding: "5px",
    }}
  />
</div>
</div>
      </div>


      <div style={{ position: 'absolute', top: '25%', left: `calc(100% - ${window.innerWidth * 0.06}px)`, transform: 'translate(-50%, -50%)' }}>
        {cards.map((card, i) => (
          <CardDisplay
            key={card.id ?? i}
            imageUrl={card.image}
            w={window.innerWidth * 0.06}
            ypos={i}
          />
        ))
        }
      </div>
    </div>
  );
}