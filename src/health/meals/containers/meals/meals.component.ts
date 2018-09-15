import { ScheduleComponent } from './../../../schedule/containers/schedule/schedule.component';
import { Store } from 'store';
import { MealsService, Meal } from './../../../shared/services/meals.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'meals',
  styleUrls: ['meals.component.scss'],
  template: `
    <div class="meals">
      <div class="meals__title">
        <h1>
          <img src="/img/food.svg"> Your Patients
        </h1>
        <a class="btn__add" [routerLink]="['../meals/new']">
        <img src="/img/add-white.svg"> Add new patient
        </a>
      </div>
      <div *ngIf="meals$ | async as meals; else loading;">
          <div class="message" *ngIf="!meals.length">
            <img src="/img/face.svg"> No Patients, add a new patient to begin
          </div>
        <list-item *ngFor="let meal of meals" [item]="meal" (remove)="removeMeal($event)"></list-item>
      </div>
      <ng-template #loading>
        <div class="message">
          <img src="/img/loading.svg"> Fetching Patients...
        </div>
      </ng-template>
    </div>
  `
})
export class MealsComponent implements OnInit, OnDestroy {

  meals$: Observable<Meal[]>;
  subscription: Subscription;


  constructor(private mealsService: MealsService, private store: Store) {}


  ngOnInit(){
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealsService.meals$.subscribe();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  removeMeal(event: Meal){
    this.mealsService.removeMeal(event.$key);
  }
}