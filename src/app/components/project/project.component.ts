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
      name:"Project Name",
      url:"Host LINK",
      codeLink:"Git HUB LINK",
      imageUrl:["https://media.licdn.com/dms/image/C4D12AQG9jwW2Jm0Z2g/article-cover_image-shrink_600_2000/0/1623897312913?e=2147483647&v=beta&t=rvDzCYn3eXtJNl245Y-yczlDkLbKBjRz55iItzZUib0","httpcode"]
    },
    {
      name:"Project Name",
      url:"Host LINK",
      codeLink:"Git HUB LINK",
      imageUrl:["https://images.milanote.com/milanote/752a997a-9d50-474d-b4d7-745540f0a4b4_website-design-plan-example.png?auto=compress%2Cformat&w=1800","httpcode"]
    },
    {
      name:"Project Name",
      url:"Host LINK",
      codeLink:"Git HUB LINK",
      imageUrl:["https://media.licdn.com/dms/image/C4D12AQG9jwW2Jm0Z2g/article-cover_image-shrink_600_2000/0/1623897312913?e=2147483647&v=beta&t=rvDzCYn3eXtJNl245Y-yczlDkLbKBjRz55iItzZUib0","httpcode"]
    },
    {
      name:"Project Name",
      url:"Host LINK",
      codeLink:"Git HUB LINK",
      imageUrl:["https://images.milanote.com/milanote/752a997a-9d50-474d-b4d7-745540f0a4b4_website-design-plan-example.png?auto=compress%2Cformat&w=1800","httpcode"]
    }
  ];
}
interface project{
  name:string,
  url:string,
  codeLink:string
  imageUrl:string[]
}
