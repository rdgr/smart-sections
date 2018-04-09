import throttle from 'lodash.throttle';
import { recalculate } from './recalculate';

const eventThrottler = (eventHandler, ms) => throttle(eventHandler, ms);
const sections = {};
const sectionCallbacks = new Map();
const scrollCallbacks = new Set();

export const spy = {
  scrollHandler: () => {
    const recalculatedSections = recalculate(sections);
    Object.keys(sections).forEach(sectionName => {
      if (
        sectionCallbacks.get(sectionName) &&
        sectionCallbacks.get(sectionName).size
      ) {
        sectionCallbacks.get(sectionName).forEach(callback => {
          if (typeof callback === 'function') {
            const sectionState = recalculatedSections.find(
              result => result.name === sectionName
            );
            callback(sectionState);
          }
        });
      }
    });

    scrollCallbacks.forEach(callback => {
      if (typeof callback === 'function') {
        callback(recalculatedSections);
      }
    });
  },

  registerSectionSpy: (sectionName, callback) => {
    if (!sectionCallbacks.has(sectionName)) {
      sectionCallbacks.set(sectionName, new Set());
    }
    sectionCallbacks.get(sectionName).add(callback);
    spy.scrollHandler();
    return () => spy.unregisterSectionSpy(sectionName, callback);
  },

  unregisterSectionSpy: (sectionName, callback) => {
    if (sectionCallbacks.has(sectionName)) {
      sectionCallbacks.get(sectionName).delete(callback);
    }
  },

  registerScrollSpy: callback => {
    scrollCallbacks.add(callback);
    spy.scrollHandler();
    return () => spy.unregisterScrollSpy(callback);
  },

  unregisterScrollSpy: callback => {
    scrollCallbacks.delete(callback);
  },

  registerSection: (name, domElement) => {
    sections[name] = domElement;
    spy.scrollHandler();
    return () => spy.unregisterSection(name);
  },

  unregisterSection: name => {
    delete sections[name];
    spy.scrollHandler();
  }
};

window.addEventListener('scroll', eventThrottler(spy.scrollHandler, 66));
window.addEventListener('resize', eventThrottler(spy.scrollHandler, 66));
