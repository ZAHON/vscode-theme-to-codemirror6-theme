import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const StandardName = () => (
  <Stack>
    <Title level="h4">standard Name</Title>
    <Color />
    <FontStyle />
  </Stack>
);
