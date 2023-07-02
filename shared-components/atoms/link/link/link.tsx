import React, { ReactNode } from 'react';
import Link, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';
import { Action } from '@remedoclinitech/staging.atoms.action';
export type linkProps = {
  text: string;
  styles?: React.CSSProperties | Record<string, any> | undefined;
} & MuiLinkProps;

export type LinkProps = ComponentProps<linkProps, never, never>;

export function MuiLink({ data: { p, actionInfo, fieldName } }: LinkProps) {
  const { style, text, ...rest } = p;
  return (
    <Action {...(!!actionInfo && actionInfo[0])}>
      <Link id={fieldName} sx={{ ...p.styles, ...rest.sx }} {...rest} >
        {text}
      </Link>
    </Action>
  );
}