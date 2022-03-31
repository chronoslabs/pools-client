import { selectGasSlice } from '@store/GasSlice';
import { useStore } from '@store/main';
import { selectProvider } from '@store/Web3Slice';
import { useMemo } from 'react';

// fetch gas price from store
export const useGasPrice: () => number = () => {
    const provider = useStore(selectProvider);
    const { gasPrice, getGasPrice } = useStore(selectGasSlice);

    useMemo(() => {
        if (provider !== undefined) {
            getGasPrice(provider);
        }
    }, [provider?.network]);

    return gasPrice;
};