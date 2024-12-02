import { Meta, StoryFn } from '@storybook/angular';
import { BreadcrumComponent } from '../app/components/shared/breadcrum/breadcrum.component';

export default {
  title: 'Shared/BreadcrumComponent',
  component: BreadcrumComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
