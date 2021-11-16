import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import MonsterChoice from "../MonsterChoice/MonsterChoice";
import ButtonReturnMap from "../../Components/ButtonReturnMap/ButtonReturnMap";
import Quiz from "../../Components/Quiz/Quiz";
import Monsters from "../../DATA/Monsters";

export default function ContainerGame({ type }) {
  const { idMonster } = useContext(UserContext);
  // const [filteredMonster, setFilteredMonster] = useState("");

  console.log(idMonster);

  // useEffect(() => {
  // setFilteredMonster(Monsters.filter((monster) => monster.id === idMonster));
  // }, [idMonster]);
  // console.log(filteredMonster);

  const monster = Monsters.filter((item) => item.id === parseInt(idMonster, 36));
  console.log(Monsters);
  return (
    <div>
      {type === "Fight" && (
        <>
          {/* <Monster monster={monster} */}
          {idMonster === "" && <MonsterChoice Monsters={Monsters} />}
          {idMonster !== "" && (
            <div>
              <MonsterChoice Monsters={monster} />
              <Quiz />
            </div>
          )}
        </>
      )}
      <ButtonReturnMap />
    </div>
  );
}
