import {
    compose,
    fromRenderProps
} from 'recompose';

import { Consumer } from './Provider/context';

export default compose(
    fromRenderProps(Consumer, props => props)
);
