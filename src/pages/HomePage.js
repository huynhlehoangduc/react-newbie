import React from "react";
import HobbyList from "../components/home/HobbyList";
import {useDispatch, useSelector} from "react-redux";
import {addHobby, setActiveHobby} from "../actions/hobby";

export default function HomePage() {
    const hobbies = useSelector(state => state.hobby.list);
    const activeHobby = useSelector(state => state.hobby.activeHobby);
    const dispatch = useDispatch();

    const clickAddHobby = () => {
        const hobby = {
            id: hobbies.length + 1,
            name: `Hobby ${hobbies.length + 1}`
        }
        const action = addHobby(hobby);
        dispatch(action);
    }

    const handleClickHobby = (hobby) => {
        dispatch(setActiveHobby(hobby.id));
    }

    return (
        <div>
            Home page <br/>
            <button type="button" onClick={clickAddHobby}>Add hobby</button>
            <HobbyList hobbies={hobbies} clickHobby={handleClickHobby} activeHobby={activeHobby} />
        </div>
    )
}
