import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack/index';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const Heading = () => (
  <Stack>
    <Title level="h4">heading</Title>
    <Color />
    <FontStyle />
  </Stack>
);
