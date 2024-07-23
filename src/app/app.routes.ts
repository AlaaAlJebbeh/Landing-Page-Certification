import { Routes } from '@angular/router';
import { DescriptionArabicComponent } from './description-arabic/description-arabic.component';
import { DescriptionComponent } from './description/description.component';

export const routes: Routes = [
    {
        path:'',
        component: DescriptionComponent

    },
    {
        path:'en',
        component: DescriptionComponent
    },

    {
        path: 'ar',
        component: DescriptionArabicComponent
    },
];
