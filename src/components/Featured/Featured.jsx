import { useRef } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

function Featured() {

    const featuredRef = useRef(null);

	return (
		<section
			className="featured container"
			ref={featuredRef}
			data-scroll-section
		>
			<div className="featured__video">
				<iframe src="https://drive.google.com/file/d/1ggH3KZISH7_vZUQJPQROwjEU2-N9MDYF/preview" width="640" height="480" allow="autoplay" scrolling="yes"></iframe>
				{/* <VideoPlayer videoLink="https://drive.google.com/file/d/1ggH3KZISH7_vZUQJPQROwjEU2-N9MDYF/preview" /> */}
			</div>
			{/* <MediaPlayer
				src="https://drive.google.com/file/d/1ggH3KZISH7_vZUQJPQROwjEU2-N9MDYF/preview"
                // src="https://drive.google.com/file/d/1ggH3KZISH7_vZUQJPQROwjEU2-N9MDYF/view?usp=share_link"
				poster="https://media-files.vidstack.io/poster.png"
				controls
			>
				^ remove `controls` attribute if you're designing a custom UI
				<MediaOutlet />
			</MediaPlayer> */}
		</section>
	);
}

export default Featured;
