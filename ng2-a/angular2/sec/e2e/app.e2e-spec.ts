import { SecPage } from './app.po';

describe('sec App', function() {
  let page: SecPage;

  beforeEach(() => {
    page = new SecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
