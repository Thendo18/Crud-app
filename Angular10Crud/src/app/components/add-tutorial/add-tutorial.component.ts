import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { RoutersService } from 'src/app/services/routers.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/Rx' ;
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.scss']
})
export class AddTutorialComponent implements OnInit {


  tutorial = {
    title: '',
    description: '',
    published: false
  };



  submitted = false;


  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }
  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };
    this.tutorialService.create(data)
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.submitted = true;
        },
        (        error: any) => {
          console.log(error);
        });
  }


  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  
}
}