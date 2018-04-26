import { calculateReadingLine, calculateScroll } from './readingLine';

describe('calculateReadingLine', () => {
  it('should caluculate reading line', () => {
    expect(calculateReadingLine(0, 300, 1000)).toBe(1);
    expect(calculateReadingLine(30, 300, 1000)).toBe(61);
    expect(calculateReadingLine(100, 300, 1000)).toBe(200);
    expect(calculateReadingLine(680, 300, 1000)).toBe(1000 - (1000 - 680 - 300) * 3 - 1);
    expect(calculateReadingLine(700, 300, 1000)).toBe(999);
  });
});

describe('calculateScroll', () => {
  it('should calculateScroll', () => {
    expect(calculateScroll(1, 300, 1000)).toBe(0);
    expect(calculateScroll(21, 300, 1000)).toBe(10);
    expect(calculateScroll(200, 300, 1000)).toBe(100);
    expect(calculateScroll(939, 300, 1000)).toBe(680);
  });
})
