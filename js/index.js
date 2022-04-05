const cart = document.querySelector(".social-media a:last-child img");
var check = false;
var cartlist = [];
var mtbody = document.getElementById("modal_tbody");
var z = 1;

interact(".dropzone").dropzone({
  accept: ".artwork",
  overlap: 0.3,
  ondropactivate: function (event) {
    event.relatedTarget.style.zIndex = z;
    z += 1;
    //放下時會觸發
    // add active dropzone feedback
    event.target.classList.add("drop-active");
  },
  ondragenter: function (event) {
    //抓起來時，碰到指定區域會觸發
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add("drop-target");
    check = true;
  },
  ondragleave: function (event) {
    //抓起來從指定區域抓出會觸發
    check = false;
    event.target.classList.remove("drop-target");
  },
  ondropdeactivate: function (event) {
    //放下時觸發
    var draggableElement = event.relatedTarget;
    if (check == true) {
      // cartlist.push(draggableElement)
      let price = draggableElement.children[0].getAttribute("value");
      let tamp = draggableElement.children[0].src.split("/").pop();
      let artname = tamp.split(".")[0];
      // cartlist.push(Object.assign({artname,price}));
      var tr = document.createElement("tr");
      tr.innerHTML =
        '<th scope="row"></th><td>' +
        artname +
        "</td><td>" +
        price +
        '</td><td><input class="fa-solid fa-circle-xmark" style="color: red;font-size: 24px" type="button" onclick="reart(\'' +
        tamp +
        "'," +
        price +
        ",this" +
        ')"></td>';
      mtbody.appendChild(tr);
      // console.log(cartlist);
      // console.log(price);
      draggableElement.remove();
      alert("已加入購物車");
      check = false;
    }
    event.target.classList.remove("drop-active");
    event.target.classList.remove("drop-target");
  },
});

interact(".drag-drop").draggable({
  inertia: true,
  autoScroll: false,
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
      endOnly: true,
      autoScroll: false,
    }),
  ],
  listeners: {
    move: (event) => {
      var target = event.target,
        x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
        y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    },
  },
});
