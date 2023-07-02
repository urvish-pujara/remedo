import React from 'react';
import { MuiLink } from './link';
import { LinkProps } from './link';
import { ThemeProvider } from '@mui/material';
import { medicTheme, loadFonts } from '@remedoclinitech/staging.common.theme';
const linkProps: LinkProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '@remedoclinitech/staging.atoms.link.link',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'test.link',
    p: {
      text: 'Click Link',
      styles: {}
    },
    actionInfo: [],
    type: 'normal',
    category: 'static',
  }
}

export const LightLink = () => {
  loadFonts(['Poppins']);
  return (
    <ThemeProvider theme={medicTheme}>
      <MuiLink
        data={{
          ...linkProps.data,
          p: {
            ...linkProps.data.p,
            variant: "light"
          }
        }}
        component={linkProps.component} />
    </ThemeProvider>
  );
}

export const DarkLink = () => {
  loadFonts(['Poppins']);
  return (
    <ThemeProvider theme={medicTheme}>
      <MuiLink
        data={{
          ...linkProps.data,
          p: {
            ...linkProps.data.p,
            variant: "dark"
          }
        }}
        component={linkProps.component} />
    </ThemeProvider>
  );
}

export const LightActionLink = () => {
  loadFonts(['Poppins']);
  return (
    <ThemeProvider theme={medicTheme}>
      <MuiLink
        data={{
          ...linkProps.data,
          p: {
            ...linkProps.data.p,
            variant: "actionLight"
          }
        }}
        component={linkProps.component} />
    </ThemeProvider>
  );
}

export const DarkActionLink = () => {
  loadFonts(['Poppins']);
  return (
    <ThemeProvider theme={medicTheme}>
      <MuiLink
        data={{
          ...linkProps.data,
          p: {
            ...linkProps.data.p,
            variant: "actionDark"
          }
        }}
        component={linkProps.component} />
    </ThemeProvider>
  );
}
