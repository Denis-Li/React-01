import React from 'react';
import ContentLoader from "react-content-loader";

function ApartmentLoader() {
    return (
        <ContentLoader
            className="apartment-box"
            width={555}
            height={571}
            viewBox="0 0 555 571"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            
        >
            <rect x="5" y="0" rx="0" ry="0" width="545" height="300" />
            <rect x="5" y="327" rx="0" ry="0" width="350" height="20" />
            <rect x="5" y="373" rx="0" ry="0" width="130" height="15" />
            <rect x="5" y="413" rx="0" ry="0" width="190" height="30" />
            <rect x="5" y="470" rx="0" ry="0" width="140" height="15" />
            <rect x="5" y="509" rx="0" ry="0" width="545" height="60" />
            <rect x="384" y="413" rx="0" ry="0" width="130" height="15" />
            <rect x="384" y="470" rx="0" ry="0" width="100" height="15" />
        </ContentLoader>
    )
}

export default ApartmentLoader
