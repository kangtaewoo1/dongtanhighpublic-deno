const HTML = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>동탄 하이퍼블릭 | 2026 동탄 야간 핫플 TOP 선택</title>
<meta name="description" content="2026년 동탄에서 지금 가장 뜨는 야간 핫플. 동탄 하이퍼블릭 — 프리미엄 사운드, 전용 무대, 동탄 전 지역 무료 픽업.">
<link rel="canonical" href="https://dongtanhighpublic-deno.kangtaewoo1.deno.net/">
<meta name="robots" content="index,follow,max-image-preview:large">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#060606;--surface:#0e0e0e;--gold:#C9A84C;--gold2:#E8C96A;--gold-dim:#6b5a28;--text:#F0EAD6;--muted:#777;--border:#222}
body{font-family:system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.7}
a{color:inherit;text-decoration:none}
.wrap{max-width:1100px;margin:0 auto;padding:0 24px}
header{position:fixed;top:0;left:0;right:0;z-index:200;transition:background .3s}
header.scrolled{background:rgba(6,6,6,.97);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.header-inner{display:flex;align-items:center;justify-content:space-between;padding:18px 40px}
.logo-mark{width:36px;height:36px;background:linear-gradient(135deg,var(--gold),var(--gold2));border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.85rem;color:#000}
.logo{display:flex;align-items:center;gap:10px}
.logo-text{font-size:.95rem;font-weight:700;letter-spacing:2px}
.logo-sub{font-size:.7rem;color:var(--muted);letter-spacing:1px;display:block}
nav{display:flex;gap:32px}
nav a{font-size:.85rem;letter-spacing:1px;color:var(--muted);transition:.2s;font-weight:500}
nav a:hover{color:var(--gold)}
.tel-btn{background:transparent;border:1px solid var(--gold);color:var(--gold);padding:9px 22px;border-radius:3px;font-size:.85rem;font-weight:700;letter-spacing:1px}
.hero{height:100vh;min-height:640px;position:relative;display:flex;align-items:center;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:#060606}
.hero-orb1{position:absolute;width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,.06) 0%,transparent 60%);top:-200px;right:-200px;animation:float 8s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
.hero-content{position:relative;z-index:2;width:100%}
.eyebrow-badge{background:rgba(201,168,76,.15);border:1px solid rgba(201,168,76,.3);color:var(--gold);font-size:.72rem;letter-spacing:3px;padding:5px 14px;text-transform:uppercase;display:inline-block;margin-bottom:24px}
.hero h1{font-size:3.6rem;font-weight:900;line-height:1.15;margin-bottom:24px;letter-spacing:-2px}
.hero h1 .line1{display:block}
.hero h1 .line2{display:block;background:linear-gradient(90deg,var(--gold),var(--gold2),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-desc{font-size:1rem;color:var(--muted);max-width:480px;margin-bottom:44px;line-height:2}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap}
.btn-primary{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:#000;padding:14px 32px;font-size:.95rem;font-weight:700;letter-spacing:1px}
.btn-ghost{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(201,168,76,.4);color:var(--gold);padding:14px 28px;font-size:.95rem;letter-spacing:1px}
.hero-stats{display:flex;gap:40px;margin-top:56px}
.hero-stat-num{font-size:1.8rem;font-weight:900;color:var(--gold);line-height:1}
.hero-stat-label{font-size:.75rem;color:var(--muted);margin-top:4px}
section{padding:100px 0}
.sec-label{font-size:.7rem;letter-spacing:4px;color:var(--gold);text-transform:uppercase;margin-bottom:14px;display:block}
.sec-title{font-size:2.4rem;font-weight:900;margin-bottom:10px;letter-spacing:-1px}
.divider{width:40px;height:2px;background:linear-gradient(to right,var(--gold),transparent);margin:16px 0 48px}
.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border)}
.feat-card{background:var(--bg);padding:48px 36px}
.feat-glyph{font-size:2.4rem;margin-bottom:20px}
.feat-title{font-size:1.05rem;font-weight:700;margin-bottom:10px}
.feat-desc{font-size:.87rem;color:var(--muted);line-height:1.9}
.feat-tag{display:inline-block;margin-top:16px;font-size:.72rem;color:var(--gold);border:1px solid var(--gold-dim);padding:3px 10px;letter-spacing:1px}
.vibe-section{background:var(--surface)}
.vibe-list{display:grid;grid-template-columns:repeat(2,1fr);gap:2px}
.vibe-card{background:var(--bg);padding:40px 32px;display:flex;gap:20px}
.vibe-icon{font-size:2rem;flex-shrink:0}
.vibe-title{font-size:.95rem;font-weight:700;margin-bottom:8px}
.vibe-desc{font-size:.85rem;color:var(--muted);line-height:1.8}
.faq-list{display:flex;flex-direction:column;gap:2px}
.faq-item{background:var(--surface);overflow:hidden}
.faq-q{padding:22px 28px;font-weight:600;font-size:.95rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center}
.faq-icon{width:20px;height:20px;border:1px solid var(--muted);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.65rem;flex-shrink:0;transition:.3s}
.faq-item.open .faq-icon{border-color:var(--gold);color:var(--gold);transform:rotate(45deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .35s ease}
.faq-item.open .faq-a{max-height:200px}
.faq-a-inner{padding:0 28px 22px;font-size:.88rem;color:var(--muted);line-height:1.8;border-left:2px solid var(--gold);margin:0 28px 22px}
.link-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
.link-card{background:var(--surface);padding:28px 24px;display:flex;align-items:center;gap:14px;border-top:1px solid var(--border)}
.link-name{font-size:.95rem;font-weight:700;margin-bottom:4px}
.link-desc{font-size:.78rem;color:var(--muted)}
.cta-section{position:relative;overflow:hidden;padding:120px 0;text-align:center}
.cta-bg{position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(201,168,76,.08) 0%,transparent 60%),var(--bg)}
.cta-content{position:relative;z-index:2}
.cta-tel{display:inline-flex;align-items:center;gap:14px;background:var(--gold);color:#000;padding:18px 52px;font-size:1.15rem;font-weight:900;letter-spacing:2px;margin-top:36px}
.cta-note{font-size:.8rem;color:var(--muted);margin-top:16px}
footer{background:#000;border-top:1px solid var(--border);padding:36px 0;text-align:center}
footer p{font-size:.78rem;color:var(--muted);line-height:2}
.floating-tel{position:fixed;bottom:28px;right:28px;z-index:300;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#000;width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem;box-shadow:0 4px 28px rgba(201,168,76,.45)}
@media(max-width:900px){.header-inner{padding:14px 20px}nav{display:none}.hero h1{font-size:2.2rem}.feat-grid{grid-template-columns:1fr;background:none;gap:2px}.vibe-list{grid-template-columns:1fr}.link-grid{grid-template-columns:1fr}.hero-stats{gap:24px}}
@media(max-width:600px){.hero h1{font-size:1.8rem}.sec-title{font-size:1.8rem}section{padding:64px 0}}
</style>
</head>
<body>
<header id="header">
  <div class="header-inner">
    <div class="logo"><div class="logo-mark">동</div><div><div class="logo-text">동탄하이퍼블릭</div><span class="logo-sub">2026 DONGTAN HOTSPOT</span></div></div>
    <nav><a href="#features">특징</a><a href="#vibe">분위기</a><a href="#faq">FAQ</a></nav>
    <a href="tel:01056719712" class="tel-btn">📞 예약하기</a>
  </div>
</header>
<section class="hero">
  <div class="hero-bg"></div><div class="hero-orb1"></div>
  <div class="hero-content wrap">
    <div class="eyebrow-badge">2026 동탄 야간 선택</div>
    <h1><span class="line1">동탄 밤의 중심,</span><span class="line2">하이퍼블릭</span></h1>
    <p class="hero-desc">프리미엄 사운드, 전용 무대, 투명한 요금.<br>늦은 밤 동탄에서 가장 스마트한 선택.<br>24시간 · 동탄 전 지역 무료 픽업.</p>
    <div class="hero-actions">
      <a href="tel:01056719712" class="btn-primary">📞 지금 예약</a>
      <a href="#features" class="btn-ghost">자세히 보기</a>
    </div>
    <div class="hero-stats">
      <div><div class="hero-stat-num">24H</div><div class="hero-stat-label">연중무휴 운영</div></div>
      <div><div class="hero-stat-num">0원</div><div class="hero-stat-label">선입금 없음</div></div>
      <div><div class="hero-stat-num">전 지역</div><div class="hero-stat-label">무료 픽업</div></div>
    </div>
  </div>
</section>
<section id="features">
  <div class="wrap">
    <span class="sec-label">WHAT MAKES IT DIFFERENT</span>
    <h2 class="sec-title">동탄 하이퍼블릭이 선택받는 이유</h2>
    <div class="divider"></div>
    <div class="feat-grid">
      <div class="feat-card"><div class="feat-glyph">🎤</div><div class="feat-title">전용 무대 · 프리미엄 사운드</div><div class="feat-desc">일반 노래방과 차원이 다른 프리미엄 사운드 시스템. 넓은 전용 무대에서 제대로 즐기는 경험.</div><span class="feat-tag">PREMIUM SOUND</span></div>
      <div class="feat-card"><div class="feat-glyph">💰</div><div class="feat-title">정찰제 · 후불제 · 투명한 요금</div><div class="feat-desc">이용 전에 금액을 먼저 확인하고 시작합니다. 선입금 없이 이용 후 결제. 추가 청구 없는 정찰제 운영.</div><span class="feat-tag">TRANSPARENT PRICE</span></div>
      <div class="feat-card"><div class="feat-glyph">🚗</div><div class="feat-title">동탄 전 지역 무료 픽업</div><div class="feat-desc">동탄역부터 동탄2, 반송동, 병점, 진안동까지. 어디서든 5~15분 내 무료 픽업. 24시간 운영.</div><span class="feat-tag">FREE PICKUP</span></div>
      <div class="feat-card"><div class="feat-glyph">🏢</div><div class="feat-title">법인·단체 회식 최적화</div><div class="feat-desc">법인카드 결제 가능. 5인 이상 팀 회식, 기업 접대에 특화. 단체 모임을 위한 프리미엄 서비스.</div><span class="feat-tag">CORPORATE READY</span></div>
      <div class="feat-card"><div class="feat-glyph">⏰</div><div class="feat-title">24시간 · 365일 운영</div><div class="feat-desc">주말, 공휴일, 새벽 구분 없이 365일 24시간 운영. 금요일 새벽, 주말 늦은 시간도 OK.</div><span class="feat-tag">24/7 OPEN</span></div>
      <div class="feat-card"><div class="feat-glyph">📍</div><div class="feat-title">동탄 생활권 전체 커버</div><div class="feat-desc">동탄역·동탄2·반송·병점·능동·산척·영천동 전 생활권 서비스. 동탄 어디서든 연결됩니다.</div><span class="feat-tag">FULL COVERAGE</span></div>
    </div>
  </div>
</section>
<section id="vibe" class="vibe-section">
  <div class="wrap">
    <span class="sec-label">THE EXPERIENCE</span>
    <h2 class="sec-title">동탄 하이퍼블릭 경험</h2>
    <div class="divider"></div>
    <div class="vibe-list">
      <div class="vibe-card"><div class="vibe-icon">🎵</div><div><div class="vibe-title">프리미엄 사운드 시스템</div><div class="vibe-desc">전용 무대에 설치된 고음질 사운드 장비. 일반 노래방과는 다른 경험을 하게 됩니다.</div></div></div>
      <div class="vibe-card"><div class="vibe-icon">🥂</div><div><div class="vibe-title">주류 · 안주 코스</div><div class="vibe-desc">인원과 예산에 맞는 코스를 미리 안내드립니다. 선택한 코스 외 추가 요금 없습니다.</div></div></div>
      <div class="vibe-card"><div class="vibe-icon">🌙</div><div><div class="vibe-title">동탄 야간의 중심</div><div class="vibe-desc">24시간 운영으로 시간 제약 없이 즐길 수 있습니다.</div></div></div>
      <div class="vibe-card"><div class="vibe-icon">👥</div><div><div class="vibe-title">1인부터 단체까지</div><div class="vibe-desc">인원에 맞게 룸과 코스를 배정해드립니다.</div></div></div>
    </div>
  </div>
</section>
<section id="faq">
  <div class="wrap">
    <span class="sec-label">FAQ</span>
    <h2 class="sec-title">자주 묻는 질문</h2>
    <div class="divider"></div>
    <div class="faq-list">
      <div class="faq-item"><div class="faq-q">동탄역 근처에서 가장 가까운 하이퍼블릭인가요? <span class="faq-icon">+</span></div><div class="faq-a"><div class="faq-a-inner">동탄역을 포함한 동탄 전 지역 무료 픽업을 제공합니다. 동탄역에서 평균 5분 내 픽업이 가능합니다.</div></div></div>
      <div class="faq-item"><div class="faq-q">주말 새벽에도 이용 가능한가요? <span class="faq-icon">+</span></div><div class="faq-a"><div class="faq-a-inner">24시간 365일 운영합니다. 주말 새벽도 문제없습니다.</div></div></div>
      <div class="faq-item"><div class="faq-q">가격은 어떻게 되나요? <span class="faq-icon">+</span></div><div class="faq-a"><div class="faq-a-inner">인원·시간에 따라 다릅니다. 전화 문의 시 정찰제 가격을 먼저 안내드립니다. 선입금 없이 이용 후 결제합니다.</div></div></div>
      <div class="faq-item"><div class="faq-q">법인카드 결제가 되나요? <span class="faq-icon">+</span></div><div class="faq-a"><div class="faq-a-inner">가능합니다. 법인 회식·접대 목적 이용이 많습니다. 영수증도 발행 가능합니다.</div></div></div>
    </div>
  </div>
</section>
<section style="background:var(--surface)">
  <div class="wrap">
    <span class="sec-label">RELATED</span>
    <h2 class="sec-title">관련 안내</h2>
    <div class="divider"></div>
    <div class="link-grid">
      <a href="https://dongtanhyperpublic.com/" class="link-card"><div>🏠</div><div><div class="link-name">동탄하이퍼블릭 공식</div><div class="link-desc">공식 대표 사이트</div></div></a>
      <a href="https://dongtanhighpublic.onrender.com/" class="link-card"><div>🚗</div><div><div class="link-name">픽업 지역 상세 안내</div><div class="link-desc">동탄 전 지역 픽업 가이드</div></div></a>
      <a href="https://dongtanhighpublic-146282.gitlab.io/" class="link-card"><div>📊</div><div><div class="link-name">하이퍼블릭 vs 룸싸롱</div><div class="link-desc">차이점 비교 가이드</div></div></a>
    </div>
  </div>
</section>
<section class="cta-section">
  <div class="cta-bg"></div>
  <div class="cta-content wrap">
    <span class="sec-label" style="display:block;text-align:center">RESERVE NOW</span>
    <h2 class="sec-title" style="text-align:center">지금 동탄 하이퍼블릭 예약</h2>
    <div class="divider" style="margin:16px auto 20px"></div>
    <p style="color:var(--muted);text-align:center">24시간 · 무료 픽업 · 정찰제 · 선입금 없음</p>
    <div style="text-align:center">
      <a href="tel:01056719712" class="cta-tel">📞 010-5671-9712</a>
      <p class="cta-note">오후 7시 — 오전 8시 · 365일</p>
    </div>
  </div>
</section>
<footer><p>동탄 하이퍼블릭 | 2026 동탄 야간 핫플 | 경기도 화성시 동탄 | 24시간 운영</p></footer>
<a href="tel:01056719712" class="floating-tel">📞</a>
<script>
const header=document.getElementById('header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>60));
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.closest('.faq-item'),was=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!was)item.classList.add('open');
  });
});
</script>
</body>
</html>`;

Deno.serve({ port: parseInt(Deno.env.get("PORT") ?? "8000") }, (_req) => {
  return new Response(HTML, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});
