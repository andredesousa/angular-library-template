import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PageComponent, HeaderComponent, ButtonComponent],
  exports: [PageComponent, HeaderComponent, ButtonComponent],
})
export class MainModule {}
