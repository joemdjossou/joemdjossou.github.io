import React from 'react';
import { ArrowLeft, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Privacy Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Hymnes et Louanges Adventiste - Last updated October 07, 2025
          </p>
        </div>

        {/* Main Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Privacy Notice
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-700 dark:text-slate-300">
            <p>
              This Privacy Notice for <strong>JOEMDJOSSOU</strong> ("we," "us," or "our"), describes
              how and why we might access, collect, store, use, and/or share
              ("process") your personal information when you use our services
              ("Services"), including when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Download and use our mobile application (Hymnes et Louanges Adventiste), or any other application of ours that links to this Privacy Notice</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            <p>
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you
              understand your privacy rights and choices. We are responsible for making
              decisions about how your personal information is processed. If you do not
              agree with our policies and practices, please do not use our Services. If
              you still have any questions or concerns, please contact us at{' '}
              <a href="mailto:joemdjossou@outlook.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                joemdjossou@outlook.com
              </a>.
            </p>
          </CardContent>
        </Card>

        {/* Summary of Key Points */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Summary of Key Points
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              This summary provides key points from our Privacy Notice, but you
              can find out more details about any of these topics by clicking the
              link following each key point or by using our table of contents below
              to find the section you are looking for.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  What personal information do we process?
                </h4>
                <p>
                  When you visit, use, or navigate our Services, we may process personal information depending on
                  how you interact with us and the Services, the choices you make, and the
                  products and features you use.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Do we process any sensitive personal information?
                </h4>
                <p>
                  Some of the information may be considered "special" or "sensitive" in certain
                  jurisdictions, for example your racial or ethnic origins, sexual orientation,
                  and religious beliefs. <strong>We do not process sensitive personal information.</strong>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Do we collect any information from third parties?
                </h4>
                <p><strong>We do not collect any information from third parties.</strong></p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  How do we process your information?
                </h4>
                <p>
                  We process your information to provide, improve, and administer our Services, communicate with you, for
                  security and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent. We process
                  your information only when we have a valid legal reason to do so.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  In what situations and with which parties do we share personal information?
                </h4>
                <p>
                  We may share information in specific situations and with
                  specific third parties.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  How do we keep your information safe?
                </h4>
                <p>
                  We have adequate organizational and technical processes and procedures in place to protect
                  your personal information. However, no electronic transmission over the
                  internet or information storage technology can be guaranteed to be 100%
                  secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorized third parties will not be able to defeat our security and
                  improperly collect, access, steal, or modify your information.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  What are your rights?
                </h4>
                <p>
                  Depending on where you are located geographically, the applicable privacy law may mean you have certain
                  rights regarding your personal information.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  How do you exercise your rights?
                </h4>
                <p>
                  The easiest way to exercise your rights is by submitting a data subject
                  access request, or by contacting us. We will consider and act upon any request in accordance with applicable
                  data protection laws.
                </p>
              </div>
            </div>
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
              <li>What Information Do We Collect?</li>
              <li>How Do We Process Your Information?</li>
              <li>What Legal Bases Do We Rely On To Process Your Personal Information?</li>
              <li>When And With Whom Do We Share Your Personal Information?</li>
              <li>How Long Do We Keep Your Information?</li>
              <li>How Do We Keep Your Information Safe?</li>
              <li>What Are Your Privacy Rights?</li>
              <li>Controls For Do-Not-Track Features</li>
              <li>Do United States Residents Have Specific Privacy Rights?</li>
              <li>Do Other Regions Have Specific Privacy Rights?</li>
              <li>Do We Make Updates To This Notice?</li>
              <li>How Can You Contact Us About This Notice?</li>
              <li>How Can You Review, Update, Or Delete The Data We Collect From You?</li>
            </ol>
          </CardContent>
        </Card>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                1. What Information Do We Collect?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Personal information you disclose to us
                </h4>
                <p className="mb-2">
                  <strong>In Short:</strong> We collect personal information that you provide to us.
                </p>
                <p>
                  We collect personal information that you voluntarily provide to us when you
                  express an interest in obtaining information about us or our products and
                  Services, when you participate in activities on the Services, or otherwise
                  when you contact us.
                </p>
                <p className="mt-2">
                  <strong>Sensitive Information.</strong> We do not process sensitive information.
                </p>
                <p className="mt-2">
                  All personal information that you provide to us must be true, complete, and
                  accurate, and you must notify us of any changes to such personal
                  information.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                2. How Do We Process Your Information?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> We process your information to provide, improve, and administer
                our Services, communicate with you, for security and fraud prevention, and
                to comply with law. We may also process your information for other
                purposes with your consent.
              </p>
              <p>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>To save or protect an individual's vital interest.</strong> We may process
                  your information when necessary to save or protect an individual's
                  vital interest, such as to prevent harm.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                3. What Legal Bases Do We Rely On To Process Your Information?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> We only process your personal information when we believe it is
                necessary and we have a valid legal reason (i.e., legal basis) to do so
                under applicable law, like with your consent, to comply with laws, to provide
                you with services to enter into or fulfill our contractual obligations, to protect
                your rights, or to fulfill our legitimate business interests.
              </p>
              
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  If you are located in the EU or UK, this section applies to you.
                </h4>
                <p>
                  The General Data Protection Regulation (GDPR) and UK GDPR require us
                  to explain the valid legal bases we rely on in order to process your personal
                  information. As such, we may rely on the following legal bases to process
                  your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong>Consent.</strong> We may process your information if you have given us
                    permission (i.e., consent) to use your personal information for a
                    specific purpose. You can withdraw your consent at any time.
                  </li>
                  <li>
                    <strong>Legal Obligations.</strong> We may process your information where we
                    believe it is necessary for compliance with our legal obligations, such
                    as to cooperate with a law enforcement body or regulatory agency,
                    exercise or defend our legal rights, or disclose your information as
                    evidence in litigation in which we are involved.
                  </li>
                  <li>
                    <strong>Vital Interests.</strong> We may process your information where we believe
                    it is necessary to protect your vital interests or the vital interests of a
                    third party, such as situations involving potential threats to the safety
                    of any person.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  If you are located in Canada, this section applies to you.
                </h4>
                <p>
                  We may process your information if you have given us specific permission
                  (i.e., express consent) to use your personal information for a specific
                  purpose, or in situations where your permission can be inferred (i.e.,
                  implied consent). You can withdraw your consent at any time.
                </p>
                <p className="mt-2">
                  In some exceptional cases, we may be legally permitted under applicable
                  law to process your information without your consent, including, for
                  example:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                  <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                  <li>For investigations and fraud detection and prevention</li>
                  <li>For business transactions provided certain conditions are met</li>
                  <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                  <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                  <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                  <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                  <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                  <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                  <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                  <li>If the information is publicly available and is specified by the regulations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                4. When And With Whom Do We Share Your Personal Information?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> We may share information in specific situations described in this
                section and/or with the following third parties.
              </p>
              <p>
                We may need to share your personal information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Business Transfers.</strong> We may share or transfer your information in
                  connection with, or during negotiations of, any merger, sale of
                  company assets, financing, or acquisition of all or a portion of our
                  business to another company.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                5. How Long Do We Keep Your Information?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the
                purposes outlined in this Privacy Notice unless otherwise required by law.
              </p>
              <p>
                We will only keep your personal information for as long as it is necessary
                for the purposes set out in this Privacy Notice, unless a longer retention
                period is required or permitted by law (such as tax, accounting, or other
                legal requirements).
              </p>
              <p>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such information,
                or, if this is not possible (for example, because your personal information
                has been stored in backup archives), then we will securely store your
                personal information and isolate it from any further processing until deletion
                is possible.
              </p>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                6. How Do We Keep Your Information Safe?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> We aim to protect your personal information through a system of
                organizational and technical security measures.
              </p>
              <p>
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the security of any
                personal information we process. However, despite our safeguards and
                efforts to secure your information, no electronic transmission over the
                Internet or information storage technology can be guaranteed to be 100%
                secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information. Although we
                will do our best to protect your personal information, transmission of
                personal information to and from our Services is at your own risk. You
                should only access the Services within a secure environment.
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                7. What Are Your Privacy Rights?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> Depending on your state of residence in the US or in some
                regions, such as the European Economic Area (EEA), United Kingdom
                (UK), Switzerland, and Canada, you have rights that allow you greater
                access to and control over your personal information. You may review,
                change, or terminate your account at any time, depending on your country,
                province, or state of residence.
              </p>
              <p>
                In some regions (like the EEA, UK, Switzerland, and Canada), you have
                certain rights under applicable data protection laws. These may include the
                right (i) to request access and obtain a copy of your personal information,
                (ii) to request rectification or erasure; (iii) to restrict the processing of your
                personal information; (iv) if applicable, to data portability; and (v) not to be
                subject to automated decision-making. In certain circumstances, you may
                also have the right to object to the processing of your personal information.
                You can make such a request by contacting us by using the contact details
                provided in the section "HOW CAN YOU CONTACT US ABOUT THIS
                NOTICE?" below.
              </p>
              <p>
                We will consider and act upon any request in accordance with applicable
                data protection laws.
              </p>
              <p>
                If you are located in the EEA or UK and you believe we are unlawfully
                processing your personal information, you also have the right to complain
                to your Member State data protection authority or UK data protection
                authority.
              </p>
              <p>
                If you are located in Switzerland, you may contact the Federal Data
                Protection and Information Commissioner.
              </p>
              <p>
                <strong>Withdrawing your consent:</strong> If we are relying on your consent to process
                your personal information, which may be express and/or implied consent
                depending on the applicable law, you have the right to withdraw your
                consent at any time. You can withdraw your consent at any time by
                contacting us by using the contact details provided in the section "HOW
                CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
              </p>
              <p>
                However, please note that this will not affect the lawfulness of the
                processing before its withdrawal nor, when applicable law allows, will it
                affect the processing of your personal information conducted in reliance on
                lawful processing grounds other than consent.
              </p>
              <p>
                If you have questions or comments about your privacy rights, you may
                email us at{' '}
                <a href="mailto:joemdjossou@outlook.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  joemdjossou@outlook.com
                </a>.
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                8. Controls For Do-Not-Track Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting you can
                activate to signal your privacy preference not to have data about your
                online browsing activities monitored and collected. At this stage, no uniform
                technology standard for recognizing and implementing DNT signals has
                been finalized. As such, we do not currently respond to DNT browser
                signals or any other mechanism that automatically communicates your
                choice not to be tracked online. If a standard for online tracking is adopted
                that we must follow in the future, we will inform you about that practice in a
                revised version of this Privacy Notice.
              </p>
              <p>
                California law requires us to let you know how we respond to web browser
                DNT signals. Because there currently is not an industry or legal standard
                for recognizing or honoring DNT signals, we do not respond to them at this
                time.
              </p>
            </CardContent>
          </Card>

          {/* Section 9 - US Residents */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                9. Do United States Residents Have Specific Privacy Rights?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut,
                Delaware, Florida, Indiana, Iowa, Kentucky, Minnesota, Montana,
                Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah,
                or Virginia, you may have the right to request access to and receive details
                about the personal information we maintain about you and how we have
                processed it, correct inaccuracies, get a copy of, or delete your personal
                information. You may also have the right to withdraw your consent to our
                processing of your personal information. These rights may be limited in
                some circumstances by applicable law.
              </p>
              
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Categories of Personal Information We Collect
                </h4>
                <p className="mb-4">
                  We have collected the following categories of personal information in the
                  past twelve (12) months:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">Category</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">Examples</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-center">Collected</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">A. Identifiers</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">B. Personal information as defined in the California Customer Records statute</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Name, contact information, education, employment, employment history, and financial information</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">C. Protected classification characteristics under state or federal law</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">D. Commercial information</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Transaction information, purchase history, financial details, and payment information</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">E. Biometric information</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Fingerprints and voiceprints</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">F. Internet or other similar network activity</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">G. Geolocation data</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Device location</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">H. Audio, electronic, sensory, or similar information</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Images and audio, video or call recordings created in connection with our business activities</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">I. Professional or employment-related information</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">J. Education Information</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Student records and directory information</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">K. Inferences drawn from collected personal information</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">L. Sensitive personal Information</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">-</td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">NO</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                We may also collect other personal information outside of these categories
                through instances where you interact with us in person, online, or by phone
                or mail in the context of:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
              </ul>

              <p>
                We will use and retain the collected personal information as needed to
                provide the Services or for:
              </p>
              <p><strong>Category H - As long as the user has an account with us</strong></p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Your Rights
                </h4>
                <p>
                  You have rights under certain US state data protection laws. However,
                  these rights are not absolute, and in certain cases, we may decline your
                  request as permitted by law. These rights include:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Right to know whether or not we are processing your personal data</li>
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccuracies in your personal data</li>
                  <li>Right to request the deletion of your personal data</li>
                  <li>Right to obtain a copy of the personal data you previously shared with us</li>
                  <li>Right to non-discrimination for exercising your rights</li>
                  <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  How to Exercise Your Rights
                </h4>
                <p>
                  To exercise these rights, you can contact us by submitting a data subject
                  access request, by emailing us at{' '}
                  <a href="mailto:joemdjossou@outlook.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    joemdjossou@outlook.com
                  </a>, or by referring to the contact details at the bottom of this document.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 10 - Other Regions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                10. Do Other Regions Have Specific Privacy Rights?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> You may have additional rights based on the country you reside in.
              </p>
              
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Australia and New Zealand
                </h4>
                <p>
                  We collect and process your personal information under the obligations
                  and conditions set by Australia's Privacy Act 1988 and New Zealand's
                  Privacy Act 2020 (Privacy Act).
                </p>
                <p>
                  This Privacy Notice satisfies the notice requirements defined in both
                  Privacy Acts, in particular: what personal information we collect from you,
                  from which sources, for which purposes, and other recipients of your
                  personal information.
                </p>
                <p>
                  If you do not wish to provide the personal information necessary to fulfill
                  their applicable purpose, it may affect our ability to provide our services, in
                  particular:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>offer you the products or services that you want</li>
                  <li>respond to or help with your requests</li>
                </ul>
                <p className="mt-2">
                  At any time, you have the right to request access to or correction of your
                  personal information. You can make such a request by contacting us by
                  using the contact details provided in the section "HOW CAN YOU
                  REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
                </p>
                <p className="mt-2">
                  If you believe we are unlawfully processing your personal information, you
                  have the right to submit a complaint about a breach of the Australian
                  Privacy Principles to the Office of the Australian Information Commissioner
                  and a breach of New Zealand's Privacy Principles to the Office of New
                  Zealand Privacy Commissioner.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Republic of South Africa
                </h4>
                <p>
                  At any time, you have the right to request access to or correction of your
                  personal information. You can make such a request by contacting us by
                  using the contact details provided in the section "HOW CAN YOU
                  REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
                </p>
                <p className="mt-2">
                  If you are unsatisfied with the manner in which we address any complaint
                  with regard to our processing of personal information, you can contact the
                  office of the regulator, the details of which are:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-2">
                  <p className="font-semibold">The Information Regulator (South Africa)</p>
                  <p>General enquiries: enquiries@inforegulator.org.za</p>
                  <p>Complaints (complete POPIA/PAIA form 5): PAIAComplaints@inforegulator.org.za & POPIAComplaints@inforegulator.org.za</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 11 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                11. Do We Make Updates To This Notice?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant
                with relevant laws.
              </p>
              <p>
                We may update this Privacy Notice from time to time. The updated version
                will be indicated by an updated "Revised" date at the top of this Privacy
                Notice. If we make material changes to this Privacy Notice, we may notify
                you either by prominently posting a notice of such changes or by directly
                sending you a notification. We encourage you to review this Privacy Notice
                frequently to be informed of how we are protecting your information.
              </p>
            </CardContent>
          </Card>

          {/* Section 12 - Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                12. How Can You Contact Us About This Notice?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                If you have questions or comments about this notice, you may email us at{' '}
                <a href="mailto:joemdjossou@outlook.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  joemdjossou@outlook.com
                </a>{' '}
                or contact us by post at:
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
                13. How Can You Review, Update, Or Delete The Data We Collect From You?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Based on the applicable laws of your country or state of residence in the
                US, you may have the right to request access to the personal information
                we collect from you, details about how we have processed it, correct
                inaccuracies, or delete your personal information. You may also have the
                right to withdraw your consent to our processing of your personal
                information. These rights may be limited in some circumstances by
                applicable law. To request to review, update, or delete your personal
                information, please fill out and submit a data subject access request.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100 text-center">
              Questions About This Privacy Policy?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <a href="mailto:joemdjossou@outlook.com" className="flex items-center gap-2">
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

export default PrivacyPolicy;