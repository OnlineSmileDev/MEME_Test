import React from 'react';
import ContentLoader, { Circle, Rect } from "react-content-loader/native"



export default ImageLoader = (props) => {

    return (
        <ContentLoader
            viewBox="0 0 400 475"
            height={475}
            width={400}
            speed={4}
            {...props}
        >
            <Rect x="75" y="233" rx="4" ry="4" width="100" height="13" />
            <Rect x="75" y="260" rx="4" ry="4" width="50" height="8" />
            <Rect x="0" y="210" rx="5" ry="5" width="400" height="10" />
            <Rect x="0" y="0" rx="5" ry="5" width="400" height="100" />
        </ContentLoader>
    )
}