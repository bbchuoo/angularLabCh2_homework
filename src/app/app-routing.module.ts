import { EmailComponent } from './email/email.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendComponent } from './send/send.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: EmailComponent },
  { path: 'send', component: SendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
