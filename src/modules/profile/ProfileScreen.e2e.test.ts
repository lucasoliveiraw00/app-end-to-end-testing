import { by, device, expect, element } from 'detox';

describe('Module:Profile - ProfileScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have screen home', async () => {
    await expect(element(by.text('Home Screen'))).toBeVisible();
  });

  it('should have profile screen', async () => {
    await element(by.text('Profile')).tap();
    await expect(element(by.text('Profile Screen'))).toBeVisible();
  });

  it('should return home screen by pressing the back button', async () => {
    await device.pressBack();
    await expect(element(by.text('Home Screen'))).toBeVisible();
  });
});
