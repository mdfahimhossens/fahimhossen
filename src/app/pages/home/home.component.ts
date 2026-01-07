import { Component, OnInit } from '@angular/core';
import { Services } from '../../interfaces/services';
import { Work } from '../../interfaces/work';
import { Portfolio } from '../../interfaces/portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  service: Services = {
    img: '../../assets/img/icon/coding.png',
    title: 'Front-End Developer',
      description: ` 
      <span><b>✔</b> Responsive Design </span> <br/>
      <span><b>✔</b> Creative Web Solution </span> <br/>
      <span><b>✔</b> Pixel-perfect UI </span> <br/>
      <span><b>✔</b> Fast loading websites </span>
      `,
  }


  services: Services[] = [
  {
    img: '../../assets/img/icon/coding.png',
    title: 'Front-End Developer',
    description: `
        <span><b>✔</b> Responsive Design</span><br/>
        <span><b>✔</b> Creative Web Solution </span> <br/>
        <span><b>✔</b> Pixel-perfect UI</span><br/>
        <span><b>✔</b> Fast loading websites</span>
    `,
  },
  {
    img: '../../assets/img/icon/web_devepolment.png',
    title: 'Back-End Developer',
    description: `
        <span><b>✔</b> Secure PHP & Laravel </span><br/>
        <span><b>✔</b> Database Management</span><br/>
        <span><b>✔</b> Admin panel development</span> <br/>
        <span><b>✔</b> REST API + Auth Systems</span>
    `,
  },
  {
    img: '../../assets/img/icon/wordpress.png',
    title: 'Wordpress Developer',
    description: `
        <span><b>✔</b> Custom Theme Development</span><br/>
        <span><b>✔</b> WooCommerce Store Setup</span><br/>
        <span><b>✔</b> Speed Optimization</span><br/>
        <span><b>✔</b> Bug Fix & Maintenance</span>
    `,
  }
];

  work: Work = {
    img: '../../assets/img/work_icon/idea1.png',
    title: 'Idea',
    describe: 'First Step'
  }

  works: Work[] = [
    {
      img: '../../assets/img/work_icon/idea1.png',
      title: 'Idea',
      describe: 'First Step'
    },
    {
      img: '../../assets/img/work_icon/palette.png',
      title: 'Design',
      describe: 'Second Step'
    },
    {
      img: '../../assets/img/work_icon/developer.png',
      title: 'Develop',
      describe: 'Third Step'
    },
    {
      img: '../../assets/img/work_icon/coffee.png',
      title: 'Result',
      describe: 'Last Step'
    }
  ]

  portfolio: Portfolio = {
    img: '../../assets/img/testimonial/educavo.png',
    title: 'Business Website for Corporate',
    descrip: `
    <span>✔ Responsive Business Website</span><br/>
      <span>✔ Modern & Clean UI/UX Design</span><br>
      <span>✔ Cross-browser Compatibility</span><br>
      <span>✔ SEO Optimized & Fast Loading</span>
    `,
    link: 'https://educavo20.netlify.app/'
  }

  portfolioItem: Portfolio[] = [
    {
      img: '../../assets/img/testimonial/educavo.png',
      title: 'Business Website for Corporate',
      descrip: `
        <span>✔ Responsive Business Website</span> <br/>
       <span>✔ Modern & Clean UI/UX Design</span><br>
      <span>✔ Cross-browser Compatibility</span><br>
      <span>✔ SEO Optimized & Fast Loading</span>
      `,
      link: 'https://educavo20.netlify.app/'
    },
    {
      img: '../../assets/img/testimonial/construct.png',
      title: 'Real Estate Website',
      descrip: `
      <span>✔ Built with Bootstrap 5</span><br>
      <span>✔ Interactive UI using JavaScript & jQuery</span><br>
      <span>✔ Property Listing & Gallery Features</span><br>
      <span>✔ Mobile Friendly & SEO Ready</span>
      `,
      link: 'https://contractor20.netlify.app'
    },
    {
      img: '../../assets/img/testimonial/medicate.png',
      title: 'Health Care Landing Page',
      descrip: `
      <span>✔ Built with Bootstrap 5</span><br>
      <span>✔ Smooth Animations & Interactive Layout</span><br>
      <span>✔ Mobile-first Responsive Design</span><br>
      <span>✔ Clean & Professional Look</span>
      `,
      link: 'https://pregnancy20.netlify.app'
    }
  ]

}
