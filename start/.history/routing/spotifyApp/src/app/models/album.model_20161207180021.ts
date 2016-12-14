import { ImageCollection } from './image.collection';

export class Album{
   images: ImageCollection;

   constructor(obj:any) {
       this.images=obj && obj.images || [];//new ImageCollection(obj.images);

   }

}



