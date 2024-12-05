import { moduleMetadata, Meta, StoryFn } from '@storybook/angular'; 
import { SidebarComponent } from 'app/components/shared/sidebar/sidebar.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

export default {
  title: 'Shared/Sidebar',
  component: SidebarComponent,
  decorators: [
    moduleMetadata({
      imports: [ BrowserAnimationsModule],
      providers: [provideAnimations()]
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
