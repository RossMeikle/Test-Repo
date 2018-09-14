import { ListItemComponent } from './components/list-item/list-item.component';
import { MealsService } from './services/meals.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule
    ],
    declarations: [
        ListItemComponent
    ],
    providers: [],
    exports:[
        ListItemComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders
    {
        return {
            ngModule: SharedModule,
            providers:[
                MealsService
            ]
        };
    }
}