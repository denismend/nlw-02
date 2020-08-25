import { Request, Response } from "express";

import db from "../database/connection";
import BCryptHashUtils from "../utils/bcryptHashAndCompare";

export default class UsersController {
  async create(request: Request, response: Response) {
    const { user_id, password } = request.body;

    const user = await db('users')
      .where('users.id', '=', user_id);

    if(user && BCryptHashUtils.compareHash(user.)) {

    }
    else

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.status(201).send();
  }
}