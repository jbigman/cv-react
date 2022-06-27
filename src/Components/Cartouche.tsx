import React from 'react';

const Cartouche = (word: string, type?: "XS" | "M") => {
    if (type === "XS") {
        return (
            <span className="cartouche-sm">{word}</span>
        );
    } else {
        return (
            <span className="cartouche">{word}</span>
        );
    }
};

export default Cartouche;
