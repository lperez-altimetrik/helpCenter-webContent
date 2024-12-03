import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { TopBarComponent } from '../app/components/shared/top-bar/top-bar.component';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Shared/TopBar',
  component: TopBarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: TopBarComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
