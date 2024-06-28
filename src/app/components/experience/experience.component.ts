import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  public educationHis=[
    {
      name:"Future Institute Of Engineering And Management",
      Course:"B.Tech In Computer Science Engineering",
      year:"2019 - 2023"
    },
    {
      name:"Dum Dum Airport Hindi High School",
      Course:"High School",
      year:"2017 - 2019"
    },
  ]; 
  public expri=[
    {
      postion:"Programmer Analyst Trainee",
      company:"Cognizant Technology Solutions Ltd.",
      year:"Sept 2023 - Present"
    },
    {
      postion:"FSE Intern",
      company:"Cognizant Technology Solutions Ltd.",
      year:"Feb 2023 - july 2023"
    },
    {
      postion:"internship",
      company:"Ardent Computech Pvt. Ltd.",
      year:"jan 2022 - April 2022"
    },
  ]
}
