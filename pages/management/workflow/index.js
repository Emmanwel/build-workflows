import { useState, ChangeEvent } from 'react';
import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import Footer from 'src/components/Footer';

import { Grid, Container, Tabs, Tab } from '@mui/material';

import RecentActivity from 'src/content/Management/Users/details/RecentActivity';
import ActivityTab from 'src/content/Management/Users/settings/ActivityTab';
import EditProfileTab from 'src/content/Management/Users/settings/EditProfileTab';

import SecurityTab from 'src/content/Management/Users/settings/SecurityTab';
import Feed from 'src/content/Management/Users/details/Feed';
import { styled } from '@mui/material/styles';

import PropertyTab from 'src/content/Management/Users/settings/PropertyTab';
import VariablesTab from 'src/content/Management/Users/settings/VariablesTab';
import PopularTags from 'src/content/Management/Users/details/PopularTags';
import Flow from 'src/content/Management/Users/details/Flow';

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function ManagementUserProfile() {


  const [currentTab, setCurrentTab] = useState('activity');

  const tabs = [
    { value: 'activity', label: 'Properties ' },
    { value: 'edit_profile', label: 'Variables' },
  
  ];

  const handleTabsChange = (_event, value) => {
    setCurrentTab(value);
  };
  return (
    <>
      <Head>
        <title>Dashboard for Building Workflows</title>
      </Head>
      <Container sx={{ mt: 0 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <Flow />
          </Grid>
          <Grid item xs={12} md={4}>
            <Container sx={{ mt: 0, mb: 0 }} maxWidth="lg">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12}>
                  <TabsWrapper
                    onChange={handleTabsChange}
                    value={currentTab}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="black"
                  >
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.value}
                        label={tab.label}
                        value={tab.value}
                      />
                    ))}
                  </TabsWrapper>
                </Grid>
                <Grid item xs={12}>
                  {currentTab === 'activity' && <PropertyTab />}
                  {currentTab === 'edit_profile' && <VariablesTab />}
                
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ManagementUserProfile.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ManagementUserProfile;
