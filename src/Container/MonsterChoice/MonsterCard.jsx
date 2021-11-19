import React from "react";
import Popup from "reactjs-popup";
import padlock from "../../images/padlock.png";

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
              <img
                className="card-img w-50 h-50 mt-4 opacity-75 "
                src={padlock}
                alt="monster1"
              />
              <div className="card-text fs-5 text-center m-3  ">
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
                <span className="fs-2">
                  {`Well done, you can try to beat the ${monster.name} now , let's go  !!  `}
                  <button
                    className="button btn btn-dark p-2 mx-2 fs-2"
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
