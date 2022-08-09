import { useMediaQuery } from 'react-responsive'

const OtherLayout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return !isMobile ? children : null
}

export default OtherLayout;
