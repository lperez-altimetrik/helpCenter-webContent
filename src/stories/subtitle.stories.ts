import { Meta, StoryFn } from '@storybook/angular';
import { SubtitleComponent } from 'app/components/shared/subtitle/subtitle.component';

export default {
  title: 'Shared/Subtitle',
  component: SubtitleComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  component: SubtitleComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
