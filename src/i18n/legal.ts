import type { Locale } from './siteContent';

export type PrivacySection = { h: string; p: string };
export type PrivacyContent = {
  title: string;
  updated: string;
  intro: string;
  sections: PrivacySection[];
  backHome: string;
};

export const privacyRoute: Record<Locale, string> = {
  es: '/privacidad',
  en: '/en/privacy',
  pt: '/pt/privacidade',
  fr: '/fr/confidentialite',
};

export const privacyLabel: Record<Locale, string> = {
  es: 'Política de privacidad',
  en: 'Privacy policy',
  pt: 'Política de privacidade',
  fr: 'Politique de confidentialité',
};

const contactEmail = 'jmlagos2003@gmail.com';

export const privacy: Record<Locale, PrivacyContent> = {
  es: {
    title: 'Política de privacidad',
    updated: 'Última actualización: 31 de mayo de 2026',
    intro: `Esta Política de Privacidad describe cómo Efi Solution ("nosotros") trata los datos personales que nos proporcionas a través de este sitio. Responsable del tratamiento: Efi Solution. Contacto: ${contactEmail}.`,
    sections: [
      { h: 'Datos que recopilamos', p: 'Cuando usas el formulario de contacto recopilamos tu nombre, correo electrónico y el mensaje que nos envíes. Para medir el uso del sitio usamos Cloudflare Web Analytics, que genera estadísticas de forma anónima y sin cookies.' },
      { h: 'Finalidad y base legal', p: 'Usamos tus datos únicamente para responder a tu solicitud y darle seguimiento. La base legal es tu consentimiento, que otorgas al marcar la casilla y enviar el formulario.' },
      { h: 'Terceros que intervienen', p: 'El formulario se procesa mediante Web3Forms, que reenvía tu mensaje a nuestro correo. El sitio se aloja en Cloudflare. Estos proveedores tratan los datos solo para prestar su servicio.' },
      { h: 'Conservación', p: 'Conservamos los mensajes el tiempo necesario para atender tu solicitud y la relación comercial que pueda derivarse.' },
      { h: 'Tus derechos', p: `Puedes acceder, rectificar, actualizar o eliminar tus datos y retirar tu consentimiento escribiendo a ${contactEmail}. En Colombia ejerces estos derechos conforme a la Ley 1581 de 2012 (Habeas Data); si resides en la UE, conforme al RGPD.` },
      { h: 'Cookies', p: 'Este sitio no utiliza cookies de seguimiento ni de publicidad. La analítica de Cloudflare funciona sin cookies.' },
    ],
    backHome: 'Volver al inicio',
  },
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: May 31, 2026',
    intro: `This Privacy Policy explains how Efi Solution ("we") handles the personal data you provide through this site. Data controller: Efi Solution. Contact: ${contactEmail}.`,
    sections: [
      { h: 'Data we collect', p: 'When you use the contact form we collect your name, email address and the message you send. To measure site usage we use Cloudflare Web Analytics, which produces anonymous statistics without cookies.' },
      { h: 'Purpose and legal basis', p: 'We use your data only to reply to your request and follow up. The legal basis is your consent, given when you tick the box and submit the form.' },
      { h: 'Third parties involved', p: 'The form is processed through Web3Forms, which forwards your message to our inbox. The site is hosted on Cloudflare. These providers process the data only to deliver their service.' },
      { h: 'Retention', p: 'We keep messages for as long as needed to handle your request and any business relationship that may follow.' },
      { h: 'Your rights', p: `You can access, rectify, update or delete your data and withdraw your consent by writing to ${contactEmail}. If you reside in the EU these rights apply under the GDPR; in Colombia, under Law 1581 of 2012 (Habeas Data).` },
      { h: 'Cookies', p: 'This site uses no tracking or advertising cookies. Cloudflare analytics works without cookies.' },
    ],
    backHome: 'Back to home',
  },
  pt: {
    title: 'Política de privacidade',
    updated: 'Última atualização: 31 de maio de 2026',
    intro: `Esta Política de Privacidade descreve como a Efi Solution ("nós") trata os dados pessoais que você fornece por meio deste site. Responsável pelo tratamento: Efi Solution. Contato: ${contactEmail}.`,
    sections: [
      { h: 'Dados que coletamos', p: 'Quando você usa o formulário de contato coletamos seu nome, e-mail e a mensagem enviada. Para medir o uso do site usamos o Cloudflare Web Analytics, que gera estatísticas de forma anônima e sem cookies.' },
      { h: 'Finalidade e base legal', p: 'Usamos seus dados apenas para responder à sua solicitação e dar seguimento. A base legal é o seu consentimento, dado ao marcar a caixa e enviar o formulário.' },
      { h: 'Terceiros envolvidos', p: 'O formulário é processado pelo Web3Forms, que encaminha sua mensagem ao nosso e-mail. O site é hospedado na Cloudflare. Esses provedores tratam os dados apenas para prestar o serviço.' },
      { h: 'Retenção', p: 'Guardamos as mensagens pelo tempo necessário para atender à sua solicitação e à eventual relação comercial.' },
      { h: 'Seus direitos', p: `Você pode acessar, retificar, atualizar ou excluir seus dados e retirar o consentimento escrevendo para ${contactEmail}. No Brasil esses direitos aplicam-se conforme a LGPD; na UE, conforme o RGPD.` },
      { h: 'Cookies', p: 'Este site não usa cookies de rastreamento ou publicidade. A analítica da Cloudflare funciona sem cookies.' },
    ],
    backHome: 'Voltar ao início',
  },
  fr: {
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : 31 mai 2026',
    intro: `Cette Politique de confidentialité explique comment Efi Solution (« nous ») traite les données personnelles que vous fournissez via ce site. Responsable du traitement : Efi Solution. Contact : ${contactEmail}.`,
    sections: [
      { h: 'Données que nous collectons', p: 'Lorsque vous utilisez le formulaire de contact, nous collectons votre nom, votre e-mail et votre message. Pour mesurer l’usage du site, nous utilisons Cloudflare Web Analytics, qui produit des statistiques anonymes sans cookies.' },
      { h: 'Finalité et base légale', p: 'Nous utilisons vos données uniquement pour répondre à votre demande et en assurer le suivi. La base légale est votre consentement, donné en cochant la case et en envoyant le formulaire.' },
      { h: 'Tiers impliqués', p: 'Le formulaire est traité via Web3Forms, qui transmet votre message à notre boîte mail. Le site est hébergé sur Cloudflare. Ces prestataires ne traitent les données que pour fournir leur service.' },
      { h: 'Conservation', p: 'Nous conservons les messages le temps nécessaire pour traiter votre demande et la relation commerciale éventuelle.' },
      { h: 'Vos droits', p: `Vous pouvez accéder à vos données, les rectifier, les mettre à jour ou les supprimer, et retirer votre consentement en écrivant à ${contactEmail}. Si vous résidez dans l’UE, ces droits s’appliquent selon le RGPD.` },
      { h: 'Cookies', p: 'Ce site n’utilise aucun cookie de suivi ou de publicité. L’analytique de Cloudflare fonctionne sans cookies.' },
    ],
    backHome: 'Retour à l’accueil',
  },
};
