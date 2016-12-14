//import { ImageCollection } from './image.collection';

export class Album{
   images:Array<any>=[]; //ImageCollection;
   name:string;

   constructor(obj:any) {
       this.images=obj && obj.images || [];//new ImageCollection(obj.images);
       this.name=obj && obj.name || null;
   }

}



