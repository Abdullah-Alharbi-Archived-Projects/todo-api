const { Types } = require('mongoose');

module.exports = (req, res, next) => {
  // validate object id
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'Invalid id.' });
  return next();
};
