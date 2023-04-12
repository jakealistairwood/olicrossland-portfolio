import { useRef } from 'react';
// Vidstack
import "vidstack/styles/defaults.css";
import { MediaOutlet, MediaPlayer } from "@vidstack/react";

function Featured() {

    const featuredRef = useRef(null);

	return (
		<section
			className="featured container"
			ref={featuredRef}
			data-scroll-section
		>
			<MediaPlayer
				src="https://media-files.vidstack.io/720p.mp4"
				poster="https://media-files.vidstack.io/poster.png"
				controls
			>
				{/* ^ remove `controls` attribute if you're designing a custom UI */}
				<MediaOutlet />
			</MediaPlayer>
		</section>
	);
}

export default Featured;
