import { Meta, StoryFn } from '@storybook/angular';
import { ArticleFeedbackComponent } from '../app/components/shared/article-feedback/article-feedback.component';

export default {
  title: 'Shared/ArticleFeedback',
  component: ArticleFeedbackComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
