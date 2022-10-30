---
sidebar_position: 1
---

# Introduction

Vous êtes fier de votre site vitrine, vous avez hâte d'épater votre client et lui en mettre plein les mirettes!
**Alors let's go for it now!**

```Deploy my-site```

:::caution

Aucun mot de passe ou clé SSH utilisés en PRODUCTION ne doit être rendu public (Ex: Github)!

:::

## Itération 1

Déploiement "from scratch" sur un VPS (Virtual Private Server) **[scaleway](https://scaleway.com)**.
![scalway](https://www.scaleway.com/static/6a3ff135bd90b05124981ec237081fed/b0190/hero-floating-boy-frame.webp)

### pré-requis

- Une clé SSH personnelle
- Un VPS par étudiant

### Etapes

- [Demander un accès au Campus Numerique Scaleway](https://scaleway.com)
- Créer un VPS depuis une image UNBUTU ou Debian
- Installer PHP et les packages pour Laravel
- Déployer votre application Laravel sur le serveur
- Configurer votre serveur de BDD
- Configurer NGinx
- Configurer votre site pour la production
- Automatiser le déploiement et la configuration d'un serveur

## Itération 2

Mettre en place votre domaine et activer l'encryption TLS sur votre site

![let's Encrypt](/img/letsencrypt.gif)

- Acheter un nom de domaine
- Configurer les zones DNS
- Activer l'encryption de votre site
- Savoir mettre en place des sous-domaines
- Sécuriser un minimum son serveur

## Itération 3

Déployer des mises à jour sur votre site

- Déployer de nouvelles versions du site
- Pouvoir revenir à une version précédente
- Trouver une stragégie de déploiement
- Réfléchir à l'automatisation des différentes étapes

## Itération 4

![Automatisation](/img/automatisation.jpg)

- Automatisation des déploiements
- Trouver des méthodes d'automatisation
- La mettre en oeuvre
- Comparer et peser les avantages et incovénients

## Itération 5

Containeuriser son application et automatiser les déploiement

![Docker](/img/moby-run.png)

- Trouver la documentation pour conteuneriser une application Laravel
- Réfléchir aux différentes solutions possibles
- Automatiser les mises à jour de votre site
- Faire des mises à jour avec "Zéro down-time"
