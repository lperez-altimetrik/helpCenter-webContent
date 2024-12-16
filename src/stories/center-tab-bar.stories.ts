import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { CardComponent } from '../app/components/shared/card/card.component';
import { CenterTabBarComponent } from 'app/components/shared/center-tab-bar/center-tab-bar.component';

export default {
  title: 'Shared/CenterTabCenter',
  component: CenterTabBarComponent,
  decorators: [moduleMetadata({})],
} as Meta;

const Template: StoryFn = (args) => ({
  component: CenterTabBarComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
