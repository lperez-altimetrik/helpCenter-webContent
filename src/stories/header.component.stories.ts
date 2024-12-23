import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { HeaderComponent } from '../app/components/shared/header/header.component';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Shared/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: HeaderComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
