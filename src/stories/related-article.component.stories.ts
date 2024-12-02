import { Meta, StoryFn } from '@storybook/angular';
import { RelatedArticlesComponent } from '../app/components/shared/related-articles/related-articles.component';

export default {
  title: 'Shared/Related-Articles',
  component: RelatedArticlesComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  component: RelatedArticlesComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
