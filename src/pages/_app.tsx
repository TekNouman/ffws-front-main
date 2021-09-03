import * as React from 'react';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import 'styles/styles.scss';

import { initNProgressEvents } from 'utils/nprogress';

initNProgressEvents();
class MyApp extends App {
  constructor(props: AppProps<unknown>, context: any) {
    super(props, context);
  }

  static async getInitialProps(
    appContext: AppContext
  ): Promise<AppInitialProps> {
    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
    };
  }

  render(): React.ReactElement {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
