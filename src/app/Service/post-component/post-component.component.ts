import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  constructor( private postdata:ServiceService) { }

  ngOnInit() {
    //get all post
    this.postdata.GetAllPost().subscribe(res =>{
      console.log('Get all post ',res);
      
    })
//get all post by id
    this.postdata.GetPostById(77).subscribe(res=>{
      console.log('Get Post by Id',res);
      
    })

    //update post by id
this.updatePost();
//to call delete method 
this.deletepostById();
//to call create post method 
this.CreatePOst();
  }
 updatePost (){
let data= {
  id: new Date().getTime(),
  title:'Tise is updated title' 
}
this.postdata.UpdatePostById(1,data).subscribe(res=>{
  console.log('Data updated sucessfully',res);
  
})
 }

 deletepostById(){
  this.postdata.DeletePostById(1).subscribe(res =>{
    console.log('Delete post by id', res);
    
  })

 }
 CreatePOst(){
  let body={
    id:new Date().getDate(),
    title:'Thise is new post ',
    body:'Thise is the test method of httpClient'
  }
  this.postdata.CreatePost(body).subscribe(res=>{
    console.log('Post created succesfully',res);
    
  })
 }

}
