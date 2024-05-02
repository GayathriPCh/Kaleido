import React, { useState } from 'react';
import AiwithText from './AiwithText';
import AiwithImage from './AiwithImage';

const PaletteExplorerPage = () => {
  const [aiWith, setAiWith] = useState('text');

  const handleAiWith = (value) => {
    setAiWith(value);
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #4B0082, #000000)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', fontFamily: 'Courier New, monospace' }}>
      <button style={{ position: 'absolute', bottom: '30px', right: '30px', borderRadius: '50%', backgroundColor: '#FFF', width: '80px', height: '80px', border: '2px solid #000', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', cursor: 'pointer', fontSize: '24px', color: '#000' }} onClick={() => window.history.back()}>&#8592;</button>
      <h1 style={{ color: '#FFF', marginBottom: '10px', fontWeight: 'bold' }}>Historical Palette Explorer</h1>
      <p style={{ color: '#FFF', marginBottom: '30px', textAlign: 'center' }}>Travel Through Time with Color!

Explore the colors that defined different artistic periods. Enter a movement (e.g., Renaissance, Impressionism) and discover its signature palette.✨</p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button onClick={() => handleAiWith('text')} className={aiWith === 'text' ? 'aiWithActive' : ''} style={{ marginBottom: '20px', backgroundColor: '#FFF', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontFamily: 'Courier New, monospace', fontWeight: 'bold' }}>Enter an Art Period</button>

        <button onClick={() => handleAiWith('image')} className={aiWith === 'image' ? 'aiWithActive' : ''} style={{ backgroundColor: '#FFF', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontFamily: 'Courier New, monospace', fontWeight: 'bold' }}>Analyze artwork's period</button>
      </div>

      <div style={{ width: '80%', maxWidth: '600px', margin: '30px auto', background: '#FFF', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        {aiWith === 'text' ? <AiwithText /> : <AiwithImage />}
      </div>
    </div>
  );
};

export default PaletteExplorerPage;
