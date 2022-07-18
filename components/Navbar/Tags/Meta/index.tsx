import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const Meta = () => (
  <Stack>
    <Title level="h4">meta</Title>
    <Color />
    <FontStyle />
  </Stack>
);
