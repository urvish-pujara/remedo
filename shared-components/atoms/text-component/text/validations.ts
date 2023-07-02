import { z } from 'zod';
import { ComponentState, TextProps } from './text';

type Implements<Model> = {
  [key in keyof Model]-?: undefined extends Model[key]
    ? null extends Model[key]
      ? z.ZodNullableType<z.ZodOptionalType<z.ZodType<Model[key]>>>
      : z.ZodOptionalType<z.ZodType<Model[key]>>
    : null extends Model[key]
    ? z.ZodNullableType<z.ZodType<Model[key]>>
    : z.ZodType<Model[key]>;
};

export function implement<Model = never>() {
  return {
    with: <
      Schema extends Implements<Model> &
        {
          [unknownKey in Exclude<keyof Schema, keyof Model>]: never;
        }
    >(
      schema: Schema
    ) => z.object(schema),
  };
}

const schema = z.object({
  field: z.string(),
  text: z.string(),
  state: z.nativeEnum(ComponentState),
  style: z.any().optional(),
  helperText: z.string().optional(),
});

export const validation = (props: TextProps) => {
  return schema.safeParse(props);
};
