const user = {
    name: 'Erick Cinigalia',
    email: 'erick.cinigalia@gmail.com',
    friends: [{
        name: 'Tom',
        address: {
            street: 'Rua Tal',
            number: 69
        }
    }],
    age: 19,
    phone: {
        countryCode: '+55',
        ddd: '11',
        number: '945342906'
    }
}

console.log(user?.friends[0]?.phone.ddd);
console.log(user?.anyProps?.address);

console.log(user.anyProps?.[5].name);