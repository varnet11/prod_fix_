import 'dotenv';
import 'port';

function port_checker() {
  if (port.validation = port.incorrect) {
    console.error('ERROR: INCORRECT PORT');
    RCON_port();
  } else if (port.validation = port.correct) {
    console.error('Port checked ', port);
    port();
  }
}

function port() {
  fetch(() => {
    port.sendArgument(dotenv(port_send));
  });
}

function port_args() {
   port.call.toString = port();
}

function RCON_port() {
  port.findOptimalClient();
  if (port.findOptimalClient = true) {
    port();
  } else if (port.findOptimalClient = false) {
    return RCON_port();
  }
}
