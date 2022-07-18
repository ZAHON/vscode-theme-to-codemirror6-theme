import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack/index';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const Atom = () => (
  <Stack>
    <Title level="h4">atom</Title>
    <Color />
    <FontStyle />
  </Stack>
);
