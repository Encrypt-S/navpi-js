import { NavpiJsPage } from './app.po';

describe('navpi-js App', () => {
  let page: NavpiJsPage;

  beforeEach(() => {
    page = new NavpiJsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
