import Image from "next/image";
import QRCode from "react-qr-code";

interface Props {
  name: string;
  url: string;
}

export const VirtualCardImage = ({ name, url }: Props) => {
  return (
    <div className="relative w-max">
      <Image src="/phone-frame.png" alt="" width={280} height={420} />

      <div className="absolute top-24 w-full">
        <p className="text-base text-center">{name}</p>
        <p className="text-base text-center mt-14">Scan me</p>
        <QRCode value={url} className="w-24 h-28 mt-3 mx-auto" />
      </div>
    </div>
  );
};
