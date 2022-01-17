import { rest } from 'msw';
import { students } from 'mock/data/students';
import { groups } from 'mock/data/groups';

//req - contain information about request that come to us
//res - is answer from our server
//ctx -  is a method that allow as change information from res

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter((student) => student.group === req.params.group);
      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudents,
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
];
