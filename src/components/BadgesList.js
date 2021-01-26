import React from 'react';

import '../assets/styles/components/BadgesList.css';

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="BadgesList list-unstyle">
            {this.props.badges.map((badge) => {
                return (
                    <li key={badge.id} className="BadgesListItem">
                        <img src={badge.avatarUrl} alt="Avatar" className="BadgesListItem__avatar"/>
                        <div>
                            <div>
                                <strong>{badge.firstName} {badge.lastName}</strong>
                            </div>
                            <a href={"https://twitter.com/"+badge.twitter} className="Twitter__name">
                            <span alt="Twitter logo" className="Twitter__logo"></span>
                            @{badge.twitter}
                            </a>
                            <div>{badge.jobTitle}</div>
                        </div>
                    </li>
                )
            })}
        </ul>
        )
    }
}

export default BadgesList;