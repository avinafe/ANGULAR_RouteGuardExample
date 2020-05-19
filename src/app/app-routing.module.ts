import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorGuard } from './author.guard';

const routes: Routes = [
  { path: '', redirectTo: '/a', pathMatch: 'full' },
  { path: 'a', component: AComponent},
  { path: 'b', canActivate: [AuthorGuard], component: BComponent},
  { path: 'c', component: CComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
