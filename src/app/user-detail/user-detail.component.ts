import { Component, OnInit } from '@angular/core';
import { detailService } from './detail-service.service';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  mails : {}

  constructor(private dService : detailService) { }

  selectEmail;

  

  ngOnInit() {
    this.dService.getUser().subscribe(
      response=> {
        this.mails = response
        // console.log(response);
      }
    );
  }

  noClick(event :any){
    this.selectEmail = event.target.value;
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

}





// export class PersonDetailComponent implements OnInit {

//   registerUser ;

// constructor(private pService:personService ) { }

// ngOnInit() {
  
//   this.registerUser = {
//     first_name : '',
//     last_name : '',
//     email : '',
//   };
// }

// onButtonClick(){
//   this.pService.registerPerson(this.registerUser).subscribe(
//     response => {
//       console.log('oler')
//     },

//     error => console.log('error',error)
    
//   );
// }

// }
