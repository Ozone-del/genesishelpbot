const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const EmbedColor = "#e3aacc";
const Prefix = "!";

module.exports = {
  name: "poll",
  description: "Creates A Poll",
  aliases: [""],
  usage: "Poll <Message>",
  run: async (client, message, args) => {
    try {
      const Embed = new MessageEmbed()
        .setColor(`${EmbedColor}`)
        .setTitle("Genesis Poll!")
         .setThumbnail("https://i.imgur.com/PhmYzxj.png")
        .setDescription(args.join("                                                                                                                                               "))
        .setFooter(`Poll created by: ${message.author.username}`)
        .setTimestamp();

      if (!args[1]) {
        message.channel.send(Embed);
      }

      let msgArgs = args.slice(0).join(" ");

      message.channel
        .send("**" + `---------------------------------------------` + "**")
        .then(messageReaction => {
          messageReaction.react("✅").then(() => messageReaction.react("❌"));
          message.delete({ timeout: 1000 });
        });
    } catch (error) {
      console.log(error);
      message.channel.send(`Error In Creating Poll Try Again Later!`);
    }
  }
};
//remember to end commands with ;
