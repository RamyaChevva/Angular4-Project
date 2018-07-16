import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  email:string;
  age:number;
  address:Address;
  hobbies:string[];
  posts : Post[];

  constructor(private dataService:DataService) {
    console.log('costructor ran...');
   }

  ngOnInit() {
    console.log('ngOnInit method ran...');
    this.name = 'Ramya Chevva';
    this.email='chevva.ramya@gmail.com';
    this.age=24;
    this.address = {
       street : '50 Main St',
       city : 'Irving',
       state : 'Texas'
    }
    this.hobbies = ['writing code', 'Watch movies', 'Listen to music'];

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
  onClick(){
    this.name='Brad Traversy';
    this.hobbies.push('New Hobby');
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }   
  deleteHobby(hobby) {
    for(let i=0; i<this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }
}



interface Address {
  street:string;
  city:string;
  state:string;
}

interface Post {
  id:number;
  title:string;
  body:string;
  userId:number
}