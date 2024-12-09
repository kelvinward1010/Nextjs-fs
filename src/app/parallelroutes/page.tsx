import React from 'react';
import Team from './@team/page';
import Analytics from './@analytics/page';
import Layout from './layout';

export default function HomePage() {
    return (
        <Layout team={<Team />} analytics={<Analytics />}>
            <h2>Main Content</h2>
            <p>This is the main content of the home page.</p>
        </Layout>
    );
}
