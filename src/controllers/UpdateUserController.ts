import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {

  async handle(request: Request, response: Response) {
    const { id, name, email, admin, password } = request.body;

   console.log(name)

   console.log(email)
   console.log(admin)
   console.log(password)
   
   const updateUserService = new UpdateUserService();

   const user = await updateUserService.execute({
     id,
     name,
     email,
     admin,
     password
   });

   return response.json(user);
  }
}

export { UpdateUserController };