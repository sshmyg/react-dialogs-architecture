import {
    useState,
    useCallback
} from 'react';

export default function useDialog() {
    const [ dialogs, setDialogs ] = useState([]);
    const toggleDialog = useCallback((id, state = false, options = {}) => {
        if (!id) {
            console.error('Id param require');
            return;
        }

        setDialogs(dialogs => {
            const isAddDialog = state === true;
            const isDialogAlreadyOpened = dialogs.some(d => d.id === id);

            if (isAddDialog && isDialogAlreadyOpened) {
                console.error(`Dialog with id - "${id}", alredy opened`);
                return [];
            }

            return isAddDialog
                ? [
                    ...dialogs,
                    {
                        ...options,
                        id,
                        isOpen: true
                    }
                ]
                : dialogs.filter(d => d.id !== id);
        });
    }, [ setDialogs ]);
    const openDialog = useCallback((id, options) => {
        toggleDialog(id, true, options);
    }, [ toggleDialog ]);
    const closeDialog = useCallback(id => {
        toggleDialog(id, false);
    }, [ toggleDialog ]);
    const isDialogOpened = useCallback(id => {
        return dialogs.some(d => d.id === id && d.isOpen);
    }, [ dialogs ]);

    return {
        layoutSelector: 'js-dialogs',
        openDialog,
        closeDialog,
        isDialogOpened,
        dialogs
    };
}
