import { changeName } from "./ChangeGas";
import ChangeShow from "./ChangeShow";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "./stores";
import "./Change.css"
import ChangeItem from "./ChangeItem";

function MainSide() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.change.list);

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(changeName(text));
            setText("");
        }
    }



    return (
        <div className="Mainside">
            <ChangeShow value={text} updateText={setText} handleclick={handleAction} />
            {items.map((el, index) => (
                <ChangeItem key={index} title={el.title} />
            ))}
        </div>
    );

}

export default MainSide;