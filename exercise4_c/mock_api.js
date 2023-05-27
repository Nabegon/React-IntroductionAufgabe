const http = require('http');
const url = require('url');

const blogArticles = [
  {
    "id": 1,
    "title": "First Post",
    "content": "This is my first post",
    "author": "Miki Watanabe",
    "date": "2023-05-26"
  },
  {
    "id": 2,
    "title": "Second Post",
    "content": "This is my second post",
    "author": "Miki Watanabe",
    "date": "2023-05-27"
  }
];

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  
  if (reqUrl.pathname === '/articles') {
    let articles = blogArticles;  
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(articles));
  } else if (reqUrl.pathname === '/articles/titles') {
    let titles = blogArticles.map(article => article.title);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(titles));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Article not found');
    return;
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
  console.log('Blog Articles:', blogArticles);
});
