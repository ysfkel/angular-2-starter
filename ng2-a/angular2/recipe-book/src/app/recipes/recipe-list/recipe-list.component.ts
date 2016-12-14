import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component'
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  @Output() recipeSelected=new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('dummy 1', 'dummy 1', 'http://www.fastfoodmenunutrition.com/wp-content/uploads/2015/03/fast-food.jpg',[]),
    new Recipe('dummy 2', 'dummy 2', 'http://s3.amazonaws.com/etntmedia/media/images/ext/481934088/corn-dog-fair-food.jpg',[]),
    new Recipe('dummy 3', 'dummy 3', 'http://foodandsnack.com/wp-content/uploads/2015/01/6129.jpg',[])
  ];
    ngOnInit() {
  }
  onSelected(e,recipe:Recipe) {
     e.preventDefault();
    this.recipeSelected.emit(recipe);
  }
}
