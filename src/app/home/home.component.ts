import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/model/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];

   constructor(private foodService : FoodService, private route : ActivatedRoute) {}

    ngOnInit():void{
      this.route.params.subscribe(params =>{
        if(params['searchTerm']){
          // this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase()
          // .includes(params['searchTerm'].toLowerCase()));
          this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
        }
        else if (params['tags']){
          this.foods = this.foodService.getAllFoodByTag(params['tags']);
        }
        else
        this.foods = this.foodService.getAll();
      })
      
    }  
    


}
