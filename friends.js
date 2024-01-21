// isBestFriend
// {name:'Tom',friend:'rock'}
// {name:'Rock' , friend:'Tom'}


function isBestFriend(person) {
    return person;
}


const personTom = { name: 'Tom', friend: 'Rock' };
const personRock = { name: 'Rock', friend: 'Tom' };

if (isBestFriend(personTom.friend === personRock.name && personRock.friend === personTom.name)) {
    console.log('They are best friends!');
} else {
    console.log('They are not best friends.');
}
