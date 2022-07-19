import type { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setHighlightStyleTag } from '@/redux/highlightStyleSlice';
import { ColorInput } from '@/components/UI/ColorInput/index';

export const Color = () => {
  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.highlightStyle.tags.insertedTag.color);
  const defaultColor = useSelector(
    (state: RootState) => state.highlightStyle.defaultTags.insertedTag.color
  );

  const onChange = (value: string) => {
    dispatch(setHighlightStyleTag({ key: 'insertedTag', property: 'color', value: value }));
  };

  return <ColorInput value={color} defaultValue={defaultColor} onChange={onChange} label="color" />;
};
