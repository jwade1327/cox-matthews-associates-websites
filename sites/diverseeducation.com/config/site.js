const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const gam = require('./gam');
const search = require('./search');

module.exports = {
  leaders,
  navigation,
  nativeX,
  identityX,
  gam,
  search,
  company: 'Cox Matthews and Associates, Inc',
  p1events: {
    tenant: 'diverse',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.diverseeducation.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.diverseeducation.com/files/base/diverse/all/image/static/de-logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/DiverseIssuesInHigherEducation/' },
    { provider: 'twitter', href: 'https://twitter.com/DiverseIssues' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/diverse-issues-in-higher-education/' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCXVYpTBoF5lP0FYAz2-ebcQ' },
    { provider: 'instagram', href: 'https://www.instagram.com/diverseissuesinhighereducation/' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-TSQTRVN',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  newsletters: {
    subscribeLink: '',
  },
  magazines: {
    description: '',
  },
};
