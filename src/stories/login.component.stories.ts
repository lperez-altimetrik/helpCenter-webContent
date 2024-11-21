import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../app/components/login/login.component';
import { AuthService } from '../app/services/auth.service';

export default {
  title: 'Components/Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: (username: string, password: string) => {
              if (username === 'root' && password === 'root') {
                alert(`Logged in as ${username}`);
                return true;
              }
              alert('Invalid credentials');
              return false;
            },
          },
        },
      ],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  username: '',
  password: '',
};
