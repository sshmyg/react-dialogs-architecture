import React from 'react';
import { createPortal } from 'react-dom';

import { Consumer } from '../Provider/context';
import Dialog from '../Dialog';

export default function DialogsContainer(props) {
    return (
        <Consumer>
            {
                providerProps => {
                    const {
                        component,
                        layoutSelector,
                        usePortals = true,
                        dialogs,
                        closeDialog,
                        ...composedProps
                    } = {
                        ...providerProps,
                        ...props
                    };
                    const DialogComponent = !component
                        ? Dialog
                        : component;
                    const portalEl = (usePortals && layoutSelector) ? document.querySelector(`.${layoutSelector}`) : false;
                    const {
                        standalone,
                        id
                    } = props;
                    const localCloseDialog = () => closeDialog(composedProps.id);
                    const componentNode = (
                        <DialogComponent
                            {...composedProps}
                            closeDialog={localCloseDialog}
                        />
                    );
                    const { isOpen } = dialogs.find(d => d.id === id) || {};

                    if (standalone && !isOpen) {
                        return null;
                    }

                    return !portalEl
                        ? componentNode
                        : createPortal(
                            componentNode,
                            portalEl
                        );
                }
            }
        </Consumer>
    );
}
