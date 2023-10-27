import { Tooltip, Button, Box } from '@mui/material';

import { withFormElement } from './helpers';

interface FormElementProps {
  formElement: FormElement;
  onDelete: () => void;
  onSelect: () => void;
}

export const FormElement: React.FC<FormElementProps> = ({ formElement, onDelete, onSelect }) => {
  const formElementFieldWithProps = withFormElement(formElement);

  if (!formElementFieldWithProps) return null;

  return (
    <Tooltip
      placement="left"
      title={
        <Button
          color="error"
          onClick={onDelete}
        >
          Delete
        </Button>
      }
    >
      <Box
        key={formElement.id}
        sx={{ cursor: 'pointer' }}
        onClick={onSelect}
      >
        {formElementFieldWithProps}
      </Box>
    </Tooltip>
  );
};
