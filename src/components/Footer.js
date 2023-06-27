import React, { Component } from 'react';
import { APP_NAME } from '../constants/appConstants';

/**
 * Renders the Footer
 */
class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            2023 &copy; {APP_NAME}. All Rights Reserved. Crafted with <i className='uil uil-heart text-danger font-size-12'></i> by 
                                <a href="https://ampersandllc.co" target="_blank" rel="noopener noreferrer" className="ml-1">Ampersand</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;