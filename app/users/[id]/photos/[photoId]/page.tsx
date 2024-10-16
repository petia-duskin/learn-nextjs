import React from 'react';

interface Props {
    params: {
        id: number;
        photoId: number;
    }
}

const PhotosDetailPage = ({params: {id, photoId}}: Props) => {
    return (
        <div>
            users/{id}/photos/{photoId}
        </div>
    );
};

export default PhotosDetailPage;