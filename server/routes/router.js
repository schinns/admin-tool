export default app => {
  app.use('/api/auth', require('./auth'));
}
