const getUser = (req, res) => {
  let db = req.app.get("db");
  console.log('whatup',req.user)
  db.get_user_by_authid(req.user.auth_id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log(err)));
};

module.exports={
  getUser
}
