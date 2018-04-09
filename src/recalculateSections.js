import { calculateScrollPoint } from "./calculateScrollPoint";

export function recalculateSections(
  coordinates,
  readingLine,
  fixedReadingLine,
  sections
) {
  return Object.keys(coordinates).map((sectionName, i, arr) => {
    const section = coordinates[sectionName];
    let active;
    const isOnReadingLine =
      section.top <= readingLine && section.bottom > readingLine;
    const isTheFirstSection = i === 0;
    const isTheLastSection = i === arr.length - 1;
    const isReadingLineAbove = readingLine < section.top;
    const isReadingLineBelow = readingLine > section.top;
    const isOnFixedReadingLine =
      section.top <= fixedReadingLine && section.bottom > fixedReadingLine;
    const isInOrAboveFixedReadingLine =
      isOnFixedReadingLine || section.top < fixedReadingLine;
    const isInOrBelowFixedReadingLine =
      isOnFixedReadingLine || section.top > fixedReadingLine;
    if (isOnReadingLine) {
      active = true;
    } else if (
      isTheFirstSection &&
      isReadingLineAbove &&
      isInOrAboveFixedReadingLine
    ) {
      active = true;
    } else if (
      isTheLastSection &&
      isReadingLineBelow &&
      isInOrBelowFixedReadingLine
    ) {
      active = true;
    } else {
      active = false;
    }
    const yScrollPoint = calculateScrollPoint(sections, sectionName);
    return {
      name: sectionName,
      scroll: () => {
        window.scrollTo(0, yScrollPoint);
      },
      active
    };
  });
}
