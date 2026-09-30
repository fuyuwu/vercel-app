import type { Palette } from './PixelSprite';

// The outline follows the surrounding text colour, so the dog reads on both
// the light page and the dark intro overlay. Only the uniform is filled.
export const DOG_PALETTE: Palette = {
  k: 'currentColor',
  T: 'var(--primary-main)',
};

// Dachshund, 32×14, facing right.
const BASE = [
  '.....................kkkkkkkk...',
  '.....................k.k....k...',
  '.....................k.k.....k..',
  '.k...................k.k.....kkk',
  '..k..................k.k.......k',
  '...k..kkkkkkkkkkkkkkkkkk..kkkkkk',
  '....kk......kTTTTTTTTTTTkk......',
  '....k.......kTTTTTTTTTTTTk......',
  '....k.......kTTTTTTTTTTTTk......',
  '.....k......kTTTTTTTTTTTk.......',
  '......kkkkkkkkkkkkkkkkkkk.......',
  '......k.kk.k.......k.kk.k.......',
  '......k.kk.k.......k.kk.k.......',
  '......kkkkkkk......kkkkkkk......',
];

type Pixel = [x: number, y: number, ch: string];

const paint = (base: string[], pixels: Pixel[]) => {
  const grid = base.map((row) => row.split(''));
  pixels.forEach(([x, y, ch]) => {
    grid[y][x] = ch;
  });
  return grid.map((row) => row.join(''));
};

const TAIL_UP: Pixel[] = [
  [1, 3, '.'], [2, 4, '.'], [3, 5, '.'],
  [3, 2, 'k'], [3, 3, 'k'], [3, 4, 'k'], [4, 5, 'k'],
];

// Snout tipped down one pixel, nose to the ground.
const NOSE_DOWN: Pixel[] = [
  [30, 3, '.'], [31, 3, '.'], [29, 4, 'k'], [30, 4, 'k'],
  ...[26, 27, 28, 29, 30].map((x): Pixel => [x, 5, '.']),
  ...[26, 27, 28, 29, 30, 31].map((x): Pixel => [x, 6, 'k']),
];

const LEGS_SPREAD: Pixel[] = [
  ...[6, 8, 9, 11, 19, 21, 22, 24].map((x): Pixel => [x, 12, '.']),
  ...[5, 7, 10, 12, 18, 20, 23, 25].map((x): Pixel => [x, 12, 'k']),
  ...Array.from({ length: 21 }, (_, i): Pixel => [i + 5, 13, '.']),
  ...[5, 6, 7, 10, 11, 12, 13, 18, 19, 20, 23, 24, 25, 26].map((x): Pixel => [x, 13, 'k']),
];

const PAW_RAISED: Pixel[] = [
  [22, 11, '.'], [24, 11, '.'], [22, 12, '.'], [24, 12, '.'],
  [22, 13, '.'], [23, 13, '.'], [24, 13, '.'], [25, 13, '.'],
  [26, 7, 'k'], [27, 7, 'k'], [28, 7, 'k'], [28, 8, 'k'],
  [26, 9, 'k'], [27, 9, 'k'], [28, 9, 'k'],
];

// Lying on its belly: legs tucked away, front paws stretched out under the chin.
const LYING = paint(BASE.slice(0, 11), [
  ...[26, 27, 28].map((x): Pixel => [x, 9, 'k']),
  ...[25, 26, 27, 28].map((x): Pixel => [x, 10, 'k']),
]);

const TAIL_FLAT: Pixel[] = [
  [1, 3, '.'], [2, 4, '.'], [3, 5, '.'],
  [1, 9, 'k'], [2, 9, 'k'], [3, 9, 'k'], [4, 9, 'k'],
];

export const DOG_FRAMES = {
  idle1: BASE,
  idle2: paint(BASE, TAIL_UP),
  walk1: paint(BASE, LEGS_SPREAD),
  walk2: paint(BASE, TAIL_UP),
  sniff1: paint(BASE, NOSE_DOWN),
  sniff2: paint(BASE, [...NOSE_DOWN, ...TAIL_UP]),
  salute: paint(BASE, [...TAIL_UP, ...PAW_RAISED]),
  lie1: LYING,
  lie2: paint(LYING, TAIL_UP),
  sleep: paint(LYING, [...NOSE_DOWN, ...TAIL_FLAT]),
};

export const DOGHOUSE_PALETTE: Palette = {
  k: 'currentColor',
  R: '#C0533A', // roof
  w: '#E0B07A', // wood
  d: '#3A2A1E', // doorway
};

// 20×16, front view with an arched doorway.
export const DOGHOUSE = [
  '.........kk.........',
  '........kRRk........',
  '.......kRRRRk.......',
  '......kRRRRRRk......',
  '.....kRRRRRRRRk.....',
  '....kRRRRRRRRRRk....',
  '...kRRRRRRRRRRRRk...',
  '..kRRRRRRRRRRRRRRk..',
  '.kkkkkkkkkkkkkkkkkk.',
  '..kwwwwwwwwwwwwwwk..',
  '..kwwwwwkkkkwwwwwk..',
  '..kwwwwkddddkwwwwk..',
  '..kwwwwkddddkwwwwk..',
  '..kwwwwkddddkwwwwk..',
  '..kwwwwkddddkwwwwk..',
  '..kkkkkkkkkkkkkkkk..',
];

export const SLEEP_Z = [
  'kkkkk',
  '...k.',
  '..k..',
  '.k...',
  'kkkkk',
];

export type DogFrame = keyof typeof DOG_FRAMES;

// A plain slice of torso (outline, uniform, outline) that no frame animates,
// so repeating it makes the dachshund longer without touching legs or tail.
const TORSO_COLUMN = 15;

export const stretchDog = (rows: string[], extra: number) =>
  extra <= 0
    ? rows
    : rows.map((row) => row.slice(0, TORSO_COLUMN) + row[TORSO_COLUMN].repeat(extra) + row.slice(TORSO_COLUMN));
