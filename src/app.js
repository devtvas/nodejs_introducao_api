const express = require("express");
const app = express();

<<<<<<< HEAD
require("dotenv").config();

const cors = require("cors");

const PORT = process.env.PORT || 3000; //porta

const Post = require("./models/Posts");

app.use(express.json()); //middle

app.use(cors);


app.get("/", async (req, res) => {
  res.send("Get")
})
=======
const Post = require("./models/Posts");

const port = 5000; //porta

app.use(express.json()); //middle
>>>>>>> 9685e7ce91f055af9e156473ca61a364d2ae5361

//criar novo
app.post("/create_post", async (req, res) => {
  try {
    const { title, content } = req.body; //spread - desestrutur o body

    const post = await Post.create({ title, content }); //classe Post

    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

//buscar todos
<<<<<<< HEAD
app.get("/list_post", async (req, res) => {
  try {
    const lista_Post = await Post.find();
    res.send({ lista_Post });
=======
app.get("/list_posts", async (req, res) => {
  try {
    const lista_Posts = await Post.find();
    res.send({ lista_Posts });
>>>>>>> 9685e7ce91f055af9e156473ca61a364d2ae5361
  } catch (error) {
    res.state(400).send(error);
  }
});

//buscar por params
<<<<<<< HEAD
app.get("/show_post/:post_id", async (req, res) => {
  try {
    const post_id = req.params.post_id;
    const post = await Post.findById(post_id);
=======
app.get("/show_posts/:post_id", async (req, res) => {
  try {
    const post_id = req.params.post_id;
    const post = await Post.findById( post_id);
>>>>>>> 9685e7ce91f055af9e156473ca61a364d2ae5361
    // const post = await Post.find({_id: post_id});
    res.send({ post });
  } catch (error) {
    res.state(400).send(error);
  }
});
<<<<<<< HEAD

//alterar por params
app.patch("/update_post/:post_id", async (req, res) => {
  try {
    const post_id = req.params.post_id;

    const { title, content } = req.body; //spread - desestrutur o body

    const post = await Post.findByIdAndUpdate(
      post_id,
      { title, content },
      { new: true }
    );

    res.send({ post });
  } catch (error) {
    res.send(error);
  }
});

app.delete("/delete_post/:post_id", async (req, res) => {
  try {
    const post_id = req.params.post_id;

    const { title, content } = req.body;

    await Post.findByIdAndDelete(post_id);

    res.send({ msg: "deletado com sucesso" });
  } catch (error) {}
  res.status(400).send(error);
});
//definindo a porta do servidor
app.listen(PORT, () => {
  console.log("running on port: " + PORT);
});
=======
//definindo a porta do servidor
app.listen(5000, () => console.log(`running on port: ${5000}`));
>>>>>>> 9685e7ce91f055af9e156473ca61a364d2ae5361
