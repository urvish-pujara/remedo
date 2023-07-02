import React, { useState } from 'react';
import { ComponentState, Text, TextProps } from './text';
import { ThemeProvider } from '@mui/material';
import { loadFonts, theme } from '@remedoclinitech/staging.common.theme';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';
import { EditContext } from '@remedoclinitech/staging.common.edit-context';

// const schema = z.object({
//   text: z.string().max(15, { message: 'Text too long' }),

// });

const basicTextProps: TextProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '@remedoclinitech/staging.atoms.text-component.text',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'test.about.title',
    p: {
      text: 'hello from text',
      helperText: '',
      state: ComponentState.Edit,
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    type: 'normal',
    category: 'static',
  },
};

const HtmlTextProps: TextProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '@remedoclinitech/staging.atoms.text-component.text',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'test.about.title',
    p: {
      text: '<h1>hello from text</h1>',
      helperText: '',
      state: ComponentState.Normal,
      variant: "h1",
      html: true,
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    type: 'normal',
    category: 'static',
  },
};

const editTextProps: TextProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '@remedoclinitech/staging.atoms.text-component.text',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'test.about.title',
    p: {
      text: 'hello from text',
      helperText: '',
      state: ComponentState.Edit,
      variant: 'h1',
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    type: 'normal',
    category: 'static',
  },
};

const loadingTextProps: TextProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '@remedoclinitech/staging.atoms.text-component.text',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'test.about.title',
    p: {
      text: 'hello from text',
      helperText: '',
      state: ComponentState.Loading,
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    type: 'normal',
    category: 'static',
  },
};

const errorTextProps: TextProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '@remedoclinitech/staging.atoms.text-component.text',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'test.about.title',
    p: {
      text: 'hello from text',
      helperText: '',
      state: ComponentState.Error,
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    type: 'normal',
    category: 'static',
  },
};

export const BasicText = () => {
  const [editData, setEditData] = useState<ComponentProps | null>(null);

  console.log({ editData });

  return (
    <ThemeProvider theme={theme}>
      <EditContext.Provider value={setEditData}>
        <Text data={basicTextProps.data} component={basicTextProps.component} />
      </EditContext.Provider>
    </ThemeProvider>
  );
};

export const HtmlText = () => {
  const [editData, setEditData] = useState<ComponentProps | null>(null);

  console.log({ editData });

  return (
    <ThemeProvider theme={theme}>
      <EditContext.Provider value={setEditData}>
        <Text data={HtmlTextProps.data} component={HtmlTextProps.component} />
      </EditContext.Provider>
    </ThemeProvider>
  );
};

export const EditText = () => {
  loadFonts(['Lora', 'Lexend']);
  return (
    <ThemeProvider theme={theme}>
      <Text data={editTextProps.data} component={editTextProps.component} />
    </ThemeProvider>
  );
};

export const LoadingText = () => {
  return (
    <ThemeProvider theme={theme}>
      <Text
        data={loadingTextProps.data}
        component={loadingTextProps.component}
      />
    </ThemeProvider>
  );
};

export const ErrorText = () => {
  return (
    <ThemeProvider theme={theme}>
      <Text data={errorTextProps.data} component={errorTextProps.component} />
    </ThemeProvider>
  );
};
