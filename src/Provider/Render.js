import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from './context';

import DialogsContainer from '../DialogsContainer';

export default function DialogsProviderRender({
    children,
    ...othersProps
}) {
    const { dialogs } = othersProps;

    return (
        <Provider value={othersProps}>
            { children }
            <div className="js-dialogs">
                {
                    dialogs.map(d => (
                        d.useContainer
                            ? (
                                <DialogsContainer
                                    key={d.id}
                                    {...d}
                                />
                            )
                            : null
                    ))
                }
            </div>
        </Provider>
    );
}

DialogsProviderRender.propTypes = {
    children: PropTypes.node
};
