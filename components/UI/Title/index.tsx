import { createElement } from 'react';
import styles from './styles.module.scss';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Title = ({ level = 'h1', children }: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    createElement(level, props, children);

  return <Heading className={styles.title}>{children}</Heading>;
};
