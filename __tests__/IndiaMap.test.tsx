import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import IndiaMap from '../components/IndiaMap';
import Gemini from '@/lib/Gemini';

// Mock react-simple-maps components
jest.mock('react-simple-maps', () => ({
  ComposableMap: ({ children }: any) => <div>{children}</div>,
  Geographies: ({ children }: any) => <div>{children}</div>,
  Geography: ({ children }: any) => <div>{children}</div>,
  Marker: ({ children }: any) => <div>{children}</div>,
  ZoomableGroup: ({ children }: any) => <div>{children}</div>,
}));

// Mock the Gemini API
jest.mock('@/lib/Gemini', () => ({
  __esModule: true,
  default: jest.fn()
}));

// Mock the sections data
jest.mock('@/data/sections', () => ({
  sections: [{
    id: 'test-type',
    places: [{
      name: 'Test Place',
      coordinates: [78, 22]
    }]
  }]
}));

describe('IndiaMap', () => {
  beforeEach(() => {
    (Gemini as jest.Mock).mockClear();
    // Reset DOM
    document.body.innerHTML = '';
  });

  it('renders loading state initially', () => {
    render(<IndiaMap type="test-type" />);
    expect(screen.getByText(/Loading map/i)).toBeInTheDocument();
  });

  it('shows hover tooltip when marker is hovered', async () => {
    (Gemini as jest.Mock).mockResolvedValue('Test place details');
    
    const { container } = render(<IndiaMap type="test-type" />);
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText(/Loading map/i)).not.toBeInTheDocument();
    });

    // Simulate hover on marker
    const g = container.querySelector('g');
    expect(g).toBeInTheDocument();
    fireEvent.mouseEnter(g!);

    // Check if tooltip appears
    expect(screen.getByText('Test Place')).toBeInTheDocument();
    expect(screen.getByText('Show details')).toBeInTheDocument();
  });

  it('loads and displays place details when show details is clicked', async () => {
    (Gemini as jest.Mock).mockResolvedValue('Test place details');
    
    const { container } = render(<IndiaMap type="test-type" />);
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText(/Loading map/i)).not.toBeInTheDocument();
    });

    // Hover and click show details
    const g = container.querySelector('g');
    fireEvent.mouseEnter(g!);
    
    const showDetailsButton = screen.getByText('Show details');
    fireEvent.click(showDetailsButton);

    // Verify Gemini was called and details are displayed
    await waitFor(() => {
      expect(Gemini).toHaveBeenCalledWith('Test Place');
      expect(screen.getByText('Test place details')).toBeInTheDocument();
    });
  });

  it('closes details modal when close button is clicked', async () => {
    (Gemini as jest.Mock).mockResolvedValue('Test place details');
    
    const { container } = render(<IndiaMap type="test-type" />);
    
    await waitFor(() => {
      expect(screen.queryByText(/Loading map/i)).not.toBeInTheDocument();
    });

    // Show details
    const g = container.querySelector('g');
    fireEvent.mouseEnter(g!);
    fireEvent.click(screen.getByText('Show details'));

    // Wait for details to load and click close
    await waitFor(() => {
      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);
    });

    // Verify details are gone
    expect(screen.queryByText('Test place details')).not.toBeInTheDocument();
  });
});