import React from 'react';
import CmnNavbar from '../shared/navbars/CmnNavbar';
import CmnHeroBanner from '../banners/CmnHeroBanner';
import PurposeSection from './commonHomeSections/PurposeSection';
import CourseSection from './commonHomeSections/CourseSection';
import ArtworkGallerySection from './commonHomeSections/ArtworkGallerySection';

const CommonHomePage = () => {
    return (
        <div>
            <CmnNavbar/>
            <CmnHeroBanner/>
            <PurposeSection/>
            <CourseSection/>
            <ArtworkGallerySection/>
        </div>
    );
};

export default CommonHomePage;