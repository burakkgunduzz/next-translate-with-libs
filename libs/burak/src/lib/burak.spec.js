import { render } from '@testing-library/react';
import Burak from './burak';
describe('Burak', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Burak />);
    expect(baseElement).toBeTruthy();
  });
});
