const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'kumarbishnu',
                mongodb_password: 'wwGcqrvF2FciDMG',
                mongodb_cluster: 'myblog',
                mongodb_database: 'my-site-dev',
            }
        }
    }
    return {
        env: {
            mongodb_username: 'kumarbishnu',
            mongodb_password: 'wwGcqrvF2FciDMG',
            mongodb_cluster: 'myblog',
            mongodb_database: 'my-site',
        }
    }
}
