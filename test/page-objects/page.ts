export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page
   */
  public open(path?: string): Promise<string> {
    return path
      ? browser.url(`${browser.config.baseUrl}${path}`)
      : browser.url(`${browser.config.baseUrl}`);
  }

  public acceptCookieConsent(): Promise<true | void> {
    const acceptButton = $('.accept-cookies-button');
    acceptButton.click();

    return acceptButton.waitForDisplayed({ reverse: true });
  }
}
