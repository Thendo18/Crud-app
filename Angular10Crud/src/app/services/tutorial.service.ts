import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const baseURL = 'http://localhost:8080/api';



@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  findByPk(title: string) {
    throw new Error('Method not implemented.');
  }
  getAll() {
    throw new Error('Method not implemented.');
  }
  deleteAll() {
    throw new Error('Method not implemented.');
  }
  get(id: any) {
    throw new Error('Method not implemented.');
  }
  create(data: { title: string; description: string; }) {
    throw new Error('Method not implemented.');
  }
  delete: any;

oneTutorial: any;
  constructor(private http : HttpClient) { }


  addTutorial(tutorials : {}) {
    return this.http.post(`${baseURL}addTutorials`, tutorials);
  }

  deleteTutorial(id: string) {
    return this.http.delete(`${baseURL}deleteTutorial/:${id}`);
  }

  updateTutorial(body: {}, id: number) {
    return this.http.put(`${baseURL}updateTutorial/:${id}`, body);
  }

  viewAllTutorials() {
    return this.http.get(`${baseURL}getAllTutorial`);
  }  

  viewOneTutorial(id: number) {
    return this.http.get(`${baseURL}getOneTutorial/:${id}`);
  }  






}
