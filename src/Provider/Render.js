import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from './context';

import DialogsContainer from '../DialogsContainer';

export default function DialogsProviderRender(props) {
    const {
        children,
        dialogs,
        layoutSelector,
        openDialog,
        isDialogOpened,
        closeDialog
    } = props;
    const providerProps = {
        openDialog,
        isDialogOpened,
        layoutSelector,
        dialogs,
        closeDialog
    };

    return (
        <Provider value={providerProps}>
            { children }
            <div className={layoutSelector}>
                {
                    dialogs
                        .filter(d => !d.standalone)
                        .map(d => (
                            <DialogsContainer
                                key={d.id}
                                usePortals={false}
                                {...d}
                            />
                        ))
                }
            </div>
        </Provider>
    );
}

DialogsProviderRender.propTypes = {
    children: PropTypes.node
};
