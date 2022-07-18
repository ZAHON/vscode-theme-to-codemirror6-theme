import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const Self = () => (
  <Stack>
    <Title level="h4">self</Title>
    <Color />
    <FontStyle />
  </Stack>
);
