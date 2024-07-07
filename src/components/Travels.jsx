import { styles } from "../styles";
import { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import photos from "../utils/photos";

const Travels = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="md:m-12 md:px-48 flex flex-col gap-10 overflow-hidden text-center justify-center">
      <h1 className={`${styles.sectionText} underline`}>Travels</h1>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={210}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default Travels;
