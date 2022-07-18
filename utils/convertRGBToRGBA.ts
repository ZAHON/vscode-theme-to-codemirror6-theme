export const convertRGBToRGBA = (value: string) => {
  const valueString = value.toLocaleLowerCase().trim();

  try {
    const isRGB =
      valueString.substring(0, 4) === 'rgb(' && valueString.charAt(valueString.length - 1) === ')';

    if (!isRGB) {
      throw Error('Value is not RGB!');
    }

    const rgba = valueString.replace('rgb', 'rgba').replace(')', ', 1)');

    return rgba;
  } catch (error) {
    console.error(error);
  }
};
