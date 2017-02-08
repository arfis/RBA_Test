import { NglarPage } from './app.po';

describe('nglar App', function() {
  let page: NglarPage;

  beforeEach(() => {
    page = new NglarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
