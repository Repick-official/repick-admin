import MainTitle from "@/components/titles/MainTitle";
import TotalItemContent from "@/components/totalItem/TotalItemContent";
import TopInfo from "@/components/wardrobe/TopInfo";
const total = 12;

function item() {
  return (
    <div className="mt-69pxr ml-104pxr">
      <div>
        <MainTitle mainTitleName="상품 종합 현황" />
        <div>
          <TopInfo total={total} />
          <TotalItemContent />
        </div>
      </div>
    </div>
  );
}
export default item;
