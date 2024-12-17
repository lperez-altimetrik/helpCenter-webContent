import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { ModalComponent } from 'app/components/shared/modal/modal.component';

export default {
  title: 'Shared/Modal',
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule, MatIconModule],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: ModalComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
