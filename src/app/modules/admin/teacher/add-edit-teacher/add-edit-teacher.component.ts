import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from '../service/teacher.service';

@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrl: './add-edit-teacher.component.less'
})
export class AddEditTeacherComponent {
/**
 *
 */
form = this.fb.nonNullable.group({
  name:['',Validators.required],
  description:['',Validators.required],
  address:['',Validators.required],
  dateOfBirth:['',Validators.required],
  dateOfRegister:['',Validators.required],
  phone:['',Validators.required],
  email:['',Validators.required],
  telegramUserName:['',Validators.required],
  specialization:['',Validators.required],
})
constructor(private fb:FormBuilder,private $teachers:TeacherService) {
}

add(){
  const request = this.form.getRawValue();
  this.$teachers.createTeacher(request).subscribe({
    next:()=>{alert(`qo'shildi`)},
    error:()=>{alert(`qabul qilinmadi`)}
  })
}
}
