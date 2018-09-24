const handleProfileGet = (req, res, db) => {
  const { id } = req.params;

  db.select('*')
    .from('users')
    .where({ id })
    .then(user => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(404).json("This profile doesn't exist");
      }
    })
    .catch(err => {
      res.status(404).json("This profile doesn't exist");
    });
};

module.exports = {
    handleProfileGet: handleProfileGet
};