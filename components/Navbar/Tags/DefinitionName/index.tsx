import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack/index';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const DefinitionName = () => (
  <Stack>
    <Title level="h4">definition name</Title>
    <Color />
    <FontStyle />
  </Stack>
);
