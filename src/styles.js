import thraex from "./images/gtypes/thraex.png";
import secutor from "./images/gtypes/secutor.png";
import retiarius from "./images/gtypes/retiarius.jpg";
import dimachaerus from "./images/gtypes/dimachaerus.jpg";
import hoplomachus from "./images/gtypes/hoplomachus.jpg";
import murmillo from "./images/gtypes/murmillo.jpg";
import gladriatrix from "./images/gtypes/gladriatrix.png";

let styles = [
  {
    name: "Thraex",
    info: "The Thraex fighting style was suited for men who had long and toned bodies, resembling the tall and slender Thracian warrior. They fight with a fast paced and agile style that well matches the slower but heavily armored Murmillo. The smaller parmula shield allows for the Thraex to move at a greater speed than an opponent carrying the larger scutum, while still remaining protected. The sica sword allows that hook onto an enemy's shield and pull it out of the way, to then thrust at their opponent's exposed body. The arm guard worn on the striking arm allows the Thraex to attack without worrying about losing that arm.",
    moreInfo:
      "The Thraex style was created as a rivaling opponent for the Murmillo style. Murmillos rely on Endurance while Thraex rely on Agility. According to Ancient Graffiti, the men who fought as Thraex were the most popular among the Woman spectators. Incidentally, the Male spectators favored Murmillo Gladiators further igniting the rivalry between the two.",
    traditionalOpponents: ["Murmillo", "Hoplomachus"],
    img: thraex,
  },
  {
    name: "Secutor",
    info: "Secutor (meaning follower) is a gladiator fighting style similar to the Murmillo, in that they were well-armored and based around the use of a sword and shield. The style originated around 50AD.",
    moreInfo:
      "The Secutor's 'heavy arms' style meant they would employ similar tactics to the Murmillo, pitting their heavy armor and weapons against more lightly attired and armed foes. The Secutor's unique fish-like helmet design were intended to defend against a Retiarius' weapons; the small eye holes protected against the prongs of a trident, while the smooth crest on top and 'fin' around the back of the neck prevented a net from easily snagging. These claustrophobic helmets limited visibility and had no breathing holes/vents, however, meaning that they needed to win the fight quickly to avoid passing out from fatigue or lack of breath.",
    traditionalOpponents: ["Retiarius", "Murmillo"],
    img: secutor,
  },
  {
    name: "Retiarius",
    info: "The retiarius (plural retiarii; literally, net-man or net-fighter in Latin) class of gladiator fought with weapons styled on the tools of a fisherman: a big, long, and thick trident, a weighted net.",
    moreInfo:
      "The Retiarii wielded a net (rete, after which the retiarius is named), which could be used to trap, trip, or disarm opponents, while the trident (fascina) they wielded would keep opponents at a distance. The retiarius would fight with little armor, usually only a subligaria (loincloth) and no helmet. He would rely on evasive tactics to stay out of range of the weapon of his opponent. The net was intended to compensate for his lack of armor, while the dagger (pugio) was used to finish off a defeated opponent, to cut the net if it become entangled on the retiarius, or as a last resort weapon should the trident be lost. Retiarii were viewed as some of the lowliest of the gladiators, as the lack of armor and the engulfing net were thought to give them a more effeminate appearance. They also tended to rely on evasive tactics, meaning they would avoid close hand-to-hand combat.",
    traditionalOpponents: ["Secutor", "Murmillo"],
    img: retiarius,
  },
  {
    name: "Dimachaerus",
    info: "The Dimachaerus (plural: Dimachaeri) was a type of Roman gladiator who dual wielded swords. This Latin name derives from the Greek word διμάχαιρος, meaning bearing two knives (di- dual + machairi- knife). The fighting style of the dimachaeri gladiator involved close combat using two swords, either curved scimitars or straight bladed short swords. Both swords were employed for attacking and defending, therefore it was generally understood that these gladiators would have been supremely skilled to wield two blades at once.",
    moreInfo:
      "Many of the most skilled and famed gladiators in the series fight in the Dimachaeri style. This is ironic as historically, the style of Dimachaerus was a less popular fighting style.",
    traditionalOpponents: ["Thraex", "Murmillo"],
    img: dimachaerus,
  },
  {
    name: "Hoplomachus",
    info: "Hoplomachus is a gladiator fighting style representing the Greek, Illyrian and Carthage enemies of Rome. The style was made to resemble a lightly armored spear fighter much like the Greek and Illyrian warriors, the Hoplite.",
    moreInfo:
      "This style suited men with long arms and heavy shoulders. Men of this style would normally be short with compact and well toned bodies. The Hoplomachus would use his spear's great reach to try to strike down an enemy before they got the chance to fight back. Their spear would also allow them to jab at a defender's shield at range, wearing their opponent's arm and shoulder down and tiring them out before the kill. This style was better fitted to constant attack rather than defending or using agility. Although their small shield afforded less protection than that of some other classes, their lighter equipment did not weigh them down as much and thus they would not tire easily as a more heavily armored opponent.",
    traditionalOpponents: ["Thraex", "Murmillo"],
    img: hoplomachus,
  },
  {
    name: "Murmillo",
    info: "Murmillo is a gladiator fighting style that represents the Roman legion. It is the oldest fighting style and the first to use the gladius sword as its primary weapon. The Murmillo is the most popular of all styles because it is classed as the home town hero",
    moreInfo:
      "The Murmillo fighting style was suited for men with large muscular arms and strong heavy shoulders needed to help him carry the weight of his shield and sword. Men who fought as the Murmillo were shorter than most other Gladiators but very muscular. The Murmillo depended on his strength and endurance to survive the battle against foes who were more suited to attacking. The tower shield gives him an edge in defense and his gladius also gives him the ability to thrust and swing at his enemies when in close range. The Murmillo are also trained to kick their enemies with the thick padding worn around their legs. Murmillos are supposed to resemble fish.",
    traditionalOpponents: ["Hoplomachus", "Retiarius"],
    img: murmillo,
  },
  {
    name: "Gladriatrix",
    info: "The gladiatrix (plural gladiatrices) is the female equivalent of the gladiator of ancient Rome. Like their male counterparts, gladiatrices fought each other, or wild animals, to entertain audiences at various games and festivals.",
    moreInfo:
      "They seem to have used much the same equipment as male gladiators, but were heavily outnumbered by them, and were almost certainly considered an exotic rarity by their audiences. Gladiatrixes typically wield two short swords. They use their speed and the advantage of being smaller than the gladiators they compete against to try to defeat their opponents",
    traditionalOpponents: ["Gladriatrix", "Murmillo"],
    img: gladriatrix,
  },
];

export default styles;
