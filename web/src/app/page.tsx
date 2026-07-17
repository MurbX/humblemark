import BestSellers from "@/components/best-sellers";
import Categories from "@/components/categories";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Story from "@/components/story";
import ValueProps from "@/components/value-props";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ValueProps />
        <Categories />
        <BestSellers />
        <Story />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
