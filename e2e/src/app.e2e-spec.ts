import { by, ElementArrayFinder, ElementFinder } from 'protractor';
import { AppPage } from './app.po';

/**
 * CHALLENGE
 *
 * Write an e2e test that confirms the user input works as expected.
 *
 * When a user searches for 'davis':
 *
 *   1. That user should see only two results.
 *   2. And the word "Davis" should be highlighted
 *
 */

describe('User List App', () => {
  const page = new AppPage();

  beforeEach(async () => {
    await page.getDashboard();
  });

  it('should have a header', async () => {
    const text = await page.getHeaderText();
    expect(text).toBe('Active Users');
  });

  it('should have 16 users on page load', async () => {
    const users = page.getListItems();
    expect(await users.count()).toBe(16);
  });

  describe('Filter Input', () => {
    let input: ElementFinder;
    let items: ElementArrayFinder;

    beforeEach(async () => {
      input = page.getInput();
      items = page.getListItems();
      await input.sendKeys('davis');
    });

    it('should filter list on user search', async () => {
      expect(await items.count()).toBe(2);
    });

    it('should highlight filter text', async () => {
      (await items).forEach(item => {
        const span = item.element(by.css('span'));
        expect(span.getAttribute('class')).toBe('highlight-text');
      });
    });
  });
});
