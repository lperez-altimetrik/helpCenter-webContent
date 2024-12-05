import { Meta, StoryFn } from '@storybook/angular';
import { VideoPlayerComponent } from '../app/components/shared/video-player/video-player.component';

export default {
  title: 'Shared/VideoPlayer',
  component: VideoPlayerComponent,
} as Meta;

const Template: StoryFn = (args) => ({
  component: VideoPlayerComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
