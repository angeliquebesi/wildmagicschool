import React from "react";
import Popup from "reactjs-popup";
import ButtonReturnMap from "../../Components/ButtonReturnMap/ButtonReturnMap";
import padlock from "../../images/padlock.png";

export default function MonsterCard({
  monster,
  onStartFight,
  canFight,
  availableMonster,
  defeatedMonster,
  quizz = false,
}) {
  // TODO  enlever button sur carte quand on est dans le quizz+ transition entre page
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
          {defeatedMonster && (
            <div className="card-img-overlay bg-black bg-opacity-50 text-success rounded-2">
              <svg className=" mt-3 w-75 " viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                />
              </svg>
            </div>
          )}
          <div className="card-body">
            <h2 className="card-title ">{monster.name}</h2>
            {quizz !== true && (
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
                    <ButtonReturnMap />
                  </span>
                )}
                {canFight && (
                  <span className="fs-4">
                    {`Well done, you can try to beat the ${monster.name} now , let's go !!  `}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
