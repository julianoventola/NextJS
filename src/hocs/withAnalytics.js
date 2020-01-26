import React, { Component } from 'react';
// Old lib was moved from next to next-server
import { loadGetInitialProps } from 'next-server/dist/lib/utils';
// React-ga = Google Analytics for React
import ReactGA from 'react-ga';

export default () => Composed =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      console.log('PAGE VIEW');

      ReactGA.initialize('ID_ANALYTICS');
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };
