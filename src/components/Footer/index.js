import {
  Box,
  Container,
  Link,
  Typography,
  styled,
  FormControlLabel,
  Grid
} from '@mui/material';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
`
);

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Grid item xs={12} md={8}>
        <Box>
          <Typography variant="subtitle1"> Console</Typography>

          <FormControlLabel
            value="a"
            control={
              <PublishedWithChangesIcon
                sx={{ color: 'red' }}
                color="primary"
                name="primary-card"
              />
            }
            label="11.09.2019, 17:23:46 Error"
            sx={{
              display: 'flex',
              gap: '10px',
              '& .MuiFormControlLabel-label': {
                marginLeft: '8px',
                marginTop: '4px',
                color: 'red'
              }
            }}
          />
          <FormControlLabel
            value="a"
            control={
              <PublishedWithChangesIcon
                sx={{ color: 'beige' }}
                color="primary"
                name="primary-card"
              />
            }
            label="11.09.2019, 17:23:46 Task Finished Successfully!"
            sx={{
              display: 'flex',
              gap: '10px',
              '& .MuiFormControlLabel-label': {
                marginLeft: '8px',
                marginTop: '15px',
                color: 'beige'
              }
            }}
          />
          <FormControlLabel
            value="a"
            control={
              <PublishedWithChangesIcon
                sx={{ color: 'yellow' }}
                color="primary"
                name="primary-card"
              />
            }
            label="11.09.2019, 17:23:46 Something Went Wrong "
            sx={{
              display: 'flex',
              gap: '10px',
              '& .MuiFormControlLabel-label': {
                marginLeft: '8px',
                marginTop: '15px',
                color: 'yellow'
              }
            }}
          />
          <FormControlLabel
            value="a"
            control={
              <PublishedWithChangesIcon
                sx={{ color: 'yellow' }}
                color="primary"
                name="primary-card"
              />
            }
            label="11.09.2019, 17:23:46 Something Went Wrong "
            sx={{
              display: 'flex',
              gap: '10px',
              '& .MuiFormControlLabel-label': {
                marginLeft: '8px',
                marginTop: '15px',
                color: 'yellow'
              }
            }}
          />
        </Box>
      </Grid>
    </FooterWrapper>
  );
}

export default Footer;
