import express from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import { router as mainRoutes } from './routes/index.routes';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((request, response) => {
  response.send('Page not found!');
});

const port: number = 3000;
server.listen(process.env.PORT || port, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT || port}`,
  );
});
