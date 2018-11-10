import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable()
export class UserService {

    private User: User;

    constructor() { }

    public setParams(param) {
        this.User = param;
    }

    public getParams() {
        return this.User;
    }
}