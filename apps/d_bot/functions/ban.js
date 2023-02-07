import 'discord.js';
import { discordSort } from 'discord.js';

input = "ban %USERNAME_BAN_USER% %BAN_TIME%";

discordSort.ban_user(USERNAME_BAN_USER, BAN_TIME);
module.exports = {
  MessageEvent(msg) {
    msg = "User " + USERNAME_BAN_USER + " Banned in " + BAN_TIME;
  }
};