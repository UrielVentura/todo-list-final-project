import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {store} from '../redux/store';
import { Provider } from 'react-redux';
import Todo from './Todo';


describe('Todo', () => {

    test('render Todo Component', () => {
        const component = render(
            <Provider store={store}>
                <Todo/>
            </Provider>
        )

        expect(component.container).toHaveTextContent('Todo Items')
    });

    test('add new todo to todoList', () => {
        render(
            <Provider store={store}>
                <Todo/>
            </Provider>
        );

        const inputElement = screen.getByLabelText('New an item...');
        const buttonElement = screen.getByRole("button");

        fireEvent.change(inputElement, {target: {value: "Go grocery Shop"}});
        fireEvent.click(buttonElement);

        const newTodo = screen.getByText("Go grocery Shop");
        expect(newTodo).toBeInTheDocument();
    });

})