import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { CheckboxModule } from '@fundamental-ngx/core/checkbox';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {TableComponent} from './components/table/table.component';
import {ButtonFilterComponent} from './components/buttons/button-filter/button-filter.component';
import {HttpClientModule} from "@angular/common/http";
import { TableRowComponent } from './components/table-row/table-row.component';
import { SInputComponent } from './components/s-input/s-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ButtonFilterComponent,
    TableRowComponent,
    SInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [FundamentalNgxCoreModule],
    [CheckboxModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
