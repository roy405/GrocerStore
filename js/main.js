"use strict";
var $ = jQuery.noConflict();
$.extend($.easing, {
    def: "easeOutQuad",
    swing: function (t, e, a, n, i) {
        return $.easing[$.easing.def](t, e, a, n, i);
    },
    easeOutQuad: function (t, e, a, n, i) {
        return -n * (e /= i) * (e - 2) + a;
    },
    easeOutQuint: function (t, e, a, n, i) {
        return n * ((e = e / i - 1) * e * e * e * e + 1) + a;
    },
}),
    (window.Panda = {}),
    (function () {
        var t, e, a, n;
        (Panda.$window = $(window)),
            (Panda.$body = $(document.body)),
            (Panda.status = ""),
            (Panda.minDesktopWidth = 992),
            (Panda.isIE = navigator.userAgent.indexOf("Trident") >= 0),
            (Panda.isEdge = navigator.userAgent.indexOf("Edge") >= 0),
            (Panda.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
            (Panda.defaults = {
                animation: { name: "fadeIn", duration: "1.2s", delay: ".2s" },
                isotope: { itemsSelector: ".grid-item", layoutMode: "masonry", percentPosition: !0, masonry: { columnWidth: ".grid-space" }, sortBy: "original-order" },
                minipopup: {
                    message: "",
                    productClass: "",
                    imageSrc: "",
                    imageLink: "#",
                    name: "",
                    nameLink: "#",
                    price: "",
                    count: null,
                    rating: null,
                    actionTemplate: "",
                    isPurchased: !1,
                    delay: 4e3,
                    space: 20,
                    priceTemplate: '<span class="product-price">{{price}}</span>',
                    ratingTemplate: '<div class="ratings-container"><div class="ratings-full"><span class="ratings" style="width:{{rating}}"></span><span class="tooltiptext tooltip-top"></span></div></div>',
                    priceQuantityTemplate: '<div class="price-box"><span class="product-quantity">{{count}}</span><span class="product-price">{{price}}</span></div>',
                    purchasedTemplate: '<span class="purchased-time">12 MINUTES AGO</span>',
                    template:
                        '<div class="minipopup-box"><p class="minipopup-title">{{message}}</p><div class="product product-purchased {{productClass}} mb-0"><figure class="product-media"><a href="{{imageLink}}"><img src="{{imageSrc}}" alt="product" width="90" height="90"></a></figure><div class="product-detail"><a href="{{nameLink}}" class="product-name">{{name}}</a>{{detailTemplate}}</div></div>{{actionTemplate}}</div>',
                },
                popup: {
                    removalDelay: 350,
                    callbacks: {
                        open: function () {
                            $("html").css("overflow-y", "hidden"),
                                $("body").css("overflow-x", "visible"),
                                $(".mfp-wrap").css("overflow", "hidden auto"),
                                $(".sticky-header.fixed").css("padding-right", window.innerWidth - document.body.clientWidth);
                        },
                        close: function () {
                            $("html").css("overflow-y", ""), $("body").css("overflow-x", "hidden"), $(".mfp-wrap").css("overflow", ""), $(".sticky-header.fixed").css("padding-right", "");
                        },
                    },
                },
                popupPresets: {
                    login: { type: "ajax", mainClass: "mfp-login mfp-fade", tLoading: "", preloader: !1 },
                    review: { type: "ajax", mainClass: "mfp-review mfp-fade", tLoading: "", preloader: !1 },
                    img: { type: "iframe", mainClass: "mfp-fade", preloader: !1, closeBtnInside: !1 },
                    quickview: { type: "ajax", mainClass: "mfp-product mfp-fade", tLoading: "", preloader: !1 },
                },
                slider: {
                    responsiveClass: !0,
                    navText: ['<i class="p-icon-angle-left">', '<i class="p-icon-angle-right">'],
                    checkVisible: !1,
                    items: 1,
                    smartSpeed: Panda.isEdge ? 200 : 500,
                    autoplaySpeed: Panda.isEdge ? 200 : 1e3,
                    autoplayTimeout: 1e4,
                },
                sliderPresets: {
                    "intro-slider": { animateIn: "fadeIn", animateOut: "fadeOut" },
                    "product-single-carousel": { dots: !1, nav: !0 },
                    "product-gallery-carousel": { dots: !1, nav: !0, margin: 20, items: 1, responsive: { 576: { items: 2 }, 768: { items: 3 } } },
                    "rotate-slider": { dots: !1, nav: !0, margin: 0, items: 1, animateIn: "", animateOut: "" },
                },
                sliderThumbs: { margin: 0, items: 4, dots: !1, nav: !0, navText: ['<i class="fas fa-chevron-left">', '<i class="fas fa-chevron-right">'] },
                stickyContent: { minWidth: Panda.minDesktopWidth, maxWidth: 2e4, minWidth: 320, top: 300, hide: !1, max_index: 1060, scrollMode: !1 },
                stickyHeader: { activeScreenWidth: 768 },
                stickyFooter: { minWidth: 0, maxWidth: 767, top: 150, hide: !0, scrollMode: !0, max_index: 1059 },
                stickyToolbox: { minWidth: 0, maxWidth: 767, top: !1, scrollMode: !0 },
                stickySidebar: { autoInit: !0, minWidth: 991, containerSelector: ".sticky-sidebar-wrapper", autoFit: !0, activeClass: "sticky-sidebar-fixed", paddingOffsetTop: 67, paddingOffsetBottom: 0 },
                templateCartAddedAlert:
                    '<div class="alert alert-outline alert-btn alert-success alert-inline cart-added-alert" id="cart-added-alert"><a href="cart.html" class="btn btn-success btn-md">View Cart</a><span>"{{name}}" has been added to your cart.</span><button type="button" class="btn btn-link btn-close"><i class="p-icon-times"></i></button></div>',
                zoomImage: { responsive: !0, zoomWindowFadeIn: 750, zoomWindowFadeOut: 500, borderSize: 0, zoomType: "inner", cursor: "crosshair" },
            }),
            (Panda.$ = function (t) {
                return t instanceof jQuery ? t : $(t);
            }),
            (Panda.call = function (t, e) {
                setTimeout(t, e);
            }),
            (Panda.byId = function (t) {
                return document.getElementById(t);
            }),
            (Panda.byTag = function (t, e) {
                return e ? e.getElementsByTagName(t) : document.getElementsByTagName(t);
            }),
            (Panda.byClass = function (t, e) {
                return e ? e.getElementsByClassName(t) : document.getElementsByClassName(t);
            }),
            (Panda.setCookie = function (t, e, a) {
                var n = new Date();
                n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3), (document.cookie = t + "=" + e + ";expires=" + n.toUTCString() + ";path=/");
            }),
            (Panda.getCookie = function (t) {
                for (var e = t + "=", a = document.cookie.split(";"), n = 0; n < a.length; ++n) {
                    for (var i = a[n]; " " == i.charAt(0); ) i = i.substring(1);
                    if (0 == i.indexOf(e)) return i.substring(e.length, i.length);
                }
                return "";
            }),
            (Panda.parseOptions = function (t) {
                return "string" == typeof t ? JSON.parse(t.replace(/'/g, '"').replace(";", "")) : {};
            }),
            (Panda.parseTemplate = function (t, e) {
                return t.replace(/\{\{(\w+)\}\}/g, function () {
                    return e[arguments[1]];
                });
            }),
            (Panda.isOnScreen = function (t, e, a) {
                var n = window.pageXOffset,
                    i = window.pageYOffset,
                    s = t.getBoundingClientRect(),
                    o = s.left + n,
                    r = s.top + i,
                    d = void 0 === e ? 0 : e,
                    l = void 0 === a ? 0 : a;
                return r + s.height + l >= i && r <= i + window.innerHeight + l && o + s.width + d >= n && o <= n + window.innerWidth + d;
            }),
            (Panda.doLoading = function (t, e) {
                var a = Panda.$(t);
                void 0 === e ? a.append('<div class="loading"><i></i></div>') : "small" == e ? a.append('<div class="loading small"><i></i></div>') : "simple" == e && a.append('<div class="loading small"></div>'),
                    "static" == a.css("position") && Panda.$(t).css("position", "relative");
            }),
            (Panda.endLoading = function (t) {
                Panda.$(t).find(".loading").remove(), Panda.$(t).css("position", "");
            }),
            (Panda.appear =
                ((e = []),
                (a = !1),
                (n = function () {
                    for (var a = e.length; a--; )
                        (t = e[a]),
                            Panda.isOnScreen(t.el, t.options.accX, t.options.accY) &&
                                ("function" == typeof $(t.el).data("appear-callback") && $(t.el).data("appear-callback").call(t.el, t.data), t.fn && t.fn.call(t.el, t.data), e.splice(a, 1));
                }),
                window.addEventListener("scroll", n, { passive: !0 }),
                window.addEventListener("resize", n, { passive: !0 }),
                $(window).on("appear.check", n),
                function (t, i, s) {
                    var o = { data: void 0, accX: 0, accY: 0 };
                    s && (s.data && (o.data = s.data), s.accX && (o.accX = s.accX), s.accY && (o.accY = s.accY)), e.push({ el: t, fn: i, options: o }), a || (a = Panda.requestTimeout(n, 100));
                })),
            (Panda.zoomImageObjects = []),
            (Panda.zoomImage = function (t) {
                $.fn.elevateZoom &&
                    t &&
                    Panda.$(t)
                        .find("img")
                        .each(function () {
                            var t = $(this);
                            (Panda.defaults.zoomImage.zoomContainer = t.parent()), t.elevateZoom(Panda.defaults.zoomImage), Panda.zoomImageObjects.push(t);
                        });
            }),
            (Panda.initZoom = function () {
                window.addEventListener(
                    "resize",
                    function () {
                        Panda.zoomImageObjects.forEach(function (t) {
                            t.each(function () {
                                var t = $(this),
                                    e = t.data("elevateZoom");
                                t.closest(".rotate-slider").length > 0 && e
                                    ? setTimeout(function () {
                                          e.refresh();
                                      }, 1200)
                                    : e && e.refresh();
                            });
                        });
                    },
                    { passive: !0 }
                );
            }),
            (Panda.countTo = function (t) {
                $.fn.numerator &&
                    Panda.$(t).each(function () {
                        var t = $(this),
                            e = { fromValue: t.data("fromvalue"), toValue: t.data("tovalue"), duration: t.data("duration"), delimiter: t.data("delimiter"), rounding: t.data("round") };
                        $.extend(e, {
                            onProgress: function () {
                                t.data("append") && t.html(t.html() + t.data("append")), t.data("prepend") && t.html(t.data("prepend") + t.html());
                            },
                        }),
                            Panda.appear(this, function () {
                                setTimeout(function () {
                                    t.numerator(e);
                                }, 300);
                            });
                    });
            }),
            (Panda.countdown = function (t) {
                $.fn.countdown &&
                    Panda.$(t).each(function () {
                        var t = $(this),
                            e = t.data("until"),
                            a = t.data("compact"),
                            n = t.data("format") ? t.data("format") : "DHMS",
                            i = t.data("labels-short") ? ["Years", "Months", "Weeks", "Days", "Hours", "Mins", "Secs"] : ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                            s = t.data("labels-short") ? ["Year", "Month", "Week", "Day", "Hour", "Min", "Sec"] : ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"];
                        if (t.data("relative")) r = e;
                        else
                            var o = e.split(", "),
                                r = new Date(o[0], o[1] - 1, o[2]);
                        t.countdown({ until: r, format: n, padZeroes: !0, compact: a, compactLabels: [" y", " m", " w", " days, "], timeSeparator: " : ", labels: i, labels1: s });
                    });
            }),
            (Panda.priceSlider = function (t, e) {
                "object" == typeof noUiSlider &&
                    Panda.$(t).each(function () {
                        noUiSlider.create(this, $.extend(!0, { start: [6, 30], connect: !0, step: 1, range: { min: 6, max: 100 }, tooltips: !0, format: wNumb({ decimals: 0, prefix: "$" }) }, e));
                    });
            }),
            (Panda.lazyload = function (t, e) {
                function a() {
                    this.setAttribute("src", this.getAttribute("data-src")),
                        this.addEventListener("load", function () {
                            (this.style["padding-top"] = ""), this.classList.remove("lazy-img");
                        });
                }
                Panda.$(t)
                    .find(".lazy-img")
                    .each(function () {
                        void 0 !== e && e ? a.call(this) : Panda.appear(this, a);
                    });
            }),
            (Panda.isotopes = function (t, e) {
                if ("function" == typeof imagesLoaded && $.fn.isotope) {
                    Panda.$(t).each(function () {
                        var t = $(this),
                            a = $.extend(!0, {}, Panda.defaults.isotope, Panda.parseOptions(t.attr("data-grid-options")), e || {});
                        Panda.lazyload(t),
                            t.imagesLoaded(function () {
                                a.customInitHeight && t.height(t.height()),
                                    a.customDelay &&
                                        Panda.call(function () {
                                            t.isotope(a);
                                        }, parseInt(a.customDelay)),
                                    t.isotope(a);
                            });
                    });
                }
            }),
            (Panda.parallax = function (t, e) {
                $.fn.themePluginParallax &&
                    Panda.$(t).each(function () {
                        var t = $(this);
                        t.themePluginParallax($.extend(!0, Panda.parseOptions(t.attr("data-parallax-options")), e));
                    });
            }),
            (Panda.initFloatingElements = function (t) {
                $.fn.parallax &&
                    Panda.$(t).each(function () {
                        var t = $(this);
                        t.attr("data-floating-depth") ? t.children(".layer").attr("data-depth", t.attr("data-floating-depth")) : t.children(".layer").attr("data-depth", ".3"), t.parallax(t.data("options"));
                    });
            }),
            (Panda.initAdvancedMotions = function (t) {
                if (!Panda.isMobile && "undefined" != typeof skrollr) {
                    var e = Panda.$(t);
                    e.each(function () {
                        var t = $(this),
                            e = { "data-bottom-top": "transform: translate(10%, 0);", "data-center": "transform: translate(-10%, 0);" },
                            a = [];
                        t.data("options") && ((e = t.data("options")), (a = Object.keys(e))),
                            "object" == typeof e &&
                                (a = Object.keys(e)).length &&
                                a.forEach(function (a) {
                                    t.attr(a, e[a]);
                                });
                    }),
                        e.length && skrollr.init({ forceHeight: !1, smoothScrolling: !0 });
                }
            }),
            (Panda.headerToggleSearch = function (t) {
                var e = Panda.$(t);
                e
                    .find("input")
                    .on("focusin", function (t) {
                        e.addClass("show");
                    })
                    .on("focusout", function (t) {
                        e.removeClass("show");
                    }),
                    Panda.$body.on("click", ".sticky-footer .search-toggle", function (t) {
                        $(this).parent().toggleClass("show"), t.preventDefault();
                    }),
                    Panda.$body.on("click", ".header-right .search-toggle", function (t) {
                        t.preventDefault();
                    });
            }),
            (Panda.stickyHeader = function (t) {
                var e = Panda.$(t);
                if (0 != e.length) {
                    var a,
                        n,
                        i = !1,
                        s = function () {
                            ((a = e[0].offsetHeight), (n = e.offset().top + a), e.hasClass("has-dropdown")) && e.find(".category-dropdown .dropdown-box").length && (n += e.find(".category-dropdown .dropdown-box")[0].offsetHeight);
                            !i && window.innerWidth >= Panda.defaults.stickyHeader.activeScreenWidth && ((i = !0), e.wrap('<div class="sticky-wrapper" style="height:' + a + 'px"></div>')), Panda.$window.off("resize", s);
                        },
                        o = function () {
                            window.innerWidth >= Panda.defaults.stickyHeader.activeScreenWidth && window.pageYOffset >= n
                                ? (e[0].classList.add("fixed"), document.body.classList.add("sticky-header-active"))
                                : (e[0].classList.remove("fixed"), document.body.classList.remove("sticky-header-active"));
                        };
                    window.addEventListener("scroll", o, { passive: !0 }), Panda.$window.on("resize", s), Panda.$window.on("resize", o), Panda.call(s, 500), Panda.call(o, 500);
                }
            }),
            (Panda.stickyContent = function (t, e) {
                var a = Panda.$(t),
                    n = $.extend({}, Panda.defaults.stickyContent, e),
                    i = window.pageYOffset;
                if (0 != a.length) {
                    var s = function () {
                            a.each(function (t) {
                                var e = $(this);
                                if (e.data("is-wrap")) (window.innerWidth < n.minWidth || window.innerWidth >= n.maxWidth) && (e.unwrap(".sticky-content-wrapper"), e.data("is-wrap", !1));
                                else {
                                    var a,
                                        i = e.removeClass("fixed").outerHeight(!0);
                                    if (((a = e.offset().top + i), e.hasClass("has-dropdown"))) {
                                        var s = e.find(".category-dropdown .dropdown-box");
                                        s.length && (a += s[0].offsetHeight);
                                    }
                                    e.data("top", a),
                                        (function (t, e) {
                                            window.innerWidth >= n.minWidth && window.innerWidth <= n.maxWidth && (t.wrap('<div class="sticky-content-wrapper"></div>'), t.parent().css("height", e + "px"), t.data("is-wrap", !0));
                                        })(e, i);
                                }
                            });
                        },
                        o = function (t) {
                            (t && !t.isTrusted) ||
                                a.each(function (t) {
                                    var e = $(this),
                                        a = !0;
                                    n.scrollMode && ((a = i > window.pageYOffset), (i = window.pageYOffset)),
                                        window.pageYOffset > (0 == n.top ? e.data("top") : n.top) && window.innerWidth >= n.minWidth && window.innerWidth <= n.maxWidth
                                            ? (e.hasClass("fix-top")
                                                  ? (void 0 === e.data("offset-top") &&
                                                        (function (t) {
                                                            var e = 0,
                                                                a = 0;
                                                            $(".sticky-content.fixed.fix-top").each(function () {
                                                                (e += $(this)[0].offsetHeight), a++;
                                                            }),
                                                                t.data("offset-top", e),
                                                                t.data("z-index", n.max_index - a);
                                                        })(e),
                                                    e.css("margin-top", e.data("offset-top") + "px"))
                                                  : e.hasClass("fix-bottom") &&
                                                    (void 0 === e.data("offset-bottom") &&
                                                        (function (t) {
                                                            var e = 0,
                                                                a = 0;
                                                            $(".sticky-content.fixed.fix-bottom").each(function () {
                                                                (e += $(this)[0].offsetHeight), a++;
                                                            }),
                                                                t.data("offset-bottom", e),
                                                                t.data("z-index", n.max_index - a);
                                                        })(e),
                                                    e.css("margin-bottom", e.data("offset-bottom") + "px")),
                                              e.css("z-index", e.data("z-index")),
                                              n.scrollMode
                                                  ? (a && e.hasClass("fix-top")) || (!a && e.hasClass("fix-bottom"))
                                                      ? (e.addClass("fixed"),
                                                        e.closest(".page-wrapper").find(".header").hasClass(".header-transparent") &&
                                                            (Panda.$body.hasClass("sidebar-active") || Panda.$body.hasClass("top-sidebar-active") || Panda.$body.hasClass("right-sidebar-active")
                                                                ? e.closest(".main").css("z-index", "unset")
                                                                : e.closest(".main").css("z-index", "19")))
                                                      : (e.removeClass("fixed"),
                                                        e.css("margin", ""),
                                                        e.closest(".page-wrapper").find(".header").hasClass(".header-transparent") &&
                                                            (Panda.$body.hasClass("sidebar-active") || Panda.$body.hasClass("top-sidebar-active") || Panda.$body.hasClass("right-sidebar-active")
                                                                ? e.closest(".main").css("z-index", "unset")
                                                                : e.closest(".main").css("z-index", "19")))
                                                  : e.addClass("fixed"),
                                              n.hide && e.parent(".sticky-content-wrapper").css("display", ""))
                                            : (e.removeClass("fixed"), e.css("margin-top", ""), e.css("margin-bottom", ""), n.hide && e.parent(".sticky-content-wrapper").css("display", "none"));
                                });
                        },
                        r = function (t) {
                            a.removeData("offset-top").removeData("offset-bottom").removeClass("fixed").css("margin", "").css("z-index", ""),
                                Panda.call(function () {
                                    s(), o();
                                });
                        };
                    setTimeout(s, 550),
                        setTimeout(o, 600),
                        Panda.call(function () {
                            window.addEventListener("scroll", o, { passive: !0 }), Panda.$window.on("resize", r);
                        }, 700);
                }
            }),
            (Panda.initAlert = function (t) {
                Panda.$body.on("click", t + " .btn-close", function (e) {
                    $(this)
                        .closest(t)
                        .fadeOut(function () {
                            $(this).remove();
                        });
                });
            }),
            (Panda.initAccordion = function (t) {
                Panda.$body.on("click", t, function (t) {
                    var a = $(this),
                        n = a.closest(".card").find(a.attr("href")),
                        i = a.closest(".accordion");
                    t.preventDefault(),
                        0 === i.find(".collapsing").length &&
                            0 === i.find(".expanding").length &&
                            (n.hasClass("expanded")
                                ? i.hasClass("radio-type") || e(n)
                                : n.hasClass("collapsed") &&
                                  (i.find(".expanded").length > 0
                                      ? Panda.isIE
                                          ? e(i.find(".expanded"), function () {
                                                e(n);
                                            })
                                          : (e(i.find(".expanded")), e(n))
                                      : e(n)));
                });
                var e = function (e, a) {
                    var n = e.closest(".card").find(t);
                    e.hasClass("expanded")
                        ? (n.removeClass("collapse").addClass("expand"),
                          e.addClass("collapsing").slideUp(300, function () {
                              e.removeClass("expanded collapsing").addClass("collapsed"), a && a();
                          }))
                        : e.hasClass("collapsed") &&
                          (n.removeClass("expand").addClass("collapse"),
                          e.addClass("expanding").slideDown(300, function () {
                              e.removeClass("collapsed expanding").addClass("expanded"), a && a();
                          }));
                };
            }),
            (Panda.initTab = function (t) {
                Panda.$body
                    .on("click", ".tab .nav-link:not(.no-tab-item)", function (t) {
                        var e = $(this);
                        if ((t.preventDefault(), !e.hasClass("active"))) {
                            var a = $(e.attr("href"));
                            a.siblings().removeClass("in active"), a.addClass("active in"), Panda.slider(a.find(".owl-carousel")), e.parent().parent().find(".active").removeClass("active"), e.addClass("active");
                        }
                    })
                    .on("click", ".link-to-tab", function (t) {
                        var e = $(t.currentTarget).attr("href"),
                            a = $(e),
                            n = a.parent().siblings(".nav");
                        t.preventDefault(),
                            a.siblings().removeClass("active in"),
                            a.addClass("active in"),
                            n.find(".nav-link").removeClass("active"),
                            n.find('[href="' + e + '"]').addClass("active"),
                            $("html").animate({ scrollTop: a.offset().top - 150 });
                    });
            }),
            (Panda.playableVideo = function (t) {
                $(t + " .video-play").on("click", function (e) {
                    var a = $(this).closest(t);
                    a.hasClass("playing") ? a.removeClass("playing").addClass("paused").find("video")[0].pause() : a.removeClass("paused").addClass("playing").find("video")[0].play(), e.preventDefault();
                }),
                    $(t + " video").on("ended", function () {
                        $(this).closest(t).removeClass("playing");
                    });
            }),
            (Panda.appearAnimate = function (t) {
                Panda.$(t).each(function () {
                    var t = this;
                    Panda.appear(t, function () {
                        if (t.classList.contains("appear-animate")) {
                            var e = $.extend({}, Panda.defaults.animation, Panda.parseOptions(t.getAttribute("data-animation-options")));
                            Panda.call(function () {
                                setTimeout(
                                    function () {
                                        (t.style["animation-duration"] = e.duration), t.classList.add(e.name), t.classList.add("appear-animation-visible");
                                    },
                                    e.delay ? 1e3 * Number(e.delay.slice(0, -1)) : 0
                                );
                            });
                        }
                    });
                });
            }),
            (Panda.stickySidebar = function (t) {
                $.fn.themeSticky &&
                    Panda.$(t).each(function () {
                        var t = $(this);
                        t.themeSticky($.extend(Panda.defaults.stickySidebar, Panda.parseOptions(t.attr("data-sticky-options")))), t.trigger("recalc.pin");
                    });
            }),
            (Panda.refreshSidebar = function (t) {
                $.fn.themeSticky &&
                    Panda.$(t).each(function () {
                        $(this).trigger("recalc.pin");
                    });
            }),
            (Panda.ratingTooltip = function (t) {
                for (
                    var e = Panda.byClass("ratings-full", t || document.body),
                        a = e.length,
                        n = function () {
                            var t = parseInt(this.firstElementChild.style.width.slice(0, -1)) / 20;
                            this.lastElementChild.innerText = t ? t.toFixed(2) : t;
                        },
                        i = 0;
                    i < a;
                    ++i
                )
                    e[i].addEventListener("mouseover", n, { passive: !0 }), e[i].addEventListener("touchstart", n, { passive: !0 });
            }),
            (Panda.popup = function (t, e) {
                var a = $.magnificPopup.instance,
                    n = $.extend(!0, {}, Panda.defaults.popup, void 0 !== e ? Panda.defaults.popupPresets[e] : {}, t);
                a.isOpen && a.content
                    ? (a.close(),
                      setTimeout(function () {
                          $.magnificPopup.open(n);
                      }, 500))
                    : $.magnificPopup.open(n);
            }),
            (Panda.initPopups = function () {
                Panda.$body
                    .on("click", ".single-product a.submit-review-toggle", function (t) {
                        t.preventDefault(), Panda.popup({ items: { src: "ajax/review.html" } }, "review");
                    })
                    .on("click", ".btn-iframe", function (t) {
                        t.preventDefault(), Panda.popup({ items: { src: '<video src="' + $(t.currentTarget).attr("href") + '" autoplay loop controls>', type: "inline" }, mainClass: "mfp-video-popup" }, "video");
                    }),
                    $(".home > #newsletter-popup").length > 0 &&
                        "true" !== Panda.getCookie("hideNewsletterPopup") &&
                        setTimeout(function () {
                            Panda.popup({
                                items: { src: "#newsletter-popup" },
                                type: "inline",
                                tLoading: "",
                                mainClass: "mfp-newsletter mfp-flip-popup",
                                callbacks: {
                                    beforeClose: function () {
                                        $("#hide-newsletter-popup")[0].checked && Panda.setCookie("hideNewsletterPopup", !0, 7);
                                    },
                                },
                            });
                        }, 7500);
            }),
            (Panda.initScrollTopButton = function () {
                var t = Panda.byId("scroll-top");
                if (t) {
                    t.addEventListener("click", function (t) {
                        $("html, body").animate({ scrollTop: 0 }, 600), t.preventDefault();
                    });
                    var e = function () {
                        if (window.pageYOffset > 400) {
                            t.classList.add("show");
                            var e = $(document).height(),
                                a = $(window).height(),
                                n = ($(window).scrollTop() / (e - a)) * 214;
                            $("#progress-indicator").length > 0 && $("#progress-indicator").css("stroke-dasharray", n + ", 400");
                        } else t.classList.remove("show");
                    };
                    Panda.call(e, 500), window.addEventListener("scroll", e, { passive: !0 });
                }
            }),
            (Panda.scrollTo = function (t, e) {
                var a = 0,
                    n = void 0 === e ? 600 : e;
                (a = "number" == typeof t ? t : Panda.$(t).offset().top), $("html,body").stop().animate({ scrollTop: a }, n);
            }),
            (Panda.orderView = function () {
                $('.order-action .btn[href="#orders-view"]').on("click", function (t) {
                    t.preventDefault();
                    var e = $(this).parents(".tab-content");
                    e.find(".active ").removeClass("active in"), e.find("#orders-view").addClass("active in");
                }),
                    $(".back-order").on("click", function (t) {
                        var e = $(this).attr("href");
                        $(e).closest(".tab-content").find(".active").removeClass("active in"), $(e).addClass("active");
                    });
            }),
            (Panda.ibNavSurfer = function () {
                $("body").on("click", ".ib-wrapper a:not(.no-tab-item)", function (t) {
                    t.preventDefault();
                    var e = $(this).attr("href"),
                        a = $(e).closest(".tab-content");
                    a.find(".tab-pane.active ").removeClass("active"), $(e).addClass("active in");
                    var n = a.closest(".tab");
                    n.find(".nav-link.active").removeClass("active"), n.find('[href="' + e + '"]').addClass("active");
                });
            }),
            (Panda.requestTimeout = function (t, e) {
                var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
                if (!a) return setTimeout(t, e);
                var n,
                    i = new Object();
                return (
                    (i.val = a(function s(o) {
                        n || (n = o), o - n >= e ? t() : (i.val = a(s));
                    })),
                    i
                );
            }),
            (Panda.requestInterval = function (t, e, a) {
                var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
                if (!n) return a ? setInterval(t, e) : setTimeout(t, a);
                var i,
                    s,
                    o = new Object();
                return (
                    (o.val = n(function r(d) {
                        i || (i = s = d), !a || d - i < a ? (d - s > e ? ((o.val = n(r)), t(), (s = d)) : (o.val = n(r))) : t();
                    })),
                    o
                );
            }),
            (Panda.deleteTimeout = function (t) {
                if (t) {
                    var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
                    return e ? (t.val ? e(t.val) : void 0) : clearTimeout(t);
                }
            }),
            (Panda.hashScroll = {
                init: function () {
                    return this.build().events(), this;
                },
                build: function () {
                    try {
                        var t = window.location.hash,
                            e = $(t);
                        return e.length && "#review_form" != t && "#reviews" != t && -1 == t.indexOf("#comment-") && $("html, body").delay(600).stop().animate({ scrollTop: e.offset().top }, 600, "easeOutQuad"), this;
                    } catch (t) {
                        return this;
                    }
                },
                getTarget: function (t) {
                    if ("#" == t || t.endsWith("#")) return !1;
                    var e;
                    if (0 == t.indexOf("#")) e = $(t);
                    else {
                        var a = window.location.href;
                        -1 != (a = a.substring(a.indexOf("://") + 3)).indexOf("#") && (a = a.substring(0, a.indexOf("#"))), 0 == (t = (t = t.substring(t.indexOf("://") + 3)).substring(t.indexOf(a) + a.length)).indexOf("#") && (e = $(t));
                    }
                    return e;
                },
                events: function () {
                    var t = this;
                    if ("" != window.location.hash) {
                        $("body");
                        var e = $(window.location.hash);
                        if (e && e.get(0)) {
                            var a = e.offset().top;
                            $("html, body")
                                .stop()
                                .animate({ scrollTop: a }, 600, "easeOutQuad", function () {});
                        }
                    }
                    return (
                        $("body").on("click", 'a[href*="#"].hash-scroll', function (e) {
                            e.preventDefault();
                            var a = $(this),
                                n = a.attr("href"),
                                i = t.getTarget(n);
                            if (i && i.get(0)) {
                                var s = a.parent(),
                                    o = i.offset().top;
                                $("html, body")
                                    .stop()
                                    .animate({ scrollTop: o }, 600, "easeOutQuad", function () {
                                        s.siblings().removeClass("active"), s.addClass("active");
                                    });
                            } else "#" != n && (window.location.href = a.attr("href"));
                        }),
                        t
                    );
                },
            }),
            (Panda.sidebar = (function () {
                var t = window.innerWidth < Panda.minDesktopWidth,
                    e = function () {
                        window.innerWidth < Panda.minDesktopWidth && !t
                            ? (this.$sidebar.find(".sidebar-content, .filter-clean").removeAttr("style"),
                              this.$sidebar.find(".sidebar-content").attr("style", ""),
                              this.$sidebar.siblings(".toolbox").children(":not(:first-child)").removeAttr("style"))
                            : window.innerWidth >= Panda.minDesktopWidth && !this.$sidebar.hasClass("closed") && t && (this.$sidebar.addClass("closed"), this.$sidebar.find(".sidebar-content").css("display", "none")),
                            (t = window.innerWidth < Panda.minDesktopWidth);
                    };
                function a(t) {
                    return this.init(t);
                }
                return (
                    (a.prototype.init = function (t) {
                        var a = this;
                        return (
                            (a.name = t),
                            (a.$sidebar = $("." + t)),
                            (a.isNavigation = !1),
                            a.$sidebar.length &&
                                ((a.isNavigation = a.$sidebar.hasClass("sidebar-fixed") && a.$sidebar.parent().hasClass("toolbox-wrap")),
                                a.isNavigation && ((e = e.bind(this)), Panda.$window.on("resize", e)),
                                Panda.$body.find(".header").hasClass("header-transparent") && Panda.$body.find(".main").css("z-index", "19"),
                                Panda.$window.on("resize", function () {
                                    Panda.$body.removeClass(t + "-active"),
                                        Panda.$body.find(".header").hasClass("header-transparent") &&
                                            setTimeout(function () {
                                                Panda.$body.find(".main").css("z-index", "19");
                                            }, 400);
                                }),
                                a.$sidebar
                                    .find(".sidebar-toggle")
                                    .add("sidebar" === t ? ".left-sidebar-toggle" : "." + t + "-toggle")
                                    .on("click", function (t) {
                                        a.toggle(),
                                            $(this).blur(),
                                            $(".sticky-sidebar").trigger("recalc.pin.left", [400]),
                                            Panda.$body.find(".header").hasClass("header-transparent") && $(window).innerWidth() < 992 && Panda.$body.find(".main").css("z-index", "unset"),
                                            t.preventDefault();
                                    }),
                                a.$sidebar.find(".sidebar-overlay, .sidebar-close").on("click", function (e) {
                                    Panda.$body.removeClass(t + "-active"),
                                        Panda.$body.find(".header").hasClass("header-transparent") &&
                                            setTimeout(function () {
                                                Panda.$body.find(".main").css("z-index", "19");
                                            }, 400),
                                        $(".sticky-sidebar").trigger("recalc.pin.left", [400]),
                                        e.preventDefault();
                                }),
                                setTimeout(function () {
                                    $(".sticky-sidebar").trigger("recalc.pin", [400]);
                                })),
                            !1
                        );
                    }),
                    (a.prototype.toggle = function () {
                        var t = this;
                        if (window.innerWidth >= Panda.minDesktopWidth && t.$sidebar.hasClass("sidebar-fixed")) {
                            var e = t.$sidebar.hasClass("closed");
                            t.isNavigation &&
                                (e || t.$sidebar.find(".filter-clean").hide(),
                                t.$sidebar.siblings(".toolbox").children(":not(:first-child)").fadeToggle("fast"),
                                t.$sidebar
                                    .find(".sidebar-content")
                                    .stop()
                                    .animate({ height: "toggle", "margin-bottom": e ? "toggle" : -6 }, function () {
                                        $(this).css("margin-bottom", ""), e && t.$sidebar.find(".filter-clean").fadeIn("fast");
                                    })),
                                t.$sidebar.toggleClass("closed");
                        } else
                            t.$sidebar.find(".sidebar-overlay .sidebar-close").css("margin-left", -(window.innerWidth - document.body.clientWidth)),
                                Panda.$body.toggleClass(t.name + "-active").removeClass("closed"),
                                window.innerWidth >= 1200 && Panda.$body.hasClass("with-flex-container") && $(".owl-carousel").trigger("refresh.owl.carousel");
                    }),
                    function (t) {
                        return new a(t);
                    }
                );
            })()),
            (Panda.initProductSingle = (function () {
                function t(t) {
                    return this.init(t);
                }
                var e = function (t) {
                        var e = t.$thumbsWrap.offset().top + t.$thumbsWrap[0].offsetHeight,
                            a = t.$thumbs.offset().top + t.thumbsHeight;
                        a >= e + t.$productThumb[0].offsetHeight
                            ? (t.$thumbs.css("top", parseInt(t.$thumbs.css("top")) - t.$productThumb[0].offsetHeight), t.$thumbUp.removeClass("disabled"))
                            : a > e
                            ? (t.$thumbs.css("top", parseInt(t.$thumbs.css("top")) - Math.ceil(a - e)), t.$thumbUp.removeClass("disabled"), t.$thumbDown.addClass("disabled"))
                            : t.$thumbDown.addClass("disabled");
                    },
                    a = function (t) {
                        var e = t.$thumbsWrap.offset().top,
                            a = t.$thumbs.offset().top;
                        a <= e - t.$productThumb[0].offsetHeight
                            ? (t.$thumbs.css("top", parseInt(t.$thumbs.css("top")) + t.$productThumb[0].offsetHeight), t.$thumbDown.removeClass("disabled"))
                            : a < e
                            ? (t.$thumbs.css("top", parseInt(t.$thumbs.css("top")) - Math.ceil(a - e)), t.$thumbDown.removeClass("disabled"), t.$thumbUp.addClass("disabled"))
                            : t.$thumbUp.addClass("disabled");
                    },
                    n = function (t) {
                        if (void 0 !== t.$thumbs) {
                            var e = void 0 !== t.thumbsIsVertical && t.thumbsIsVertical;
                            (t.thumbsIsVertical = t._isPgvertical && window.innerWidth >= Panda.minDesktopWidth),
                                t.thumbsIsVertical
                                    ? (t.$thumbs.hasClass("owl-carousel") && t.$thumbs.trigger("destroy.owl.carousel").removeClass("owl-carousel"),
                                      (t.thumbsHeight = t.$productThumb[0].offsetHeight * t.thumbsCount + parseInt(t.$productThumb.css("margin-bottom")) * (t.thumbsCount - 1)),
                                      t.$thumbUp.addClass("disabled"),
                                      t.$thumbDown.toggleClass("disabled", t.thumbsHeight <= t.$thumbsWrap[0].offsetHeight),
                                      t.isQuickview && i())
                                    : (e && t.$thumbs.css("top", ""),
                                      t.$thumbs.hasClass("owl-carousel") || t.$thumbs.addClass("owl-carousel").owlCarousel($.extend(!0, t.isQuickview ? { onInitialized: i, onResized: i } : {}, Panda.defaults.sliderThumbs)));
                        }
                    },
                    i = function () {
                        this.$wrapper.find(".product-details").css("height", window.innerWidth > 767 ? this.$wrapper.find(".product-gallery")[0].clientHeight : "");
                    };
                return (
                    (t.prototype.init = function (t) {
                        var s = this,
                            o = t.find(".product-single-carousel");
                        (s.$wrapper = t),
                            (s.isQuickview = !!t.closest(".mfp-content").length),
                            (s._isPgvertical = !1),
                            s.isQuickview && ((i = i.bind(this)), Panda.ratingTooltip()),
                            o
                                .on("initialized.owl.carousel", function (t) {
                                    document.body.classList.contains("home") || s.isQuickview || o.append('<a href="#" class="product-image-full"><i class="p-icon-zoom"></i></a>'),
                                        (function (t) {
                                            (t.$thumbs = t.$wrapper.find(".product-thumbs")),
                                                (t.$thumbsWrap = t.$thumbs.closest(".product-thumbs-wrap")),
                                                (t.$thumbUp = t.$thumbsWrap.find(".thumb-up")),
                                                (t.$thumbDown = t.$thumbsWrap.find(".thumb-down")),
                                                (t.$thumbsDots = t.$thumbs.children()),
                                                (t.thumbsCount = t.$thumbsDots.length),
                                                (t.$productThumb = t.$thumbsDots.eq(0)),
                                                (t._isPgvertical = t.$thumbsWrap.parent().hasClass("pg-vertical")),
                                                (t.thumbsIsVertical = t._isPgvertical && window.innerWidth >= Panda.minDesktopWidth),
                                                t.$thumbDown.on("click", function (a) {
                                                    t.thumbsIsVertical && e(t);
                                                }),
                                                t.$thumbUp.on("click", function (e) {
                                                    t.thumbsIsVertical && a(t);
                                                }),
                                                t.$thumbsDots.on("click", function () {
                                                    var e = $(this),
                                                        a = (e.parent().filter(t.$thumbs).length ? e : e.parent()).index();
                                                    t.$wrapper.find(".product-single-carousel").trigger("to.owl.carousel", a);
                                                }),
                                                n(t),
                                                Panda.$window.on("resize", function () {
                                                    n(t);
                                                });
                                        })(s);
                                })
                                .on("translate.owl.carousel", function (t) {
                                    var e = (t.item.index - $(t.currentTarget).find(".cloned").length / 2 + t.item.count) % t.item.count;
                                    s.thumbsSetActive(e);
                                }),
                            "complete" === Panda.status && (Panda.slider(o), Panda.quantityInput(t.find(".quantity"))),
                            (function (t) {
                                (t.$selects = t.$wrapper.find(".product-variations select")),
                                    (t.$items = t.$wrapper.find(".product-variations")),
                                    (t.$priceWrap = t.$wrapper.find(".product-variation-price")),
                                    (t.$clean = t.$wrapper.find(".product-variation-clean")),
                                    (t.$btnCart = t.$wrapper.find(".btn-cart")),
                                    t.variationCheck(),
                                    t.$selects.on("change", function (e) {
                                        t.variationCheck();
                                    }),
                                    t.$items.children("a").on("click", function (e) {
                                        $(this).toggleClass("active").siblings().removeClass("active"), e.preventDefault(), t.variationCheck();
                                    }),
                                    t.$clean.on("click", function (e) {
                                        e.preventDefault(), t.variationClean(!0);
                                    });
                            })(this),
                            (function (t) {
                                t.$wrapper.on("click", ".btn-cart", function (e) {
                                    e.preventDefault();
                                    var a = t.$wrapper,
                                        n = a.find(".product-name").text();
                                    (a.closest(".product-popup").length || document.body.classList.contains("home")) &&
                                        Panda.Minipopup.open({
                                            message: "Successfully Added1",
                                            productClass: "product-mini",
                                            name: n,
                                            nameLink: a.find(".product-name > a").attr("href"),
                                            imageSrc: a.find(".product-image img").eq(0).attr("src"),
                                            imageLink: a.find(".product-name > a").attr("href"),
                                            price: a.find(".product-variation-price").length > 0 ? a.find(".product-variation-price").children("span").html() : a.find(".product-price .price").html(),
                                            count: a.find(".quantity").val(),
                                            actionTemplate:
                                                '<div class="action-group d-flex mt-3"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-block mr-2">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-block">Check Out</a></div>',
                                        });
                                });
                            })(this),
                            (function (t) {
                                t.$wrapper.on("click", ".btn-compare:not(.open)", function (e) {
                                    e.preventDefault();
                                    var a = t.$wrapper,
                                        n = a.find(".product-name").text();
                                    Panda.Minipopup.open({
                                        message: "Successfully Added",
                                        productClass: "product-mini",
                                        name: n,
                                        nameLink: a.find(".product-name > a").attr("href"),
                                        imageSrc: a.find(".product-image img").eq(0).attr("src"),
                                        imageLink: a.find(".product-name > a").attr("href"),
                                        price: a.find(".product-price").html(),
                                        actionTemplate:
                                            '<div class="action-group d-flex mt-3"><a href="#" class="btn btn-sm btn-outline btn-primary btn-block btn-cart mr-2">Add to Cart</a><a href="compare.html" class="btn btn-sm btn-primary btn-block">Compare List</a></div>',
                                    }),
                                        $(this).addClass("open"),
                                        $(this).html('<i class="p-icon-check-solid"></i> BROWSE COMPARE'),
                                        $(this).attr("title", "Browse compare"),
                                        $(this).attr("href", "compare.html");
                                });
                            })(this);
                    }),
                    (t.prototype.thumbsSetActive = function (t) {
                        var e = this,
                            a = e.$thumbsDots.eq(t);
                        if ((e.$thumbsDots.filter(".active").removeClass("active"), a.addClass("active"), e.thumbsIsVertical)) {
                            var n = parseInt(e.$thumbs.css("top")) + t * e.thumbsHeight;
                            n < 0
                                ? e.$thumbs.css("top", parseInt(e.$thumbs.css("top")) - n)
                                : (n = e.$thumbs.offset().top + e.$thumbs[0].offsetHeight - a.offset().top - a[0].offsetHeight) < 0 && e.$thumbs.css("top", parseInt(e.$thumbs.css("top")) + n);
                        } else e.$thumbs.trigger("to.owl.carousel", t, 100);
                    }),
                    (t.prototype.variationCheck = function () {
                        var t = this,
                            e = !0;
                        t.$selects.each(function () {
                            return this.value || (e = !1);
                        }),
                            t.$items.each(function () {
                                var t = $(this);
                                if (t.children("a:not(.size-guide)").length) return t.children(".active").length || (e = !1);
                            }),
                            e ? t.variationMatch() : t.variationClean();
                    }),
                    (t.prototype.variationMatch = function () {
                        var t = this;
                        t.$priceWrap.find("span").text("$" + (Math.round(50 * Math.random()) + 200) + ".00"), t.$priceWrap.slideDown(), t.$clean.slideDown(), t.$btnCart.removeAttr("disabled");
                    }),
                    (t.prototype.variationClean = function (t) {
                        t && this.$selects.val(""), t && this.$items.children(".active").removeClass("active"), this.$priceWrap.slideUp(), this.$clean.css("display", "none"), this.$btnCart.attr("disabled", "disabled");
                    }),
                    function (e, a) {
                        return e ? new t(e.eq(0), a) : null;
                    }
                );
            })()),
            (Panda.initProductSinglePage = (function () {
                function t(t) {
                    var e = $(t.currentTarget).closest(".product-single");
                    $(".cart-added-alert").remove(),
                        $(Panda.parseTemplate(Panda.defaults.templateCartAddedAlert, { name: e.find("h1.product-name").text() }))
                            .insertBefore(e)
                            .fadeIn(),
                        $(this).closest(".product-form-group").length > 0 && $("html, body").animate({ scrollTop: 0 }, 600),
                        $(".sticky-sidebar ").trigger("recalc.pin"),
                        t.preventDefault();
                }
                function e(t) {
                    var e = $(t.currentTarget).closest(".product-single");
                    "disabled" != e.find(".btn-product.btn-cart").attr("disabled") &&
                        Panda.Minipopup.open({
                            message: "Successfully Added",
                            productClass: "product-mini",
                            name: e.find("h1.product-name").text(),
                            nameLink: e.find(".product-name > a").attr("href"),
                            imageSrc: e.find(".product-image img").eq(0).attr("src"),
                            imageLink: e.find(".product-name > a").attr("href"),
                            price: e.find(".product-variation-price").length > 0 ? e.find(".product-variation-price").children("span").html() : e.find(".product-price").html(),
                            actionTemplate:
                                '<div class="action-group d-flex mt-3"><a href="#" class="btn btn-sm btn-outline btn-primary btn-block btn-cart mr-2">Add to Cart</a><a href="compare.html" class="btn btn-sm btn-primary btn-block">Compare List</a></div>',
                        });
                }
                function a(t) {
                    t.preventDefault();
                    var e,
                        a = $(t.currentTarget).closest(".product-single");
                    if (
                        (e = a.find(".product-single-carousel").length
                            ? a.find(".product-single-carousel .owl-item:not(.cloned) img")
                            : a.find(".product-gallery-carousel").length
                            ? a.find(".product-gallery-carousel .owl-item:not(.cloned) img")
                            : a.find(".product-gallery img")).length
                    ) {
                        var n = e
                                .map(function () {
                                    var t = $(this);
                                    return { src: t.attr("data-zoom-image"), w: 800, h: 899, title: t.attr("alt") };
                                })
                                .get(),
                            i = a.find(".product-single-carousel, .product-gallery-carousel").data("owl.carousel"),
                            s = i ? (i.current() - i.clones().length / 2 + n.length) % n.length : a.find(".product-gallery > *").index();
                        if ("undefined" != typeof PhotoSwipe) {
                            var o = $(".pswp")[0],
                                r = new PhotoSwipe(o, PhotoSwipeUI_Default, n, { index: s, closeOnScroll: !1 });
                            r.init(), (Panda.photoswipe = r);
                        }
                    }
                }
                function n(t) {
                    var e = $(t.currentTarget);
                    e.hasClass("added") ||
                        (t.preventDefault(),
                        e.addClass("load-more-overlay loading"),
                        setTimeout(function () {
                            e.removeClass("load-more-overlay loading").html('<i class="p-icon-heart-fill"></i> BROWSE WISHLIST').addClass("added").attr("title", "Browse wishlist").attr("href", "wishlist.html");
                        }, 500));
                }
                function i(t) {
                    t.preventDefault();
                    var e = $(t.currentTarget),
                        a = e
                            .parent()
                            .children("img")
                            .map(function () {
                                return { src: this.getAttribute("src"), w: this.getAttribute("width"), h: this.getAttribute("height"), title: this.getAttribute("alt") || "" };
                            })
                            .get();
                    if ("undefined" != typeof PhotoSwipe) {
                        var n = $(".pswp")[0],
                            i = new PhotoSwipe(n, PhotoSwipeUI_Default, a, { index: e.index(), closeOnScroll: !1 });
                        i.listen("afterInit", function () {
                            i.shout("initialZoomInEnd");
                        }),
                            i.init();
                    }
                }
                return function () {
                    var s = $(".product-single");
                    return (
                        Panda.$body.on("click", ".product-single .btn-wishlist", n),
                        s.length
                            ? document.body.classList.contains("home")
                                ? (s.each(function () {
                                      Panda.initProductSingle($(this));
                                  }),
                                  Panda.zoomImage(".product-gallery.row"),
                                  null)
                                : null === Panda.initProductSingle(s)
                                ? null
                                : (Panda.$body.on("click", ".product-single .product-image-full", a),
                                  Panda.$body.on("click", ".single-product .btn-cart:not(.disabled)", t),
                                  Panda.$body.on("click", ".single-product .btn-compare:not(.open)", e),
                                  Panda.zoomImage(".product-gallery.row"),
                                  Panda.$body.on("click", ".btn-img", i),
                                  Panda.$body.on("click", ".rating-form .rating-stars > a", function (t) {
                                      var e = $(this);
                                      e.addClass("active").siblings().removeClass("active"), e.parent().addClass("selected"), e.closest(".rating-form").find("select").val(e.text()), t.preventDefault();
                                  }),
                                  Panda.$body.on("click", ".btn.like", function (t) {
                                      var e = $(this),
                                          a = e.find(".count").text();
                                      e.toggleClass("active"), e.find(".count").text(1 - a), e.closest(".feeling").find(".btn.unlike").removeClass("active"), e.closest(".feeling").find(".btn.unlike .count").text("0");
                                  }),
                                  void Panda.$body.on("click", ".btn.unlike", function (t) {
                                      var e = $(this),
                                          a = e.find(".count").text();
                                      e.toggleClass("active"), e.find(".count").text(1 - a), e.closest(".feeling").find(".btn.like").removeClass("active"), e.closest(".feeling").find(".btn.like .count").text("0");
                                  }))
                            : null
                    );
                };
            })()),
            (Panda.slider = (function () {
                function t(t, e) {
                    return this.init(t, e);
                }
                var e = function (t) {
                        var e,
                            a = ["", "-xs", "-sm", "-md", "-lg", "-xl", "-xxl"];
                        for (this.classList.remove("row"), s = 0; s < 7; ++s) for (e = 1; e <= 12; ++e) this.classList.remove("cols" + a[s] + "-" + e);
                        if ((this.classList.remove("gutter-no"), this.classList.remove("gutter-sm"), this.classList.remove("gutter-lg"), this.classList.contains("animation-slider")))
                            for (var n = this.children, i = n.length, s = 0; s < i; ++s) n[s].setAttribute("data-index", s + 1);
                    },
                    a = function (t) {
                        var e,
                            a = this.firstElementChild.firstElementChild.children,
                            n = a.length;
                        for (e = 0; e < n; ++e)
                            if (!a[e].classList.contains("active")) {
                                var i,
                                    s = Panda.byClass("appear-animate", a[e]);
                                for (i = s.length - 1; i >= 0; --i) s[i].classList.remove("appear-animate");
                            }
                        var o = $(t.currentTarget);
                        o.find("video").on("ended", function () {
                            $(this).closest(".owl-item").hasClass("active") &&
                                (!0 === o.data("owl.carousel").options.autoplay
                                    ? (!1 === o.data("owl.carousel").options.loop && o.data().children - 1 === o.find(".owl-item.active").index() && ((this.loop = !0), this.play()),
                                      o.trigger("next.owl.carousel"),
                                      o.trigger("play.owl.autoplay"))
                                    : ((this.loop = !0), this.play()));
                        });
                    },
                    n = function (t) {
                        $(window).trigger("appear.check");
                        var e = $(t.currentTarget),
                            a = e.find(".owl-item.active video");
                        e.find(".owl-item:not(.active) video").each(function () {
                            this.paused || e.trigger("play.owl.autoplay"), this.pause(), (this.currentTime = 0);
                        }),
                            a.length &&
                                (!0 === e.data("owl.carousel").options.autoplay && e.trigger("stop.owl.autoplay"),
                                a.each(function () {
                                    this.paused && this.play();
                                }));
                    },
                    i = function (t) {
                        var e = this;
                        $(t.currentTarget)
                            .find(".owl-item.active .slide-animate")
                            .each(function () {
                                var t = $(this),
                                    a = $.extend(!0, {}, Panda.defaults.animation, Panda.parseOptions(t.data("animation-options"))),
                                    n = a.duration,
                                    i = a.delay,
                                    s = a.name;
                                t.css("animation-duration", n);
                                var o = Panda.requestTimeout(
                                    function () {
                                        t.addClass(s), t.addClass("show-content");
                                    },
                                    i ? 1e3 * Number(i.slice(0, -1)) : 0
                                );
                                e.timers.push(o);
                            });
                    },
                    s = function (t) {
                        var e = $(this);
                        $(t.currentTarget)
                            .find(".owl-item.active .slide-animate")
                            .each(function () {
                                var t = e;
                                t.addClass("show-content"), t.attr("style", "");
                            }),
                            e.hasClass("owl-nav-image-center") && e.find(".owl-nav > button").css("top", Math.floor(e.find(".product-media img").outerHeight()) / 2);
                    },
                    o = function (t) {
                        var e = this,
                            a = $(t.currentTarget);
                        (e.translateFlag = 1),
                            (e.prev = e.next),
                            a.find(".owl-item .slide-animate").each(function () {
                                var t = $(this),
                                    e = $.extend(!0, {}, Panda.defaults.animation, Panda.parseOptions(t.data("animation-options")));
                                t.removeClass(e.name);
                            });
                    },
                    r = function (t) {
                        var e = this,
                            a = $(t.currentTarget);
                        if (1 == e.translateFlag) {
                            if (((e.next = a.find(".owl-item").eq(t.item.index).children().attr("data-index")), a.find(".show-content").removeClass("show-content"), e.prev != e.next)) {
                                if ((a.find(".show-content").removeClass("show-content"), a.hasClass("animation-slider"))) {
                                    for (var n = 0; n < e.timers.length; n++) Panda.deleteTimeout(e.timers[n]);
                                    e.timers = [];
                                }
                                a.find(".owl-item.active .slide-animate").each(function () {
                                    var t = $(this),
                                        a = $.extend(!0, {}, Panda.defaults.animation, Panda.parseOptions(t.data("animation-options"))),
                                        n = a.duration,
                                        i = a.delay,
                                        s = a.name;
                                    t.css("animation-duration", n),
                                        t.css("animation-delay", i),
                                        t.css("transition-property", "visibility, opacity"),
                                        t.css("transition-delay", i),
                                        t.css("transition-duration", n),
                                        t.addClass(s),
                                        (n = n || "0.75s"),
                                        t.addClass("show-content");
                                    var o = Panda.requestTimeout(
                                        function () {
                                            t.css("transition-property", ""), t.css("transition-delay", ""), t.css("transition-duration", ""), e.timers.splice(e.timers.indexOf(o), 1);
                                        },
                                        i ? 1e3 * Number(i.slice(0, -1)) + 500 * Number(n.slice(0, -1)) : 500 * Number(n.slice(0, -1))
                                    );
                                    e.timers.push(o);
                                });
                            } else a.find(".owl-item").eq(t.item.index).find(".slide-animate").addClass("show-content");
                            e.translateFlag = 0;
                        }
                    };
                return (
                    (t.zoomImage = function () {
                        Panda.zoomImage(this.$element);
                    }),
                    (t.zoomImageRefresh = function () {
                        this.$element.find("img").each(function () {
                            var t = $(this);
                            if ($.fn.elevateZoom) {
                                var e = t.data("elevateZoom");
                                void 0 !== e ? e.refresh() : ((Panda.defaults.zoomImage.zoomContainer = t.parent()), t.elevateZoom(Panda.defaults.zoomImage));
                            }
                        });
                    }),
                    (Panda.defaults.sliderPresets["product-single-carousel"].onInitialized = Panda.defaults.sliderPresets["product-gallery-carousel"].onInitialized = t.zoomImage),
                    (Panda.defaults.sliderPresets["product-single-carousel"].onRefreshed = Panda.defaults.sliderPresets["product-gallery-carousel"].onRefreshed = t.zoomImageRefresh),
                    (t.prototype.init = function (t, d) {
                        (this.timers = []), (this.translateFlag = 0), (this.prev = 1), (this.next = 1), Panda.lazyload(t, !0);
                        var l = t.attr("class").split(" "),
                            c = $.extend(!0, {}, Panda.defaults.slider);
                        l.forEach(function (t) {
                            var e = Panda.defaults.sliderPresets[t];
                            e && $.extend(!0, c, e);
                        }),
                            t.find("video").each(function () {
                                this.loop = !1;
                            }),
                            $.extend(!0, c, Panda.parseOptions(t.attr("data-owl-options")), d),
                            (i = i.bind(this)),
                            (o = o.bind(this)),
                            (r = r.bind(this)),
                            t.on("initialize.owl.carousel", e).on("initialized.owl.carousel", a).on("translated.owl.carousel", n),
                            t.hasClass("animation-slider") && t.on("initialized.owl.carousel", i).on("resized.owl.carousel", s).on("translate.owl.carousel", o).on("translated.owl.carousel", r),
                            t.hasClass("owl-nav-image-center") && t.find(".owl-nav > button").css("top", Math.floor(t.find(".product-media img").outerHeight()) / 2);
                    }),
                    function (e, a) {
                        Panda.$(e).each(function () {
                            var e = $(this);
                            Panda.call(function () {
                                new t(e, a);
                            });
                        });
                    }
                );
            })()),
            (Panda.quantityInput = (function () {
                function t(t) {
                    return this.init(t);
                }
                return (
                    (t.min = 1),
                    (t.max = 1e6),
                    (t.value = 1),
                    (t.prototype.init = function (e) {
                        var a = this;
                        (a.$minus = !1),
                            (a.$plus = !1),
                            (a.$value = !1),
                            (a.value = !1),
                            (a.startIncrease = a.startIncrease.bind(a)),
                            (a.startDecrease = a.startDecrease.bind(a)),
                            (a.stop = a.stop.bind(a)),
                            (a.min = parseInt(e.attr("min"))),
                            (a.max = parseInt(e.attr("max"))),
                            a.min || e.attr("min", (a.min = t.min)),
                            a.max || e.attr("max", (a.max = t.max)),
                            (a.$value = e.val((a.value = t.value))),
                            (a.$minus = e
                                .prev()
                                .on("mousedown", function (t) {
                                    t.preventDefault(), a.startDecrease();
                                })
                                .on("touchstart", function (t) {
                                    t.cancelable && t.preventDefault(), a.startDecrease();
                                })
                                .on("mouseup", a.stop)),
                            (a.$plus = e
                                .next()
                                .on("mousedown", function (t) {
                                    t.preventDefault(), a.startIncrease();
                                })
                                .on("touchstart", function (t) {
                                    t.cancelable && t.preventDefault(), a.startIncrease();
                                })
                                .on("mouseup", a.stop)),
                            Panda.$body.on("mouseup", a.stop).on("touchend", a.stop).on("touchcancel", a.stop);
                    }),
                    (t.prototype.startIncrease = function (t) {
                        t && t.preventDefault();
                        var e = this;
                        (e.value = e.$value.val()),
                            e.value < e.max && e.$value.val(++e.value),
                            (e.increaseTimer = Panda.requestTimeout(function () {
                                (e.speed = 1),
                                    (e.increaseTimer = Panda.requestInterval(function () {
                                        e.$value.val((e.value = Math.min(e.value + Math.floor((e.speed *= 1.05)), e.max)));
                                    }, 50));
                            }, 400));
                    }),
                    (t.prototype.stop = function (t) {
                        Panda.deleteTimeout(this.increaseTimer), Panda.deleteTimeout(this.decreaseTimer);
                    }),
                    (t.prototype.startDecrease = function () {
                        var t = this;
                        (t.value = t.$value.val()),
                            t.value > t.min && t.$value.val(--t.value),
                            (t.decreaseTimer = Panda.requestTimeout(function () {
                                (t.speed = 1),
                                    (t.decreaseTimer = Panda.requestInterval(function () {
                                        t.$value.val((t.value = Math.max(t.value - Math.floor((t.speed *= 1.05)), t.min)));
                                    }, 50));
                            }, 400));
                    }),
                    function (e) {
                        Panda.$(e).each(function () {
                            var e = $(this);
                            e.data("quantityInput") || e.data("quantityInput", new t(e));
                        });
                    }
                );
            })()),
            (Panda.Menu = {
                init: function () {
                    this.initMenu(), this.initMobileMenu(), this.initFilterMenu(), this.initCategoryMenu(), this.initCollapsibleWidget();
                },
                initMenu: function () {
                    $(".menu li").each(function () {
                        this.lastElementChild && ("UL" === this.lastElementChild.tagName || this.lastElementChild.classList.contains("megamenu")) && this.classList.add("submenu");
                    }),
                        $(".menu > li > a").each(function () {
                            var t = $(this);
                            "Elements" == t.text() && t.closest("li").addClass("submenu-container");
                        }),
                        $(".main-nav .megamenu, .main-nav .submenu > ul").each(function () {
                            var t = $(this),
                                e = t.offset().left,
                                a = t.outerWidth(),
                                n = e + a - (window.innerWidth - 20);
                            if (t.closest("li").hasClass("submenu-container")) {
                                var i = $(window).innerWidth();
                                i <= 1300 && t.css("width", i - 40), (n = (i - (a = t.innerWidth())) / 2 - e) < 0 && t.css("margin-left", n);
                            } else n >= 0 && e > 20 && t.css("margin-left", "-=" + n);
                        }),
                        Panda.$window.on("resize", function () {
                            $(".main-nav .megamenu, .main-nav .submenu > ul").each(function () {
                                var t = $(this),
                                    e = t.offset().left,
                                    a = t.outerWidth(),
                                    n = e + a - (window.innerWidth - 20);
                                if (t.closest("li").hasClass("submenu-container")) {
                                    var i = $(window).innerWidth();
                                    i <= 1300 ? t.css("width", i - 40) : t.css("width", 1280), (a = t.innerWidth()), t.css("margin-left", 0), (n = (i - a) / 2 - (e = t.offset().left)) < 0 && t.css("margin-left", n);
                                } else n >= 0 && e > 20 && t.css("margin-left", "-=" + n);
                            });
                        });
                },
                initMobileMenu: function () {
                    function t(t) {
                        t.preventDefault(), Panda.$body.removeClass("mmenu-active");
                    }
                    $(".mobile-menu li, .toggle-menu li").each(function () {
                        if (this.lastElementChild && ("UL" === this.lastElementChild.tagName || this.lastElementChild.classList.contains("megamenu"))) {
                            var t = document.createElement("span");
                            (t.className = "toggle-btn"), this.firstElementChild.appendChild(t);
                        }
                    }),
                        $(".mobile-menu-toggle").on("click", function (t) {
                            t.preventDefault(), Panda.$body.addClass("mmenu-active");
                        }),
                        $(".mobile-menu-overlay").on("click", t),
                        $(".mobile-menu-close").on("click", t),
                        Panda.$window.on("resize", t);
                },
                initFilterMenu: function () {
                    $(".search-ul li").each(function () {
                        if (this.lastElementChild && "UL" === this.lastElementChild.tagName) {
                            var t = document.createElement("i");
                            (t.className = "fas fa-chevron-down"), this.classList.add("with-ul"), this.firstElementChild.appendChild(t);
                        }
                    }),
                        $(".with-ul > a i, .toggle-btn").on("click", function (t) {
                            $(this).parent().next().slideToggle(300).parent().toggleClass("show"),
                                setTimeout(function () {
                                    $(".sticky-sidebar").trigger("recalc.pin");
                                }, 320),
                                t.preventDefault();
                        });
                },
                initCategoryMenu: function () {
                    var t = $(".category-dropdown");
                    if (t.length) {
                        var e = t.find(".dropdown-box");
                        if (e.length) {
                            var a = $(".main").offset().top + e[0].offsetHeight;
                            (window.pageYOffset > a || window.innerWidth < Panda.minDesktopWidth) && t.removeClass("show"),
                                window.addEventListener(
                                    "scroll",
                                    function () {
                                        window.pageYOffset <= a && window.innerWidth >= Panda.minDesktopWidth && t.removeClass("show");
                                    },
                                    { passive: !0 }
                                ),
                                $(".category-toggle").on("click", function (t) {
                                    t.preventDefault();
                                }),
                                t.on("mouseover", function (e) {
                                    window.pageYOffset > a && window.innerWidth >= Panda.minDesktopWidth && t.addClass("show");
                                }),
                                t.on("mouseleave", function (e) {
                                    window.pageYOffset > a && window.innerWidth >= Panda.minDesktopWidth && t.removeClass("show");
                                });
                        }
                        if (t.hasClass("with-sidebar")) {
                            var n = Panda.byClass("sidebar");
                            n.length &&
                                (t.find(".dropdown-box").css("width", n[0].offsetWidth - 20),
                                Panda.$window.on("resize", function () {
                                    t.find(".dropdown-box").css("width", n[0].offsetWidth - 20);
                                }));
                        }
                    }
                },
                initCollapsibleWidget: function () {
                    $(".widget-collapsible .widget-title").each(function () {
                        var t = document.createElement("span");
                        (t.className = "toggle-btn"), this.appendChild(t);
                    }),
                        $(".widget-collapsible .widget-title .toggle-btn").on("click", function (t) {
                            var e = $(this).closest(".widget-title");
                            if ((t.preventDefault(), !e.hasClass("sliding"))) {
                                var a = e.siblings(".widget-body");
                                e.hasClass("collapsed") || a.css("display", "block"),
                                    e.addClass("sliding"),
                                    a.slideToggle(300, function () {
                                        e.removeClass("sliding");
                                    }),
                                    e.toggleClass("collapsed"),
                                    setTimeout(function () {
                                        $(".sticky-sidebar").trigger("recalc.pin");
                                    }, 320);
                            }
                        });
                },
            }),
            (Panda.Minipopup = (function () {
                var t,
                    e = 0,
                    a = [],
                    n = !1,
                    i = [],
                    s = !1,
                    o = function () {
                        if (!n) for (var t = 0; t < i.length; ++t) (i[t] -= 200) <= 0 && this.close(t--);
                    };
                return {
                    init: function () {
                        var e = document.createElement("div");
                        (e.className = "minipopup-area"),
                            Panda.byClass("page-wrapper")[0].appendChild(e),
                            (t = $(e)).on("click", ".btn-close", function (t) {
                                self.close($(this).closest(".minipopup-box").index());
                            }),
                            (this.close = this.close.bind(this)),
                            (o = o.bind(this));
                    },
                    open: function (n, r) {
                        var d,
                            l = this,
                            c = $.extend(!0, {}, Panda.defaults.minipopup, n);
                        c.isPurchased ? (c.detailTemplate = Panda.parseTemplate(c.purchasedTemplate, c)) : (c.detailTemplate = Panda.parseTemplate(null != c.count ? c.priceQuantityTemplate : c.priceTemplate, c)),
                            null != c.rating && (c.detailTemplate += Panda.parseTemplate(c.ratingTemplate, c)),
                            (d = $(Panda.parseTemplate(c.template, c))),
                            (l.space = c.space),
                            (d.appendTo(t).css("top", -e).find("img")[0].onload = function () {
                                (e += d[0].offsetHeight + l.space),
                                    d.addClass("show"),
                                    d.offset().top - window.pageYOffset < 0 && (l.close(), d.css("top", -e + d[0].offsetHeight + l.space)),
                                    d
                                        .on("mouseenter", function () {
                                            l.pause();
                                        })
                                        .on("mouseleave", function () {
                                            l.resume();
                                        })
                                        .on("touchstart", function (t) {
                                            l.pause(), t.stopPropagation();
                                        })
                                        .on("mousedown", function () {
                                            $(this).addClass("focus");
                                        })
                                        .on("mouseup", function () {
                                            l.close($(this).index());
                                        }),
                                    Panda.$body.on("touchstart", function () {
                                        l.resume();
                                    }),
                                    a.push(d),
                                    i.push(c.delay),
                                    i.length > 1 || (s = setInterval(o, 200)),
                                    r && r(d);
                            });
                    },
                    close: function (t) {
                        var n = void 0 === t ? 0 : t,
                            o = a.splice(n, 1)[0];
                        void 0 !== o &&
                            (i.splice(n, 1)[0],
                            "undefined" != i &&
                                ((e -= o[0].offsetHeight + this.space),
                                o.removeClass("show"),
                                setTimeout(function () {
                                    o.remove();
                                }, 300),
                                a.forEach(function (t, e) {
                                    e >= n && t.hasClass("show") && t.stop(!0, !0).animate({ top: parseInt(t.css("top")) + t[0].offsetHeight + 20 }, 600, "easeOutQuint");
                                }),
                                a.length || clearTimeout(s)));
                    },
                    pause: function () {
                        n = !0;
                    },
                    resume: function () {
                        n = !1;
                    },
                };
            })()),
            (Panda.Shop = {
                init: function () {
                    this.initProductsQuickview(),
                        this.initProductsCartAction(),
                        this.initRemoveData(),
                        this.initProductsCompareAction(),
                        this.initProductsLoginAction(),
                        this.initProductsLoad(),
                        this.initProductsScrollLoad(".scroll-load"),
                        this.initProductType("slideup"),
                        this.initWishlistButton(".product:not(.product-single) .btn-wishlist"),
                        Panda.call(Panda.ratingTooltip, 500),
                        this.initSelectMenu(".select-menu"),
                        Panda.priceSlider(".filter-price-slider");
                },
                initProductType: function (t) {
                    "slideup" === t &&
                        ($(".product-slideup-content .product-details").each(function (t) {
                            var e = $(this),
                                a = e.find(".product-hide-details").outerHeight(!0);
                            e.height(e.height() - a);
                        }),
                        $(Panda.byClass("product-slideup-content"))
                            .on("mouseenter touchstart", function (t) {
                                var e = $(this),
                                    a = e.find(".product-hide-details").outerHeight(!0);
                                e.find(".product-details").css("transform", "translateY(" + -a + "px)"), e.find(".product-hide-details").css("transform", "translateY(" + -a + "px)");
                            })
                            .on("mouseleave touchleave", function (t) {
                                var e = $(this);
                                e.find(".product-hide-details").outerHeight(!0);
                                e.find(".product-details").css("transform", "translateY(0)"), e.find(".product-hide-details").css("transform", "translateY(0)");
                            }));
                },
                initSelectMenu: function () {
                    Panda.$body
                        .on("click", ".select-menu", function (t) {
                            var e = $(this);
                            if (!e.hasClass("toolbox-sort")) {
                                var a = $(t.currentTarget),
                                    n = $(t.target),
                                    i = a.hasClass("opened"),
                                    s = n.closest("li");
                                a.hasClass("fixed") ? t.stopPropagation() : 0 != e.closest(".sidebar-content").length && $(".select-menu").removeClass("opened"),
                                    a.is(n.parent())
                                        ? (i || a.addClass("opened"), t.stopPropagation())
                                        : (s.toggleClass("active"),
                                          s.hasClass("active")
                                              ? ($(".select-items").show(),
                                                $('<a href="#" class="select-item">' + n.text() + '<i class="p-icon-times"></i></a>')
                                                    .insertBefore(".select-items .filter-clean")
                                                    .hide()
                                                    .fadeIn()
                                                    .data("link", s))
                                              : $(".select-items > .select-item")
                                                    .filter(function (t, e) {
                                                        return e.innerText == n.text();
                                                    })
                                                    .fadeOut(function () {
                                                        $(this).remove(), $(".select-items").children().length < 2 && $(".select-items").hide();
                                                    }));
                            }
                            t.preventDefault();
                        })
                        .on("click", function (t) {
                            (0 == $(t.target).closest(".filter-items").length || $(t.target).hasClass("select-menu")) && $(".select-menu").removeClass("opened");
                        })
                        .on("click", ".select-items .filter-clean", function (t) {
                            var e = $(this);
                            e.siblings().each(function () {
                                var t = $(this).data("link");
                                t && t.removeClass("active");
                            }),
                                e.parent().fadeOut(function () {
                                    e.siblings().remove();
                                }),
                                t.preventDefault();
                        })
                        .on("click", ".select-item i", function (t) {
                            $(t.currentTarget)
                                .parent()
                                .fadeOut(function () {
                                    var t = $(this),
                                        e = t.data("link");
                                    e && e.toggleClass("active"), t.remove(), $(".select-items").children().length < 2 && $(".select-items").hide();
                                }),
                                t.preventDefault();
                        })
                        .on("click", ".filter-clean", function (t) {
                            $(".shop-sidebar .filter-items .active").removeClass("active"), t.preventDefault();
                        })
                        .on("click", ".filter-items li", function (t) {
                            var e = $(this),
                                a = e.closest(".filter-items");
                            if ($(this).closest(".summary").length) return a.find(".active").removeClass("active"), e.closest("li").addClass("active"), void t.preventDefault();
                            a.hasClass("search-ul") ||
                                a.parent().hasClass("select-menu") ||
                                (a.hasClass("filter-price") ? (e.parent().siblings().removeClass("active"), e.parent().toggleClass("active"), t.preventDefault()) : (e.closest("li").toggleClass("active"), t.preventDefault()));
                        });
                },
                initProductsQuickview: function () {
                    Panda.$body.on("click", ".btn-quickview", function (t) {
                        t.preventDefault(),
                            Panda.popup(
                                {
                                    items: { src: "ajax/quickview.html" },
                                    callbacks: {
                                        ajaxContentAdded: function () {
                                            this.wrap.imagesLoaded(function () {
                                                Panda.initProductSingle($(".mfp-product .product-single"));
                                            });
                                        },
                                    },
                                },
                                "quickview"
                            ),
                            Panda.quantityInput(".quantity");
                    });
                },
                initProductsCartAction: function () {
                    Panda.$body
                        .on("click", ".off-canvas .cart-toggle", function (t) {
                            t.preventDefault(), $(".cart-dropdown").addClass("opened"), Panda.$body.addClass("offcanvas-active");
                        })
                        .on("click", ".off-canvas .canvas-header .btn-close", function (t) {
                            $(".cart-dropdown").removeClass("opened"), Panda.$body.removeClass("offcanvas-active"), t.preventDefault();
                        })
                        .on("click", ".off-canvas .canvas-overlay", function (t) {
                            $(".cart-dropdown").removeClass("opened"), Panda.$body.removeClass("offcanvas-active"), t.preventDefault();
                        })
                        .on("click", ".product .btn-product-icon.btn-cart , .product .product-action .btn-cart , .wishlist-table .btn-product.btn-cart", function (t) {
                            t.preventDefault();
                            var e,
                                a,
                                n = $(this),
                                i = n.closest(".product"),
                                s = n.closest(".compare-col");
                            if (s.length > 0)
                                (e = $(".panda-compare-table > .compare-row").eq(2).children().eq(s.index()).find(".product-price .new-price, .product-price").html()),
                                    (a = $(".panda-compare-table > .compare-row").eq(1).children().eq(s.index())),
                                    i.hasClass("product-single") ||
                                        Panda.Minipopup.open({
                                            message: "Successfully Added",
                                            productClass: "product-mini",
                                            name: a.find("a").text(),
                                            nameLink: a.find(" a ").attr("href"),
                                            imageSrc: i.find(".product-media img").attr("src"),
                                            imageLink: a.find(" a ").attr("href"),
                                            price: e,
                                            count: i.find(".quantity").length > 0 ? i.find(".quantity").val() : 1,
                                            actionTemplate:
                                                '<div class="action-group d-flex"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-block">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-block">Check Out</a></div>',
                                        });
                            else if (n.closest(".wishlist-table").length > 0) {
                                var o = n.closest("tr");
                                Panda.Minipopup.open({
                                    message: "Successfully Added",
                                    productClass: "product-mini",
                                    name: o.find(".product-name").text(),
                                    nameLink: o.find(".product-name > a").attr("href"),
                                    imageSrc: o.find(".product-thumbnail img").attr("src"),
                                    imageLink: o.find(".product-thumbnail > a").attr("href"),
                                    price: o.find(".product-price .amount").html(),
                                    count: 1,
                                    actionTemplate:
                                        '<div class="action-group d-flex"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-block">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-block">Check Out</a></div>',
                                });
                            } else
                                i.hasClass("product-single") || i.hasClass("product-mini"),
                                    Panda.Minipopup.open({
                                        message: "Successfully Added",
                                        productClass: "product-mini",
                                        name: i.find(".product-name").text(),
                                        nameLink: i.find(".product-name > a").attr("href"),
                                        imageSrc: i.find(".product-media img").attr("src"),
                                        imageLink: i.find(".product-name > a").attr("href"),
                                        price: i.find(".product-price .new-price, .product-price .price, .product-price").html(),
                                        count: i.find(".quantity").length > 0 ? i.find(".quantity").val() : 1,
                                        actionTemplate:
                                            '<div class="action-group d-flex"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-block">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-block">Check Out</a></div>',
                                    });
                        })
                        .on("click", ".minipopup-box .btn-cart", function (t) {
                            t.preventDefault();
                            var e = $(this).closest(".minipopup-box").find(".product");
                            Panda.Minipopup.open({
                                message: "Successfully Added",
                                productClass: "product-mini",
                                name: e.find(".product-name").text(),
                                nameLink: e.find(".product-name > a").attr("href"),
                                imageSrc: e.find(".product-media img").attr("src"),
                                imageLink: e.find(".product-name > a").attr("href"),
                                price: e.find(".product-price .new-price, .product-price .price, .product-price").html(),
                                count: e.find(".quantity").length > 0 ? e.find(".quantity").val() : 1,
                                actionTemplate:
                                    '<div class="action-group d-flex"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-block">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-block">Check Out</a></div>',
                            });
                        })
                        .on("click", ".hotspot .btn-cart", function (t) {
                            t.preventDefault();
                            var e = $(this).closest(".tooltip");
                            Panda.Minipopup.open({
                                message: "Successfully Added To Cart",
                                productClass: "product-mini",
                                name: e.find(".tooltip-name").text(),
                                nameLink: e.find(".tooltip-name > a").attr("href"),
                                imageSrc: e.find(".tooltip-media img").attr("src"),
                                imageLink: e.find(".tooltip-name > a").attr("href"),
                                price: e.find(".tooltip-price .new-price, .tooltip-price .price").html(),
                                count: e.find(".quantity").length > 0 ? e.find(".quantity").val() : 1,
                                actionTemplate:
                                    '<div class="action-group d-flex"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-block">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-block">Check Out</a></div>',
                            });
                        });
                },
                initRemoveData: function () {
                    Panda.$body.on("click", ".shop-table .product-remove .remove", function (t) {
                        var e = $(this),
                            a = e.closest("tbody");
                        e.closest("tr").remove(),
                            0 == a.find("tr").length &&
                                (a.closest(".shop-table").hasClass("wishlist-table") ? (document.location.href = "wishlist-empty.html") : a.closest(".shop-table").hasClass("cart-table") && (document.location.href = "cart-empty.html")),
                            t.preventDefault();
                    });
                },
                initProductsCompareAction: function () {
                    Panda.$body.on("click", ".product .btn-product-icon.btn-compare:not(.open)", function (t) {
                        t.preventDefault();
                        var e = $(this).closest(".product");
                        e.hasClass("product-single") ||
                            Panda.Minipopup.open({
                                message: "Added To Compare List",
                                productClass: "product-mini",
                                name: e.find(".product-name").text(),
                                nameLink: e.find(".product-name > a").attr("href"),
                                imageSrc: e.find(".product-media img").attr("src"),
                                imageLink: e.find(".product-name > a").attr("href"),
                                price: e.find(".product-price .new-price, .product-price .price").html(),
                                actionTemplate:
                                    '<div class="action-group d-flex"><a href="#" class="btn btn-sm btn-outline btn-primary btn-block btn-cart">Add to Cart</a><a href="compare.html" class="btn btn-sm btn-primary btn-block">Compare List</a></div>',
                            }),
                            $(this).addClass("open"),
                            $(this).html('<i class="p-icon-check-solid"></i>'),
                            $(this).attr("title", "Browse compare"),
                            $(this).attr("href", "compare.html");
                    });
                },
                initProductsLoginAction: function () {
                    Panda.$body
                        .on("click", ".login-toggle", function (t) {
                            t.preventDefault(), $(".login-dropdown").addClass("opened"), Panda.$body.addClass("offcanvas-active");
                        })
                        .on("click", ".off-canvas .btn-close", function (t) {
                            $(".login-dropdown").removeClass("opened"), Panda.$body.removeClass("offcanvas-active"), t.preventDefault();
                        })
                        .on("click", ".off-canvas .canvas-overlay", function (t) {
                            $(".login-dropdown").removeClass("opened"), Panda.$body.removeClass("offcanvas-active"), t.preventDefault();
                        });
                },
                initProductsLoad: function () {
                    $(".btn-load").on("click", function (t) {
                        var e,
                            a = $(this),
                            n = $(a.data("load-to")),
                            i = a.html();
                        (e = "load" == a.data("load-type") ? 2 : 1),
                            a.text("Loading ..."),
                            a.addClass("btn-loading"),
                            $(".loading").css("display", "block"),
                            t.preventDefault(),
                            $.ajax({
                                url: a.attr("href"),
                                success: function (t) {
                                    var s = $(t);
                                    setTimeout(function () {
                                        $.fn.isotope ? n.isotope("insert", s) : n.append(s), a.html(i);
                                        var t = parseInt(a.data("load-count") ? a.data("load-count") : 0);
                                        a.data("load-count", ++t), a.removeClass("btn-loading"), $(".loading").css("display", "none"), t >= e && a.hide(), Panda.Shop.initProductType("slideup");
                                    }, 350);
                                },
                                failure: function () {
                                    a.text("Sorry something went wrong.");
                                },
                            });
                    });
                },
                initProductsScrollLoad: function (t) {
                    var e,
                        a = Panda.$(t),
                        n = $(t).data("url");
                    n || (n = "ajax/ajax-products.html");
                    var i = function (t) {
                        window.pageYOffset > e + a.outerHeight() - window.innerHeight - 150 &&
                            "loading" != a.data("load-state") &&
                            $.ajax({
                                url: n,
                                success: function (t) {
                                    var e = $(t);
                                    a.data("load-state", "loading"),
                                        a.next().hasClass("load-more-overlay") ? a.next().addClass("loading") : $('<div class="mt-4 mb-4 load-more-overlay loading"></div>').insertAfter(a),
                                        setTimeout(function () {
                                            a.next().removeClass("loading"),
                                                a.append(e),
                                                setTimeout(function () {
                                                    a.find(".product-wrap.fade:not(.in)").addClass("in");
                                                }, 200),
                                                a.data("load-state", "loaded");
                                        }, 500);
                                    var n = parseInt(a.data("load-count") ? a.data("load-count") : 0);
                                    a.data("load-count", ++n), n > 2 && window.removeEventListener("scroll", i, { passive: !0 });
                                },
                                failure: function () {
                                    $this.text("Sorry something went wrong.");
                                },
                            });
                    };
                    a.length > 0 && ((e = a.offset().top), window.addEventListener("scroll", i, { passive: !0 }));
                },
                initWishlistButton: function (t) {
                    Panda.$body.on("click", t, function (t) {
                        var e = $(this);
                        e.toggleClass("added").addClass("load-more-overlay loading"),
                            setTimeout(function () {
                                e.removeClass("load-more-overlay loading").find("i").toggleClass("p-icon-heart-solid").toggleClass("p-icon-heart-fill"),
                                    e.hasClass("added") ? e.attr("title", "Remove from wishlist") : e.attr("title", "Add to wishlist");
                            }, 500),
                            t.preventDefault();
                    });
                },
            }),
            (Panda.prepare = function () {
                Panda.$body.hasClass("with-flex-container") && window.innerWidth >= 1200 && Panda.$body.addClass("sidebar-active"),
                    $(document).ready(function () {
                        "" != window.location.hash && window.scrollTo({ top: 0, left: 0 });
                    });
            }),
            (Panda.initLayout = function () {
                Panda.isotopes(".grid:not(.grid-float)"), Panda.stickySidebar(".sticky-sidebar");
            }),
            (Panda.init = function () {
                Panda.appearAnimate(".appear-animate"),
                    Panda.Minipopup.init(),
                    Panda.Shop.init(),
                    Panda.initProductSinglePage(),
                    Panda.slider(".owl-carousel"),
                    Panda.headerToggleSearch(".hs-toggle"),
                    Panda.stickyContent(".sticky-header", { top: !1 }),
                    Panda.stickyContent(".sticky-footer", Panda.defaults.stickyFooter),
                    Panda.stickyContent(".sticky-toolbox", Panda.defaults.stickyToolbox),
                    Panda.sidebar("sidebar"),
                    Panda.sidebar("right-sidebar"),
                    Panda.quantityInput(".quantity"),
                    Panda.playableVideo(".inner-video"),
                    Panda.initAccordion(".card-header > a"),
                    Panda.initTab(".nav-tabs"),
                    Panda.initAlert(".alert"),
                    Panda.parallax(".parallax"),
                    Panda.countTo(".count-to"),
                    Panda.countdown(".product-countdown, .countdown"),
                    Panda.Menu.init(),
                    Panda.initZoom(),
                    Panda.initPopups(),
                    Panda.initScrollTopButton(),
                    Panda.initFloatingElements(".floating"),
                    Panda.initAdvancedMotions(".skrollr"),
                    Panda.hashScroll.init(),
                    Panda.orderView(),
                    Panda.ibNavSurfer(),
                    (Panda.status = "complete");
            }),
            Panda.prepare(),
            (window.onload = function () {
                (Panda.status = "loaded"), Panda.$body.addClass("loaded"), Panda.$window.trigger("Panda_load"), Panda.call(Panda.initLayout), Panda.call(Panda.init), Panda.$window.trigger("panda_complete"), Panda.refreshSidebar();
            });
    })();
