import React from 'react'
import { render  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {store} from '../redux/store';
import { Provider } from 'react-redux';

import Done from './Done';

describe('Done', () => {

    test('render Done Component', () => {
        const component = render(
            <Provider store={store}>
                <Done/>
            </Provider>
        )

        expect(component.container).toHaveTextContent('Done Items');
    });
})