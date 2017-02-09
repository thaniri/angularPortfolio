import { MyroutePage } from './app.po';

describe('myroute App', function() {
  let page: MyroutePage;

  beforeEach(() => {
    page = new MyroutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
