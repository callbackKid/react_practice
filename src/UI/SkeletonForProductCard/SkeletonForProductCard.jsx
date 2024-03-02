import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

const SkeletonForProductCard = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton animation="wave" variant="rounded" height={284} />
      <Skeleton variant="text" sx={{ fontSize: '20px', width: '60%' }} />
      <Skeleton variant="text" sx={{ fontSize: '40px', width: '60%' }} />
    </Box>
  )
}

export default SkeletonForProductCard
