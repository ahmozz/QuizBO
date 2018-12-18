import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import { PageNotFoundComponent } from  './NotFound.component' 
import {QuizeComponent} from './components/quize/quize.component';
import {QuizeComponentc} from './components/quize/quizec.component';

import { Appproduct } from './product.component';
import { PassageID } from './passage.id';
import { Home } from './Home.component';
import { PassageIDC } from './passage.idC';


import { AppInventory } from './Inventory.component';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


const appRoutes: Routes = [
   
   { path: 'Product/:id', component: PassageID },
   { path: 'Product', component: Appproduct },
   { path: 'Inventory', component: AppInventory },
   { path: 'Tasks', component: TasksComponent },
   { path: 'Sujet', component: QuizeComponent },
   {path: 'SujetC', component: QuizeComponentc},
   {path: 'SujetC/:id', component: PassageIDC},
   { path: '', component: Home },
   { path: '#', component: Home },
   { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule ],
  declarations: [AppComponent, TasksComponent,Appproduct,AppInventory,PageNotFoundComponent,QuizeComponent,PassageID,Home,QuizeComponentc,PassageIDC],
  bootstrap: [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
