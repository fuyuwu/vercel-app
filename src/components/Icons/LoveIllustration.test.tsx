import { describe, it, expect, vi, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import LoveIllustration from './LoveIllustration';

const stubReducedMotion = (matches: boolean) =>
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );

// vitest.setup.ts already defaults matchMedia to matches: false; restore that
// after any test in this file overrides it, so order doesn't matter.
afterEach(() => stubReducedMotion(false));

describe('LoveIllustration', () => {
  it('renders a single-path svg icon', () => {
    const { container } = render(<LoveIllustration />);
    expect(container.querySelectorAll('path')).toHaveLength(1);
  });

  it('draws the line once active (svg.createDrawable sets dasharray/dashoffset)', () => {
    const { container } = render(<LoveIllustration active />);
    const path = container.querySelector('path')!;
    expect(path.getAttribute('pathLength')).toBeTruthy();
    expect(path.getAttribute('stroke-dasharray')).toBeTruthy();
    expect(path.hasAttribute('stroke-dashoffset')).toBe(true);
  });

  it('does not animate while inactive', () => {
    const { container } = render(<LoveIllustration active={false} />);
    const path = container.querySelector('path')!;
    expect(path.getAttribute('stroke-dasharray')).toBeNull();
  });

  it('skips the animation when prefers-reduced-motion is on', () => {
    stubReducedMotion(true);

    const { container } = render(<LoveIllustration active />);
    const path = container.querySelector('path')!;
    expect(path.getAttribute('stroke-dasharray')).toBeNull();
  });
});
