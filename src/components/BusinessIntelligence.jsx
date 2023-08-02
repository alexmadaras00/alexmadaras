import {SectionWrapper} from "../hoc/index.js";
import React from 'react';
import {logotext} from "../assets/index.js";

const BusinessIntelligence = () => {
    return (<div>
        <img src={logotext}/>
    </div>);
};

export default SectionWrapper(BusinessIntelligence, 'bi');
