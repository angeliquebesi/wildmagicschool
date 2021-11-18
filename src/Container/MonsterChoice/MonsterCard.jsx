import React from "react";
import Popup from "reactjs-popup";

export default function MonsterCard({ monster, onStartFight, canFight, availableMonster }) {
  return (
    <div className="col-5 px-3">
      <div id={monster.id}>
        <div className="monster card card-stretch text-center mx-auto rounded-2">
          <img
            src={monster.img}
            alt="monster1"
            className="card-img-top img-fluid "
          />
          {!availableMonster && (
            <div className="card-img-overlay bg-black bg-opacity-75 text-white rounded-2">
              <div className="card-text fs-2 text-center m-5  ">
                You need to defeat the previous monster to unlock this one!!
              </div>
            </div>
          )}

          <div className="card-body">
            <h2 className="card-title ">{monster.name}</h2>
            <Popup
              trigger={
                <button className="button btn btn-dark mx-2" type="button">
                  Fight
                </button>
              }
              modal
            >
              {!canFight && (
                <span className="fs-4">
                  {`You need the ${monster.potion} potion and the ${monster.spell} spell to fight against the ${monster.name} !!`}
                </span>
              )}
              {canFight && (
                <span className="fs-4">
                  {`Well done John, you can try to beat the ${monster.name} now , let's go  !!  `}
                  <button
                    className="button btn btn-dark p-2 mx-2"
                    type="button"
                    onClick={onStartFight}
                  >
                    Fight
                  </button>
                </span>
              )}
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}
