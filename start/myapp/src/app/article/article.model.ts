import {SUPER_EXPR} from '@angular/compiler/src/output/output_ast';
import { Document } from './doc.model';

export class Article  extends Document{
    title:string;
    link:string;
    votes:number;

    constructor(title:string,link:string,votes?:number){
        this.title= title;
        this.link= link;
        this.votes=votes ||0;
        super();
    }

    voteUp():void{
        this.votes +=1; 
    }

    voteDown():void{
        this.votes -=1;
    } 
    
    getLength(){
        return super.getLength();
    }
    
    domain(): string { 
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0]; } catch (err) {
            return null;
         }
    }

}