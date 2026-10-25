import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-child',
  styleUrl: './child.scss',
  templateUrl: './child.html',
})
export class Child {
  public userName: string = 'kiril aboba, count of task 3';
  public taskArr: { title: string; done: boolean }[] = [];
  public task: string = '';
  public editCheck=false;
  public editText!:string;
  public erorSave:boolean=false;
  addButton() {
    if( this.task.length!==0){
 this.taskArr.push({ title: this.task, done: false });
    this.task = '';
    }
   
  }
  // onCheck(index:number){
  //   this.taskArr[index].done=!this.taskArr[index].done

  // }
  deleteButton(index:number){
    this.taskArr.splice(index, 1)
  }
  editButton(index:number){
    this.editCheck=!this.editCheck
    this.editText= this.taskArr[index].title
    this.erorSave=!this.erorSave
  }
  save(index:number){
    this.editCheck=!this.editCheck
    this.taskArr[index].title = this.editText;
  }
}