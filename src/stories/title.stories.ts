import { Meta, StoryFn } from '@storybook/angular';
import { TitleComponent } from 'app/components/shared/title/title.component';

export default {
  title: 'Shared/Title',
  component: TitleComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  component: TitleComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
