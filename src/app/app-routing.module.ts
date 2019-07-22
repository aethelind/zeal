import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  { path: "tab4", loadChildren: "./tab4/tab4.module#Tab4PageModule" },
  { path: "start", loadChildren: "./start/start.module#StartPageModule" },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterPageModule"
  },
  { path: 'register2', loadChildren: './register2/register2.module#Register2PageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'interests', loadChildren: './interests/interests.module#InterestsPageModule' },
  { path: 'matches', loadChildren: './matches/matches.module#MatchesPageModule' },
  { path: 'register3', loadChildren: './register3/register3.module#Register3PageModule' },
  { path: 'register4', loadChildren: './register4/register4.module#Register4PageModule' },
  { path: 'register5', loadChildren: './register5/register5.module#Register5PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
