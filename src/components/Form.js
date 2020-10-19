import { Button, Grid, Paper, TextField } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'

function Form() {
  return (
    <Paper
      style={{
        marginTop: '50px',
        padding: '16px',
      }}
      elevation={0}
    >
      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid item>
          <TextField
            variant="outlined"
            label="Check In"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Check Out"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item>
          <TextField variant="outlined" label="Adults" type="number" />
        </Grid>
        <Grid item>
          <TextField variant="outlined" label="Kids" type="number" />
        </Grid>
        <Grid item>
          <Button
            startIcon={<Search />}
            style={{ backgroundColor: 'black', color: '#fff', padding: '12px' }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Form
