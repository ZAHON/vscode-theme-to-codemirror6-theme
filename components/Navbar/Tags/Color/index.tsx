import { Title } from '@/components/UI/Title/index';
import { Stack } from '@/components/UI/Stack/index';
import { Color as ColorComponent } from './Color';
import { FontStyle } from './FontStyle';

export const Color = () => (
  <Stack>
    <Title level="h4">color</Title>
    <ColorComponent />
    <FontStyle />
  </Stack>
);
