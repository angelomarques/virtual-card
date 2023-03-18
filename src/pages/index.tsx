import { Form } from "@/components/Form";
import { VirtualCardImage } from "@/components/VirtualCardImage";
import { UserDataType, UserType } from "@/types/user";
import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { registerUser } from "@/services/firebase";

export default function Home() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<UserDataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data: UserType) => {
    try {
      setIsLoading(true);
      const userData = await registerUser(data);
      if (userData) setUser(userData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const generateImage = async () => {
    if (imageRef?.current) {
      const dataUrl = await toPng(imageRef.current);

      const link = document.createElement("a");
      link.href = dataUrl;
      link.style.display = "none";
      link.download = "virtual-card.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    if (user) {
      generateImage();
    }
  }, [user]);

  return (
    <>
      <section className="container p-4 mx-auto">
        <h1 className="text-2xl font-medium ml-20">QR Code Image Generator</h1>
        <Form onSubmit={handleFormSubmit} isLoading={isLoading} />
      </section>

      {user ? (
        <div className="absolute -left-96">
          <VirtualCardImage ref={imageRef} name={user.name} slug={user.slug} />
        </div>
      ) : null}
    </>
  );
}

// import React, { useRef, useState } from "react";
// import htmlToImage from "html-to-image";

// const ImageGenerator = ({ name, qrCode }) => {
//   const imageRef = useRef(null);
//   const [imageUrl, setImageUrl] = useState(null);

//   const handleGenerateImage = async () => {
//     const dataUrl = await htmlToImage.toPng(imageRef.current);
//     setImageUrl(dataUrl);
//   };

//   return (
//     <div className="relative">
//       {/* iPhone-shaped frame */}
//       <div
//         className="bg-gray-800 rounded-lg border-2 border-gray-600 p-6"
//         style={{ visibility: "hidden" }}
//         ref={imageRef}
//       >
//         <div className="bg-gray-700 rounded-lg h-2 w-16 mx-auto mb-2"></div>
//         <div className="bg-white rounded-lg p-4">
//           <div className="text-xl font-bold mb-2">{name}</div>
//           <img src={qrCode} alt="QR Code" className="mx-auto" />
//         </div>
//       </div>

//       {imageUrl && (
//         <div className="absolute inset-0 flex justify-center items-center">
//           <a href={imageUrl} download="image.png">
//             <button className="bg-blue-500 text-white rounded-lg py-2 px-4">
//               Download Image
//             </button>
//           </a>
//         </div>
//       )}

//       {!imageUrl && (
//         <div className="absolute inset-0 flex justify-center items-center">
//           <button
//             className="bg-blue-500 text-white rounded-lg py-2 px-4"
//             onClick={handleGenerateImage}
//           >
//             Generate Image
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGenerator;
