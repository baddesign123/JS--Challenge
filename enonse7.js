      let div = document.createElement("div");
      let ipt = document.createElement("input");
      document.body.append(div);
      div.append(ipt);
      ipt.setAttribute("type", "text");

      function kreye(message, stil) {
        if (!document.getElementById("erreur")) {
          let div1 = document.createElement("div");
          div.style["color"] = stil;
          div1.id = "erreur";
          div.append(div1);
          div1.innerText = message;
        } else {
          let g = document.getElementById("erreur");
          g = g.remove();
          g = document.createElement("div");
          div.style["color"] = stil;
          g.id = "erreur";
          div.append(g);
          g.innerText = message;
        }
      }

      ipt.addEventListener("keyup", function (e) {
        let t = ipt.value.length;
        if (isNaN(ipt.value)) {
          kreye("Fok li yon chif", "red");
        }
        else{
        if(t != 8){
            kreye("Fok li gen 8 karakte", "red");
        }
        if (t == 8 && !isNaN(ipt.value)) {
          kreye("Li bon", "green");
        }
    }
      });