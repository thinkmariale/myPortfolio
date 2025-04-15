import React, { Component } from "react";


class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
         
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li> © {new Date().getFullYear()} Think Mariale. All rights reserved. </li>
                
              </ul>
            </div>
         
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href={this.props.data.backtop}>
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
