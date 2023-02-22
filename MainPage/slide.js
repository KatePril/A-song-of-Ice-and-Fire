document.addEventListener('DOMContentLoaded', function () {
  let wrap = document.getElementById('wrap');
  let top = wrap.querySelector('.top');
  let handle = wrap.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if (wrap.className.indexOf('skewed') != -1) {
    skew = 1000;
  }
  wrap.addEventListener('mousemove', function (e) {
    console.log(e.clientX);
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + 'px';

    top.style.width = e.clientX + skew + delta + 'px';
  })
})