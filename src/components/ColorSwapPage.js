import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatIfImg from './whatifai/whatifimg';

const ColorSwapPage = () => {
  const [artworkImage, setArtworkImage] = useState('');
  const [applyImage, setApplyImage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSwapColors = async () => {
    setLoading(true);
    setAiResponse('');

    // Dummy function to simulate swapping colors
    setTimeout(() => {
      setAiResponse('Dummy response: Colors swapped successfully.');
      setLoading(false);
    }, 2000); // Simulating a delay for processing
  }

  return (
    <div style={{ background: 'linear-gradient(to bottom, #4B0082, #000000)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', fontFamily: 'Courier New, monospace', padding: '20px' }}>
      <h1 style={{ color: '#FFF', fontWeight: 'bold', marginBottom: '20px' }}>Color Swap Page</h1>
      <p style={{ color: '#FFF', textAlign: 'center', marginBottom: '30px' }}>See Your Art in a Whole New Light!

Ever wondered how your artwork would look with a different color scheme? Upload your creation and a reference image with a palette you love. Our AI magic will then give an idea of a "What-If" version of your artwork, reimagined with the new colors.
  </p>

      <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#FFF', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <WhatIfImg setArtworkImage={setArtworkImage} setApplyImage={setApplyImage} />

        {(artworkImage && applyImage) && (
          <div style={{ width: '100%', maxWidth: '500px', background: '#FFF', padding: '20px', borderRadius: '10px', textAlign: 'center', color: '#000' }}>
            <button onClick={handleSwapColors}>Swap Colors</button>
            {loading ? <p style={{ margin: '20px 0', color: '#000' }}>Loading...</p> : <p style={{ margin: '20px 0', color: '#000' }}>{aiResponse}</p>}
          </div>
        )}
      </div>

      <Link to="/" style={{ position: 'absolute', bottom: '20px', right: '20px', backgroundColor: '#FFF', padding: '10px 20px', border: '1px solid #000', borderRadius: '5px', textDecoration: 'none', color: '#000', fontFamily: 'Courier New, monospace', fontWeight: 'bold' }}>Back</Link>
    </div>
  );
};

export default ColorSwapPage;
