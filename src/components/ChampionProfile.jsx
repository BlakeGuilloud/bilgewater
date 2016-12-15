import React from 'react';
import API from '../constants/API';

const ChampionProfile = (props) => {
  const renderSkin = (skin, idx) => {
    const image = API.skin(props.champion.id, skin.num);

    return (
      <div key={idx}>
        <img src={image} alt="" />
      </div>
    );
  };

  const {
    champion,
  } = props;

  return (
    <div>
      {champion.skins ? champion.skins.map(renderSkin) : null}
    </div>
  );
};

ChampionProfile.propTypes = {
  champion: React.PropTypes.object,
};

export default ChampionProfile;
