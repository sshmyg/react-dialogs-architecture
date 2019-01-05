import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Dialog2 } from './Dialog';
import DialogProvider from './Provider';
import DialogsContainer from './DialogsContainer';
import withDialogs from './withDialogs';

class AppInner extends Component {
    state = {
        text: 'Some text'
    };

    changeText = () => {
        this.setState({
            text: Math.random() * 100
        });
    };

    render() {
        return (
            <Fragment>
                <div>
                    <button onClick={() =>this.props.openDialog('test1')}>
                        Open dialog 1
                    </button>
                    <button
                        disabled={!this.props.isDialogOpened('test1')}
                        onClick={() => this.props.closeDialog('test1')}
                    >
                        Close dialog 1
                    </button>
                    <br />
                    <button
                        onClick={() => this.props.openDialog('test2', { standalone: true })}
                    >
                        Open dialog 2
                    </button>
                    <button
                        disabled={!this.props.isDialogOpened('test2')}
                        onClick={() => this.props.closeDialog('test2')}
                    >
                        Close dialog 2
                    </button>
                    <button
                        disabled={!this.props.isDialogOpened('test2')}
                        onClick={this.changeText}
                    >
                        Change data in dialog 2
                    </button>

                    <DialogsContainer
                        standalone
                        id="test2"
                        text={this.state.text}
                        component={Dialog2}
                    />
                </div>
            </Fragment>
        );
    }
}

const EnhancedAppInner = withDialogs(AppInner);

function App() {
    return (
        <DialogProvider>
            <EnhancedAppInner />
        </DialogProvider>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
