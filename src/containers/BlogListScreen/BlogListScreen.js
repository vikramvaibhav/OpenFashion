import React, { lazy, memo } from 'react';
import { Header } from '../../components/organisms';
import BlogList from '../../modules/Blog/components/BlogList/BlogList';
import { Screen, ScreenTitle } from '../../components/atoms';

const BlogListScreen = () => {
    return (
        <Screen>
            <Header />
            <ScreenTitle>BLOG</ScreenTitle>
            <BlogList />
        </Screen>
    );
};

export default memo(BlogListScreen);
