/**
 * @typedef {Object} TSession
 * @property {string} id - User identification value.
 * @property {string} token - User token value.
 */

/**
 * @typedef {Object} IAuthState
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @property {boolean} isInitialized - Indicates if the authentication state is initialized.
 * @property {TSession|null} user - The user session object.
 */

/**
 * @typedef {Object} IAuthAction
 * @property {"INITIALIZE"|"LOGIN"|"LOGOUT"|null} type - The action type.
 * @property {any} [payload] - The action payload.
 */

/**
 * @typedef {Object} IAuthContextType
 * @property {IAuthState} state - The authentication state.
 * @property {function(IAuthAction):void} dispatch - The dispatch function for authentication actions.
 */

/**
 * @typedef {Object} IAuthProviderProps
 * @property {React.ReactNode} children - The child components.
 */

export const AuthContextInterface = {};