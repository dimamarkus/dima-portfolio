/* eslint-disable react-hooks/static-components */
import { cache, type ElementType } from "react";

import * as runtime from "react/jsx-runtime";

import { CustomImage } from "@/components/mdx/custom-image";
import { SoundCloudEmbed } from "@/components/mdx/soundcloud-embed";

const sharedComponents: Record<string, ElementType> = {
  CustomImage,
  SoundCloudEmbed,
};

const getMdxComponent = cache((code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
});

type MdxContentProps = Readonly<{
  code: string;
  components?: Record<string, ElementType>;
}>;

export const MdxContent = ({ code, components }: MdxContentProps) => {
  const Component = getMdxComponent(code);

  return <Component components={{ ...sharedComponents, ...components }} />;
};
