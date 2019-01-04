import React, {
    Component,
    Fragment
} from 'react';
import ReactDOM from 'react-dom';

import { Dialog2 } from './Dialog';
import DialogProvider from './Provider';
import DialogsContainer from './DialogsContainer';
import withDialogs from './withDialogs';

class AppInner extends Component {
    state = {
        text: 'Some text'
    }

    changeText = () => {
        this.setState({
            text: Math.random() * 100
        });
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.changeText}>Change data</button>
                <div>
                    <button onClick={() => this.props.openDialog('test')}>
                        Open dialog
                    </button>

                    <DialogsContainer
                        id="test"
                        text={this.state.text}
                        //component={Dialog2}
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
