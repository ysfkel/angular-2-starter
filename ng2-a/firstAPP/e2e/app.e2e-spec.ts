import { FirstAPPPage } from './app.po';

describe('first-app App', function() {
  let page: FirstAPPPage;

  beforeEach(() => {
    page = new FirstAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
