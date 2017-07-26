import { AngularListingsPage } from './app.po';

describe('angular-listings App', () => {
  let page: AngularListingsPage;

  beforeEach(() => {
    page = new AngularListingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
