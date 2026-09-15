import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Module from './Module';

describe('Switch Module', () => {
  it('點擊時呼叫傳入的 onClick', () => {
    const onClick = vi.fn();
    render(<Module onClick={onClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('沒有傳 onClick 時點擊也不會噴錯（取代原本的 defaultProps）', () => {
    render(<Module />);
    expect(() => fireEvent.click(screen.getByRole('button'))).not.toThrow();
  });

  it('isLoading 為 true 時顯示 Loading 元件', () => {
    const { container } = render(<Module isLoading />);
    expect(container.querySelector('.Loading .loading')).toBeTruthy();
  });

  it('isLoading 為 false 時不顯示 Loading 元件', () => {
    const { container } = render(<Module isLoading={false} />);
    expect(container.querySelector('.Loading .loading')).toBeNull();
  });

  it('有傳 text 時會渲染前後兩段文字', () => {
    render(<Module text={['開', '關']} />);
    expect(screen.getByText('開')).toBeInTheDocument();
    expect(screen.getByText('關')).toBeInTheDocument();
  });
});
