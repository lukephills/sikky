export default (x: number, y: number): number => x + y;

const app: HTMLElement | null = document.getElementById('app');

if (app) {
  app.innerHTML = '<h1>Hello World!</h1>';
}
