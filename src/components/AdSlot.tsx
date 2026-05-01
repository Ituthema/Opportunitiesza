export default function AdSlot() {
  return (
    <div className="min-h-[90px] w-full bg-sa-cloud flex items-center justify-center border rounded-md border-gray-200 my-6 relative overflow-hidden" aria-label="Advertisement">
      <span className="text-[10px] text-gray-400 uppercase tracking-widest pointer-events-none">Advertisement</span>
      {/* 
        Google AdSense Ins tag would go here once approved:
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      */}
    </div>
  );
}
