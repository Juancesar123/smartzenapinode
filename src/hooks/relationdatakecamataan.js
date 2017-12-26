// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function relationdatakecamataan (hook) {
    hook.params.sequelize = {
      raw: false,
      include: [
        hook.app.services.datakota.Model,
        
      ]
    }; 
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
