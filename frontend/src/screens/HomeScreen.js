import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const INFURA_KEY = 'beeabd3584594e97aae41e57064dbbbc'

const CoinbaseWallet = new WalletLinkConnector({
 url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
 appName: "Web3-react Demo",
 supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
 rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});

const Injected = new InjectedConnector({
 supportedChainIds: [1, 3, 4, 5, 42]
});

const HomeScreen = () => {
  const { activate, deactivate } = useWeb3React();

  return (
    <Box sx={{ width: 1, height: 1 }}>
      <Box sx={{ width: 1, height: '50%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'inherit' }}>
          <Box>
            <Box style={styles.homeTitle}> Decenterlife </Box>
            <Box sx={{ display: 'flex'}}>
              <Box style={styles.homeSubTitle}> Sign in to continue </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: 1, height: '50%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'inherit' }}>
          <span>
            <Button style={styles.walletButton} variant="contained" onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</Button>
            <Button style={styles.walletButton} variant="contained" onClick={() => { activate(WalletConnect) }}>Wallet Connect</Button>
            <Button style={styles.walletButton} variant="contained" onClick={() => { activate(Injected) }}>Metamask</Button>
            <Button style={styles.walletButton} onClick={deactivate}>Disconnect</Button>
          </span>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  homeTitle: {
    color: 'white',
    fontSize: '2em',
    fontWeight: 'bold'
  },
  homeSubTitle: {
    color: 'white',
    margin: 'auto',
    fontSize: '0.8em',
  },
  walletButton: {
    backgroundColor: 'white',
    color: '#5E17EB'
  }
};

export default HomeScreen;
