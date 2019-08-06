import React, {
    Fragment,
    useState
} from 'react';

import useDialog from './hooks/useDialog';

import { Dialog2 } from './components/Dialog';

export default function App() {
    const [ text, setText ] = useState('Text');
    const {
        openDialog,
        isDialogOpened,
        closeDialog,
        Container: DialogContainer
    } = useDialog();

    return (
        <Fragment>
            <div>
                <button onClick={() => openDialog('test1')}>
                    Open dialog 1
                </button>
                <button
                    disabled={!isDialogOpened('test1')}
                    onClick={() => closeDialog('test1')}
                >
                    Close dialog 1
                </button>
                <br />
                <button
                    onClick={() => openDialog('test2', { standalone: true })}
                >
                    Open dialog 2
                </button>
                <button
                    disabled={!isDialogOpened('test2')}
                    onClick={() => closeDialog('test2')}
                >
                    Close dialog 2
                </button>
                <button
                    disabled={!isDialogOpened('test2')}
                    onClick={() => {
                        setText(Math.random());
                    }}
                >
                    Change data in dialog 2
                </button>

                <DialogContainer
                    standalone
                    id="test2"
                    text={text}
                    component={Dialog2}
                />
            </div>
        </Fragment>
    );
}
