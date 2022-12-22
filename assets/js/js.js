const figuras = document.querySelectorAll(".xgamaC figure");
const producto = document.getElementById("producto");

gamaDeColores = document.querySelector(".card div");
cantidad = document.querySelector("input").valueAsNumber
document.querySelector("div .cantidad-circulo").innerHTML = cantidad
precio = 40000;

colorSeleccionado = false;
productoSeleccionado = "";

for (let figura of figuras) {

    figura.addEventListener("mouseover", (e) => {
        const claseDeLaFigura = e.target.className
        if (claseDeLaFigura == "xcolorNe") {
            producto.src = "../DesafioJS/assets/img/LaptopNe.png";
        } else if (claseDeLaFigura == "xcolorAz") {
            producto.src = "../DesafioJS/assets/img/LaptopAz.png";
        } else if (claseDeLaFigura == "xcolorVe") {
            producto.src = "../DesafioJS/assets/img/LaptopVe.png";
        } else if (claseDeLaFigura == "xcolorRo") {
            producto.src = "../DesafioJS/assets/img/LaptopRo.png";
        } else {
            producto.src = "../DesafioJS/assets/img/LaptopAm.png";
        }
    })

    figura.addEventListener("click", (e) => {
        figuras.forEach(element => {
            element.style.scale = "1";
            element.style.border = "none";
        });
        figura.style.border = "white 3px solid"
        figura.style.scale = "1.3"
        productoSeleccionado = producto.src
        colorSeleccionado = true;
        vibracionDelProducto = document.getElementById("producto")
        vibracionDelProducto.classList.toggle("rotacion")
        x = e.target.className
        a = document.querySelector("." + x)
        b = getComputedStyle(a)
        c = b.backgroundColor
        document.querySelector(".circulo-carrito").style.backgroundColor = c
    })


    gamaDeColores.addEventListener("mouseleave", () => {
        if (colorSeleccionado) {
            producto.src = productoSeleccionado;
        }
    })

}

function calculo() {
    cantidad = document.querySelector("input").valueAsNumber
    document.querySelector("div .cantidad-circulo").innerHTML = cantidad
    calculoTotal = cantidad * precio;
    document.querySelector("span").textContent = new Intl.NumberFormat('es').format(calculoTotal);
}


/*  
<html>
  <body>
    <style>
      @keyframes mover {
        from {
          margin-left: 0;
        }
        to {
          margin-left: 400px;
        }
      }
      button {
        animation-name: mover;
        animation-iteration-count: infinite;
        animation-duration: 10s;
      }
    </style>

    <script>
      document.querySelector("button").style.animationPlayState = "running";

      setTimeout(() => {
        document.querySelector("button").style.animationPlayState = "paused";
      }, 3000);
    </script>
  </body>
</html>
*/