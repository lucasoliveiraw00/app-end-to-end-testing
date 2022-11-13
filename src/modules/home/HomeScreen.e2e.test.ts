import { by, device, expect, element } from 'detox';

describe('Module:Home - HomeScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen', async () => {
    await expect(element(by.text('Home Screen'))).toBeVisible();
  });
});
