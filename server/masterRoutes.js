const userCtrl = require("./controllers/userCtrl");
const lessonCtrl = require("./controllers/lessonCtrl");
const commentCtrl = require("./controllers/commentCtrl");
const ratingCtrl = require("./controllers/ratingCtrl");

const { getUser } = require("./controllers/userCtrl");
const { getLesson } = require("./controllers/lessonCtrl");

const express = require("express");
// const router = express.Router();
// const upload = require('../services/multer');

// const singleUpload = upload.single('image')

module.exports = app => {
  //user
  // app.post('/api/user', userCtrl.getUser)
  app.post("/api/user/favorites");

  app.get("/api/user", getUser);
  // app.post('/api/user/image', function(req,res){
  //     singleUpload(req,res,function(err, some){
  //         if(err){
  //             return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}]})
  //         }
  //         return res.json({'imageUrl': req.file.location});
  //     })
  // })

  app.get("/api/user/all");
  app.get("/api/completed/:user_id");
  app.put("/api/user/:user_id");
  app.put("/api/completed_counter");
  app.put("/api/drill_counter");

  //lessons
  app.post("/api/lesson"); //create new lesson, return lesson id
  app.post("/api/completed/:lesson_id"); //to create a new row in completed_lessons
  app.post("/api/image/:lesson_id");
  app.delete("/api/lesson/:lesson_id");
  app.put("/api/completed/:lesson_id");
  app.put("/api/lesson/:lesson_id");
  app.put("/api/image/:lesson_id");
  app.get("/api/lesson/all");
  app.get("/api/lesson/:lesson_id", getLesson);
  app.get("/api/lesson/:user_id");

  //comment
  app.post("/api/comment/:lesson_id");
  app.delete("/api/comment/:comment_id");
  app.get("/api/comment/:lesson_id");

  //rating
  app.put("/api/rating/:lesson_id");
  app.get("/api/rating/:lesson_id");
};
