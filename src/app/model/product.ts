export class Product{
  public $key: string;
  public image:string;
  public titre:string;
  public prix:string;


   constructor(id:string,image:string,titre:string,prix:string){
        this.image=image;
        this.$key=id;
        this.titre=titre;
        this.prix=prix;
   }
}
