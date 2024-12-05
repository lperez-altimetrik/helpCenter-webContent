import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../app/components/shared/card/card.component';

export default {
  title: 'Shared/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatIconModule],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: CardComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
