import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactUsComponent } from '../app/components/shared/contact-us/contact-us.component';

export default {
  title: 'Shared/ContactUs',
  component: ContactUsComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatChipsModule, MatButtonModule, MatIconModule],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: ContactUsComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
