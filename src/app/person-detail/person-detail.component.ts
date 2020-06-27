import { Component, OnInit } from '@angular/core';
import { personService } from './person-service.service';

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  providers:[ personService ]
})
export class PersonDetailComponent implements OnInit {

  registerUser ;

  messageOnClick ;

  constructor(private pService:personService ) { }

  ngOnInit() {
    
    this.registerUser = {
      first_name : '',
      last_name : '',
      email : '',
    };
  }

  onButtonClick(){
    this.pService.registerPerson(this.registerUser).subscribe(
      response => {
        // console.log(response)
        this.messageOnClick=response
        // this.response;
      },

      error => console.log('error',error)
      
    );
  }

}
