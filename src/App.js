import React, { useMemo } from 'react';
import { ethers } from 'ethers';
import { SafeProvider, useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk';
import { SafeAppProvider } from '@safe-global/safe-apps-provider';

const App = () => {
  // This component now uses the useSafeAppsSDK hook within the SafeProvider context
  const { sdk, safe } = useSafeAppsSDK();
  const web3Provider = useMemo(() => new ethers.providers.Web3Provider(new SafeAppProvider(safe, sdk)), [sdk, safe]);
  console.log(web3Provider);
  // use web3Provider with contracts here
  // ...

  return (
    <div>
      {/* Your JSX here. */}
      My Safe App
    </div>
  );
};

// This is the root of your React application, which should be wrapped by SafeProvider
const Root = () => {
  return (
    <SafeProvider>
      <App />
    </SafeProvider>
  );
};

export default Root;
