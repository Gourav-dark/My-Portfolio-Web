import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  public projects:project[]=[
    {
      name:"Responsive Site", 
      url:"",
      codeLink:"",
      imageUrl:"projects/pro01.png"
    },
    {
      name:"E-Book Site",
      url:"",
      codeLink:"",
      imageUrl:"projects/pro02.png"
    },
    {
      name:"Medicine X",
      url:"",
      codeLink:"",
      imageUrl:"projects/pro04.png"
    },
    {
      name:"Student Details portal",
      url:"",
      codeLink:"",
      imageUrl:"projects/pro03.png"
    },
  ];
}
interface project{
  name:string,
  url:string,
  codeLink:string
  imageUrl:string
}
