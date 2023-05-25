import classes from './Grid.module.scss';
import { PropsWithChildren } from 'react';
import { HTMLAttributes } from 'react';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: string;
}

export default function Grid({ children, columns, ...props }: PropsWithChildren<GridProps>) {
  return (
    <div className={classes.Grid} {...props} style={{ gridTemplateColumns: columns }}>
      {children}
    </div>
  )
}