import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChatPageModule       } from '../pages/chat/chat.module';
import { HomePageModule       } from '../pages/home/home.module';
import { ListPageModule       } from '../pages/list/list.module';
import { LoginPageModule      } from '../pages/login/login.module';
import { NewRequestPageModule } from '../pages/new-request/new-request.module';
import { NewUserPageModule    } from '../pages/new-user/new-user.module';
import { TutorialPageModule   } from '../pages/tutorial/tutorial.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,

    ChatPageModule,
    HomePageModule,
    ListPageModule,
    LoginPageModule,
    NewRequestPageModule,
    NewUserPageModule,
    TutorialPageModule,
    IonicModule.forRoot(MyApp, { backButtonText: '' }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
