
const no = document.getElementById("btn2");
//group 1 of btts

const btt1 = document.getElementById('btt1');
const btt2 = document.getElementById('btt2');
const btt3 = document.getElementById('btt3');
const btt4 = document.getElementById('btt4');
const btt5 = document.getElementById('btt5');
const btt6 = document.getElementById('btt6');
const btt7 = document.getElementById('btt7');
const btt8 = document.getElementById('btt8');


//IMAGESSSSSS///////

const hands = document.getElementById('hands');
const sadcat = document.getElementById('sadcat');
const crying = document.getElementById('crying');
const sadboi = document.getElementById('sadboi');
const sadman  = document.getElementById('sadman');
const hahahuhu = document.getElementById('hahahuhu');
const hang = document.getElementById('hang');
const sadsad = document.getElementById('sadsad');



no.addEventListener("click", function (){
			btt1.style.opacity= "1";
			no.style.opacity= "0";
									
});

btt1.addEventListener("click", function (){
			btt1.style.opacity= "0";
			btt2.style.opacity= "1";
			hands.style.opacity= "1";
									
});

btt2.addEventListener("click", function (){
			btt2.style.opacity= "0";
			btt3.style.opacity= "1";
			sadsad.style.opacity= "1";
									
});

btt3.addEventListener("click", function (){
			btt3.style.opacity= "0";
			btt4.style.opacity= "1";
			crying.style.opacity= "1";
									
});

btt4.addEventListener("click", function (){
			btt5.style.opacity= "1";
			btt4.style.opacity= "0";
			sadboi.style.opacity= "1";					
});

btt5.addEventListener("click", function (){
			btt5.style.opacity= "0";
			btt6.style.opacity= "1";
			crying.style.opacity= "1";				
			frog.style.opacity= "1";
				
});

btt6.addEventListener("click", function (){
			btt6.style.opacity= "0";
			btt7.style.opacity= "1";
			sadman.style.opacity= "1";					
});

btt7.addEventListener("click", function (){
			btt7.style.opacity= "0";
			btt8.style.opacity= "1";
			hang.style.opacity= "1";			
			
					
			
});

btt8.addEventListener("click", function (){
			bbtt8.style.opacity= "0";
			btt1.style.opacity= "0";	 
		 frog.style.opacity= "1";	
							
});


let highestZ = 1;
class Paper {
  holdingPaper = false;
  mouseTouchX = 0;
  mouseTouchY = 0;
  mouseX = 0;
  mouseY = 0;
  prevMouseX = 0;
  prevMouseY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;
  init(paper) {
    document.addEventListener('mousemove', (e) => {
      if(!this.rotating) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.velX = this.mouseX - this.prevMouseX;
        this.velY = this.mouseY - this.prevMouseY;
      }
      const dirX = e.clientX - this.mouseTouchX;
      const dirY = e.clientY - this.mouseTouchY;
      const dirLength = Math.sqrt(dirX*dirX+dirY*dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;
      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = 180 * angle / Math.PI;
      degrees = (360 + Math.round(degrees)) % 360;
      if(this.rotating) {
        this.rotation = degrees;
      }
      if(this.holdingPaper) {
        if(!this.rotating) {
          this.currentPaperX += this.velX;
          this.currentPaperY += this.velY;
        }
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
      }
    })
    paper.addEventListener('mousedown', (e) => {
      if(this.holdingPaper) return;
      this.holdingPaper = true;
      paper.style.zIndex = highestZ;
      highestZ += 1;
      if(e.button === 0) {
        this.mouseTouchX = this.mouseX;
        this.mouseTouchY = this.mouseY;
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
      }
      if(e.button === 2) {
        this.rotating = true;
      }
    });
    window.addEventListener('mouseup', () => {
      this.holdingPaper = false;
      this.rotating = false;
    });
  }
}
const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
  




 


















