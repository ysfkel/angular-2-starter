import { Image } from './image.model';

export class AlbumResult{
   images: Array<Image>;

   constructor(public images: Array<Image>) {

   }

}





export class YouTubeResult{
   id: string;
   title: string;
   description: string;
   thumbnailUrl: string;
   videoUrl: string;

   constructor(obj?:any){
       this.id=obj && obj.id || null;
       this.title=obj && obj.title || null;
       this.description=obj && obj.description || null;
       this.thumbnailUrl=obj && obj.thumbnailUrl || null;
       this.videoUrl=obj && obj.videoUrl|| null;
   }
}
