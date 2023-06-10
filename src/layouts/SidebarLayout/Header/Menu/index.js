import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  Tabs,
  Tab,
  IconButton
} from '@mui/material';
import React, { useRef, useState } from 'react';
import Link from 'src/components/Link';

import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openTabs, setOpenTabs] = useState(0);

  const handleTabClose = (tabIndex) => {
    setOpenTabs((prevOpenTabs) => {
      if (prevOpenTabs === tabIndex) {
        return -1;
      }
      return prevOpenTabs;
    });
  };

  const handleTabChange = (event, newValue) => {
    setOpenTabs(newValue);
  };

  return (
    <>
      <Box>
        <Tabs
          value={openTabs}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          classes={{ indicator: 'MuiTabs-indicator' }}
          TabIndicatorProps={{ style: { display: 'none' } }}
          style={{ marginBottom: '-16px' }}
        >
          <Tab
            label={
              <Box display="flex" alignItems="center">
                <IconButton edge="end" onClick={() => handleTabClose(0)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
                <span style={{ marginLeft: '15px' }}>New File</span>
              </Box>
            }
            component={Link}
            href="/management/workflow"
            selected={openTabs === 0} // Set the selected prop for the active tab
            style={{ backgroundColor: openTabs === 0 ? '#3f3f4e' : 'inherit' }} // Customize active tab color
          />
          <Tab
            label={
              <Box display="flex" alignItems="center">
                <IconButton edge="end" onClick={() => handleTabClose(1)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
                <span style={{ marginLeft: '15px' }}>enslavetheWorld</span>
              </Box>
            }
            component={Link}
            href="/management/workflow"
          />
          <Tab
            label={
              <Box display="flex" alignItems="center">
                <IconButton edge="end" onClick={() => handleTabClose(2)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
                <span style={{ marginLeft: '15px' }}>Helloworld</span>
              </Box>
            }
            component={Link}
            href="/management/workflow"
          />
          <Tab
            label={
              <Box display="flex" alignItems="center">
                <IconButton edge="end" onClick={() => handleTabClose(3)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
                <span style={{ marginLeft: '15px' }}>Nikitin</span>
              </Box>
            }
            component={Link}
            href="/management/workflow"
          />

          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  <MoreVertIcon />

                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
        </Tabs>
      </Box>
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={Link} href="/">
          Overview
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/management/workflowe">
          Emmanuel
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/management/workflows">
          if..condition
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/management/workflowa">
          Assign Values
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
