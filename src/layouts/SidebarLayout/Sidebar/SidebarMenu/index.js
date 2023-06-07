import { useState, useContext } from 'react';
import { useRouter } from 'next/router';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
  IconButton,
  Popover,
  ListItemIcon,
  TextField,
  ListItemText,
  Collapse
} from '@mui/material';
import NextLink from 'next/link';
import { SidebarContext } from 'src/contexts/SidebarContext';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';

import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SendIcon from '@mui/icons-material/Send';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

const useStyles = makeStyles((theme) => ({
  smallText: {
    fontSize: '13px !important'
  }
}));

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'search-popover' : undefined;

  const [showSecondIcon, setShowSecondIcon] = useState(true);

  const handleRedirect = () => {
    router.push('/management/workflow');
    // router.push('/management/workflow');
    // router.push('/management/workflow');
    router.push('/applications/email');
  };

  const classes = useStyles();

  const [isOpenBasic, setIsOpenBasic] = useState(false);
  const [isOpenExtensions, setIsOpenExtensions] = useState(false);
  const [isOpenInterface, setIsOpenInterface] = useState(false);
  const [isOpenFile, setIsOpenFile] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);

  const handleToggleBasic = () => {
    setIsOpenBasic(!isOpenBasic);
    setIsOpenExtensions(false);
  };

  const handleToggleExtensions = () => {
    setIsOpenExtensions(!isOpenExtensions);
    setIsOpenBasic(false);
  };
  const handleToggleInterface = () => {
    setIsOpenInterface(!isOpenInterface);
    setIsOpenBasic(false);
    setIsOpenExtensions(false);
    setIsOpenFile(false);
  };
  const handleToggleFile = () => {
    setIsOpenFile(!isOpenFile);
    setIsOpenBasic(false);
    setIsOpenExtensions(false);
    setIsOpenInterface(false);
  };

  const handleToggleEmail = () => {
    setIsOpenEmail(!isOpenEmail);
    // setIsOpenBasic(false);
    // setIsOpenExtensions(false);
    // setIsOpenInterface(false);
    // setIsOpenFile(false);
    //
  };

  return (
    <>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem
                component="div"
                size="small"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <h4>Functions</h4>
                <IconButton onClick={handleClick}>
                  <SearchIcon />
                </IconButton>
                {showSecondIcon && <SearchIcon sx={{ display: 'none' }} />}
              </ListItem>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                sx={{
                  marginLeft: '-26px !important'
                }}
              >
                <TextField
                  label="Search"
                  variant="outlined"
                  size="small"
                  value={searchQuery}
                  onChange={handleChange}
                  sx={{ width: '200px', m: 2 }}
                />
              </Popover>
            </List>
          </SubMenuWrapper>
        </List>

        <List
          component="div"
          sx={{
            paddingTop: '1px !important'
          }}
        >
          <ListItem button onClick={handleToggleBasic}>
            <ListItemIcon sx={{ minWidth: 'auto', mr: 0.5 }}>
              {isOpenBasic ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </ListItemIcon>
            <ListItemText
              primary="Basic"
              sx={{
                color: isOpenBasic ? 'white' : 'inherit',
                fontSize: '16px !important'
              }}
            />
          </ListItem>
          <Collapse in={isOpenBasic} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                marginTop: '2px !important',
                marginLeft: '25px'
              }}
            >
              <NextLink href="/management/workflow" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="If..then"
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },

                      marginLeft: '-18px'
                    }}
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/management/workflow" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Do-while Loop "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/management/workflow' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/management/workflow" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Assign Values to Variable "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/management/workflow' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/management/workflow" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Execute js code "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/management/workflow' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/management/workflow" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Delay "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/management/workflow' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>

              <NextLink href="/applications/email" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Log "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/applications/email' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
            </List>
          </Collapse>
        </List>

        <List
          component="div"
          sx={{
            paddingTop: '1px !important'
          }}
        >
          <ListItem button onClick={handleToggleExtensions}>
            <ListItemIcon sx={{ minWidth: 'auto', mr: 0.5 }}>
              {isOpenExtensions ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </ListItemIcon>
            <ListItemText
              primary="Extensions"
              sx={{
                color: isOpenExtensions ? 'white' : 'inherit',
                fontSize: '16px !important'
              }}
            />
          </ListItem>
          <Collapse in={isOpenExtensions} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                marginTop: '2px !important',
                marginLeft: '25px'
              }}
            >
              <NextLink href="/applications/email" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="If..then"
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },

                      marginLeft: '-18px'
                    }}
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/applications/email" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Do-while Loop "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/applications/email' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/applications/email" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Assign Values to Variable "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/applications/email' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/management/workflow" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Execute js code "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/management/workflow' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/management/workflow" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Delay "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/management/workflow' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>

              <NextLink href="/management/workflow" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Log "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/management/workflow' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
            </List>
          </Collapse>
        </List>

        <List
          component="div"
          sx={{
            paddingTop: '1px !important'
          }}
        >
          <ListItem button onClick={handleToggleInterface}>
            <ListItemIcon sx={{ minWidth: 'auto', mr: 0.5 }}>
              {isOpenInterface ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </ListItemIcon>
            <ListItemText
              primary="Interface Elements"
              sx={{
                color: isOpenExtensions ? 'white' : 'inherit',
                fontSize: '16px !important'
              }}
            />
          </ListItem>
          <Collapse in={isOpenInterface} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                marginTop: '2px !important',
                marginLeft: '25px'
              }}
            >
              <NextLink href="/management/workflows" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="If..then"
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },

                      marginLeft: '-18px'
                    }}
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/management/workflows" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Do-while Loop "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/management/workflows' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
            </List>
          </Collapse>
        </List>

        <List
          component="div"
          sx={{
            paddingTop: '1px !important'
          }}
        >
          <ListItem button onClick={handleToggleFile}>
            <ListItemIcon sx={{ minWidth: 'auto', mr: 0.5 }}>
              {isOpenFile ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </ListItemIcon>
            <ListItemText
              primary="File System"
              sx={{
                color: isOpenFile ? 'white' : 'inherit',
                fontSize: '16px !important'
              }}
            />
          </ListItem>
          <Collapse in={isOpenFile} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                marginTop: '2px !important',
                marginLeft: '25px'
              }}
            >
              <NextLink href="/management/workflow" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="If..then"
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },

                      marginLeft: '-18px'
                    }}
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/management/workflow" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <BrightnessLowTwoToneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Do-while Loop "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/management/workflow' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
            </List>
          </Collapse>
        </List>

        <List
          component="div"
          sx={{
            paddingTop: '1px !important'
          }}
        >
          <ListItem button onClick={handleToggleEmail}>
            <ListItemIcon sx={{ minWidth: 'auto', mr: 0.5 }}>
              {isOpenEmail ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </ListItemIcon>
            <ListItemText
              primary="Email"
              sx={{
                color: isOpenEmail ? 'white' : 'inherit',
                fontSize: '16px !important'
              }}
            />
          </ListItem>
          <Collapse in={isOpenEmail} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                marginTop: '2px !important',
                marginLeft: '25px'
              }}
            >
              <NextLink href="/applications/email" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <SendIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Send Email "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },

                      marginLeft: '-18px'
                    }}
                  />
                </ListItem>
              </NextLink>
              <NextLink href="/applications/email" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    marginTop: '8px !important',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <MarkEmailReadIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Read Emails "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },
                      marginLeft: '-18px'
                    }}
                    className={
                      currentRoute === '/applications/emails' ? 'active' : ''
                    }
                  />
                </ListItem>
              </NextLink>
            </List>
          </Collapse>
        </List>
        <List
          component="div"
          sx={{
            paddingTop: '1px !important'
          }}
        >
          <ListItem button onClick={handleToggleEmail}>
            <ListItemIcon sx={{ minWidth: 'auto', mr: 0.5 }}>
              {isOpenEmail ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </ListItemIcon>
            <ListItemText
              primary="Google Sheets"
              sx={{
                color: isOpenEmail ? 'white' : 'inherit',
                fontSize: '16px !important'
              }}
            />
          </ListItem>
          <Collapse in={isOpenEmail} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                marginTop: '2px !important',
                marginLeft: '25px'
              }}
            >
              <NextLink href="/applications/email" passHref>
                <ListItem
                  button
                  onClick={handleRedirect}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ListItemIcon>
                    <SendIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Send Email "
                    classes={{ primary: classes.smallText }}
                    sx={{
                      '&.active .MuiListItemText-primary': {
                        color: 'white'
                      },

                      marginLeft: '-18px'
                    }}
                  />
                </ListItem>
              </NextLink>
            </List>
          </Collapse>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
