import { GalleryInterface } from "@/lib/features/gallery/gallerySlice";
import { MongoDBQueryHelper } from "./setup/queryHelper"


const galleryCollection = new MongoDBQueryHelper<GalleryInterface>("Gallery");

export {
    galleryCollection
}
