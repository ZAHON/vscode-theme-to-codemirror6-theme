import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const Null = () => (
  <Stack>
    <Title level="h4">null</Title>
    <Color />
    <FontStyle />
  </Stack>
);
