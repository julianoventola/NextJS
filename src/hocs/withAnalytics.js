import React, { Component } from 'react';
// Old lib was moved from next to next-server
import { loadGetInitialProps } from 'next-server/dist/lib/utils';
// React-ga = Google Analytics for React
import ReactGA from 'react-ga';

export default () => Composed =>
  class extends Component {
    // MUST pass initial props from other components when using HOC
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    // Using to Analytics undertand when changing page
    componentDidMount() {
      // Set your Analytics key here  ID-999999-BR
      ReactGA.initialize('ID_ANALYTICS');
      ReactGA.pageview(window.location.pathname);
    }

    // Repass all props
    render() {
      return <Composed {...this.props} />;
    }
  };
