import React from 'react';

export default function Dialog({
    text
}) {
    return (
        <div className="c-dialog">
            Dialog
            { text }
        </div>
    );
}

export function Dialog2({
    text
}) {
    return (
        <div className="c-dialog">
            Dialog 2
            { text }
        </div>
    );
}
