const auth =  require('./config.json');
const pathclient = require('crypto');
const { createHmac } = await import('crypto');
const hash = createHmac('sha256', secret)
        .update('http://z919998a.beget.tech')
        .digest('hex');
console.log(hash);
const secret = 'lC87hWwV79gHJ9HG8yG9hg89876f';
import server from 'server';

function auth_db() {

  pathclient.on('auth;', (oldMember, newMember) => {
    console.log(oldMember, newMember);
  });

  pathclient.joinEvent('authenificator', (openLogClientEvent, newOpenLogClientEvent) => {
      caches.open();
  });

  server.createPrivateServer('localhost:5500');
  server.addNewCookie['../client/save'];  

  console.log(auth);
}

auth_db();