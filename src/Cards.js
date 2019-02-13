import React from "react";
import CardInfo from './CardInfo';

const Cards = ({ users = [], deleteUser }) => {
    return users && users.map((userData) => {
        return [
            <div className="card" key={userData.id}>
                <CardInfo userData = {userData} deleteUser = {deleteUser}/>
            </div>
        ]
    })
}
 export default Cards