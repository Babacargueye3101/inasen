import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { RequesteService } from 'src/app/service/requeste.service';

@Component({
  selector: 'app-jongue',
  templateUrl: './jongue.component.html',
  styleUrls: ['./jongue.component.css']
})
export class JongueComponent implements OnInit {
  jongues!: Product[];
  constructor(private service:RequesteService) { }

  ngOnInit(): void {
    let a=this.service.getlistejongue()
    a.snapshotChanges().subscribe(data=>{
      this.jongues=[];
      data.forEach(item=>{
        const $key = item.payload.key;
        const data = { $key, ...item.payload.val() };
        this.jongues.push(data as Product);
      })
    })
  }

}
