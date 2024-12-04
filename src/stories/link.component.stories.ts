import { Meta, StoryFn } from '@storybook/angular';
import { LinkComponent } from 'app/components/shared/link/link.component';

export default {
  title: 'Shared/Link',
  component: LinkComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  component: LinkComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
