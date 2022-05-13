module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '36dc8fa89c3c33f8814c9ced1d5e0f53'),
  },
});
