import React, { ReactNode } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Action } from '@remedoclinitech/staging.atoms.action';
import { Box, Icon } from '@mui/material';

export type buttonProps = {
  buttonText: string;
  styles?: React.CSSProperties | Record<string, any> | undefined;
} & MuiButtonProps;

export type ButtonProps = ComponentProps<buttonProps, never, never>;

export function Button({ data: { p, actionInfo, fieldName } }: ButtonProps) {
  const { style, buttonText, ...rest } = p;
  return (
    <Action {...(!rest.disabled && !!actionInfo && actionInfo[0])}>
      <div id={fieldName}>
        <MuiButton sx={{ ...p.styles, ...rest.sx }} {...rest}>
          {p.buttonText}
        </MuiButton>
      </div>
    </Action>
  );
}

export function ButtonUnderlined({ data, component }: ButtonProps) {
  return (
    <Button
      data={{
        ...data,
        p: {
          ...data.p,
          styles: {
            textTransform: 'capitalize',
            ...data.p.styles,
          },
        },
      }}
      component={component}
    ></Button>
  );
}

export function ButtonContained({ data, component }: ButtonProps) {
  return (
    <Button
      data={{
        ...data,
        p: {
          ...data.p,
          variant: 'contained',
          styles: {
            textTransform: 'capitalize',
            ...data.p.styles,
          },
        },
      }}
      component={component}
    ></Button>
  );
}

export function ButtonOutlined({ data, component }: ButtonProps) {
  return (
    <Button
      data={{
        ...data,
        p: {
          ...data.p,
          variant: 'outlined',
          styles: {
            textTransform: 'capitalize',
            ...data.p.styles,
          },
        },
      }}
      component={component}
    ></Button>
  );
}

export function ButtonLink({ data, component }: ButtonProps) {
  return (
    <Button
      component={component}
      data={{
        ...data,
        p: {
          ...data.p,
          endIcon: data.p.endIcon ? <ExpandMoreIcon /> : <></>,
          styles: {
            ...data.p.styles,
            textTransform: 'capitalize',
          },
        },
      }}
    ></Button>
  );
}

export function ButtonCommon({ data, component }: ButtonProps) {
  return (
    <Button
      component={component}
      data={{
        ...data,
        p: {
          ...data.p,
          // variant: 'text',
          endIcon: data.p.endIcon ? <ExpandMoreIcon /> : <></>,
          styles: {
            ...data.p.styles,
            textTransform: 'capitalize',
          },
        },
      }}
    ></Button>
  );
}

export function ButtonDropdown({ data, component }: ButtonProps) {
  return (
    <Button
      component={component}
      data={{
        ...data,
        p: {
          ...data.p,
          endIcon: <ExpandMoreIcon />,
          styles: {
            ...data.p.styles,
            border: 'none',
            textTransform: 'capitalize',
          },
        },
      }}
    ></Button>
  );
}

export function ButtonRedirect({ data, component }: ButtonProps) {
  return (
    <Button
      component={component}
      data={{
        ...data,
        p: {
          ...data.p,
          endIcon: <ArrowForwardRoundedIcon sx={{ color: '#FF694B', ml: 1 }} />,
          styles: {
            textTransform: 'capitalize',
            ...data.p.styles,
            border: 'none',
          },
        },
      }}
    ></Button>
  );
}

export function ButtonRedirectMedic({ data, component }: ButtonProps) {
  return (
    <Button
      component={component}
      data={{
        ...data,
        p: {
          ...data.p,
          endIcon: <ChevronRightIcon sx={{
            borderRadius: '50%',
            backgroundColor: 'rgba(41, 41, 41, 0.2)',
            color: '#36807F',
            ml: 1,

          }
          } />,
          styles: {
            border: 'none',
            textTransform: 'capitalize',
            ...data.p.styles,
          },
        },
      }}
    ></Button >
  );
}

export type ButtonWithBgProps = ButtonProps & { backgroundImage?: string; };
export function PrimaryButtonLinkMedicTheme({ data, component, backgroundImage }: ButtonWithBgProps) {
  const containerStyle = {
    'display': 'inline-block',
    'padding': '20px 20px 20px 0',
    'backgroundPosition': '100% 50%',
    'backgroundSize': 'auto',
    'backgroundRepeat': 'no-repeat',
    'backgroundImage': `url(${backgroundImage})`,
    'width': 'fit-content'
  };
  return <div style={containerStyle}><Button
    component={component}
    data={data}
  /></div>;
}


// export function ButtonUnderlined2({ buttonText, styles }: ButtonProps) {
//   return (
//     <div>
//       <MuiButton sx={{
//         color: '#2A2A2A',
//         fontSize: '16px',
//         fontWeight: 700,
//         borderRadius: '0px',
//         borderBottom: '2px solid',
//         borderColor: '#FFDF8D',
//         ...styles,
//       }}>{buttonText}</MuiButton>
//       {/*  */}
//     </div>
//   );
// }

// export function ButtonGolden({ buttonText, styles }: ButtonProps) {
//   return (
//     <div>
//       <MuiButton sx={{
//         color: '#FFDF8D',
//         fontSize: '16px',
//         fontWeight: 700,
//         ...styles,
//       }}>{buttonText}</MuiButton>
//       {/* {children} */}
//     </div>
//   );
// }

// export function ButtonGoldenUnderlined({ buttonText, styles }: ButtonProps) {
//   return (
//     <div>
//       <MuiButton sx={{
//         color: '#FFDF8D',
//         fontSize: '16px',
//         fontWeight: 700,
//         borderRadius: '0px',
//         borderBottom: '2px solid',
//         borderColor: '#FFDF8D',
//         ...styles,
//       }}>{buttonText}</MuiButton>
//       {/* {children} */}
//     </div>
//   );
// }
