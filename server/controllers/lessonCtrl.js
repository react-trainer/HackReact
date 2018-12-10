const getImages = (req, res) => {
  let db = req.app.get("db");
  db.get_lesson_images()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).send(err => console.log(err)));
};

module.exports = {
  getImages
};
