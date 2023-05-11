import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  // public name="";
 
  Reason=['business','personal']; 
  Type=['External','Internal'];
  Division=['Filters','Filters1','Filters2'];
  Category=['Quality A','Quality B','Quality C'];
  Priority=['High','Low'];
  Department=['Financial','HR','Strategy'];
  Location=['Pune','Mumbai','Nashik']

  
  
  public selectedReason: string ="";
  public selectedType:string="";
  public selectedDivision:string="";
  public selectedCategory:string="";
  public selectedPriority:string="";
  public selectedDepartment="";

  public selectedStartDate="";
  public selectedEndDate="";
  public selectedLocation="";
  public selectedTextArea = ""

 
 constructor(public httpClient:HttpClient){}
  
  
  public onSave() :any
  {
    // console.log(this.selectedReason);
    // console.log(this.selectedType);
    // console.log(this.selectedDivision);
    // console.log(this.selectedCategory);
    // console.log(this.selectedPriority);
    // console.log(this.selectedDepartment);
    // console.log(this.selectedStartDate);
    // console.log(this.selectedEndDate);
    // console.log(this.selectedLocation);

    var projectDetails ={"textarea":this.selectedTextArea,
    "Reason":this.selectedReason,
    "Type":this.selectedType,
    "Division":this.selectedDivision,
    "Category":this.selectedCategory,
    "Priority":this.selectedPriority,
    "Department":this.selectedDepartment,
    "StartDate" : this.selectedStartDate,
    "EndDate" : this.selectedEndDate,
     "Location":this.selectedLocation}

     console.log(projectDetails)
     for(const key in projectDetails){

      console.log(`$[key] : $projectDetails[key]`)

      // this.httpClient.post('http;//localhost:5100/projectdetails',projectDetails).subscribe(

      // (success)=>{
        
      //   console.log("success"+success);
      // },
      // (error)=>{
      //   console.log("error"+error);
      // }
      // )

     }
  }






}
