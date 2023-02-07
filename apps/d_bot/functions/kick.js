import 'discord.js';
import { discordSort } from 'discord.js';

input = "kick %USERNAME_KICK_USER%";

discordSort.kick_user(USERNAME_KICK_USER);
module.exports = {
  MessageEvent(msg) {
    msg = "User " + USERNAME_KICK_USER + " Kicked";
  }
};