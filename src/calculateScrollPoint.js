import { getDocumentHeight, getViewportHeight } from './domUtils';
import { calculateScroll, calculateFixedReadingLine } from './readingLine';
import { coordinatesFromSection } from './coordinatesFromSections';

export function calculateScrollPoint(sections, sectionName) {
  const viewportHeight = getViewportHeight();
  const documentHeight = getDocumentHeight();
  const sectionEl = sections[sectionName];
  const elementCoordinates = coordinatesFromSection(sectionEl);
  const toTop = elementCoordinates.top;

  const scrollToTop =
    calculateScroll(toTop, viewportHeight, documentHeight) + 1;
  const onTopFixedReadingLine = calculateFixedReadingLine(
    scrollToTop,
    viewportHeight
  );
  const scrollToBottom =
    calculateScroll(elementCoordinates.bottom, viewportHeight, documentHeight) -
    1;
  if (onTopFixedReadingLine < elementCoordinates.top) {
    return scrollToBottom;
  }
  return scrollToTop;
}
