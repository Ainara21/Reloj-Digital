window.onload = function () {
  const cvs = document.querySelector("#canvas");
  const ctx = cvs.getContext("2d");
  ctx.lineWidth = 9; //change here circles line-width
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "1.8rem arial"; //you can put the font outside canvas if you prefer
  ctx.fillStyle = "gray";
  ctx.lineCap = "round";

  function getTime() {
    let date = new Date();

    let h = date.getHours();
    let s = date.getSeconds();
    let m = date.getMinutes();
    let dia = date.getDay();
	let mes = date.getMonth();
	let diaMes = date.getDate();

    // Calculate percentage to be drawn
    var hp = (100 / 12) * (h % 12);
    var mp = (100 / 60) * m;
    var sp = (100 / 60) * s;

    // Ensure double digits
    let dateString =
      (h < 10 ? "0" : "") +
      h +
      " : " +
      (m < 10 ? "0" : "") +
      m +
      " : " +
      (s < 10 ? "0" : "") +
      s;

    ctx.clearRect(0, 0, 350, 350);
    ctx.fillText(dateString, 175, 175);
    draw(95, hp, "#C70039 "); //change here circles radius y color
    draw(115, mp, "#900C3F");
    draw(135, sp, "#581845");

	if(dia == 0) { dia = 'Dom.' ; }
    if(dia==  1) { dia = 'Lun.' ; }
	if(dia == 2) { dia = 'Mar.' ; }
    if(dia==  3) { dia = 'Mie.' ; }
	if(dia == 4) { dia = 'Jue.' ; }
    if(dia==  5) { dia = 'Vie.' ; }
	if(dia==  6) { dia = 'Sab.' ; }

	//meses
	if(mes == 0) { mes = 'Enero' ; }
    if(mes==  1) { mes = 'Febrero' ; }
	if(mes == 2) { mes = 'Marzo' ; }
    if(mes==  3) { mes = 'Abril' ; }
	if(mes == 4) { mes = 'Mayo' ; }
    if(mes==  5) { mes = 'Junio' ; }
	if(mes==  6) { mes = 'Julio' ; }
	if(mes==  7) { mes = 'Agosto' ; }
	if(mes == 8) { mes = 'Septiembre' ; }
    if(mes==  9) { mes = 'Octubre' ; }
	if(mes == 10) { mes = 'Noviembre' ; }
    if(mes==  11) { mes = 'Diciembre' ; }
	




    const clockHours = document.querySelector(".fecha");
    let HTMLString = "";

    HTMLString += `
			   <div class="dia">
                 ${dia}
               </div>
               <div class="numero">
			     ${diaMes}
               </div>
			   <div class="de">
                  de 
               </div>
               <div class="mes">
			      ${mes}
               </div>
				`;

    clockHours.innerHTML = HTMLString;

    

	
    
  }

  /**
   * Draw circles
   */
  var draw = (function () {
    var start = 1.5 * Math.PI; // Start circle from top
    var end = (2 * Math.PI) / 100; // One percent of circle

    /**
     * Draw percentage of a circle
     *
     * @param {number} r Radius
     * @param {number} p Percentage of circle
     * @param {string} c Stroke color
     * @return void
     */
    return function (r, p, c) {
      p = p || 100; // When time is '00' we show full circle
      ctx.strokeStyle = c;
      ctx.beginPath();
      ctx.arc(175, 175, r, start, p * end + start, false);
      ctx.stroke();
    };
  })();

  setInterval(getTime, 1000);
};
