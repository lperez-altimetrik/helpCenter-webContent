import { Meta, StoryFn } from '@storybook/angular';
import { ArticleIndexComponent } from '../app/components/shared/article-index/article-index.component';

export default {
  title: 'Shared/ArticleIndex',
  component: ArticleIndexComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  component: ArticleIndexComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
