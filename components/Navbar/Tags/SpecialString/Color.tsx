import type { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setHighlightStyleTag } from '@/redux/highlightStyleSlice';
import { ColorInput } from '@/components/UI/ColorInput/index';

export const Color = () => {
  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.highlightStyle.tags.specialStringTag.color);

  const onChange = (value: string) => {
    dispatch(setHighlightStyleTag({ key: 'specialStringTag', property: 'color', value: value }));
  };

  return <ColorInput value={color} onChange={onChange} label="color" />;
};
