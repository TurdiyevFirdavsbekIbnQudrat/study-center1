import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../service/teacher.service';
import { TeacherResponse } from '../models/teacher.model';

interface Person{
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit{
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  teachers:TeacherResponse[]=[]
  
  constructor(private $teachers:TeacherService) {}
  
  ngOnInit(): void {
    this.$teachers.getAll()
    .subscribe(
      {
        next:(response)=>{
          this.teachers=response
          // console.log(this.teachers)
          // alert("Malumotlar olib kelindi")
        },
        error:(err)=>{
          alert("nimadir xato")
        }
      }
      );
  }

}
