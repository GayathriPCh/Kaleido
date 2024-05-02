import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from '../../helpers/imageHelper';

const WhatIfImg = () => {
    const genAI = new GoogleGenerativeAI('YOUR_API_KEY');

    const [colorReferenceImage, setColorReferenceImage] = useState('');
    const [colorApplyImage, setColorApplyImage] = useState('');
    const [colorReferenceInlineData, setColorReferenceInlineData] = useState('');
    const [colorApplyInlineData, setColorApplyInlineData] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    /**
     * Generative AI Call to explore "what-if" color swaps in the image
     */
    async function whatifImg() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const result = await model.generateContent([
            "Explore what-if color swaps in this image", colorReferenceInlineData, colorApplyInlineData
        ]);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleClick = () => {
        whatifImg();
    }

    const handleColorReferenceImageChange = (e) => {
        const file = e.target.files[0];

        // getting base64 from file to render in DOM
        getBase64(file)
            .then((result) => {
                setColorReferenceImage(result);
            })
            .catch(e => console.log(e))

        // generating content model for Gemini Google AI
        fileToGenerativePart(file).then((image) => {
            setColorReferenceInlineData(image);
        });
    }

    const handleColorApplyImageChange = (e) => {
        const file = e.target.files[0];

        // getting base64 from file to render in DOM
        getBase64(file)
            .then((result) => {
                setColorApplyImage(result);
            })
            .catch(e => console.log(e))

        // generating content model for Gemini Google AI
        fileToGenerativePart(file).then((image) => {
            setColorApplyInlineData(image);
        });
    }

    // Converts a File object to a GoogleGenerativeAI.Part object.
    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });

        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    return (
        <div>
            <div>
                <div style={{ display: 'flex' }}>
                    <div>
                        <input type='file' onChange={(e) => handleColorReferenceImageChange(e)} />
                        <img src={colorReferenceImage} style={{ width: '100px', marginTop: 10 }} alt="Color Reference" />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <input type='file' onChange={(e) => handleColorApplyImageChange(e)} />
                        <img src={colorApplyImage} style={{ width: '100px', marginTop: 10 }} alt="Color Apply" />
                    </div>
                </div>
            </div>

            <button style={{ marginTop: '20px', borderRadius: '50px', background: 'linear-gradient(to right, #9C27B0, #673AB7)', color: '#FFF', padding: '10px 20px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }} onClick={() => handleClick()}>Swap Colors</button>

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

export default WhatIfImg;
