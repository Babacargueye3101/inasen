import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class RequesteService {
  comlisteRef!: AngularFireList<any>;    // Declaration de la liste de produit
  comRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
  //recuperer la liste des slides
  getslides(){
    this.comlisteRef=this.db.list('slides/image');
    return this.comlisteRef;
  }
  //recuperer la liste des jongues
  getlistejongue(){
    this.comlisteRef=this.db.list('products/jongue');
    return this.comlisteRef;
  }
}
