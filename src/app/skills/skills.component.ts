import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  skills=[
    {
      skill:'HTML',
      image:'assets/logo/css.svg'
    },
     {
      skill:'CSS',
      image:'assets/logo/html.svg'
    },
     {
      skill:'Javascript',
      image:'assets/logo/js.svg'
    },
     {
      skill:'React',
      image:'assets/logo/react.svg'
    },
     {
      skill:'Angular',
      image:'assets/logo/angular.png'
    },
      {
      skill:'MongoDB',
      image:'assets/logo/mongodb.png'
    },
  ]
}
