import UserController from '@src/controllers/UserController';
import { Router } from 'express';

/**
 * @api {post} /users/sign_up 1. Sign up
 * @apiVersion 0.1.0
 * @apiGroup II. Users
 *
 * @apiHeader {String} Content-Type application/json.
 * @apiHeader {String} Accept application/json.
 *
 * @apiHeaderExample {Header} Header-Example
 *      "Content-Type": "application/json"
 *      "Accept": "application/json"
 *
 * @apiParam {String} fullname
 * @apiParam {String} username
 * @apiParam {String} password
 * @apiParam {String} email
 * @apiParam {String} avatar
 *
 * @apiSuccess {Object} data
 *
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  {
 *      "data": [
 *            {
 *              "_id": "5fbe0f803252b8487841c417",
 *              "fullname": "DanhNguyen",
 *              "username": "coldblooda9",
 *              "email": "coldblooda9@gmail.com",
 *              "avatar": "",
 *              "status": 'ACTIVE',
 *            }
 *        ]
 *  }
 *
 * @apiError (404 Not Found) NotFound API not found
 * @apiErrorExample {json} 404 Not Found Error
 *      HTTP/1.1 404 Not Found
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiErrorExample {json} 500 Internal Server Error
 *  HTTP/1.1 500 Internal Server Error
 *  {
 *    "message": "error message"
 *  }
 */
export default (route: Router) => route.post('/sign_up', new UserController().signUp);
