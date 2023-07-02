import { z } from 'zod';
import { ComponentState, ImageProps } from './image';

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
  src: z.string(),
  state: z.nativeEnum(ComponentState),
  style: z.any().optional(),
  alt: z.string(),
  fallbackImageSrc: z.string().optional(),
});

export const validation = (props: ImageProps) => {
  return schema.safeParse(props);
};
