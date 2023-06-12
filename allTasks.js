const data = {
  journey0: {
    nick: "Journey prepartion",
    title: "First steps in ZkSync",
    journeyDesc: [
      "ZKSync is a Layer-2 protocol that scales Ethereum with ZK tech. It's main chain is ZKSync Era. To use zkSync and zkEase, you need two things:",
      '1. To add zkSync Era into your Web3 wallet. You can do it by visiting https://chainlist.org/chain/324 and clicking "add on metamask" button.',
      "2. You need to have ZKSync ETH in your wallet. You can do it by bridging your ETH from Ethereum mainnet using official bridge https://bridge.zksync.io/.",
    ],
    tasks: {
      task1: {
        title: "Bridge to ZKSync ERA",
        exp: 10,
        source: "zkSync.io",
        link: "https://bridge.zksync.io/",
        taskGuide: [
          ["Connect your Web3 wallet", "Connect your Web3 wallet."],
          [
            "Select a token to exchange",
            "Choose the token you want to exchange in the Send tab.",
          ],
          [
            "Select a token to receive",
            "Choose the token you want to receive in the Get tab.",
          ],
          [
            "Adjust slippage tolerance (optional)",
            "Optionally, adjust the slippage tolerance by clicking on the gear-shaped button above the Send tab.",
          ],
          [
            "Enter the amount to Swap",
            "Enter the amount of tokens you want to exchange.",
          ],
          [
            "Approve spending limit",
            "If you are exchanging an ERC-20 token, click the Approve button and approve the spending limit through your Web3 wallet before proceeding with the swap.",
          ],
          [
            "Click Swap and confirm",
            "Click the Swap button and confirm the transaction through your Web3 wallet.",
          ],
        ],
        taskDesc: "Let's make sure you are set up!",
      },
    },
  },
  journey1: {
    nick: "Journey One",
    title: "Basic swaps and mints",
    journeyDesc: [
      "In the Journey One we invite you to try basic actions on some of the zkSync ecosystem protocols (currently Mute, Onchain Trade, Mintsquare, SpaceSwap and SyncSwap). The actions available are mint, wrap and NFT mint.",
      "1. Swap: exchange any token for another through a decentralized exchange (DEX).",
      '2. Wrap: In this case, you deposit ETH into a smart contract and receive wrapped ETH (WETH, an ERC-20 token) in exchange. From user standpoint, there is not so much difference between swaps and wraps, however the transaction will be marked differently ("Wrap" method instead of "Swap" method.',
      "3. Mint: a process of creating NFT on blockchain. You will interact with NFT platform smart-contract and deploy your own NFT.",
    ],
    tasks: {
      task11: {
        title: "Make any swap",
        exp: 10,
        source: "Mute.io",
        link: "https://app.mute.io/swap",
        taskDesc: "Basic swaps on Mute",
        taskGuide: [
          ["Connect your Web3 wallet", "Connect your Web3 wallet."],
          [
            "Select a token to exchange",
            "Choose the token you want to exchange in the Send tab.",
          ],
          [
            "Select a token to receive",
            "Choose the token you want to receive in the Get tab.",
          ],
          [
            "Adjust slippage tolerance (optional)",
            "Optionally, adjust the slippage tolerance by clicking on the gear-shaped button above the Send tab.",
          ],
          [
            "Enter the amount to Swap",
            "Enter the amount of tokens you want to exchange.",
          ],
          [
            "Approve spending limit",
            "If you are exchanging an ERC-20 token, click the Approve button and approve the spending limit through your Web3 wallet before proceeding with the swap.",
          ],
          [
            "Click Swap and confirm",
            "Click the Swap button and confirm the transaction through your Web3 wallet.",
          ],
        ],
      },
      task12: {
        title: "Wrap any amount of ETH",
        exp: 10,
        source: "Mute.io",
        link: "https://app.mute.io/swap",
        taskGuide: [
          [
            "Connect your Web3 wallet",
            "Connect your Web3 wallet to the decentralized exchange.",
          ],
          [
            "Select token to exchange",
            "Choose the token you want to exchange for WETH in the Send tab.",
          ],
          ["Select WETH", "Choose WETH in the Get tab."],
          [
            "Adjust slippage tolerance (optional)",
            "Click on the gear-shaped button above the Send tab to adjust the slippage tolerance.",
          ],
          [
            "Enter the token amount",
            "Specify the amount of tokens you want to use for the wrap.",
          ],
          [
            "Click Swap and confirm",
            "Click the Swap button and confirm the transaction through your Web3 wallet.",
          ],
          [
            "Approve spending limit",
            "If exchanging an ERC-20 token, click on the Approve button and approve the spending limit through your Web3 wallet before wrapping.",
          ],
        ],

        taskDesc: "Basic wraps on Mute",
      },
      task13: {
        title: "Swap any token",
        exp: 10,
        source: "Onchain.trade",
        link: "https://onchain.trade/#/trade",
        taskGuide: [
          [
            "Connect your Web3 wallet",
            "Connect your Web3 wallet to the decentralized exchange.",
          ],
          [
            "Select token to exchange",
            "Choose the token you want to exchange from the upper tab of the Swap tab.",
          ],
          [
            "Select token to receive",
            "Choose the token you want to receive from the bottom tab of the Swap tab.",
          ],
          [
            "Adjust slippage tolerance (optional)",
            "Customize the slippage tolerance by clicking on the dots-shaped button in the upper-right corner of the window.",
          ],
          [
            "Enter the amount of tokens",
            "Specify the quantity of tokens you want to exchange.",
          ],
          [
            "Click Swap and confirm",
            "Click on the Swap button and confirm the transaction through your Web3 wallet.",
          ],
          [
            "Approve spending limit",
            "If you are exchanging an ERC-20 token, click on the Approve button and approve the spending limit through your Web3 wallet before proceeding with the swap.",
          ],
        ],
        taskDesc: "Basic swaps on Onchain",
      },
      task14: {
        title: "Mint any NFT",
        exp: 10,
        source: "Mintsquare.io",
        link: "https://mintsquare.io/mint",
        taskGuide: [
          ["Connect your Web3 wallet", "Connect your Web3 wallet."],
          [
            "Upload media for NFT",
            "Upload any media you want to use for your NFT into the Upload window.",
          ],
          [
            "Name your NFT",
            "Give your NFT a name through the Name your NFT tab.",
          ],
          [
            "Add description, link, attributes",
            "Optionally, add a description, external link, and attributes through the corresponding tabs; this will be saved in your NFT metadata.",
          ],
          [
            "Mint your NFT",
            "Click on the Mint button and confirm your transaction through your Web3 wallet.",
          ],
          [
            "View your newly minted NFT",
            "After the transaction is confirmed, you will get a pop-up prompting you to visit your profile, where you can view your newly minted NFT.",
          ],
        ],
        taskDesc: "Create your own NFT on Mintsquare",
      },
      task15: {
        title: "Swap any token",
        exp: 10,
        source: "Spacefi.io",
        link: "https://swap-zksync.spacefi.io/#/swap",
        taskGuide: [
          ["Connect your Web3 wallet", "Connect your Web3 wallet."],
          [
            "Select a token to exchange in the From tab",
            "Choose the token you want to exchange from your wallet.",
          ],
          [
            "Select a token to receive in the To tab",
            "Choose the token you want to receive in exchange.",
          ],
          [
            "Adjust slippage tolerance",
            "Optionally, modify the slippage tolerance by clicking on the gear-shaped button in the upper-right corner.",
          ],
          [
            "Enter the amount of tokens to exchange",
            "Specify the quantity of tokens you want to exchange.",
          ],
          [
            "Click Swap and confirm transaction",
            "Click on the Swap button and confirm the transaction using your Web3 wallet.",
          ],
          [
            "Approve spending limit for ERC-20 tokens",
            "If you are exchanging an ERC-20 token, click on the Approve button and approve the spending limit using your Web3 wallet before proceeding with the swap.",
          ],
        ],
        taskDesc: "Basic swaps on SpaceSwap",
      },
      task16: {
        title: "Swap any token",
        exp: 10,
        source: "Syncswap.xyz",
        link: "https://syncswap.xyz/",
        taskGuide: [
          ["Connect your Web3 wallet", "Connect your Web3 wallet."],
          [
            "Select a token to exchange",
            "Choose the token you want to exchange from the upper tab.",
          ],
          [
            "Select a token to receive",
            "Choose the token you want to receive from the tab below.",
          ],
          [
            "Adjust slippage tolerance and gas price",
            "Optionally, modify the slippage tolerance and gas price by clicking on the gear-shaped button above the swap tabs.",
          ],
          [
            "Enter the amount of tokens",
            "Specify the quantity of tokens you want to exchange.",
          ],
          [
            "Click Swap and confirm transaction",
            "Click on the Swap button and confirm the transaction through your Web3 wallet.",
          ],
          [
            "Approve spending limit (for ERC-20 tokens)",
            "If you are exchanging an ERC-20 token, click on the Approve button and approve the spending limit through your Web3 wallet before proceeding with the swap.",
          ],
        ],
        taskDesc: "Basic swaps on Syncswap",
      },
    },
  },
  journey2: {
    nick: "Journey Two",
    title: "Advanced swaps, LP, Leveraged Trading",
    journeyDesc: [
      "In the Journey Two we invite you to do more advanced actions on the zkSync ecosystem protocols (currently Multichain, Onchain Trade, Mintsquare, Nexon Finance, SpaceSwap and Unidex). The actions available are liquidity provision, leveraged trading, collateral supliment, NFT buying.",
      "1. Liquidity provision: A liquidity pool is a pair of tokens, where users deposit equal values of both tokens to create a market for those tokens. These pools enable trading between the token pairs without the need for an order book or a centralized counterparty. There are multiple benefits associated with liquidity provision, for example, you can collect Liquidity Provider fees.",
      "2. Leveraged trading: kind of trading which enables you to trade with loaned capital, increasing your position size.",
      "3. Collateral suppliment: some DeFi protocols allow you to lock some of your assets on their platforms, using it as a collateral, and take a loan, secured by the collateral.",
      "4. NFT buying: You can buy and sell various NFTs on NFT marketplaces.",
    ],
    tasks: {
      task21: {
        title: "Buy MUTE",
        exp: 30,
        source: "Mute.io",
        link: "https://app.mute.io/swap",
        taskGuide: [
          [
            "Connect Web3 wallet",
            "Connect your Web3 wallet to the exchange platform.",
          ],
          [
            "Select a token to exchange",
            "Choose the token you want to exchange in the Send tab.",
          ],
          [
            "Select MUTE token",
            "Choose the MUTE token in the Get tab for the exchange.",
          ],
          [
            "Adjust slippage tolerance (optional)",
            "Click on the gear-shaped button above the Send tab to adjust the slippage tolerance.",
          ],
          [
            "Enter the amount of tokens",
            "Specify the amount of tokens you want to exchange.",
          ],
          [
            "Click Swap and confirm transaction",
            "Click on the Swap button and confirm the transaction using your Web3 wallet.",
          ],
          [
            "Approve spending limit (ERC-20 tokens)",
            "If exchanging an ERC-20 token, click on the Approve button and approve the spending limit through your Web3 wallet.",
          ],
        ],
        taskDesc: "Buy MUTE - you will need it later!",
      },
      task22: {
        title: "Buy SPACE",
        exp: 30,
        source: "Spacefi.io",
        link: "https://swap-zksync.spacefi.io/#/swap",
        taskGuide: [
          [
            "Connect Web3 wallet.",
            "Connect your Web3 wallet to the exchange platform.",
          ],
          [
            "Select a token to exchange.",
            "Choose the token you want to exchange in the From tab.",
          ],
          ["Select SPACE token.", "Choose SPACE token in the To tab."],
          [
            "Adjust slippage tolerance (optional).",
            "Click on the gear-shaped button to adjust slippage tolerance.",
          ],
          [
            "Enter the amount of tokens.",
            "Specify the amount of tokens you want to exchange.",
          ],
          [
            "Click Swap and confirm transaction.",
            "Execute the swap and confirm the transaction through your Web3 wallet.",
          ],
          [
            "Approve spending limit (ERC-20 token).",
            "If exchanging an ERC-20 token, click on Approve button and approve spending limit through your Web3 wallet before swapping.",
          ],
        ],
        taskDesc: "Buy SPACE - you will need it later!",
      },
      task23: {
        title: "Add any amount of any token to any pool",
        exp: 30,
        source: "Multichain.org",
        link: "https://app.multichain.org/#/pool",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet."],
          [
            "Choose Pool",
            "Choose any pool (ETH, USDC, xcRMRK, Array, iUSD, and iZi).",
          ],
          ["Click Add Button", "Click the Add button."],
          ["Input Token Amount", "Input the amount of tokens you want to add."],
          [
            "Add ETH and Confirm Transaction",
            "If you selected ETH, click Add and confirm the transaction in your Web3 wallet.",
          ],
          [
            "Approve and Add Other Token",
            "If you selected any other token, first click on Approve, confirm in your Web3 wallet, then click on Add and confirm in the wallet.",
          ],
        ],
        taskDesc: "Add liquidity to Multichain",
      },
      task24: {
        title: "Add liquidity to any pool",
        exp: 30,
        source: "Onchain.trade",
        link: "https://onchain.trade/#/pools",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet to the platform."],
          [
            "Choose Pool and Deposit",
            "Select any pool and click on the + deposit button.",
          ],
          [
            "Input Token Amount",
            "Enter the desired amount of tokens you want to add to the pool.",
          ],
          [
            "Click Add Liquidity",
            "Click on the 'Add liquidity' button to initiate the transaction.",
          ],
          [
            "Confirm Transaction",
            "Confirm the transaction in your Web3 wallet.",
          ],
        ],
        taskDesc: "Add liquidity to Onchain",
      },
      task25: {
        title: "Buy any existing NFT",
        exp: 30,
        source: "Mintsquare.io",
        link: "https://mintsquare.io/collections/zksync",
        taskGuide: [
          [
            "Connect Web3 wallet",
            "Enable your Web3 wallet and connect it to the platform.",
          ],
          [
            "Scroll to view collections",
            "Scroll down the page to view the available collections.",
          ],
          [
            "Open a collection",
            "Click on any collection that interests you to open its page.",
          ],
          [
            "Select an NFT",
            "Hover your mouse over the NFT you like to reveal the Add to Cart button.",
          ],
          [
            "Add to cart",
            "Click on the Add to Cart button to add the NFT to your cart.",
          ],
          [
            "Proceed to purchase",
            "Click on the cart icon or navigate to the cart page to proceed with the purchase.",
          ],
          [
            "Confirm purchase with Web3 wallet",
            "Review the details of the NFT purchase and click Purchase to confirm the transaction using your Web3 wallet.",
          ],
          [
            "Consider NFT prices",
            "Be aware of the NFT prices, as they may be unusually high. Make sure it fits within your budget before completing the purchase.",
          ],
        ],
        taskDesc: "Buy any NFT!",
      },
      task26: {
        title: "Approve 'use as collateral' ",
        exp: 30,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
        taskGuide: [
          ["Connect Web3 wallet", "Connect your Web3 wallet"],
          [
            "Scroll and click Supply",
            "Find ETH and USDC tabs and click on the Supply button",
          ],
          [
            "Select Use as collateral",
            "In the popup, click on the circle button for Use as collateral",
          ],
          [
            "Confirm transaction",
            "Confirm the transaction in your Web3 wallet to enable using the asset as collateral",
          ],
        ],
        taskDesc: "The first step to use Nexon - approve collateral",
      },
      task27: {
        title: "Supply USDC or ETH",
        exp: 30,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
        taskGuide: [
          [
            "Connect your Web3 wallet.",
            "Connect your Web3 wallet to the platform.",
          ],
          [
            "Scroll down to ETH and USDC tabs.",
            "Find the ETH and USDC tabs by scrolling down.",
          ],
          [
            "Click on the Supply button.",
            "Select the Supply option for the chosen token.",
          ],
          [
            "Enter the desired token amount.",
            "Input the quantity of tokens you want to supply.",
          ],
          [
            "Press the Supply button.",
            "Click on the Supply button to proceed.",
          ],
          [
            "Confirm the transaction in your Web3 wallet.",
            "Authorize and approve the transaction in your Web3 wallet.",
          ],
        ],
        taskDesc: "Supply on Nexon",
      },
      task28: {
        title: "Add liquidity to any pool",
        exp: 30,
        source: "Spacefi.io",
        link: "https://swap-zksync.spacefi.io/#/pool",
        taskGuide: [
          ["Connect your Web3 wallet", "Access your Web3 wallet."],
          [
            "Click on Add liquidity",
            "Locate and click the Add liquidity option within the Pool tab.",
          ],
          [
            "Select TWO tokens",
            "Choose the two tokens you wish to add from the dropdown list.",
          ],
          [
            "Enter the amount of tokens",
            "Input the quantity of tokens you want to add, making sure they have equal value.",
          ],
          [
            "Click on Approve button",
            "Click on the Approve button to authorize the transaction.",
          ],
          [
            "Confirm the transaction",
            "Approve the transaction on your Web3 wallet.",
          ],
          [
            "Press Supply button",
            "Click on the Supply button to complete the process.",
          ],
          [
            "Confirm the transaction again",
            "Approve the transaction in your Web3 wallet once more.",
          ],
        ],
        taskDesc: "Add liquidity to SpaceSwap",
      },
      task29: {
        title: "Open a long or short position",
        exp: 30,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/trade",
        taskGuide: [
          [
            "Connect your Web3 wallet",
            "Connect your Web3 wallet to the trading platform.",
          ],
          [
            "Select pair",
            "Choose the trading pair you want to trade on the left side of the window, for example, NEAR-USD.",
          ],
          [
            "Input trade amount",
            "Enter the amount of USDC you want to use for the trade in the Size (USDC) tab.",
          ],
          [
            "Adjust leverage",
            "Use the slider below the tab to adjust the leverage, for example, switch it to 10x.",
          ],
          [
            "Click Long or Short",
            "Click on the Long or Short button, depending on your trading strategy.",
          ],
          [
            "Confirm order",
            "Click on the Confirm order button in the pop-up window.",
          ],
          [
            "Confirm with Web3 wallet",
            "Confirm the order using your Web3 wallet. Your trade is now open and active",
          ],
          [
            "Close your trade",
            "Immediately proceed to the next step to close your trade.",
          ],
        ],
        taskDesc: "Trade with leverage on Unidex - start",
      },
      task201: {
        title: "Close your position",
        exp: 30,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/trade",
        taskGuide: [
          [
            "Locate Close Trade Tab",
            "Find the Close Trade tab in the main dashboard.",
          ],
          [
            "Click on the X Button",
            "Click on the X button located behind the Close Trade tab.",
          ],
          [
            "Input Size to Close",
            "Enter the size of the trade you want to close. If you want to close the entire trade, enter the full position size.",
          ],
          [
            "Press Close Position Button",
            "Click on the Close Position button to initiate the trade closure.",
          ],
          [
            "Confirm in Web3 Wallet",
            "Confirm the trade closure in your Web3 wallet when prompted.",
          ],
        ],
        taskDesc: "Trade with leverage on Unidex - finish",
      },
      task202: {
        title: "Add liquidity to USDC pool",
        exp: 30,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/pool",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet to the platform."],
          [
            "Enter deposit amount",
            "Input the desired amount of USDC you wish to add in the Deposit amount tab.",
          ],
          [
            "Click approve",
            "Click on the Approve button to initiate the approval process.",
          ],
          [
            "Confirm spending limit",
            "Confirm the spending limit for the transaction in your Web3 wallet.",
          ],
          [
            "Click Deposit",
            "Click on the Deposit button to begin the deposit process.",
          ],
          [
            "Confirm deposit",
            "Confirm the deposit transaction in your Web3 wallet.",
          ],
        ],
        taskDesc: "Add liquidity to Unidex",
      },
      task203: {
        title: "Lock any amount of token in DAO for any amount of time",
        exp: 30,
        source: "Mute.io",
        link: "https://app.mute.io/dao",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet to the platform."],
          [
            "Input MUTE Tokens",
            "Enter the desired amount of MUTE tokens in the Lock tab.",
          ],
          [
            "Adjust Lock Period",
            "Use the slider below to adjust the lock period according to your preference.",
          ],
          [
            "Click Approve",
            "Click the Approve button to authorize spending your MUTE tokens.",
          ],
          [
            "Confirm in Web3 Wallet",
            "Confirm the transaction in your Web3 wallet when prompted.",
          ],
          [
            "Click Lock",
            "Click the Lock button to initiate the locking process.",
          ],
          [
            "Confirm Transaction",
            "Confirm the transaction in your Web3 wallet to complete the locking process.",
          ],
        ],
        taskDesc: "Enter Mute DAO by locking MUTE",
      },
    },
  },
  journey3: {
    nick: "Journey Three",
    title: "Lend and Borrow, Bonds, Remove liquidity and more",
    journeyDesc: [
      "In the Journey Three we invite you to continue with advanced actions on the zkSync ecosystem. You will be able to try using DeFi bonds, borrowing funds and you will also be tasked with removing liquidity you added in Journey Two!",
    ],
    tasks: {
      task31: {
        title: "Add liquidity to MUTE/WETH pool",
        exp: 50,
        source: "Mute.io",
        link: "https://app.mute.io/pool",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet to the platform."],
          [
            "Select MUTE/WETH Pool",
            "Choose the MUTE/WETH pool from the list of available pools.",
          ],
          [
            "Click on Manage",
            "Locate the Manage button for the selected pool and click on it.",
          ],
          [
            "Input Amount",
            "Enter the desired amounts of MUTE and ETH you want to lock in the pool.",
          ],
          [
            "Click Approve",
            "Click on the Approve button to grant permission for spending the specified amounts.",
          ],
          [
            "Confirm in Web3 Wallet",
            "Follow the prompts in your Web3 wallet to confirm the approval transaction.",
          ],
          [
            "Click on Deposit",
            "Click on the Deposit button to initiate the deposit process.",
          ],
          [
            "Confirm in Web3 Wallet",
            "Confirm the transaction in your Web3 wallet to complete the deposit.",
          ],
          [
            "Adjust Slippage Tolerance (Optional)",
            "If desired, click on the cog-shaped button to access slippage tolerance settings.",
          ],
        ],
        taskDesc: "Add liquidity to Mute",
      },
      task32: {
        title: "Redeem any amount of token from DAO",
        exp: 50,
        source: "Mute.io",
        link: "https://app.mute.io/dao",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet to the platform."],
          ["Go to Redeem Tab", "Navigate to the Redeem tab on the platform."],
          [
            "Check Lock Period",
            "Verify if the lock period for your MUTE tokens has expired.",
          ],
          [
            "Redeem MUTE Tokens",
            "If the lock period has expired, click on the amount of MUTE tokens you want to redeem.",
          ],
          [
            "Confirm Operation",
            "Confirm the redemption operation through your connected Web3 wallet.",
          ],
        ],
        taskDesc: "Leave Mute DAO by unlocking MUTE",
      },
      task33: {
        title: "Convert SPACE to xSPACE",
        exp: 50,
        source: "Spacefi.io",
        link: "https://app.spacefi.io/#/xSPACE",
        taskGuide: [
          ["Connect Web3 wallet", "Connect your Web3 wallet to the platform."],
          [
            "Input conversion amount",
            "Enter the amount of SPACE you want to convert to xSPACE.",
          ],
          [
            "Note 30-day wait",
            "Keep in mind that you will need to wait 30 days before you can convert your xSPACE back to SPACE without any penalty.",
          ],
          [
            "Optional instant conversion",
            "You can choose to convert back instantly, but 50% of your converted SPACE will be burned.",
          ],
          [
            "Click Convert and approve",
            "Click on the Convert button and approve the transaction through your Web3 wallet.",
          ],
          [
            "Confirm transaction",
            "Confirm the transaction to complete the conversion process.",
          ],
        ],
        taskDesc: "Acquire xSPACE, SpaceSwap governance token",
      },
      task34: {
        title: "Stake your xSPACE",
        exp: 50,
        source: "Spacefi.io",
        link: "https://app.spacefi.io/#/farm",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet to the platform."],
          [
            "Scroll to Single Pool Tab",
            "Scroll down to locate the Single Pool tab on the platform.",
          ],
          [
            "Enable Contract",
            "Click on the 'Enable Contract' button in the Single Pool tab.",
          ],
          [
            "Confirm Transaction",
            "Confirm the transaction using your Web3 wallet when prompted.",
          ],
          [
            "Click on Stake",
            "Click on the 'Stake' button in the Single Pool tab. A pop-up will appear with options for staking.",
          ],
          [
            "Input Stake Amount",
            "Enter the amount of xSPACE you wish to stake in the provided field.",
          ],
          [
            "Confirm Stake",
            "Click on the 'Confirm' button to proceed with the stake.",
          ],
          [
            "Approve Transaction",
            "Approve the transaction using your Web3 wallet when prompted.",
          ],
        ],
        taskDesc: "Farm on SpaceSwap",
      },
      task35: {
        title: "Unbond xSPACE",
        exp: 50,
        source: "Spacefi.io",
        link: "https://app.spacefi.io/#/xSPACE",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet."],
          [
            "Scroll to Unbonding Tab",
            "Scroll down to the Unbonding tab on the platform.",
          ],
          [
            "Click on Unbond xSpace",
            "Click on the 'Unbond xSpace' button within the Unbonding tab.",
          ],
          [
            "Input Unbonding Details",
            "In the pop-up window, enter the amount of xSpace you want to unbond and select the unbond duration.",
          ],
          [
            "Choose Instant Unbonding (Optional)",
            "If you want instant unbonding, select the left option, which will burn 50% of your SPACE.",
          ],
          [
            "Choose 30-Day Unbonding (Optional)",
            "Alternatively, choose the right option to unbond 100% of your SPACE over a period of 30 days.",
          ],
          [
            "Click Unbond",
            "Click the 'Unbond' button to initiate the unbonding process.",
          ],
          [
            "Approve Transaction",
            "Approve the transaction using your Web3 wallet when prompted.",
          ],
        ],
        taskDesc: "Leave SpaceSwap",
      },
      task36: {
        title: "Borrow USDC or ETH",
        exp: 50,
        source: "Nexon.finance",
        link: "https://app.nexon.finance",
        taskGuide: [
          [
            "Connect Web3 wallet",
            "Access your Web3 wallet to interact with the protocol.",
          ],
          [
            "Select asset to borrow",
            "First you need to supply some assets to the protocol (you can do it in Journey Two), if so choose between USDC or ETH as the asset you want to borrow.",
          ],
          [
            "Click on Borrow tab",
            "Open the borrowing interface for the selected asset.",
          ],
          [
            "Input borrow amount",
            "Specify the desired amount you want to borrow. You can use Safe max button to quickly borrow 50% of your allowed amount",
          ],
          ["Click on Borrow button", "Initiate the borrowing transaction."],
          [
            "Confirm transaction",
            "Follow the prompts in your Web3 wallet to confirm the transaction.",
          ],
        ],
        taskDesc: "Borrow on Nexon",
      },
      task37: {
        title: "Repay USDC or ETH",
        exp: 50,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet to the platform."],
          [
            "Select Borrowed Asset",
            "Choose the asset you have borrowed, either USDC or ETH.",
          ],
          ["Open Repay Tab", "In the pop-up window, click on the Repay tab."],
          [
            "Input Repayment Amount",
            "Enter the amount you want to repay. You can choose to repay the whole amount by clicking on 100%.",
          ],
          [
            "Click Repay",
            "Click on the Repay button to initiate the repayment process.",
          ],
          [
            "Confirm Transaction",
            "Confirm the transaction in your Web3 wallet when prompted.",
          ],
        ],
        taskDesc: "Repay your debt on Nexon",
      },
      task38: {
        title: "Withdraw USDC or ETH",
        exp: 50,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet."],
          [
            "Select Asset",
            "Choose the asset you want to withdraw, either USDC or ETH.",
          ],
          [
            "Click on Withdraw",
            "In the opening pop-up, click on the Withdraw tab.",
          ],
          [
            "Enter Withdrawal Amount",
            "Input the amount you want to withdraw. You can choose to withdraw the entire amount by clicking on 100%.",
          ],
          [
            "Click Withdraw",
            "Click on the Withdraw button to initiate the withdrawal process.",
          ],
          [
            "Confirm Transaction",
            "Confirm the transaction in your Web3 wallet to authorize the withdrawal.",
          ],
        ],
        taskDesc: "Leave Nexon",
      },
      task39: {
        title: "Remove any amount of any token from any pool",
        exp: 50,
        source: "Multichain.org",
        link: "https://app.multichain.org/#/pool",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet."],
          [
            "Select Pool",
            "Choose the pool where you have previously supplied liquidity.",
          ],
          [
            "Check Available Liquidity",
            "Look for the Your Pool Share line to see your available liquidity.",
          ],
          ["Click on Remove", "Locate and click on the Remove button."],
          [
            "Input Removal Amount",
            "Enter the amount of liquidity you want to remove from the pool.",
          ],
          [
            "Click Remove Liquidity",
            "Click on the Remove liquidity button to initiate the removal process.",
          ],
          [
            "Confirm Transaction",
            "Use your Web3 wallet to confirm the transaction and initiate the removal process.",
          ],
        ],
        taskDesc: "Leave Multichain pool",
      },
      task301: {
        title: "Remove liquidity from the pool",
        exp: 50,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/pool",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet."],
          ["Select Pool", "Click on the pool you supplied the liquidity into."],
          [
            "Input Withdrawal Amount",
            "A new tab will open, input the amount you want to remove in the right (or simply click MAX).",
          ],
          [
            "Click Withdraw Button",
            "Click the Withdraw button to initiate the liquidity removal process.",
          ],
          [
            "Confirm Transaction",
            "Confirm the transaction in your Web3 Wallet.",
          ],
          [
            "Collect Rewards (Optional)",
            "Collect any rewards you have received for your liquidity by pressing on the Collect button and confirming with your wallet.",
          ],
        ],
        taskDesc: "Leave Unidex pool",
      },
      task302: {
        title: "Remove liquidity from any pool",
        exp: 50,
        source: "Syncswap.xyz",
        link: "https://syncswap.xyz/pools",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet to the platform."],
          [
            "Open Pool Window",
            "Click on the pool where you have deposited liquidity. A new window will open.",
          ],
          [
            "Select Withdraw",
            "Within the pool window, locate and select the 'Withdraw' option.",
          ],
          [
            "Choose Withdrawal Amount",
            "Specify the number of tokens you want to withdraw from the pool.",
          ],
          [
            "Select Withdrawal Type",
            "Choose between withdrawing both tokens (Balanced option) or only one of them (Single option).",
          ],
          [
            "Click on 'Permit LP Token' button",
            "Authorize the withdrawal by clicking on the 'Permit LP Token' button.",
          ],
          [
            "Confirm Action in Web3 Wallet",
            "In the connected Web3 wallet, confirm the withdrawal action.",
          ],
          [
            "Click on 'Withdraw Liquidity'",
            "Return to the pool window and click on the 'Withdraw liquidity' button.",
          ],
          [
            "Confirm Withdrawal Again",
            "In the connected Web3 wallet, confirm the withdrawal once more.",
          ],
        ],
        taskDesc: "Leave Syncswap pool",
      },
    },
  },
  journeyEnd: {
    nick: "Journey End",
    title: "Bridges",
    journeyDesc: [
      "Here you can learn to withdraw your assets from zkSync Era mainnet back Ethereum mainnet or other chains.",
    ],
    tasks: {
      task01: {
        title: "Bridge any amount of ETH from zkSync Era to any chain",
        exp: 110,
        source: "Orbiter.finance",
        link: "https://www.orbiter.finance",
        taskGuide: [
          ["Connect Web3 Wallet", "Connect your Web3 wallet."],
          [
            "Select Token",
            "Choose the token you wish to withdraw from zkSync (ETH, USDC, USDT, DAI).",
          ],
          [
            "Select Destination Chain",
            "From the 'To' tab, select the desired destination chain from the available list.",
          ],
          [
            "Enter Token Amount",
            "Specify the amount of tokens you want to bridge to the selected chain.",
          ],
          [
            "Click Send and Confirm",
            "Click on the 'Send' button and confirm the transaction using your wallet.",
          ],
          [
            "Wait for Confirmation",
            "Wait for the transaction to be confirmed by the blockchain network.",
          ],
          [
            "Check Account Balance",
            "Verify that the tokens have appeared in your account on the destination chain.",
          ],
        ],
        taskDesc: "Leave zkSync with Orbiter",
      },
      task02: {
        title: "Bridge any token from zkSync ERA",
        exp: 110,
        source: "Multichain.org",
        link: "https://app.multichain.org/#/router ",
        taskGuide: [
          ["Connect Web3 wallet", "Connect your Web3 wallet."],
          [
            "Select token to withdraw",
            "Choose the token you want to withdraw from zkSync.",
          ],
          [
            "Select destination chain",
            "From the 'To' tab, select the destination chain where you want to send the tokens.",
          ],
          [
            "Enter token amount",
            "Enter the amount of tokens you want to bridge or transfer.",
          ],
          [
            "Click Swap and confirm",
            "Click on the 'Swap' button and confirm the transaction in your Web3 wallet.",
          ],
          [
            "Wait for confirmation",
            "Wait for the transaction to be confirmed on the blockchain network.",
          ],
          [
            "Tokens appear in destination account",
            "After confirmation, the tokens will appear in your account on the destination chain.",
          ],
        ],

        taskDesc: "Leave zkSync with Multichain",
      },
    },
  },
};

export const jsonString = JSON.stringify(data);
console.log(jsonString);
