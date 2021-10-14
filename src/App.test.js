import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  
  test('renders app component', () => {
    const component = render(<App />);
    expect(component.container).toHaveTextContent('Todo 🗓')
    expect(component.container).toHaveTextContent('Done ✅')
  });

})
