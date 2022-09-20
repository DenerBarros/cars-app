import { Response, Request } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {

    constructor(private createdCategoryUseCaseService: CreateCategoryUseCase) {

    }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;  
      
    
        this.createdCategoryUseCaseService.execute({name, description});
        
        return response.status(201).send();
    }
}

export { CreateCategoryController };