import * as React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'

const data = [
  { id: 0, value: 34249, label: 'New Customers', color: '#5B8CFF' },
  { id: 1, value: 1420, label: 'Repeated', color: '#DCE6F9' },
]

function Dot({ sx }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: 12,
        height: 12,
        borderRadius: '50%',
        backgroundColor: '#5B8CFF',
        ...sx,
      }}
    />
  )
}

export default function CustomersChart() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        minHeight: 280,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 20px 50px rgba(31, 42, 68, 0.05)',
      }}
    >
      <Typography variant="h5" sx={{ fontSize: 28, color: 'text.primary', mb: 2 }}>
        Customers
      </Typography>

      <Box sx={{ position: 'relative', width: 220, height: 150, mx: 'auto' }}>
        <PieChart
          series={[
            {
              data,
              innerRadius: 48,
              outerRadius: 60,
              startAngle: 0,
              endAngle: 360,
              paddingAngle: 0,
              cornerRadius: 12,
              cx: 110,
              cy: 75,
            },
          ]}
          width={220}
          height={150}
          hideLegend
          slotProps={{ popper: { sx: { display: 'none' } } }}
          sx={{
            '& .MuiPieArc-root': {
              stroke: 'none',
            },
          }}
        />

        <Dot sx={{ left: '50%', top: 15, transform: 'translateX(-50%)' }} />
        <Dot sx={{ right: 44, top: '50%', transform: 'translateY(-50%)' }} />
        <Dot sx={{ left: '50%', bottom: 15, transform: 'translateX(-50%)' }} />
        <Dot sx={{ left: 44, top: '50%', transform: 'translateY(-50%)' }} />
      </Box>

      <Stack direction="row" justifyContent="center" spacing={5} sx={{ mt: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: 34, fontWeight: 700, color: 'text.primary', lineHeight: 1 }}>
            34,249
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#5B8CFF' }} />
            <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>New Customers</Typography>
          </Stack>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: 34, fontWeight: 700, color: 'text.primary', lineHeight: 1 }}>
            1420
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#DCE6F9' }} />
            <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>Repeated</Typography>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  )
}
