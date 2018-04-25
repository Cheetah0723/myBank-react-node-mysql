import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavigationHeader from 'components/Navigation/Header';
import MainNavigation from 'components/Navigation/MainNavigation';

class Navigation extends Component {
   state = { isMobileNavVisible: false };

   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <section className="navigation module">
                  <NavigationHeader toggleMobileNav={this.toggleMobileNav} user={this.props.user} />
                  <MainNavigation isMobileNavVisible={this.state.isMobileNavVisible} />
               </section>
            </div>
         </div>
      );
   }

   toggleMobileNav = () => {
      this.setState(prevState => ({
         isMobileNavVisible: !prevState.isMobileNavVisible
      }));
   };
}

const mapStateToProps = state => {
   return {
      user: state.profile.data[0]
   };
};

export default connect(mapStateToProps)(Navigation);
