export function linePath(data, width, height, padding) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  return data
    .map((value, index) => {
      const x = padding + (index * (width - padding * 2)) / (data.length - 1)
      const y = height - padding - ((value - min) * (height - padding * 2)) / range
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
    })
    .join(' ')
}

export function areaPath(data, width, height, padding) {
  const path = linePath(data, width, height, padding)
  return `${path} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`
}
