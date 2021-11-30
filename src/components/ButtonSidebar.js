import React from 'react';

export default function ButtonSidebar({ action, text }) {
    return (
        <button onClick={action}>
            { text }
        </button>
    )
}
