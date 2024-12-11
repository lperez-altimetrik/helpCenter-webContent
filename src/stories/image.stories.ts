import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { ImageComponent } from 'app/components/shared/image/image.component';

export default {
  title: 'Shared/Image',
  component: ImageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: ImageComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
