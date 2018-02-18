import { Component, OnInit, ViewChild  } from '@angular/core';
import { Item } from '../../common/main.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageFormComponent implements OnInit {

  constructor() { }

  private model: Item = {
      id: 5,
      title: 'Course', 
      duration: '88', 
      date: 'February, 8 2018', 
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      topRated: false
    };
   @ViewChild('editCourseForm') form: any;

  ngOnInit() {
  }

  private onSubmit() { 
  	console.log("form submitted");
  }

  private onDurationChange(newDuration) {
    this.model.duration = newDuration;
  }

  private onCancel() {
    this.form.reset();
    this.model.duration = "";
  }
}
