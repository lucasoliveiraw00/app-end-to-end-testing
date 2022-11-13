/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.ts',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android; ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug; cd -',
      reversePorts: [8081],
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        'cd android; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release; cd -',
    },
  },
  devices: {
    'emulator.local': {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_XL_API_29',
      },
    },
    'emulator.codemagic': {
      type: 'android.emulator',
      device: {
        avdName: 'emulator',
      },
    },
  },
  configurations: {
    'android.emu.debug': {
      device: 'emulator.local',
      app: 'android.debug',
    },
    'android.emu.release': {
      device: 'emulator.local',
      app: 'android.release',
    },
    'android.emu.codemagic:release': {
      device: 'emulator.codemagic',
      app: 'android.codemagic',
    },
  },
};
