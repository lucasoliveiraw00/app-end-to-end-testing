jest.mock('@react-navigation/core', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));
