import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type PortalType = {
  rootId?: string;
};

type PortalProps = PropsWithChildren<PortalType>;

const Portal = ({ rootId, children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const currentElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    currentElement.current = document.querySelector(`${rootId}`);
    return () => setMounted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mounted && Boolean(currentElement.current)
    ? createPortal(children, currentElement.current as HTMLDivElement)
    : null;
};

export default Portal;
