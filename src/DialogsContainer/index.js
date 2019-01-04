import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from '../Provider/context';
import Dialog from '../Dialog';

export default function DialogsContainer({
    component,
    ...othersProps
}) {
    const DialogComponent = !component
        ? Dialog
        : component;

    return (
        <Consumer>
            {
                props => {
                    const composedProps = {
                        ...props,
                        ...othersProps
                    };

                    return <DialogComponent {...composedProps} />;
                }
            }
        </Consumer>
    );
}

DialogsContainer.propTypes = {
    id: PropTypes.string.isRequired
};
