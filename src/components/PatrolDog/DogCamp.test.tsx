import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import DogCamp from './DogCamp';

describe('DogCamp', () => {
  it('按下狗屋會捲回頁面頂端', () => {
    const scrollTo = vi.fn();
    vi.stubGlobal('scrollTo', scrollTo);
    render(<DogCamp />);

    fireEvent.click(screen.getByRole('button', { name: '回到頂端' }));

    expect(scrollTo).toHaveBeenCalledWith({ top: 0 });
  });
});
