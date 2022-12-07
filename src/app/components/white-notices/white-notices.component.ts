import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-white-notices',
  templateUrl: './white-notices.component.html',
  styleUrls: ['./white-notices.component.css', './white-notices.responsive.component.css']
})
export class WhiteNoticesComponent implements OnInit  {
  @Input()
  photoCover:string = ''
  @Input()
  cardTime:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  cardDescription:string = ''
  @Input()
  Id:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
