(function() {
  'use strict';

  angular
    .module('enriqueNpm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
