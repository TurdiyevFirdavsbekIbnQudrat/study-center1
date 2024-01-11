import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeacherResponse } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseUrl = 'https://localhost:7163/api/Teacher/';

  constructor(private http:HttpClient) { }
getAll(){
  return this.http.get<TeacherResponse[]>(this.baseUrl+'GetAll')
}
}
