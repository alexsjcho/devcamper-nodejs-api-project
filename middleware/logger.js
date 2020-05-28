//@description    Logs response description to console
const logger = (req, rest, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')} ${req.originalURL}`
  );
  next();
};

module.exports = logger;
