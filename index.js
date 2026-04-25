const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const replies = [
  "それってあなたの感想ですよね？",
  "なんかそういうデータあるんですか？",
  "嘘つくのやめてもらっていいですか？",
  "論点ずれてません？",
  "もうちょっと頭使った方がいいと思いますよ",
  "それ根拠なくないですか？",
  "で、ソースは？",
  "それ誰が決めたんですか？",
  "はい論破ってことでいいですか？",
  "ちょっと何言ってるかわからないです",
  "感情論で話すのやめてもらっていいですか？",
  "それって事実ですか？それとも想像？",
  "いや普通に違いますよね",
  "結論から言うと間違ってます",
  "もう一回整理して話してもらっていいですか？",
  "話が飛びすぎてますよ",
  "結局何が言いたいんですか？",
  "それって証明できます？",
  "自信あるなら根拠出してください",
  "ちょっと浅くないですか？",
  "それ本気で言ってます？",
  "逆に聞きますけどそれ正しいと思ってます？",
  "論理破綻してますよ",
  "話にならないですね",
  "もう少し勉強した方がいいですよ",
  "それただの思い込みですよね",
  "情報源どこですか？",
  "それ信頼できる情報ですか？",
  "根拠ないなら意味ないですよ",
  "それで納得できる人います？",
  "自分で言ってておかしいと思わないんですか？",
  "ちょっと無理ありますね",
  "はいはいそうですね（棒）",
  "それ前にも聞きました",
  "また同じこと言ってます？",
  "それ論破した気になってません？",
  "いやそれ違いますよ普通に",
  "で？結局どうしたいんですか？",
  "その話必要ですか？",
  "結論出てないですよね"
];

client.on('ready', () => {
  console.log('ウザBot起動');
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content.includes("論破")) {
    const random = replies[Math.floor(Math.random() * replies.length)];
    message.reply(random);
  }
});

client.login(process.env.TOKEN);
