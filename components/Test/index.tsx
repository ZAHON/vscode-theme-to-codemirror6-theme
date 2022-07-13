import { Button } from '@/components/UI/Button';

export const Test = () => {
  const clickHandle = () => {
    const monacoTypescriptEditor = document.getElementById('monaco-editor-typescript');
    if (monacoTypescriptEditor === null) return;

    const spanElements = [...monacoTypescriptEditor.querySelectorAll<HTMLSpanElement>('span')];

    const mySpan = spanElements.find((spanElement) => spanElement.textContent === 'id');
    if (mySpan === undefined) return;

    const style = getComputedStyle(mySpan);

    console.log(style.color);
  };

  return <Button onClick={clickHandle}>Test</Button>;
};
