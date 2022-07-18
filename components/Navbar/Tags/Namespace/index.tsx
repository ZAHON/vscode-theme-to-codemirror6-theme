import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const Namespace = () => (
  <Stack>
    <Title level="h4">namespace</Title>
    <Color />
    <FontStyle />
  </Stack>
);
