import { Meta, StoryFn } from '@storybook/angular';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';

export default {
  title: 'Components/PageNotFound',
  component: PageNotFoundComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
