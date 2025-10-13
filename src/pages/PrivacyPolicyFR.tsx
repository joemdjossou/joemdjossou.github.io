import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, MapPin, Languages } from "lucide-react";
import React from "react";

const PrivacyPolicyFR: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.hash = 'hymnes-app-privacy-policy'}
              className="flex items-center gap-2"
            >
              <Languages className="h-4 w-4" />
              English
            </Button>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Politique de Confidentialité
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Hymnes et Louanges Adventiste - Dernière mise à jour le 07 octobre 2025
          </p>
        </div>

        {/* Main Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Avis de Confidentialité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-700 dark:text-slate-300">
            <p>
              Cet Avis de Confidentialité pour <strong>JOEMDJOSSOU</strong> ("nous," "notre,"
              ou "nos"), décrit comment et pourquoi nous pourrions accéder, collecter, stocker,
              utiliser et/ou partager ("traiter") vos informations personnelles lorsque vous
              utilisez nos services ("Services"), y compris lorsque vous :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Téléchargez et utilisez notre application mobile (Hymnes et Louanges
                Adventiste), ou toute autre application de notre part qui renvoie à cet
                Avis de Confidentialité
              </li>
              <li>
                Interagissez avec nous de toute autre manière connexe, y compris toute vente,
                marketing ou événement
              </li>
            </ul>
            <p>
              <strong>Des questions ou des préoccupations ?</strong> La lecture de cet Avis de
              Confidentialité vous aidera à comprendre vos droits et choix en matière de confidentialité.
              Nous sommes responsables de prendre des décisions sur la façon dont vos informations
              personnelles sont traitées. Si vous n'êtes pas d'accord avec nos politiques
              et pratiques, veuillez ne pas utiliser nos Services. Si vous avez encore
              des questions ou des préoccupations, veuillez nous contacter à{" "}
              <a
                href="mailto:joemdjossou@outlook.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                joemdjossou@outlook.com
              </a>
              .
            </p>
          </CardContent>
        </Card>

        {/* Summary of Key Points */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Résumé des Points Clés
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Ce résumé fournit les points clés de notre Avis de Confidentialité, mais vous
              pouvez trouver plus de détails sur l'un de ces sujets en cliquant sur le lien
              suivant chaque point clé ou en utilisant notre table des matières ci-dessous
              pour trouver la section que vous recherchez.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Quelles informations personnelles traitons-nous ?
                </h4>
                <p>
                  Lorsque vous visitez, utilisez ou naviguez sur nos Services, nous pouvons traiter
                  des informations personnelles selon la façon dont vous interagissez avec nous et
                  les Services, les choix que vous faites, et les produits et
                  fonctionnalités que vous utilisez.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Traitons-nous des informations personnelles sensibles ?
                </h4>
                <p>
                  Certaines informations peuvent être considérées comme "spéciales" ou
                  "sensibles" dans certaines juridictions, par exemple vos origines raciales
                  ou ethniques, votre orientation sexuelle et vos croyances religieuses.{" "}
                  <strong>
                    Nous ne traitons pas d'informations personnelles sensibles.
                  </strong>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Collectons-nous des informations auprès de tiers ?
                </h4>
                <p>
                  <strong>
                    Nous ne collectons aucune information auprès de tiers.
                  </strong>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Comment traitons-nous vos informations ?
                </h4>
                <p>
                  Nous traitons vos informations pour fournir, améliorer et
                  administrer nos Services, communiquer avec vous, pour la sécurité
                  et la prévention de la fraude, et pour nous conformer à la loi. Nous pouvons également
                  traiter vos informations à d'autres fins avec votre consentement.
                  Nous traitons vos informations uniquement lorsque nous avons une raison légale
                  valide de le faire.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Dans quelles situations et avec quelles parties partageons-nous des informations
                  personnelles ?
                </h4>
                <p>
                  Nous pouvons partager des informations dans des situations spécifiques et avec
                  des tiers spécifiques.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Comment protégeons-nous vos informations ?
                </h4>
                <p>
                  Nous avons mis en place des processus et procédures organisationnels et techniques
                  adéquats pour protéger vos informations personnelles.
                  Cependant, aucune transmission électronique sur Internet ou
                  technologie de stockage d'informations ne peut être garantie à 100%
                  sécurisée, nous ne pouvons donc pas promettre ou garantir que les pirates,
                  cybercriminels ou autres tiers non autorisés ne pourront pas
                  contourner notre sécurité et collecter, accéder,
                  voler ou modifier vos informations de manière inappropriée.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Quels sont vos droits ?
                </h4>
                <p>
                  Selon votre localisation géographique, la
                  loi applicable sur la confidentialité peut signifier que vous avez certains droits
                  concernant vos informations personnelles.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Comment exercez-vous vos droits ?
                </h4>
                <p>
                  Le moyen le plus simple d'exercer vos droits est de soumettre une
                  demande d'accès aux données, ou en nous contactant. Nous
                  examinerons et agirons sur toute demande conformément aux
                  lois applicables sur la protection des données.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Table des Matières
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li>Quelles Informations Collectons-Nous ?</li>
              <li>Comment Traitons-Nous Vos Informations ?</li>
              <li>
                Sur Quelles Bases Légales Nous Appuyons-Nous Pour Traiter Vos
                Informations Personnelles ?
              </li>
              <li>Quand Et Avec Qui Partageons-Nous Vos Informations Personnelles ?</li>
              <li>Combien de Temps Conservons-Nous Vos Informations ?</li>
              <li>Comment Protégeons-Nous Vos Informations ?</li>
              <li>Quels Sont Vos Droits en Matière de Confidentialité ?</li>
              <li>Contrôles Pour Les Fonctionnalités Ne Pas Suivre</li>
              <li>Les Résidents des États-Unis Ont-Ils Des Droits Spécifiques en Matière de Confidentialité ?</li>
              <li>D'Autres Régions Ont-Elles Des Droits Spécifiques en Matière de Confidentialité ?</li>
              <li>Mettons-Nous À Jour Cet Avis ?</li>
              <li>Comment Pouvez-Vous Nous Contacter Concernant Cet Avis ?</li>
              <li>
                Comment Pouvez-Vous Consulter, Mettre À Jour Ou Supprimer Les Données Que Nous
                Collectons De Vous ?
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                1. Quelles Informations Collectons-Nous ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Informations personnelles que vous nous divulguez
                </h4>
                <p className="mb-2">
                  <strong>En bref :</strong> Nous collectons les informations personnelles
                  que vous nous fournissez.
                </p>
                <p>
                  Nous collectons les informations personnelles que vous nous fournissez
                  volontairement lorsque vous exprimez un intérêt à obtenir des informations
                  sur nous ou nos produits et Services, lorsque vous participez à des
                  activités sur les Services, ou autrement lorsque vous nous contactez.
                </p>
                <p className="mt-2">
                  <strong>Informations Sensibles.</strong> Nous ne traitons pas
                  d'informations sensibles.
                </p>
                <p className="mt-2">
                  Toutes les informations personnelles que vous nous fournissez doivent être vraies,
                  complètes et exactes, et vous devez nous notifier de tout changement
                  à ces informations personnelles.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                2. Comment Traitons-Nous Vos Informations ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En bref :</strong> Nous traitons vos informations pour
                fournir, améliorer et administrer nos Services, communiquer avec
                vous, pour la sécurité et la prévention de la fraude, et pour nous conformer à la loi.
                Nous pouvons également traiter vos informations à d'autres fins avec
                votre consentement.
              </p>
              <p>
                Nous traitons vos informations personnelles pour diverses raisons,
                selon la façon dont vous interagissez avec nos Services, notamment :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>
                    Pour sauver ou protéger l'intérêt vital d'un individu.
                  </strong>{" "}
                  Nous pouvons traiter vos informations lorsque c'est nécessaire pour sauver ou
                  protéger l'intérêt vital d'un individu, comme pour prévenir
                  un préjudice.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                3. Sur Quelles Bases Légales Nous Appuyons-Nous Pour Traiter Vos Informations ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En bref :</strong> Nous ne traitons vos informations
                personnelles que lorsque nous croyons que c'est nécessaire et que nous avons une
                raison légale valide (c'est-à-dire, une base légale) pour le faire en vertu de la loi
                applicable, comme avec votre consentement, pour nous conformer aux lois, pour vous fournir
                des services pour entrer dans ou remplir nos obligations contractuelles,
                pour protéger vos droits, ou pour remplir nos intérêts commerciaux
                légitimes.
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Si vous êtes situé dans l'UE ou au Royaume-Uni, cette section s'applique à
                  vous.
                </h4>
                <p>
                  Le Règlement Général sur la Protection des Données (RGPD) et le RGPD du Royaume-Uni
                  nous obligent à expliquer les bases légales valides sur lesquelles nous nous appuyons
                  pour traiter vos informations personnelles. En tant que tel, nous pouvons
                  nous appuyer sur les bases légales suivantes pour traiter vos
                  informations personnelles :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong>Consentement.</strong> Nous pouvons traiter vos informations si
                    vous nous avez donné la permission (c'est-à-dire, le consentement) d'utiliser vos
                    informations personnelles à des fins spécifiques. Vous pouvez
                    retirer votre consentement à tout moment.
                  </li>
                  <li>
                    <strong>Obligations Légales.</strong> Nous pouvons traiter vos
                    informations lorsque nous croyons que c'est nécessaire pour nous conformer
                    à nos obligations légales, comme pour coopérer avec un organisme
                    d'application de la loi ou une agence de réglementation, exercer ou défendre
                    nos droits légaux, ou divulguer vos informations comme preuve
                    dans un litige dans lequel nous sommes impliqués.
                  </li>
                  <li>
                    <strong>Intérêts Vitaux.</strong> Nous pouvons traiter vos
                    informations lorsque nous croyons que c'est nécessaire pour protéger vos
                    intérêts vitaux ou les intérêts vitaux d'un tiers,
                    comme dans des situations impliquant des menaces potentielles pour la sécurité
                    de toute personne.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Si vous êtes situé au Canada, cette section s'applique à vous.
                </h4>
                <p>
                  Nous pouvons traiter vos informations si vous nous avez donné une
                  permission spécifique (c'est-à-dire, un consentement exprès) d'utiliser vos
                  informations personnelles à des fins spécifiques, ou dans des situations où
                  votre permission peut être inférée (c'est-à-dire, un consentement implicite). Vous
                  pouvez retirer votre consentement à tout moment.
                </p>
                <p className="mt-2">
                  Dans certains cas exceptionnels, nous pouvons être légalement autorisés en vertu de
                  la loi applicable à traiter vos informations sans votre
                  consentement, y compris, par exemple :
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                  <li>
                    Si la collecte est clairement dans l'intérêt d'un individu
                    et que le consentement ne peut pas être obtenu en temps opportun
                  </li>
                  <li>Pour les enquêtes et la détection et prévention de la fraude</li>
                  <li>
                    Pour les transactions commerciales à condition que certaines conditions soient
                    remplies
                  </li>
                  <li>
                    Si elle est contenue dans une déclaration de témoin et que la collecte
                    est nécessaire pour évaluer, traiter ou régler une réclamation
                    d'assurance
                  </li>
                  <li>
                    Pour identifier les personnes blessées, malades ou décédées et
                    communiquer avec les proches
                  </li>
                  <li>
                    Si nous avons des motifs raisonnables de croire qu'un individu a
                    été, est ou peut être victime d'abus financier
                  </li>
                  <li>
                    S'il est raisonnable de s'attendre à ce que la collecte et l'utilisation avec
                    le consentement compromettraient la disponibilité ou l'exactitude de
                    l'information et que la collecte est raisonnable pour
                    des fins liées à l'enquête sur une violation d'un accord
                    ou d'une contravention aux lois du Canada ou d'une province
                  </li>
                  <li>
                    Si la divulgation est requise pour se conformer à une assignation,
                    mandat, ordonnance du tribunal ou règles du tribunal relatives à la
                    production de dossiers
                  </li>
                  <li>
                    Si elle a été produite par un individu dans le cadre de son
                    emploi, de ses affaires ou de sa profession et que la collecte est
                    cohérente avec les fins pour lesquelles l'information a été
                    produite
                  </li>
                  <li>
                    Si la collecte est uniquement à des fins journalistiques, artistiques ou
                    littéraires
                  </li>
                  <li>
                    Si l'information est publiquement disponible et est spécifiée par
                    les règlements
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                4. Quand Et Avec Qui Partageons-Nous Vos Informations Personnelles ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En bref :</strong> Nous pouvons partager des informations dans des situations
                spécifiques décrites dans cette section et/ou avec les
                tiers suivants.
              </p>
              <p>
                Nous pouvons avoir besoin de partager vos informations personnelles dans les situations
                suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Transferts d'Entreprise.</strong> Nous pouvons partager ou transférer
                  vos informations en relation avec, ou pendant les négociations
                  de, toute fusion, vente d'actifs de l'entreprise, financement, ou
                  acquisition de tout ou partie de notre entreprise à une autre
                  entreprise.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                5. Combien de Temps Conservons-Nous Vos Informations ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En bref :</strong> Nous conservons vos informations aussi longtemps
                que nécessaire pour remplir les objectifs décrits dans cet Avis de
                Confidentialité, sauf indication contraire requise par la loi.
              </p>
              <p>
                Nous ne conserverons vos informations personnelles que le temps nécessaire pour les
                objectifs énoncés dans cet Avis de Confidentialité,
                sauf si une période de rétention plus longue est requise ou permise par la loi
                (comme la fiscalité, la comptabilité ou d'autres exigences légales).
              </p>
              <p>
                Lorsque nous n'avons plus de besoin commercial légitime en cours pour traiter vos
                informations personnelles, nous supprimerons ou anonymiserons ces
                informations, ou, si ce n'est pas possible (par exemple, parce que
                vos informations personnelles ont été stockées dans des archives de sauvegarde),
                nous stockerons alors vos informations personnelles de manière sécurisée et
                les isolerons de tout traitement ultérieur jusqu'à ce que la suppression soit
                possible.
              </p>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                6. Comment Protégeons-Nous Vos Informations ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En bref :</strong> Nous visons à protéger vos informations
                personnelles grâce à un système de mesures de sécurité organisationnelles et techniques.
              </p>
              <p>
                Nous avons mis en place des mesures de sécurité techniques et
                organisationnelles appropriées et raisonnables conçues pour protéger la
                sécurité de toute information personnelle que nous traitons. Cependant,
                malgré nos garanties et nos efforts pour sécuriser vos informations,
                aucune transmission électronique sur Internet ou technologie de
                stockage d'informations ne peut être garantie à 100% sécurisée, nous ne
                pouvons donc pas promettre ou garantir que les pirates, cybercriminels ou
                autres tiers non autorisés ne pourront pas contourner notre
                sécurité et collecter, accéder, voler ou modifier vos
                informations de manière inappropriée. Bien que nous fassions de notre mieux pour protéger vos
                informations personnelles, la transmission d'informations personnelles vers
                et depuis nos Services est à vos propres risques. Vous ne devriez
                accéder aux Services que dans un environnement sécurisé.
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                7. Quels Sont Vos Droits en Matière de Confidentialité ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En bref :</strong> Selon votre état de résidence
                aux États-Unis ou dans certaines régions, comme l'Espace Économique Européen
                (EEE), le Royaume-Uni (UK), la Suisse et le Canada, vous avez
                des droits qui vous permettent un accès et un contrôle plus importants sur vos
                informations personnelles. Vous pouvez consulter, modifier ou résilier votre
                compte à tout moment, selon votre pays, province ou
                état de résidence.
              </p>
              <p>
                Dans certaines régions (comme l'EEE, le Royaume-Uni, la Suisse et le Canada), vous
                avez certains droits en vertu des lois applicables sur la protection des données. Ces
                droits peuvent inclure le droit (i) de demander l'accès et d'obtenir une copie de
                vos informations personnelles, (ii) de demander la rectification ou
                l'effacement ; (iii) de restreindre le traitement de vos
                informations personnelles ; (iv) si applicable, à la portabilité des données ; et (v)
                de ne pas être soumis à la prise de décision automatisée. Dans certaines
                circonstances, vous pouvez également avoir le droit de vous opposer au
                traitement de vos informations personnelles. Vous pouvez faire une telle
                demande en nous contactant en utilisant les coordonnées fournies
                dans la section "COMMENT POUVEZ-VOUS NOUS CONTACTER CONCERNANT CET AVIS ?"
                ci-dessous.
              </p>
              <p>
                Nous examinerons et agirons sur toute demande conformément aux
                lois applicables sur la protection des données.
              </p>
              <p>
                Si vous êtes situé dans l'EEE ou au Royaume-Uni et que vous croyez que nous
                traitons illégalement vos informations personnelles, vous avez également
                le droit de vous plaindre auprès de l'autorité de protection des données de votre
                État membre ou de l'autorité de protection des données du Royaume-Uni.
              </p>
              <p>
                Si vous êtes situé en Suisse, vous pouvez contacter le Commissaire Fédéral
                à la Protection des Données et à l'Information.
              </p>
              <p>
                <strong>Retirer votre consentement :</strong> Si nous nous appuyons sur
                votre consentement pour traiter vos informations personnelles, ce qui peut être
                un consentement exprès et/ou implicite selon la loi
                applicable, vous avez le droit de retirer votre consentement à tout moment. Vous pouvez
                retirer votre consentement à tout moment en nous contactant en utilisant les
                coordonnées fournies dans la section "COMMENT POUVEZ-VOUS NOUS CONTACTER
                CONCERNANT CET AVIS ?" ci-dessous.
              </p>
              <p>
                Cependant, veuillez noter que cela n'affectera pas la légalité du
                traitement avant son retrait ni, lorsque la loi
                applicable le permet, n'affectera-t-il pas le traitement de vos
                informations personnelles effectué en s'appuyant sur des motifs de traitement légaux
                autres que le consentement.
              </p>
              <p>
                Si vous avez des questions ou des commentaires sur vos droits en matière de confidentialité, vous
                pouvez nous envoyer un e-mail à{" "}
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  joemdjossou@outlook.com
                </a>
                .
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                8. Contrôles Pour Les Fonctionnalités Ne Pas Suivre
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                La plupart des navigateurs web et certains systèmes d'exploitation mobiles et
                applications mobiles incluent une fonctionnalité ou un paramètre Ne Pas Suivre ("DNT")
                que vous pouvez activer pour signaler votre préférence de confidentialité de ne pas avoir
                de données sur vos activités de navigation en ligne surveillées et
                collectées. À ce stade, aucun standard technologique uniforme pour
                reconnaître et implémenter les signaux DNT n'a été finalisé. En tant que
                tel, nous ne répondons pas actuellement aux signaux de navigateur DNT ou à tout
                autre mécanisme qui communique automatiquement votre choix de ne
                pas être suivi en ligne. Si un standard pour le suivi en ligne est
                adopté que nous devons suivre à l'avenir, nous vous informerons
                sur cette pratique dans une version révisée de cet Avis de Confidentialité.
              </p>
              <p>
                La loi californienne nous oblige à vous faire savoir comment nous répondons aux signaux
                DNT des navigateurs web. Parce qu'il n'y a actuellement pas de standard
                industriel ou légal pour reconnaître ou honorer les signaux DNT, nous ne
                leur répondons pas à ce moment.
              </p>
            </CardContent>
          </Card>

          {/* Section 9 - US Residents */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                9. Les Résidents des États-Unis Ont-Ils Des Droits Spécifiques en Matière de Confidentialité ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En bref :</strong> Si vous êtes résident de Californie,
                Colorado, Connecticut, Delaware, Floride, Indiana, Iowa,
                Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New
                Jersey, Oregon, Tennessee, Texas, Utah ou Virginie, vous pouvez
                avoir le droit de demander l'accès à et de recevoir des détails sur
                les informations personnelles que nous conservons sur vous et comment nous les avons
                traitées, corriger les inexactitudes, obtenir une copie de, ou supprimer
                vos informations personnelles. Vous pouvez également avoir le droit de
                retirer votre consentement à notre traitement de vos
                informations personnelles. Ces droits peuvent être limités dans certaines circonstances
                par la loi applicable.
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Catégories d'Informations Personnelles Que Nous Collectons
                </h4>
                <p className="mb-4">
                  Nous avons collecté les catégories suivantes d'informations
                  personnelles au cours des douze (12) derniers mois :
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">
                          Catégorie
                        </th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">
                          Exemples
                        </th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                          Collecté
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          A. Identifiants
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Coordonnées, telles que nom réel, alias, adresse
                          postale, numéro de téléphone ou mobile, identifiant personnel
                          unique, identifiant en ligne, adresse de
                          protocole Internet, adresse e-mail et nom de compte
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          B. Informations personnelles telles que définies dans le
                          statut des dossiers clients de Californie
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Nom, coordonnées, éducation, emploi,
                          historique d'emploi et informations financières
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          C. Caractéristiques de classification protégées en vertu
                          de la loi d'état ou fédérale
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Sexe, âge, date de naissance, race et ethnicité,
                          origine nationale, statut matrimonial et autres données
                          démographiques
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          D. Informations commerciales
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Informations de transaction, historique d'achat, détails
                          financiers et informations de paiement
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          E. Informations biométriques
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Empreintes digitales et empreintes vocales
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          F. Activité Internet ou autre réseau similaire
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Historique de navigation, historique de recherche, comportement en ligne,
                          données d'intérêt et interactions avec nos et autres
                          sites web, applications, systèmes et publicités
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          G. Données de géolocalisation
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Localisation de l'appareil
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          H. Informations audio, électroniques, sensorielles ou similaires
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Images et audio, enregistrements vidéo ou d'appels créés en
                          relation avec nos activités commerciales
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          I. Informations professionnelles ou liées à l'emploi
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Coordonnées commerciales afin de vous fournir nos
                          Services au niveau commercial ou titre de poste, historique de
                          travail et qualifications professionnelles si vous postulez
                          pour un emploi avec nous
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          J. Informations d'Éducation
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Dossiers étudiants et informations d'annuaire
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          K. Inférences tirées des informations personnelles
                          collectées
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Inférences tirées de toute information personnelle
                          collectée listée ci-dessus pour créer un profil ou
                          un résumé sur, par exemple, les préférences et
                          caractéristiques d'un individu
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          L. Informations Personnelles Sensibles
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          -
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NON
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                Nous pouvons également collecter d'autres informations personnelles en dehors de ces
                catégories dans les cas où vous interagissez avec nous en
                personne, en ligne, ou par téléphone ou courrier dans le contexte de :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Recevoir de l'aide par le biais de nos canaux de support client ;</li>
                <li>Participation à des enquêtes clients ou concours ; et</li>
                <li>
                  Facilitation de la livraison de nos Services et pour répondre à
                  vos demandes.
                </li>
              </ul>

              <p>
                Nous utiliserons et conserverons les informations personnelles collectées selon
                les besoins pour fournir les Services ou pour :
              </p>
              <p>
                <strong>
                  Catégorie H - Aussi longtemps que l'utilisateur a un compte avec nous
                </strong>
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Vos Droits
                </h4>
                <p>
                  Vous avez des droits en vertu de certaines lois de protection des données des États américains.
                  Cependant, ces droits ne sont pas absolus, et dans certains cas,
                  nous pouvons décliner votre demande tel que permis par la loi. Ces droits
                  incluent :
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>
                    Droit de savoir si nous traitons ou non vos données
                    personnelles
                  </li>
                  <li>Droit d'accéder à vos données personnelles</li>
                  <li>Droit de corriger les inexactitudes dans vos données personnelles</li>
                  <li>Droit de demander la suppression de vos données personnelles</li>
                  <li>
                    Droit d'obtenir une copie des données personnelles que vous avez précédemment
                    partagées avec nous
                  </li>
                  <li>
                    Droit à la non-discrimination pour l'exercice de vos droits
                  </li>
                  <li>
                    Droit de refuser le traitement de vos données personnelles si
                    elles sont utilisées pour la publicité ciblée (ou le partage tel que défini
                    en vertu de la loi de confidentialité de Californie), la vente de données personnelles,
                    ou le profilage en vue de décisions qui produisent des effets
                    légaux ou similaires significatifs ("profilage")
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Comment Exercer Vos Droits
                </h4>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter en soumettant une
                  demande d'accès aux données, en nous envoyant un e-mail à{" "}
                  <a
                    href="mailto:joemdjossou@outlook.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    joemdjossou@outlook.com
                  </a>
                  , ou en vous référant aux coordonnées au bas de ce
                  document.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 10 - Other Regions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                10. D'Autres Régions Ont-Elles Des Droits Spécifiques en Matière de Confidentialité ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En bref :</strong> Vous pouvez avoir des droits supplémentaires basés
                sur le pays dans lequel vous résidez.
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Australie et Nouvelle-Zélande
                </h4>
                <p>
                  Nous collectons et traitons vos informations personnelles en vertu des
                  obligations et conditions établies par la Loi sur la Protection de la Vie Privée de 1988 de l'Australie
                  et la Loi sur la Protection de la Vie Privée de 2020 de la Nouvelle-Zélande (Loi sur la Protection de la Vie Privée).
                </p>
                <p>
                  Cet Avis de Confidentialité satisfait aux exigences de notification définies
                  dans les deux Lois sur la Protection de la Vie Privée, en particulier : quelles informations
                  personnelles nous collectons de vous, de quelles sources, à quelles fins,
                  et autres destinataires de vos informations personnelles.
                </p>
                <p>
                  Si vous ne souhaitez pas fournir les informations personnelles
                  nécessaires pour remplir leur objectif applicable, cela peut affecter
                  notre capacité à fournir nos services, en particulier :
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>vous offrir les produits ou services que vous voulez</li>
                  <li>répondre à ou vous aider avec vos demandes</li>
                </ul>
                <p className="mt-2">
                  À tout moment, vous avez le droit de demander l'accès à ou
                  la correction de vos informations personnelles. Vous pouvez faire une telle
                  demande en nous contactant en utilisant les coordonnées fournies
                  dans la section "COMMENT POUVEZ-VOUS CONSULTER, METTRE À JOUR OU SUPPRIMER LES DONNÉES
                  QUE NOUS COLLECTONS DE VOUS ?"
                </p>
                <p className="mt-2">
                  Si vous croyez que nous traitons illégalement vos informations
                  personnelles, vous avez le droit de soumettre une plainte concernant une
                  violation des Principes de Protection de la Vie Privée Australiens à l'Office du
                  Commissaire Australien à l'Information et une violation des Principes de Protection de la Vie Privée de la Nouvelle-Zélande
                  à l'Office du Commissaire à la Protection de la Vie Privée de la Nouvelle-Zélande.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  République d'Afrique du Sud
                </h4>
                <p>
                  À tout moment, vous avez le droit de demander l'accès à ou
                  la correction de vos informations personnelles. Vous pouvez faire une telle
                  demande en nous contactant en utilisant les coordonnées fournies
                  dans la section "COMMENT POUVEZ-VOUS CONSULTER, METTRE À JOUR OU SUPPRIMER LES DONNÉES
                  QUE NOUS COLLECTONS DE VOUS ?"
                </p>
                <p className="mt-2">
                  Si vous n'êtes pas satisfait de la manière dont nous traitons toute
                  plainte concernant notre traitement des informations
                  personnelles, vous pouvez contacter le bureau du régulateur, dont
                  les détails sont :
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-2">
                  <p className="font-semibold">
                    Le Régulateur de l'Information (Afrique du Sud)
                  </p>
                  <p>Demandes générales : enquiries@inforegulator.org.za</p>
                  <p>
                    Plaintes (formulaire POPIA/PAIA 5 complet) :
                    PAIAComplaints@inforegulator.org.za &
                    POPIAComplaints@inforegulator.org.za
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 11 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                11. Mettons-Nous À Jour Cet Avis ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>En bref :</strong> Oui, nous mettrons à jour cet avis selon
                les besoins pour rester conforme aux lois pertinentes.
              </p>
              <p>
                Nous pouvons mettre à jour cet Avis de Confidentialité de temps à autre. La version
                mise à jour sera indiquée par une date "Révisée" mise à jour au
                sommet de cet Avis de Confidentialité. Si nous apportons des modifications importantes à cet
                Avis de Confidentialité, nous pouvons vous notifier soit en affichant de manière proéminente
                un avis de ces changements ou en vous envoyant directement une
                notification. Nous vous encourageons à consulter cet Avis de Confidentialité
                fréquemment pour être informé de la façon dont nous protégeons vos
                informations.
              </p>
            </CardContent>
          </Card>

          {/* Section 12 - Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                12. Comment Pouvez-Vous Nous Contacter Concernant Cet Avis ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Si vous avez des questions ou des commentaires sur cet avis, vous pouvez
                nous envoyer un e-mail à{" "}
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  joemdjossou@outlook.com
                </a>{" "}
                ou nous contacter par courrier à :
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-slate-600 dark:text-slate-400 mt-0.5" />
                  <div>
                    <p className="font-semibold">JOEMDJOSSOU</p>
                    <p>Rue41 HDN</p>
                    <p>Lomé, Maritime BP2157</p>
                    <p>Togo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 13 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                13. Comment Pouvez-Vous Consulter, Mettre À Jour Ou Supprimer Les Données Que Nous
                Collectons De Vous ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Basé sur les lois applicables de votre pays ou état de
                résidence aux États-Unis, vous pouvez avoir le droit de demander l'accès à
                vos informations personnelles que nous collectons, des détails sur la façon
                dont nous les avons traitées, corriger les inexactitudes, ou supprimer vos
                informations personnelles. Vous pouvez également avoir le droit de retirer
                votre consentement à notre traitement de vos
                informations personnelles. Ces droits peuvent être limités dans certaines circonstances par la loi
                applicable. Pour demander de consulter, mettre à jour ou supprimer vos
                informations personnelles, veuillez remplir et soumettre une demande d'accès aux données.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100 text-center">
              Des Questions Sur Cette Politique de Confidentialité ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Si vous avez des questions sur cette Politique de Confidentialité ou nos pratiques
              de données, n'hésitez pas à nous contacter.
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Nous Contacter
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <Button variant="outline" onClick={scrollToTop}>
            Retour en Haut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyFR;
