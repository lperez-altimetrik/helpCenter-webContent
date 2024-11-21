import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { SearchComponentComponent } from '../app/components/shared/search-component/search-component.component';

export default {
  title: 'Shared/SearchComponent',
  component: SearchComponentComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  component: SearchComponentComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
