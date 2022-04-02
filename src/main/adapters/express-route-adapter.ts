import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return (req: Request, res: Response) => {
    const httpResquest: HttpRequest = {
      body: req.body
    }
    void (async () => {
      const httpResponse = await controller.handle(httpResquest)
      res.status(httpResponse.statusCode).json(httpResponse.body)
    })()
  }
}
