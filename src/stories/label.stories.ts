import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { LabelComponent } from 'app/components/shared/label/label.component';

export default {
  title: 'Shared/Label',
  component: LabelComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: LabelComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
