import React from 'react';


export default function ContactCard(props) {
    
    return (
        <div>
            <div>
                First Name: {props.userInfo.firstName}  
            </div>
            <div>
                Last Name: {props.userInfo.lastName}
            </div>
            <div>
                Phone {props.userInfo.phone}
            </div>
            <div>
                Email {props.userInfo.email}
            </div>
     
        </div>
    )
}

  
  


// # ContactCards / State & Props
// - Create a new project called contact-cards DONE
// - Create some state inside of the app.js:
// ```javascript
// [
//   {
//     firstName: 'yourName',
//     lastName: 'yourLastName',
//     phoneNumber: '828-828-2822'
//   },
//   {
//     firstName: 'yourName',
//     lastName: 'yourLastName',
//     phoneNumber: '828-819-1234'
//   },
// ]
// ```
// - Create a new functional Component called ContactCard DONE
// - ContactCard will render:
//   - a picture
//   - the users FirstName
//   - the users LastName
//   - the users phone Number
// - The info to render in ContactCard will come from app.js as props
// - You will need to map over state in app.js to render ContactCards and pass the user info as props
// ​
// If you want to use my image:
// https://image.flaticon.com/icons/svg/2494/2494965.svg