import { ImageCollection } from './image.collection';

export class Album{
   images: ImageCollection;

   constructor(obj:any) {
       images:obj && new ImageCollection(obj.images)
   }

}



