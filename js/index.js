const modal = document.getElementById("modal");
const wechatbtn = document.getElementById("wechat-btn");
const wechatqr = document.getElementById("wechat-qr");
wechatbtn.addEventListener("click", function () {
  modal.style.display = "flex";
  wechatqr.style.display = "block";
})
const qqbtn = document.getElementById("qq-btn");
const qqqr = document.getElementById("qq-qr");
qqbtn.addEventListener("click", function () {
  modal.style.display = "flex";
  qqqr.style.display = "block";
})
function closeModal() {
  modal.style.display = "none";
  wechatqr.style.display = "none";
  qqqr.style.display = "none";
}
modal.addEventListener("click", function (){closeModal()})
const sections = document.querySelectorAll("header section,main section");
const navLinks = document.querySelectorAll(".nav-link");
const indicator = document.querySelector(".nav-indicator");
function moveIndicator(link){
  const left = link.offsetLeft;
  indicator.style.transform = `translateX(${left}px)`;
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href")=== "#" + id){
          link.classList.add("active");
          moveIndicator(link);
        }
      });
    }
  });
},{
  rootMargin: "-40% 0px -40% 0px"
});
sections.forEach(section => {
  observer.observe(section);
});
