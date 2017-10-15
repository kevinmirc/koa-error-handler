module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = e.statusCode || e.status || 500;
    ctx.body = _.get(e, 'error.error') || _.get(e, 'error') || e;
  }
};
