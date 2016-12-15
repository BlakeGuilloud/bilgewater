const fetchChampions = () => 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json';
const fetchIndividualChampion = (id) => `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${id}.json`;

const fetchChampionSkin = (champion, num) => `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${num}.jpg`;

module.exports = {
  champions: fetchChampions,
  individualChampion: fetchIndividualChampion,
  skin: fetchChampionSkin,
};
