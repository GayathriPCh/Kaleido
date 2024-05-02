import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SymbolismText from './symbolismai/symbolismtext';
import SymbolismImg from './symbolismai/symbolismimg';

const SymbolismExplorerPage = () => {
  const [aiWith, setAiWith] = useState('text');

  const handleAiWith = (value) => {
    setAiWith(value);
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #4B0082, #000000)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', fontFamily: 'Courier New, monospace' }}>
      <h1 style={{ color: '#FFF', marginBottom: '20px', fontWeight: 'bold' }}>Symbolism Explorer</h1>
      <p style={{ color: '#FFF', marginBottom: '30px', textAlign: 'center' }}>Unleash the hidden language of color! Ever wondered how to infuse your artwork with deeper meaning? Our Color Symbolism Exploration page helps you bridge the gap between concept and color. Describe any object, symbol, or theme you want to incorporate in your art (like a dove for peace or fire for passion). We'll unlock the cultural symbolism associated with it, including its connected colors. This newfound knowledge empowers you to choose a palette that not only complements your artwork visually, but also whispers the message you want to convey. Let your art speak volumes, one meaningful color at a time.</p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button onClick={() => handleAiWith('text')} className={aiWith === 'text' ? 'aiWithActive' : ''} style={{ marginBottom: '20px', backgroundColor: '#FFF', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontFamily: 'Courier New, monospace', fontWeight: 'bold' }}>Symbolise with your idea</button>

        <button onClick={() => handleAiWith('image')} className={aiWith === 'image' ? 'aiWithActive' : ''} style={{ backgroundColor: '#FFF', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontFamily: 'Courier New, monospace', fontWeight: 'bold' }}>Analyse object's artistic symbolism</button>
      </div>

      <div style={{ width: '80%', maxWidth: '600px', margin: '30px auto', background: '#FFF', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        {aiWith === 'text' ? <SymbolismText /> : <SymbolismImg />}
      </div>

      <Link to="/" style={{ position: 'absolute', bottom: '20px', right: '20px', backgroundColor: '#FFF', padding: '10px 20px', border: '1px solid #000', borderRadius: '5px', textDecoration: 'none', color: '#000', fontFamily: 'Courier New, monospace', fontWeight: 'bold' }}>Back</Link>
    </div>
  );
};

export default SymbolismExplorerPage;
