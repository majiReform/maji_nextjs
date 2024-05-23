import { GalleryInterface } from "@/lib/features/gallery/gallerySlice";
import { MongoDBQueryHelper } from "./setup/queryHelper"
import { Document } from "mongodb";

interface GalleryCollectionInterface extends GalleryInterface, Document {}


const galleryCollection = new MongoDBQueryHelper<GalleryCollectionInterface>("Gallery");

export {
    galleryCollection
}
