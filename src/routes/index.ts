import {Request, Response, NextFunction} from "express";

export class Routes {       
    public routes(app): void {

        /* Home */
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                status: res.status,
                message: 'GET request successfulll!!!!'
            })
        }) ;
        

        /* Error handle 404 */
        app.use((req, res, next) => {
            var err = new Error('Not Found');
            err['status'] = 404;
            res.status(404).send({
                status: 404,
                message: err.message,
            })
        });

         /* Error handle 500 or Else */
        app.use((err: any, req, res, next) => {
            let status = err.status || 500;
            res.status(status).send({
                status: status,
                message: err.message,
            })
        });
    }
}