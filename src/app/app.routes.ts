import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Variables } from './components/variables/variables';
import { SignalEx } from './components/signal/signal';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';

export const routes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'databinding', component: DataBinding },
  { path: 'variables', component: Variables },
  { path: 'signal', component: SignalEx },
  { path: 'control-flow', component: ControlFlow },
  { path: 'dynamic-css-class', component: DynamicCssClass },
  { path: '**', component: NotFound },
];
