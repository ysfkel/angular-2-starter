import { Album } from './album.model.ts';


export class AlbumResult{
  album: Album;
  artists:Array<any>;
  name:string;
  id:string;

  constructor(obj:any) {
      this.album= new Album(obj.album);
      this.artists=obj && obj.artists || [];
      this.name=obj && obj.name || null;
      this.id=obj && obj.id || null;
  }

}

