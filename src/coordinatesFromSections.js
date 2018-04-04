export function coordinatesFromSection(sectionEl) {
  const rect = sectionEl.getBoundingClientRect();
  const { top, bottom } = rect;
  return {
    top: top + window.pageYOffset,
    bottom: bottom + window.pageYOffset
  };
}

export function coordinatesFromSections(sectionsEl) {
  return Object.keys(sectionsEl).reduce((acc, sectionName) => {
    const sectionEl = sectionsEl[sectionName];
    const rect = sectionEl.getBoundingClientRect();
    const { top, bottom } = rect;
    return {
      ...acc,
      [sectionName]: {
        top: top + window.pageYOffset,
        bottom: bottom + window.pageYOffset
      }
    };
  }, {});
}
