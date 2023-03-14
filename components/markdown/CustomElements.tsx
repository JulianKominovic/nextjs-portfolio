"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { RoughNotation } from "react-rough-notation";
export default function CustomElement(props: any) {
  const { children, key } = props;
  const content = String(children);
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);
  let reactRoughComponent;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    if (ref.current) observer.observe(ref.current);
  }, [ref]);

  if (content.startsWith(":::underline")) {
    reactRoughComponent = (
      <RoughNotation show={isIntersecting} type="underline">
        {content.replace(":::underline", "")}
      </RoughNotation>
    );
  }

  if (content.startsWith(":::box")) {
    reactRoughComponent = (
      <RoughNotation show={isIntersecting} type="box">
        {content.replace(":::box", "")}
      </RoughNotation>
    );
  }

  if (content.startsWith(":::circle")) {
    reactRoughComponent = (
      <RoughNotation show={isIntersecting} type="circle">
        {content.replace(":::circle", "")}
      </RoughNotation>
    );
  }

  return (
    <p key={key} ref={ref}>
      {reactRoughComponent || children}
    </p>
  );
}
