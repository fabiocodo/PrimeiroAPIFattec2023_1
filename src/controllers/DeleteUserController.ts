import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    
    const id= request.params.id;
    console.log(id)
    const deleteUserService= new DeleteUserService();

   const msg = await deleteUserService.execute({
     id
   });

   return response.json(msg);

  }
}

export { DeleteUserController };