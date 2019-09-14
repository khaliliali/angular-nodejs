const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-Width, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  res.status(201).json({
    message: 'Post added successfuly'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '12837t12837sd',
      title: 'first server post',
      content: 'first server content...'
    },
    {
      id: '5rtfjt6yu7y6r',
      title: 'second server post',
      content: 'second server content...'
    },
    {
      id: 'sdfv34tfgh56',
      title: 'third server post',
      content: 'third server content...'
    }
  ];
  res.status(200).json({
    message: 'posts fetched...',
    posts: posts
  });
});

module.exports = app;
