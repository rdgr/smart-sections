const html = typeof document !== 'undefined' ? document.documentElement: null;
const body = typeof document !== 'undefined' ? document.body : null;
export const getScrollTop = () => typeof document !== 'undefined' ? document.scrollingElement.scrollTop : 0;
export const getViewportHeight = () => typeof window !== 'undefined' ? window.innerHeight : 0;
export const getDocumentHeight = () =>
  Math.max(
    body ? body.scrollHeight : 0,
    body ? body.offsetHeight : 0,
    html ? html.clientHeight : 0,
    html ? html.scrollHeight : 0,
    html ? html.offsetHeight : 0
  );
export const getScrollBottom = () =>
  getDocumentHeight() - getViewportHeight() - getScrollTop();
