import { useContext } from 'react';

import { context } from '../Provider';
import DialogContainer from '../containers/Dialog';

export default function useDialog() {
    const value = useContext(context);

    return {
        ...value,
        Container: DialogContainer
    };
}
