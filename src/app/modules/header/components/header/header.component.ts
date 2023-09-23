import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header_items:any[] = [
    {
      id: 0,
      name: "صفحه اصلی",
      link: "javascript:",
      child_active: false,
      child: [
        {
          name: "صفحه اصلی1",
          link: "javascript:",
        },
        {
          name: "صفحه اصلی2",
          link: "javascript:",
        },
        {
          name: "صفحه اصلی3",
          link: "javascript:",
        }
      ],
    },
    {
      id: 1,
      name: "صفحه اصلی",
      link: "/xscvbjkl",
    },
    {
      id: 2,
      name: "صفحه اصلی",
      link: "javascript:",
      child_active: false,
      child: [
        {
          name: "صفحه اصلی1",
          link: "javascript:",
        },
        {
          name: "صفحه اصلی2",
          link: "javascript:",
        },
        {
          name: "صفحه اصلی3",
          link: "javascript:",
        }
      ],
    },
  ];
  responsive:boolean = false;
  nav_ul_active:boolean = false;
  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth <= 992){
      this.responsive = true
    }
  }
  mouseenter(id:number) {
    if(!this.responsive){
      this.header_items[id].child_active = true;
    }
  }
  mouseleave(id:number) {
    if(!this.responsive){
      this.header_items[id].child_active = false;
    }
  }
  click(id:number){
    if(this.responsive){
      this.header_items[id].child_active = !this.header_items[id].child_active;
    }
  }


  barsBtn() {
    document.body.classList.toggle("no-scroll")
    this.nav_ul_active = !this.nav_ul_active;
  }


}
