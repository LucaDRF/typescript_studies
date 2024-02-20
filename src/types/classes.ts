interface User {
    name: string;
    id: number;
    address: string;
}
   
class UserAccount {
    public name: string;
    private id: number;
    protected address: string = 'rua menezes';

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user = new UserAccount('luca', 1);
// const user1: User = new UserAccount('lucaa', 1);

console.log(user.name);
// console.log(user1.name);
