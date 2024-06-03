
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>

      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />
        <div className="max-w-md mx-auto mt-4 flex flex-col gap-4 text-gray-500">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ipsam optio, dolorem provident vel quod ratione tempora esse voluptates delectus mollitia ullam alias rerum unde?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellat aspernatur fugiat quis ipsa laboriosam accusantium quasi nulla est corporis? Vero consequuntur enim cupiditate distinctio cum doloribus architecto assumenda deserunt.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, non. Error quidem nostrum vel? Qui.consectetur adipisicing elit. Nisi</p>
        </div>
      </section>
      <section className="text-center my-8">
        <div className="mt-8">
          <a href="" className="text-4xl underline text-gray-500">8839492521</a>
        </div>
      </section>

    </>
  );
}
