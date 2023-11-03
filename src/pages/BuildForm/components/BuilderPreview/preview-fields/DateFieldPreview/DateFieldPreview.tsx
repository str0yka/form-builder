import { Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type DateFieldPreviewProps = FormElementExtraAttributes['DateField'];

export const DateFieldPreview: React.FC<DateFieldPreviewProps> = ({
  required,
  title,
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
