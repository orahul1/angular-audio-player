import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
=======
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
>>>>>>> c382d0de1eef23a193823b9f5b60daffae1f8c8a
  }
}
