import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { PillComponent } from 'app/components/shared/pill/pill.component';

export default {
  title: 'Shared/Pill',
  component: PillComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: PillComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
