import React, { type ReactNode } from "react";
import type { Props } from "@theme/Footer/Copyright";

export default function FooterCopyright({ copyright }: Props): ReactNode {
  return (
    <>
      © 2025 DisBot Docs - <a href="https://Nexocrew.com">Nexocrew.com</a> and
      Contributor
    </>
  );
}
