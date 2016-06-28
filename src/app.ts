export default (x: number, y: number): number => x + y;

const app: HTMLElement | null = document.getElementById('app');
if (app) {
  app.innerHTML = '<h1>Hello World!</h1>';
}

/**
 * HMR allows modules to replace on updates
 */
declare var module: any; // TODO: add webpack HMR typings
if (module.hot) {
  module.hot.accept();
}
