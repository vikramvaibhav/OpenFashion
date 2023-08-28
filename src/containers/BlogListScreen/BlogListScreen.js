import React, { memo } from 'react';
import BlogList from '../../modules/Blog/components/BlogList';
import { Screen, ScreenTitle } from '../../components/atoms';

const BlogListScreen = () => {
    return (
        <Screen>
            <ScreenTitle>BLOG</ScreenTitle>
            <BlogList />
        </Screen>
    );
};

export default memo(BlogListScreen);
