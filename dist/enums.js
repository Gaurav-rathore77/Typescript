"use strict";
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
//   }
//   let currentDirection = CardinalDirections.North;
//   let currentDirection2 = CardinalDirections.West;
//   console.log(currentDirection);
//   console.log(currentDirection2);
// in authentication 
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
    Role["Moderator"] = "moderator";
})(Role || (Role = {}));
const player = {
    // name: 'John',
    email: 'KdM5W@example.com',
    password: 'password123',
    role: Role.Moderator
};
const player2 = {
    // name: 'John',
    email: 'KdM5sadW@example.com',
    password: 'pasdfssword123',
    role: Role.User
};
const player3 = {
    // name: 'John',
    email: 'KsaddM5W@example.com',
    password: 'passwsdaford123',
    role: Role.Admin
};
// console.log(player,player2,player3)
// console.log(player.role)
const isAdmin = (user) => {
    if (user.role === Role.Admin) {
        return true;
    }
    return false;
};
console.log(isAdmin(player3));
console.log(isAdmin(player2));
console.log(isAdmin(player));
