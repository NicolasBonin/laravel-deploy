import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Deploy in the Cloud',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Vous allez déployer votre site vitrine sur un VPS (Virtual Private Server) hébergé chez
        &nbsp;<a href='https://www.scaleway.com'>Scaleway</a>
      </>
    ),
  },
  {
    title: 'Secure your Site',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Vous saurez comment sécuriser notre site en HTTPS!
      </>
    ),
  },
  {
    title: 'Automate your deployment',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Mises à jours du site, revenir en arrière, automatiser le déploiment... Avec zéro downtime!!! Hum Hum...
      </>
    ),
  },
  {
    title: 'Containerize it!',
    Svg: require('@site/static/img/nico1.svg').default,
    description: (
      <>
        Trop cool! Avec un peu d'astuce et de documentation, vous pourrez utiliser Docker pour déployer automatiquer vos versions
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
