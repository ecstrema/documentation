const docs = [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'platform',
      path: 'platform',
      routeBasePath: 'platform',
      sidebarPath: require.resolve('./sidebarPlatform.js'),
      lastVersion: 'current',
      includeCurrentVersion: true,
      versions: {
        current: {
          banner: 'none',
          label: '3.x.x',
        },
      },
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'js-sdk',
      path: 'js-sdk',
      routeBasePath: 'js-sdk',
      sidebarPath: require.resolve('./sidebarJsSdk.js'),
      lastVersion: 'current',
      includeCurrentVersion: true,
      versions: {
        current: {
          banner: 'none',
          label: '5.x.x',
        },
      },
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'tolgee-cli',
      path: 'tolgee-cli',
      routeBasePath: 'tolgee-cli',
      sidebarPath: require.resolve('./sidebarTolgeeCli.js'),
      lastVersion: 'current',
      versions: {
        current: {
          banner: 'none',
          label: '1.0',
        },
      },
    },
  ],
];

module.exports = { docs };
