import circlet from './Item_Tiara_of_Torrents.png'
let artifact = {
  name: "Prayers for Destiny", rarity: [3, 4],
  pieces: {
    circlet: "Tiara of Torrents"
  },
  icons: {
    circlet
  },
  sets: {
    1: {
      text: <span>Affected by <span className="text-hydro">Hydro</span> for 40% less time.</span>,
      stats: {}//TODO element affect reduction stat
    }
  }
}
export default artifact