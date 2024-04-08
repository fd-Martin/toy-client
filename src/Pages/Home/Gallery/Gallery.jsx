import React from 'react';
import PhotoAlbum from 'react-photo-album';

const Gallery = () => {

    const photos = [
        { src: "https://images.unsplash.com/photo-1456082902841-3335005c3082?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 1600, height: 1000 },
        { src: "https://images.unsplash.com/photo-1536622978642-0d1fb05d5e1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 800, height: 762 },
        { src: "https://images.unsplash.com/photo-1590559350077-01245b05020a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 900, height: 1352 },
        { src: "https://images.unsplash.com/photo-1613536491198-a0afa1916b3b?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 1240, height: 1000 },
        { src: "https://images.unsplash.com/photo-1542213146-3b336b52e2e5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 800, height: 1240 },
        { src: "https://images.unsplash.com/photo-1558563763-9157dc01afbc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 1240, height: 800 },
        { src: "https://images.unsplash.com/photo-1456082902841-3335005c3082?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 1000, height: 1200 },
        { src: "https://images.unsplash.com/photo-1536622978642-0d1fb05d5e1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 1350, height: 800 },
        { src: "https://images.unsplash.com/photo-1590559350077-01245b05020a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 1200, height: 900 },
        { src: "https://images.unsplash.com/photo-1613536491198-a0afa1916b3b?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 400, height: 500 },
        { src: "https://images.unsplash.com/photo-1542213146-3b336b52e2e5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 1000, height: 800 },
        { src: "https://images.unsplash.com/photo-1558563763-9157dc01afbc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 800, height: 1200 },
    ];

    return (

        <div>
            <div className='mt-4'>
                <h1 className='text-center text-2xl md:text-6xl font-bold  '>Toy Gallery</h1>
            </div>
            <div className='p-4  m-6 border-2 border-yellow-500 rounded-xl'>
                <PhotoAlbum layout="columns" photos={photos}></PhotoAlbum>
            </div>
        </div>
    );
};

export default Gallery;