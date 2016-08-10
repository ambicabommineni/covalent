import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ComponentsOverviewComponent }  from './overview';
import { HighlightDemoComponent } from './highlight';
import { StepsDemoComponent } from './steps';
import { ExpansionPanelDemoComponent } from './expansion-panel';
import { FileUploadDemoComponent } from './file-upload';
import { LoadingDemoComponent } from './loading';
import { MarkdownDemoComponent } from './markdown';
import { MediaDemoComponent } from './media';
import { PipesComponent } from './pipes';

const routes: Routes = [{
  children: [{
      component: ComponentsOverviewComponent,
      path: '',
    }, {
      component: HighlightDemoComponent,
      path: 'syntax-highlighting',
    }, {
      component: StepsDemoComponent,
      path: 'steps',
    }, {
      component: ExpansionPanelDemoComponent,
      path: 'expansion-panel',
    }, {
      component: FileUploadDemoComponent,
      path: 'file-upload',
    }, {
      component: LoadingDemoComponent,
      path: 'loading',
    }, {
      component: MarkdownDemoComponent,
      path: 'markdown',
    }, {
      component: MediaDemoComponent,
      path: 'media',
    }, {
      component: PipesComponent,
      path: 'pipes',
    },
  ],
  component: ComponentsComponent,
  path: 'components',
}];

export const componentsRoutes: any = RouterModule.forRoot(routes, { useHash: true });
