import { IconBaseProps } from 'react-icons/lib';

export interface AccordionProps {
  title: string;
  content: string | JSX.Element;
}

export interface ArrowProps extends IconBaseProps {
  open?: boolean;
}
