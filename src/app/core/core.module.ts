import {NgModule} from "@angular/core";
import {MainLayoutComponent} from "./components/main-layout";
import {PageNotFoundComponent} from "./components/page-not-found";

@NgModule({
  imports: [],
  declarations: [
    MainLayoutComponent,
    PageNotFoundComponent,
  ],
  exports: [],
  providers: [],
})
export class CoreModule {}
