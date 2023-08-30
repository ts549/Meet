import './ScrollableList.css';
import { useState } from 'react';

function ScrollableList() {

    const items = ["Purdue University", "Babson College"];

    const selected = [];

    function select(name) {
        setS
    }

    return (
        <div className = "Scroller">
            {items.map((university) => {
            return (
                <button className="item">
                    {university}
                </button>
                );
            })}
        </div>
    );
}

export default ScrollableList;