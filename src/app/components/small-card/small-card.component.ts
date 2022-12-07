import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string =''
  @Input()
  cardTime:string = ''
  @Input()
  cardTitle:string =''
  @Input()
  Id:string = '0'
  constructor() { }

  ngOnInit(): void {
  }

}