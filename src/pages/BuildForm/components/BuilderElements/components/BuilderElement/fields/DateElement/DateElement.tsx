import { Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type DateFieldElementProps = FormElementExtraAttributes['DateField'];

export const DateFieldElement: React.FC<DateFieldElementProps> = ({
  title,
  required,
  helperText,
  label,
}) => (
  <>
    <Typography
      fontSize={14}
      fontWeight={500}
    >
      {title}
      {required && '*'}
    </Typography>
    <DatePicker
      label={label}
      disabled
      {...(helperText && {
        slotProps: {
          textField: {
            helperText,
          },
        },
      })}
    />
  </>
);
