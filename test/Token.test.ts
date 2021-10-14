import { expect } from "chai"
import { ethers } from "hardhat"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { Token } from "../typechain"

// .-------.
// | Token |
// '-------'
describe("Token", function () {
    //
    let deployer: SignerWithAddress
    //
    let token: Token
    //
    beforeEach(async function () {
        ;[deployer] = await ethers.getSigners()
        const Token = await ethers.getContractFactory("Token", deployer)
        token = await Token.deploy()
    })
    // .------------.
    // | Deployment |
    // '------------'
    describe("Deployment", function () {
        //
        it("should deploy contract to an address", async () => {
            expect(token.address).to.not.equal(undefined)
        })
        //
    })
    //
})
