import Image from 'next/image';
import { SRLWrapper } from 'simple-react-lightbox';

function Featured({ featured }) {
    // console.log(featured);f
    return (
        <div
            className="col-span-2 sticky top-24 right-0 h-screen hidden md:block overflow-auto no-scrollbar p-4 meme"
            style={{ maxHeight: 'calc(100vh - 150px)' }}>
            <div className=" ">
                <h3 className="text-left font-medium">Trending</h3>
                {/* <div className="overflow-auto"> */}
                <SRLWrapper>
                    {featured &&
                        featured.map(f => {
                            return (
                                <div key={f.id} className="meme  p-3">
                                    {f.content.includes('jpg') || f.content.includes('png') ? (
                                        <div
                                            className="feat_img w-full overflow-hidden"
                                            style={{
                                                // width: '400px',
                                                height: '200px',
                                                position: 'relative'
                                            }}>
                                            <Image
                                                className=" lazy m-auto"
                                                src={`https://i2.wp.com/${
                                                    new URL(f.content).hostname
                                                }${new URL(f.content).pathname}`}
                                                width="400"
                                                height="200"
                                                layout="responsive"
                                                // style={{  }}
                                            />
                                        </div>
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
                </SRLWrapper>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Featured;
