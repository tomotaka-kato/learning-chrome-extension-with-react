import {cleanup, fireEvent, render} from '@testing-library/react';
import App from '@/App.tsx';

afterEach(cleanup);

it('sample', () => {
   render(
    <App />
  );
  expect(queryByLabelText(/on/i)).toBeTruthy();
});
