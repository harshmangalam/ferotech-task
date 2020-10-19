import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import React from 'react'
import Maps from './Maps'

function ContactUs() {
  return (
      <>
    <Paper
      style={{ backgroundColor: 'rgb(245,245,245)', padding: '16px' }}
      elevation={0}
      id="contact"
    >
      <Container>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={3}
        >
          <Grid item>
          <Typography style={{fontSize:'30px',fontWeight:700}}>CONTACT US</Typography>
          </Grid>

          <Grid
            item
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography style={{ marginLeft: '16px', marginRight: '16px' }}>
              info@mysite.com
            </Typography>
            <Typography style={{ marginLeft: '16px', marginRight: '16px' }}>
              500 Terry Francois Street, San Francisco, CA 94158 /
            </Typography>
            <Typography style={{ marginLeft: '16px', marginRight: '16px' }}>
              Tel: 123-456-7890{' '}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ marginTop: '60px' }}
        >
          <Grid item md={6}>
            <Grid container alignItems="center" justify="center" spacing={3}>
              <Grid item md={6}>
                <TextField
                  variant="outlined"
                  placeholder="Name"
                  style={{ backgroundColor: '#fff', width: '100%' }}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  variant="outlined"
                  placeholder="Email"
                  style={{ backgroundColor: '#fff', width: '100%' }}
                />
              </Grid>

              <Grid item md={12}>
                <TextField
                  variant="outlined"
                  placeholder="Subject"
                  style={{ backgroundColor: '#fff', width: '100%' }}
                />
              </Grid>

              <Grid item md={12}>
                <TextField
                  variant="outlined"
                  placeholder="Message"
                  style={{ backgroundColor: '#fff', width: '100%' }}
                  multiline
                  rows={10}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  variant="contained"
                  style={{
                    width: '100%',
                    backgroundColor: 'black',
                    color: '#fff',
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
     
    </Paper>
     <Maps />
     </>
  )
}

export default ContactUs
