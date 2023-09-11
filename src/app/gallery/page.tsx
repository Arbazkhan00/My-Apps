

import UploadButton from "./Upload-button"
import cloudinary from "cloudinary"
import CloudinaryImage from "./cloudinary-image";
export default async function GalleryPage(){
  type SearchResult={
    public_id:string
  }
     const results= await cloudinary.v2.search
  .expression("resource_type:image ")
  .sort_by("public_id","desc")
  .max_results(30)
  .execute() as { resources: SearchResult[]};
  console.log(results);
   
    return<section>
        <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
     
     <UploadButton />
        </div>
      <div className="grid grid-cols-4 gap-4">
        {results.resources.map((result)=>(
            <CloudinaryImage
            key={result.public_id}
            src={result.public_id}
            width="400"
            height="300"
            alt="an iamge of somrthing"/>
        ))}

        
      </div>
        </div>
    </section>
}