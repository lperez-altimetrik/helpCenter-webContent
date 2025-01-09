import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleIndexComponent } from 'app/components/shared/article-index/article-index.component';

export default {
  title: 'Shared/ArticleIndex',
  component: ArticleIndexComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
      providers: [],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: ArticleIndexComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
