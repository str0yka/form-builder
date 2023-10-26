import { Stack, Typography } from '@mui/material';

interface FieldWrapperProps {
  title: string | `${number}`;
  children?: React.ReactNode;
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({ title, children }) => (
  <Stack
    spacing={1}
    sx={{
      padding: 2,
      border: (theme) => `1px ${theme.palette.divider} solid`,
      borderRadius: 1,
      backgroundColor: (theme) => theme.palette.divider,
    }}
  >
    <Typography
      color={(theme) => theme.palette.text.secondary}
      fontSize={14}
    >
      {title}
    </Typography>
    {children}
  </Stack>
);
