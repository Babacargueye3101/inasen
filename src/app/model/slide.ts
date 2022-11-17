export class Slides{
  public $key: string;
  public image:string;
  public description:string;


   constructor(id:string,image:string,description:string){
        this.image=image;
        this.$key=id;
        this.description=description;
   }
}
