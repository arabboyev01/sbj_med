import { PropsWithChildren } from "react";

type PaddingWrapperType = {
  pt?: number;
  pb?: number;
};

type PaddingWrapperProps = PropsWithChildren<PaddingWrapperType>;

const PaddingWrapper = ({ children, pb, pt }: PaddingWrapperProps) => {
  const padding = `${pt ?? 0}px 0 ${pb ?? 0}px`;
  return <section style={{ padding }}>{children}</section>;
};

export default PaddingWrapper;
