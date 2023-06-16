import { SRLWrapper } from 'simple-react-lightbox';
import GagMeme from './GagMeme';

/**
 * Featured section is to rendom a right sidebar with 9gags latest content.
 * @date 2021-07-22
 * @param {any} {featured:{data:{posts}}}
 * @returns {any}
 */
const Featured = ({
    featured: {
        data: { posts }
    }
}) => {
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
                            return <GagMeme data={f} key={f.id} />;
                        })}
                </SRLWrapper>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Featured;
