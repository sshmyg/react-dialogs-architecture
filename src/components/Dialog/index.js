import React from 'react';

export default function Dialog({
    text
}) {
    return (
        <div className="c-dialog">
            Dialog <br/>
            { text }
        </div>
    );
}

export function Dialog2({
    text,
    closeDialog
}) {
    return (
        <div className="c-dialog">
            Dialog 2 <br/>
            { text }

            <button onClick={closeDialog}>CLOSE</button>
        </div>
    );
}
