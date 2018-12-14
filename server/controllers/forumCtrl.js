const makePost = (req, res) => {
  let { user_id, post_title, post_content } = req.body;
  let db = req.app.get("db");
  db.add_post(user_id, post_title, post_content)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log(err)));
};

const getAllPosts = (req, res) => {
  let db = req.app.get("db");
  db.get_all_posts()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log(err)));
};

const getPost = (req, res) => {
  let db = req.app.get("db");
  let { id } = req.params;
  db.get_post(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log(err)));
};

const makeComment = (req, res) => {
  let { user_id, comment_content, post_id } = req.body;
  let db = req.app.get("db");
  db.add_comment(user_id, comment_content, post_id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log(err)));
};

module.exports = {
  makePost,
  getAllPosts,
  getPost,
  makeComment
};
