import { Meta, StoryFn } from '@storybook/angular';
import { FooterComponent } from '../app/components/shared/footer/footer.component';

export default {
  title: 'Shared/Footer',
  component: FooterComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  component: FooterComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
