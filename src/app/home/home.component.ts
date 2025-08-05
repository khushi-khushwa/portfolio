import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  indexhover:number = 0;
 isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }
   services=[
    {name:'Responsive Design', detail:'I create websites that look and work great on all screen sizes — from large desktops to mobile devices.'},
    {name:'Web Development', detail:'I specialize in building dynamic and interactive websites using HTML, CSS, JavaScript, and frameworks like React and Angular. '},
    {name:'Graphic Design', detail:'With a creative eye for design, I craft visually appealing layouts, icons, and UI elements.'},
    // {name:'Backend Development'}
   ]
  header=[
    {name:'Home'},
    {name:'About'},
    {name:'Project'},
    {name:'Education'},
    {name:'skills'},
    
  ]

  work=[
    {
      heading:'All', id:'collapseOne',  image:[
        {image:''},
         {image:''},
         {image:''},
          {image:''},

      ]

    },

     {
      heading:'UI/UX', id:'collapseOne',  image:[
        {image:''},
         {image:''},
        

      ]

    },
     {
      heading:'Graphic', id:'collapseOne',  image:[
        {image:''},
         {image:''},
        

      ]

    }
  ]
}
