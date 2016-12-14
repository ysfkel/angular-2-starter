//import { AlbumResult } from './../../../.history/src/app/models/Album.model_20161206185340';
export class AlbumResult{
  id: number;
  name: string;

  constructor(obj:any) {
       this.id=obj && obj.id|| null;
       this.name=obj && obj.name|| null;
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
