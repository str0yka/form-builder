import { Stack, Typography, Paper } from '@mui/material';

interface FormElementWrapperProps {
  title: string | `${number}`;
  children?: React.ReactNode;
}

export const FormElementWrapper: React.FC<FormElementWrapperProps> = ({ title, children }) => (
  <Paper
    elevation={3}
    sx={{ flexGrow: 1, padding: 2 }}
  >
    <Stack spacing={1}>
      <Typography
        color={(theme) => theme.palette.text.secondary}
        fontSize={14}
      >
        {title}
      </Typography>
      {children}
    </Stack>
  </Paper>
);
