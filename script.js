
  // scroll progress
  const prog=document.getElementById('progress');
  addEventListener('scroll',()=>{const h=document.documentElement;const p=h.scrollTop/(h.scrollHeight-h.clientHeight);prog.style.width=(p*100)+'%'},{passive:true});

  // mobile menu
  const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

  // reveal + counters
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(e.target.classList.contains('stats'))runCounters(e.target);io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  function runCounters(scope){
    scope.querySelectorAll('[data-count]').forEach(el=>{
      const target=+el.dataset.count,pre=el.dataset.prefix||'',suf=el.dataset.suffix||'';let cur=0;
      const step=Math.max(1,Math.round(target/40));
      const t=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(t)}el.textContent=pre+cur+suf},22);
    });
  }

  // card spotlight
  document.querySelectorAll('.card').forEach(c=>{
    const inner=c.querySelector('.card-in');
    c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();inner.style.setProperty('--mx',(e.clientX-r.left)+'px');inner.style.setProperty('--my',(e.clientY-r.top)+'px')});
  });

  // form -> mail client
  async function sendForm(e){
    e.preventDefault();const f=e.target,note=document.getElementById('formNote');
    note.style.color='var(--muted)';note.textContent='Gönderiliyor…';
    try{
      const r=await fetch('https://formsubmit.co/ajax/info@segetechnology.com',{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)});
      if(r.ok){f.reset();note.style.color='#5ce6a8';note.textContent='Teşekkürler! Mesajınız iletildi, en kısa sürede dönüş yapacağız.';}
      else throw 0;
    }catch(_){note.style.color='#ff8a8a';note.textContent='Gönderilemedi. Lütfen info@segetechnology.com adresine yazabilirsiniz.';}
    return false;
  }
  function hideCookie(){var c=document.getElementById('cookie');if(c)c.style.display='none';}
  function openKvkk(){document.getElementById('kvkk').classList.add('open');}
  function closeKvkk(){document.getElementById('kvkk').classList.remove('open');}

  // animated network background (performance-tuned)
  (function(){
    var cv=document.getElementById('net'); if(!cv) return;
    var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
    var weak = innerWidth<760 || (navigator.hardwareConcurrency||8)<=4 || (navigator.deviceMemory||8)<=2;
    if(reduce||weak){ cv.style.display='none'; return; }   // koyu ışıltı arka planı zaten var
    var ctx=cv.getContext('2d',{alpha:true});
    var DPR=Math.min(window.devicePixelRatio||1,1.5);
    var w,h,pts,raf,last=0,running=true;
    var N=Math.min(44,Math.floor(innerWidth/32));
    var LINK=130, LINK2=LINK*LINK, FRAME=1000/30;
    function size(){w=innerWidth;h=innerHeight;cv.width=Math.round(w*DPR);cv.height=Math.round(h*DPR);cv.style.width=w+'px';cv.style.height=h+'px';ctx.setTransform(DPR,0,0,DPR,0,0);}
    function init(){size();pts=[];for(var i=0;i<N;i++)pts.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3});}
    function draw(t){
      raf=requestAnimationFrame(draw);
      if(!running) return;
      if(t-last<FRAME) return; last=t;
      ctx.clearRect(0,0,w,h);
      for(var k=0;k<N;k++){var p=pts[k];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;}
      for(var i=0;i<N;i++){var a=pts[i];
        for(var j=i+1;j<N;j++){var b=pts[j],dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy;
          if(d2<LINK2){var al=(1-Math.sqrt(d2)/LINK)*.26;ctx.strokeStyle='rgba(80,160,255,'+al+')';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}}
      ctx.fillStyle='rgba(99,230,255,.62)';
      for(var m=0;m<N;m++){var q=pts[m];ctx.beginPath();ctx.arc(q.x,q.y,1.5,0,6.283);ctx.fill();}
    }
    init(); raf=requestAnimationFrame(draw);
    var rt; addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(init,200);});
    document.addEventListener('visibilitychange',function(){running=!document.hidden; if(running){last=0;}});
  })();
