export class IUser {
    name: string;
    password: string;
    userId: string | undefined;
    constructor(name:string, password: string) {
        this.name = name;
        this.password = password;
    }
}