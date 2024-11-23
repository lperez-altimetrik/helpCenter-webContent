import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { AuthService } from '../app/services/auth.service';

export default {
  title: 'Components/Dashboard',
  component: DashboardComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useValue: {
            logout: () => alert('Logged out!'),
          },
        },
      ],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
