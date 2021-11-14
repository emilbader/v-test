import { ChainablePromiseElement, ElementArray } from 'webdriverio';
import Page from './page';

class Menu extends Page {
  public get sideNavigationOpenButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('#sitenav-sidenav-toggle');
  }

  public get sideNavigationCloseButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('button[data-autoid="nav:siteNavCloseIcon"]');
  }

  public get sideNavigationLinksMenu(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('[data-autoid="nav:sideNavLinksMenu"]');
  }

  public get sideNavigation(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('#nav\\:sideNavigation');
  }

  public open(): Promise<string> {
    return super.open('/intl/v/car-safety/a-million-more');
  }

  public async openSidebarMenu(): Promise<void> {
    await this.sideNavigationOpenButton.click();
  }

  public async closeSidebarMenu(): Promise<void> {
    await this.sideNavigationCloseButton.click();
  }

  public async getSideNavigationMenuItems(): Promise<ElementArray> {
    return await this.sideNavigationLinksMenu.$$('[role=listitem]');
  }
}

export default new Menu();
