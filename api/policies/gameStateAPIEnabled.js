/**
 * gameStateAPIEnabled
 *
 * @module      :: Policy
 * @description :: Rejects applicable requests unless SAILS_USE_GAMESTATE_API env var = 'true'
 * Used to disable access to the in-progress GameState API endpoints in prod
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function (req, res, next) {

  if (process.env.SAILS_USE_GAMESTATE_API) {
    return next();
  }

  return res.badRequest({ message: 'GameState API is currently disabled. Reboot server with npm run start:server:gamestate to enable accessing this endpoint' });
};
