// step 3 Use the context valur inside the nested component that needs it
import { FamilyContext } from "../App";
import { useContext } from "react";
function GreatGrandChild(props) {
  const style = useContext(FamilyContext);

  return (
    <div>
      <span style={style}>GreatGrandChild</span> <br />
    </div>
  );
}

export default GreatGrandChild;
