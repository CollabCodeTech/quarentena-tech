import env from 'dotenv';
import express from 'express';
import nunjucks from 'nunjucks';
import minify from 'express-minify';
import compression from 'compression';
import events from './data/events';
import categories from './data/categories';

env.config();
const app = express();
const { PORT } = process.env;

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
  watch: true,
});

app.use(compression());
app.use(minify());
app.use(express.static('src/public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index.html', {
    events,
    categories: categories.map((category) => ({
      ...category,
      name: category.name.toLowerCase(),
    })),
  });
});

const getByCategory = (category) =>
  events.filter((item) => item.categories.includes(category));

app.get('/api/things', (req, res) => res.json(events));
app.get('/api/course', (req, res) => res.json(getByCategory('cursos')));
app.get('/api/community', (req, res) => res.json(getByCategory('comunidade')));
app.get('/api/twitch', (req, res) => res.json(getByCategory('twitch')));
app.get('/api/youtube', (req, res) => res.json(getByCategory('youtube')));

app.listen(PORT, () => {
  console.log(`Serve in http://localhost:${PORT}`);
  console.log('Shutdown: ctrl + c');
});
