import React from "react";

const SpellPotionImage = ({ ...props }) => {
  const { value } = props;
  const style = {
    backgroundImage: value.style,
  };
  return (
    <>
      <div className="spell-card__trace" style={style} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={value.viewBox}>
        <clipPath id={value.clip}>
          <path className="cls-1" d={value.d} />
        </clipPath>
        <path clipPath={value.clippath} className="trace-motion, cls-2" fill="none" stroke="#ddfffb" strokeMiterlimit="10" strokeWidth="14" d={value.dSecond} transform={value.transform} />
      </svg>
    </>
  );
};

export default SpellPotionImage;
