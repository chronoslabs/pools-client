import React from 'react';
import { TableCell, TableRow } from '@components/General/Table';
import { Pool, usePool } from '@hooks/usePool';
import { toApproxCurrency } from '@libs/utils';
import { Button } from '@components/General';
import styled from 'styled-components';
import { PoolType, SideType } from '@libs/types/General';
import { SHORT, LONG } from '@libs/constants';
import { PoolToken } from '@hooks/usePool/tokenDispatch';

export default (({ poolInfo, openTradeModal }) => {
    const pool = usePool(poolInfo);
    const { poolState, tokenState } = pool;

    const handleClick = (side: SideType, isMint: boolean) => {
        if (isMint) {
        } else {
        }
        openTradeModal(pool, side === SHORT ? pool.tokenState.shortToken : pool.tokenState.longToken);
    };
    return (
        <>
            <TableRow>
                <TableCell>{tokenState.shortToken.tokenName}</TableCell>
                <TableCell>{toApproxCurrency(poolState.lastPrice)}</TableCell>
                <TableCell>{toApproxCurrency(poolState.oraclePrice)}</TableCell>
                <TableCell>
                    <MarketChange marketChange={poolState.marketChange} />
                </TableCell>
                <TableCell>{poolState.rebalanceMultiplier.toNumber().toFixed(3)}</TableCell>
                <TableCell>
                    <StyledButton onClick={(_e) => handleClick(SHORT, true)}>Mint</StyledButton>
                    <StyledButton onClick={(_e) => handleClick(SHORT, false)}>Burn</StyledButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>{tokenState.longToken.tokenName}</TableCell>
                <TableCell>{toApproxCurrency(poolState.lastPrice)}</TableCell>
                <TableCell>{toApproxCurrency(poolState.oraclePrice)}</TableCell>
                <TableCell>
                    <MarketChange marketChange={poolState.marketChange} />
                </TableCell>
                <TableCell>{poolState.rebalanceMultiplier.toNumber().toFixed(3)}</TableCell>
                <TableCell>
                    <StyledButton onClick={(_e) => handleClick(LONG, true)}>Mint</StyledButton>
                    <StyledButton onClick={(_e) => handleClick(LONG, false)}>Burn</StyledButton>
                </TableCell>
            </TableRow>
        </>
    );
}) as React.FC<{
    poolInfo: PoolType;
    openTradeModal: (pool: Pool, token: PoolToken) => void;
}>;

const StyledButton = styled(Button)`
    display: inline;
`;

const MarketChange = (styled(({ marketChange, className }) => (
    <span className={className}>
        {`${marketChange.toFixed(2)}%`}
    </span>
))`
    color: ${props => props.marketChange > 0 ? 'var(--color-green)' : 'var(--color-red)'};

`) as React.FC<{
    marketChange: number
}>