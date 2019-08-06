import React, { createContext } from 'react';

export const context = createContext();
export const Provider = context.Provider;
export const Consumer = context.Consumer;

import useDialog from './logic';
import DialogContainer from '../containers/Dialog';

export default function DialogsProvider({
    children
}) {
    const dialogsProps = useDialog();
    const {
        layoutSelector,
        dialogs
    } = dialogsProps;

    return (
        <Provider value={dialogsProps}>
            { children }
            <div className={layoutSelector}>
                {
                    dialogs
                        .map(d => d.standalone
                            ? null
                            : (
                                <DialogContainer
                                    key={d.id}
                                    usePortals={false}
                                    {...d}
                                />
                            )
                        )
                }
            </div>
        </Provider>
    );
}

