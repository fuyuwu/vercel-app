import type { Palette } from '../PatrolDog/PixelSprite';

// Line art that picks up the nav link colour, including its hover state.
export const NAV_ICON_PALETTE: Palette = { k: 'currentColor' };

// 12×12 pixel icons, drawn as outlines with a little inner detail.

// Open book: page edges dip into the spine, with lines of text on each page.
export const BOOK_ICON = [
  'kkkk....kkkk',
  'k...kkkk...k',
  'k....kk....k',
  'k.kk.kk.kk.k',
  'k....kk....k',
  'k.kk.kk.kk.k',
  'k....kk....k',
  'k.kk.kk.kk.k',
  'k....kk....k',
  'kkkk.kk.kkkk',
  '....kkkk....',
  '............',
];

// Outlined cup with handles and a shine line, on a stem and base.
export const TROPHY_ICON = [
  '..kkkkkkkk..',
  'kkk......kkk',
  'k.k.k....k.k',
  'k.k.k....k.k',
  '.kk......kk.',
  '..k......k..',
  '...k....k...',
  '....kkkk....',
  '.....kk.....',
  '.....kk.....',
  '...kkkkkk...',
  '..kkkkkkkk..',
];

// Outline glass with a filament inside and a ridged screw base.
export const BULB_ICON = [
  '....kkkk....',
  '..kk....kk..',
  '.k........k.',
  'k..........k',
  'k...k..k...k',
  'k....kk....k',
  '.k...kk...k.',
  '..k..kk..k..',
  '...kkkkkk...',
  '...k....k...',
  '...kkkkkk...',
  '....kkkk....',
];
