export const CONTRACT_INSTANCE_ABI = [
  { inputs: [], name: "NoActiveStream", type: "error" },
  { inputs: [], name: "NotEnoughFunds", type: "error" },
  { inputs: [], name: "UnAuthorized", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "AddEmployee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_result",
        type: "string",
      },
    ],
    name: "ClaimDone",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_whoCall",
        type: "address",
      },
    ],
    name: "Liqudation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "rate", type: "uint256" },
          { internalType: "uint256", name: "startAt", type: "uint256" },
          { internalType: "bool", name: "active", type: "bool" },
          { internalType: "uint32", name: "streamId", type: "uint32" },
        ],
        indexed: false,
        internalType: "struct StreamLogic.Stream",
        name: "stream",
        type: "tuple",
      },
    ],
    name: "StreamCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address", name: "who", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenEarned",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endsAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
    ],
    name: "StreamFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address", name: "who", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenEarned",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "WithdrawEmpl",
    type: "event",
  },
  {
    inputs: [],
    name: "CR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EFT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OutsourceID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_totalDebt",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "activeStreamAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_who", type: "address" },
      { internalType: "uint256", name: "_rate", type: "uint256" },
    ],
    name: "addEmployee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "addrListDebt",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "administrator",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "allEmployee",
    outputs: [
      { internalType: "address", name: "who", type: "address" },
      { internalType: "uint256", name: "flowRate", type: "uint256" },
      { internalType: "bool", name: "worker", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "allEmployeeList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "amountActiveStreams",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "amountEmployee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "avalibleBalanceContract",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "balanceContract",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_rate", type: "uint256" }],
    name: "calculateETF",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newAdmin", type: "address" }],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_id", type: "uint256" },
      { internalType: "string", name: "linkToResult", type: "string" },
    ],
    name: "claimFinish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_who", type: "address" },
      { internalType: "string", name: "_task", type: "string" },
      { internalType: "uint256", name: "_wage", type: "uint256" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
      { internalType: "uint8", name: "_bufferOn", type: "uint8" },
    ],
    name: "createOutsourceJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "currentBal",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentBalanceContract",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_who", type: "address" }],
    name: "currentBalanceEmployee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_who", type: "address" }],
    name: "currentBalanceLiquidation",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "debtToEmployee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_who", type: "address" }],
    name: "deleteEmployee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_who", type: "address" }],
    name: "finish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finishLiqudation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "finishOutsource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fundsLocked",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDecimals",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "getStream",
    outputs: [
      { internalType: "uint256", name: "rate", type: "uint256" },
      { internalType: "uint256", name: "startAt", type: "uint256" },
      { internalType: "bool", name: "active", type: "bool" },
      { internalType: "uint32", name: "streamId", type: "uint32" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_who", type: "address" }],
    name: "getTokenLimitToStreamOne",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "address", name: "_owner", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liqudation",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "listOutsource",
    outputs: [
      { internalType: "string", name: "task", type: "string" },
      { internalType: "address", name: "who", type: "address" },
      { internalType: "uint256", name: "startAt", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint256", name: "wage", type: "uint256" },
      { internalType: "uint256", name: "amountWithdraw", type: "uint256" },
      { internalType: "uint8", name: "bufferPercentage", type: "uint8" },
      {
        internalType: "enum OutsourceTask.Status",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_who", type: "address" },
      { internalType: "uint256", name: "_rate", type: "uint256" },
    ],
    name: "modifyRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "sendOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_newLimit", type: "uint256" }],
    name: "setHLStartStream",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_token", type: "address" }],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_who", type: "address" }],
    name: "start",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "supportFlowaryInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenLimitMaxHoursPerPerson",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawEmployee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "withdrawFreelancer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];