import React from 'react';

const Quotes = ({quote,autor}) => {
    
    return (
        <>
            <p>
                <i className="fas fa-quote-left"></i>
                {quote}
            </p>
            <li>
                ~{autor}
            </li>
        
        </>
    );
};

export default Quotes;