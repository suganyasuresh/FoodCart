export class Food{

    // constructor(id:number) {
    //     this.id = id;
    // }
    // id:number;
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favourite:boolean = false;
    stars:number = 0;
    imageURl!:string;
    origins!:string[];
    cookTime!:string;     
}