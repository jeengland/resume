import React from 'react';

import Header from './Header.js';
import Summary from './Summary.js';
import Skills from './Skills.js';
import Experience from './Experience.js';

const Resume = () => {
    return (
        <div>
            <Header />
            <Summary />
            <Skills />
            <Experience />
        </div>
    )
}

export default Resume;