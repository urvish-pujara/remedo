import React from 'react';
import {
  NextSeo,
  NextSeoProps,
  ArticleJsonLdProps,
  ArticleJsonLd,
  BreadCrumbJsonLdProps,
  BreadcrumbJsonLd,
  FAQPageJsonLdProps,
  FAQPageJsonLd,
  LocalBusinessJsonLdProps,
  LocalBusinessJsonLd,
  ProductJsonLdProps,
  ProductJsonLd,
  SocialProfileJsonLdProps,
  SocialProfileJsonLd,
  ImageJsonLdProps,
  ImageJsonLd,
  SiteLinksSearchBoxJsonLd,
  SiteLinksSearchBoxJsonLdProps,
  WebPageJsonLd,
  WebPageJsonLdProps,
} from 'next-seo';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';
// @ts-ignore

export type headProps = {
  scripts?: string[];
  seo?: NextSeoProps;
  schema?: {
    article?: ArticleJsonLdProps;
    breadcrumb?: BreadCrumbJsonLdProps;
    faq?: FAQPageJsonLdProps;
    business?: LocalBusinessJsonLdProps;
    product?: ProductJsonLdProps;
    social?: SocialProfileJsonLdProps;
    image?: ImageJsonLdProps;
    search?: SiteLinksSearchBoxJsonLdProps;
    webPage?: WebPageJsonLdProps;
  };
};

export type HeadProps = ComponentProps<headProps, never, never>;

export function Head({ data }: HeadProps) {
  return (
    <>
      {data.p.seo && <NextSeo {...data.p.seo} />}
      {data.p.schema?.article && <ArticleJsonLd {...data.p.schema.article} />}
      {data.p.schema?.breadcrumb && (
        <BreadcrumbJsonLd {...data.p.schema.breadcrumb} />
      )}
      {data.p.schema?.faq && <FAQPageJsonLd {...data.p.schema.faq} />}
      {data.p.schema?.business && (
        <LocalBusinessJsonLd {...data.p.schema.business} />
      )}
      {data.p.schema?.product && <ProductJsonLd {...data.p.schema.product} />}
      {data.p.schema?.social && (
        <SocialProfileJsonLd {...data.p.schema.social} />
      )}
      {data.p.schema?.image && <ImageJsonLd {...data.p.schema.image} />}
      {data.p.schema?.webPage && <WebPageJsonLd {...data.p.schema.webPage} />}
      {data.p.schema?.search && <SiteLinksSearchBoxJsonLd {...data.p.schema.search} />}
    </>
  );
}