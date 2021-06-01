//import { checkPropTypes } from 'prop-types';
import React from 'react';

//import PropTypes from "prop-types";
//import City from '../assets/city.jpg';

const Profile = ({fullName, bio, profession }) =>(
<div>

    <div>
        <span> fullName: {fullName}</span>
    </div>
    <div>
        <span>Bio: {bio}</span>
    </div>
    <div>
        <span>Profession: {profession}</span>
    </div>
    

</div>


);



export default Profile;