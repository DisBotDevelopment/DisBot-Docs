import React, { type ReactNode } from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import type { Props } from "@theme/NotFound/Content";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

export default function NotFoundContent({ className }: Props): ReactNode {
  return (
    <main className={clsx("container", styles.notFoundContainer, className)}>
      <div className={styles.centerWrapper}>
        <img
          src="../../../img/404.png"
          alt="404 Not Found"
          className={styles.imageNotFound}
          width="400"
          height="400"
        />
        <Heading as="h1" className={styles.title}>
          <Translate
            id="theme.NotFound.title"
            description="The title of the 404 page"
          >
            Oops! This page seems to be missing.
          </Translate>
        </Heading>
        <p className={styles.subtitle}>
          <Translate
            id="theme.NotFound.subtitle"
            description="The subtitle of the 404 page"
          >
            Don't worry, you can head back to the homepage and start fresh!
          </Translate>
        </p>
        <a
          href="/"
          className={clsx("button button--primary", styles.homeButton)}
        >
          <Translate>Back to Homepage</Translate>
        </a>
      </div>
    </main>
  );
}
