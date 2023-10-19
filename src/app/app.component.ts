import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./header.scss'],
})
export class AppComponent implements OnInit {

  nav_items:any[] = [
    {
      id: 0,
      name:"پرواز",
      link:"javascript:",
    },
    {
      id: 1,
      name:"هتل",
      link:"javascript:",
    },
    {
      id: 2,
      name:"آژانس ما",
      link:"javascript:",
      child_active:false,
      children:[
        {
          name:"فرم همکاری با ما",
          link:"javascript:",
        },
        {
          name:"نمایندگی",
          link:"javascript:",
        },
        {
          name:"ویدئو ها",
          link:"javascript:",
        },
        {
          name:"قوانین و مقررات",
          link:"javascript:",
        },
        {
          name:"درباره ما",
          link:"javascript:",
        },
        {
          name:"تماس با ما",
          link:"javascript:",
        }
      ]
    }
  ]
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
      this.nav_items[id].child_active = true;
    }
  }
  mouseleave(id:number) {
    if(!this.responsive){
      this.nav_items[id].child_active = false;
    }
  }
  click(id:number){
    if(this.responsive){
      this.nav_items[id].child_active = !this.nav_items[id].child_active;
    }
  }
  barsBtn() {
    document.body.classList.toggle("no-scroll")
    this.nav_ul_active = !this.nav_ul_active;
  }

}
