import {
  Card,
  Divider,
  Avatar,
  IconButton,
  Button,
  CardActions,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Collapse
} from '@mui/material';

import { useState } from 'react';
import { useRouter } from 'next/router';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  radio: {
    '&$checked': {
      color: 'green' 
    }
  },
  checked: {
    '&$checked': {
      '&.MuiIconButton-root': {
        color: 'white' 
      }
    }
  }
});

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
     background: ${theme.colors.alpha.black[5]};
     padding: ${theme.spacing(3)};
`
);
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 6,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    width: 'auto',
    padding: '14px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}));

function PropertyTab() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMethod, setIsOpenMethod] = useState(false);
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const [isOpenQuery, setIsOpenQuery] = useState(false);

  const handleToggleMethod = () => {
    setIsOpenMethod(!isOpenMethod);
    setIsOpenAuth(false);
    setIsOpenQuery(false);
    setIsOpen(false);
  };

  const handleToggleAuth = () => {
    setIsOpenAuth(!isOpenAuth);
    setIsOpen(false);
    setIsOpenMethod(false);
    setIsOpenQuery(false);
  };
  const handleToggleQuery = () => {
    setIsOpenQuery(!isOpenQuery);
    setIsOpen(false);
    setIsOpenAuth(false);
    setIsOpenMethod(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsOpenAuth(false);
    setIsOpenMethod(false);
    setIsOpenQuery(false);
  };

  const classes = useStyles();

  return (
    <Card>
      <List
        component="div"
        sx={{
          paddingTop: '1px !important'
        }}
      >
        <ListItem button onClick={handleToggleMethod}>
          <ListItemIcon sx={{ minWidth: 'auto', mr: 0.5 }}>
            {isOpenMethod ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemIcon>
          <ListItemText
            primary="Method"
            sx={{
              color: isOpenMethod ? 'white' : 'inherit',
              fontSize: '16px !important'
            }}
          />
        </ListItem>
        <Collapse in={isOpenMethod} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              marginTop: '2px !important',
              marginLeft: '25px'
            }}
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Save the previous step result"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Save the previous step result"
                  control={
                    <Radio
                      classes={{
                        root: classes.radio,
                        checked: classes.checked
                      }}
                    />
                  }
                  label="Save the previous step result"
                />
                <FormControlLabel
                  value="Calculate a value"
                  control={<Radio />}
                  label="Calculate a value"
                />
              </RadioGroup>

              <BootstrapInput
                placeholder="URL"
                id="bootstrap-input"
                sx={{ mt: 3, mb: 3 }}
              />

              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ mt: 3, mb: 1 }}
              >
                Input Name
              </FormLabel>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Set a Value"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Set a Value"
                  control={<Radio />}
                  label="Set a Value"
                />
                <FormControlLabel
                  value="Save the previous step result"
                  control={<Radio />}
                  label="Save the previous step result"
                />
                <FormControlLabel
                  value="Calculate a value"
                  control={<Radio />}
                  label="Calculate a value"
                />
              </RadioGroup>
            </FormControl>
          </List>
        </Collapse>
      </List>

      <List
        component="div"
        sx={{
          paddingTop: '1px !important'
        }}
      >
        <ListItem button onClick={handleToggleAuth}>
          <ListItemIcon sx={{ minWidth: 'auto', mr: 0.5 }}>
            {isOpenAuth ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemIcon>
          <ListItemText
            primary="Authorization header"
            sx={{
              color: isOpenAuth ? 'white' : 'inherit',
              fontSize: '16px !important'
            }}
          />
        </ListItem>
        <Collapse in={isOpenAuth} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              marginTop: '2px !important',
              marginLeft: '25px'
            }}
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Save the previous step result"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Save the previous step result"
                  control={<Radio />}
                  label="Save the previous step result"
                />
                <FormControlLabel
                  value="Calculate a value"
                  control={<Radio />}
                  label="Calculate a value"
                />
              </RadioGroup>

              <BootstrapInput
                placeholder="URL"
                id="bootstrap-input"
                sx={{ mt: 3, mb: 3 }}
              />

              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ mt: 3, mb: 1 }}
              >
                Input Name
              </FormLabel>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Set a Value"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Set a Value"
                  control={<Radio />}
                  label="Set a Value"
                />
                <FormControlLabel
                  value="Save the previous step result"
                  control={<Radio />}
                  label="Save the previous step result"
                />
                <FormControlLabel
                  value="Calculate a value"
                  control={<Radio />}
                  label="Calculate a value"
                />
              </RadioGroup>
            </FormControl>
          </List>
        </Collapse>
      </List>
      <List
        component="div"
        sx={{
          paddingTop: '1px !important'
        }}
      >
        <ListItem button onClick={handleToggleQuery}>
          <ListItemIcon sx={{ minWidth: 'auto', mr: 0.5 }}>
            {isOpenQuery ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemIcon>
          <ListItemText
            primary="Query parameters"
            sx={{
              color: isOpenQuery ? 'white' : 'inherit',
              fontSize: '16px !important'
            }}
          />
        </ListItem>
        <Collapse in={isOpenQuery} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              marginTop: '2px !important',
              marginLeft: '25px'
            }}
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Save the previous step result"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Save the previous step result"
                  control={<Radio />}
                  label="Save the previous step result"
                />
                <FormControlLabel
                  value="Calculate a value"
                  control={<Radio />}
                  label="Calculate a value"
                />
              </RadioGroup>

              <BootstrapInput
                placeholder="URL"
                id="bootstrap-input"
                sx={{ mt: 3, mb: 3 }}
              />

              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ mt: 3, mb: 1 }}
              >
                Input Name
              </FormLabel>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Set a Value"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Set a Value"
                  control={<Radio />}
                  label="Set a Value"
                />
                <FormControlLabel
                  value="Save the previous step result"
                  control={<Radio />}
                  label="Save the previous step result"
                />
                <FormControlLabel
                  value="Calculate a value"
                  control={<Radio />}
                  label="Calculate a value"
                />
              </RadioGroup>
            </FormControl>
          </List>
        </Collapse>
      </List>

      <List
        component="div"
        sx={{
          paddingTop: '1px !important'
        }}
      >
        <ListItem button onClick={handleToggle}>
          <ListItemIcon sx={{ minWidth: 'auto', mr: 0.5 }}>
            {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </ListItemIcon>
          <ListItemText
            primary="Body Parameters"
            sx={{
              color: isOpen ? 'white' : 'inherit',
              fontSize: '16px !important'
            }}
          />
        </ListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              marginTop: '2px !important',
              marginLeft: '25px'
            }}
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Save the previous step result"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Save the previous step result"
                  control={<Radio />}
                  label="Save the previous step result"
                />
                <FormControlLabel
                  value="Calculate a value"
                  control={<Radio />}
                  label="Calculate a value"
                />
              </RadioGroup>

              <BootstrapInput
                placeholder="URL"
                id="bootstrap-input"
                sx={{ mt: 3, mb: 3 }}
              />

              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ mt: 3, mb: 1 }}
              >
                Send File
              </FormLabel>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Set a Value"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Set a Value"
                  control={<Radio />}
                  label="Set a Value"
                />
                <FormControlLabel
                  value="Save the previous step result"
                  control={<Radio />}
                  label="Save the previous step result"
                />
                <FormControlLabel
                  value="Calculate a value"
                  control={<Radio />}
                  label="Calculate a value"
                />
              </RadioGroup>

              <FormLabel
                id="demo-controlled-radio-buttons-group"
                sx={{ mt: 3, mb: 1 }}
              >
                Input Name
              </FormLabel>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Set a Value"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Set a Value"
                  control={<Radio />}
                  label="Set a Value"
                />
                <FormControlLabel
                  value="Save the previous step result"
                  control={<Radio />}
                  label="Save the previous step result"
                />
                <FormControlLabel
                  value="Calculate a value"
                  control={<Radio />}
                  label="Calculate a value"
                />
              </RadioGroup>

              <BootstrapInput
                placeholder="Input Name "
                id="bootstrap-input"
                sx={{ mt: 3, mb: 3 }}
                variant="filled"
              />

              <TextField
                id="filled-multiline-static"
                multiline
                rows={4}
                variant="filled"
                placeholder="Comment"
                sx={{ mt: 2, mb: 2 }}
              />
            </FormControl>
          </List>
        </Collapse>
      </List>

      <Divider />
    </Card>
  );
}

export default PropertyTab;
