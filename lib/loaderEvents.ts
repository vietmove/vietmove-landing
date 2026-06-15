let _fired = false

export const loaderHasFired = () => _fired

export function dispatchLoaderDone() {
  _fired = true
  window.dispatchEvent(new CustomEvent('loader:done'))
}
