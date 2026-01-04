import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-pages',
  templateUrl: './recent-pages.component.html',
  styleUrl: './recent-pages.component.scss'
})
export class RecentPagesComponent {
filters = ['App', 'UX/UI', 'Graphics'];
  selectedFilter = 'App';

  projects = [
    {
      title: 'Momhomes Website',
        link:'https://www.momhomes.in/',
      category: 'UX/UI',
      img:'../../assets/work/ui/m.png',
      description:'Momhomes is the interior design website built using the react and user can contact by the form for the query.'
    },
    {
      title: 'Salasar Website',
        link:'https://www.salasartechnologies.com/',
      category: 'UX/UI',
      img:'assets/work/ui/sa.png',
      description: 'Independently developed and enhanced the company website using React, implementing smooth animations and multilingual support to improve user engagement and global accessibility.'
    },
    //  {
    //   title: 'Grow Your Business',
    //   category: 'UX/UI',
    //   img:'assets/work/ui/r.png',
    //   description: 'We design beautiful experiences and help your business grow.'
    // },
    //  {
    //   title: 'Grow Your Business',
    //   category: 'UX/UI',
    //   img:'assets/work/ui/sch.png',
    //   description: 'We design beautiful experiences and help your business grow.'
    // },
    {
      title: 'E-commerce Plant Website',
      category: 'App',
      link:'https://shyamecommerce.netlify.app',
      img:'assets/all/plant.png',
      description: 'Built core e-commerce functionalities using Angular, including product ordering, wishlist management, and cart integration. Focused on API-driven development to deliver a seamless.'
    },
    {
      title: 'Survey Creation',
        link:'https://surveycreation.netlify.app',
      category: 'APP',
      img:'assets/surveyimage.jpg',
      description: 'This is the dashboard where i work on the api for the data render in the form of graph, tables and the create the different type of question with the CRUD operation.'
    },
     {
      title: 'Weather App',
        link:'https://desktopweatherapp.netlify.app',
      category: 'App',
      img:'assets/all/weather.png',
      description: 'Use the weather api for real time data render for the weather and user can check the weather of different cities as well'
    },
      {
      title: 'Blood Donation certificate',
        link:'',
      category: 'Graphics',
      img:'assets/work/graphic/certificate.jpg',
      description: 'Blood donation certificate using the Adobe Illustrator'
    },
    {
      title: 'Medicine Label',
        link:'',
      category: 'Graphics',
      img:'assets/work/graphic/medicinesticker.jpg',
      description: 'Medicine label for wrap on the medicine bottle to he description.'
    },
    {
      title: 'Shyam logo',
        link:'',
      category: 'Graphics',
      img:'assets/work/graphic/shyam.png',
      description: ''
    },
    {
      title: 'Momhomes logo',
      category: 'Graphics',
        link:'',
      img:'assets/work/graphic/momlogo.jpg',
      description: ''
    },
    {
      title: 'Momhomes logo',
      category: 'Graphics',
        link:'',
      img:'assets/work/graphic/matchpost.png',
      description: ''
    },
    {
      title: 'Momhomes logo',
      category: 'Graphics',
        link:'',
      img:'assets/work/graphic/asclogo.jpg',
      description: ''
    },
    {
      title: 'Momhomes logo',
      category: 'Graphics',
        link:'',
      img:'assets/work/graphic/certificate2.jpg',
      description: ''
    },
  
    
  ];


  Button = [
    {name:"certificate"},
    {name:"logo"},
    {name:"labels"},
    {name:"poster"}
  ]
get filteredProjects() {
    return this.projects.filter(
    
      project => project.category.toLowerCase() === this.selectedFilter.toLowerCase()
    );
  }

  selectFilter(filter: string) {
    console.log(filter)
    this.selectedFilter = filter;
  }

  showphoto(name){
 console.log(name)
  }


}
