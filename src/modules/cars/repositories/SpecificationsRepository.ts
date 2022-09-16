import { Specification } from "../model/Especification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }
   

    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findbyName(name: string): Specification {
        const specfication = this.specifications.find(
            (specification) => specification.name === name);
        return specfication; 
    }

}

export { SpecificationsRepository };