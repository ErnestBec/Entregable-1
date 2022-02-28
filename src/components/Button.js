import Quotes from './Quotes';
import quotes from '../quotes.json'
import { useState } from 'react';
import React from 'react';

const Button = () => {
    const getRandom = () => Math.floor(Math.random() * quotes.length);

    const colors = [
        "#0081cf",
        "#c34a36",
        "#4d8076",
        "#008f7a",
        "#d65db1",
        "#845ec2",
        "#b93daf"
    ]; 

    const [quote, setQuote] = useState(quotes[0]);

    const randomQuote = () =>{
        setQuote(quotes[getRandom()]);
    }
    const color = colors[Math.floor(Math.random() * 7 )];
    document.body.style = `background: ${color}`;

    return (
        <div className='Quotes' style={{color:color}}> 
            <Quotes quote ={quote.quote} autor={quote.author} />
            <button onClick={randomQuote} style = {{background:color}} >
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Button;