import { MNEMONIC, INFURA_URL_RINKEBY, INFURA_URL_KOVAN } from "./secrets.json"
import { HardhatUserConfig } from "hardhat/config"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import "hardhat-gas-reporter"

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            accounts: { mnemonic: MNEMONIC, count: 10 },
        },
        rinkeby: {
            url: INFURA_URL_RINKEBY,
            accounts: { mnemonic: MNEMONIC, count: 10 },
        },
        kovan: {
            url: INFURA_URL_KOVAN,
            accounts: { mnemonic: MNEMONIC, count: 10 },
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.7",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    gasReporter: {
        currency: "EUR",
    },
}

export default config
