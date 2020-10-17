import React from 'react';
import styles from './Filters.module.css';
import LaunchYears from './components/LaunchYears/LaunchYears';
import SuccessLaunch from './components/SuccessLaunch/SuccessLaunch';
import SuccessLanding from './components/SuccessLanding/SuccessLanding';
import PropTypes from 'prop-types';

const Filters=(props)=> {
 return (
        <div className= {styles.container}>    
            <h4 className={styles.header}>Filters</h4>
            <LaunchYears yearHandler={props.launchYear}/>
            <SuccessLaunch  SuccessHandler={props.launchSuccess} />
            <SuccessLanding landHandler={props.landSuccess} disable={props.disable}/>
        </div>);
    
}

export default React.memo(Filters);

Filters.propTypes = {
    launchSuccess: PropTypes.func,
    launchYear:PropTypes.func,
    launchYear:PropTypes.func,
    disable:PropTypes.bool
}