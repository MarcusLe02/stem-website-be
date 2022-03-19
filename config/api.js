module.exports = {
  responses: {
    privateAttributes: ['_v', 'id', 'createdAt', 'updatedAt', 'publishedAt'],
  },
  rest: {
    defaultLimit: 1000000,
    maxLimit: null,
    withCount: true,
  },
};
