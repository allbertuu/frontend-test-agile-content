'use client';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import enGB from 'date-fns/locale/en-GB';
import { LocalizationProvider as MUILocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export function LocalizationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MUILocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
      {children}
    </MUILocalizationProvider>
  );
}
