import { browser, element, by } from 'protractor';

describe('User List App', () => {

  beforeEach(async () => {
    await browser.get('/dashboard');
  });

  it('should have a header', async () => {
    const header = by.css('h2');
    const text = await element(header).getText();
    expect(text).toBe('Active Users');
  });

  it('should have 16 users on page load', async () => {
    const items = by.css('li');
    const users = element.all(items);
    expect(await users.count()).toBe(16);
  });
});