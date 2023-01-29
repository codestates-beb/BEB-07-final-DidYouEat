import Link from "next/link";
import Image from "next/image";
export default function NFT(props: any) {
  return (
    <Link href="/collection/detail">
      <div className="collection__col1">
        <Image src={props.imgUrl} alt="POAP" />
      </div>
    </Link>
  );
}
