import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {

    }
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findbyName(name);

        if(specificationAlreadyExists) {
        throw new Error("Specification already exists");
        
        }
        this.specificationsRepository.create({ 
            description, 
            name});        
    }
}

export { CreateSpecificationService };