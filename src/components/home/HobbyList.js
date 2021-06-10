//import React from "react";

export default function HobbyList({ hobbies }) {

    return (
        <div>
            hobby list:
            <ul>
                {hobbies.map(hobby => (
                    <li key={hobby.id}>{hobby.id} - {hobby.name}</li>
                ))}
            </ul>
        </div>
    );
}
