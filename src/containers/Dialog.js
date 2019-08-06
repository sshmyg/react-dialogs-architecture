import React, {
    useContext,
    useCallback
} from 'react';
import { createPortal } from 'react-dom';

import { context } from '../Provider';
import Dialog from '../components/Dialog';

export default function DialogsContainer(props) {
    const providerProps = useContext(context);

    const {
        component: DialogComponent = Dialog,
        layoutSelector,
        usePortals = true,
        dialogs,
        closeDialog,
        ...composedProps
    } = {
        ...providerProps,
        ...props
    };
    const portalEl = (usePortals && layoutSelector)
        ? document.querySelector(`.${layoutSelector}`)
        : false;
    const {
        standalone,
        id
    } = props;
    const localCloseDialog = useCallback(() => {
        closeDialog(composedProps.id);
    }, [ composedProps.id, closeDialog ]);
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
