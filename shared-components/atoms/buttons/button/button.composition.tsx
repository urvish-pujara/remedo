import React from 'react';
import { Button, ButtonDropdown, ButtonLink, ButtonProps, ButtonUnderlined } from './button';
import { ThemeProvider } from '@mui/material';
import { theme } from '@remedoclinitech/staging.common.theme';

const buttonProps: ButtonProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '@remedoclinitech/staging.atoms.buttons.button',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'about.button.click',
    p: {
      styles: {
        color: '#2A2A2A',
        fontSize: '16px',
        fontWeight: 700,
      },
      buttonText: 'Make an Appointment',
    },
    actionInfo: [
      {
        component: {
          component: '',
          version: '',
          variant: '',
        },
        on: 'click',
        type: 'navigate',
        navigationData: {
          url: '#home.about.zenvity',
          window: 'same',
        },
      },
    ],
    type: 'normal',
    category: 'static',
  },
};

const underlinedButtonProps: ButtonProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '@remedoclinitech/staging.atoms.buttons.button',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'about.button.click',
    p: {
      styles: {},
      buttonText: 'Make an Appointment',
    },
    actionInfo: [
      {
        component: {
          component: '',
          version: '',
          variant: '',
        },
        on: 'click',
        type: 'navigate',
        navigationData: {
          url: '#home.about.zenvity',
          window: 'same',
        },
      },
    ],
    type: 'normal',
    category: 'static',
  },
};

const dropdownButtonProps: ButtonProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '@remedoclinitech/staging.atoms.buttons.button',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'about.button.click',
    p: {
      styles: {},
      buttonText: 'Make an Appointment',
    },
    type: 'normal',
    category: 'static',
  },
};

export const BasicButton = () => {
  return <Button data={buttonProps.data} component={buttonProps.component} />;
};

export const UnderlinedButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonUnderlined
        data={underlinedButtonProps.data}
        component={underlinedButtonProps.component}
      />
    </ThemeProvider>
  );
};

export const LinkButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonLink
        data={underlinedButtonProps.data}
        component={underlinedButtonProps.component}
      />
    </ThemeProvider>
  );
};

export const DropdownButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonDropdown
        data={dropdownButtonProps.data}
        component={dropdownButtonProps.component}
      />
    </ThemeProvider>
  );
};

// export const Button2 = () => {
//   return (
//     <Button
//       styles={{
//         color: '#2A2A2A',
//         fontSize: '16px',
//         fontWeight: 700,
//         borderRadius: '0px',
//         borderBottom: '2px solid',
//         borderColor: '#FFDF8D'
//       }}
//       buttonText='Make an Appointment'>
//     </Button>
//   );
// }

// export const Button3 = () => {
//   return (
//     <Button
//       styles={{
//         color: '#FFDF8D',
//         fontSize: '16px',
//         fontWeight: 700,
//       }}
//       buttonText='Make an Appointment'>
//     </Button>
//   );
// }

// export const Button4 = () => {
//   return (
//     <Button
//       styles={{
//         color: '#FFDF8D',
//         fontSize: '16px',
//         fontWeight: 700,
//         borderRadius: '0px',
//         borderBottom: '2px solid',
//         borderColor: '#FFDF8D'
//       }}
//       buttonText='Make an Appointment'>
//     </Button>
//   );
// }
