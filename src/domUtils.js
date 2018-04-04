const html = document.documentElement;
const body = document.body;
export const getScrollTop = () => document.scrollingElement.scrollTop;
export const getViewportHeight = () => window.innerHeight;
export const getDocumentHeight = () =>
  Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
export const getScrollBottom = () =>
  getDocumentHeight() - getViewportHeight() - getScrollTop();
