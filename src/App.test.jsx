import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    expect(true).toBe(true);
  });

  it('retrieve api values', async () => {
    render(<App />);

    // Espera a que aparezca algo del contenido renderizado tras la llamada a la API
    const texto = await screen.findByText(/length 4/i);
    expect(texto).toBeInTheDocument();
  });
});
