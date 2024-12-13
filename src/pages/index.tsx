/* eslint-disable no-nested-ternary */
import React from 'react'

import { Widget } from '../components/widget'

export default function TestWidget() {
  const supportedChains: any[] = [
    {
      name: 'PulseChain',
      chainId: '369',
      icon: 'https://assets.coingecko.com/coins/images/25666/standard/PLS-LogoTransparent_1.png?1712339803',
      rpcUrls: ['https://rpc.pulsechain.com'],
      nativeCurrency: {
        name: 'PulseChain',
        symbol: 'PLS',
        decimals: 18,
      },
      blockExplorerUrls: ['https://scan.pulsechain.com/'],
      type: 'mainnet',
      contractAddress: '0xd6A07b8065f9e8386A9a5bBA6A754a10A9CD1074',
      poolId: 0,
    },
  ]

  return (
    <div className="grid min-h-screen grid-cols-2 gap-4 bg-[#505050]">
      <div className="text-white">
        <p className="mb-5 pl-5 pt-10 text-5xl text-white">
          User Content Title!
        </p>
        <p className="pl-5 pt-2 text-white">
          User content can be here... User content can be here...
        </p>
        <p className="pl-5 pt-2 text-white">
          User content can be here... User content can be here...
        </p>
        <p className="pl-5 pt-2 text-white">
          User content can be here... User content can be here...
        </p>
        <p className="pl-5 pt-2 text-white">
          User content can be here... User content can be here...
        </p>
        <p className="pl-5 pt-2 text-white">
          User content can be here... User content can be here...
        </p>
        <p className="pl-5 pt-2 text-white">
          User content can be here... User content can be here...
        </p>
      </div>

      <div className="flex justify-end bg-[#505050]">
        <Widget
          title="Swap Staking Pool 1"
          supportedChains={supportedChains}
          globalMaxAmount={40}
        />
      </div>
    </div>
  )
}
