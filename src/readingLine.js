export function calculateFixedReadingLine(scrollTop, viewportHeight) {
  return scrollTop + viewportHeight / 3;
}

export function calculateReadingLine(
  scrollTop,
  viewportHeight,
  documentHeight
) {
  const fixedReadingLine = calculateFixedReadingLine(scrollTop, viewportHeight);
  const readingLineFromTop = scrollTop * 2;
  const scrollBottom = documentHeight - viewportHeight - scrollTop;
  const readingLineFromBottom = documentHeight - scrollBottom * 3 - 1;
  if (readingLineFromTop < fixedReadingLine) {
    return readingLineFromTop;
  } else if (readingLineFromBottom > fixedReadingLine) {
    return readingLineFromBottom;
  }
  return fixedReadingLine;
}
