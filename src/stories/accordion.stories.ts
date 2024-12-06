import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { AccordionComponent } from 'app/components/shared/accordion/accordion.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { LinkComponent } from 'app/components/shared/link/link.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Shared/Accordion',
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, MatExpansionModule, LinkComponent],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: AccordionComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
