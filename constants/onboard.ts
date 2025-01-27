import { Initialization } from '@tracer-protocol/onboard/dist/src/interfaces';
import { NETWORKS } from '@tracer-protocol/pools-js';
import { DEFAULT_NETWORK, networkConfig } from '~/constants/networks';

export const onboardConfig: Initialization = {
    networkId: parseInt(DEFAULT_NETWORK),
    hideBranding: true,
    walletSelect: {
        heading: 'Connect Wallet',
        wallets: [
            { walletName: 'metamask' },
            { walletName: 'coinbase' },
            { walletName: 'torus' },
            // { walletName: "binance" },

            {
                walletName: 'walletConnect',
                rpc: {
                    [NETWORKS.CANDLE]: networkConfig[NETWORKS.CANDLE].publicRPC,
                    [NETWORKS.ARBITRUM_RINKEBY]: networkConfig[NETWORKS.ARBITRUM_RINKEBY].publicRPC,
                    [NETWORKS.MAINNET]: networkConfig[NETWORKS.MAINNET].publicRPC,
                },
            },
        ],
    },
    walletCheck: [{ checkName: 'accounts' }, { checkName: 'connect' }],
};
