import { render } from '@testing-library/react';
import About from './About';
import React from 'react';

describe('About component', () => {
  it('should render without errors', () => {
    const { container } = render(<About />);
    expect(container.firstChild).toBeInTheDocument;
  });

  it('should contain the correct heading', () => {
    const { getByText } = render(<About />);
    const heading = getByText('Little Lemon');
    expect(heading).toBeInTheDocument;
  });

  it('should contain the correct sub-heading', () => {
    const { getByText } = render(<About />);
    const subHeading = getByText('Chicago');
    expect(subHeading).toBeInTheDocument;
  });

  it('should contain the correct paragraph', () => {
    const { getByText } = render(<About />);
    const paragraph = getByText(
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    );
    expect(paragraph).toBeInTheDocument;
  });

  it('should render the first food image correctly', () => {
    const { getByAltText } = render(<About />);
    const firstImage = getByAltText('food1');
    expect(firstImage).toBeInTheDocument;
  });

  it('should render the second food image correctly', () => {
    const { getByAltText } = render(<About />);
    const secondImage = getByAltText('food2');
    expect(secondImage).toBeInTheDocument;
  });
});
