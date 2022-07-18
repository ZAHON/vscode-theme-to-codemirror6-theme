import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack/index';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const ClassName = () => (
  <Stack>
    <Title level="h4">class name</Title>
    <Color />
    <FontStyle />
  </Stack>
);
