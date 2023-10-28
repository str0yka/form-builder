import { Tooltip, Button, Typography } from '@mui/material';
import cn from 'classnames';

import s from './FormElementWrapper.module.css';

interface FormElementWrapperProps {
  title: string | `${number}`;
  children?: React.ReactNode;
  onDelete?: () => void;
  onSelect?: () => void;
}

export const FormElementWrapper: React.FC<FormElementWrapperProps> = ({
  title,
  onDelete,
  onSelect,
  children,
}) => (
  <Tooltip
    placement="left"
    title={
      onDelete && (
        <Button
          color="error"
          onClick={onDelete}
        >
          Delete
        </Button>
      )
    }
  >
    <div
      className={cn(s.formElementWrapper, onSelect && s.formElementWrapperCanBeSelected)}
      aria-hidden="true"
      onClick={onSelect}
    >
      <Typography
        color={(theme) => theme.palette.text.secondary}
        fontSize={14}
      >
        {title}
      </Typography>
      {children}
    </div>
  </Tooltip>
);
