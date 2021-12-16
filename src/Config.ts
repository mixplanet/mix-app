const TESTNET = false;

export default {

    isTestnet: TESTNET,
    chainId: TESTNET ? 1001 : 8217,

    apiHost: "api.mix.info",
    admin: "0x5d3C6E36538f485C3483B1C0d3e27a3416E16217",

    contracts: TESTNET ? {
        // Testnet
        Mate: "0xCa7894953066B8C0a05e123454f586CDe4B42Fa7",

        Mix: "0xAe0a2e1DA2469FFdf8308160eE64Fe3656d9D9D0",
        MixEmitter: "0x26339a890A5B2AD1B9ca31c073a37112BB9f21a3",
        DevFundToken: "0xf3635EF377D690D034530ca78EdC9c1028188896",
        DevFundPool: "0x43793E818aC2ba1De69C279d571D3e8d7d9Bfb15",
        MatesPool: "0x6f49D139359D0c7Bf44Df4520494A6ABB39434dD",
        Booth: "0xb45fC0Ff500cFb4deF3b5148B597884B797fF4Fd",
        BurnPool: "0xC7995B29d95006f737861DC5288920FAF16e5Ff7",
        Turntables: "0xB1EFA1E4b2E666cAB233E2241B9DA11d9EA97504",
        TurntableExtras: "0xE33B45955Ff4C2af63cAF5a2f0f5e0ff3b86038B",
        MatesListeners: "0x03E0545C837BFa5Ab9A1F950c54784ee5F0EB53D",
        KlayMIXListeners: "0x781A91157612DF86959e400bCb27FdfeECCe081D",
        KSPMIXListeners: "0x333Ba1e532c95C6731aa305505B24CAD9c13F013",

        // partners
        CasesByKate: "",
        CasesByKatePool: "",
        AnimalsPunksV2: "",
        AnimalsPunksV2Pool: "",
        PixelCat: "",
        PixelCatPool: "",

    } : {

        Mix: "0xDd483a970a7A7FeF2B223C3510fAc852799a88BF",
        MixEmitter: "0x0281dDafc6718b2B60bda163550f2F5F59D92C09",
        DevFundToken: "0x6a7b98B2c69AE29a14857E033D16A714A3206B89",
        DevFundPool: "0x91471263590FB259bf6208ba414bf17B0126Bbb7",
        MatesPool: "0xbc9C42267037786f42831d4f36D629A3888c9b4a",
        Booth: "0x8a654D485AaEed652500B5F18A7e4bb58Ac8ef9F",
        BurnPool: "0x4b1e4c30B12B8564686FF30F608a18Abfbd7adBc",
        Turntables: "0xFe605356e99e8662Da61dF32e237D03BEd6A8D54",
        TurntableExtras: "0xA726F183d84C0f2645FF138CDC572b0d0D0D8b93",
        MatesListeners: "0x97245cDC80F1Ca50CD59f37030cdA00805A2dc54",
        KlayMIXListeners: "0xe5C799A39450F1FFCaDf768b229DB9e13F23bb5E",
        KSPMIXListeners: "0x1D3bC75B6D33C5b5DE7D734686bb5404C6454a4d",

        KlayMIXLPToken: "0xa50cec0216c1cee6f90c7d5359444d46315279bd",
        KSPMIXLPToken: "0xade6684a81a205e4bfc544b51cca448c458c0961",

        Klayswap: "0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654",
        MixPriceEstimator: "0x637ce9D4B6cb790e81110f1a5D9869E32b8Fbde2",

        // partners
        CasesByKate: "0x0af3f3fe9e822b7a740ca45ce170340b2da6f4cc",
        CasesByKatePool: "0xAF7ca190179d54860484f0A3263e0B7E8B13b9C7",
        AnimalsPunksV2: "0x590744cb8cf1a698d7db509b52bf209e3cccb8e0",
        AnimalsPunksV2Pool: "0xF1A72599E9c57BfE4B62A09052e14b67B54e3037",
        PixelCat: "0xCE8905B85119928E6c828E5CB4E2a9fd2e128bf9",
        PixelCatPool: "0x4eb6baE0dcf63f52c951ABBCa292F5293C757F93",
    }
};
