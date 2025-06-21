import { render, screen, fireEvent } from '@testing-library/react';
import PlaceDetails from '../components/PlaceDetails';

describe('PlaceDetails', () => {
  const mockOnClose = jest.fn();
  const defaultProps = {
    place: 'Test Place',
    details: 'Test Details',
    onClose: mockOnClose
  };

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('renders place name and details', () => {
    render(<PlaceDetails {...defaultProps} />);
    expect(screen.getByText('Test Place')).toBeInTheDocument();
    expect(screen.getByText('Test Details')).toBeInTheDocument();
  });


  it('calls onClose when close button is clicked', () => {
    render(<PlaceDetails {...defaultProps} />);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('renders multiline details correctly', () => {
    const multilineDetails = 'Line 1\nLine 2\nLine 3';
    render(<PlaceDetails {...defaultProps} details={multilineDetails} />);
    expect(screen.getByText('Line 1')).toBeInTheDocument();
    expect(screen.getByText('Line 2')).toBeInTheDocument();
    expect(screen.getByText('Line 3')).toBeInTheDocument();
  });
});