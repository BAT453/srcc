import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


export const routes: Routes = [
  { path: 'app-register', component: RegisterComponent},
  { path: 'app-login', component: LoginComponent},
  {
    path: '', component: UserComponent,
    children: [
      { path: '', redirectTo: 'userbook', pathMatch: 'full'  },
      {
        path: 'userbook',
        loadChildren: 'app/components/userbook/userbook.module#UserBookModule'
      },
      {
        path: 'user-newspaper',
        loadChildren: 'app/components/book/book.module#BookModule'
      },
      {
        path: 'user-journal',
        loadChildren: 'app/components/article/article.module#ArticleModule',
      }
    ]
  },{
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'app-author',
        loadChildren: 'app/components/author/author.module#AuthorModule'
      },
      {
        path: 'app-book',
        loadChildren: 'app/components/book/book.module#BookModule'
      },
      {
        path: 'app-article',
        loadChildren: 'app/components/article/article.module#ArticleModule',
      },
      {
        path: 'app-journal',
        loadChildren: 'app/components/journal/journal.module#JournalModule',
      },
      {
        path: 'app-newspaper',
        loadChildren: 'app/components/newspaper/newspaper.module#NewspaperModule',
      },
      {
        path: 'app-publishing-house',
        loadChildren: 'app/components/publishing-house/publishing-house.module#PublishingHouseModule'
      },
      {
        path: 'app-search',
        loadChildren: 'app/components/search/search.module#SearchModule'
      }
    ]
  },
];

export const appRoutingProviders: any[] = [
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(routes);

