const usersSeed = [
  { username: "LukeSkywalker", email: "luke@galaxy.com" },
  { username: "DarthVader", email: "darthvader@empire.net" },
  { username: "LeiaOrgana", email: "leiaorgana@resistance.org" },
  { username: "HanSolo", email: "hansolo@millenniumfalcon.com" },
  { username: "Chewbacca", email: "chewbacca@kashyyyk.com" },
  { username: "LandoCalrissian", email: "landocalrissian@cloudcity.com" },
  { username: "BobaFett", email: "bobafett@bountyhunter.com" },
  { username: "Yoda", email: "yoda@dagobah.net" },
  { username: "ObiWanKenobi", email: "obiwankenobi@jediorder.org" },
  { username: "MaceWindu", email: "macewindu@jediorder.org" },
  { username: "QuiGonJinn", email: "quigonjinn@jediorder.org" },
  { username: "PadmeAmidala", email: "padmeamidala@naboo.com" },
  { username: "R2D2", email: "r2d2@droids.com" },
  { username: "C3PO", email: "c3po@droids.com" },
  { username: "DarthMaul", email: "darthmaul@sith.com" },
  { username: "CountDooku", email: "countdooku@sith.com" },
  { username: "Grievous", email: "grievous@droidarmy.com" },
  { username: "AhsokaTano", email: "ahsokatano@tano.com" },
  { username: "AsajjVentress", email: "asajjventress@sith.com" },
  { username: "JabbaTheHutt", email: "jabbathehutt@tatooine.com" },
  { username: "KyloRen", email: "kyloren@firstorder.com" },
  { username: "Rey", email: "rey@nowhere.com" },
  { username: "Finn", email: "finn@firstorderdefector.com" },
  { username: "PoeDameron", email: "poedameron@resistance.org" },
  { username: "BB8", email: "bb8@resistance.org" },
  { username: "ShmiSkywalker", email: "shmi@galaxy.com" },
  { username: "JangoFett", email: "jangofett@bountyhunter.com" },
  { username: "AnakinSkywalker", email: "anakin@galaxy.com" },
  { username: "DarthSidious", email: "sidious@sith.com" },
  { username: "EmperorPalpatine", email: "palpatine@empire.com" },
];

const thoughtsSeed = [
  {
    thoughtText: "May the Force be with you.",
    createdAt: new Date(),
    username: "LukeSkywalker",
    reactions: [
      { reactionBody: "And with you!", username: "LeiaOrgana" },
      { reactionBody: "Always.", username: "ObiWanKenobi" },
    ],
  },
  {
    thoughtText: "I find your lack of faith disturbing.",
    createdAt: new Date(),
    username: "DarthVader",
    reactions: [
      { reactionBody: "Sorry, Lord Vader.", username: "KyloRen" },
      { reactionBody: "Indeed.", username: "EmperorPalpatine" },
    ],
  },
  {
    thoughtText: "Help me, Obi-Wan Kenobi. You’re my only hope.",
    createdAt: new Date(),
    username: "LeiaOrgana",
    reactions: [
      { reactionBody: "I am here, Leia.", username: "ObiWanKenobi" },
      { reactionBody: "We'll find him.", username: "LukeSkywalker" },
    ],
  },
  {
    thoughtText: "Never tell me the odds!",
    createdAt: new Date(),
    username: "HanSolo",
    reactions: [
      { reactionBody: "The odds are not in our favor.", username: "C3PO" },
      { reactionBody: "That's the spirit!", username: "LandoCalrissian" },
    ],
  },
  {
    thoughtText: "GGWWWRRRRWWWW.",
    createdAt: new Date(),
    username: "Chewbacca",
    reactions: [
      { reactionBody: "I know, buddy.", username: "HanSolo" },
      { reactionBody: "Well said.", username: "LeiaOrgana" },
    ],
  },
  {
    thoughtText: "Everything you’ve heard about me is true.",
    createdAt: new Date(),
    username: "LandoCalrissian",
    reactions: [
      { reactionBody: "Is it, though?", username: "HanSolo" },
      { reactionBody: "I can confirm.", username: "Chewbacca" },
    ],
  },
  {
    thoughtText: "He's no good to me dead.",
    createdAt: new Date(),
    username: "BobaFett",
    reactions: [
      { reactionBody: "Agreed.", username: "DarthVader" },
      { reactionBody: "Bring him alive.", username: "JabbaTheHutt" },
    ],
  },
  {
    thoughtText: "Do. Or do not. There is no try.",
    createdAt: new Date(),
    username: "Yoda",
    reactions: [
      { reactionBody: "Wise words.", username: "LukeSkywalker" },
      { reactionBody: "Always.", username: "ObiWanKenobi" },
    ],
  },
  {
    thoughtText: "The Force will be with you. Always.",
    createdAt: new Date(),
    username: "ObiWanKenobi",
    reactions: [
      { reactionBody: "Thank you, master.", username: "LukeSkywalker" },
      { reactionBody: "It better be.", username: "HanSolo" },
    ],
  },
  {
    thoughtText: "This party's over.",
    createdAt: new Date(),
    username: "MaceWindu",
    reactions: [
      { reactionBody: "Not yet.", username: "AnakinSkywalker" },
      { reactionBody: "As you wish.", username: "Yoda" },
    ],
  },
  {
    thoughtText: "Your focus determines your reality.",
    createdAt: new Date(),
    username: "QuiGonJinn",
    reactions: [
      { reactionBody: "I will remember that.", username: "ObiWanKenobi" },
      { reactionBody: "True, master.", username: "AnakinSkywalker" },
    ],
  },
  {
    thoughtText: "So this is how liberty dies...with thunderous applause.",
    createdAt: new Date(),
    username: "PadmeAmidala",
    reactions: [
      { reactionBody: "Heartbreaking.", username: "LeiaOrgana" },
      { reactionBody: "Indeed.", username: "BailOrgana" },
    ],
  },
  {
    thoughtText: "Beep beep boop.",
    createdAt: new Date(),
    username: "R2D2",
    reactions: [
      { reactionBody: "Right?", username: "BB8" },
      { reactionBody: "I agree.", username: "C3PO" },
    ],
  },
  {
    thoughtText: "Oh, my dear friend. How I've missed you.",
    createdAt: new Date(),
    username: "C3PO",
    reactions: [
      { reactionBody: "Same here.", username: "R2D2" },
      { reactionBody: "We've been through a lot.", username: "LeiaOrgana" },
    ],
  },
  {
    thoughtText: "At last, we will have revenge.",
    createdAt: new Date(),
    username: "DarthMaul",
    reactions: [
      { reactionBody: "For the Sith!", username: "DarthSidious" },
      { reactionBody: "Revenge is sweet.", username: "AsajjVentress" },
    ],
  },
  {
    thoughtText: "I've become more powerful than any Jedi.",
    createdAt: new Date(),
    username: "CountDooku",
    reactions: [
      { reactionBody: "Impressive.", username: "DarthSidious" },
      { reactionBody: "Not for long.", username: "AnakinSkywalker" },
    ],
  },
  {
    thoughtText: "Army or not, you must realize you are doomed.",
    createdAt: new Date(),
    username: "Grievous",
    reactions: [
      { reactionBody: "We'll see.", username: "ObiWanKenobi" },
      { reactionBody: "Prepare for battle.", username: "MaceWindu" },
    ],
  },
  {
    thoughtText: "I am no Jedi.",
    createdAt: new Date(),
    username: "AhsokaTano",
    reactions: [
      { reactionBody: "You are still strong.", username: "AnakinSkywalker" },
      { reactionBody: "The Force is with you.", username: "Yoda" },
    ],
  },
  {
    thoughtText: "I can sense your fear.",
    createdAt: new Date(),
    username: "AsajjVentress",
    reactions: [
      { reactionBody: "Fear leads to anger.", username: "Yoda" },
      { reactionBody: "I am not afraid.", username: "AnakinSkywalker" },
    ],
  },
  {
    thoughtText: "There will be no bargain, young Jedi.",
    createdAt: new Date(),
    username: "JabbaTheHutt",
    reactions: [
      { reactionBody: "We will see about that.", username: "LukeSkywalker" },
      { reactionBody: "It's a trap!", username: "AdmiralAckbar" },
    ],
  },
  {
    thoughtText: "I will finish what you started.",
    createdAt: new Date(),
    username: "KyloRen",
    reactions: [
      { reactionBody: "Good. Use your anger.", username: "Snoke" },
      { reactionBody: "You are my legacy.", username: "DarthVader" },
    ],
  },
  {
    thoughtText: "I need someone to show me my place in all this.",
    createdAt: new Date(),
    username: "Rey",
    reactions: [
      { reactionBody: "You will find your way.", username: "LukeSkywalker" },
      { reactionBody: "The Force will guide you.", username: "LeiaOrgana" },
    ],
  },
  {
    thoughtText: "I'm not Resistance. I'm not a hero. I'm a stormtrooper.",
    createdAt: new Date(),
    username: "Finn",
    reactions: [
      { reactionBody: "You are more than that.", username: "Rey" },
      { reactionBody: "A hero in disguise.", username: "PoeDameron" },
    ],
  },
  {
    thoughtText:
      "We are the spark, that will light the fire that'll burn the First Order down.",
    createdAt: new Date(),
    username: "PoeDameron",
    reactions: [
      { reactionBody: "For the Resistance!", username: "LeiaOrgana" },
      { reactionBody: "Let's do this.", username: "Finn" },
    ],
  },
  {
    thoughtText: "Beep-boop-beep.",
    createdAt: new Date(),
    username: "BB8",
    reactions: [
      { reactionBody: "Right on, buddy.", username: "PoeDameron" },
      { reactionBody: "Always helpful.", username: "Finn" },
    ],
  },
  {
    thoughtText:
      "The dark side of the Force is a pathway to many abilities some consider to be unnatural.",
    createdAt: new Date(),
    username: "KyloRen",
    reactions: [
      { reactionBody: "True power.", username: "Snoke" },
      { reactionBody: "Indeed.", username: "DarthSidious" },
    ],
  },
  {
    thoughtText: "In my experience, there is no such thing as luck.",
    createdAt: new Date(),
    username: "ObiWanKenobi",
    reactions: [
      { reactionBody: "Only the Force.", username: "QuiGonJinn" },
      { reactionBody: "Wise words.", username: "Yoda" },
    ],
  },
  {
    thoughtText:
      "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering.",
    createdAt: new Date(),
    username: "Yoda",
    reactions: [
      { reactionBody: "We must be cautious.", username: "ObiWanKenobi" },
      { reactionBody: "Indeed.", username: "MaceWindu" },
    ],
  },
  {
    thoughtText:
      "A Jedi uses the Force for knowledge and defense, never for attack.",
    createdAt: new Date(),
    username: "LukeSkywalker",
    reactions: [
      { reactionBody: "The Jedi way.", username: "ObiWanKenobi" },
      { reactionBody: "Well said.", username: "Yoda" },
    ],
  },
  {
    thoughtText:
      "You can’t stop the change, any more than you can stop the suns from setting.",
    createdAt: new Date(),
    username: "ShmiSkywalker",
    reactions: [
      { reactionBody: "So true.", username: "AnakinSkywalker" },
      { reactionBody: "The Force is eternal.", username: "QuiGonJinn" },
    ],
  },
  {
    thoughtText: "I’ve got a bad feeling about this.",
    createdAt: new Date(),
    username: "HanSolo",
    reactions: [
      { reactionBody: "When don't you?", username: "LeiaOrgana" },
      { reactionBody: "Always pessimistic.", username: "LukeSkywalker" },
    ],
  },
  {
    thoughtText: "I’m just a simple man trying to make my way in the universe.",
    createdAt: new Date(),
    username: "JangoFett",
    reactions: [
      { reactionBody: "Aren't we all?", username: "HanSolo" },
      { reactionBody: "Respect.", username: "BobaFett" },
    ],
  },
];

const friendsSeed = {
  LukeSkywalker: ["LeiaOrgana", "HanSolo", "Chewbacca", "ObiWanKenobi", "Yoda", "R2D2", "C3PO"],
  DarthVader: ["EmperorPalpatine", "BobaFett"],
  LeiaOrgana: ["LukeSkywalker", "HanSolo", "Chewbacca", "C3PO", "R2D2"],
  HanSolo: ["LeiaOrgana", "LukeSkywalker", "Chewbacca", "LandoCalrissian", "ObiWanKenobi"],
  Chewbacca: ["HanSolo", "LukeSkywalker", "LeiaOrgana", "C3PO", "R2D2"],
  LandoCalrissian: ["HanSolo", "LeiaOrgana", "Chewbacca"],
  BobaFett: ["DarthVader", "JabbaTheHutt"],
  Yoda: ["LukeSkywalker", "ObiWanKenobi", "MaceWindu", "QuiGonJinn"],
  ObiWanKenobi: ["LukeSkywalker", "Yoda", "QuiGonJinn", "AnakinSkywalker"],
  MaceWindu: ["Yoda", "ObiWanKenobi", "QuiGonJinn"],
  QuiGonJinn: ["ObiWanKenobi", "Yoda"],
  PadmeAmidala: ["AnakinSkywalker", "C3PO", "R2D2"],
  R2D2: ["C3PO", "LukeSkywalker", "LeiaOrgana", "HanSolo", "PadmeAmidala", "AnakinSkywalker"],
  C3PO: ["R2D2", "LukeSkywalker", "LeiaOrgana", "HanSolo", "PadmeAmidala"],
  DarthMaul: ["DarthSidious"],
  CountDooku: ["DarthSidious"],
  Grievous: [],
  AhsokaTano: ["AnakinSkywalker", "ObiWanKenobi"],
  AsajjVentress: [],
  JabbaTheHutt: ["BobaFett"],
  KyloRen: ["DarthSidious"],
  Rey: ["Finn", "PoeDameron", "BB8", "LeiaOrgana"],
  Finn: ["Rey", "PoeDameron", "BB8"],
  PoeDameron: ["Rey", "Finn", "BB8"],
  BB8: ["Rey", "Finn", "PoeDameron"],
  ShmiSkywalker: ["AnakinSkywalker"],
  JangoFett: ["BobaFett"],
  AnakinSkywalker: ["ObiWanKenobi", "PadmeAmidala", "AhsokaTano", "Yoda", "R2D2", "C3PO"],
  DarthSidious: ["DarthVader", "DarthMaul", "CountDooku", "KyloRen"],
  EmperorPalpatine: ["DarthVader", "DarthMaul", "CountDooku"]
};

module.exports = { usersSeed, thoughtsSeed, friendsSeed };

