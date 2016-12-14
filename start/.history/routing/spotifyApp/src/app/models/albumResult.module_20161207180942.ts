import { Album } from './album.model.ts';

export class AlbumResult{
  album: Album;

  constructor(obj:any) {
      this.album=new Album(obj.album);
     //  this.id=obj && obj.id|| null;
    //   this.name=obj && obj.name|| null;
  }

}

