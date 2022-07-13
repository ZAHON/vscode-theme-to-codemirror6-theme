export const tsxValue = `import React from 'react';

const bool = true;
const number = 123;
const string = 'string';

const test = () => {
  return null
}

//Comment

/*
Comment
The code below will change
*/

const reg1 = /pani?/gi
const reg2 = new RegExp("pani?" , "gi")

const obj = {
  name: 'Test',
  show() {
    console.log(this.name)
  }
}

export interface Props extends React.HTMLProps<HTMLDivElement> {
  heading: string;
}

const PostPreview = (props: Props) => {
  return (
    <div>
      <h1>{props.heading}</h1>
      {props.children}
    </div>
  );
};

export default PostPreview;
`;
