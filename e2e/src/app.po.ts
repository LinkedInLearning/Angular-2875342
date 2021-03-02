import { browser, element, by, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {

  public async getDashboard(): Promise<any> {
    return browser.get('/dashboard');
  }

  public async getHeaderText(): Promise<string> {
    const header = by.css('h2');
    return element(header).getText();
  }

  public getListItems(): ElementArrayFinder {
    const items = by.css('li');
    return element.all(items);
  }

  public getInput(): ElementFinder {
    const input = by.css('input');
    return element(input);
  }
}
