import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TrimDirective } from './trim.directive';
import { TooltipPositionDirective } from './tooltip-position.directive';

@NgModule({
  declarations: [AppComponent, HighlightDirective, TrimDirective, TooltipPositionDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
