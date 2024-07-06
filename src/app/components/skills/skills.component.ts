import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  public skillIcons:skillicon[]=[
    {url:"skillicons/netcore.png",name:"Dot Net Core",alt:"Core Icons"},
    {url:"skillicons/angular.png",name:"Angular",alt:"Angular Icons"},
    {url:"skillicons/typescript.png",name:"TypeScript",alt:"TypeScript Icons"},
    {url:"skillicons/html.png",name:"HTML",alt:"HTML Icons"},
    {url:"skillicons/css.png",name:"CSS",alt:"CSS Icons"},
    {url:"skillicons/react.png",name:"React",alt:"React Icons"},
    {url:"skillicons/javascript.png",name:"JavaScript",alt:"Javascript Icons"},
    {url:"skillicons/sql-server.png",name:"SQL Server",alt:"SQL Server Icons"},
    {url:"skillicons/git.png",name:"git",alt:"git Icons"},
    {url:"skillicons/tailwind-css.png",name:"TailWind CSS",alt:"Tailwind Icons"},
    {url:"skillicons/bootstrap.png",name:"Bootstrap",alt:"Bootstrap Icons"},
    {url:"skillicons/java.png",name:"Java",alt:"Java Icons"},
    {url:"skillicons/csharp.png",name:"C#",alt:"CSharp Icons"},
  ];
}
interface skillicon{
  url:string,
  name:string,
  alt:string
}
