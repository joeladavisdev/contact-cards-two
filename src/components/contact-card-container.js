import React, { Component } from "react";

import ContactCard from "./contact-card";

export default class ContactCardContainer extends Component {
    constructor() {
        super();

        this.state = {
            users: [
                {
                    firstName: "Joel",
                    lastName: "Davis",
                    phone: "888-888-8888",
                    email: "joel@test.com",
                    address: {
                        street: "anywhere street",
                        city: "orem",
                        state: "UT"
                    }
                },
                {
                    firstName: "Chuck",
                    lastName: "Norris",
                    phone: "888-888-8888",
                    email: "chuck@norris.com",
                    address: {
                        street: "anywhere street",
                        city: "orem",
                        state: "UT"
                    }
                }
            ]
        }
    }

    renderContactCards = () => {
        return this.state.users.map(user => {
            return <ContactCard userInfo={user} />
        })
    }

    render() {

        return (
            <div>
                <h1>Contacts</h1>
                {this.renderContactCards()}
            </div>
        )
    }
}  