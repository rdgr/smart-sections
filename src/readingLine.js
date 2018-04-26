export function calculateFixedReadingLine(scrollTop, viewportHeight) {
  return scrollTop + viewportHeight / 3;
}

export function calculateReadingLine(
  scrollTop,
  viewportHeight,
  documentHeight
) {
  const fixedReadingLine = calculateFixedReadingLine(scrollTop, viewportHeight);
  const readingLineFromTop = scrollTop * 2 + 1;
  const scrollBottom = documentHeight - viewportHeight - scrollTop;
  const readingLineFromBottom = documentHeight - scrollBottom * 3 - 1;
  if (readingLineFromTop < fixedReadingLine) {
    return readingLineFromTop;
  } else if (readingLineFromBottom > fixedReadingLine) {
    return readingLineFromBottom;
  }
  return fixedReadingLine;
}

export function calculateScroll(readingLine, viewportHeight, documentHeight) {
  const scrollWhenMiddle = readingLine - viewportHeight / 3;
  const scrollWhenTop = (readingLine - 1) / 2;
  const scrollWhenBottom =
    (readingLine + 1 - documentHeight) / 3 + documentHeight - viewportHeight;
  return Math.max(Math.min(scrollWhenMiddle, scrollWhenBottom), scrollWhenTop);
}
