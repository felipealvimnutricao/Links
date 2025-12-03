/**
 * Banners Configuration
 * 
 * COMO USAR:
 * 1. Edite este arquivo para adicionar, remover ou modificar banners
 * 2. Cada banner precisa de: id, title, description, image, link
 * 3. As mudanças serão refletidas automaticamente no site
 * 
 * EXEMPLO DE NOVO BANNER:
 * {
 *   id: 'novo-banner',
 *   title: 'NOVO TÍTULO',
 *   description: 'Descrição do novo banner',
 *   image: '/images/hero-background.png',
 *   link: 'https://seu-link.com',
 * }
 */

export interface Banner {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const banners: Banner[] = [
  {
    id: 'agendamento',
    title: 'AGENDE AQUI',
    description: 'Clique aqui e agende a sua consulta',
    image: 'https://s3.alvimnutri.com.br/automacao/Banners%20Site%20nutri/1.jpg',
    link: 'https://planosalvim.vercel.app/', // ALTERE ESTE LINK
  },
  {
    id: 'metodo',
    title: 'MELHOR VERSÃO',
    description: 'Conheça o método e tenha resultados',
    image: 'https://s3.alvimnutri.com.br/automacao/Banners%20Site%20nutri/2.jpg',
    link: 'https://melhorversao.nutricionistafelipealvim.com.br/', // ALTERE ESTE LINK
  },
  {
    id: 'whatsapp',
    title: 'FALE COMIGO',
    description: 'Clique aqui e fale comigo no WhatsApp',
    image: 'https://s3.alvimnutri.com.br/automacao/Banners%20Site%20nutri/3.jpg',
    link: 'https://api.whatsapp.com/send?phone=5561992939930&text=Olá%20Nutri!%20Quero%20obter%20os%20meus%20resultados!', // ALTERE ESTE LINK
  },
  {
    id: 'automações',
    title: 'PERFIL DE AUTOMAÇOES',
    description: 'Conheça meu perfil de automações',
    image: 'https://s3.alvimnutri.com.br/automacao/Banners%20Site%20nutri/7.jpg',
    link: 'https://www.instagram.com/alvimautomacoes/', // ALTERE ESTE LINK
  },
  {
    id: 'ebook',
    title: 'EBOOK GRATIS',
    description: 'Clique aqui e garanta o seu Ebook grátis',
    image: 'https://s3.alvimnutri.com.br/automacao/Banners%20Site%20nutri/5.jpg',
    link: 'https://chat.alvimnutri.com.br/mais40', // ALTERE ESTE LINK
  },
   {
    id: 'cupons',
    title: 'CUPONS DE DESCONTO',
    description: 'Clique aqui e garanta o seu cupom de desconto',
    image: 'https://s3.alvimnutri.com.br/automacao/Banners%20Site%20nutri/4.jpg',
    link: 'https://web.nutricionistafelipealvim.com.br/', // ALTERE ESTE LINK
  },
];

/**
 * INFORMAÇÕES DE CONTATO
 * Edite para atualizar as redes sociais no header
 */
export const contactInfo = {
  instagram: 'https://instagram.com/nutricionistafelipealvim', // ALTERE ESTE LINK
  whatsapp: 'https://wa.me/5561992939930', // ALTERE ESTE LINK
  location: 'Brasília/DF',
};

/**
 * INFORMAÇÕES DA PÁGINA
 * Edite para personalizar textos do site
 */
export const siteInfo = {
  name: 'Felipe Alvim',
  title: 'Nutricionista',
  subtitle: 'Nutricionista especializado em emagrecimento e transformação corporal',
  heroTitle: 'Transforme sua vida',
  heroDescription: 'Clique no banner para ser redirecionado(a)',
  ctaTitle: 'Pronto para começar?',
  ctaDescription: 'Escolha uma das opções acima e comece sua jornada de transformação hoje mesmo.',
  footerText: 'Feito por Alvim Automações',
  footerSubtext: 'Transformando vidas através da nutrição',
};
