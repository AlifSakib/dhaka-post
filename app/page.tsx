import Header from "@/components/Header";
import TopCarousel from "@/components/TopCarousel";
import TheLatestSidebar from "@/components/TheLatestSidebar";
import FeaturedArticle from "@/components/FeaturedArticle";
import RightSidebar from "@/components/RightSidebar";
import OpinionSection from "@/components/OpinionSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#F0F1F2'}}>
      <Header />
      <TopCarousel />
      
      <main className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - The Latest */}
          <aside className="lg:col-span-3">
            <TheLatestSidebar />
            <OpinionSection />
          </aside>

          {/* Main Content Area */}
          <section className="lg:col-span-6">
            <FeaturedArticle />
          </section>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3">
            <RightSidebar />
          </aside>
        </div>
      </main>
    </div>
  );
}
