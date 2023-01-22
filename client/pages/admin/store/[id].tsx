import AdminFooter from "@/src/components/AdminFooter";
import AdminHeader from "@/src/components/AdminHeader";
import Image from "next/image";
import { useRouter } from "next/router";

const StoreDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <div className="store-detail">
      <AdminHeader></AdminHeader>
      <div className="store-detail__container">
        <div className="store-detail__image-qr">
          <Image
            src="https://images.reactbricks.com/src_set/9e37bdce-6ee2-44da-93e9-2ac1f97e6ca8-500/MillerLite.webp"
            alt="miler"
            width={250}
            height={250}></Image>
          <Image className="qrexample" src="/images/didyoueatqr.png" alt="qrexample" width={250} height={250}></Image>
        </div>
        <div className="store-detail__description">
          <p>가게이름: Miler Draft</p>
          <p>생성일자: 2021년 12월 25일</p>
          <p>가게장소: 서울시 서초구 서초대로 72길 178-12</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum rerum cum suscipit doloribus
            repudiandae voluptate magnam, quod dolores blanditiis ad voluptatem velit sed accusantium culpa, quibusdam
            voluptates alias maiores animi, illum impedit veritatis eveniet amet recusandae! Expedita, harum itaque
            nobis numquam optio unde sint, quos a recusandae alias maxime quia atque repellat rerum laborum quis ipsum
            doloremque aliquid velit? Praesentium voluptas perferendis nisi vero. Corporis excepturi asperiores odio!
            Eum possimus magni id tempore iusto temporibus facilis magnam! Explicabo culpa nemo modi, fugiat labore
            minima sequi, ipsum, eum aspernatur rerum sit fuga? Nihil id, ullam aspernatur tempore optio reiciendis unde
            porro aliquid, sequi earum minima fuga tenetur dolores voluptate sint maiores adipisci voluptates quibusdam
            odit! Accusantium possimus deleniti consectetur qui, voluptatem eligendi explicabo. Doloribus, illum
            voluptatibus, in aperiam hic repellat vitae, exercitationem vero iusto ex odit temporibus quaerat itaque
            libero accusantium. Sit quo tenetur sint, ducimus esse nihil impedit tempora veritatis itaque vitae? Eveniet
            nesciunt amet corporis possimus ad esse ex consequatur architecto! Ullam sequi laboriosam minus aliquam
            accusamus saepe ipsam blanditiis molestias maiores. Eveniet odit amet modi aperiam cum nulla quibusdam
            explicabo, adipisci nam ex fuga, sint soluta accusantium ad porro. Aut asperiores sequi quisquam eum
            doloremque cupiditate fugit quaerat numquam quas cumque laudantium, architecto, dolor culpa? Aperiam vitae
            magni earum aut, quia repellat dolorum, soluta labore voluptas recusandae at est cum omnis iure tenetur hic
            sapiente harum tempore excepturi assumenda impedit pariatur et. Exercitationem porro nisi optio iste ipsa
            obcaecati nulla esse, doloremque laborum veniam perferendis accusantium tempore incidunt, temporibus labore
            voluptatem ea dolores molestiae soluta, officiis facilis molestias quas cum! Pariatur consequuntur dolor
            atque. Nisi consectetur, qui incidunt, maxime, at voluptatem quod tempore totam labore doloremque quae odit
            facere fugiat. Quo id, ipsam unde hic sit illo iusto doloribus fugit, fugiat reiciendis corporis nihil
            quisquam molestias ex?
          </p>
        </div>
      </div>
      <AdminFooter></AdminFooter>
    </div>
  );
};

export default StoreDetail;
