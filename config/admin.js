module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6f417995d6ec3662bfc72aaa38fa7395'),
  },
});
