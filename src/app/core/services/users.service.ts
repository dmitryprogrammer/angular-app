import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {User} from "../models/users.models";
import {DOMAIN_URL} from "./common-data";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private url: string = `${DOMAIN_URL}users/`;

  constructor(private http: HttpClient) {
  }

  public getUser(id: any): Observable<User> {
    return this.http.get(`${this.url}/${id}`) as Observable<User>;
  }
}
