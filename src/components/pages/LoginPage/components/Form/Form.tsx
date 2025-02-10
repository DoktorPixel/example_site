import { Button, Input } from '@/components/ui';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@/components/ui';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

type LoginForm = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: LoginForm) => {
    console.log('onSubmit', data);
  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      <div className="grid gap-4">
        <Form.Field name="email">
          <Form.Item>
            <Form.Label htmlFor="email">login_page.email_label</Form.Label>

            <Form.Control>
              <Input type="email" placeholder="login_page.email_placeholder" />
            </Form.Control>

            <Form.Message />
          </Form.Item>
        </Form.Field>

        <Form.Field name="password">
          <Form.Item>
            <Form.Label>login_page.password_label</Form.Label>

            <Form.Control>
              <Input type="password" />
            </Form.Control>

            <Form.Message />
          </Form.Item>
        </Form.Field>

        <Button type="submit" className="w-full">
          login_page.login_button
        </Button>
      </div>
    </Form>
  );
};
