import CartModel from "./common/CartModel";
import WishListModel from "./common/WishListModel";
import LuxuryGlowBanner from "./home-page/Banner";
import CategoryIndex from "./home-page/CategoryIndex";
import CategoryWiseSections from "./home-page/CategoryWiseSection";
import Faq from "./home-page/Faq";
import NewArrivals from "./home-page/NewArrivals";
import ShopByCategory from "./home-page/ShopByCategory";
import TopSelling from "./home-page/TopSelling";
import WhyChooseUs from "./home-page/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-black w-screen overflow-x-hidden ">

      <WishListModel />
      <CartModel />

      <LuxuryGlowBanner />
      <NewArrivals />
      <WhyChooseUs />

      <ShopByCategory />
      <TopSelling />
      <CategoryIndex />
      <Faq />
    </div>
  );
}
