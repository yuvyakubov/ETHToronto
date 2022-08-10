
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { deployer } = await getNamedAccounts();

  await deploy('SoulBoundNFT', {
    from: deployer,
    args: ['SoulBoundNFT', 'SNT','ipfs://QmaAf8hEVs175ePpgRDXk6mSpaTr7VJAVQKgS6svT4hNKb/metadata.json'],
    log: true,
  });
};

export default func;
func.tags = ['SoulBoundNFT'];