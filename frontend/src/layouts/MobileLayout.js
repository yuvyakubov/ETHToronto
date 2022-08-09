import { useMediaQuery } from 'react-responsive'

const MobileLayout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

export default MobileLayout;
