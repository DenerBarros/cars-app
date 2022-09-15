import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./IcategoriesRepository";


class PostgresCategoriesRepository implements ICategoriesRepository {

    findbyName(name: string): Category {
        throw new Error("Method not implemented.");
    }
    list(): Category[] {
        throw new Error("Method not implemented.");
    }
    create({ name, description}: ICreateCategoryDTO): void {
        throw new Error("Method not implemented.");
    }

}

export { PostgresCategoriesRepository };