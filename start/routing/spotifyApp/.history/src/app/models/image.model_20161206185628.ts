
export class Image{
  url: string;


  constructor(obj:Any) {
     this.url = obj && obj.url || null;
  }

}
