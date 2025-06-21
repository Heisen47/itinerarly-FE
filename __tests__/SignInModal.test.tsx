import { render, screen, fireEvent } from '@testing-library/react';
import { SignInModal } from '../components/SignInModal';

describe('SignInModal', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });


  it('does not render when closed', () => {
    render(<SignInModal openModal={false} onClose={mockOnClose} />);
    expect(screen.queryByText('Sign In')).not.toBeInTheDocument();
  });

  it('calls onClose when Cancel button is clicked', () => {
    render(<SignInModal openModal={true} onClose={mockOnClose} />);
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('allows email input', () => {
    render(<SignInModal openModal={true} onClose={mockOnClose} />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });
});