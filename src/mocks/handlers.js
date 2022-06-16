import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => res(ctx.status(200), ctx.json([
    {
      name: 'Vanilla',
      imagePath: '/images/vanilla.png',
    },
    {
      name: 'Chocolate',
      imagePath: '/images/chocolate.png',
    },
  ]))),
];
