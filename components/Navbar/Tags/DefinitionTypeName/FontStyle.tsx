import type { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setHighlightStyleTag } from '@/redux/highlightStyleSlice';
import { Checkbox } from '@/components/UI/Checkbox/index';

export const FontStyle = () => {
  const dispatch = useDispatch();
  const fontStyle = useSelector(
    (state: RootState) => state.highlightStyle.tags.definitionTypeNameTag.fontStyle
  );

  const onChange = (value: boolean) => {
    dispatch(
      setHighlightStyleTag({
        key: 'definitionTypeNameTag',
        property: 'fontStyle',
        value: value ? 'italic' : 'normal',
      })
    );
  };

  return (
    <Checkbox
      grow
      labelOnLeft
      label="font style italic"
      checked={fontStyle === 'italic'}
      onChange={onChange}
    />
  );
};
