//import { ImageCollection } from './image.collection';

export class Album{
   images:Array<any>=[]; //ImageCollection;
   name:string;
   id:number;

   constructor(obj:any) {
       this.images=obj && obj.images || [];//new ImageCollection(obj.images);
       this.name=obj && obj.name || null;
       this.id=obj && obj.id || null;
   }

}



