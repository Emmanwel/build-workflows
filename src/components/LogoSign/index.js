import { useTheme, AppBar, IconButton } from '@mui/material';

import { makeStyles } from '@mui/styles';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    gap: 8
  },
  groupContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    '& > *': {
      marginRight: theme.spacing(1)
    }
  }
}));

function Logo() {
  const theme = useTheme();

  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <div className={classes.navbar}>
          <div className={classes.groupContainer}>
            <IconButton size="small" color="primary">
              <AddOutlinedIcon style={{ color: 'white', fontSize: 22 }} />
            </IconButton>
            <IconButton size="small" color="primary">
              <LocalPrintshopOutlinedIcon
                style={{ color: 'white', fontSize: 22 }}
              />
            </IconButton>
            <IconButton size="small" color="primary">
              <PictureAsPdfOutlinedIcon
                style={{ color: 'white', fontSize: 22 }}
              />
            </IconButton>
            <IconButton size="small" color="primary">
              <PlayCircleFilledOutlinedIcon
                style={{ color: '#00FF00', fontSize: 32 }}
              />
            </IconButton>
            <IconButton size="small" color="primary">
              <StopCircleOutlinedIcon
                style={{ color: '#00FF00', fontSize: 32 }}
              />
            </IconButton>
            <IconButton size="small" color="primary">
              <NotStartedOutlinedIcon
                style={{ color: '#00FF00', fontSize: 32 }}
              />
            </IconButton>
          </div>
        </div>
      </AppBar>
    </>
  );
}

export default Logo;
