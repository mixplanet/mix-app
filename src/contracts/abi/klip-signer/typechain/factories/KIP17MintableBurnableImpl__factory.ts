/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KIP17MintableBurnableImpl,
  KIP17MintableBurnableImplInterface,
} from "../KIP17MintableBurnableImpl";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mintWithTokenURI",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600481526020017f54657374000000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f54455354000000000000000000000000000000000000000000000000000000008152508181620000986301ffc9a760e01b6200016f60201b60201c565b620000b06380ac58cd60e01b6200016f60201b60201c565b620000c863780e9d6360e01b6200016f60201b60201c565b8151620000dd906009906020850190620003b7565b508051620000f390600a906020840190620003b7565b506200010c635b5e139f60e01b6200016f60201b60201c565b5050505062000121336200023e60201b60201c565b6200013963eab83e2060e01b6200016f60201b60201c565b6200015163fac27f4660e01b6200016f60201b60201c565b620001696342966c6860e01b6200016f60201b60201c565b6200045c565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200020157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b6200025981600c6200029060201b6200194e1790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b620002a282826200033460201b60201c565b156200030f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b03821662000397576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620025b36022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003fa57805160ff19168380011785556200042a565b828001600101855582156200042a579182015b828111156200042a5782518255916020019190600101906200040d565b50620004389291506200043c565b5090565b6200045991905b8082111562000438576000815560010162000443565b90565b612147806200046c6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806350bb4e7f116100b8578063986502751161007c57806398650275146104aa578063a22cb465146104b2578063aa271e1a146104e0578063b88d4fde14610506578063c87b56dd146105cc578063e985e9c5146105e957610142565b806350bb4e7f1461037e5780636352211e1461043957806370a082311461045657806395d89b411461047c578063983b2d561461048457610142565b806323b872dd1161010a57806323b872dd146102805780632f745c59146102b657806340c10f19146102e257806342842e0e1461030e57806342966c68146103445780634f6ccce71461036157610142565b806301ffc9a71461014757806306fdde0314610182578063081812fc146101ff578063095ea7b31461023857806318160ddd14610266575b600080fd5b61016e6004803603602081101561015d57600080fd5b50356001600160e01b031916610617565b604080519115158252519081900360200190f35b61018a610636565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101c45781810151838201526020016101ac565b50505050905090810190601f1680156101f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61021c6004803603602081101561021557600080fd5b50356106cd565b604080516001600160a01b039092168252519081900360200190f35b6102646004803603604081101561024e57600080fd5b506001600160a01b038135169060200135610732565b005b61026e61085f565b60408051918252519081900360200190f35b6102646004803603606081101561029657600080fd5b506001600160a01b03813581169160208101359091169060400135610865565b61026e600480360360408110156102cc57600080fd5b506001600160a01b0381351690602001356108bd565b61016e600480360360408110156102f857600080fd5b506001600160a01b03813516906020013561093f565b6102646004803603606081101561032457600080fd5b506001600160a01b0381358116916020810135909116906040013561099b565b6102646004803603602081101561035a57600080fd5b50356109b6565b61026e6004803603602081101561037757600080fd5b5035610a0a565b61016e6004803603606081101561039457600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156103c457600080fd5b8201836020820111156103d657600080fd5b803590602001918460018302840111640100000000831117156103f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a73945050505050565b61021c6004803603602081101561044f57600080fd5b5035610ada565b61026e6004803603602081101561046c57600080fd5b50356001600160a01b0316610b37565b61018a610ba2565b6102646004803603602081101561049a57600080fd5b50356001600160a01b0316610c03565b610264610c53565b610264600480360360408110156104c857600080fd5b506001600160a01b0381351690602001351515610c5e565b61016e600480360360208110156104f657600080fd5b50356001600160a01b0316610d2d565b6102646004803603608081101561051c57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561055757600080fd5b82018360208201111561056957600080fd5b8035906020019184600183028401116401000000008311171561058b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d40945050505050565b61018a600480360360208110156105e257600080fd5b5035610d9b565b61016e600480360360408110156105ff57600080fd5b506001600160a01b0381358116916020013516610e83565b6001600160e01b03191660009081526020819052604090205460ff1690565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106c25780601f10610697576101008083540402835291602001916106c2565b820191906000526020600020905b8154815290600101906020018083116106a557829003601f168201915b505050505090505b90565b60006106d882610eb1565b61071657604051600160e51b62461bcd02815260040180806020018281038252602b81526020018061208f602b913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600061073d82610ada565b9050806001600160a01b0316836001600160a01b031614156107a95760408051600160e51b62461bcd02815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b03821614806107c557506107c58133610e83565b61080357604051600160e51b62461bcd0281526004018080602001828103825260378152602001806120ba6037913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60075490565b61086f3382610ece565b6108ad57604051600160e51b62461bcd028152600401808060200182810382526030815260200180611f3e6030913960400191505060405180910390fd5b6108b8838383610f75565b505050565b60006108c883610b37565b821061090857604051600160e51b62461bcd02815260040180806020018281038252602a815260200180611e70602a913960400191505060405180910390fd5b6001600160a01b038316600090815260056020526040902080548390811061092c57fe5b9060005260206000200154905092915050565b600061094a33610d2d565b61098857604051600160e51b62461bcd028152600401808060200182810382526030815260200180611e9a6030913960400191505060405180910390fd5b6109928383610f94565b50600192915050565b6108b883838360405180602001604052806000815250610d40565b6109c03382610ece565b6109fe57604051600160e51b62461bcd02815260040180806020018281038252602f815260200180611fc0602f913960400191505060405180910390fd5b610a0781610fb5565b50565b6000610a1461085f565b8210610a5457604051600160e51b62461bcd02815260040180806020018281038252602b815260200180612040602b913960400191505060405180910390fd5b60078281548110610a6157fe5b90600052602060002001549050919050565b6000610a7e33610d2d565b610abc57604051600160e51b62461bcd028152600401808060200182810382526030815260200180611e9a6030913960400191505060405180910390fd5b610ac68484610f94565b610ad08383610fc7565b5060019392505050565b6000818152600160205260408120546001600160a01b031680610b3157604051600160e51b62461bcd028152600401808060200182810382526028815260200180611eeb6028913960400191505060405180910390fd5b92915050565b60006001600160a01b038216610b8157604051600160e51b62461bcd028152600401808060200182810382526029815260200180611fef6029913960400191505060405180910390fd5b6001600160a01b0382166000908152600360205260409020610b319061102d565b600a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106c25780601f10610697576101008083540402835291602001916106c2565b610c0c33610d2d565b610c4a57604051600160e51b62461bcd028152600401808060200182810382526030815260200180611e9a6030913960400191505060405180910390fd5b610a0781611031565b610c5c33611079565b565b6001600160a01b038216331415610cbf5760408051600160e51b62461bcd02815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6000610b31600c8363ffffffff6110c116565b610d4b848484610865565b610d578484848461112b565b610d9557604051600160e51b62461bcd028152600401808060200182810382526030815260200180611f906030913960400191505060405180910390fd5b50505050565b6060610da682610eb1565b610de457604051600160e51b62461bcd02815260040180806020018281038252602e815260200180611e1f602e913960400191505060405180910390fd5b6000828152600b602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084529091830182828015610e775780601f10610e4c57610100808354040283529160200191610e77565b820191906000526020600020905b815481529060010190602001808311610e5a57829003601f168201915b50505050509050919050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b6000610ed982610eb1565b610f1757604051600160e51b62461bcd02815260040180806020018281038252602b8152602001806120f1602b913960400191505060405180910390fd5b6000610f2283610ada565b9050806001600160a01b0316846001600160a01b03161480610f5d5750836001600160a01b0316610f52846106cd565b6001600160a01b0316145b80610f6d5750610f6d8185610e83565b949350505050565b610f8083838361150e565b610f8a8382611658565b6108b8828261174d565b610f9e828261178b565b610fa8828261174d565b610fb1816118c2565b5050565b610a07610fc182610ada565b82611906565b610fd082610eb1565b61100e57604051600160e51b62461bcd02815260040180806020018281038252602b815260200180611f13602b913960400191505060405180910390fd5b6000828152600b6020908152604090912082516108b892840190611d22565b5490565b611042600c8263ffffffff61194e16565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b61108a600c8263ffffffff6119d216565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b60006001600160a01b03821661110b57604051600160e51b62461bcd028152600401808060200182810382526022815260200180611f6e6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b6000806060611142866001600160a01b0316611a3c565b61115157600192505050610f6d565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111dd5781810151838201526020016111c5565b50505050905090810190601f16801561120a5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106112725780518252601f199092019160209182019101611253565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146112d4576040519150601f19603f3d011682016040523d82523d6000602084013e6112d9565b606091505b50805191935091501580159061131957508051600160e11b630a85bd0102906020808401919081101561130b57600080fd5b50516001600160e01b031916145b1561132957600192505050610f6d565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156113b557818101518382015260200161139d565b50505050905090810190601f1680156113e25780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b6020831061144a5780518252601f19909201916020918201910161142b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146114ac576040519150601f19603f3d011682016040523d82523d6000602084013e6114b1565b606091505b5080519193509150158015906114f157508051600160e01b636745782b0290602080840191908110156114e357600080fd5b50516001600160e01b031916145b1561150157600192505050610f6d565b5060009695505050505050565b826001600160a01b031661152182610ada565b6001600160a01b03161461156957604051600160e51b62461bcd0281526004018080602001828103825260288152602001806120186028913960400191505060405180910390fd5b6001600160a01b0382166115b157604051600160e51b62461bcd028152600401808060200182810382526023815260200180611e4d6023913960400191505060405180910390fd5b6115ba81611a42565b6001600160a01b03831660009081526003602052604090206115db90611a7d565b6001600160a01b03821660009081526003602052604090206115fc90611a94565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b03821660009081526005602052604081205461168290600163ffffffff611a9d16565b60008381526006602052604090205490915080821461171d576001600160a01b03841660009081526005602052604081208054849081106116bf57fe5b906000526020600020015490508060056000876001600160a01b03166001600160a01b0316815260200190815260200160002083815481106116fd57fe5b600091825260208083209091019290925591825260069052604090208190555b6001600160a01b0384166000908152600560205260409020805490611746906000198301611da0565b5050505050565b6001600160a01b0390911660009081526005602081815260408084208054868652600684529185208290559282526001810183559183529091200155565b6001600160a01b0382166117e95760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6117f281610eb1565b156118475760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b03871690811790915583526003909152902061188690611a94565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600780546000838152600860205260408120829055600182018355919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880155565b6119108282611ae6565b6000818152600b60205260409020546002600019610100600184161502019091160415610fb1576000818152600b60205260408120610fb191611dc4565b61195882826110c1565b156119ad5760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6119dc82826110c1565b611a1a57604051600160e51b62461bcd028152600401808060200182810382526021815260200180611eca6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b3b151590565b6000818152600260205260409020546001600160a01b031615610a0757600090815260026020526040902080546001600160a01b0319169055565b8054611a9090600163ffffffff611a9d16565b9055565b80546001019055565b6000611adf83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611b12565b9392505050565b611af08282611bac565b611afa8282611658565b600081815260066020526040812055610fb181611c86565b60008184841115611ba457604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b69578181015183820152602001611b51565b50505050905090810190601f168015611b965780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b816001600160a01b0316611bbf82610ada565b6001600160a01b031614611c0757604051600160e51b62461bcd02815260040180806020018281038252602481526020018061206b6024913960400191505060405180910390fd5b611c1081611a42565b6001600160a01b0382166000908152600360205260409020611c3190611a7d565b60008181526001602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600754600090611c9d90600163ffffffff611a9d16565b60008381526008602052604081205460078054939450909284908110611cbf57fe5b906000526020600020015490508060078381548110611cda57fe5b60009182526020808320909101929092558281526008909152604090208290556007805490611d0d906000198301611da0565b50505060009182525060086020526040812055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611d6357805160ff1916838001178555611d90565b82800160010185558215611d90579182015b82811115611d90578251825591602001919060010190611d75565b50611d9c929150611e04565b5090565b8154818355818111156108b8576000838152602090206108b8918101908301611e04565b50805460018160011615610100020316600290046000825580601f10611dea5750610a07565b601f016020900490600052602060002090810190610a0791905b6106ca91905b80821115611d9c5760008155600101611e0a56fe4b495031374d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031374d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031374275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a206275726e206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a723058206d3f26be5779c36e9f88ad689fca9c5585687d9607ab6337bedea47563bebfd70029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

export class KIP17MintableBurnableImpl__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP17MintableBurnableImpl> {
    return super.deploy(overrides || {}) as Promise<KIP17MintableBurnableImpl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KIP17MintableBurnableImpl {
    return super.attach(address) as KIP17MintableBurnableImpl;
  }
  connect(signer: Signer): KIP17MintableBurnableImpl__factory {
    return super.connect(signer) as KIP17MintableBurnableImpl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP17MintableBurnableImplInterface {
    return new utils.Interface(_abi) as KIP17MintableBurnableImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP17MintableBurnableImpl {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as KIP17MintableBurnableImpl;
  }
}
