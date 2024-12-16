import { MatTableModule } from '@angular/material/table';
import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { TableComponent } from 'app/components/shared/table/table.component';

export default {
  title: 'Shared/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [MatTableModule],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  component: TableComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
