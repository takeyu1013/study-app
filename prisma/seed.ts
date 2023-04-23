import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedData = [
  {
    title: "Meeting Notes",
    body: "This is an example note. It contains **Markdown**!",
  },
  {
    title: "Make a thing",
    body: `It's very easy to make some words **bold** and other words *italic* with
Markdown. You can even [link to React's website!](https://www.reactjs.org).`,
  },
  {
    title:
      "A note with a very long title because sometimes you need more words",
    body: `You can write all kinds of [amazing](https://en.wikipedia.org/wiki/The_Amazing)
notes in this app! These note live on the server in the \`notes\` folder.
![This app is powered by React](https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/800px-React_Native_Logo.png)`,
  },
  { title: "I wrote this note today", body: "It was an excellent note." },
];

(async () => {
  await Promise.all(seedData.map((data) => prisma.note.create({ data })));
})()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
