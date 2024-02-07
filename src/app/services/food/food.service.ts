import { Injectable } from '@angular/core';
import{ Food } from '../../shared/model/Food';
import{ Tag } from '../../shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodByID(id: number):Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string): Food[]{
    return this.getAll().filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
  }

  getAllTag() :Tag[]{
    return[
    {name: 'All', count :6},
    {name: 'FastFood', count :1},
    {name: 'Lunch', count :3},
    {name: 'Snack', count :1},
    {name: 'Soup', count :1},
    ]

  }
  getAllFoodByTag(tag:string):Food[]{

    return tag =="All" ?
     this.getAll():this.getAll().filter(food => food.tags?.includes(tag)) ;

    // if(tag =="All")    
    //   return this.getAll();    
    // else
    //   return this.getAll().filter(food => food.tags?.includes(tag));    

  }

  getAll():Food[]{

    return [
      // '/assets/images/foods/food1.jpg',
      // '/assets/images/foods/food2.jpg',
      // '/assets/images/foods/food3.jpg',
      // '/assets/images/foods/food4.jpg',
      // '/assets/images/foods/food5.jpg',
      // '/assets/images/foods/food6.jpg',
      // '/assets/images/foods/food7.jpg',
      // '/assets/images/foods/food8.jpg' ,
      // {
      //   id: 1,
      //   name:'Burger',
      //   price:5,
      //   cookTime:'10min',
      //   favourite:false,
      //   origins: ['germany','us'],
      //   stars:3.5,
      //   imageURl:'/assets/images/foods/food1.jpg',
      //   tags:['FastFood','HamBurger']
      // },
      {
        id: 2,
        name:'Filafel',
        price:4,
        cookTime:'10 -15min',
        favourite:true,
        origins: ['saudi','dubai'],
        stars:4,
        imageURl:'/assets/images/foods/food2.jpg',
        tags:['FastFood','Filafel']
      },
      {
        id: 3,
        name:'Noodles',
        price:6,
        cookTime:'10min',
        favourite:false,
        origins: ['China','Korea'],
        stars:3.5,
        imageURl:'/assets/images/foods/food3.jpg',
        tags:['Lunch','Noodles']
      },

      {
        id: 4,
        name:'Meals',
        price:5,
        cookTime:'10-15min',
        favourite:true,
        origins: ['India','Srilanka'],
        stars:5,
        imageURl:'/assets/images/foods/food4.jpg',
        tags:['Lunch','SouthIndian Meals']
      },
      {
        id: 5,
        name:'French Fries',
        price:3,
        cookTime:'10min',
        favourite:false,
        origins: ['canada','us'],
        stars:3.5,
        imageURl:'/assets/images/foods/food5.jpg',
        tags:['Snack','French Fries']
      },
      {
        id: 7,
        name:'Pasta',
        price:3.7,
        cookTime:'10-20min',
        favourite:false,
        origins: ['china','korea'],
        stars:3.5,
        imageURl:'/assets/images/foods/food7.jpg',
        tags:['Lunch','Cheese Pasta']
      },
      {
        id: 8,
        name:'Prawn Soup',
        price:5,
        cookTime:'5-10min',
        favourite:true,
        origins: ['japan','korea'],
        stars:4.2,
        imageURl:'/assets/images/foods/food8.jpg',
        tags:['Soup','Prawn Soup']
      }
      

    ]
  }
}
