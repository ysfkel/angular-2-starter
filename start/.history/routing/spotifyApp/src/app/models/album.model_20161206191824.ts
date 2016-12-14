import { ImageCollection } from './image.collection';

export class Album{
   images: ImageCollection;

   constructor(obj:any) {
       this.images=new ImageCollection(obj.images);

   }

}



