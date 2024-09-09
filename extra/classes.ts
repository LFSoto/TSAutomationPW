export class Person {
    name: string
    age: number
    userInfo:string
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    public showUserInfo():string{
        this.concatUserInfo();
        return this.userInfo
    }

    private concatUserInfo():void{
        this.userInfo = `User: ${this.name} is ${age} old.`
    }
}
