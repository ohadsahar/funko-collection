export class RegisterInterface {

  constructor(public id: string, public email: string, public firstname: string, public lastname: string,
    public password: string, public age: number, public favoritePop: string,
    public numberOfPops: number, public yearOfStartCollection: string, public profileImage: File, public miniImage: File) { }
}
