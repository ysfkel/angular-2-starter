import { Album } from './album.model.ts';

export class AlbumResult{
  album: Album;
  artists:Array<any>;

  constructor(obj:any) {
      this.album=new Album(obj.album);
      this.artists=obj && obj.artists || [];
     //  this.id=obj && obj.id|| null;
    //   this.name=obj && obj.name|| null;
  }

}

