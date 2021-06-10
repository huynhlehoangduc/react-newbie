import React from "react";
import HobbyList from "../components/home/HobbyList";
import {useDispatch, useSelector} from "react-redux";
import {addHobby} from "../actions/hobby";

export default function HomePage() {
    const hobbies = useSelector(state => state.hobby.list);
    const dispatch = useDispatch();

    const clickAddHobby = () => {
        const hobby = {
            id: hobbies.length + 1,
            name: `Hobby ${hobbies.length + 1}`
        }
        const action = addHobby(hobby);
        dispatch(action);
    }

    return (
        <div>
            Home page <br/>
            <button type="button" onClick={clickAddHobby}>Add hobby</button>
            <HobbyList hobbies={hobbies} />
        </div>
    )
}
