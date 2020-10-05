export const Auth = {
  currentAuthenticatedUser: jest.fn().mockResolvedValue({}),
  currentUserInfo: jest.fn().mockResolvedValue({}),
}

export const Hub = {
  listen: jest.fn(),
  remove: jest.fn(),
}
