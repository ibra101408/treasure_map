function flurry(){
$(document).ready(function () {
    $('body').flurry({
        character: "$£€",
        color: ["gold", "gold"],
        height: 568,
        frequency: 100,
        speed: 5000,
        small: 8,
        large: 48,
        wind: 0,
        windVariance: 20,
        rotation: 90,
        rotationVariance: 180
    });
});

/**
 * Flurry jQuery Plugin
 *
 * Flurry is an easy-to-use animated snow plugin for jQuery. It takes advantage
 * of CSS transforms, CSS transitions and requestAnimationFrame to provide
 * smooth animation for modern browsers. Props to Jonathan Nicol @f6design
 * for boilerplate code
 * (see http://jonathannicol.com/blog/2012/05/06/a-jquery-plugin-boilerplate/)
 *
 * @link      https://github.com/joshmcrty/Flurry
 * @version   1.1.0
 * @author    Josh McCarty <josh@joshmccarty.com>
 * @copyright 2016 Josh McCarty
 * @license   https://github.com/joshmcrty/Flurry/blob/master/LICENSE GPLv2
 */
! function (n, e) {
    function t(n, e) {
        function t() {
            var o = (new Date).getTime(),
                r = o - a;
            r >= e && (n.call(), a = (new Date).getTime()), i.value = window.requestAnimationFrame(t)
        }
        var a = (new Date).getTime(),
            i = new Object;
        return i.value = window.requestAnimationFrame(t), i
    }

    function a(n) {
        window.cancelAnimationFrame ? window.cancelAnimationFrame(n.value) : window.webkitCancelAnimationFrame ? window
            .webkitCancelAnimationFrame(n.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(
            n.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(n.value) : window.oCancelRequestAnimationFrame ?
            window.oCancelRequestAnimationFrame(n.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(
                n.value) : clearInterval(n)
    }

    function i() {
        var n = document.body || document.documentElement,
            t = n.style,
            a = t.transition !== e || t.WebkitTransition !== e || t.MozTransition !== e || t.MsTransition !== e || t.OTransition !==
                e;
        return a
    }

    function o(n, e) {
        return Math.floor(Math.random() * (e - n + 1) + n)
    }

    function r(e, t, a) {
        var r = 1 === e.character.length ? e.character : e.character.charAt(Math.round(o(0, e.character.length - 1))),
            s = o(-Math.abs(e.wind), a + Math.abs(e.wind)),
            c = s + o(e.wind - e.windVariance, e.wind + e.windVariance),
            l = o(e.small, e.large),
            u = e.speed / ((o(1.2 * l, .8 * l) - e.small) / (e.large - e.small) + .5),
            m = e.height - l,
            d = o(e.rotation - e.rotationVariance, e.rotation + e.rotationVariance),
            w = Array.isArray(e.color) ? e.color[Math.floor(Math.random() * e.color.length)] : e.color,
            f = {
                transform: "translateX(" + c + "px) translateY(" + m + "px) rotateZ(" + d + "deg)",
                opacity: 0
            },
            h = n("<span></span>");
        h.html(r).css({
            color: e.blur && l < (e.large + e.small) / 2 ? "transparent" : w,
            "text-shadow": e.blur && l < (e.large + e.small) / 2 ? "0 0 1px " + w : "none",
            display: "inline-block",
            "line-height": 1,
            margin: 0,
            padding: "2px",
            "pointer-events": "none",
            "font-size": l + "px",
            opacity: e.startTransparency,
            position: "absolute",
            top: "-" + 1.2 * e.large + "px",
            transform: "translateX(" + s + "px) translateY(0px) rotateZ(" + e.startRotation + "deg)",
            transition: "transform " + u / 1e3 + "s linear, opacity " + u / 1e3 + "s " + e.opacityEasing,
            "z-index": e.zIndex
        }).appendTo(t), i ? (h.on("transitionend.flurry", function (e) {
            n(e.target).remove()
        }), window.requestAnimationFrame(function () {
            h.css(f)
        })) : h.animate(f, u, "linear", function () {
            n(this).remove()
        })
    }

    function s(i, o) {
        function s() {
            o.useRelative === !0 && "static" === f.css("position") && f.css({
                position: "relative"
            });
            var e = n(document.createElement("div")).addClass("flurry-container").css({
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    height: o.height,
                    overflow: o.overflow,
                    "pointer-events": "none"
                }).prependTo(f),
                a = e.width();
            n(window).resize(function () {
                a = e.width()
            }), d.flakeInterval = t(function () {
                r(o, e, a)
            }, o.frequency), m("onInit")
        }

        function l(n, e) {
            return e ? void(o[n] = parseInt(e) || e) : o[n]
        }

        function u() {
            f.each(function () {
                var e = n(this);
                a(d.flakeInterval), e.find(".flurry-container").remove(), m("onDestroy"), e.removeData("plugin_" + c)
            })
        }

        function m(n) {
            o[n] !== e && o[n].call(w)
        }
        var d = this,
            w = i,
            f = n(i);
        return o = n.extend({
            height: f.height() > 200 ? 200 : f.height(),
            useRelative: f.is("body") ? !1 : !0
        }, n.fn[c].defaults, o), n.each(o, function (n, e) {
            parseInt(e) && (o[n] = parseInt(e))
        }), s(), {
            option: l,
            destroy: u
        }
    }! function () {
        for (var n = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t)
            window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[
                t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (e, t) {
            var a = (new Date).getTime(),
                i = Math.max(0, 16 - Math.abs(a - n)),
                o = window.setTimeout(function () {
                    e(a + i)
                }, i);
            return n = a + i, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (n) {
            clearTimeout(n)
        })
    }();
    var c = "flurry";
    n.fn[c] = function (t) {
        if ("string" == typeof arguments[0]) {
            var a, i = arguments[0],
                o = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                if (!n.data(this, "plugin_" + c) || "function" != typeof n.data(this, "plugin_" + c)[i]) throw new Error(
                    "Method " + i + " does not exist on jQuery." + c);
                a = n.data(this, "plugin_" + c)[i].apply(this, o)
            }), a !== e ? a : this
        }
        return "object" != typeof t && t ? void 0 : this.each(function () {
            n.data(this, "plugin_" + c) || n.data(this, "plugin_" + c, new s(this, t))
        })
    }, n.fn[c].defaults = {
        onInit: function () {},
        onDestroy: function () {},
        character: "???",
        color: ["white", "silver"],
        frequency: 100,
        speed: 3e3,
        small: 8,
        large: 28,
        wind: 40,
        windVariance: 20,
        rotation: 90,
        rotationVariance: 180,
        startRotation: 0,
        startOpacity: 1,
        endOpacity: 0,
        opacityEasing: "cubic-bezier(1,.3,.6,.74)",
        blur: !0,
        overflow: "hidden",
        zIndex: 9999
    }
}(jQuery);
}