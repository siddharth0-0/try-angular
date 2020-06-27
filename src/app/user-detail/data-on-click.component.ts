import { Component, OnInit } from '@angular/core';
import { detailService } from './detail-service.service';
import { dataOnClickService } from './data-on-click.service';
import { editOnClickService } from './edit-on-click.service';


@Component({
  selector: 'data-click',
  templateUrl: './data-on-click.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class DataOnClickComponent implements OnInit {

  mails :{};

  selectEmail = {
    "email" : "",
  };
  
  getData;

  editResponse ;

  // editData = {
  //   "user_id": '',
  //   "first_name": "",
  //   "last_name": "",
  //   "email": ""  

  // }

  constructor(private dService : detailService, private gService :dataOnClickService, private eService:editOnClickService){
    this.getData = {
      "user_id": '',
      "first_name": "",
      "last_name": "",
      "email": ""    
    };
  }

  noClick(event :any){
    this.selectEmail = event.target.value;
  }

  ngOnInit() {
    const observable = this.dService.getUser().subscribe(
      response=> {
        this.mails = response
        // console.log(response);
        observable.unsubscribe();
      }
    );
  }

  onDataClick(){
    const observable = this.gService.getOnClick(this.selectEmail).subscribe(
      response => {
        this.getData = response
        console.log(response) 
        observable.unsubscribe();
      },
      (error) => {
        console.log(error)
        observable.unsubscribe();
      }
    );
  }

  onEditClick(){
    const observable = this.eService.editOnClick(this.getData).subscribe(
      response=>{
        this.editResponse = response
        console.log()
      }
    );
  }
  
}

  // onEmailClick(){
  //     // console.log(this.selectEmail);
  //   this.onUpdate = 'email is : ' + this.selectEmail
  // }





  // constructor(private cService :  dataOnClickService){

  // }

  // selectMail;

  // ngOnInit() {
    
  //   this.selectMail= {
  //     email : '',
  //   };
  // }

  // onSelectMail(){
  //   this.cService.getOnClick(this.selectMail).subscribe(
  //     response => {

  //     }
  //   )
  // }
