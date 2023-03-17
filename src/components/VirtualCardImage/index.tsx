import Image from "next/image";
import QRCode from "react-qr-code";

export const VirtualCardImage = () => {
  return (
    <div className="relative w-max">
      <Image src="/phone-frame.png" alt="" width={280} height={420} />
      
      <div className="absolute top-24 w-full">
        <p className="text-base text-center">Angelo</p>
        <p className="text-base text-center mt-14">Scan me</p>
        <QRCode
          value="https://www.google.com"
          className="w-24 h-28 mt-3 mx-auto"
        />
      </div>
    </div>
  );
};
