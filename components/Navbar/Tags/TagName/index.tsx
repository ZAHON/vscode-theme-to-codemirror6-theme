import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack';
import { Color } from './Color';
import { FontStyle } from './FontStyle';

export const TagName = () => (
  <Stack>
    <Title level="h4">tag name</Title>
    <Color />
    <FontStyle />
  </Stack>
);
