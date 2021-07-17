import Image from 'next/image';
import { SRLWrapper } from 'simple-react-lightbox';

function Featured(props) {
    // const  = featured;
    // eslint-disable-next-line react/destructuring-assignment
    const posts = props?.featured?.data?.posts;

    console.log('f', posts);
    // return false;
    // const {
    //     posts: { data }
    // } = featured;
    // return false;
    return (
        <div
            className="col-span-2 sticky top-24 right-0 h-screen hidden md:block overflow-auto no-scrollbar p-4 meme"
            style={{ maxHeight: 'calc(100vh - 150px)' }}>
            <div className=" ">
                <h3 className="text-left font-medium">Trending</h3>
                {/* <div className="overflow-auto"> */}
                <SRLWrapper>
                    {posts &&
                        posts?.map(f => {
                            return (
                                <div key={f.id} className="meme  p-3">
                                    {f.type !== 'Animated' ? (
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
                                                    new URL(
                                                        f.type !== 'Animated'
                                                            ? f.images.image700.webpUrl
                                                            : f.images.image460sv.vp8Url
                                                    ).hostname
                                                }${
                                                    new URL(
                                                        f.type !== 'Animated'
                                                            ? f.images.image700.webpUrl
                                                            : f.images.image460sv.vp8Url
                                                    ).pathname
                                                }`}
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
                                            <source src={f.images.image460sv.vp8Url} />
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
