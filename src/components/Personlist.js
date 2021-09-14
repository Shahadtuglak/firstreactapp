import React from 'react'

function Personlist() {

    const persons = [
        {
            name : 'Shahad',
            age : '21',
            Skill : "React"
        },
        {
            name : 'Aman',
            age : '26',
            Skill : "Business"
        },
        {
            name : 'Babbar',
            age : '28',
            Skill : "SDE"
        }

    ]
    
    const mainList = persons.map(person => <h2>I am {person.name}, I am {person.age} Years old and My skill is {person.Skill}</h2>)
    return (
        <div>
            {
                mainList
                
            }
            
            
        </div>
    )
}

export default Personlist
