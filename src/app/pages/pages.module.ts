import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { BeadsComponent } from './beads/beads.component';
import { PositionComponent } from './position/position.component';
import { PAGES_ROUTES } from './pages.routes';

// Módulos
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { WaterServiceComponent } from './water-service/water-service.component';
import { ElectricServiceComponent } from './electric-service/electric-service.component';
import { CommonExpensesComponent } from './common-expenses/common-expenses.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { BuildingDataComponent } from './building-data/building-data.component';
import { ApartmentDataComponent } from './building-data/apartment-data/apartment-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagesComponent,
    BeadsComponent,
    PositionComponent,
    WaterServiceComponent,
    ElectricServiceComponent,
    CommonExpensesComponent,
    AdministratorComponent,
    BuildingDataComponent,
    ApartmentDataComponent
  ],
  exports: [
    PagesComponent,
    BeadsComponent,
    PositionComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    CommonModule,
    FormsModule,
  ]
})

export class PagesModule {}