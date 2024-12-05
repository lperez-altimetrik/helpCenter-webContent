import { Meta, StoryFn } from '@storybook/angular';
import { ArticleSectionTitleComponent } from '../app/components/shared/article-section-title/article-section-title.component';

export default {
  title: 'Shared/ArticleSectionTitle',
  component: ArticleSectionTitleComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  component: ArticleSectionTitleComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
