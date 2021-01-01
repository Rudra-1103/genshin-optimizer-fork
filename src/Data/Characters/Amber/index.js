import card from './Character_Amber_Card.jpg'
import thumb from './Character_Amber_Thumb.png'
import c1 from './Constellation_One_Arrow_to_Rule_Them_All.png'
import c2 from './Constellation_Bunny_Triggered.png'
import c3 from './Constellation_It_Burns.png'
import c4 from './Constellation_It\'s_Not_Just_Any_Doll....png'
import c5 from './Constellation_It\'s_Baron_Bunny.png'
import c6 from './Constellation_Wildfire.png'
import normal from './Talent_Sharpshooter.png'
import skill from './Talent_Explosive_Puppet.png'
import burst from './Talent_Fiery_Rain.png'
import passive1 from './Talent_Every_Arrow_Finds_Its_Target.png'
import passive2 from './Talent_Precise_Shot.png'
import passive3 from './Talent_Gliding_Champion.png'

//AUTO
const hitPercent = [
  [36.12, 39.06, 42, 46.2, 49.14, 52.5, 57.12, 61.74, 66.36, 71.4, 76.44, 81.48, 86.52, 91.56, 96.6],
  [36.12, 39.06, 42, 46.2, 49.14, 52.5, 57.12, 61.74, 66.36, 71.4, 76.44, 81.48, 86.52, 91.56, 96.6],
  [46.44, 50.22, 54, 59.4, 63.18, 67.5, 73.44, 79.38, 85.32, 91.8, 98.28, 104.76, 111.24, 117.72, 124.2],
  [47.3, 51.15, 55, 60.5, 64.35, 68.75, 74.8, 80.85, 86.9, 93.5, 100.1, 106.7, 113.3, 119.9, 126.5],
  [59.34, 64.17, 69, 75.9, 80.73, 86.25, 93.84, 101.43, 109.02, 117.3, 125.58, 133.86, 142.14, 150.42, 158.7],
]

const aimedShot = [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]
const fullAimedShot = [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]
const plunge_dmg = [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
const plunge_dng_low = [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
const plunge_dmg_high = [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]

//SKILL
const explosivePuppet = {
  hp: [41.36, 44.46, 47.56, 51.7, 54.8, 57.9, 62.04, 66.18, 70.31, 74.45, 78.58, 82.72, 87.89, 93.06, 98.23],
  dmg: [123.2, 132.44, 141.68, 154, 163.24, 172.48, 184.8, 197.12, 209.44, 221.76, 234.08, 246.4, 261.8, 277.2, 292.6],
}
const fieryRain = {
  dmg_perwave: [28.08, 30.19, 32.29, 35.1, 37.21, 39.31, 42.12, 44.93, 47.74, 50.54, 53.35, 56.16, 59.67, 63.18, 66.69],
  total_dmg: [505.44, 543.35, 581.26, 631.8, 669.71, 707.62, 758.16, 808.7, 859.25, 909.79, 960.34, 1010.88, 1074.06, 1137.24, 1200.42],
}

let char = {
  name: "Amber",
  cardImg: card,
  thumbImg: thumb,
  star: 4,
  elementKey: "pyro",
  weaponTypeKey: "bow",
  gender: "F",
  constellationName: "Lepus",
  titles: ["Outrider", "Champion Glider"],
  baseStat: {
    hp: [793, 2038, 2630, 3940, 4361, 5016, 5578, 6233, 6654, 7309, 7730, 8385, 8806, 9461],
    atk: [19, 48, 62, 93, 103, 118, 131, 147, 157, 172, 182, 198, 208, 223],
    def: [50, 129, 167, 250, 277, 318, 354, 396, 423, 464, 491, 532, 559, 601]
  },
  specializeStat: {
    key: "def_",
    value: [0, 0, 0, 0, 7.5, 7.5, 15, 15, 15, 15, 22.5, 22.5, 30, 30]
  },
  talent: {
    auto: {
      name: "Sharpshooter",
      img: normal,
      normal: {
        text: "Perform up to 5 consecutive shots with a bow.",
        fields: hitPercent.map((percentArr, i) =>
        ({
          text: `${i + 1}-Hit DMG`,
          basicVal: (tlvl) => percentArr[tlvl] + "%",
          finalVal: (tlvl, stats) => (percentArr[tlvl] / 100) * stats.norm_atk_avg_dmg
        }))
      },
      charged: {
        text: <span>Perform a more precise Aimed Shot with increased DMG. While aiming, flames will accumulate on the arrowhead. A fully charged flaming arrow will deal <span className="text-pyro">Pyro DMG</span>.</span>,
        fields: [{
          text: `Aimed Shot DMG`,
          basicVal: (tlvl) => aimedShot[tlvl] + "%",
          finalVal: (tlvl, stats) => (aimedShot[tlvl] / 100) * stats.char_atk_avg_dmg
        }, {
          text: `Fully-Charged Aimed Shot DMG`,
          basicVal: (tlvl) => fullAimedShot[tlvl] + "%",
          finalVal: (tlvl, stats) => (fullAimedShot[tlvl] / 100) * stats.char_atk_avg_dmg
        }, {
          text: `Stamina Cost`,
          value: `40/s`,
        }, {
          text: `Max Duration`,
          value: `5s`,
        }]
      },
      plunge: {
        text: "Fires off a shower of arrows in mid-air before falling an striking the ground, dealing AoE DMG upon impact.",
        fields: [{
          text: `Plunge DMG`,
          basicVal: (tlvl) => plunge_dmg[tlvl] + "%",
          finalVal: (tlvl, stats) => (plunge_dmg[tlvl] / 100) * stats.phy_avg_dmg
        }, {
          text: `Low Plunge DMG`,
          basicVal: (tlvl) => plunge_dng_low[tlvl] + "%",
          finalVal: (tlvl, stats) => (plunge_dng_low[tlvl] / 100) * stats.phy_avg_dmg
        }, {
          text: `High Plunge DMG`,
          basicVal: (tlvl) => plunge_dmg_high[tlvl] + "%",
          finalVal: (tlvl, stats) => (plunge_dmg_high[tlvl] / 100) * stats.phy_avg_dmg
        }]
      }
    },
    skill: {
      name: "Explosive Puppet",
      img: skill,
      text: <span>
        The ever-reliable Baron Bunny takes the stage.
        <h6>Baron Bunny:</h6>
        <ul>
          <li>Continuously taunts the enemy, drawing their fire.</li>
          <li>Baron Bunny's HP scales with Amber's Max HP.</li>
          <li>When destroyed or when its timer expires, Baron Bunny explodes, dealing AoE <span className="text-pyro">Pyro DMG</span>.</li>
          <li>Generate 4 elemental particles when it hit at least 1 target.</li>
        </ul>
        <div><strong>Hold:</strong> Adjusts the throwing direction of Baron Bunny. The longer the button is held, the further the throw.</div>
      </span>,
      fields: [{
        text: "Inherited HP",
        basicVal: (tlvl) => explosivePuppet.hp[tlvl] + "%",
        finalVal: (tlvl, s) => (explosivePuppet.hp[tlvl] / 100) * s.hp,
      }, {
        text: "Explosion DMG",
        basicVal: (tlvl) => explosivePuppet.dmg[tlvl] + "%",
        finalVal: (tlvl, s) => (explosivePuppet.dmg[tlvl] / 100) * s.skill_avg_dmg,
      }, (c) => c >= 2 ? {
        text: "Manual Detonation DMG",
        basicVal: (tlvl) => explosivePuppet.dmg[tlvl] + "% + 200%",
        finalVal: (tlvl, s) => ((explosivePuppet.dmg[tlvl] + 200) / 100) * s.skill_avg_dmg,
      } : null, (c) => c >= 4 ? {
        text: "Charges",
        value: 2,
      } : null, (c) => ({
        text: "CD",
        value: "15s" + (c >= 4 ? " -20%" : ""),
      })]
    },
    burst: {
      name: "Fiery Rain",
      img: burst,
      text: <span>
        Fires off a shower of arrows, dealing continuous <span className="text-pyro">AoE Pyro DMG</span>.
      </span>,
      fields: [{
        text: "Fiery Rain DMG Per Wave",
        basicVal: (tlvl) => fieryRain.dmg_perwave[tlvl] + "%",
        finalVal: (tlvl, s) => (fieryRain.dmg_perwave[tlvl] / 100) * s.burst_avg_dmg,
      }, {
        text: "Total Fiery Rain DMG",
        basicVal: (tlvl) => fieryRain.total_dmg[tlvl] + "%",
        finalVal: (tlvl, s) => (fieryRain.total_dmg[tlvl] / 100) * s.burst_avg_dmg,
      }, {
        text: "Duration",
        value: "2s",
      }, {
        text: "CD",
        value: "12s",
      }, {
        text: "Energy Cost",
        value: 40,
      }]
    },
    passive1: {
      name: "Every Arrow Finds Its Target",
      img: passive1,
      text: (stats) => <span>
        Increases the CRIT Rate of Fiery Rain by 10% and widens its AoE by 30%.
      </span>,
      //TODO stats
    },
    passive2: {
      name: "Precise Shot",
      img: passive2,
      text: <span>
        Aimed Shot hits on weak spots increase ATK by 15% for 10s.
      </span>
      //TODO conditional
    },
    passive3: {
      name: "Gliding Champion",
      img: passive3,
      text: <span>
        Decreases gliding Stamina consumption for your own party members by 20%.
        Not stackable with Passive Talents that provide the exact same effects.
      </span>
      //TODO stats? stamine consumption for gliding...
    },
  },
  constellation: [{
    name: "One Arrow to Rule Them All",
    img: c1,
    text: <span>
      Fires 2 arrows per <b>Aimed Shot</b>. The second arrow deals 20% of the first arrow's DMG.
      The second arrow is fired 10 degrees vertically below actual aiming, has separate critical, and also makes the primary shot travel further before it starts dropping down.
    </span>
  }, {
    name: "Bunny Triggered",
    img: c2,
    text: <span>
      Baron Bunny, new and improved! Hitting <b>Baron Bunny</b>'s foot with a fully-charged <b>Aimed Shot</b> manually detonates it.
      Explosion via manual detonation deals 200% additional DMG.
    </span>
  }, {
    name: "It Burns!",
    img: c3,
    text: <span>Increases the level of <b>Fiery Rain</b> by 3. Maximum upgrade level is 15.</span>
  }, {
    name: "It's Not Just Any Doll...",
    img: c4,
    text: <span>Decreases <b>Explosive Puppet</b>'s CD by 20%. Adds 1 additional charge.</span>
  }, {
    name: "It's Baron Bunny!",
    img: c5,
    text: <span>Increases the level of <b>Explosive Puppet</b> by 3. Maximum upgrade level is 15.</span>
  }, {
    name: "Wildfire",
    img: c6,
    text: <span><b>Fiery Rain</b> increases the entire party's Movement SPD by 15% and ATK by 15% for 10s.</span>
    //TODO conditional and party buff
  }],
};

export default char;
