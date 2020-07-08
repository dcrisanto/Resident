import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { BeadsComponent } from './beads/beads.component';
import { PositionComponent } from './position/position.component';
import { LoginGuard } from '../services/guards/login-guard.guard';
import { WaterServiceComponent } from './water-service/water-service.component';
import { ElectricServiceComponent } from './electric-service/electric-service.component';
import { CommonExpensesComponent } from './common-expenses/common-expenses.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { BuildingDataComponent } from './building-data/building-data.component';
import { ApartmentDataComponent } from './building-data/apartment-data/apartment-data.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        children: [
            { path: 'beads', component: BeadsComponent, data: {title: 'Cuentas'} },
            { path: 'position', component: PositionComponent, data: { title: 'Cargo'}},
            { path: 'water-service', component: WaterServiceComponent, data: { title: 'Sevicio de agua potable'}},
            { path: 'electric-service', component: ElectricServiceComponent, data: { title: 'Servicio de electricidad'}},
            { path: 'common-expenses', component: CommonExpensesComponent, data: { title: 'Servicios comunes'}},
            { path: 'administrator', component: AdministratorComponent, data: { title: 'Administrador'}},
            { path: 'building-data', component: BuildingDataComponent, data: { title: 'Datos del edificio'}},
            { path: 'apartment-data', component: ApartmentDataComponent, data: { title: 'Datos del edificio'}},
            { path: '', redirectTo: '/position', pathMatch: 'full'}
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );