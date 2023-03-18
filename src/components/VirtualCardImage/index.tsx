import Image from "next/image";
import { forwardRef } from "react";
import QRCode from "react-qr-code";

interface Props {
  name: string;
  slug: string;
}

export const VirtualCardImage = forwardRef<HTMLDivElement, Props>(
  function VirtualCardImage({ name, slug }: Props, ref) {
    const domain: string = process.env.NEXT_PUBLIC_DOMAIN!;

    const url = `${domain}/${slug}`;

    return (
      <div className="relative w-max bg-white" ref={ref}>
        <Image src="/phone-frame.png" alt="" width={280} height={420} />

        <div className="absolute top-24 w-full">
          <p className="text-base text-center">{name}</p>
          <p className="text-base text-center mt-14">Scan me</p>
          <QRCode value={url} className="w-24 h-28 mt-3 mx-auto" />
        </div>
      </div>
    );
  }
);
