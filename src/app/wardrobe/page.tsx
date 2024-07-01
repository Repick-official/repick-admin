import MainTitle from "@/components/titles/MainTitle";
import TopInfo from "@/components/wardrobe/TopInfo";
import WardrobeContent from "@/components/wardrobe/WardrobeContent";

function wardrobe() {
  const total = 12;

  return (
    <div className="mt-69pxr ml-104pxr">
      <div>
        <MainTitle mainTitleName="옷장 정리 현황" />
        <div className="w-694pxr">
          <TopInfo total={total} />
          <WardrobeContent />
        </div>
      </div>
    </div>
  );
}
export default wardrobe;
