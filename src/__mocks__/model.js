'use strict';

export default {

  authenticate: (auth) => {

    console.log('mock authenticate');
    if ( (!!auth.username && !!auth.password) ) {
      return Promise.resolve({
        generateToken: () => {return 'token!';},
      });
    }
    else {
      return Promise.resolve(null);
    }
  },

};
