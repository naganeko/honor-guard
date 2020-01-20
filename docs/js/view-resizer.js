
function perform_fullscreen(dom, canvas_w, canvas_h)  {
  // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) )

  var $cnt = dom ;//$("#content");
    var ww, wh;
    let oldw = $(window).width();
    let oldh = $(window).height();
    ww = oldw;
    wh = oldh;
    // var canvas_w = $cnt.width();//1280; // min width of site
    // var canvas_h = $cnt.height();//720; // min width of site

    // window width is wider than this page
    let wr = 1.0 * ww / wh;
    let mr = 1.0 * canvas_w / canvas_h;
    var ratio;
    var base;
    var top = 0, left = 0;
    // console.log("win=", ww, wh);
    // console.log("base w=", canvas_w, "h=", canvas_h);
    // console.log("wr=", wr, "mr=", mr);
    if (wr <= mr) {
      ratio = ww / canvas_w;
      // console.log("width", ww, wh, canvas_w, canvas_h, wr, mr, "r=", ratio);
      $('#vp0').attr('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=no, height=' + canvas_h);
      base = "width";
    } else {
      ratio = wh / canvas_h;
      // console.log("height", ww, wh, canvas_w, canvas_h, wr, mr, "r=", ratio);
      $('#vp0').attr('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=no, width=' + canvas_w);
      base = "height";
    }
    // setTimeout(function () {
    ww = $(window).width();
    wh = $(window).height();
    // ww = window.innerWidth;
    // console.log("base=", base, "ww=", ww, "wh=", wh, canvas_w, canvas_h, wr, mr, "r=", ratio);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      var w = $cnt.width();
      var h = $cnt.height();
      if (base === "width") {
        top = Math.abs(wh - canvas_h) / 2;
      } else {
        left = Math.abs(ww - canvas_w) / 2
      }
      $cnt.offset({left: left, top: top});
    } else {
      $cnt.css("transform", "scale(" + ratio + ")");
      desktop_scale = ratio;
      if (base === "width") {
        top = Math.abs(wh - canvas_h * ratio) / 2;
      } else {
        left = Math.abs(ww - canvas_w * ratio) / 2;
      }
      $cnt.offset({left: left, top: top});
    }
    setTimeout(function () {
      $("body").css("opacity", "1");
    }, 10)

    // }, 5);

  }