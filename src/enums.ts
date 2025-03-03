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
enum Role {
    User = 'user',
    Admin = 'admin',
    Moderator = 'moderator'
}
type User = {
    name?: string,
    email: string,
    password: string,
    // role: Role
    role : Role 
}

const player : User = {
    // name: 'John',
    email: 'KdM5W@example.com',
    password: 'password123',
    role: Role.Moderator
}
const player2 : User = {
    // name: 'John',
    email: 'KdM5sadW@example.com',
    password: 'pasdfssword123',
    role: Role.User
}
const player3 : User = {
    // name: 'John',
    email: 'KsaddM5W@example.com',
    password: 'passwsdaford123',
    role: Role.Admin
}

// console.log(player,player2,player3)
// console.log(player.role)

const isAdmin = (user : User) => {
    if(user.role === Role.Admin) {
        return true
    }
    return false
}

console.log(isAdmin(player3))
console.log(isAdmin(player2))
console.log(isAdmin(player))