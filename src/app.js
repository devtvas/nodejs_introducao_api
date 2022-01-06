const express = require("express");
const app = express();

const Post = require("./models/Posts");

const port = 5000; //porta

app.use(express.json()); //middle

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
app.get("/list_posts", async (req, res) => {
  try {
    const lista_Posts = await Post.find();
    res.send({ lista_Posts });
  } catch (error) {
    res.state(400).send(error);
  }
});

//buscar por params
app.get("/show_posts/:post_id", async (req, res) => {
  try {
    const post_id = req.params.post_id;
    const post = await Post.findById( post_id);
    // const post = await Post.find({_id: post_id});
    res.send({ post });
  } catch (error) {
    res.state(400).send(error);
  }
});
//definindo a porta do servidor
app.listen(5000, () => console.log(`running on port: ${5000}`));
