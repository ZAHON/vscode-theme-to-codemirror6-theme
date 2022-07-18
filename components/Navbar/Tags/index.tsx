import { Fragment } from 'react';

import { Stack } from '@/components/UI/Stack';
import { Separator } from '@/components/UI/Separator';

import { AngleBracket } from './AngleBracket';
import { Atom } from './Atom';
import { AttributeName } from './AttributeName';
import { AttributeValue } from './AttributeValue';
import { Bool } from './Bool';
import { Bracket } from './Bracket';
import { ClassName } from './ClassName';
import { Color } from './Color';
import { Comment } from './Comment';
import { ConstantName } from './ConstantName';
import { DefinitionName } from './DefinitionName';
import { DefinitionPropertyName } from './DefinitionPropertyName';
import { DefinitionTypeName } from './DefinitionTypeName';
import { FunctionPropertyName } from './FunctionPropertyName';
import { FunctionVariableName } from './FunctionVariableName';
import { Heading } from './Heading';
import { Inserted } from './Inserted';
import { Keyword } from './Keyword';
import { Meta } from './Meta';
import { ModuleKeyword } from './ModuleKeyword';
import { Name } from './Name';
import { Namespace } from './Namespace';
import { Null } from './Null';
import { Number } from './Number';
import { Operator } from './Operator';
import { Paren } from './Paren';
import { ProcessingInstruction } from './ProcessingInstruction';
import { Punctuation } from './Punctuation';
import { Regexp } from './Regexp';
import { Self } from './Self';
import { SpecialString } from './SpecialString';
import { SquareBracket } from './SquareBracket';
import { StandardName } from './StandardName';
import { String } from './String';
import { TagName } from './TagName';
import { TypeName } from './TypeName';
import { TypeOperator } from './TypeOperator';
import { Unit } from './Unit';

const components = [
  { key: 'AngleBracket', component: <AngleBracket /> },
  { key: 'Atom', component: <Atom /> },
  { key: 'AttributeName', component: <AttributeName /> },
  { key: 'AttributeValue', component: <AttributeValue /> },
  { key: 'Bool', component: <Bool /> },
  { key: 'Bracket', component: <Bracket /> },
  { key: 'ClassName', component: <ClassName /> },
  { key: 'Color', component: <Color /> },
  { key: 'Comment', component: <Comment /> },
  { key: 'ConstantName', component: <ConstantName /> },
  { key: 'DefinitionName', component: <DefinitionName /> },
  { key: 'DefinitionPropertyName', component: <DefinitionPropertyName /> },
  { key: 'DefinitionTypeName', component: <DefinitionTypeName /> },
  { key: 'FunctionPropertyName', component: <FunctionPropertyName /> },
  { key: 'FunctionVariableName', component: <FunctionVariableName /> },
  { key: 'Heading', component: <Heading /> },
  { key: 'Inserted', component: <Inserted /> },
  { key: 'Keyword', component: <Keyword /> },
  { key: 'Meta', component: <Meta /> },
  { key: 'ModuleKeyword', component: <ModuleKeyword /> },
  { key: 'Name', component: <Name /> },
  { key: 'Namespace', component: <Namespace /> },
  { key: 'Null', component: <Null /> },
  { key: 'Number', component: <Number /> },
  { key: 'Operator', component: <Operator /> },
  { key: 'Paren', component: <Paren /> },
  { key: 'ProcessingInstruction', component: <ProcessingInstruction /> },
  { key: 'Punctuation', component: <Punctuation /> },
  { key: 'Regexp', component: <Regexp /> },
  { key: 'Self', component: <Self /> },
  { key: 'SpecialString', component: <SpecialString /> },
  { key: 'SquareBracket', component: <SquareBracket /> },
  { key: 'StandardName', component: <StandardName /> },
  { key: 'String', component: <String /> },
  { key: 'TagName', component: <TagName /> },
  { key: 'TypeName', component: <TypeName /> },
  { key: 'TypeOperator', component: <TypeOperator /> },
  { key: 'Unit', component: <Unit /> },
];

export const Tags = () => (
  <Stack>
    {components.map(({ key, component }, index) => (
      <Fragment key={key}>
        {component}
        {index !== components.length - 1 && <Separator />}
      </Fragment>
    ))}
  </Stack>
);
