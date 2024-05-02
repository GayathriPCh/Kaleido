import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const SymbolismText = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyDen0HXAl2_v3Vzh6qK4H46eAmdi06nt1o');

    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    /**
     * Generative AI Call to fetch historical color palette insights
     */
    async function symbolismText() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `What colors do you think could symbolize with : ${search}`; // Modify prompt for historical color palettes
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {
        symbolismText();
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <input placeholder='Enter a specific object, mood or concept (e.g., owl, journey) to explore its symbolic colors.' onChange={(e) => handleChangeSearch(e)} />
                <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</button>
            </div>

            {
                loading === true && (aiResponse === '') ?
                    <p style={{ margin: '30px 0' }}>Loading ...</p>
                    :
                    <div style={{ margin: '30px 0' }}>
                        <p>{aiResponse}</p>
                    </div>
            }
        </div>
    );
};

export default SymbolismText;
