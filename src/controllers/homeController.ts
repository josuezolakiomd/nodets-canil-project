import { Request, Response } from 'express';

export const home = (request: Request, response: Response) => {
  response.send('Controller working nice!');
};

export const dogs = (request: Request, response: Response) => {
  response.send('Dogs!');
};

export const cats = (request: Request, response: Response) => {
  response.send('Cats!');
};

export const fishes = (request: Request, response: Response) => {
  response.send('Fishes!');
};
