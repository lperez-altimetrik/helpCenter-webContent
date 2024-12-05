import { Meta, StoryFn } from '@storybook/angular';
import { BreadcrumbComponent } from '../app/components/shared/breadcrum/breadcrumb.component';

export default {
  title: 'Shared/BreadcrumbComponent',
  component: BreadcrumbComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
