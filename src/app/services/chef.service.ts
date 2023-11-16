import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChefService {
  chefUrl: string = 'http://localhost:3000/chefs';
  constructor(private httpClient: HttpClient) {}
  getAllChefs() {
    return this.httpClient.get(this.chefUrl);
  }

  getChefById(id: number) {
    return this.httpClient.get(`${this.chefUrl}/${id}`);
  }

  deleteChef(id: number) {
    return this.httpClient.delete(`${this.chefUrl}/${id}`);
  }

  editChef(obj: any) {
    return this.httpClient.put(this.chefUrl, obj);
  }

  addChef(obj: any) {
    return this.httpClient.post(this.chefUrl, obj);
  }
}
