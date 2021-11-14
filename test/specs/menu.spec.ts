import Menu from '../page-objects/menu';

describe('Sidebar menu', () => {
  before(async () => {
    await Menu.open();
    await Menu.acceptCookieConsent();
  });

  it('should open and close', async () => {
    await Menu.openSidebarMenu();

    await expect(Menu.sideNavigation).toBeClickable();

    await Menu.closeSidebarMenu();

    await expect(Menu.sideNavigation).not.toBeClickable();
  });

  it('should have 5 menu items', async () => {
    await Menu.openSidebarMenu();

    const menuItems = Menu.getSideNavigationMenuItems();

    await expect(menuItems).toBeElementsArrayOfSize(5);
  });
});
