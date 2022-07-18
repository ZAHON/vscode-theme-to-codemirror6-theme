import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack/index';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const DefinitionPropertyName = () => (
  <Stack>
    <Title level="h4">definition property name</Title>
    <Color />
    <FontStyle />
  </Stack>
);
