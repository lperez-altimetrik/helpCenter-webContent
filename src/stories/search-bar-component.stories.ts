import { moduleMetadata, Meta, StoryFn } from '@storybook/angular'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from 'app/components/shared/search-bar/search-bar.component';

export default {
  title: 'Shared/SearchBar',
  component: SearchBarComponent,
  decorators: [
    moduleMetadata({
      imports: [ BrowserAnimationsModule],
      providers: []
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
