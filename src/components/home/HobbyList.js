import React from "react";

export default function HobbyList({ hobbies, activeHobby, clickHobby }) {

    return (
        <div>
            hobby list:
            <ul>
                {hobbies.map(hobby => (
                    <li key={hobby.id}
                        style={{background: activeHobby === hobby.id ? 'yellow' : 'white', cursor: 'pointer'}}
                        onClick={() => clickHobby && clickHobby(hobby)}
                    >{hobby.id} - {hobby.name}</li>
                ))}
            </ul>
        </div>
    );
}
