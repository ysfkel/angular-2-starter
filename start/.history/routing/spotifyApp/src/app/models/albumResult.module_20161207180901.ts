import { Album } from './album.model.ts';

export class AlbumResult{
  album: Album;

  constructor(obj:any) {
      this.album=new Album(obj.album);
     //  this.id=obj && obj.id|| null;
    //   this.name=obj && obj.name|| null;
  }

}


// export class YouTubeResult{
//    id: string;
//    title: string;
//    description: string;
//    thumbnailUrl: string;
//    videoUrl: string;

//    constructor(obj?:any){
//        this.id=obj && obj.id || null;
//        this.title=obj && obj.title || null;
//        this.description=obj && obj.description || null;
//        this.thumbnailUrl=obj && obj.thumbnailUrl || null;
//        this.videoUrl=obj && obj.videoUrl|| null;
//    }
// }
