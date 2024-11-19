const express = require("express");
const app = express();
const port = 3000;

const posts = [
  {
    titolo: "Il mio primo post",
    contenuto: "Questo è il contenuto del primo post",
    immagine: "",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio secondo post",
    contenuto: "Questo è il contenuto del secondo post",
    immagine: "",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio terzo post",
    contenuto: "Questo è il contenuto del terzo post",
    immagine: "",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio quarto post",
    contenuto: "Questo è il contenuto del quarto post",
    immagine: "",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio quinto post",
    contenuto: "Questo è il contenuto del quinto post",
    immagine: "",
    tags: ["tag1", "tag2", "tag3"],
  },
];

app.get("/", (req, res) => {
  const message = { message: "Server del mio blog" };
  res.json(message);
});

app.get("/bacheca", (req, res) => {
  res.json({ posts, postCount: posts.length });
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
