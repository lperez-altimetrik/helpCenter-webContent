import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../app/components/shared/card/card.component';
import { CarouselComponent } from 'app/components/shared/carousel/carousel.component';

export default {
  title: 'Shared/Carousel',
  component: CarouselComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, CardComponent],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: CarouselComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
