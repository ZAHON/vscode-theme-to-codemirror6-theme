import type { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setHighlightStyleTag } from '@/redux/highlightStyleSlice';
import { ColorInput } from '@/components/UI/ColorInput/index';

export const Color = () => {
  const dispatch = useDispatch();
  const color = useSelector(
    (state: RootState) => state.highlightStyle.tags.definitionNameTag.color
  );
  const defaultColor = useSelector(
    (state: RootState) => state.highlightStyle.defaultTags.definitionNameTag.color
  );

  const onChange = (value: string) => {
    dispatch(setHighlightStyleTag({ key: 'definitionNameTag', property: 'color', value: value }));
  };

  return <ColorInput value={color} defaultValue={defaultColor} onChange={onChange} label="color" />;
};
