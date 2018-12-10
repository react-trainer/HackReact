const getUser = (req, res) => {
  let db = req.app.get("db");
  db.get_user_by_authid(req.user.auth_id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log(err)));
};

const editUserAbout = (req, res) => {
  let db = req.app.get("db");
  db.update_user_about([req.user.user_id, req.body.about_user])
    .then(response => {
      res.state(200).json(response)
    })
    .catch(err => res.status(500).send(err => console.log(err)));
}


module.exports={
  getUser,
  editUserAbout,
  
}
