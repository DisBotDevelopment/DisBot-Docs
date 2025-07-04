import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type {ReactNode} from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className="container">
        <img
            src={"https://cdn.discordapp.com/avatars/1063079377975377960/e51b292ff0a913c5b68410f983178cf5.webp?size=1024"}
          alt="DisBot Logo"
          className={styles.heroLogo}
          width="150"
          height="150"
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a className="button button--primary button--lg" href="/docs">
            Documentation
          </a>
          <Link
            className="button button--secondary button--lg margin-left--sm"
            href="https://disbot.xyz/invite"
          >
            Invite to Discord
          </Link>
        </div>
      </div>
    </header>
  );
}

interface FeatureItem {
  title: string;
  icon: string;
  description: ReactNode;
}

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    icon: "⚡",
    description: (
      <>
        DisBot is designed to be simple to set up and use, with intuitive
        commands and comprehensive documentation.
      </>
    ),
  },
  {
    title: "Powerful Moderation",
    icon: "🛡️",
    description: (
      <>
        Advanced moderation tools to keep your server safe including
        auto-moderation, warning systems, and customizable filters.
      </>
    ),
  },
  {
    title: "Customizable",
    icon: "🎨",
    description: (
      <>
        Fully customizable to fit your server's needs with configurable
        commands, responses, and behavior.
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection(): ReactNode {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className="row">
          <div className="col col--4 text--center">
            <Heading as="h2" className={styles.statNumber}>
              100+
            </Heading>
            <p className={styles.statLabel}>Servers</p>
          </div>
          <div className="col col--4 text--center">
            <Heading as="h2" className={styles.statNumber}>
              100,000+
            </Heading>
            <p className={styles.statLabel}>Users</p>
          </div>
          <div className="col col--4 text--center">
            <Heading as="h2" className={styles.statNumber}>
              24/7
            </Heading>
            <p className={styles.statLabel}>Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection(): ReactNode {
  return (
    <section className={styles.cta}>
      <div className="container text--center">
        <Heading as="h2">Ready to enhance your Discord server?</Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            href="https://disbot.xyz/invite"
          >
            Add to Discord
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="DisBot - The ultimate Discord bot for moderation, utilities, and fun features"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <StatsSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
