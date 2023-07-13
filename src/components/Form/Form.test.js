import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  it('should update the name input value correctly', () => {
    const { getByLabelText } = render(<Form />);
    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });

  it('should update the email input value correctly', () => {
    const { getByLabelText } = render(<Form />);
    const emailInput = getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput.value).toBe('john@example.com');
  });

  it('should update the phone input value correctly', () => {
    const { getByLabelText } = render(<Form />);
    const phoneInput = getByLabelText('Phone Number');
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    expect(phoneInput.value).toBe('123-456-7890');
  });

  it('should update the number of people input value correctly', () => {
    const { getByLabelText } = render(<Form />);
    const peopleInput = getByLabelText('Number Of People');
    fireEvent.change(peopleInput, { target: { value: '4' } });
    expect(peopleInput.value).toBe('4');
  });
});
