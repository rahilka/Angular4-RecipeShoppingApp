import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  	new Recipe('A test recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTocWipmFzjd69TUMVfw9N7FGNIfzuY4IpdONwKlZlQf5Pw1jtQig')
  ]; //an array of couples of Recipe objects

  constructor() { }

  ngOnInit() {
  }

}
