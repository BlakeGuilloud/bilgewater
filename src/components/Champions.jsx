import React from 'react';

const Champions = (props) => {
  const renderChampion = (key, idx) => {
    const champion = props.champions[key];

    return (
      <div key={idx}>
        <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champion.image.full}`} alt="" />
      </div>
    );
  };

  const {
    championIds,
  } = props;

  return (
    <div>
      {championIds.length ? championIds.map(renderChampion) : null}
    </div>
  );
};

Champions.propTypes = {
  championIds: React.PropTypes.array,
  champions: React.PropTypes.object,
};

export default Champions;
