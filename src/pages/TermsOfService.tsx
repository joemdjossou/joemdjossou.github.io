import { HYMNES_APP_ICON_SRC } from "@/constants/hymnes-brand";
import PageHeader from "@/components/site/PageHeader";
import { navigateTo } from "@/lib/navigate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Mail, MapPin, Shield } from "lucide-react";
import React from "react";

const LAST_UPDATED = "August 4, 2026";
const SUPPORT_EMAIL = "joemdjossou@outlook.com";

const TermsOfService: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <PageHeader
        image="/hymnes-images/en/05.png"
        icon={HYMNES_APP_ICON_SRC}
        title="Terms of Service"
        subtitle="Hymnes et Louanges Adventiste · Updated 4 August 2026"
        backHref="/hymnes-app"
        backLabel="Back to the app"
      >
        <a
          href="/hymnes-app/privacy-policy"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Privacy Policy
        </a>
      </PageHeader>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Agreement to These Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              These Terms of Service ("Terms") are a binding agreement between
              you and <strong>JOEMDJOSSOU</strong> ("we," "us," or "our")
              governing your use of the mobile application{" "}
              <strong>Hymnes et Louanges Adventiste</strong> and any related
              services, content, and features (together, the "App").
            </p>
            <p>
              By downloading, installing, accessing, or using the App, you agree
              to these Terms and to our{" "}
              <a
                href="/hymnes-app/privacy-policy"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Privacy Policy
              </a>
              . If you do not agree, please do not use the App.
            </p>
            <p>
              Questions? Contact us at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </CardContent>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Table of Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li>Eligibility</li>
              <li>Your Account</li>
              <li>License to Use the App</li>
              <li>Content and Intellectual Property</li>
              <li>Tips and Donations (In-App Purchases)</li>
              <li>Refunds and Cancellations</li>
              <li>Acceptable Use</li>
              <li>Third-Party Services</li>
              <li>Disclaimers</li>
              <li>Limitation of Liability</li>
              <li>Termination</li>
              <li>Apple App Store Terms</li>
              <li>Changes to These Terms</li>
              <li>Governing Law</li>
              <li>Contact Us</li>
            </ol>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                1. Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                The App is intended for a general audience. You may use the App
                only if you can form a binding contract with us under the laws
                of your country of residence. If you are a minor, you may use
                the App only with the involvement and consent of a parent or
                legal guardian, who is responsible for your use of the App —
                including any tip or donation made from your device.
              </p>
            </CardContent>
          </Card>

          {/* 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                2. Your Account
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Most of the App works without an account. Creating an account
                (by email and password, or by signing in with Google or Apple)
                lets you sync favorites and hymn history across your devices.
              </p>
              <p>
                You are responsible for keeping your credentials confidential
                and for all activity that occurs under your account. You must
                provide accurate information and keep it up to date. You can
                delete your account at any time in{" "}
                <strong>Settings → Account → Delete Account</strong>, as
                described in our{" "}
                <a
                  href="/hymnes-app/privacy-policy"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </CardContent>
          </Card>

          {/* 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                3. License to Use the App
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Subject to these Terms, we grant you a personal, limited,
                non-exclusive, non-transferable, revocable license to download
                and use the App on devices you own or control, for your own
                personal, non-commercial worship, study, and devotional use.
              </p>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Copy, redistribute, resell, sublicense, or commercially
                  exploit the App or its content
                </li>
                <li>
                  Reverse engineer, decompile, or attempt to extract the source
                  code of the App, except where such restriction is prohibited
                  by law
                </li>
                <li>
                  Remove or alter any copyright, trademark, or other proprietary
                  notices
                </li>
                <li>
                  Extract audio, lyrics, or other content in bulk (including by
                  scraping or automated means) for use outside the App
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                4. Content and Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                The App provides hymn lyrics, sheet music, and audio recordings
                for devotional use. Hymn texts and melodies are drawn from
                traditional and public-domain sources of the Seventh-day
                Adventist hymnal tradition. Where third-party material is
                included, it remains the property of its respective rights
                holders.
              </p>
              <p>
                The App itself — its software, design, layout, arrangements,
                recordings we produce, name, and logo — is owned by us and
                protected by applicable intellectual property laws.
              </p>
              <p>
                <strong>Copyright concerns.</strong> We respect the rights of
                authors, composers, and publishers. If you believe content in
                the App infringes your rights, email{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                with a description of the work and where it appears in the App,
                and we will review and, where appropriate, remove it promptly.
              </p>
              <p>
                <strong>Your submissions.</strong> Feedback or suggestions you
                send us are not confidential, and you grant us a
                non-exclusive, royalty-free license to use them to improve the
                App.
              </p>
            </CardContent>
          </Card>

          {/* 5 - Tips and Donations */}
          <Card id="tips-and-donations">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Heart className="h-5 w-5 text-rose-500" />
                5. Tips and Donations (In-App Purchases)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> The App is free. Tips and donations
                are entirely voluntary, give you nothing in return, and are
                processed by the app store — not by us directly.
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  What a tip is
                </h4>
                <p>
                  The App includes an optional "tip jar" that lets you support
                  continued development, hosting, and recording costs. A tip is
                  a <strong>voluntary, one-time contribution</strong>. It is{" "}
                  <strong>not</strong> a purchase of goods or services, not a
                  subscription, and not a payment for access.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  No goods, services, or features in return
                </h4>
                <p>
                  Every feature of the App remains free and fully available
                  whether or not you tip. Tipping does not unlock content,
                  remove limits, grant early access, or provide any other
                  benefit, reward, or entitlement. You should tip only if you
                  wish to support the project.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  How payment works
                </h4>
                <p>
                  Tips are offered as in-app purchases and are charged by the
                  platform operating your app store —{" "}
                  <strong>Apple</strong> on iOS/iPadOS and{" "}
                  <strong>Google</strong> on Android — to the payment method on
                  your store account, under that store's terms. We use{" "}
                  <strong>RevenueCat, Inc.</strong> to manage and validate
                  in-app purchases. We never see or store your card number or
                  other payment credentials.
                </p>
                <p className="mt-2">
                  Prices are shown in your local currency before you confirm and
                  may include applicable taxes. Prices may change over time;
                  any change applies only to purchases made after it takes
                  effect. Amounts are one-time charges — no tip renews
                  automatically.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Not a charitable donation
                </h4>
                <p>
                  We are not a registered charity or non-profit organization,
                  and tips are <strong>not tax-deductible</strong>. Tips are not
                  collected on behalf of, and are not transmitted to, any
                  church, conference, or other religious organization. They
                  support the development and operation of the App.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Your responsibility
                </h4>
                <p>
                  You must be authorized to use the payment method on the store
                  account you tip from. If you share a device or account with a
                  child or another person, please use your platform's parental
                  controls or purchase confirmation settings.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                6. Refunds and Cancellations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> Tips are generally final, but refunds
                are handled by the app store, not by us.
              </p>
              <p>
                Because tips are voluntary contributions rather than purchases
                of goods or services, they are generally non-refundable. We do
                not process payments and therefore cannot issue refunds
                directly.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>iOS / iPadOS:</strong> request a refund from Apple at{" "}
                  <a
                    href="https://reportaproblem.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    reportaproblem.apple.com
                  </a>
                  , subject to Apple's Media Services Terms and Conditions.
                </li>
                <li>
                  <strong>Android:</strong> request a refund through Google Play
                  Support, subject to the Google Play Terms of Service.
                </li>
              </ul>
              <p>
                Nothing here limits any statutory refund or withdrawal right you
                may have under mandatory consumer law in your country. If you
                believe a tip was made in error or without authorization, email
                us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                and we will help you contact the store.
              </p>
            </CardContent>
          </Card>

          {/* 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                7. Acceptable Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the App for any unlawful or fraudulent purpose</li>
                <li>
                  Interfere with, disrupt, overload, or attempt to gain
                  unauthorized access to the App or its servers
                </li>
                <li>
                  Use bots, scrapers, or other automated means to access the App
                  or its content
                </li>
                <li>
                  Impersonate another person or misrepresent your affiliation
                  with any person or organization
                </li>
                <li>
                  Submit feedback or content that is unlawful, abusive,
                  harassing, defamatory, or infringing
                </li>
                <li>
                  Circumvent, disable, or interfere with security or purchase
                  validation features
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                8. Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                The App relies on third-party providers to operate, including
                Apple and Google for app distribution and in-app purchases,
                RevenueCat for purchase management, and providers for
                authentication, cloud sync, analytics, and crash reporting.
                Their handling of your information is described in our{" "}
                <a
                  href="/hymnes-app/privacy-policy"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <p>
                The App may link to third-party websites or resources. We do not
                control them and are not responsible for their content,
                policies, or practices.
              </p>
            </CardContent>
          </Card>

          {/* 9 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                9. Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                The App is provided <strong>"as is"</strong> and{" "}
                <strong>"as available"</strong>, without warranties of any kind,
                whether express, implied, or statutory, including implied
                warranties of merchantability, fitness for a particular purpose,
                and non-infringement, to the fullest extent permitted by law.
              </p>
              <p>
                We do not warrant that the App will be uninterrupted,
                error-free, or secure, that defects will be corrected, or that
                hymn texts, translations, sheet music, or audio are free of
                errors. Some jurisdictions do not allow the exclusion of certain
                warranties, so some of the above may not apply to you.
              </p>
            </CardContent>
          </Card>

          {/* 10 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                10. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                To the fullest extent permitted by law, we will not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages, or for any loss of data, profits, or goodwill,
                arising out of or relating to your use of the App.
              </p>
              <p>
                Our total liability for all claims relating to the App will not
                exceed the greater of (a) the total amount you paid us through
                the App in the twelve (12) months before the claim, or (b) USD
                50. Nothing in these Terms limits liability that cannot be
                limited under applicable law.
              </p>
            </CardContent>
          </Card>

          {/* 11 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                11. Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                You may stop using the App at any time and delete your account
                in <strong>Settings → Account → Delete Account</strong>. We may
                suspend or terminate your access if you materially breach these
                Terms or if required by law or by a platform operator.
              </p>
              <p>
                Termination does not entitle you to a refund of any tip already
                made. Sections that by their nature should survive — including
                intellectual property, disclaimers, limitation of liability, and
                governing law — survive termination.
              </p>
            </CardContent>
          </Card>

          {/* 12 - Apple */}
          <Card id="apple-terms">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                12. Apple App Store Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                The following applies if you obtained the App from the Apple App
                Store. These Terms are between you and us only, not with Apple
                Inc. ("Apple"), and Apple is not responsible for the App or its
                content.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Your license to use the App is limited to a non-transferable
                  license to use it on Apple-branded products you own or
                  control, as permitted by the Usage Rules in the Apple Media
                  Services Terms and Conditions.
                </li>
                <li>
                  Apple has no obligation to provide maintenance or support for
                  the App.
                </li>
                <li>
                  If the App fails to conform to any applicable warranty, you
                  may notify Apple, and Apple may refund the purchase price (if
                  any). To the maximum extent permitted by law, Apple has no
                  other warranty obligation with respect to the App.
                </li>
                <li>
                  We, not Apple, are responsible for addressing any claims
                  relating to the App, including product liability claims,
                  claims that the App fails to conform to legal requirements,
                  and claims under consumer protection or similar legislation.
                </li>
                <li>
                  We, not Apple, are responsible for investigating and resolving
                  any third-party claim that the App infringes intellectual
                  property rights.
                </li>
                <li>
                  You represent that you are not located in a country subject to
                  a U.S. Government embargo or designated as a "terrorist
                  supporting" country, and that you are not on any U.S.
                  Government list of prohibited or restricted parties.
                </li>
                <li>
                  Apple and its subsidiaries are third-party beneficiaries of
                  these Terms and may enforce them against you.
                </li>
              </ul>
              <p>
                Apple's standard End User License Agreement (the "Licensed
                Application End User License Agreement") applies to the App
                except where these Terms provide greater rights to you.
              </p>
            </CardContent>
          </Card>

          {/* 13 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                13. Changes to These Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                We may update these Terms from time to time. The updated version
                is indicated by the "Last updated" date at the top of this page.
                If we make material changes, we will provide notice in the App
                or by other reasonable means. Continuing to use the App after
                changes take effect means you accept the updated Terms.
              </p>
            </CardContent>
          </Card>

          {/* 14 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                14. Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                These Terms are governed by the laws of the Togolese Republic,
                without regard to conflict-of-law rules. If you are a consumer
                resident in the European Economic Area, the United Kingdom, or
                another jurisdiction with mandatory consumer protection rules,
                you keep the benefit of any mandatory provisions of the law of
                your country of residence, and you may bring proceedings in your
                local courts.
              </p>
              <p>
                We encourage you to contact us first at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                so we can try to resolve any dispute informally.
              </p>
            </CardContent>
          </Card>

          {/* 15 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                15. Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                For questions about these Terms, email us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                or write to us at:
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
        </div>

        {/* Contact CTA */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100 text-center">
              Questions About These Terms?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              If anything here is unclear — especially about tips and donations
              — we're happy to explain.
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <Button variant="outline" onClick={scrollToTop}>
            Back to Top
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
