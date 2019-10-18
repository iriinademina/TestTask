import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component'
import { AuthGuard } from '../app/components/auth/auth.guard';
import { StoreEnterComponent } from './components/store/store-enter/store-enter.component'
import { ResetPasswordComponent} from './components/auth/reset-password/reset-password.component'
import { ConfirmPasswordComponent } from './components/auth/confirm-password/confirm-password.component'

const appRoutes: Routes = [
  // { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'store',  component: StoreEnterComponent, canActivate: [AuthGuard] },
  // { path: '', redirectTo: '/auth', pathMatch: 'full' },
  // { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule' },
  // {
  //   path: 'reset-password',
  //   component: ConfirmPasswordComponent
  // },

  {
        path: 'auth',
        component: LoginComponent
  },

  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       children: [
        //  { path: 'login',
        //  component: LoginComponent
        //  },
          {
            path: 'reset-password',
            component: ResetPasswordComponent,
            // data: { title: 'Forgot Password' }
          },
        // ]
      // },
      {
        path: 'email/action',
        component: ConfirmPasswordComponent,
        // data: { title: 'Confirm Email Address' }
      }
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules },
     )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}