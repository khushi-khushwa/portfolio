import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
//  experiences = [
//     { date: 'Dec-2024  to June-2025 ', title: 'ANGULAR DEVELOPER ', address: 'GURGAON' },
//     { date: '2022 - PRESENT', title: 'WEB AND GRAPHIC DESIGNER' },
//     // { date: '2020 – 2021', title: 'WEB DESIGN COURSE', subtitle: 'House of Life, Leeds' },
//     // { date: '2018 – 2020', title: 'PARSONS, THE NEW SCHOOL', subtitle: 'Theme Junction, Bursa' },
//   ];

  education = [
    { date: '2025 – present', title: 'MCA', subtitle: 'MDU University' },
    { date: 'June 2020 – June 2023', title: 'BCA', subtitle: 'IGNOU University' },
    { date: '2017 – 2018', title: '12 Grade', subtitle: 'C.D. International School' },
    { date: '2015 – 2016', title: '10 Grade', subtitle: 'Vikas se. sec. school' },
  ];
}
