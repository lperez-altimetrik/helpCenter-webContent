import { Meta, StoryFn } from '@storybook/angular';
import { TopBarComponent } from '../app/components/shared/top-bar/top-bar.component';

export default {
  title: 'Shared/TopBar',
  component: TopBarComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  component: TopBarComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
