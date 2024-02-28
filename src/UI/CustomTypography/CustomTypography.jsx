import { Typography } from '@mui/material'

const CustomTypography = ({ children, variant, align }) => {
  return (
    <Typography variant={variant} align={align}>
      {children}
    </Typography>
  )
}

export default CustomTypography
