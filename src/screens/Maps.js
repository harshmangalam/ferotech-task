import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useGoogleMaps } from 'react-hook-google-maps'

function Maps() {
  const { ref, map, google } = useGoogleMaps(
    'AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk',
    {
      center: { lat: 0, lng: 0 },
      zoom: 3,
    },
  )
  return <div ref={ref} style={{ width: '100%', height: '350px' }} />
}

export default Maps
