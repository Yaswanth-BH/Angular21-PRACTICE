import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Variables } from './components/variables/variables';
import { SignalEx } from './components/signal/signal';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'databinding', component: DataBinding },
  { path: 'variables', component: Variables },
  { path: 'signal', component: SignalEx },
  { path: '**', component: NotFound },
];
