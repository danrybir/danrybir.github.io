/***** STOLEN FROM STACK OVERFLOW *****/
// rgb in [0,1]
// h in [0,360) and s,v in [0,1]
function rgb2hsv(r,g,b) {
    let v=Math.max(r,g,b),c=v-Math.min(r,g,b);
    let h=c&&((v==r)?(g-b)/c:((v==g)?2+(b-r)/c:4+(r-g)/c));
    return[60*(h<0?h+6:h),v&&c/v,v];
};
function hsv2rgb(h,s,v){
  let f=(n,k=(n+h/60)%6)=>v-v*s*Math.max(Math.min(k,4-k,1),0);
  return [f(5),f(3),f(1)];
};
/***** NO MORE STOLEN *****/
function pastel() {
    let rgb = Array.from(Array(3), () => Math.random());
    // saturate by 10%
    let hsv = rgb2hsv(...rgb);
    hsv[1] *= 1.1;
    hsv[1] = Math.min(hsv[1], 1);
    // mix with white
    rgb = hsv2rgb(...hsv);
    rgb = rgb.map((v) => v / 2 + .5);
    // return as hex string
    return `#${rgb.map((v) => Math.floor(v * 255).toString(16).padStart(2, '0')).join('')}`;
};
let epic;
function updateColor() {
    epic.style.color = pastel();
};
function shutUp() {
    document.getElementById('bottom').outerHTML = '';
};
window.addEventListener('DOMContentLoaded', () => {
    epic = document.getElementById('epic');
    epic.addEventListener('input', () => {
        updateColor();
    });
})