import { ReactNode } from 'react';

type ContinerProps = {
  children: ReactNode;
  className?: string;
};
const Container = ({ children, className }: ContinerProps) => {
  return <div className={`px-4 py-3 ${className}`}>{children}</div>;
};

export default Container;
