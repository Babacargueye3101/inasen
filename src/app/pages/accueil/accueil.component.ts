import { Slides } from './../../model/slide';
import { RequesteService } from './../../service/requeste.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  slides!: Slides[];
  constructor(private service:RequesteService) { }

  ngOnInit(): void {
    let a=this.service.getslides()
    a.snapshotChanges().subscribe(data=>{
      this.slides=[];
      data.forEach(item=>{
        const $key = item.payload.key;
        const data = { $key, ...item.payload.val() };
        this.slides.push(data as Slides);
        console.log(this.slides)
      })
    })
  }

}
