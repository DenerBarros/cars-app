import { ICategoriesRepository } from "../../cars/repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/*
* [x] Definir o tipo de retorno
* [x] alterar o retorno de erro
* [x] acessar o repositorio
*/

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {
        
    }
    
    execute({ description, name }: IRequest): void {

        const categoryAlreadyExists = this.categoriesRepository.findbyName(name);
        if(categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }
    
        this.categoriesRepository.create({name, description});   
    }
}

export { CreateCategoryService };