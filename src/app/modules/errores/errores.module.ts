import { NgModule } from '@angular/core';
import { ErroresRoutingModule } from './errores-routing.module';
import { ErroresListComponent } from './errores-list/errores-list.component';
import { PartialsModule } from '../../views/partials/partials.module';
import { ErroresComponent } from './pages/errores/errores.component';
import { ErroresHomeComponent } from './pages/errores-home/errores-home.component';
import { ErrorService } from './error.service';


@NgModule({
  declarations: [ErroresListComponent, ErroresComponent, ErroresHomeComponent],
  imports: [
    PartialsModule,
    ErroresRoutingModule
  ],
  providers:[ErrorService]
})
export class ErroresModule { }
