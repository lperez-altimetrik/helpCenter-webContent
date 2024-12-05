import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {} from '../app/components/shared/card/card.component';
import { BannerComponent } from 'app/components/shared/banner/banner.component';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'Shared/Banner',
  component: BannerComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatIconModule, MatButtonModule],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: BannerComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
