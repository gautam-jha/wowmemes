import Image from 'next/image';

function Featured({ featured }) {
    console.log(featured);
    return (
        <div
            className="col-span-2 sticky top-24 right-0 h-screen overflow-auto no-scrollbar p-4"
            style={{ maxHeight: 'calc(100vh - 150px)' }}>
            <div className=" ">
                <h3 className="text-center">Featured</h3>
                {/* <div className="overflow-auto"> */}
                {featured &&
                    featured.map(f => {
                        return (
                            <div key={f.id}>
                                {f.content.includes('jpg') || f.content.includes('png') ? (
                                    <Image
                                        className="w-full lazy m-auto"
                                        src={`https://i2.wp.com/${new URL(f.content).hostname}${
                                            new URL(f.content).pathname
                                        }`}
                                        width="400"
                                        height="200"
                                        // layout="responsive"
                                        style={{ 'object-fit': 'scale-down' }}
                                    />
                                ) : (
                                    <video
                                        controls="true"
                                        loop
                                        style={{ width: '500px', height: '200px' }}>
                                        <source src={f.content} />
                                        <track
                                            kind="captions"
                                            srcLang="en"
                                            label="english_captions"
                                        />
                                    </video>
                                )}
                                <p>{f.title}</p>
                            </div>
                        );
                    })}
                {/* </div> */}
            </div>
        </div>
    );
}

export default Featured;
