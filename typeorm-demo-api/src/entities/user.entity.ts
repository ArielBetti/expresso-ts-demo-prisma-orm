import { provide } from "inversify-binding-decorators";
import { v4 as uuidv4 } from "uuid";

@provide(User)
class User {
    public id: number;
    public name: string;
    public email: string;

    constructor(name: string, email: string) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
    }

    get Id(): number {
        return this.id;
    }
}

export { User };
