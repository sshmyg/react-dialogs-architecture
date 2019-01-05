import {
    compose,
    setDisplayName,
    withStateHandlers,
    withHandlers,
    defaultProps
} from 'recompose';

export default compose(
    setDisplayName('dialogs-provider-logic'),

    defaultProps({
        layoutSelector: 'js-dialogs'
    }),

    withStateHandlers(
        {
            dialogs: []
        },
        {
            toggleDialog: ({ dialogs }) => (id, state = false, options = {}) => {
                if (!id) {
                    console.error('ID param require');
                    return false;
                }

                const isAddDialog = state === true;
                const isDialogAlreadyOpened = dialogs.some(d => d.id === id);

                if (isAddDialog && isDialogAlreadyOpened) {
                    console.error(`Dialog with id - "${id}", alredy opened`);
                    return;
                }

                return {
                    dialogs: isAddDialog
                        ? [
                            ...dialogs,
                            {
                                ...options,
                                id,
                                isOpen: true,
                            }
                        ]
                        : dialogs.filter(d => d.id !== id)
                };
            }
        }
    ),

    withHandlers({
        openDialog: ({ toggleDialog }) => (id, options) => toggleDialog(id, true, options),
        closeDialog: ({ toggleDialog }) => id => toggleDialog(id, false),
        isDialogOpened: ({ dialogs }) => id => dialogs.some(d => d.id === id && d.isOpen)
    })
);
