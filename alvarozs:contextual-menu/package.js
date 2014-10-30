Package.describe({
  name: 'alvarozs:contextual-menu',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['templating', 'jquery'], 'client');

  api.addFiles(['alvarozs:contextual-menu.html', 'alvarozs:contextual-menu.js'], 'client');

  api.export('ContextualMenu');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('alvarozs:contextual-menu');

  api.addFiles('alvarozs:contextual-menu-tests.js');
});
