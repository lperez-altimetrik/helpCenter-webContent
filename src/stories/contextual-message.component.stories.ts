import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ContextualMessageComponent } from 'app/components/shared/contextual-message/contextual-message.component';
import { MatIconModule } from '@angular/material/icon';
export default {
  title: 'Shared/Contextual-Message',
  component: ContextualMessageComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: ContextualMessageComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
