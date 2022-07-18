import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack/index';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const AttributeValue = () => (
  <Stack>
    <Title level="h4">attribute value</Title>
    <Color />
    <FontStyle />
  </Stack>
);
