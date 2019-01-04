import {
    compose,
    setDisplayName,
    withStateHandlers,
    withHandlers
} from 'recompose';

export default compose(
    setDisplayName('dialogs-provider-logic'),

    withStateHandlers(
        {
            dialogs: []
        },
        {
            toggleDialog: ({ dialogs }) => (id, state = false, options = {}) => {
                if (!id) {
                    throw new Error('id require');
                }

                return {
                    dialogs: state === true
                        ? [
                            ...dialogs,
                            {
                                //Use container if your dialog has no data which depends on state changes
                                //Otherwise use container directly in your component
                                useContainer: true,
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
    }),

    withHandlers({
        handleOpenDialog: ({ openDialog }) => (id, options) => e => {
            e && e.preventDefault();
            openDialog(id, options);
        },

        handleCloseDialog: ({ closeDialog }) => id => e => {
            e && e.preventDefault();
            closeDialog(id);
        }
    })
);
