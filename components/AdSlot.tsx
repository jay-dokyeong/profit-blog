export default function AdSlot() {
// 고정 크기 슬롯으로 CLS 방지 (실제 광고 ID로 교체)
return (
<div className="adwrap">
<div style={{ width: 336, height: 280 }}>
<ins className="adsbygoogle"
style={{ display:'inline-block', width: 336, height: 280 }}
data-ad-client="ca-pub-XXXX"
data-ad-slot="YYYY" />
<script dangerouslySetInnerHTML={{__html: "(adsbygoogle=window.adsbygoogle||[]).push({});"}} />
</div>
</div>
);
}
