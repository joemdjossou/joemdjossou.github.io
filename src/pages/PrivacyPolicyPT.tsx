import { HYMNES_APP_ICON_SRC } from "@/constants/hymnes-brand";
import PageHeader from "@/components/site/PageHeader";
import { navigateTo } from "@/lib/navigate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Languages, Mail, MapPin } from "lucide-react";
import React from "react";

const PrivacyPolicyPT: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <PageHeader
        image="/hymnes-images/en/03.png"
        icon={HYMNES_APP_ICON_SRC}
        title="Política de Privacidade"
        subtitle="Hymnes et Louanges Adventiste · Atualizada em 4 de agosto de 2026"
        backHref="/hymnes-app"
        backLabel="Voltar ao app"
      >
        <a
          href="/hymnes-app/privacy-policy"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          English
        </a>
        <a
          href="/hymnes-app/privacy-policy-fr"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Français
        </a>
        <a
          href="/hymnes-app/privacy-policy-es"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Español
        </a>
        <a
          href="/hymnes-app/terms-of-service"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Termos
        </a>
      </PageHeader>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Main Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Aviso de Privacidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-700 dark:text-slate-300">
            <p>
              Este Aviso de Privacidade de <strong>JOEMDJOSSOU</strong> ("nós", "nos" ou "nosso") descreve como e por que podemos acessar, coletar, armazenar, usar e/ou compartilhar ("tratar") suas informações pessoais quando você utiliza nossos serviços ("Serviços"), inclusive quando você:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Baixa e utiliza nosso aplicativo móvel (Hymnes et Louanges Adventiste), ou qualquer outro aplicativo nosso que vincule a este Aviso de Privacidade
              </li>
              <li>
                Interage conosco de outras formas relacionadas, incluindo vendas, marketing ou eventos
              </li>
            </ul>
            <p>
              <strong>Dúvidas ou preocupações?</strong> A leitura deste Aviso de Privacidade ajudará você a compreender seus direitos e opções em matéria de privacidade. Somos responsáveis por tomar decisões sobre como suas informações pessoais são tratadas. Se não concordar com nossas políticas e práticas, não utilize nossos Serviços. Se ainda tiver dúvidas ou preocupações, entre em contato em{" "}
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
              Resumen de Puntos Clés
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Este resumo apresenta os pontos principais do nosso Aviso de Privacidade; você pode encontrar mais detalhes sobre qualquer um desses temas seguindo o link após cada ponto ou utilizando o índice abaixo para localizar a seção que procura.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Quais informações pessoais tratamos?
                </h4>
                <p>
                  Coletamos os tipos de dados indicados em nosso <strong>Resumo de Segurança de Dados do Google Play</strong> abaixo, incluindo e-mail, nome, identificadores de usuário, interações no aplicativo, comentários, registros de falhas, diagnósticos e identificadores do dispositivo. Alguns dados são coletados mesmo se você não criar uma conta.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Tratamos informações pessoais sensíveis?
                </h4>
                <p>
                  Parte das informações pode ser considerada "especial" ou "sensível" em determinadas jurisdições, por exemplo suas origens raciais ou étnicas, orientação sexual e crenças religiosas. 
                  <strong>
                    Não tratamos informações pessoais sensíveis.
                  </strong>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Coletamos informações de terceiros?
                </h4>
                <p>
                  <strong>
                    Não vendemos nem compartilhamos suas informações pessoais com terceiros.
                  </strong>{" "}
                  Os dados coletados são utilizados exclusivamente para as finalidades descritas neste aviso (gerenciamento de conta, análise, funcionalidade do aplicativo e relatórios de falhas).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Como tratamos suas informações?
                </h4>
                <p>
                  Tratamos suas informações para prestar, melhorar e administrar nossos Serviços, nos comunicarmos com você, garantir a segurança e prevenir fraudes, e cumprir a lei. Também podemos tratar suas informações para outras finalidades com seu consentimento. Só tratamos suas informações quando dispomos de um motivo legal válido para isso.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Em quais situações e com quais partes compartilhamos informações pessoais?
                </h4>
                <p>
                  <strong>
                    Não vendemos nem compartilhamos suas informações pessoais com terceiros.
                  </strong>{" "}
                  Os dados são coletados e tratados por nós para operar o aplicativo, executar análises, enviar notificações push e relatar falhas.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Como protegemos suas informações?
                </h4>
                <p>
                  Implementamos processos e procedimentos organizacionais e técnicos adequados para proteger suas informações pessoais. 
                  <strong>
                    Todos os dados transmitidos fora do seu dispositivo são criptografados em trânsito por meio de HTTPS/TLS.
                  </strong>{" "}
                  No entanto, nenhuma transmissão eletrônica pela Internet nem tecnologia de armazenamento pode ser garantida como 100% segura; portanto, não podemos prometer nem garantir que hackers, cibercriminosos ou outros terceiros não autorizados não possam violar nossa segurança e coletar, acessar, roubar ou modificar indevidamente suas informações.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Quais são seus direitos?
                </h4>
                <p>
                  De acordo com sua localização geográfica, a legislação aplicável em matéria de privacidade pode conferir a você determinados direitos sobre suas informações pessoais.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Como você exerce seus direitos?
                </h4>
                <p>
                  A forma mais simples de exercer seus direitos é excluir sua conta no aplicativo (veja a Seção 13) ou entrar em contato conosco. 
                  <strong>
                    A exclusão de conta e dados está disponível.
                  </strong>{" "}
                  Examinaremos e atenderemos qualquer solicitação conforme às leis aplicáveis de proteção de dados.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Google Play Data Safety Summary */}
        <Card className="mb-8" id="data-safety-summary">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Resumo de Segurança de Dados do Google Play
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Este resumo coincide com nossa declaração de segurança de dados do Google Play para <strong>Hymnes et Louanges Adventiste</strong>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-600 text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">
                      Tipo de dados
                    </th>
                    <th className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Coletado
                    </th>
                    <th className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Compartilhado
                    </th>
                    <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">
                      Finalidade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      E-mail
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sim
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Não
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Gerenciamento de conta, Análise
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Nome
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sim
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Não
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Gerenciamento de conta, Análise
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Identificadores de usuário
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sim
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Não
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Gerenciamento de conta, Análise
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Interações no aplicativo
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sim
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Não
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Análise
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Outro conteúdo gerado pelo usuário (texto de comentários)
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sim
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Não
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Funcionalidade do aplicativo
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Registros de falhas
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sim
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Não
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Relatórios de falhas / Diagnósticos
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Diagnósticos
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sim
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Não
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Análise, Relatórios de falhas
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Identificadores do dispositivo ou outros
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                      Sim
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                      Não
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-2">
                      Análise, Funcionalidade (notificações push)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Criptografia em trânsito:</strong> Sim: todos os dados enviados fora do dispositivo utilizam HTTPS/TLS.
              </li>
              <li>
                <strong>Exclusão de dados disponível:</strong> Sim: você pode excluir sua conta no aplicativo (veja a Seção 13).
              </li>
              <li>
                <strong>Dados vendidos:</strong> Não: não vendemos suas informações pessoais.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Purchases, Tips and Donations */}
        <Card className="mb-8" id="purchases-and-donations">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Compras, Gorjetas e Doações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              <strong>Em resumo:</strong> O aplicativo é gratuito. Se você optar por deixar uma gorjeta voluntária, o pagamento é processado pela Apple ou pelo Google — nunca recebemos os dados do seu cartão.
            </p>
            <p>O Hymnes et Louanges Adventiste inclui uma «caixinha de gorjetas» opcional que permite apoiar o desenvolvimento. A gorjeta é totalmente voluntária e não desbloqueia nenhum recurso. Todas as cobranças são feitas pela App Store (Apple) ou pelo Google Play (Google) na sua conta da loja, conforme os termos e políticas de privacidade deles.</p>
            <p>Utilizamos a RevenueCat, Inc. como prestadora de serviços para gerenciar e validar as compras no aplicativo. Para isso, as seguintes informações relacionadas à compra são processadas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Um identificador de usuário pseudonímico do aplicativo (e, se você estiver conectado, o identificador da sua conta) para associar a compra à sua instalação</li>
              <li>Identificadores de transação da loja, identificador do produto e marcações de data/hora de compra, renovação ou reembolso</li>
              <li>Valor da compra, moeda e país da loja</li>
              <li>Plataforma do dispositivo, versão do aplicativo e país/região inferidos da loja</li>
            </ul>
            <p>Não recebemos nem armazenamos o número do seu cartão de crédito ou débito, dados bancários, CVV ou endereço de cobrança. Esses dados são tratados exclusivamente pela Apple ou pelo Google.</p>
            <p>Usamos essas informações apenas para validar e registrar contribuições, prestar suporte ao cliente, prevenir fraudes e abusos e cumprir nossas obrigações contábeis e fiscais. Quando o GDPR se aplica, nossas bases legais são a execução de contrato e o cumprimento de obrigação legal. Os registros de compra não são usados para publicidade nem vendidos.</p>
            <p>Os registros de transações são mantidos pelo tempo exigido pela legislação contábil e fiscal aplicável, o que pode exceder os prazos descritos em outras seções deste aviso e persistir após a exclusão da sua conta. Consulte as políticas de privacidade da Apple, do Google e da RevenueCat sobre o tratamento de dados de pagamento como controladores independentes.</p>
            <p>
              Para os termos aplicáveis a gorjetas e doações, incluindo reembolsos, consulte nossos{" "}
              <a
                href="/hymnes-app/terms-of-service"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Termos de Serviço
              </a>
              .
            </p>
          </CardContent>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
              Índice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700 dark:text-slate-300">
              <li>Quais informações coletamos?</li>
              <li>Como tratamos suas informações?</li>
              <li>
                Em quais bases legais nos apoiamos para tratar suas informações pessoais?
              </li>
              <li>
                Quando e com quem compartilhamos suas informações pessoais?
              </li>
              <li>Por quanto tempo conservamos suas informações?</li>
              <li>Como protegemos suas informações?</li>
              <li>Quais são seus direitos de privacidade?</li>
              <li>Controles de recursos Do Not Track</li>
              <li>
                Os residentes dos Estados Unidos têm direitos de privacidade específicos?
              </li>
              <li>
                Outras regiões têm direitos de privacidade específicos?
              </li>
              <li>Atualizamos este aviso?</li>
              <li>Como você pode entrar em contato conosco sobre este aviso?</li>
              <li>Excluir sua conta</li>
              <li>
                Como você pode consultar, atualizar ou excluir os dados que coletamos sobre você?
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
                1. Quais informações coletamos?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Informações pessoais que você nos fornece
                </h4>
                <p className="mb-2">
                  <strong>Em resumo:</strong> Coletamos os tipos de dados
                  indicados em nosso Resumo de Segurança de Dados do Google Play. Não
                  vendemos nem compartilhamos suas informações pessoais com
                  terceiros.
                </p>
                <p>
                  Coletamos informações pessoais quando você cria uma conta (e-mail e senha), faz login com Google ou Apple, atualiza seu perfil, envia comentários ou utiliza o aplicativo.
                </p>
                <p className="mt-2">
                  <strong>Informações pessoais — e-mail, nome, identificadores de usuário:</strong> coletados para gerenciamento de conta e análise quando você tem uma conta ou utiliza o login.
                </p>
                <p className="mt-2">
                  <strong>Interações no aplicativo:</strong> hinos consultados, áudio reproduzido, favoritos, navegação e eventos de uso relacionados, para análise, inclusive antes de fazer login.
                </p>
                <p className="mt-2">
                  <strong>Outro conteúdo gerado pelo usuário:</strong>{" "}
                  texto de comentários enviado em Configurações, para a funcionalidade do aplicativo e assistência.
                </p>
                <p className="mt-2">
                  <strong>Registros de falhas e diagnósticos:</strong>{" "}
                  relatórios de erro, versão do dispositivo/sistema/aplicativo e dados de estabilidade, para relatórios de falhas e análise.
                </p>
                <p className="mt-2">
                  <strong>Identificadores do dispositivo ou outros:</strong>{" "}
                  identificadores de análise e notificações push, para análise e funcionalidade (push).
                </p>
                <p className="mt-2">
                  <strong>Localização opcional (somente no dispositivo):</strong>{" "}
                  se você ativar os lembretes do pôr do sol de sábado, o aplicativo pode usar o GPS para calcular os horários locais de pôr do sol. Essas coordenadas são armazenadas somente no seu dispositivo e não são transmitidas aos nossos servidores.
                </p>
                <p className="mt-2">
                  <strong>Informações sensíveis.</strong> Não tratamos informações sensíveis.
                </p>
                <p className="mt-2">
                  Todas as informações pessoais que você nos fornecer devem ser verdadeiras, completas e exatas, e você deve nos notificar sobre qualquer alteração nessas informações.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                2. Como tratamos suas informações?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Em resumo:</strong> Tratamos suas informações para prestar, melhorar e administrar nossos Serviços, nos comunicarmos com você, garantir a segurança e prevenir fraudes, e cumprir a lei. Também podemos tratar suas informações para outras finalidades com seu consentimento.
              </p>
              <p>
                Tratamos suas informações pessoais por diversos motivos, conforme você interage com nossos Serviços, entre eles:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Gerenciamento de conta</strong> — criar e gerenciar sua conta, sincronizar favoritos e enviar notificações push.
                </li>
                <li>
                  <strong>Análise</strong> — compreender o uso do aplicativo e melhorar recursos (e-mail, nome, identificadores de usuário, interações, diagnósticos, identificadores do dispositivo).
                </li>
                <li>
                  <strong>Funcionalidade do aplicativo</strong> — processar os comentários que você envia e operar os recursos principais (incluindo push por meio de identificadores do dispositivo).
                </li>
                <li>
                  <strong>Relatórios de falhas / diagnósticos</strong> — detectar, diagnosticar e corrigir falhas e problemas de estabilidade.
                </li>
                <li>
                  <strong>Para segurança, prevenção de fraudes e cumprimento</strong> das leis aplicáveis.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                3. Em quais bases legais nos apoiamos para tratar suas informações?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Em resumo:</strong> Só tratamos suas informações pessoais quando consideramos necessário e dispomos de um motivo legal válido (ou seja, uma base legal) para fazê-lo conforme a lei aplicável, como com seu consentimento, para cumprir as leis, prestar serviços a você ou cumprir nossas obrigações contratuais, proteger seus direitos ou atender nossos interesses comerciais legítimos.
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Se você está na UE ou no Reino Unido, esta seção se aplica a você.
                </h4>
                <p>
                  O Regulamento Geral sobre a Proteção de Dados (RGPD) e o RGPD do Reino Unido exigem que expliquemos as bases legais válidas em que nos apoiamos para tratar suas informações pessoais. Portanto, podemos nos apoiar nas seguintes bases legais:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong>Consentimento.</strong> Podemos tratar suas informações se você nos deu permissão (ou seja, consentimento) para utilizar suas informações pessoais para finalidades específicas. Você pode retirar seu consentimento a qualquer momento.
                  </li>
                  <li>
                    <strong>Obrigações legais.</strong> Podemos tratar suas informações quando considerarmos necessário cumprir nossas obrigações legais, como cooperar com órgãos de aplicação da lei ou agências reguladoras, exercer ou defender nossos direitos legais, ou divulgar suas informações como prova em um litígio em que estejamos envolvidos.
                  </li>
                  <li>
                    <strong>Interesses vitais.</strong> Podemos tratar suas informações quando considerarmos necessário proteger seus interesses vitais ou os de terceiros, como em situações que envolvam ameaças potenciais à segurança de qualquer pessoa.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Se você está no Canadá, esta seção se aplica a você.
                </h4>
                <p>
                  Podemos tratar suas informações se você nos deu permissão específica (consentimento expresso) para utilizar suas informações pessoais para finalidades específicas, ou em situações em que sua permissão pode ser inferida (consentimento implícito). Você pode retirar seu consentimento a qualquer momento.
                </p>
                <p className="mt-2">
                  Em certos casos excepcionais, a lei aplicável pode nos permitir tratar suas informações sem seu consentimento, por exemplo:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                  <li>
                    Se a coleta é claramente no interesse de um indivíduo e o consentimento não pode ser obtido a tempo
                  </li>
                  <li>
                    Para investigações e detecção e prevenção de fraudes
                  </li>
                  <li>
                    Para transações comerciais, desde que certas condições sejam cumpridas
                  </li>
                  <li>
                    Se estiver contida em uma declaração de testemunha e a coleta for necessária para avaliar, processar ou resolver uma reclamação de seguro
                  </li>
                  <li>
                    Para identificar pessoas feridas, doentes ou falecidas e comunicar-se com familiares
                  </li>
                  <li>
                    Se temos motivos razoáveis para acreditar que uma pessoa foi, é ou pode ser vítima de abuso financeiro
                  </li>
                  <li>
                    Se é razoável esperar que a coleta e o uso com consentimento comprometeriam a disponibilidade ou exatidão das informações e a coleta é razoável para investigar uma violação de acordo ou contravenção das leis do Canadá ou de uma província
                  </li>
                  <li>
                    Se a divulgação for necessária para cumprir uma intimação, ordem judicial ou regras do tribunal relativas à produção de registros
                  </li>
                  <li>
                    Se foi produzida por um indivíduo no curso de seu emprego, negócio ou profissão e a coleta é coerente com as finalidades para as quais a informação foi produzida
                  </li>
                  <li>
                    Se a coleta é exclusivamente para fins jornalísticos, artísticos ou literários
                  </li>
                  <li>
                    Se a informação é de acesso público e está especificada pela regulamentação
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                4. Quando e com quem compartilhamos suas informações pessoais?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Em resumo:</strong> Não vendemos nem compartilhamos suas informações pessoais com terceiros.
              </p>
              <p>
                Os tipos de dados do nosso Resumo de Segurança de Dados do Google Play são coletados por nós e utilizados exclusivamente para as finalidades descritas neste aviso. Não vendemos suas informações pessoais nem as compartilhamos com terceiros para suas próprias finalidades.
              </p>
              <p>
                Podemos transferir informações exclusivamente no contexto de uma transação comercial (fusão ou aquisição), quando a lei exigir ou com seu consentimento.
              </p>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                5. Por quanto tempo conservamos suas informações?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Em resumo:</strong> Conservamos suas informações pelo tempo necessário para cumprir as finalidades descritas neste Aviso de Privacidade, salvo se a lei exigir o contrário.
              </p>
              <p>
                Só conservaremos suas informações pessoais pelo tempo necessário para as finalidades descritas neste Aviso de Privacidade, salvo se a lei exigir ou permitir um período de retenção mais longo (como requisitos fiscais, contábeis ou outros legais).
              </p>
              <p>
                Quando não tivermos mais uma necessidade comercial legítima de tratar suas informações pessoais, as excluiremos ou anonimizaremos; se não for possível (por exemplo, porque foram armazenadas em backups), as armazenaremos de forma segura e isoladas de qualquer tratamento posterior até que possam ser excluídas.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Dados de conta e perfil:</strong> excluídos quando você exclui sua conta por meio do fluxo integrado descrito abaixo.
                </li>
                <li>
                  <strong>Favoritos na nuvem e histórico de hinos:</strong>{" "}
                  excluídos ao excluir a conta; cópias residuais em backups podem persistir por um período limitado.
                </li>
                <li>
                  <strong>Análise e relatórios de falhas:</strong> podem ser conservados conforme nossas políticas de retenção, geralmente até 90 dias.
                </li>
                <li>
                  <strong>Comentários já enviados:</strong> podem ser conservados para fins de assistência e qualidade.
                </li>
                <li>
                  <strong>Cache local e histórico de busca no dispositivo:</strong> podem ser apagados em Configurações → Armazenamento sem excluir sua conta.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                6. Como protegemos suas informações?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Em resumo:</strong> Procuramos proteger suas informações pessoais por meio de um sistema de medidas de segurança organizacionais e técnicas.
              </p>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais apropriadas e razoáveis projetadas para proteger a segurança de quaisquer informações pessoais que tratamos.                 Os dados em trânsito são criptografados por meio de HTTPS/TLS. No entanto, apesar de nossas garantias e esforços para proteger suas informações, nenhuma transmissão eletrônica pela Internet nem tecnologia de armazenamento pode ser garantida como 100% segura; portanto, não podemos prometer nem garantir que hackers, cibercriminosos ou outros terceiros não autorizados não possam violar nossa segurança e coletar, acessar, roubar ou modificar indevidamente suas informações. Embora façamos o possível para proteger suas informações pessoais, a transmissão de informações pessoais de e para nossos Serviços é por sua conta e risco. Você deve acessar os Serviços somente em um ambiente seguro.
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                7. Quais são seus direitos de privacidade?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Em resumo:</strong> De acordo com seu estado ou região de residência nos EUA ou em determinadas regiões, como o Espaço Econômico Europeu (EEE), Reino Unido, Suíça e Canadá, você tem direitos que permitem maior acesso e controle sobre suas informações pessoais. Você pode consultar, modificar ou cancelar sua conta a qualquer momento, conforme seu país, província ou estado de residência.
              </p>
              <p>
                Em determinadas regiões (como o EEE, Reino Unido, Suíça e Canadá), você tem certos direitos conforme às leis aplicáveis de proteção de dados. Estes podem incluir o direito (i) de solicitar acesso e obter uma cópia de suas informações pessoais, (ii) de solicitar retificação ou exclusão; (iii) de restringir o tratamento de suas informações pessoais; (iv) quando aplicável, à portabilidade de dados; e (v) de não ser objeto de decisões automatizadas. Em certas circunstâncias, você também pode ter direito de se opor ao tratamento de suas informações pessoais. Você pode fazer tal solicitação entrando em contato conosco por meio dos dados de contato da seção "COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?" abaixo.
              </p>
              <p>
                Examinaremos e atenderemos qualquer solicitação conforme às leis aplicáveis de proteção de dados.
              </p>
              <p>
                Se você está no EEE ou no Reino Unido e acredita que tratamos ilegalmente suas informações pessoais, você também tem direito de apresentar uma reclamação perante a autoridade de proteção de dados do seu Estado membro ou a autoridade do Reino Unido.
              </p>
              <p>
                Se você está na Suíça, pode contatar o Comissário Federal de Proteção de Dados e Informação.
              </p>
              <p>
                <strong>Retirar seu consentimento:</strong> Se nos baseamos em seu consentimento para tratar suas informações pessoais, que pode ser expresso e/ou implícito conforme a lei aplicável, você tem direito de retirar seu consentimento a qualquer momento. Você pode retirá-lo entrando em contato conosco por meio dos dados da seção "COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?" abaixo.
              </p>
              <p>
                No entanto, observe que isso não afetará a licitude do tratamento anterior à sua retirada nem, quando a lei permitir, o tratamento de suas informações pessoais com base em motivos legais distintos do consentimento.
              </p>
              <p>
                Se você tiver dúvidas ou comentários sobre seus direitos de privacidade, pode nos enviar um e-mail para{" "}
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
                8. Controles de recursos Do Not Track
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                A maioria dos navegadores web e alguns sistemas operacionais móveis e aplicativos inclui um recurso ou configuração Do Not Track ("DNT") que você pode ativar para indicar sua preferência de privacidade de não ter dados sobre suas atividades de navegação online monitoradas e coletadas. Neste momento, não foi finalizado um padrão tecnológico uniforme para reconhecer e implementar sinais DNT. Portanto, atualmente não respondemos a sinais DNT do navegador nem a qualquer outro mecanismo que comunique automaticamente sua escolha de não ser rastreado online. Se for adotado um padrão de rastreamento online que devamos seguir no futuro, informaremos você em uma versão revisada deste Aviso de Privacidade.
              </p>
              <p>
                A lei da Califórnia exige que informemos como respondemos aos sinais DNT dos navegadores web. Como atualmente não existe um padrão industrial ou legal para reconhecer ou honrar os sinais DNT, não respondemos a eles neste momento.
              </p>
            </CardContent>
          </Card>

          {/* Section 9 - US Residents */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                9. Os residentes dos Estados Unidos têm direitos de privacidade específicos?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Em resumo:</strong> Se você é residente da Califórnia, Colorado, Connecticut, Delaware, Flórida, Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah ou Virgínia, pode ter direito de solicitar acesso e receber detalhes sobre as informações pessoais que conservamos sobre você e como as tratamos, corrigir imprecisões, obter uma cópia ou excluir suas informações pessoais. Você também pode ter direito de retirar seu consentimento ao nosso tratamento de suas informações pessoais. Esses direitos podem ser limitados em certas circunstâncias pela lei aplicável.
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Categorias de informações pessoais que coletamos
                </h4>
                <p className="mb-4">
                  Coletamos as seguintes categorias de informações pessoais nos últimos doze (12) meses:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">
                          Categoria
                        </th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-left">
                          Exemplos
                        </th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 text-center">
                          Coletado
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          A. Identificadores
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Dados de contato, como nome real, alias, endereço postal, número de telefone ou celular, identificador pessoal único, identificador online, endereço de protocolo de Internet, e-mail e nome da conta
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                          SIM
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          B. Informações pessoais conforme a lei de registros de clientes da Califórnia
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Nome, dados de contato, educação, emprego, histórico profissional e informações financeiras
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                          SIM
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          C. Características de classificação protegidas por lei estadual ou federal
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Sexo, idade, data de nascimento, raça e etnia, origem nacional, estado civil e outros dados demográficos
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NÃO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          D. Informações comerciais
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Informações de transações, histórico de compras, detalhes financeiros e informações de pagamento
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NÃO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          E. Informações biométricas
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Impressões digitais e de voz
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NÃO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          F. Atividade na Internet ou outra rede similar
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Histórico de navegação, histórico de busca, comportamento online, dados de interesses e interações com nossos e outros sites, aplicativos, sistemas e anúncios
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-green-600">
                          SIM
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          G. Dados de geolocalização
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Localização do dispositivo
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NÃO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          H. Informações de áudio, eletrônica, sensorial ou similar
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Imagens e áudio, gravações de vídeo ou chamadas criadas em relação às nossas atividades comerciais
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NÃO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          I. Informações profissionais ou relacionadas ao emprego
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Dados de contato comercial para prestar nossos Serviços em nível empresarial ou cargo, histórico profissional e qualificações profissionais se você solicitar emprego conosco
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NÃO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          J. Informações educacionais
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Registros estudantis e informações de diretório
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NÃO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          K. Inferências derivadas das informações pessoais coletadas
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          Inferências derivadas de quaisquer informações pessoais coletadas indicadas acima para criar um perfil ou resumo sobre, por exemplo, as preferências e características de uma pessoa
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NÃO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          L. Informações pessoais sensíveis
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2">
                          -
                        </td>
                        <td className="border border-slate-300 dark:border-slate-600 p-2 text-center font-bold text-red-600">
                          NÃO
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                Também podemos coletar outras informações pessoais fora dessas categorias quando você interage conosco pessoalmente, online, por telefone ou e-mail no contexto de:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Receber ajuda por meio de nossos canais de atendimento ao cliente;
                </li>
                <li>Participação em pesquisas ou concursos para clientes; e</li>
                <li>
                  Facilitar a prestação de nossos Serviços e responder às suas solicitações.
                </li>
              </ul>

              <p>
                Utilizaremos e conservaremos as informações pessoais coletadas conforme necessário para prestar os Serviços ou para:
              </p>
              <p>
                <strong>
                  Categorias A e B — Enquanto o usuário tiver uma conta, ou conforme as políticas de retenção dos provedores de análise/falhas. Categoria F — Conforme a configuração de retenção do PostHog.
                </strong>
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Seus direitos
                </h4>
                <p>
                  Você tem direitos conforme certas leis de proteção de dados dos estados dos EUA. No entanto, esses direitos não são absolutos e, em alguns casos, podemos recusar sua solicitação conforme permitido pela lei. Esses direitos incluem:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>
                    Direito de saber se tratamos ou não seus dados pessoais
                  </li>
                  <li>Direito de acesso aos seus dados pessoais</li>
                  <li>
                    Direito de corrigir imprecisões em seus dados pessoais
                  </li>
                  <li>
                    Direito de solicitar a exclusão de seus dados pessoais
                  </li>
                  <li>
                    Direito de obter uma cópia dos dados pessoais que você compartilhou previamente conosco
                  </li>
                  <li>
                    Direito de não ser discriminado por exercer seus direitos
                  </li>
                  <li>
                    Direito de optar por não participar do tratamento de seus dados pessoais se forem utilizados para publicidade direcionada (ou compartilhamento conforme a lei de privacidade da Califórnia), venda de dados pessoais ou elaboração de perfis com efeitos legais ou similares significativos ("perfilamento")
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Como exercer seus direitos
                </h4>
                <p>
                  Para exercer esses direitos, você pode entrar em contato conosco enviando uma solicitação de acesso a dados, escrevendo para{" "}
                  <a
                    href="mailto:joemdjossou@outlook.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    joemdjossou@outlook.com
                  </a>
                  , ou consultando os dados de contato ao final deste documento.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 10 - Other Regions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                10. Outras regiões têm direitos de privacidade específicos?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Em resumo:</strong> Você pode ter direitos adicionais conforme o país em que reside.
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Austrália e Nova Zelândia
                </h4>
                <p>
                  Coletamos e tratamos suas informações pessoais conforme às obrigações e condições estabelecidas pela Privacy Act 1988 da Austrália e pela Privacy Act 2020 da Nova Zelândia.
                </p>
                <p>
                  Este Aviso de Privacidade cumpre os requisitos de notificação definidos em ambas as leis de privacidade, em particular: quais informações pessoais coletamos de você, de quais fontes, com quais finalidades e outros destinatários de suas informações pessoais.
                </p>
                <p>
                  Se você não deseja fornecer as informações pessoais necessárias para cumprir sua finalidade aplicável, isso pode afetar nossa capacidade de prestar nossos serviços, em particular:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>oferecer os produtos ou serviços que você deseja</li>
                  <li>responder ou ajudá-lo com suas solicitações</li>
                </ul>
                <p className="mt-2">
                  A qualquer momento, você tem direito de solicitar acesso ou correção de suas informações pessoais. Você pode fazê-lo entrando em contato conosco por meio dos dados da seção "COMO VOCÊ PODE CONSULTAR, ATUALIZAR OU EXCLUIR OS DADOS QUE COLETAMOS SOBRE VOCÊ?"
                </p>
                <p className="mt-2">
                  Se você acredita que tratamos ilegalmente suas informações pessoais, você tem direito de apresentar uma reclamação por descumprimento dos Princípios de Privacidade australianos perante o Escritório do Comissário Australiano de Informação e por descumprimento dos Princípios de Privacidade da Nova Zelândia perante o Escritório do Comissário de Privacidade da Nova Zelândia.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  República da África do Sul
                </h4>
                <p>
                  A qualquer momento, você tem direito de solicitar acesso ou correção de suas informações pessoais. Você pode fazê-lo entrando em contato conosco por meio dos dados da seção "COMO VOCÊ PODE CONSULTAR, ATUALIZAR OU EXCLUIR OS DADOS QUE COLETAMOS SOBRE VOCÊ?"
                </p>
                <p className="mt-2">
                  Se você não está satisfeito com a forma como abordamos qualquer reclamação sobre nosso tratamento de informações pessoais, pode contatar o escritório do regulador, cujos dados são:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-2">
                  <p className="font-semibold">
                    O Regulador de Informação (África do Sul)
                  </p>
                  <p>Consultas gerais: enquiries@inforegulator.org.za</p>
                  <p>
                    Reclamações (formulário POPIA/PAIA 5 completo):
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
                11. Atualizamos este aviso?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Em resumo:</strong> Sim, atualizaremos este aviso conforme necessário para manter a conformidade com as leis pertinentes.
              </p>
              <p>
                Podemos atualizar este Aviso de Privacidade periodicamente. A versão atualizada será indicada com uma data "Revisada" atualizada na parte superior deste Aviso. Se realizarmos alterações materiais, podemos notificá-lo por meio de um aviso destacado dessas alterações ou enviando uma notificação direta. Recomendamos revisar este Aviso com frequência para estar informado sobre como protegemos suas informações.
              </p>
            </CardContent>
          </Card>

          {/* Section 12 - Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                12. Como você pode entrar em contato conosco sobre este aviso?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Se você tiver dúvidas ou comentários sobre este aviso, pode nos enviar um e-mail para{" "}
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  joemdjossou@outlook.com
                </a>{" "}
                ou entrar em contato conosco por correio em:
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

          {/* Section 13 - Delete Account */}
          <Card id="delete-account">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                13. Excluir sua conta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong>Em resumo:</strong> Você pode excluir sua conta diretamente no aplicativo. Esta página documenta as etapas exigidas pelo Google Play e outras lojas.
              </p>
              <p>
                Para excluir sua conta de <strong>Hymnes et Louanges Adventiste</strong> e os dados associados:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Abra <strong>Hymnes et Louanges Adventiste</strong>
                </li>
                <li>
                  Vá para <strong>Configurações</strong> (Settings)
                </li>
                <li>
                  Abra a seção <strong>Conta</strong>
                </li>
                <li>
                  Toque em <strong>Excluir conta</strong> / <strong>Delete Account</strong>
                </li>
                <li>Confirme na caixa de diálogo</li>
              </ol>
              <p>
                <strong>O que é excluído:</strong> sua conta de autenticação do Firebase, informações de perfil, favoritos sincronizados na nuvem e histórico de hinos vinculados à sua conta.
              </p>
              <p>
                <strong>O que pode ser conservado:</strong> eventos de análise e relatórios de falhas já coletados (geralmente até 90 dias conforme as políticas de retenção); comentários enviados anteriormente; e cópias residuais em backups por um período limitado. Os dados locais exclusivamente (hinos em cache, histórico de busca no dispositivo, coordenadas opcionais de lembretes de sábado) podem ser apagados separadamente em <strong>Configurações → Armazenamento</strong> sem excluir sua conta.
              </p>
              <p>
                Não existe uma opção integrada para excluir apenas análise ou favoritos na nuvem sem excluir toda a conta. Você também pode entrar em contato conosco em{" "}
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  joemdjossou@outlook.com
                </a>{" "}
                para obter assistência.
              </p>
            </CardContent>
          </Card>

          {/* Section 14 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                14. Como você pode consultar, atualizar ou excluir os dados que coletamos sobre você?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                De acordo com as leis aplicáveis do seu país ou estado de residência nos EUA, você pode ter direito de solicitar acesso às informações pessoais que coletamos, detalhes sobre como as tratamos, corrigir imprecisões ou excluir suas informações pessoais. Você também pode ter direito de retirar seu consentimento ao nosso tratamento de suas informações pessoais. Esses direitos podem ser limitados em certas circunstâncias pela lei aplicável.
              </p>
              <p>
                A forma mais simples de excluir sua conta é seguir as etapas integradas na <strong>Seção 13 (Excluir sua conta)</strong> anterior. Para solicitar consulta, correção ou exclusão de outros dados, envie um e-mail para{" "}
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
        </div>

        {/* Contact Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-slate-100 text-center">
              Dúvidas sobre esta Política de Privacidade?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Se você tiver dúvidas sobre esta Política de Privacidade ou nossas práticas de dados, não hesite em entrar em contato conosco.
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <a
                  href="mailto:joemdjossou@outlook.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Entre em contato
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <Button variant="outline" onClick={scrollToTop}>
            Voltar ao topo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPT;
