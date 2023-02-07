module.exports = {
  name: "ban",
  aliases: ["aliase"],
  description: "Ban coomand",
  category: "Politics",
  guildOnly: true,
  memberpermissions:"VIEW_CHANNEL",
  adminPermOverride: true,
  cooldown: 2,
  args: args,
  usage: "<usage>",
  execute( args) {
    func();
  },
};