import { classToPlain } from "class-transformer";
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserDelete {
    id: string;
}
class DeleteUserService {
  async execute({id}:IUserDelete) {

      console.log(id);
      const usersRepository = getCustomRepository(UsersRepositories);

      const userAlreadyExists = await usersRepository.findOne({
        id,
      });

      if (!userAlreadyExists) {
          throw new Error("User not exists");
      }

      return await usersRepository.delete(id)
            .then(f => {
                console.log(f);
                var messagmsgeDelete = {
                  message:"Registro excluido com sucesso"
                }
            
                return messagmsgeDelete;
                
            }, err => {
              throw new Error("Erro na exclusão");
            });
           
  }
}

export { DeleteUserService };