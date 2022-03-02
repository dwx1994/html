(function (root) {
  var exports = undefined,
      module = undefined,
      require = undefined;
  var define = undefined;
  var self = root,
      window = root,
      global = root,
      globalThis = root;
  (function () {
    !function (e) {
      var t = {};

      function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
          i: n,
          l: !1,
          exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
      }

      r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
        });
      }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
        return n;
      }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        return r.d(t, "a", t), t;
      }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, r.p = "", r(r.s = 51);
    }([function (e, t, r) {
      "use strict";

      var n = r(6),
          o = r(27),
          i = Object.prototype.toString;

      function s(e) {
        return "[object Array]" === i.call(e);
      }

      function a(e) {
        return null !== e && "object" == typeof e;
      }

      function p(e) {
        return "[object Function]" === i.call(e);
      }

      function c(e, t) {
        if (null != e) if ("object" != typeof e && (e = [e]), s(e)) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
      }

      e.exports = {
        isArray: s,
        isArrayBuffer: function (e) {
          return "[object ArrayBuffer]" === i.call(e);
        },
        isBuffer: o,
        isFormData: function (e) {
          return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function (e) {
          return "string" == typeof e;
        },
        isNumber: function (e) {
          return "number" == typeof e;
        },
        isObject: a,
        isUndefined: function (e) {
          return void 0 === e;
        },
        isDate: function (e) {
          return "[object Date]" === i.call(e);
        },
        isFile: function (e) {
          return "[object File]" === i.call(e);
        },
        isBlob: function (e) {
          return "[object Blob]" === i.call(e);
        },
        isFunction: p,
        isStream: function (e) {
          return a(e) && p(e.pipe);
        },
        isURLSearchParams: function (e) {
          return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
        },
        isStandardBrowserEnv: function () {
          return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
        },
        forEach: c,
        merge: function e() {
          var t = {};

          function r(r, n) {
            "object" == typeof t[n] && "object" == typeof r ? t[n] = e(t[n], r) : t[n] = r;
          }

          for (var n = 0, o = arguments.length; n < o; n++) c(arguments[n], r);

          return t;
        },
        deepMerge: function e() {
          var t = {};

          function r(r, n) {
            "object" == typeof t[n] && "object" == typeof r ? t[n] = e(t[n], r) : t[n] = "object" == typeof r ? e({}, r) : r;
          }

          for (var n = 0, o = arguments.length; n < o; n++) c(arguments[n], r);

          return t;
        },
        extend: function (e, t, r) {
          return c(t, function (t, o) {
            e[o] = r && "function" == typeof t ? n(t, r) : t;
          }), e;
        },
        trim: function (e) {
          return e.replace(/^\s*/, "").replace(/\s*$/, "");
        }
      };
    }, function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r,
          n = document.location.host || document.location.hostname;
      r = "liveme.com,www.liveme.com,www.royallive.com,www.aaalive.com,sync.liveme.com,www.arablive.online,twoo.liveme.com,www.lmlite.net,www.cheez.com,meet.linkv.sg,pro.liveme.com,www.poplive.live,www.frill.live,www.frilllive.com,www.lekerberos.com,pro.lekerberos.com,pop.lekerberos.com,royal.lekerberos.com,web.linkv.sg,www.coinsgames.net,www.shanghaileyu.com,www.photogrid.app,liveme.bi.ksmobile.net".indexOf(n) >= 0, window.ISONLINE = r, t.default = r;
    }, function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          n = (navigator.platform, navigator.userAgent),
          o = (window.location.href, window.location.search, {
        copy: function (e) {
          if (!(e instanceof Object) || "function" == typeof e) return e;
          var t = {};

          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);

          return t;
        },
        versionCompare: function (e, t) {
          if (null === e) return !1;
          var r = parseFloat(e),
              n = parseFloat(t),
              o = e.replace(r + ".", ""),
              i = t.replace(n + ".", "");
          return r > n || !(r < n) && o >= i;
        },
        createUUID: function (e) {
          for (var t = [], r = void 0, n = 0; n < 36; n++) t[n] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);

          return t[14] = "4", t[19] = "0123456789abcdef".substr(3 & t[19] | 8, 1), e ? r = t.join("").substr(0, 32) : (t[8] = t[13] = t[18] = t[23] = "-", r = t.join("")), r;
        },
        buildQuery: function (e) {
          var t = [];
          if ("object" === (void 0 === e ? "undefined" : r(e))) for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + encodeURIComponent(null == e[n] ? "" : "" + e[n]));
          return t.join("&");
        },
        create: function (e) {
          var t = new Image(0, 0);
          t.onload = function () {
            t = null;
          }, t.src = e, t.complete && (t = null);
        },
        isAndroid: function () {
          return /Android|HTC/i.test(n);
        },
        isIos: function () {
          return !/Android|HTC/i.test(n) && /iPod|iPhone/i.test(n);
        },
        isMobile: function () {
          var e = /Android|HTC/i.test(n),
              t = !e && /iPod|iPhone/i.test(n);
          return e || t;
        },
        getQueryString: function (e) {
          var t = window.location.href;
          e = e.replace(/[\[\]]/g, "\\$&");
          var r = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
          return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null;
        },
        getCookie: function (e) {
          var t = void 0,
              r = void 0,
              n = void 0,
              o = void 0;
          if (document.cookie) for (n = 0, o = (r = document.cookie.split("; ")).length; n < o; n++) if (0 === r[n].indexOf(e + "=")) {
            t = decodeURIComponent(r[n].substr(e.length + 1));
            break;
          }
          return t;
        },
        setCookie: function (e, t, r) {
          var n = [],
              o = void 0,
              i = r || {};
          return null == t && (t = "", i.expires = -1), "number" == typeof i.expires ? (o = new Date()).setTime(o.getTime() + 1e3 * i.expires * 60 * 60 * 24) : i.expires instanceof Date && (o = i.expires), n.push(e + "=" + encodeURIComponent(t)), o && n.push("expires=" + o.toUTCString()), i.path && n.push("path=" + i.path), i.domain && n.push("domain=" + i.domain), i.secure && n.push("secure"), document.cookie = n.join("; ");
        }
      }),
          i = {
        "windows nt 5.0": 1,
        "windows 2000": 2,
        "windows nt 5.1": 3,
        "windows xp": 4,
        "windows nt 5.2": 5,
        "windows 2003": 6,
        "windows nt 6.0": 7,
        "windows vista": 8,
        "windows nt 6.1": 9,
        "windows 7": 10,
        "windows nt 6.2": 11,
        "windows 8": 12,
        "windows nt 6.3": 13,
        "windows 8.1": 14,
        "windows nt 6.4": 23,
        "windows 10": 24,
        "windows nt 10.0": 25
      },
          s = {
        win32: i,
        windows: i,
        android: 15,
        ipad: 16,
        iphone: 17,
        macintosh: 18,
        macIntel: 19,
        mac: 20,
        x11: 21,
        linux: 22
      };
      t.utility = o, t.WinMap = i, t.sysMap = s, t.json2url = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = [];
        return Object.keys(e).forEach(function (r) {
          t.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
        }), t.join("&");
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getQueryFrom = void 0;
      var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          o = a(r(4)),
          i = r(2),
          s = a(r(1));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var p = t.getQueryFrom = function () {
        var e = i.utility.getQueryString("utm_source"),
            t = i.utility.getQueryString("utm_medium"),
            r = i.utility.getQueryString("utm_campaign");
        return e || t || r ? e + "_" + t + "_" + r : "";
      },
          c = s.default ? "production" : "default",
          u = "default" == c;

      window.sensors = o.default, o.default.init({
        name: "sensors",
        web_url: "https://livemesensor.liveme.com/?project=" + c,
        server_url: "https://livemesensor.liveme.com/sa?project=" + c,
        heatmap: {},
        show_log: u
      }), window.sensors.quick("autoTrack");
      var l = {
        xaid: "",
        lmweb_islogin: "",
        lmweb_platform: 0,
        lmweb_language: "",
        lmweb_tmzone: "",
        lmweb_channel: "",
        lmweb_display: "",
        lmweb_mnc: 0,
        lmweb_brv: "",
        lmweb_ver: "",
        lmweb_visib: 1,
        lmweb_userinfo: "",
        lmweb_url: location.href,
        lmweb_pageverid: ""
      },
          f = (navigator.platform, navigator.userAgent);
      window.location.href, window.location.search;
      var d = {
        version: "0.0.3",
        _tableName: [],
        _businessPram: [],
        businessPram: [],
        _tableName2: "",
        _businessPram2: "",
        businessPram2: "",
        register: function (e, t) {
          if (window.sensors) {
            !function () {
              var e,
                  t,
                  r,
                  o = f.toLowerCase(),
                  s = void 0,
                  a = void 0,
                  c = void 0,
                  u = void 0,
                  d = void 0,
                  h = void 0,
                  g = void 0,
                  m = void 0,
                  y = void 0,
                  _ = void 0,
                  v = void 0;

              for (c in i.sysMap) if (i.sysMap.hasOwnProperty(c) && o.indexOf(c) > -1) {
                if ("object" === n(i.sysMap[c])) {
                  for (u in i.sysMap[c]) if (i.sysMap[c].hasOwnProperty(u) && o.indexOf(u) > -1) {
                    d = i.sysMap[c][u];
                    break;
                  }
                } else d = i.sysMap[c];

                break;
              }

              if (18 === d || 19 === d || 20 === d ? h = "Mac" : 16 === d || 17 === d ? h = (s = /iPad|iPhone/.exec(f)) && s[0] || h : 15 === d && (h = "Mobile"), (s = /(chrome)[ \/]([\w.]+)/i.exec(o) || /(AppleWebKit)[ \/]([\w.]+)/i.exec(o) || /ms(ie)\s([\w.]+)/i.exec(o) || /(safari)[ \/]([\w.]+)/i.exec(o) || /(firefox)[ \/]([\w.]+)/i.exec(o) || []) && s[1] && (s[1], a = s[2]), window.innerWidth, window.innerHeight, t = window.screen.width + "*" + window.screen.height, g = (m = (m = navigator.connection && (navigator.connection.effectiveType || navigator.connection.type) ? navigator.connection.effectiveType || navigator.connection.type : "0").toLowerCase()).indexOf("wifi") > -1 ? 1 : m.indexOf("2g") > -1 ? 2 : m.indexOf("3g") > -1 ? 3 : m.indexOf("4g") > -1 ? 4 : 0, _ = window.KEWLApp && KEWLApp.isKEWLApp && i.utility.isAndroid() ? 1 : window.KEWLApp && KEWLApp.isKEWLApp && i.utility.isIos() ? 2 : window.KEWLApp && !KEWLApp.isKEWLApp && i.utility.isAndroid() ? 4 : window.KEWLApp && !KEWLApp.isKEWLApp && i.utility.isIos() ? 5 : 3, e = window.navigator.userLanguage || window.navigator.language, r = i.utility.getQueryString("f") ? i.utility.getQueryString("f") : i.utility.getQueryString("from") ? i.utility.getQueryString("from") : i.utility.getQueryString("channel") ? i.utility.getQueryString("channel") : i.utility.getQueryString("source") ? i.utility.getQueryString("source") : p() ? p() : "0", i.utility.isMobile(), (y = i.utility.getCookie("uuid")) || (y = i.utility.createUUID(), i.utility.setCookie("uuid", y, {
                expires: 365
              })), v = "hidden" === document.visibilityState || document.hidden ? 0 : 1, l.lmweb_brv = a, l.lmweb_display = t, l.lmweb_mnc = g, l.lmweb_language = e, l.lmweb_channel = r, l.lmweb_platform = _, l.lmweb_tmzone = Math.abs(new Date().getTimezoneOffset() / 60), l.lmweb_visib = v, window.KEWLApp && KEWLApp.isKEWLApp) l.lmweb_ver = KEWLApp.getVerName(), KEWLApp.getUserInfo(function (e) {
                var t = "string" == typeof e && "null" !== e && "" !== e ? JSON.parse(e) : e;
                t instanceof Object && t.userId && t.token && t.deviceId && (window.sensors.login(t.userId), l.xaid = t.deviceId, l.lmweb_islogin = 97, l.lmweb_userinfo = Base64.encode(JSON.stringify(t)));
              });else {
                var w = window.localStorage && window.localStorage.getItem("userInfo") ? JSON.parse(Base64.fromBase64(window.localStorage.getItem("userInfo"))) : "";
                w instanceof Object && w.user && w.user.uid ? (window.sensors.login(w.user.uid), l.xaid = y, i.utility.isMobile() ? l.lmweb_islogin = 96 : i.utility.isMobile() || (l.lmweb_islogin = 98), l.lmweb_userinfo = Base64.encode(JSON.stringify(w))) : l.xaid = y;
              }
              var I = document.getElementById("sensors:pageverid") && document.getElementById("sensors:pageverid").getAttribute("content") || "",
                  b = document.getElementsByName("sensors:pageverid") && document.getElementsByName("sensors:pageverid").length && document.getElementsByName("sensors:pageverid")[0].getAttribute("content") || "",
                  S = I || b;
              l.lmweb_pageverid = S;
            }(), window.sensors.registerPage(l), this._tableName.push(e), this.businessPram.push({
              tableName: e,
              params: t
            });
            var r = {};
            this.businessPram = this.businessPram.reduce(function (e, t) {
              return !r[t.tableName] && (r[t.tableName] = e.push(t)), e;
            }, []), this._businessPram.push({
              tableName: e,
              params: i.utility.copy(t)
            }), this._tableName2 = e, this.businessPram2 = t, this._businessPram2 = i.utility.copy(t);
          }
        },
        track: function (e, t) {
          if (1 != arguments.length || "object" !== (void 0 === e ? "undefined" : n(e))) {
            if (window.sensors && this._tableName.indexOf(e) > -1 && "object" === (void 0 === t ? "undefined" : n(t))) for (var r = 0; r < this.businessPram.length; r++) if (this.businessPram[r].tableName == e) {
              for (var o in this.businessPram[r].params) t.hasOwnProperty(o) && this.businessPram[r].params.hasOwnProperty(o) ? this.businessPram[r].params[o] = t[o] : this.businessPram[r].params[o] = this._businessPram[r].params[o];

              window.sensors.track(this.businessPram[r].tableName, this.businessPram[r].params);
            }
          } else {
            for (var i in this.businessPram2) e.hasOwnProperty(i) && this.businessPram2.hasOwnProperty(i) ? this.businessPram2[i] = e[i] : this.businessPram2[i] = this._businessPram2[i];

            window.sensors.track(this._tableName2, this.businessPram2);
          }
        }
      };
      window.KEWLSensor = d, t.default = d;
    }, function (module, exports, __webpack_require__) {
      var e;
      e = function () {
        function app_js_bridge() {
          var e = null,
              t = null;
          window.sensorsdata_app_js_bridge_call_js = function (r) {
            !function (r) {
              e = r, _.isJSONString(e) && (e = JSON.parse(e)), t && (t(e), t = null, e = null);
            }(r);
          }, sd.getAppStatus = function (r) {
            return function () {
              if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                var e = document.createElement("iframe");
                e.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement.appendChild(e), e.parentNode.removeChild(e), e = null;
              }
            }(), "object" == typeof window.SensorsData_APP_JS_Bridge && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && (e = SensorsData_APP_JS_Bridge.sensorsdata_call_app(), _.isJSONString(e) && (e = JSON.parse(e))), r ? void (null === e ? t = r : (r(e), e = null)) : e;
          };
        }

        try {
          var sd = window.sensorsDataAnalytic201505,
              has_declare;
          if (sd ? (sd = window[sd], has_declare = !0) : (sd = {}, has_declare = !1), "function" != typeof sd && "object" != typeof sd || sd.has_load_sdk) return !1;
          sd._t = sd._t || 1 * new Date(), sd.has_load_sdk = !0, "object" != typeof JSON && (JSON = {}), function () {
            "use strict";

            function f(e) {
              return e < 10 ? "0" + e : e;
            }

            function this_value() {
              return this.valueOf();
            }

            function quote(e) {
              return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
              }) + '"' : '"' + e + '"';
            }

            function str(e, t) {
              var r,
                  n,
                  o,
                  i,
                  s,
                  a = gap,
                  p = t[e];

              switch (p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(e)), "function" == typeof rep && (p = rep.call(t, e, p)), typeof p) {
                case "string":
                  return quote(p);

                case "number":
                  return isFinite(p) ? String(p) : "null";

                case "boolean":
                case "null":
                  return String(p);

                case "object":
                  if (!p) return "null";

                  if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(p)) {
                    for (i = p.length, r = 0; r < i; r += 1) s[r] = str(r, p) || "null";

                    return o = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, o;
                  }

                  if (rep && "object" == typeof rep) for (i = rep.length, r = 0; r < i; r += 1) "string" == typeof rep[r] && (o = str(n = rep[r], p)) && s.push(quote(n) + (gap ? ": " : ":") + o);else for (n in p) Object.prototype.hasOwnProperty.call(p, n) && (o = str(n, p)) && s.push(quote(n) + (gap ? ": " : ":") + o);
                  return o = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, o;
              }
            }

            var rx_one = /^[\],:{}\s]*$/,
                rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                rx_four = /(?:^|:|,)(?:\s*\[)+/g,
                rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap,
                indent,
                meta,
                rep;
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
              return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
            }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
              "\b": "\\b",
              "\t": "\\t",
              "\n": "\\n",
              "\f": "\\f",
              "\r": "\\r",
              '"': '\\"',
              "\\": "\\\\"
            }, JSON.stringify = function (e, t, r) {
              var n;
              if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1) indent += " ";else "string" == typeof r && (indent = r);
              if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
              return str("", {
                "": e
              });
            }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
              function walk(e, t) {
                var r,
                    n,
                    o = e[t];
                if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]);
                return reviver.call(e, t, o);
              }

              var j;
              if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
              })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
              }, "") : j;
              throw new SyntaxError("JSON.parse");
            });
          }();

          var _ = sd._ = {};

          sd.para_default = {
            name: "sa",
            max_referrer_string_length: 200,
            max_string_length: 500,
            cross_subdomain: !0,
            show_log: !0,
            is_debug: !1,
            debug_mode: !1,
            debug_mode_upload: !1,
            session_time: 0,
            use_client_time: !1,
            source_channel: [],
            send_type: "image",
            vtrack_ignore: {},
            auto_init: !0,
            is_track_single_page: !1,
            is_single_page: !1,
            is_track_latest: {
              utm: !0,
              referrer: !0,
              referrer_host: !0,
              traffic_source_type: !0,
              search_keyword: !0,
              landing_page: !1
            },
            source_type: {},
            callback_timeout: 200,
            datasend_timeout: 3e3,
            queue_timeout: 300,
            is_track_device_id: !1,
            use_app_track: !1,
            ignore_oom: !0
          }, sd.initPara = function (e) {
            var t;

            for (t in sd.para = e || sd.para || {}, sd.para_default) void 0 === sd.para[t] && (sd.para[t] = sd.para_default[t]);

            "string" == typeof sd.para.server_url && "://" === sd.para.server_url.slice(0, 3) && (sd.para.server_url = location.protocol + sd.para.server_url), "string" == typeof sd.para.web_url && "://" === sd.para.web_url.slice(0, 3) && (sd.para.web_url = location.protocol + sd.para.web_url), "image" !== sd.para.send_type && "ajax" !== sd.para.send_type && "beacon" !== sd.para.send_type && (sd.para.send_type = "image");
            var r = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
                n = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"],
                o = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"],
                i = {
              baidu: ["wd", "word", "kw", "keyword"],
              google: "q",
              bing: "q",
              yahoo: "p",
              sogou: ["query", "keyword"],
              so: "q",
              sm: "q"
            };
            if ("object" == typeof sd.para.source_type && (sd.para.source_type.utm = _.isArray(sd.para.source_type.utm) ? sd.para.source_type.utm.concat(r) : r, sd.para.source_type.search = _.isArray(sd.para.source_type.search) ? sd.para.source_type.search.concat(n) : n, sd.para.source_type.social = _.isArray(sd.para.source_type.social) ? sd.para.source_type.social.concat(o) : o, sd.para.source_type.keyword = _.isObject(sd.para.source_type.keyword) ? _.extend(i, sd.para.source_type.keyword) : i), _.isObject(sd.para.heatmap) && (sd.para.heatmap.clickmap = sd.para.heatmap.clickmap || "default", sd.para.heatmap.scroll_notice_map = sd.para.heatmap.scroll_notice_map || "default", sd.para.heatmap.scroll_delay_time = sd.para.heatmap.scroll_delay_time || 4e3, sd.para.heatmap.renderRefreshTime = sd.para.heatmap.renderRefreshTime || 1e3, sd.para.heatmap.loadTimeout = sd.para.heatmap.loadTimeout || 1e3), "object" == typeof sd.para.server_url && sd.para.server_url.length) for (t = 0; t < sd.para.server_url.length; t++) /sa\.gif[^\/]*$/.test(sd.para.server_url[t]) || (sd.para.server_url[t] = sd.para.server_url[t].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));else /sa\.gif[^\/]*$/.test(sd.para.server_url) || (sd.para.server_url = sd.para.server_url.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
            "string" == typeof sd.para.server_url && (sd.para.debug_mode_url = sd.para.debug_mode_url || sd.para.server_url.replace("sa.gif", "debug")), !0 === sd.para.noCache ? sd.para.noCache = "?" + new Date().getTime() : sd.para.noCache = "", sd.para.callback_timeout > sd.para.datasend_timeout && (sd.para.datasend_timeout = sd.para.callback_timeout), sd.para.callback_timeout > sd.para.queue_timeout && (sd.para.queue_timeout = sd.para.callback_timeout), sd.para.queue_timeout > sd.para.datasend_timeout && (sd.para.datasend_timeout = sd.para.queue_timeout), _.isObject(sd.para.is_track_latest) ? sd.para.is_track_latest = _.extend(sd.para_default.is_track_latest, sd.para.is_track_latest) : sd.para.is_track_latest = sd.para_default.is_track_latest;
          };
          var ArrayProto = Array.prototype,
              FuncProto = Function.prototype,
              ObjProto = Object.prototype,
              slice = ArrayProto.slice,
              toString = ObjProto.toString,
              hasOwnProperty = ObjProto.hasOwnProperty,
              LIB_VERSION = "1.13.14";
          sd.lib_version = LIB_VERSION;
          var error_msg = [],
              is_first_visitor = !1,
              just_test_distinctid = 0,
              just_test_distinctid_2 = 0,
              just_test_distinctid_detail = 0,
              just_test_distinctid_detail2 = 0,
              source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term",
              logger = "object" == typeof logger ? logger : {};
          logger.info = function () {
            if ((_.sessionStorage.isSupport() && "true" === sessionStorage.getItem("sensorsdata_jssdk_debug") || sd.para.show_log) && (!0 !== sd.para.show_log && "string" !== sd.para.show_log && !1 !== sd.para.show_log || (arguments[0] = _.formatJsonString(arguments[0])), "object" == typeof console && console.log)) try {
              return;
            } catch (e) {}
          }, FuncProto.bind, e = ArrayProto.forEach, ArrayProto.indexOf, t = Array.isArray, r = {}, n = _.each = function (t, n, o) {
            if (null == t) return !1;
            if (e && t.forEach === e) t.forEach(n, o);else if (t.length === +t.length) {
              for (var i = 0, s = t.length; i < s; i++) if (i in t && n.call(o, t[i], i, t) === r) return !1;
            } else for (var a in t) if (hasOwnProperty.call(t, a) && n.call(o, t[a], a, t) === r) return !1;
          }, _.logger = logger, _.extend = function (e) {
            return n(slice.call(arguments, 1), function (t) {
              for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
            }), e;
          }, _.extend2Lev = function (e) {
            return n(slice.call(arguments, 1), function (t) {
              for (var r in t) void 0 !== t[r] && (_.isObject(t[r]) && _.isObject(e[r]) ? _.extend(e[r], t[r]) : e[r] = t[r]);
            }), e;
          }, _.coverExtend = function (e) {
            return n(slice.call(arguments, 1), function (t) {
              for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r]);
            }), e;
          }, _.isArray = t || function (e) {
            return "[object Array]" === toString.call(e);
          }, _.isFunction = function (e) {
            if (!e) return !1;

            try {
              return /^\s*\bfunction\b/.test(e);
            } catch (e) {
              return !1;
            }
          }, _.isArguments = function (e) {
            return !(!e || !hasOwnProperty.call(e, "callee"));
          }, _.toArray = function (e) {
            return e ? e.toArray ? e.toArray() : _.isArray(e) ? slice.call(e) : _.isArguments(e) ? slice.call(e) : _.values(e) : [];
          }, _.values = function (e) {
            var t = [];
            return null == e ? t : (n(e, function (e) {
              t[t.length] = e;
            }), t);
          }, _.indexOf = function (e, t) {
            var r = e.indexOf;
            if (r) return r.call(e, t);

            for (var n = 0; n < e.length; n++) if (t === e[n]) return n;

            return -1;
          }, _.filter = function (e, t, r) {
            var n = Object.prototype.hasOwnProperty;
            if (e.filter) return e.filter(t);

            for (var o = [], i = 0; i < e.length; i++) if (n.call(e, i)) {
              var s = e[i];
              t.call(r, s, i, e) && o.push(s);
            }

            return o;
          }, _.inherit = function (e, t) {
            return e.prototype = new t(), e.prototype.constructor = e, e.superclass = t.prototype, e;
          }, _.trim = function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          }, _.isObject = function (e) {
            return null != e && "[object Object]" == toString.call(e);
          }, _.isEmptyObject = function (e) {
            if (_.isObject(e)) {
              for (var t in e) if (hasOwnProperty.call(e, t)) return !1;

              return !0;
            }

            return !1;
          }, _.isUndefined = function (e) {
            return void 0 === e;
          }, _.isString = function (e) {
            return "[object String]" == toString.call(e);
          }, _.isDate = function (e) {
            return "[object Date]" == toString.call(e);
          }, _.isBoolean = function (e) {
            return "[object Boolean]" == toString.call(e);
          }, _.isNumber = function (e) {
            return "[object Number]" == toString.call(e) && /[\d\.]+/.test(String(e));
          }, _.isElement = function (e) {
            return !(!e || 1 !== e.nodeType);
          }, _.isJSONString = function (e) {
            try {
              JSON.parse(e);
            } catch (e) {
              return !1;
            }

            return !0;
          }, _.decodeURIComponent = function (e) {
            var t = e;

            try {
              t = decodeURIComponent(e);
            } catch (r) {
              t = e;
            }

            return t;
          }, _.encodeDates = function (e) {
            return _.each(e, function (t, r) {
              _.isDate(t) ? e[r] = _.formatDate(t) : _.isObject(t) && (e[r] = _.encodeDates(t));
            }), e;
          }, _.hashCode = function (e) {
            if ("string" != typeof e) return 0;
            var t = 0;
            if (0 == e.length) return t;

            for (var r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t &= t;

            return t;
          }, _.formatDate = function (e) {
            function t(e) {
              return e < 10 ? "0" + e : e;
            }

            return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds());
          }, _.searchObjDate = function (e) {
            _.isObject(e) && _.each(e, function (t, r) {
              _.isObject(t) ? _.searchObjDate(e[r]) : _.isDate(t) && (e[r] = _.formatDate(t));
            });
          }, _.searchZZAppStyle = function (e) {
            void 0 !== e.properties.$project && (e.project = e.properties.$project, delete e.properties.$project), void 0 !== e.properties.$token && (e.token = e.properties.$token, delete e.properties.$token);
          }, _.formatJsonString = function (e) {
            try {
              return JSON.stringify(e, null, "  ");
            } catch (t) {
              return JSON.stringify(e);
            }
          }, _.formatString = function (e) {
            return e.length > sd.para.max_string_length ? (logger.info("瀛楃涓查暱搴﹁秴杩囬檺鍒讹紝宸茬粡鍋氭埅鍙�--" + e), e.slice(0, sd.para.max_string_length)) : e;
          }, _.searchObjString = function (e) {
            _.isObject(e) && _.each(e, function (t, r) {
              _.isObject(t) ? _.searchObjString(e[r]) : _.isString(t) && (e[r] = _.formatString(t));
            });
          }, _.searchConfigData = function (e) {
            if ("object" == typeof e && e.$option) {
              var t = e.$option;
              return delete e.$option, t;
            }

            return {};
          }, _.unique = function (e) {
            for (var t, r = [], n = {}, o = 0; o < e.length; o++) (t = e[o]) in n || (n[t] = !0, r.push(t));

            return r;
          }, _.strip_sa_properties = function (e) {
            return _.isObject(e) ? (_.each(e, function (t, r) {
              if (_.isArray(t)) {
                var n = [];
                _.each(t, function (e) {
                  _.isString(e) ? n.push(e) : logger.info("鎮ㄧ殑鏁版嵁-", r, t, "鐨勬暟缁勯噷鐨勫€煎繀椤绘槸瀛楃涓�,宸茬粡灏嗗叾鍒犻櫎");
                }), 0 !== n.length ? e[r] = n : (delete e[r], logger.info("宸茬粡鍒犻櫎绌虹殑鏁扮粍"));
              }

              _.isString(t) || _.isNumber(t) || _.isDate(t) || _.isBoolean(t) || _.isArray(t) || "$option" === r || (logger.info("鎮ㄧ殑鏁版嵁-", r, t, "-鏍煎紡涓嶆弧瓒宠姹傦紝鎴戜滑宸茬粡灏嗗叾鍒犻櫎"), delete e[r]);
            }), e) : e;
          }, _.strip_empty_properties = function (e) {
            var t = {};
            return _.each(e, function (e, r) {
              null != e && (t[r] = e);
            }), t;
          }, _.utf8Encode = function (e) {
            var t,
                r,
                n,
                o,
                i = "";

            for (t = r = 0, o = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, n = 0; n < o; n++) {
              var s = e.charCodeAt(n),
                  a = null;
              s < 128 ? r++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== a && (r > t && (i += e.substring(t, r)), i += a, t = r = n + 1);
            }

            return r > t && (i += e.substring(t, e.length)), i;
          }, _.base64Encode = function (e) {
            var t,
                r,
                n,
                o,
                i,
                s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                a = 0,
                p = 0,
                c = "",
                u = [];
            if (!e) return e;
            e = _.utf8Encode(e);

            do {
              t = (i = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, r = i >> 12 & 63, n = i >> 6 & 63, o = 63 & i, u[p++] = s.charAt(t) + s.charAt(r) + s.charAt(n) + s.charAt(o);
            } while (a < e.length);

            switch (c = u.join(""), e.length % 3) {
              case 1:
                c = c.slice(0, -2) + "==";
                break;

              case 2:
                c = c.slice(0, -1) + "=";
            }

            return c;
          }, _.UUID = function () {
            var e = function () {
              for (var e = 1 * new Date(), t = 0; e == 1 * new Date();) t++;

              return e.toString(16) + t.toString(16);
            };

            return function () {
              var t = String(screen.height * screen.width);
              t = t && /\d{5,}/.test(t) ? t.toString(16) : String(31242 * Math.random()).replace(".", "").slice(0, 8);

              var r = e() + "-" + Math.random().toString(16).replace(".", "") + "-" + function (e) {
                function t(e, t) {
                  var r,
                      n = 0;

                  for (r = 0; r < t.length; r++) n |= i[r] << 8 * r;

                  return e ^ n;
                }

                var r,
                    n,
                    o = navigator.userAgent,
                    i = [],
                    s = 0;

                for (r = 0; r < o.length; r++) n = o.charCodeAt(r), i.unshift(255 & n), i.length >= 4 && (s = t(s, i), i = []);

                return i.length > 0 && (s = t(s, i)), s.toString(16);
              }() + "-" + t + "-" + e();

              return r ? (just_test_distinctid_2 = 1, r) : (just_test_distinctid_2 = 2, (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15));
            };
          }(), _.getQueryParam = function (e, t) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), e = _.decodeURIComponent(e);
            var r = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
            return null === r || r && "string" != typeof r[1] && r[1].length ? "" : _.decodeURIComponent(r[1]).replace(/\+/g, " ");
          }, _.urlParse = function (e) {
            var t = function (e) {
              this._fields = {
                Username: 4,
                Password: 5,
                Port: 7,
                Protocol: 2,
                Host: 6,
                Path: 8,
                URL: 0,
                QueryString: 9,
                Fragment: 10
              }, this._values = {}, this._regex = null, this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/, void 0 !== e && this._parse(e);
            };

            return t.prototype.setUrl = function (e) {
              this._parse(e);
            }, t.prototype._initValues = function () {
              for (var e in this._fields) this._values[e] = "";
            }, t.prototype.addQueryString = function (e) {
              if ("object" != typeof e) return !1;
              var t = this._values.QueryString || "";

              for (var r in e) t = new RegExp(r + "[^&]+").test(t) ? t.replace(new RegExp(r + "[^&]+"), r + "=" + e[r]) : "&" === t.slice(-1) ? t + r + "=" + e[r] : "" === t ? r + "=" + e[r] : t + "&" + r + "=" + e[r];

              this._values.QueryString = t;
            }, t.prototype.getUrl = function () {
              var e = "";
              return e += this._values.Origin, e += this._values.Port ? ":" + this._values.Port : "", e += this._values.Path, (e += this._values.QueryString ? "?" + this._values.QueryString : "") + (this._values.Fragment ? "#" + this._values.Fragment : "");
            }, t.prototype.getUrl = function () {
              var e = "";
              return e += this._values.Origin, e += this._values.Port ? ":" + this._values.Port : "", (e += this._values.Path) + (this._values.QueryString ? "?" + this._values.QueryString : "");
            }, t.prototype._parse = function (e) {
              this._initValues();

              var t = this._regex.exec(e);

              if (!t) throw "DPURLParser::_parse -> Invalid URL";

              for (var r in this._fields) void 0 !== t[this._fields[r]] && (this._values[r] = t[this._fields[r]]);

              this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = this._values.Protocol + "://" + this._values.Hostname;
            }, new t(e);
          }, _.addEvent = function () {
            function e(t) {
              return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation, t._getPath = e._getPath), t;
            }

            e._getPath = function () {
              var e = this;
              return this.path || this.composedPath && this.composedPath() || function () {
                try {
                  var t = e.target,
                      r = [t];
                  if (null === t || null === t.parentElement) return [];

                  for (; null !== t.parentElement;) t = t.parentElement, r.unshift(t);

                  return r;
                } catch (e) {
                  return [];
                }
              }();
            }, e.preventDefault = function () {
              this.returnValue = !1;
            }, e.stopPropagation = function () {
              this.cancelBubble = !0;
            };
            (function (t, r, n) {
              var o = !(!_.isObject(sd.para.heatmap) || !sd.para.heatmap.useCapture);
              if (t && t.addEventListener) t.addEventListener(r, function (t) {
                t._getPath = e._getPath, n.call(this, t);
              }, o);else {
                var i = "on" + r,
                    s = t[i];

                t[i] = function (t, r, n) {
                  return function (o) {
                    if (o = o || e(window.event)) {
                      o.target = o.srcElement;
                      var i,
                          s,
                          a = !0;
                      return "function" == typeof n && (i = n(o)), s = r.call(t, o), !1 !== i && !1 !== s || (a = !1), a;
                    }
                  };
                }(t, n, s);
              }
            }).apply(null, arguments);
          }, _.addHashEvent = function (e) {
            var t = "pushState" in window.history ? "popstate" : "hashchange";

            _.addEvent(window, t, e);
          }, _.addSinglePageEvent = function (e) {
            var t = location.href,
                r = window.history.pushState,
                n = window.history.replaceState;
            window.history.pushState = function () {
              r.apply(window.history, arguments), e(t), t = location.href;
            }, window.history.replaceState = function () {
              n.apply(window.history, arguments), e(t), t = location.href;
            };
            var o = "pushState" in window.history ? "popstate" : "hashchange";

            _.addEvent(window, o, function () {
              e(t), t = location.href;
            });
          }, _.cookie = {
            get: function (e) {
              for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                for (var o = r[n]; " " == o.charAt(0);) o = o.substring(1, o.length);

                if (0 == o.indexOf(t)) return _.decodeURIComponent(o.substring(t.length, o.length));
              }

              return null;
            },
            set: function (e, t, r, n, o) {
              var i = "",
                  s = "",
                  a = "";

              if (r = null == r ? 73e3 : r, n = void 0 === n ? sd.para.cross_subdomain : n) {
                var p = _.getCurrentDomain(location.href);

                "url瑙ｆ瀽澶辫触" === p && (p = ""), i = p ? "; domain=" + p : "";
              }

              if (0 !== r) {
                var c = new Date();
                "s" === String(r).slice(-1) ? c.setTime(c.getTime() + 1e3 * Number(String(r).slice(0, -1))) : c.setTime(c.getTime() + 24 * r * 60 * 60 * 1e3), s = "; expires=" + c.toGMTString();
              }

              o && (a = "; secure"), document.cookie = e + "=" + encodeURIComponent(t) + s + "; path=/" + i + a;
            },
            remove: function (e, t) {
              t = void 0 === t ? sd.para.cross_subdomain : t, _.cookie.set(e, "", -1, t);
            },
            getCookieName: function (e) {
              var t = "";
              return !1 === sd.para.cross_subdomain ? t = "string" == typeof (t = _.url("sub", location.href)) && "" !== t ? "sajssdk_2015_" + e + "_" + t : "sajssdk_2015_root_" + e : t = "sajssdk_2015_cross_" + e, t;
            },
            getNewUser: function () {
              return null !== this.get("sensorsdata_is_new_user") || null !== this.get(this.getCookieName("new_user"));
            }
          }, _.getEleInfo = function (e) {
            if (!e.target) return !1;
            var t = e.target,
                r = t.tagName.toLowerCase(),
                n = {};
            n.$element_type = r, n.$element_name = t.getAttribute("name"), n.$element_id = t.getAttribute("id"), n.$element_class_name = "string" == typeof t.className ? t.className : null, n.$element_target_url = t.getAttribute("href");
            var o = "";
            return t.textContent ? o = _.trim(t.textContent) : t.innerText && (o = _.trim(t.innerText)), o && (o = o.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), n.$element_content = o || "", "input" === r && ("button" === t.type || "submit" === t.type ? n.$element_content = t.value || "" : sd.para.heatmap && "function" == typeof sd.para.heatmap.collect_input && sd.para.heatmap.collect_input(t) && (n.$element_content = t.value || "")), (n = _.strip_empty_properties(n)).$url = location.href, n.$url_path = location.pathname, n.$title = document.title, n.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0, n;
          }, _.localStorage = {
            get: function (e) {
              return window.localStorage.getItem(e);
            },
            parse: function (e) {
              var t;

              try {
                t = JSON.parse(_.localStorage.get(e)) || null;
              } catch (e) {}

              return t;
            },
            set: function (e, t) {
              window.localStorage.setItem(e, t);
            },
            remove: function (e) {
              window.localStorage.removeItem(e);
            },
            isSupport: function () {
              var e = !0;

              try {
                var t = "__sensorsdatasupport__",
                    r = "testIsSupportStorage";
                _.localStorage.set(t, r), _.localStorage.get(t) !== r && (e = !1), _.localStorage.remove(t);
              } catch (t) {
                e = !1;
              }

              return e;
            }
          }, _.sessionStorage = {
            isSupport: function () {
              var e = !0,
                  t = "__sensorsdatasupport__",
                  r = "testIsSupportStorage";

              try {
                sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem(t, r), sessionStorage.removeItem(t, r), e = !0) : e = !1;
              } catch (t) {
                e = !1;
              }

              return e;
            }
          }, _.isSupportCors = function () {
            return void 0 !== window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest() || "undefined" != typeof XDomainRequest);
          }, _.xhr = function (e) {
            if (e) return void 0 !== window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest() ? new XMLHttpRequest() : "undefined" != typeof XDomainRequest ? new XDomainRequest() : null;
            if (void 0 !== window.XMLHttpRequest) return new XMLHttpRequest();
            if (window.ActiveXObject) try {
              return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
              try {
                return new ActiveXObject("Microsoft.XMLHTTP");
              } catch (e) {}
            }
          }, _.ajax = function (e) {
            function t(e) {
              if (!e) return "";

              try {
                return JSON.parse(e);
              } catch (e) {
                return {};
              }
            }

            e.timeout = e.timeout || 2e4, e.credentials = void 0 === e.credentials || e.credentials;

            var r = _.xhr(e.cors);

            if (!r) return !1;
            e.type || (e.type = e.data ? "POST" : "GET"), e = _.extend({
              success: function () {},
              error: function () {}
            }, e);

            try {
              "object" == typeof r && "timeout" in r ? r.timeout = e.timeout : setTimeout(function () {
                r.abort();
              }, e.timeout + 500);
            } catch (t) {
              try {
                setTimeout(function () {
                  r.abort();
                }, e.timeout + 500);
              } catch (e) {}
            }

            r.onreadystatechange = function () {
              try {
                4 == r.readyState && (r.status >= 200 && r.status < 300 || 304 == r.status ? e.success(t(r.responseText)) : e.error(t(r.responseText), r.status), r.onreadystatechange = null, r.onload = null);
              } catch (e) {
                r.onreadystatechange = null, r.onload = null;
              }
            }, r.open(e.type, e.url, !0);

            try {
              if (e.credentials && (r.withCredentials = !0), _.isObject(e.header)) for (var n in e.header) r.setRequestHeader(n, e.header[n]);
              e.data && (e.cors || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "application/json" === e.contentType ? r.setRequestHeader("Content-type", "application/json; charset=UTF-8") : r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"));
            } catch (e) {}

            r.send(e.data || null);
          }, _.loadScript = function (e) {
            e = _.extend({
              success: function () {},
              error: function () {},
              appendCall: function (e) {
                document.getElementsByTagName("head")[0].appendChild(e);
              }
            }, e);
            var t = null;
            "css" === e.type && ((t = document.createElement("link")).rel = "stylesheet", t.href = e.url), "js" === e.type && ((t = document.createElement("script")).async = "async", t.setAttribute("charset", "UTF-8"), t.src = e.url, t.type = "text/javascript"), t.onload = t.onreadystatechange = function () {
              this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e.success(), t.onload = t.onreadystatechange = null);
            }, t.onerror = function () {
              e.error(), t.onerror = null;
            }, e.appendCall(t);
          }, _.url = function () {
            function e(e) {
              return _.decodeURIComponent(e.replace(/\+/g, " "));
            }

            function t(e, t) {
              var r = e.charAt(0),
                  n = t.split(r);
              return r === e ? n : n[(e = parseInt(e.substring(1), 10)) < 0 ? n.length + e : e - 1];
            }

            function r(t, r) {
              for (var n = t.charAt(0), o = r.split("&"), i = [], s = {}, a = [], p = t.substring(1), c = 0, u = o.length; c < u; c++) if ((i = o[c].match(/(.*?)=(.*)/)) || (i = [o[c], o[c], ""]), "" !== i[1].replace(/\s/g, "")) {
                if (i[2] = e(i[2] || ""), p === i[1]) return i[2];
                (a = i[1].match(/(.*)\[([0-9]+)\]/)) ? (s[a[1]] = s[a[1]] || [], s[a[1]][a[2]] = i[2]) : s[i[1]] = i[2];
              }

              return n === t ? s : s[p];
            }

            return function (e, n) {
              var o,
                  i = {};
              if (n = n || window.location.toString(), !e) return n;
              if (e = e.toString(), o = n.match(/^mailto:([^\/].+)/)) i.protocol = "mailto", i.email = o[1];else {
                if ((o = n.match(/(.*?)\/#\!(.*)/)) && (n = o[1] + o[2]), (o = n.match(/(.*?)#(.*)/)) && (i.hash = o[2], n = o[1]), i.hash && e.match(/^#/)) return r(e, i.hash);
                if ((o = n.match(/(.*?)\?(.*)/)) && (i.query = o[2], n = o[1]), i.query && e.match(/^\?/)) return r(e, i.query);
                if ((o = n.match(/(.*?)\:?\/\/(.*)/)) && (i.protocol = o[1].toLowerCase(), n = o[2]), (o = n.match(/(.*?)(\/.*)/)) && (i.path = o[2], n = o[1]), i.path = (i.path || "").replace(/^([^\/])/, "/$1").replace(/\/$/, ""), e.match(/^[\-0-9]+$/) && (e = e.replace(/^([^\/])/, "/$1")), e.match(/^\//)) return t(e, i.path.substring(1));
                if ((o = t("/-1", i.path.substring(1))) && (o = o.match(/(.*?)\.(.*)/)) && (i.file = o[0], i.filename = o[1], i.fileext = o[2]), (o = n.match(/(.*)\:([0-9]+)$/)) && (i.port = o[2], n = o[1]), (o = n.match(/(.*?)@(.*)/)) && (i.auth = o[1], n = o[2]), i.auth && (o = i.auth.match(/(.*)\:(.*)/), i.user = o ? o[1] : i.auth, i.pass = o ? o[2] : void 0), i.hostname = n.toLowerCase(), "." === e.charAt(0)) return t(e, i.hostname);
                i.sub = i.hostname.split(".")[0];
                var s = i.hostname.split(".");
                if (_.isArray(s) && s.length >= 2 && !/^(\d+\.)+\d+$/.test(i.hostname)) for (var a = "." + s.splice(s.length - 1, 1); s.length > 0;) if (a = "." + s.splice(s.length - 1, 1) + a, document.cookie = "sensorsdata_domain_test=true; path=/; domain=" + a, -1 !== document.cookie.indexOf("sensorsdata_domain_test=true")) {
                  i.domain = a;
                  var p = new Date();
                  p.setTime(p.getTime() - 1e3), document.cookie = "sensorsdata_domain_test=true; expires=" + p.toGMTString() + "; path=/; domain=" + a, s = [];
                }
                i.port = i.port || ("https" === i.protocol ? "443" : "80"), i.protocol = i.protocol || ("443" === i.port ? "https" : "http");
              }
              return e in i ? i[e] : "{}" === e ? i : "";
            };
          }(), _.getCurrentDomain = function (e) {
            var t = sd.para.current_domain;

            switch (typeof t) {
              case "function":
                var r = t();
                return "" === r || "" === _.trim(r) ? "url瑙ｆ瀽澶辫触" : -1 !== r.indexOf(".") ? r : "url瑙ｆ瀽澶辫触";

              case "string":
                return "" === t || "" === _.trim(t) ? "url瑙ｆ瀽澶辫触" : -1 !== t.indexOf(".") ? t : "url瑙ｆ瀽澶辫触";

              default:
                return "" === e ? "url瑙ｆ瀽澶辫触" : "" === _.url("domain", e) ? "url瑙ｆ瀽澶辫触" : _.url("domain", e);
            }
          }, _.getReferrerDomain = function (e) {
            var t = sd.para.referrer_domain;

            switch (typeof t) {
              case "function":
                var r = t();
                return r ? -1 !== r.indexOf(".") ? r : "referrer瑙ｆ瀽澶辫触" : _.url("domain", e);

              case "string":
                return "" === t || "" === _.trim(t) ? "referrer瑙ｆ瀽澶辫触" : -1 !== t.indexOf(".") ? t : "referrer瑙ｆ瀽澶辫触";

              default:
                if ("" === e) return "";
                if ("" === _.url("domain", location.href)) return "referrer瑙ｆ瀽澶辫触";

                var n = _.url("domain", location.href);

                return _.url("hostname", e).slice(-1 * n.length);
            }
          }, _.ry = function (e) {
            return new _.ry.init(e);
          }, _.ry.init = function (e) {
            this.ele = e;
          }, _.ry.init.prototype = {
            addClass: function (e) {
              return -1 === (" " + this.ele.className + " ").indexOf(" " + e + " ") && (this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e), this;
            },
            removeClass: function (e) {
              var t = " " + this.ele.className + " ";
              return -1 !== t.indexOf(" " + e + " ") && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)), this;
            },
            hasClass: function (e) {
              return -1 !== (" " + this.ele.className + " ").indexOf(" " + e + " ");
            },
            attr: function (e, t) {
              return "string" == typeof e && _.isUndefined(t) ? this.ele.getAttribute(e) : ("string" == typeof e && (t = String(t), this.ele.setAttribute(e, t)), this);
            },
            offset: function () {
              var e = this.ele.getBoundingClientRect();

              if (e.width || e.height) {
                var t = this.ele.ownerDocument.documentElement;
                return {
                  top: e.top + window.pageYOffset - t.clientTop,
                  left: e.left + window.pageXOffset - t.clientLeft
                };
              }

              return {
                top: 0,
                left: 0
              };
            },
            getSize: function () {
              if (!window.getComputedStyle) return {
                width: this.ele.offsetWidth,
                height: this.ele.offsetHeight
              };

              try {
                var e = this.ele.getBoundingClientRect();
                return {
                  width: e.width,
                  height: e.height
                };
              } catch (e) {
                return {
                  width: 0,
                  height: 0
                };
              }
            },
            getStyle: function (e) {
              return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e);
            },
            wrap: function (e) {
              var t = document.createElement(e);
              return this.ele.parentNode.insertBefore(t, this.ele), t.appendChild(this.ele), _.ry(t);
            },
            getCssStyle: function (e) {
              var t = this.ele.style.getPropertyValue(e);
              if (t) return t;
              var r = null;
              if ("function" == typeof window.getMatchedCSSRules && (r = getMatchedCSSRules(this.ele)), !r || !_.isArray(r)) return null;

              for (var n = r.length - 1; n >= 0; n--) {
                if (t = r[n].style.getPropertyValue(e)) return t;
              }
            },
            sibling: function (e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType;);

              return e;
            },
            next: function () {
              return this.sibling(this.ele, "nextSibling");
            },
            prev: function (e) {
              return this.sibling(this.ele, "previousSibling");
            },
            siblings: function (e) {
              return this.siblings((this.ele.parentNode || {}).firstChild, this.ele);
            },
            children: function (e) {
              return this.siblings(this.ele.firstChild);
            },
            parent: function () {
              var e = this.ele.parentNode;
              return e = e && 11 !== e.nodeType ? e : null, _.ry(e);
            }
          }, _.jssdkDebug = function (e, t) {
            if (!0 === sd.para.is_debug) if (_.isString(e)) sd.registerPage({
              _jssdk_debug_info: e
            });else {
              var r = store.getCookieName(),
                  n = document.cookie.match(new RegExp(r + "[^;]+"));
              r = n && n[0] ? n[0] : "", e._jssdk_debug_info = "(" + r + ")" + navigator.userAgent;
            }
          }, _.strToUnicode = function (e) {
            if ("string" != typeof e) return logger.info("杞崲unicode閿欒", e), e;

            for (var t = "", r = 0; r < e.length; r++) t += "\\" + e.charCodeAt(r).toString(16);

            return t;
          }, _.getReferrer = function (e) {
            return "string" != typeof (e = e || document.referrer) ? "鍙栧€煎紓甯竉referrer寮傚父_" + String(e) : (0 === e.indexOf("https://www.baidu.com/") && (e = e.split("?")[0]), "string" == typeof (e = e.slice(0, sd.para.max_referrer_string_length)) ? e : "");
          }, _.getKeywordFromReferrer = function () {
            var e = sd.para.source_type.keyword;

            if (document && "string" == typeof document.referrer) {
              if (0 === document.referrer.indexOf("http")) {
                var t = _.getReferrerDomain(document.referrer),
                    r = _.url("?", document.referrer),
                    n = null;

                for (var o in e) if (t.split && t.split(".")[0] === o && "object" == typeof r) if (n = e[o], _.isArray(n)) {
                  for (o = 0; o < n.length; o++) if (r[n[o]]) return r[n[o]];
                } else if (r[n]) return r[n];

                return "鏈彇鍒板€�";
              }

              return "" === document.referrer ? "鏈彇鍒板€糭鐩存帴鎵撳紑" : "鏈彇鍒板€糭闈瀐ttp鐨剈rl";
            }

            return "鍙栧€煎紓甯竉referrer寮傚父_" + String(document.referrer);
          }, _.getSourceFromReferrer = function () {
            function e(e, t) {
              for (var r = 0; r < e.length; r++) if (-1 !== t.split("?")[0].indexOf(e[r])) return !0;
            }

            var t = "(" + sd.para.source_type.utm.join("|") + ")\\=[^&]+",
                r = sd.para.source_type.search,
                n = sd.para.source_type.social,
                o = document.referrer || "",
                i = _.info.pageProp.url;

            if (i) {
              var s = i.match(new RegExp(t));
              return s && s[0] ? "浠樿垂骞垮憡娴侀噺" : e(r, o) ? "鑷劧鎼滅储娴侀噺" : e(n, o) ? "绀句氦缃戠珯娴侀噺" : "" === o ? "鐩存帴娴侀噺" : "寮曡崘娴侀噺";
            }

            return "鑾峰彇url寮傚父";
          }, _.info = {
            initPage: function () {
              var e = _.getReferrer(),
                  t = e ? _.url("hostname", e) : e,
                  r = _.getReferrerDomain(e),
                  n = location.href,
                  o = n ? _.url("hostname", n) : n,
                  i = _.getCurrentDomain(n);

              e && !r && _.jssdkDebug("referrer_domain寮傚父_" + e + "_" + r), i || _.jssdkDebug("url_domain寮傚父_" + n + "_" + i), this.pageProp = {
                referrer: e,
                referrer_host: t,
                referrer_domain: r,
                url: n,
                url_host: o,
                url_domain: i
              };
            },
            pageProp: {},
            campaignParams: function () {
              var e = source_channel_standard.split(" "),
                  t = "",
                  r = {};
              return _.isArray(sd.para.source_channel) && sd.para.source_channel.length > 0 && (e = e.concat(sd.para.source_channel), e = _.unique(e)), _.each(e, function (e) {
                (t = _.getQueryParam(location.href, e)).length && (r[e] = t);
              }), r;
            },
            campaignParamsStandard: function (e, t) {
              e = e || "", t = t || "";

              var r = _.info.campaignParams(),
                  n = {},
                  o = {};

              for (var i in r) -1 !== (" " + source_channel_standard + " ").indexOf(" " + i + " ") ? n[e + i] = r[i] : o[t + i] = r[i];

              return {
                $utms: n,
                otherUtms: o
              };
            },
            properties: function () {
              return {
                $screen_height: Number(screen.height) || 0,
                $screen_width: Number(screen.width) || 0,
                $lib: "js",
                $lib_version: String(LIB_VERSION)
              };
            },
            currentProps: {},
            register: function (e) {
              _.extend(_.info.currentProps, e);
            }
          }, _.autoExeQueue = function () {
            return {
              items: [],
              enqueue: function (e) {
                this.items.push(e), this.start();
              },
              dequeue: function () {
                return this.items.shift();
              },
              getCurrentItem: function () {
                return this.items[0];
              },
              isRun: !1,
              start: function () {
                this.items.length > 0 && !this.isRun && (this.isRun = !0, this.getCurrentItem().start());
              },
              close: function () {
                this.dequeue(), this.isRun = !1, this.start();
              }
            };
          };
          var dataSend = {
            getSendUrl: function (e, t) {
              var r = _.base64Encode(t),
                  n = "crc=" + _.hashCode(r);

              return -1 !== e.indexOf("?") ? e + "&data=" + encodeURIComponent(r) + "&ext=" + encodeURIComponent(n) : e + "?data=" + encodeURIComponent(r) + "&ext=" + encodeURIComponent(n);
            },
            getSendData: function (e) {
              var t = _.base64Encode(e),
                  r = "crc=" + _.hashCode(t);

              return "data=" + encodeURIComponent(t) + "&ext=" + encodeURIComponent(r);
            },
            getInstance: function (e) {
              var t = new this[this.getSendType(e)](e),
                  r = t.start;
              return t.start = function () {
                var e = this;
                r.apply(this, arguments), setTimeout(function () {
                  e.isEnd(!0);
                }, sd.para.callback_timeout);
              }, t.end = function () {
                this.callback && this.callback();
                var e = this;
                setTimeout(function () {
                  e.lastClear && e.lastClear();
                }, sd.para.datasend_timeout - sd.para.callback_timeout);
              }, t.isEnd = function (e) {
                if (!this.received) {
                  this.received = !0, this.end();
                  var t = this;
                  e ? sd.para.queue_timeout - sd.para.callback_timeout <= 0 ? t.close() : setTimeout(function () {
                    t.close();
                  }, sd.para.queue_timeout - sd.para.callback_timeout) : t.close();
                }
              }, t;
            },
            getSendType: function (e) {
              var t = ["image", "ajax", "beacon"],
                  r = t[0];
              return "beacon" === (r = e.config && _.indexOf(t, e.config.send_type) > -1 ? e.config.send_type : sd.para.send_type) && "function" != typeof navigator.sendBeacon && (r = "image"), "ajax" === r && !1 === _.isSupportCors() && (r = "image"), r;
            },
            image: function (e) {
              this.callback = e.callback, this.img = document.createElement("img"), this.img.width = 1, this.img.height = 1, this.data = e.data, this.server_url = dataSend.getSendUrl(e.server_url, e.data);
            }
          };
          dataSend.image.prototype.start = function () {
            var e = this;
            sd.para.ignore_oom && (this.img.onload = function () {
              this.onload = null, this.onerror = null, this.onabort = null, e.isEnd();
            }, this.img.onerror = function () {
              this.onload = null, this.onerror = null, this.onabort = null, e.isEnd();
            }, this.img.onabort = function () {
              this.onload = null, this.onerror = null, this.onabort = null, e.isEnd();
            }), this.img.src = this.server_url;
          }, dataSend.image.prototype.lastClear = function () {
            this.img.src = "";
          }, dataSend.ajax = function (e) {
            this.callback = e.callback, this.server_url = e.server_url, this.data = dataSend.getSendData(e.data);
          }, dataSend.ajax.prototype.start = function () {
            var e = this;

            _.ajax({
              url: this.server_url,
              type: "POST",
              data: this.data,
              credentials: !1,
              timeout: sd.para.datasend_timeout,
              cors: !0,
              success: function () {
                e.isEnd();
              },
              error: function () {
                e.isEnd();
              }
            });
          }, dataSend.beacon = function (e) {
            this.callback = e.callback, this.server_url = e.server_url, this.data = dataSend.getSendData(e.data);
          }, dataSend.beacon.prototype.start = function () {
            var e = this;
            "object" == typeof navigator && "function" == typeof navigator.sendBeacon && navigator.sendBeacon(this.server_url, this.data), setTimeout(function () {
              e.isEnd();
            }, 40);
          }, sd.debug = {
            apph5: function (e) {
              var t = "app_h5鎵撻€氬け璐�-",
                  r = {
                1: t + "use_app_track涓篺alse",
                2: t + "Android鎴栬€卛OS锛屾病鏈夋毚闇茬浉搴旀柟娉�",
                3.1: t + "Android鏍￠獙server_url澶辫触",
                3.2: t + "iOS鏍￠獙server_url澶辫触"
              },
                  n = e.output,
                  o = e.step,
                  i = e.data;
              "all" !== n && "console" !== n || logger.info(r[o]), ("all" === n || "code" === n) && _.isObject(sd.para.is_debug) && sd.para.is_debug.apph5 && (i.type && "profile" === i.type.slice(0, 7) || (i.properties._jssdk_debug_info = "apph5-" + String(o)));
            }
          };
          var sendState = {};
          sd.sendState = sendState, sendState.queue = _.autoExeQueue(), sendState.requestData = null, sendState.getSendCall = function (e, t, r) {
            if (sd.is_heatmap_render_mode) return !1;
            e._track_id = Number(String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 4) + String(new Date().getTime()).slice(-4)), sd.para.use_client_time && (e._flush_time = new Date().getTime());
            var n = e;
            if (e = JSON.stringify(e), this.requestData = {
              data: n,
              config: t,
              callback: r
            }, !0 === sd.para.use_app_track || "only" === sd.para.use_app_track) {
              if ("object" == typeof SensorsData_APP_JS_Bridge && (SensorsData_APP_JS_Bridge.sensorsdata_verify || SensorsData_APP_JS_Bridge.sensorsdata_track)) SensorsData_APP_JS_Bridge.sensorsdata_verify ? SensorsData_APP_JS_Bridge.sensorsdata_verify(JSON.stringify(_.extend({
                server_url: sd.para.server_url
              }, n))) ? "function" == typeof r && r() : (sd.debug.apph5({
                data: n,
                step: "3.1",
                output: "all"
              }), this.prepareServerUrl()) : (SensorsData_APP_JS_Bridge.sensorsdata_track(JSON.stringify(_.extend({
                server_url: sd.para.server_url
              }, n))), "function" == typeof r && r());else if (!/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent) || window.MSStream) !0 === sd.para.use_app_track && (sd.debug.apph5({
                data: n,
                step: "2",
                output: "all"
              }), this.prepareServerUrl());else {
                var o = null;

                if (/sensors-verify/.test(navigator.userAgent)) {
                  var i = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);

                  if (i && i[0] && "string" == typeof i[1] && 2 === i[1].split("?").length) {
                    i = i[1].split("?");
                    var s = null,
                        a = null;

                    try {
                      s = _.url("hostname", sd.para.server_url), a = _.url("?project", sd.para.server_url) || "default";
                    } catch (e) {}

                    s && s === i[0] && a && a === i[1] ? ((o = document.createElement("iframe")).setAttribute("src", "sensorsanalytics://trackEvent?event=" + encodeURIComponent(JSON.stringify(_.extend({
                      server_url: sd.para.server_url
                    }, n)))), document.documentElement.appendChild(o), o.parentNode.removeChild(o), o = null, "function" == typeof r && r()) : (sd.debug.apph5({
                      data: n,
                      step: "3.2",
                      output: "all"
                    }), this.prepareServerUrl());
                  }
                } else (o = document.createElement("iframe")).setAttribute("src", "sensorsanalytics://trackEvent?event=" + encodeURIComponent(JSON.stringify(_.extend({
                  server_url: sd.para.server_url
                }, n)))), document.documentElement.appendChild(o), o.parentNode.removeChild(o), o = null, "function" == typeof r && r();
              }
            } else "mui" === sd.para.use_app_track ? _.isObject(window.plus) && window.plus.SDAnalytics && window.plus.SDAnalytics.trackH5Event && window.plus.SDAnalytics.trackH5Event(e) : (sd.debug.apph5({
              data: n,
              step: "1",
              output: "code"
            }), this.prepareServerUrl());
            logger.info(n);
          }, sendState.prepareServerUrl = function () {
            if ("object" == typeof this.requestData.config && this.requestData.config.server_url) this.sendCall(this.requestData.config.server_url, this.requestData.callback);else if (_.isArray(sd.para.server_url)) for (var e = 0; e < sd.para.server_url.length; e++) this.sendCall(sd.para.server_url[e]);else this.sendCall(sd.para.server_url, this.requestData.callback);
          }, sendState.sendCall = function (e, t) {
            var r = {
              server_url: e,
              data: JSON.stringify(this.requestData.data),
              callback: t,
              config: this.requestData.config
            };
            _.isObject(sd.para.jsapp) && !sd.para.jsapp.isOnline && "function" == typeof sd.para.jsapp.setData ? (delete r.callback, r = JSON.stringify(r), sd.para.jsapp.setData(r)) : this.pushSend(r);
          }, sendState.pushSend = function (e) {
            var t = dataSend.getInstance(e),
                r = this;
            t.close = function () {
              r.queue.close();
            }, this.queue.enqueue(t);
          };
          var saNewUser = {
            checkIsAddSign: function (e) {
              "track" === e.type && (_.cookie.getNewUser() ? e.properties.$is_first_day = !0 : e.properties.$is_first_day = !1);
            },
            is_first_visit_time: !1,
            checkIsFirstTime: function (e) {
              "track" === e.type && "$pageview" === e.event && (this.is_first_visit_time ? (e.properties.$is_first_time = !0, this.is_first_visit_time = !1) : e.properties.$is_first_time = !1);
            },
            setDeviceId: function (e) {
              var t = null,
                  r = _.cookie.get("sensorsdata2015jssdkcross"),
                  n = {};

              null != r && _.isJSONString(r) && (n = JSON.parse(r)).$device_id && (t = n.$device_id), t = t || e, !0 === sd.para.cross_subdomain ? store.set("$device_id", t) : (n.$device_id = t, _.cookie.set("sensorsdata2015jssdkcross", JSON.stringify(n), null, !0)), sd.para.is_track_device_id && (_.info.currentProps.$device_id = t);
            },
            storeInitCheck: function () {
              if (is_first_visitor) {
                var e = new Date(),
                    t = {
                  h: 23 - e.getHours(),
                  m: 59 - e.getMinutes(),
                  s: 59 - e.getSeconds()
                };
                _.cookie.set(_.cookie.getCookieName("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s"), this.is_first_visit_time = !0;
              } else _.cookie.getNewUser() || (this.checkIsAddSign = function (e) {
                "track" === e.type && (e.properties.$is_first_day = !1);
              }), this.checkIsFirstTime = function (e) {
                "track" === e.type && "$pageview" === e.event && (e.properties.$is_first_time = !1);
              };
            },
            checkIsFirstLatest: function () {
              for (var e = _.info.pageProp.url_domain, t = _.info.pageProp.referrer_domain, r = ["$utm_source", "$utm_medium", "$utm_campaign", "$utm_content", "$utm_term"], n = store.getProps(), o = 0; o < r.length; o++) r[o] in n && delete n[r[o]];

              store.setProps(n, !0);
              var i = {};

              if ("" === e && (e = "url瑙ｆ瀽澶辫触"), _.each(sd.para.is_track_latest, function (r, n) {
                if (r) {
                  if ("utm" !== n && "url瑙ｆ瀽澶辫触" === e) i["$latest_" + n] = "url鐨刣omain瑙ｆ瀽澶辫触";else if ("utm" !== n && "referrer瑙ｆ瀽澶辫触" === t) i["$latest_" + n] = "referrer鐨刣omain瑙ｆ瀽澶辫触";else if (e !== t) switch (n) {
                    case "traffic_source_type":
                      i.$latest_traffic_source_type = _.getSourceFromReferrer();
                      break;

                    case "referrer":
                      i.$latest_referrer = _.info.pageProp.referrer;
                      break;

                    case "referrer_host":
                      i.$latest_referrer_host = _.info.pageProp.referrer_host;
                      break;

                    case "search_keyword":
                      i.$latest_search_keyword = _.getKeywordFromReferrer();
                      break;

                    case "landing_page":
                      i.$latest_landing_page = location.href;
                  }
                } else if ("utm" === n && sd.store._state.props) for (var o in sd.store._state.props) 0 === o.indexOf("$latest_utm") && 0 === o.indexOf("_latest_") || delete sd.store._state.props[o];else sd.store._state.props && "$latest_" + n in sd.store._state.props && delete sd.store._state.props["$latest_" + n];
              }), sd.register(i), sd.para.is_track_latest.utm) {
                var s = _.info.campaignParamsStandard("$latest_", "_latest_"),
                    a = s.$utms,
                    p = s.otherUtms;

                _.isEmptyObject(a) || sd.register(a), _.isEmptyObject(p) || sd.register(p);
              }
            }
          },
              saEvent = {};
          saEvent.checkOption = {
            regChecks: {
              regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i
            },
            checkPropertiesKey: function (e) {
              var t = this,
                  r = !0;
              return _.each(e, function (e, n) {
                t.regChecks.regName.test(n) || (r = !1);
              }), r;
            },
            check: function (e, t) {
              return "string" == typeof this[e] ? this[this[e]](t) : this[e](t);
            },
            str: function (e) {
              return !!_.isString(e) || (logger.info("璇锋鏌ュ弬鏁版牸寮�,蹇呴』鏄瓧绗︿覆"), !0);
            },
            properties: function (e) {
              return _.strip_sa_properties(e), !(e && (_.isObject(e) ? !this.checkPropertiesKey(e) && (logger.info("properties 閲岀殑鑷畾涔夊睘鎬у悕闇€瑕佹槸鍚堟硶鐨勫彉閲忓悕锛屼笉鑳戒互鏁板瓧寮€澶达紝涓斿彧鍖呭惈锛氬ぇ灏忓啓瀛楁瘝銆佹暟瀛椼€佷笅鍒掔嚎锛岃嚜瀹氫箟灞炴€т笉鑳戒互 $ 寮€澶�"), 0) : (logger.info("properties鍙互娌℃湁锛屼絾鏈夌殑璇濆繀椤绘槸瀵硅薄"), 0)));
            },
            propertiesMust: function (e) {
              return _.strip_sa_properties(e), void 0 === e || !_.isObject(e) || _.isEmptyObject(e) ? (logger.info("properties蹇呴』鏄璞′笖鏈夊€�"), !0) : !!this.checkPropertiesKey(e) || (logger.info("properties 閲岀殑鑷畾涔夊睘鎬у悕闇€瑕佹槸鍚堟硶鐨勫彉閲忓悕锛屼笉鑳戒互鏁板瓧寮€澶达紝涓斿彧鍖呭惈锛氬ぇ灏忓啓瀛楁瘝銆佹暟瀛椼€佷笅鍒掔嚎锛岃嚜瀹氫箟灞炴€т笉鑳戒互 $ 寮€澶�"), !0);
            },
            event: function (e) {
              return !(!_.isString(e) || !this.regChecks.regName.test(e)) || (logger.info("璇锋鏌ュ弬鏁版牸寮忥紝eventName 蹇呴』鏄瓧绗︿覆锛屼笖闇€鏄悎娉曠殑鍙橀噺鍚嶏紝鍗充笉鑳戒互鏁板瓧寮€澶达紝涓斿彧鍖呭惈锛氬ぇ灏忓啓瀛楁瘝銆佹暟瀛椼€佷笅鍒掔嚎鍜� $,鍏朵腑浠� $ 寮€澶寸殑琛ㄦ槑鏄郴缁熺殑淇濈暀瀛楁锛岃嚜瀹氫箟浜嬩欢鍚嶈涓嶈浠� $ 寮€澶�"), !0);
            },
            test_id: "str",
            group_id: "str",
            distinct_id: function (e) {
              return !(!_.isString(e) || !/^.{1,255}$/.test(e)) || (logger.info("distinct_id蹇呴』鏄笉鑳戒负绌猴紝涓斿皬浜�255浣嶇殑瀛楃涓�"), !1);
            }
          }, saEvent.check = function (e) {
            for (var t in e) if (!this.checkOption.check(t, e[t])) return !1;

            return !0;
          }, saEvent.send = function (e, t) {
            var r = {
              distinct_id: store.getDistinctId(),
              lib: {
                $lib: "js",
                $lib_method: "code",
                $lib_version: String(LIB_VERSION)
              },
              properties: {}
            };

            if (_.isObject(e) && _.isObject(e.properties) && !_.isEmptyObject(e.properties) && e.properties.$lib_detail && (r.lib.$lib_detail = e.properties.$lib_detail, delete e.properties.$lib_detail), "string" != typeof store.getDistinctId() || "" == typeof store.getDistinctId()) {
              var n = "";

              switch (store.getDistinctId()) {
                case null:
                  n = "null";
                  break;

                case void 0:
                  n = "undefined";
                  break;

                case "":
                  n = "绌�";
                  break;

                default:
                  n = String(store.getDistinctId());
              }

              error_msg.push("distinct_id-" + just_test_distinctid + "-" + just_test_distinctid_2 + "-" + n + "-" + just_test_distinctid_detail + "-" + just_test_distinctid_detail2);
            }

            _.extend(r, e), error_msg.length > 0 && (r.jssdk_error = error_msg.join("--")), _.isObject(e.properties) && !_.isEmptyObject(e.properties) && _.extend(r.properties, e.properties), e.type && "profile" === e.type.slice(0, 7) || (r.properties = _.extend({}, _.info.properties(), store.getProps(), store.getSessionProps(), _.info.currentProps, r.properties), sd.para.is_track_latest.referrer && !_.isString(r.properties.$latest_referrer) && (r.properties.$latest_referrer = "鍙栧€煎紓甯�", _.jssdkDebug(r.properties, store.getProps())), sd.para.is_track_latest.referrer_host && !_.isString(r.properties.$latest_referrer_host) && (r.properties.$latest_referrer_host = "鍙栧€煎紓甯�"), sd.para.is_track_latest.search_keyword && !_.isString(r.properties.$latest_search_keyword) && (r.properties.$latest_search_keyword = "鍙栧€煎紓甯�"), sd.para.is_track_latest.traffic_source_type && !_.isString(r.properties.$latest_traffic_source_type) && (r.properties.$latest_traffic_source_type = "鍙栧€煎紓甯�"), sd.para.is_track_latest.landing_page && !_.isString(r.properties.$latest_landing_page) && (r.properties.$latest_landing_page = "鍙栧€煎紓甯�")), r.properties.$time && _.isDate(r.properties.$time) ? (r.time = 1 * r.properties.$time, delete r.properties.$time) : sd.para.use_client_time && (r.time = 1 * new Date()), _.searchObjDate(r), _.searchObjString(r), _.searchZZAppStyle(r);

            var o = _.searchConfigData(r.properties);

            saNewUser.checkIsAddSign(r), saNewUser.checkIsFirstTime(r), !0 === sd.para.debug_mode ? (logger.info(r), this.debugPath(JSON.stringify(r), t)) : sd.sendState.getSendCall(r, o, t);
          }, saEvent.debugPath = function (e, t) {
            var r,
                n = e;
            r = -1 !== sd.para.debug_mode_url.indexOf("?") ? sd.para.debug_mode_url + "&data=" + encodeURIComponent(_.base64Encode(e)) : sd.para.debug_mode_url + "?data=" + encodeURIComponent(_.base64Encode(e)), _.ajax({
              url: r,
              type: "GET",
              cors: !0,
              header: {
                "Dry-Run": String(sd.para.debug_mode_upload)
              },
              success: function (e) {
                !0 === _.isEmptyObject(e) ? alert("debug鏁版嵁鍙戦€佹垚鍔�" + n) : alert("debug澶辫触 閿欒鍘熷洜" + JSON.stringify(e));
              }
            });
          };
          var store = sd.store = {
            _sessionState: {},
            _state: {},
            getProps: function () {
              return this._state.props || {};
            },
            getSessionProps: function () {
              return this._sessionState;
            },
            getDistinctId: function () {
              return this._state.distinct_id;
            },
            getFirstId: function () {
              return this._state.first_id;
            },
            toState: function (e) {
              var t = null;
              if (null != e && _.isJSONString(e)) {
                if (t = JSON.parse(e), this._state = _.extend(t), t.distinct_id) {
                  if ("object" == typeof t.props) {
                    for (var r in t.props) "string" == typeof t.props[r] && (t.props[r] = t.props[r].slice(0, sd.para.max_referrer_string_length));

                    this.save();
                  }
                } else this.set("distinct_id", _.UUID()), error_msg.push("toStateParseDistinctError");
              } else this.set("distinct_id", _.UUID()), error_msg.push("toStateParseError");
            },
            initSessionState: function () {
              var e = _.cookie.get("sensorsdata2015session"),
                  t = null;

              null !== e && "object" == typeof (t = JSON.parse(e)) && (this._sessionState = t || {});
            },
            setOnce: function (e, t) {
              e in this._state || this.set(e, t);
            },
            set: function (e, t) {
              this._state = this._state || {}, this._state[e] = t, this.save();
            },
            change: function (e, t) {
              this._state[e] = t;
            },
            setSessionProps: function (e) {
              var t = this._sessionState;
              _.extend(t, e), this.sessionSave(t);
            },
            setSessionPropsOnce: function (e) {
              var t = this._sessionState;
              _.coverExtend(t, e), this.sessionSave(t);
            },
            setProps: function (e, t) {
              var r = {};

              for (var n in r = t ? e : _.extend(this._state.props || {}, e)) "string" == typeof r[n] && (r[n] = r[n].slice(0, sd.para.max_referrer_string_length));

              this.set("props", r);
            },
            setPropsOnce: function (e) {
              var t = this._state.props || {};
              _.coverExtend(t, e), this.set("props", t);
            },
            clearAllProps: function (e) {
              if (this._sessionState = {}, _.isArray(e) && e.length > 0) for (var t = 0; t < e.length; t++) _.isString(e[t]) && -1 === e[t].indexOf("latest_") && e[t] in this._state.props && delete this._state.props[e[t]];else for (var t in this._state.props) 1 !== t.indexOf("latest_") && delete this._state.props[t];
              this.sessionSave({}), this.save();
            },
            sessionSave: function (e) {
              this._sessionState = e, _.cookie.set("sensorsdata2015session", JSON.stringify(this._sessionState), 0);
            },
            save: function () {
              _.cookie.set(this.getCookieName(), JSON.stringify(this._state), 73e3, sd.para.cross_subdomain);
            },
            getCookieName: function () {
              var e = "";
              return !1 === sd.para.cross_subdomain ? e = "string" == typeof (e = _.url("sub", location.href)) && "" !== e ? "sa_jssdk_2015_" + e : "sa_jssdk_2015_root" : e = "sensorsdata2015jssdkcross", e;
            },
            init: function () {
              navigator.cookieEnabled || (error_msg.push("cookieNotEnable"), _.localStorage.isSupport || error_msg.push("localStorageNotEnable")), this.initSessionState();

              var e = _.UUID(),
                  t = _.cookie.get(this.getCookieName());

              null === t ? (is_first_visitor = !0, just_test_distinctid = 1, this.set("distinct_id", e)) : (just_test_distinctid = 2, just_test_distinctid_detail = JSON.stringify(t), just_test_distinctid_detail2 = JSON.stringify(document.cookie.match(/2015[^;]+/g)), _.isJSONString(t) && JSON.parse(t).distinct_id || (is_first_visitor = !0), this.toState(t)), saNewUser.setDeviceId(e), saNewUser.storeInitCheck(), saNewUser.checkIsFirstLatest();
            }
          },
              commonWays = {
            setOnlineState: function (e) {
              if (!0 === e && _.isObject(sd.para.jsapp) && "function" == typeof sd.para.jsapp.getData) {
                sd.para.jsapp.isOnline = !0;
                var t = sd.para.jsapp.getData();
                _.isArray(t) && t.length > 0 && _.each(t, function (e) {
                  _.isJSONString(e) && sd.sendState.pushSend(JSON.parse(e));
                });
              } else sd.para.jsapp.isOnline = !1;
            },
            autoTrackIsUsed: !1,
            isReady: function (e) {
              e();
            },
            getUtm: function () {
              return _.info.campaignParams();
            },
            getStayTime: function () {
              return (new Date() - sd._t) / 1e3;
            },
            setProfileLocal: function (e) {
              if (!_.localStorage.isSupport()) return sd.setProfile(e), !1;
              if (!_.isObject(e) || _.isEmptyObject(e)) return !1;

              var t = _.localStorage.parse("sensorsdata_2015_jssdk_profile"),
                  r = !1;

              if (_.isObject(t) && !_.isEmptyObject(t)) {
                for (var n in e) !(n in t && t[n] !== e[n]) && n in t || (t[n] = e[n], r = !0);

                r && (_.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(t)), sd.setProfile(e));
              } else _.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(e)), sd.setProfile(e);
            },
            setInitReferrer: function () {
              var e = _.getReferrer();

              sd.setOnceProfile({
                _init_referrer: e,
                _init_referrer_host: _.info.pageProp.referrer_host
              });
            },
            setSessionReferrer: function () {
              var e = _.getReferrer();

              store.setSessionPropsOnce({
                _session_referrer: e,
                _session_referrer_host: _.info.pageProp.referrer_host
              });
            },
            setDefaultAttr: function () {
              _.info.register({
                _current_url: location.href,
                _referrer: _.getReferrer(),
                _referring_host: _.info.pageProp.referrer_host
              });
            },
            trackHeatmap: function () {
              this.trackHeatMap.apply(arguments);
            },
            trackHeatMap: function (e, t, r) {
              if ("object" == typeof e && e.tagName) {
                var n = e.tagName.toLowerCase(),
                    o = e.parentNode.tagName.toLowerCase();
                "button" !== n && "a" !== n && "a" !== o && "button" !== o && "input" !== n && "textarea" !== n && heatmap.start(null, e, n, t, r);
              }
            },
            trackAllHeatMap: function (e, t, r) {
              if ("object" == typeof e && e.tagName) {
                var n = e.tagName.toLowerCase();
                heatmap.start(null, e, n, t, r);
              }
            },
            autoTrackSinglePage: function (e, t) {
              function r() {
                var e = _.info.campaignParams(),
                    t = {};

                for (var r in e) -1 !== (" " + source_channel_standard + " ").indexOf(" " + r + " ") ? t["$" + r] = e[r] : t[r] = e[r];

                return t;
              }

              function n(e, t) {
                sd.track("$pageview", _.extend({
                  $referrer: o,
                  $referrer_host: o ? _.url("hostname", o) : o,
                  $url: location.href,
                  $url_path: location.pathname,
                  $title: document.title
                }, e, r()), t), o = location.href;
              }

              if (this.autoTrackIsUsed) var o = _.info.pageProp.url;else o = _.info.pageProp.referrer;
              e = _.isObject(e) ? e : {}, e = _.isObject(e) ? e : {}, is_first_visitor && !e.not_set_profile && (sd.setOnceProfile(_.extend({
                $first_visit_time: new Date(),
                $first_referrer: _.getReferrer(),
                $first_browser_language: navigator.language || "鍙栧€煎紓甯�",
                $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "鍙栧€煎紓甯�",
                $first_referrer_host: _.info.pageProp.referrer_host,
                $first_traffic_source_type: _.getSourceFromReferrer(),
                $first_search_keyword: _.getKeywordFromReferrer()
              }, r())), is_first_visitor = !1), e.not_set_profile && delete e.not_set_profile, is_first_visitor && !e.not_set_profile && (sd.setOnceProfile(_.extend({
                $first_visit_time: new Date(),
                $first_referrer: _.getReferrer(),
                $first_browser_language: navigator.language || "鍙栧€煎紓甯�",
                $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "鍙栧€煎紓甯�",
                $first_referrer_host: _.info.pageProp.referrer_host,
                $first_traffic_source_type: _.getSourceFromReferrer(),
                $first_search_keyword: _.getKeywordFromReferrer()
              }, r())), is_first_visitor = !1), e.not_set_profile && delete e.not_set_profile, n(e, t), this.autoTrackSinglePage = n;
            },
            autoTrackWithoutProfile: function (e, t) {
              e = _.isObject(e) ? e : {}, this.autoTrack(_.extend(e, {
                not_set_profile: !0
              }), t);
            },
            autoTrack: function (e, t) {
              e = _.isObject(e) ? e : {};

              var r = _.info.campaignParams(),
                  n = {};

              for (var o in r) -1 !== (" " + source_channel_standard + " ").indexOf(" " + o + " ") ? n["$" + o] = r[o] : n[o] = r[o];

              is_first_visitor && !e.not_set_profile && (sd.setOnceProfile(_.extend({
                $first_visit_time: new Date(),
                $first_referrer: _.getReferrer(),
                $first_browser_language: navigator.language || "鍙栧€煎紓甯�",
                $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "鍙栧€煎紓甯�",
                $first_referrer_host: _.info.pageProp.referrer_host,
                $first_traffic_source_type: _.getSourceFromReferrer(),
                $first_search_keyword: _.getKeywordFromReferrer()
              }, n)), is_first_visitor = !1), e.not_set_profile && delete e.not_set_profile;
              var i = location.href;
              sd.para.is_single_page && _.addHashEvent(function () {
                var r = _.getReferrer(i);

                sd.track("$pageview", _.extend({
                  $referrer: r,
                  $referrer_host: _.url("hostname", r) || "",
                  $url: location.href,
                  $url_path: location.pathname,
                  $title: document.title
                }, n, e), t), i = location.href;
              }), sd.track("$pageview", _.extend({
                $referrer: _.getReferrer(),
                $referrer_host: _.info.pageProp.referrer_host,
                $url: location.href,
                $url_path: location.pathname,
                $title: document.title
              }, n, e), t), this.autoTrackIsUsed = !0;
            },
            getAnonymousID: function () {
              return _.isEmptyObject(sd.store._state) ? "璇峰厛鍒濆鍖朣DK" : sd.store._state.first_id ? sd.store._state.first_id : sd.store._state.distinct_id;
            }
          };
          sd.quick = function () {
            var e = slice.call(arguments),
                t = e[0],
                r = e.slice(1);
            return "string" == typeof t && commonWays[t] ? commonWays[t].apply(commonWays, r) : void ("function" == typeof t ? t.apply(sd, r) : logger.info("quick鏂规硶涓病鏈夎繖涓姛鑳�" + e[0]));
          }, sd.track = function (e, t, r) {
            saEvent.check({
              event: e,
              properties: t
            }) && saEvent.send({
              type: "track",
              event: e,
              properties: t
            }, r);
          }, _.trackLink = function (e, t, r) {
            function n(e) {
              function n() {
                i || (i = !0, location.href = o.href);
              }

              e.stopPropagation(), e.preventDefault();
              var i = !1;
              setTimeout(n, 1e3), sd.track(t, r, n);
            }

            var o = null;
            return (e = e || {}).ele && (o = e.ele), e.event && (o = e.target ? e.target : e.event.target), r = r || {}, !(!o || "object" != typeof o) && (!o.href || /^javascript/.test(o.href) || o.target || o.download || o.onclick ? (sd.track(t, r), !1) : (e.event && n(e.event), void (e.ele && _.addEvent(e.ele, "click", function (e) {
              n(e);
            }))));
          }, sd.trackLink = function (e, t, r) {
            "object" == typeof e && e.tagName ? _.trackLink({
              ele: e
            }, t, r) : "object" == typeof e && e.target && e.event && _.trackLink(e, t, r);
          }, sd.trackLinks = function (e, t, r) {
            return r = r || {}, !(!e || "object" != typeof e) && !(!e.href || /^javascript/.test(e.href) || e.target) && void _.addEvent(e, "click", function (n) {
              function o() {
                i || (i = !0, location.href = e.href);
              }

              n.preventDefault();
              var i = !1;
              setTimeout(o, 1e3), sd.track(t, r, o);
            });
          }, sd.setProfile = function (e, t) {
            saEvent.check({
              propertiesMust: e
            }) && saEvent.send({
              type: "profile_set",
              properties: e
            }, t);
          }, sd.setOnceProfile = function (e, t) {
            saEvent.check({
              propertiesMust: e
            }) && saEvent.send({
              type: "profile_set_once",
              properties: e
            }, t);
          }, sd.appendProfile = function (e, t) {
            saEvent.check({
              propertiesMust: e
            }) && (_.each(e, function (t, r) {
              _.isString(t) ? e[r] = [t] : _.isArray(t) || (delete e[r], logger.info("appendProfile灞炴€х殑鍊煎繀椤绘槸瀛楃涓叉垨鑰呮暟缁�"));
            }), _.isEmptyObject(e) || saEvent.send({
              type: "profile_append",
              properties: e
            }, t));
          }, sd.incrementProfile = function (e, t) {
            var r = e;
            _.isString(e) && ((e = {})[r] = 1), saEvent.check({
              propertiesMust: e
            }) && (function (e) {
              for (var t in e) if (!/-*\d+/.test(String(e[t]))) return !1;

              return !0;
            }(e) ? saEvent.send({
              type: "profile_increment",
              properties: e
            }, t) : logger.info("profile_increment鐨勫€煎彧鑳芥槸鏁板瓧"));
          }, sd.deleteProfile = function (e) {
            saEvent.send({
              type: "profile_delete"
            }, e), store.set("distinct_id", _.UUID());
          }, sd.unsetProfile = function (e, t) {
            var r = e,
                n = {};
            _.isString(e) && (e = []).push(r), _.isArray(e) ? (_.each(e, function (e) {
              _.isString(e) ? n[e] = !0 : logger.info("profile_unset缁欑殑鏁扮粍閲岄潰鐨勫€煎繀椤绘椂string,宸茬粡杩囨护鎺�", e);
            }), saEvent.send({
              type: "profile_unset",
              properties: n
            }, t)) : logger.info("profile_unset鐨勫弬鏁版槸鏁扮粍");
          }, sd.identify = function (e, t) {
            "number" == typeof e && (e = String(e));
            var r = store.getFirstId();
            void 0 === e ? r ? store.set("first_id", _.UUID()) : store.set("distinct_id", _.UUID()) : saEvent.check({
              distinct_id: e
            }) ? !0 === t ? r ? store.set("first_id", e) : store.set("distinct_id", e) : r ? store.change("first_id", e) : store.change("distinct_id", e) : logger.info("identify鐨勫弬鏁板繀椤绘槸瀛楃涓�");
          }, sd.trackSignup = function (e, t, r, n) {
            saEvent.check({
              distinct_id: e,
              event: t,
              properties: r
            }) && (saEvent.send({
              original_id: store.getFirstId() || store.getDistinctId(),
              distinct_id: e,
              type: "track_signup",
              event: t,
              properties: r
            }, n), store.set("distinct_id", e));
          }, sd.trackAbtest = function (e, t) {}, sd.registerPage = function (e) {
            saEvent.check({
              properties: e
            }) ? _.extend(_.info.currentProps, e) : logger.info("register杈撳叆鐨勫弬鏁版湁璇�");
          }, sd.clearAllRegister = function (e) {
            store.clearAllProps(e);
          }, sd.register = function (e) {
            saEvent.check({
              properties: e
            }) ? store.setProps(e) : logger.info("register杈撳叆鐨勫弬鏁版湁璇�");
          }, sd.registerOnce = function (e) {
            saEvent.check({
              properties: e
            }) ? store.setPropsOnce(e) : logger.info("registerOnce杈撳叆鐨勫弬鏁版湁璇�");
          }, sd.registerSession = function (e) {
            saEvent.check({
              properties: e
            }) ? store.setSessionProps(e) : logger.info("registerSession杈撳叆鐨勫弬鏁版湁璇�");
          }, sd.registerSessionOnce = function (e) {
            saEvent.check({
              properties: e
            }) ? store.setSessionPropsOnce(e) : logger.info("registerSessionOnce杈撳叆鐨勫弬鏁版湁璇�");
          }, sd.login = function (e) {
            if ("number" == typeof e && (e = String(e)), saEvent.check({
              distinct_id: e
            })) {
              var t = store.getFirstId(),
                  r = store.getDistinctId();
              e !== r && (t ? sd.trackSignup(e, "$SignUp") : (store.set("first_id", r), sd.trackSignup(e, "$SignUp")));
            } else logger.info("login鐨勫弬鏁板繀椤绘槸瀛楃涓�");
          }, sd.logout = function (e) {
            var t = store.getFirstId();
            t ? (store.set("first_id", ""), !0 === e ? store.set("distinct_id", _.UUID()) : store.set("distinct_id", t)) : logger.info("娌℃湁first_id锛宭ogout澶辫触");
          }, sd.getPresetProperties = function () {
            var e = {
              $referrer: "string" == typeof document.referrer ? document.referrer.slice(0, 100) : "",
              $referrer_host: _.url("hostname", document.referrer) || "",
              $url: location.href,
              $url_path: location.pathname,
              $title: document.title || "",
              _distinct_id: store.getDistinctId()
            };
            return _.extend({}, _.info.properties(), sd.store.getProps(), function () {
              var e = _.info.campaignParams(),
                  t = {};

              for (var r in e) -1 !== (" " + source_channel_standard + " ").indexOf(" " + r + " ") ? t["$" + r] = e[r] : t[r] = e[r];

              return t;
            }(), e);
          };
          var heatmap = {
            setNotice: function (e) {
              sd.is_heatmap_render_mode = !0, sd.para.heatmap || (sd.errorMsg = "鎮⊿DK娌℃湁閰嶇疆寮€鍚偣鍑诲浘锛屽彲鑳芥病鏈夋暟鎹紒"), e && e[0] && e[1] && "http:" === e[1].slice(0, 5) && "https" === location.protocol && (sd.errorMsg = "鎮ㄧ殑褰撳墠椤甸潰鏄痟ttps鐨勫湴鍧€锛岀绛栧垎鏋愮幆澧冧篃蹇呴』鏄痟ttps锛�"), sd.para.heatmap_url || (sd.para.heatmap_url = location.protocol + "//static.sensorsdata.cn/sdk/" + LIB_VERSION + "/heatmap.min.js");
            },
            getDomIndex: function (e) {
              if (!e.parentNode) return -1;

              for (var t = 0, r = e.tagName, n = e.parentNode.children, o = 0; o < n.length; o++) if (n[o].tagName === r) {
                if (e === n[o]) return t;
                t++;
              }

              return -1;
            },
            selector: function (e) {
              var t = e.parentNode && 9 == e.parentNode.nodeType ? -1 : this.getDomIndex(e);
              return e.getAttribute && e.getAttribute("id") && (!sd.para.heatmap || sd.para.heatmap && "not_use_id" !== sd.para.heatmap.element_selector) ? "#" + e.getAttribute("id") : e.tagName.toLowerCase() + (~t ? ":nth-of-type(" + (t + 1) + ")" : "");
            },
            getDomSelector: function (e, t) {
              if (!e || !e.parentNode || !e.parentNode.children) return !1;
              t = t && t.join ? t : [];
              var r = e.nodeName.toLowerCase();
              return e && "body" !== r && 1 == e.nodeType ? (t.unshift(this.selector(e)), e.getAttribute && e.getAttribute("id") ? t.join(" > ") : this.getDomSelector(e.parentNode, t)) : (t.unshift("body"), t.join(" > "));
            },
            na: function () {
              var e = document.documentElement.scrollLeft || window.pageXOffset;
              return parseInt(isNaN(e) ? 0 : e, 10);
            },
            i: function () {
              var e = 0;

              try {
                e = o.documentElement && o.documentElement.scrollTop || m.pageYOffset, e = isNaN(e) ? 0 : e;
              } catch (t) {
                e = 0;
              }

              return parseInt(e, 10);
            },
            getBrowserWidth: function () {
              var e = window.innerWidth || document.body.clientWidth;
              return isNaN(e) ? 0 : parseInt(e, 10);
            },
            getBrowserHeight: function () {
              var e = window.innerHeight || document.body.clientHeight;
              return isNaN(e) ? 0 : parseInt(e, 10);
            },
            getScrollWidth: function () {
              var e = parseInt(document.body.scrollWidth, 10);
              return isNaN(e) ? 0 : e;
            },
            W: function (e) {
              var t = parseInt(+e.clientX + +this.na(), 10);
              e = parseInt(+e.clientY + +this.i(), 10);
              return {
                x: isNaN(t) ? 0 : t,
                y: isNaN(e) ? 0 : e
              };
            },
            start: function (e, t, r, n, o) {
              var i = _.isObject(n) ? n : {},
                  s = _.isFunction(o) ? o : _.isFunction(n) ? n : void 0;
              if (sd.para.heatmap && sd.para.heatmap.collect_element && !sd.para.heatmap.collect_element(t)) return !1;

              var a = this.getDomSelector(t),
                  p = _.getEleInfo({
                target: t
              });

              if (p.$element_selector = a || "", sd.para.heatmap && sd.para.heatmap.custom_property) {
                var c = sd.para.heatmap.custom_property(t);
                _.isObject(c) && (p = _.extend(p, c));
              }

              p = _.extend(p, i), "a" === r && sd.para.heatmap && !0 === sd.para.heatmap.isTrackLink ? _.trackLink({
                event: e,
                target: t
              }, "$WebClick", p) : sd.track("$WebClick", p, s);
            },
            hasElement: function (e) {
              var t = e._getPath();

              if (_.isArray(t) && t.length > 0) for (var r = 0; r < t.length; r++) if (t[r] && t[r].tagName && "a" === t[r].tagName.toLowerCase()) return t[r];
              return !1;
            },
            initScrollmap: function () {
              if (!_.isObject(sd.para.heatmap) || "default" !== sd.para.heatmap.scroll_notice_map) return !1;
              if (sd.para.scrollmap && _.isFunction(sd.para.scrollmap.collect_url) && !sd.para.scrollmap.collect_url()) return !1;

              var e = function (e) {
                var t = {};
                return t.timeout = e.timeout || 1e3, t.func = e.func, t.hasInit = !1, t.inter = null, t.main = function (e, t) {
                  this.func(e, t), this.inter = null;
                }, t.go = function (e) {
                  var r = {};
                  this.inter || (r.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0, r.$viewport_position = Math.round(r.$viewport_position) || 0, r.$viewport_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0, r.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0, e ? t.main(r, !0) : this.inter = setTimeout(function () {
                    t.main(r);
                  }, this.timeout));
                }, t;
              }({
                timeout: 1e3,
                func: function (e, t) {
                  var r = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0,
                      n = new Date(),
                      o = n - this.current_time;
                  (o > sd.para.heatmap.scroll_delay_time && r - e.$viewport_position != 0 || t) && (e.$url = location.href, e.$title = document.title, e.$url_path = location.pathname, e.event_duration = parseInt(o) / 1e3, sd.track("$WebStay", e)), this.current_time = n;
                }
              });

              e.current_time = new Date(), _.addEvent(window, "scroll", function () {
                e.go();
              }), _.addEvent(window, "unload", function () {
                e.go("notime");
              });
            },
            initHeatmap: function () {
              var e = this;
              return !(!_.isObject(sd.para.heatmap) || "default" !== sd.para.heatmap.clickmap) && !(_.isFunction(sd.para.heatmap.collect_url) && !sd.para.heatmap.collect_url()) && ("all" === sd.para.heatmap.collect_elements ? sd.para.heatmap.collect_elements = "all" : sd.para.heatmap.collect_elements = "interact", void ("all" === sd.para.heatmap.collect_elements ? _.addEvent(document, "click", function (t) {
                var r = t || window.event;
                if (!r) return !1;
                var n = r.target || r.srcElement;
                if ("object" != typeof n) return !1;
                if ("string" != typeof n.tagName) return !1;
                var o = n.tagName.toLowerCase();
                if ("body" === o || "html" === o) return !1;
                if (!n || !n.parentNode || !n.parentNode.children) return !1;
                var i = n.parentNode.tagName.toLowerCase();
                "a" === i || "button" === i ? e.start(r, n.parentNode, i) : e.start(r, n, o);
              }) : _.addEvent(document, "click", function (t) {
                var r = t || window.event;
                if (!r) return !1;
                var n = r.target || r.srcElement;
                if ("object" != typeof n) return !1;
                if ("string" != typeof n.tagName) return !1;
                var o = n.tagName.toLowerCase();
                if ("body" === o.toLowerCase() || "html" === o.toLowerCase()) return !1;
                if (!n || !n.parentNode || !n.parentNode.children) return !1;
                var i = n.parentNode;
                if ("a" === o || "button" === o || "input" === o || "textarea" === o) e.start(r, n, o);else if ("button" === i.tagName.toLowerCase() || "a" === i.tagName.toLowerCase()) e.start(r, i, n.parentNode.tagName.toLowerCase());else if ("area" === o && "map" === i.tagName.toLowerCase() && _.ry(i).prev().tagName && "img" === _.ry(i).prev().tagName.toLowerCase()) e.start(r, _.ry(i).prev(), _.ry(i).prev().tagName.toLowerCase());else {
                  var s = e.hasElement(t);
                  s && e.start(r, s, s.tagName.toLowerCase());
                }
              })));
            },
            prepare: function (e) {
              function t(e, t, r) {
                sd.para.heatmap_url ? _.loadScript({
                  success: function () {
                    setTimeout(function () {
                      "undefined" != typeof sa_jssdk_heatmap_render && (sa_jssdk_heatmap_render(sd, e, t, r), "object" == typeof console && "function" == typeof console.log && sd.heatmap_version && (sd.heatmap_version, sd.lib_version));
                    }, 0);
                  },
                  error: function () {},
                  type: "js",
                  url: sd.para.heatmap_url
                }) : logger.info("娌℃湁鎸囧畾heatmap_url鐨勮矾寰�");
              }

              var r = location.search.match(/sa-request-id=([^&#]+)/),
                  n = location.search.match(/sa-request-type=([^&#]+)/),
                  o = location.search.match(/sa-request-url=([^&#]+)/);
              r && r[0] && r[1] ? (heatmap.setNotice(o), _.sessionStorage.isSupport() && (o && o[0] && o[1] && sessionStorage.setItem("sensors_heatmap_url", decodeURIComponent(o[1])), sessionStorage.setItem("sensors_heatmap_id", r[1]), n && n[0] && n[1] ? "1" === n[1] || "2" === n[1] || "3" === n[1] ? (n = n[1], sessionStorage.setItem("sensors_heatmap_type", n)) : n = null : n = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem("sensors_heatmap_type") : null), t(r[1], n)) : _.sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id") ? (heatmap.setNotice(), t(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href)) : (e(), _.isObject(sd.para.heatmap) && (this.initHeatmap(), this.initScrollmap()));
            }
          };
          return sd.init = function (e) {
            return !(sd.readyState && sd.readyState >= 2) && void ((!e && has_declare || e && !has_declare) && (sd.readyState = 2, sd.initPara(e), sd._init()));
          }, sd._init = function () {
            heatmap.prepare(function () {
              app_js_bridge(), _.info.initPage(), sd.para.is_track_single_page && _.addSinglePageEvent(function (e) {
                e !== location.href && sd.quick("autoTrack", {
                  $url: location.href,
                  $referrer: e
                });
              }), store.init(), sd._q && _.isArray(sd._q) && sd._q.length > 0 && _.each(sd._q, function (e) {
                sd[e[0]].apply(sd, slice.call(e[1]));
              });
            });
          }, sd.init(), sd;
        } catch (e) {
          "object" == typeof console && console.log;
        }

        var e, t, r, n;
      }, module.exports = e();
    }, function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          n = window,
          o = t.UA = n.navigator.userAgent,
          i = t.IsAndroid = /Android|HTC/i.test(o),
          s = t.IsIPad = !i && (/iPad/i.test(o) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream,
          a = t.IsIPhone = !i && /iPod|iPhone/i.test(o),
          p = (t.IsIOS = s || a, t.IsNewIosApp = "object" === r(n.webkit) && !!n.webkit.messageHandlers && !!n.webkit.messageHandlers.webViewApp && !!n.webkit.messageHandlers.webViewApp.postMessage && "function" == typeof n.webkit.messageHandlers.webViewApp.postMessage);
      t.IsKEWLApp = i && "object" === r(n.android) && Object.prototype.hasOwnProperty.call(n.android, "openBoZhuPage") || !!p || /live\.me-ios/i.test(o);
    }, function (e, t, r) {
      "use strict";

      e.exports = function (e, t) {
        return function () {
          for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];

          return e.apply(t, r);
        };
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(0);

      function o(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }

      e.exports = function (e, t, r) {
        if (!t) return e;
        var i;
        if (r) i = r(t);else if (n.isURLSearchParams(t)) i = t.toString();else {
          var s = [];
          n.forEach(t, function (e, t) {
            null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function (e) {
              n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e));
            }));
          }), i = s.join("&");
        }

        if (i) {
          var a = e.indexOf("#");
          -1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + i;
        }

        return e;
      };
    }, function (e, t, r) {
      "use strict";

      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    }, function (e, t, r) {
      "use strict";

      (function (t) {
        var n = r(0),
            o = r(33),
            i = {
          "Content-Type": "application/x-www-form-urlencoded"
        };

        function s(e, t) {
          !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
        }

        var a,
            p = {
          adapter: (void 0 !== t && "[object process]" === Object.prototype.toString.call(t) ? a = r(10) : "undefined" != typeof XMLHttpRequest && (a = r(10)), a),
          transformRequest: [function (e, t) {
            return o(t, "Accept"), o(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
          }],
          transformResponse: [function (e) {
            if ("string" == typeof e) try {
              e = JSON.parse(e);
            } catch (e) {}
            return e;
          }],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          }
        };
        p.headers = {
          common: {
            Accept: "application/json, text/plain, */*"
          }
        }, n.forEach(["delete", "get", "head"], function (e) {
          p.headers[e] = {};
        }), n.forEach(["post", "put", "patch"], function (e) {
          p.headers[e] = n.merge(i);
        }), e.exports = p;
      }).call(this, r(32));
    }, function (e, t, r) {
      "use strict";

      var n = r(0),
          o = r(34),
          i = r(7),
          s = r(36),
          a = r(37),
          p = r(11);

      e.exports = function (e) {
        return new Promise(function (t, c) {
          var u = e.data,
              l = e.headers;
          n.isFormData(u) && delete l["Content-Type"];
          var f = new XMLHttpRequest();

          if (e.auth) {
            var d = e.auth.username || "",
                h = e.auth.password || "";
            l.Authorization = "Basic " + btoa(d + ":" + h);
          }

          if (f.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f.onreadystatechange = function () {
            if (f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
              var r = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null,
                  n = {
                data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                status: f.status,
                statusText: f.statusText,
                headers: r,
                config: e,
                request: f
              };
              o(t, c, n), f = null;
            }
          }, f.onabort = function () {
            f && (c(p("Request aborted", e, "ECONNABORTED", f)), f = null);
          }, f.onerror = function () {
            c(p("Network Error", e, null, f)), f = null;
          }, f.ontimeout = function () {
            c(p("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", f)), f = null;
          }, n.isStandardBrowserEnv()) {
            var g = r(38),
                m = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
            m && (l[e.xsrfHeaderName] = m);
          }

          if ("setRequestHeader" in f && n.forEach(l, function (e, t) {
            void 0 === u && "content-type" === t.toLowerCase() ? delete l[t] : f.setRequestHeader(t, e);
          }), e.withCredentials && (f.withCredentials = !0), e.responseType) try {
            f.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
          "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
            f && (f.abort(), c(e), f = null);
          }), void 0 === u && (u = null), f.send(u);
        });
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(35);

      e.exports = function (e, t, r, o, i) {
        var s = new Error(e);
        return n(s, t, r, o, i);
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(0);

      e.exports = function (e, t) {
        t = t || {};
        var r = {};
        return n.forEach(["url", "method", "params", "data"], function (e) {
          void 0 !== t[e] && (r[e] = t[e]);
        }), n.forEach(["headers", "auth", "proxy"], function (o) {
          n.isObject(t[o]) ? r[o] = n.deepMerge(e[o], t[o]) : void 0 !== t[o] ? r[o] = t[o] : n.isObject(e[o]) ? r[o] = n.deepMerge(e[o]) : void 0 !== e[o] && (r[o] = e[o]);
        }), n.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function (n) {
          void 0 !== t[n] ? r[n] = t[n] : void 0 !== e[n] && (r[n] = e[n]);
        }), r;
      };
    }, function (e, t, r) {
      "use strict";

      function n(e) {
        this.message = e;
      }

      n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }, n.prototype.__CANCEL__ = !0, e.exports = n;
    }, function (e, t) {
      var r = {
        utf8: {
          stringToBytes: function (e) {
            return r.bin.stringToBytes(unescape(encodeURIComponent(e)));
          },
          bytesToString: function (e) {
            return decodeURIComponent(escape(r.bin.bytesToString(e)));
          }
        },
        bin: {
          stringToBytes: function (e) {
            for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));

            return t;
          },
          bytesToString: function (e) {
            for (var t = [], r = 0; r < e.length; r++) t.push(String.fromCharCode(e[r]));

            return t.join("");
          }
        }
      };
      e.exports = r;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.KEWLApp = t.Base64 = void 0;
      var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          o = c(r(16)),
          i = c(r(22)),
          s = r(2),
          a = r(5),
          p = c(r(23));

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var u = window,
          l = u.document,
          f = a.UA.match(/live\.me-iOS\/(.+)/i) || window.LMUserAgent && window.LMUserAgent.match(/live\.me-iOS\/(.+)/i),
          d = a.IsKEWLApp && "object" === n(u.android) ? u.android : null,
          h = i.default.packageName,
          g = i.default.packageArea,
          m = i.default.packageInfo,
          y = h + "://";

      function _(e, t) {
        var r = "" + (h + new Date().getTime()) + Math.random().toString().substr(2);
        return u[r] = function (n) {
          var o = "";
          if ("string" == typeof n) try {
            o = JSON.parse(n);
          } catch (e) {
            o = n;
          } else o = n;
          var i = void 0;
          e && (i = t ? e.call(t, o) : e(o)), i || delete u[r];
        }, r;
      }

      function v() {
        if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getVerCode")) return d.getVerCode("");

        if (a.IsKEWLApp && a.IsIOS && f && f.length > 1) {
          var e = f[1].split("."),
              t = 0;
          return t += e[0] ? 1e7 * parseInt(e[0]) : 0, t += e[1] ? 1e5 * parseInt(e[1]) : 0, t += e[2] ? 1e4 * parseInt(e[2]) : 0, t += e[3] ? parseInt(e[3]) : 0;
        }

        return 0;
      }

      function w() {
        if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getVerName")) return d.getVerName("");

        if (a.IsKEWLApp && a.IsIOS && f && f.length > 1) {
          var e = f[1].split(";");
          return e.length > 1 ? e[0] : f[1];
        }

        return "";
      }

      window.onCloseH5Game || (window.onCloseH5Game = function () {
        return !1;
      }), window.getAudioGameBeamList || (window.getAudioGameBeamList = function () {
        return !1;
      }), window.endAudioGame || (window.endAudioGame = function () {
        return !1;
      }), window.stopAudioMusic || (window.stopAudioMusic = function () {
        return !1;
      }), window.startAudioMusic || (window.startAudioMusic = function () {
        return !1;
      });
      var I = {
        kewlversion: function () {
          return "0.1.1";
        },
        UAInfo: {
          UA: a.UA,
          IsAndroid: a.IsAndroid,
          IsIPad: a.IsIPad,
          IsIPhone: a.IsIPhone,
          IsIOS: a.IsIOS,
          IsNewIosApp: a.IsNewIosApp,
          IsKEWLApp: a.IsKEWLApp
        },
        PackageDetails: {
          packageName: h,
          packageArea: g,
          packageInfo: m,
          PREFIX: y
        },
        asyncCallbackName: _,
        tryOpen: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

          if (a.IsIOS) {
            if (!e && "" !== e) return;
            if (e = y + e, a.IsIOS) return void (u.location.href = e);
            var r = l.createElement("iframe");
            r.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;", r.src = e, l.body.appendChild(r), setTimeout(function () {
              l.body.removeChild(r);
            }, 150);
          }

          this.tryIntentOpen(e, t);
        },
        tryIntentOpen: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              r = l.createElement("a"),
              n = u.location.protocol + "//" + u.location.host + "/download/middlepage.html?" + u.location.search;
          t && (n = t);
          var o = "intent://" + e + "#Intent;scheme=" + h + ";package=" + g + ";S.browser_fallback_url=" + n + ";end";
          r.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;", r.href = o, r.id = "appIntent", l.body.appendChild(r), document.getElementById("appIntent").click(), l.body.removeChild(r);
        },
        iosPostMessage: function (e) {
          a.IsNewIosApp && "object" === (void 0 === e ? "undefined" : n(e)) && u.webkit.messageHandlers.webViewApp.postMessage(e);
        },
        openApp: function () {
          a.IsKEWLApp || this.tryOpen("");
        },
        openPersonalTriviaPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openPersonalTriviaPage("") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openPersonalTriviaPage"
          }) : this.tryOpen("openPersonalTriviaPage");
        },
        openBindAccountPage: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.openBindAccountPage(e) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openBindAccountPage",
            category: e
          }) : this.tryOpen("openBindAccountPage?category=" + e);
        },
        openCreateFAMPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openCreateFAMPage() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openCreateFAMPage"
          }) : this.tryOpen("openCreateFAMPage");
        },
        openFAMPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openFAMPage() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openFAMPage"
          }) : this.tryOpen("openFAMPage");
        },
        openAnalysePage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openAnalysePage() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openAnalysePage"
          }) : this.tryOpen("openAnalysePage");
        },
        openApplyVAnchorPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openApplyVAnchorPage() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openApplyVAnchorPage"
          }) : this.tryOpen("openApplyVAnchorPage");
        },
        openApplySAnchorPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openApplySAnchorPage() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openApplySAnchorPage"
          }) : this.tryOpen("openApplySAnchorPage");
        },
        openqrcodepage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openqrcodepage("0") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openqrcodepage"
          }) : this.tryOpen("openqrcodepage?source=0");
        },
        openShortVideoRecord: function (e) {
          if (a.IsKEWLApp && !a.IsIOS) d.openShortVideoRecord(e);else if (a.IsNewIosApp) try {
            this.iosPostMessage({
              type: "openShortVideoRecord",
              tag: e
            });
          } catch (e) {} else this.tryOpen("openShortVideoRecord?tag=" + e);
        },
        openActivityCenter: function () {
          if (a.IsKEWLApp && !a.IsIOS) d.openactivitycenter();else if (a.IsNewIosApp) try {
            this.iosPostMessage({
              type: "openactivitycenter"
            });
          } catch (e) {} else this.tryOpen("openactivitycenter");
        },
        openShortVideoPlayer: function (e) {
          if (a.IsKEWLApp && !a.IsIOS) d.openShortVideoPlayer(e);else if (a.IsNewIosApp) try {
            this.iosPostMessage({
              type: "openShortVideoPlayer",
              id: "" + e
            });
          } catch (e) {} else this.tryOpen("openShortVideoPlayer?id=" + e);
        },
        openGameVideoList: function () {
          if (a.IsKEWLApp && !a.IsIOS) d.openGameVideoList();else if (a.IsNewIosApp) try {
            this.iosPostMessage({
              type: "openGameVideoList"
            });
          } catch (e) {} else this.tryOpen("openGameVideoList");
        },
        openMyFamList: function (e) {
          if (e) {
            if (a.IsKEWLApp && !a.IsIOS) d.openmyfamlist(e);else if (a.IsNewIosApp) try {
              this.iosPostMessage({
                type: "openmyfamlist",
                filtertype: "" + e
              });
            } catch (e) {} else this.tryOpen("openmyfamlist?filtertype=" + e);
          } else if (a.IsKEWLApp && !a.IsIOS) d.openmyfamlist();else if (a.IsNewIosApp) try {
            this.iosPostMessage({
              type: "openmyfamlist"
            });
          } catch (e) {} else this.tryOpen("openmyfamlist");
        },
        openLivePage: function (e) {
          if (e = e || "", a.IsKEWLApp && !a.IsIOS) d.openLivePage("" + e);else if (a.IsNewIosApp) try {
            this.iosPostMessage({
              type: "openlivepage",
              id: "" + e
            });
          } catch (e) {} else this.tryOpen("openlivepage?id=" + e);
        },
        openReplayPage: function (e) {
          if (e = e || "", a.IsKEWLApp && !a.IsIOS) this.getVerCode() < 30080500 ? this.openLivePage(e) : d.openReplayPage("" + e);else if (a.IsNewIosApp) try {
            this.iosPostMessage({
              type: "openlivepage",
              id: "" + e
            });
          } catch (e) {} else this.tryOpen("openreplaypage?id=" + e);
        },
        openBoZhuPage: function (e) {
          e && (a.IsKEWLApp && !a.IsIOS ? d.openBoZhuPage("" + e) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openbozhupage",
            id: "" + e
          }) : this.tryOpen("openbozhupage?id=" + e));
        },
        openHomePage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openHomePage("") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openhomepage"
          }) : this.tryOpen("openhomepage");
        },
        openPersonalPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openPersonalPage() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openpersonalpage"
          }) : this.tryOpen("openpersonalpage");
        },
        openTaskListPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openTaskListPage() : this.tryOpen("opentasklistpage");
        },
        openCashPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openCashPage("") : this.tryOpen("opencashpage");
        },
        openPrepareLivePage: function () {
          if (a.IsKEWLApp && !a.IsIOS) {
            if (0 === arguments.length || 1 === arguments.length && "" === arguments[0]) d.openPrepareLivePage("");else {
              var e = Array.prototype.slice.call(arguments);
              if (e.length < 3) for (var t = 0, r = 3 - e.length; t < r; t += 1) e.push("");else e.length = 3;
              d.openPrepareLivePage.apply(d, e)();
            }
          } else a.IsNewIosApp ? this.iosPostMessage({
            type: "openpreparelivepage"
          }) : this.tryOpen("openpreparelivepage");
        },
        openIntroduceBroadcasterPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openIntroduceBroadcasterPage("") : this.tryOpen("openintroducebroadcasterpage");
        },
        openwebview: function (e) {
          !a.IsKEWLApp && o.default && this.tryOpen("openwebview?url=" + o.default.encode(e));
        },
        androidTryOpenAppOrDownload: function (e) {
          var t = this;
          setTimeout(function () {
            var r = new Date().valueOf();
            e && e.id ? t.openLivePage(e.id) : e.other && t[e.other.fn] ? t[e.other.fn].apply(t, e.other.param || []) : t.openApp(), r = new Date().valueOf(), setTimeout(function () {
              new Date().valueOf() - r < 1550 ? e.fail && e.fail() : e.success && e.success();
            }, 1500);
          }, 100);
        },
        openSearchTagPage: function (e) {
          a.IsKEWLApp && !a.IsIOS && e && d && d.openSearchTagPage && d.openSearchTagPage("", e);
        },
        closePage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.closePage("") : a.IsNewIosApp ? this.iosPostMessage({
            type: "close"
          }) : a.IsKEWLApp && a.IsIOS && this.tryOpen("close");
        },
        getVerCode: function () {
          return v();
        },
        getVerName: function () {
          return w();
        },
        setTitle: function (e) {
          e && "string" == typeof e && (o.default && a.IsKEWLApp && !a.IsIOS && this.getVerCode() >= 209e5 ? d.changeTitle(o.default.encode(e)) : o.default && a.IsKEWLApp && a.IsIOS && this.getVerCode() >= 1031e5 ? this.tryOpen("changeTitle?title=" + o.default.encode(e)) : o.default && a.IsNewIosApp ? this.iosPostMessage({
            type: "changetitle",
            title: o.default.encode(e)
          }) : document.title = e);
        },
        getAnchorInfo: function (e) {
          var t = void 0;
          if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getAnchorInfo")) t = "string" == typeof (t = d.getAnchorInfo()) && "null" !== t && "" !== t ? JSON.parse(t) : t, e && e(t);else if (a.IsKEWLApp && a.IsIOS) {
            var r = _(e);

            a.IsNewIosApp ? this.iosPostMessage({
              type: "getAnchorInfo",
              callback: r
            }) : this.tryOpen("getAnchorInfo?callback=" + r);
          }
        },
        getVideoInfo: function (e) {
          var t = void 0;
          if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getVideoInfo")) t = "string" == typeof (t = d.getVideoInfo()) && "null" !== t && "" !== t ? JSON.parse(t) : t, e && e(t);else if (a.IsKEWLApp && a.IsIOS) {
            var r = _(e);

            a.IsNewIosApp ? this.iosPostMessage({
              type: "getVideoInfo",
              callback: r
            }) : this.tryOpen("getVideoInfo?callback=" + r);
          }
        },
        getUserInfo: function (e) {
          p.default.getInstance().getUserInfo(e);
        },
        copy: function (e) {
          return !!e && (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getUserInfo") ? (d.copy("" + e), !0) : !!a.IsNewIosApp && (this.iosPostMessage({
            type: "copy",
            text: "" + e
          }), !0));
        },
        hasShare: a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && (Object.prototype.hasOwnProperty.call(d, "openShareMenu") || Object.prototype.hasOwnProperty.call(d, "showShareMenu")) || a.IsKEWLApp && a.IsIOS && v() >= 108e5,
        openShareMenu: function (e, t) {
          var r = {
            shareTypes: "0",
            url: window.location.href,
            content: document.querySelector('meta[name="description"]').content,
            image: u.location.protocol + "//" + u.location.hostname + "/images/logo.jpg",
            subject: document.title,
            isShowShare: !0
          };
          "object" === (void 0 === e ? "undefined" : n(e)) && (Object.keys(r).forEach(function (t) {
            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
          }), r.callback = _(t), this.hasShare && !a.IsIOS ? d.openShareMenu(JSON.stringify(r)) : this.hasShare && a.IsIOS && (r.type = "openShareMenu", this.iosPostMessage(r)));
        },
        getH5ActEntranceInfo: function (e) {
          var t = _(e);

          if (a.IsKEWLApp && !a.IsIOS) {
            var r = d.getH5ActEntranceInfo();
            e && e(r);
          } else a.IsNewIosApp ? this.iosPostMessage({
            type: "getH5ActEntranceInfo",
            callback: t
          }) : this.tryOpen("getH5ActEntranceInfo?callback=" + t);
        },
        changeH5ActEntranceSize: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.changeH5ActEntranceSize(e) : a.IsNewIosApp ? this.iosPostMessage({
            type: "changeH5ActEntranceSize",
            status: e
          }) : this.tryOpen("changeH5ActEntranceSize?status=" + e);
        },
        showShareMenu: function (e, t) {
          var r = {
            shareTypes: "0",
            url: window.location.href,
            content: document.querySelector('meta[name="description"]').content,
            image: u.location.protocol + "//" + u.location.hostname + "/images/logo.jpg",
            subject: document.title,
            isShowShare: !0
          };
          "object" === (void 0 === e ? "undefined" : n(e)) && (Object.keys(r).forEach(function (t) {
            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
          }), r.callback = _(t), this.hasShare && !a.IsIOS ? d.showShareMenu(JSON.stringify(r)) : this.hasShare && a.IsIOS && (r.type = "showShareMenu", this.iosPostMessage(r)));
        },
        openInBrowser: function (e) {
          a.IsKEWLApp && a.IsIOS && v() >= 2e7 ? this.iosPostMessage({
            type: "openurl",
            url: o.default.encode("" + e)
          }) : a.IsKEWLApp && d.openurl ? d.openurl(o.default.encode("" + e)) : window.location.href = "" + e;
        },
        openRechargePage: function (e) {
          var t = "";
          return t = "object" == (void 0 === e ? "undefined" : n(e)) ? JSON.stringify(e) : e, a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "openRechargePage") ? (d.openRechargePage(t), !0) : a.IsNewIosApp ? (this.iosPostMessage({
            type: "openrechargepage",
            str: t
          }), !0) : (this.tryOpen("openRechargePage?str=" + t), !1);
        },
        openCatchDoll: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openCatchDoll("") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openCatchDoll"
          }) : this.tryOpen("openCatchDoll");
        },
        openCatchLive: function (e, t) {
          a.IsKEWLApp && !a.IsIOS ? d.openCatchLive(e, t) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openCatchLive",
            vid: "" + e,
            videosource: "" + t
          }) : this.tryOpen("openCatchLive?vid=" + e + "&videosource=" + t);
        },
        openTopicList: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openTopicList("") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openTopicList"
          }) : this.tryOpen("openTopicList");
        },
        openTopicDetail: function (e, t) {
          a.IsKEWLApp && !a.IsIOS ? d.openTopicDetail(e, t) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openTopicDetail",
            vid: "" + e,
            videosource: "" + t
          }) : this.tryOpen("openTopicDetail?topicId=" + e + "&topicName=" + t);
        },
        openShortVideo: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openShortVideo("") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openShortVideo"
          }) : this.tryOpen("openShortVideo");
        },
        openPlayground: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openPlayground("") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openPlayground"
          }) : this.tryOpen("openPlayground");
        },
        getExtraString: function (e) {
          var t = void 0;
          if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getExtraString")) t = "string" == typeof (t = d.getExtraString()) && "null" !== t && "" !== t ? JSON.parse(t) : t, e && e(t);else if (a.IsKEWLApp && a.IsIOS && this.getVerCode() >= 104e5) {
            var r = _(e);

            a.IsNewIosApp ? this.iosPostMessage({
              type: "getExtraString",
              callback: r
            }) : this.tryOpen("getExtraString?callback=" + r);
          }
        },
        performPhoneLogin: function (e, t, r) {
          var n = {
            code: e,
            phoneNum: t,
            password: r,
            type: "performphonelogin"
          };
          a.IsKEWLApp && !a.IsIOS ? d.performPhoneLogin(e, t, r) : a.IsNewIosApp && this.iosPostMessage(n);
        },
        openLetterPage: function (e) {
          var t = "{gid=" + e + "}";
          return a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "openLetterPage") ? (d.openLetterPage(t), !0) : a.IsNewIosApp ? (this.iosPostMessage({
            type: "openLetterPage",
            gid: e
          }), !0) : (this.tryOpen("openLetterPage"), !1);
        },
        robRedPacket: function (e) {
          var t = "{packetid=" + e + "}";
          if (a.IsKEWLApp && !a.IsIOS) d.robRedPacket(t);else {
            if (a.IsNewIosApp) return this.iosPostMessage({
              type: "robRedPacket",
              packetid: e
            }), !0;
            this.tryOpen("robRedPacket");
          }
          return !1;
        },
        openFamilyManagerPage: function (e) {
          return a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "openFamilyManagerPage") ? (d.openFamilyManagerPage(e.toString(), 6), !0) : a.IsNewIosApp ? (this.iosPostMessage({
            type: "openfamilymanagerpage",
            gid: e,
            source: 6
          }), !0) : (this.tryOpen("openfamilymanagerpage"), !1);
        },
        getApiDomain: function (e, t) {
          var r = void 0;
          if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getApiDomain")) r = "string" == typeof (r = d.getApiDomain(e)) && "null" !== r && "" !== r ? JSON.parse(r) : r, t && t(r);else if (a.IsKEWLApp && a.IsIOS && this.getVerCode() >= 104e5) {
            var o = _(t);

            a.IsNewIosApp ? this.iosPostMessage({
              type: "getApiDomain",
              domain: e,
              callback: o
            }) : this.tryOpen("getApiDomain?domain=" + e + "&callback=" + o);
          }
        },
        getBindInfo: function (e) {
          var t = void 0;
          if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getBindInfo")) t = "string" == typeof (t = d.getBindInfo()) && "null" !== t && "" !== t ? JSON.parse(t) : t, e && e(t);else if (a.IsKEWLApp && a.IsIOS && this.getVerCode() >= 104e5) {
            var r = _(e);

            a.IsNewIosApp ? this.iosPostMessage({
              type: "getBindInfo",
              callback: r
            }) : this.tryOpen("getBindInfo?callback=" + r);
          }
        },
        logoutApp: function () {
          a.IsKEWLApp && !a.IsIOS ? d.logoutApp() : a.IsNewIosApp ? this.iosPostMessage({
            type: "logoutApp"
          }) : this.tryOpen("logoutApp");
        },
        openUrlInternal: function (e, t, r) {
          var i = t || !0,
              s = o.default.encode(e);
          if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "openUrlInternal")) return d.openUrlInternal(s, i), !0;

          if (a.IsNewIosApp) {
            var p = {
              type: "openUrlInternal",
              url: s,
              neadhead: i
            };
            return r && (p.transition = r), this.iosPostMessage(p), !0;
          }

          return !1;
        },
        openUrlFullScreen: function (e, t) {
          var r = !!t,
              i = o.default.encode(e);
          if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "openUrlFullScreen")) return d.openUrlFullScreen(i, r), !0;

          if (a.IsNewIosApp) {
            var s = {
              type: "openUrlFullScreen",
              url: i,
              neadhead: r
            };
            return this.iosPostMessage(s), !0;
          }

          return !1;
        },
        openSendGifts: function (e, t, r) {
          var n = e || "",
              o = t || "",
              i = r || "";
          this.versionCompare("4.3.30") ? a.IsKEWLApp && !a.IsIOS ? d.openSendGifts(n, o, i) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openSendGifts",
            tabid: "" + n,
            activityid: "" + o,
            source: "" + i
          }) : this.tryOpen("openSendGifts?tabid=" + n + "&activityid=" + o + "&source=" + i) : a.IsKEWLApp && !a.IsIOS ? d.openSendGifts(n, o) : a.IsNewIosApp && (this.iosPostMessage({
            type: "openSendGifts",
            tabid: "" + n,
            activityid: "" + o
          }), this.tryOpen("openSendGifts?tabid=" + n + "&activityid=" + o));
        },
        updateStar: function (e, t) {
          var r = e || "",
              n = t || "";
          a.IsKEWLApp && !a.IsIOS ? d.updatestar(r, n) : a.IsNewIosApp ? this.iosPostMessage({
            type: "updatestar",
            star_num: "" + r,
            star_sign: "" + n
          }) : this.tryOpen("updatestar?star_num=" + r + "&star_sign=" + n);
        },
        openFirstRechargeCommodity: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.openFirstRechargeCommodity(e || "") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openFirstRechargeCommodity",
            source: e || ""
          }) : this.tryOpen("openFirstRechargeCommodity?source=" + e);
        },
        getFirstRechargeInfos: function (e) {
          var t = void 0;
          if (a.IsKEWLApp && !a.IsIOS) t = "string" == typeof (t = d.getFirstRechargeInfos()) && "null" !== t && "" !== t ? JSON.parse(t) : t, e && e(t);else {
            var r = _(e);

            a.IsNewIosApp ? this.iosPostMessage({
              type: "getFirstRechargeInfos",
              callback: r
            }) : this.tryOpen("getFirstRechargeInfos?callback=" + r);
          }
        },
        openChargePanel: function (e) {
          a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "openChargePanel") ? d.openChargePanel(JSON.stringify({
            srcName: e
          })) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openchargepanel",
            srcName: e
          }) : this.tryOpen("openChargePanel?srcName=" + e);
        },
        getDiscountRechargeCurrency: function (e) {
          var t = void 0;
          if (a.IsKEWLApp && !a.IsIOS) t = "string" == typeof (t = d.getDiscountRechargeCurrency()) && "null" !== t && "" !== t ? JSON.parse(t) : t, e && e(t);else {
            var r = _(e);

            a.IsNewIosApp ? this.iosPostMessage({
              type: "getDiscountRechargeCurrency",
              callback: r
            }) : this.tryOpen("getDiscountRechargeCurrency?callback=" + r);
          }
        },
        openDiscountRecharge: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.openDiscountRecharge(e || "") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openDiscountRecharge",
            srcName: e || ""
          }) : this.tryOpen("openDiscountRecharge?srcName=" + e);
        },
        openDiscountRechargeKeyboard: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.openDiscountRechargeKeyboard(e || "") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openDiscountRechargeKeyboard",
            text: e || ""
          }) : this.tryOpen("openDiscountRechargeKeyboard?text=" + e);
        },
        refreshGold: function (e) {
          a.IsKEWLApp && a.IsAndroid && d.refreshGold && d.refreshGold(e);
        },
        getThemeInfo: function (e) {
          var t = void 0;
          if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getThemeInfo")) t = "string" == typeof (t = d.getThemeInfo()) && "null" !== t && "" !== t ? JSON.parse(t) : t, e && e(t);else if (a.IsKEWLApp && a.IsIOS) {
            var r = _(e);

            a.IsNewIosApp ? this.iosPostMessage({
              type: "getThemeInfo",
              callback: r
            }) : this.tryOpen("getThemeInfo?callback=" + r);
          }
        },
        getRequest: function (e, t) {
          var r = void 0,
              o = _(t);

          a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getRequest") ? (r = "string" == typeof (r = d.getRequest(e, o)) && "null" !== r && "" !== r ? JSON.parse(r) : r, t && t(r)) : a.IsKEWLApp && a.IsIOS && this.getVerCode() >= 104e5 && (a.IsNewIosApp ? this.iosPostMessage({
            type: "getRequest",
            info: e,
            callback: o
          }) : this.tryOpen("getRequest?info=" + e + "&callback=" + o));
        },
        pageFinish: function (e, t) {
          var r = e || "",
              n = t || "";
          a.IsKEWLApp && !a.IsIOS && "function" == typeof d.pageFinish ? d.pageFinish(r, n) : a.IsNewIosApp ? this.iosPostMessage({
            type: "pageFinish",
            url: r,
            performance: n
          }) : this.tryOpen("pageFinish?url=" + r + "&performance=" + n);
        },
        pageShow: function (e) {
          var t = e || "";
          a.IsKEWLApp && !a.IsIOS ? d.pageShow(t) : a.IsNewIosApp ? this.iosPostMessage({
            type: "pageShow",
            url: t
          }) : this.tryOpen("pageShow?url=" + t);
        },
        getPackgetInfo: function () {
          return m;
        },
        doTmxProfile: function (e) {
          var t = void 0;
          if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "doTmxProfile")) t = d.doTmxProfile(), e && e(t);else if (a.IsKEWLApp && a.IsIOS) {
            var r = _(e);

            a.IsNewIosApp ? this.iosPostMessage({
              type: "doTmxProfile",
              callback: r
            }) : this.tryOpen("doTmxProfile?callback=" + r);
          }
        },
        openVIPService: function (e, t, r, o) {
          a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "openVIPService") ? d.openVIPService(e, t, r, o) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openVIPService",
            orderId: "" + e,
            channel: "" + t,
            errorCode: "" + r,
            errorMsg: "" + o
          }) : this.tryOpen("openVIPService?tabid=" + e + "&channel=" + t + "&errorCode=" + r + "&errorMsg=" + o);
        },
        versionCompare: function (e) {
          var t = w();
          if (null === t) return !1;
          var r = parseFloat(t),
              n = parseFloat(e),
              o = t.replace(r + ".", ""),
              i = e.replace(n + ".", "");
          return r > n || !(r < n) && o >= i;
        },
        onFamilyActStart: function (e) {
          var t = e || null;
          a.IsKEWLApp && !a.IsIOS ? d.onFamilyActStart(t) : a.IsNewIosApp ? this.iosPostMessage({
            type: "onFamilyActStart",
            jsonString: t
          }) : this.tryOpen("onFamilyActStart?jsonString=" + t);
        },
        onFamilyActEnd: function (e) {
          var t = e || null;
          a.IsKEWLApp && !a.IsIOS ? d.onFamilyActEnd(t) : a.IsNewIosApp ? this.iosPostMessage({
            type: "onFamilyActEnd",
            jsonString: t
          }) : this.tryOpen("onFamilyActEnd?jsonString=" + t);
        },
        openFansTagPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openFansTagPage("") : a.IsNewIosApp ? this.iosPostMessage({
            type: "openFansTagPage"
          }) : this.tryOpen("openFansTagPage");
        },
        hostMission: function (e, t) {
          var r = e || null,
              n = void 0;
          if (a.IsKEWLApp && !a.IsIOS) n = d.hostmission(r), t && t(n);else if (a.IsNewIosApp) {
            var o = _(t);

            this.iosPostMessage({
              type: "hostmission",
              jsonString: r,
              callback: o
            });
          } else this.tryOpen("hostmission?jsonString=" + r);
        },
        onSettleAccount: function (e) {
          var t = e || null;
          a.IsKEWLApp && !a.IsIOS ? d.onSettleAccount(t) : a.IsNewIosApp ? this.iosPostMessage({
            type: "onSettleAccount",
            balance: t
          }) : this.tryOpen("onSettleAccount?balance=" + t);
        },
        openPrivateChatroom: function (e, t) {
          var r = e || null,
              n = void 0;
          if (a.IsKEWLApp && !a.IsIOS) n = d.openprivatechatroom(r), t && t(n);else if (a.IsNewIosApp) {
            var o = _(t);

            this.iosPostMessage({
              type: "openprivatechatroom",
              chatinfo: r,
              callback: o
            });
          } else this.tryOpen("openprivatechatroom?jsonString=" + r);
        },
        onApiAuthorization: function () {
          a.IsKEWLApp && !a.IsIOS ? d.onApiAuthorization() : a.IsNewIosApp ? this.iosPostMessage({
            type: "onApiAuthorization"
          }) : this.tryOpen("onApiAuthorization");
        },
        autoZoomAndClipImage: function (e, t) {
          var r = _(t);

          if (a.IsKEWLApp && !a.IsIOS) {
            e.callback = r;
            var n = d.autoZoomAndClipImage(JSON.stringify(e));
            n = "string" == typeof n && "null" !== n && "" !== n ? JSON.parse(n) : n, t && t(n);
          } else a.IsKEWLApp && a.IsIOS && this.getVerCode() >= 104e5 && (a.IsNewIosApp ? (e.type = "autozoomandclipimage", e.callback = r, this.iosPostMessage(e)) : this.tryOpen("autoZoomAndClipImage?ver=" + e.ver + "&images=" + JSON.stringify(e.images) + "&callback=" + r));
        },
        openBagPage: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.openBagPage(e) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openBagPage",
            effectType: "" + e
          }) : this.tryOpen("openBagPage?effectType=" + e);
        },
        getAppInfo: function (e) {
          var t = void 0,
              r = _(e);

          a.IsKEWLApp && !a.IsIOS ? (t = d.getappinfo(), e && e(t)) : a.IsNewIosApp ? this.iosPostMessage({
            type: "getappinfo",
            callback: r
          }) : this.tryOpen("getappinfo?callback=" + r);
        },
        refreshNative: function (e, t) {
          var r = t || "";
          a.IsKEWLApp && !a.IsIOS ? d.refreshNative(e, r) : a.IsNewIosApp ? this.iosPostMessage({
            type: "refreshNative",
            refreshType: e,
            jsonBean: r
          }) : this.tryOpen("refreshNative?refreshType=" + e + "&jsonBean=" + r);
        },
        purchaseGuard: function () {
          a.IsKEWLApp && !a.IsIOS ? d.purchaseGuard() : a.IsNewIosApp ? this.iosPostMessage({
            type: "purchaseGuard"
          }) : this.tryOpen("purchaseGuard");
        },
        openFamilyList: function (e, t) {
          var r = e || null,
              n = void 0;
          if (a.IsKEWLApp && !a.IsIOS) n = d.openFamilyList(r), t && t(n);else if (a.IsNewIosApp) {
            var o = _(t);

            this.iosPostMessage({
              type: "openFamilyList",
              jsonString: r,
              callback: o
            });
          } else this.tryOpen("openFamilyList?jsonString=" + r);
        },
        updateH5Page: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.updateH5Page(e) : a.IsNewIosApp ? this.iosPostMessage({
            type: "updateH5Page",
            fun: e
          }) : this.tryOpen("updateH5Page");
        },
        openCustomerService: function (e, t) {
          var r = e || "",
              n = void 0;
          if (a.IsKEWLApp && !a.IsIOS) n = d.openCustomerService(r), t && t(n);else if (a.IsNewIosApp) {
            _(t);

            this.iosPostMessage({
              type: "openCustomerService",
              params: r
            });
          } else this.tryOpen("openCustomerService?params=" + r);
        },
        openEditPage: function (e, t) {
          var r = e || "",
              n = void 0;
          if (a.IsKEWLApp && !a.IsIOS) n = d.openEditPage(r), t && t(n);else if (a.IsNewIosApp) {
            var o = _(t);

            this.iosPostMessage({
              type: "openEditPage",
              jsonString: r,
              callback: o
            });
          } else this.tryOpen("openEditPage?jsonString=" + r);
        },
        hideBackButton: function (e, t) {
          var r = e || "";

          if (a.IsNewIosApp) {
            var n = _(t);

            this.iosPostMessage({
              type: "hideBackButton",
              jsonString: r,
              callback: n
            });
          }
        },
        opendynamicdetail: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.opendynamicdetail("" + e) : a.IsNewIosApp ? this.iosPostMessage({
            type: "opendynamicdetail",
            id: "" + e
          }) : this.tryOpen("opendynamicdetail?id=" + e);
        },
        opendynamiclist: function () {
          a.IsKEWLApp && !a.IsIOS ? d.opendynamiclist() : a.IsNewIosApp ? this.iosPostMessage({
            type: "opendynamiclist"
          }) : this.tryOpen("opendynamiclist");
        },
        opendynamicrelease: function () {
          a.IsKEWLApp && !a.IsIOS ? d.opendynamicrelease() : a.IsNewIosApp ? this.iosPostMessage({
            type: "opendynamicrelease"
          }) : this.tryOpen("opendynamicrelease");
        },
        kewlBridge: function (e, t, r) {
          var n = t || "",
              o = void 0;
          if (a.IsKEWLApp && !a.IsIOS) o = d[e](n), r && r(o);else if (a.IsNewIosApp) {
            var i = _(r);

            this.iosPostMessage({
              type: e,
              jsonString: n,
              callback: i
            });
          }
        },
        kewlBridgeV2: function (e, t, r, n) {
          var o = t || {},
              i = void 0,
              s = (r || []).map(function (e) {
            return void 0 !== o[e] ? o[e] : "";
          });
          if (a.IsKEWLApp && !a.IsIOS) i = d[e].apply(d, function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];

              return r;
            }

            return Array.from(e);
          }(s)), n && n(i);else if (a.IsNewIosApp) {
            var p = _(n);

            this.iosPostMessage(Object.assign({
              type: e,
              callback: p
            }, o));
          }
        },
        audioGameBridge: function (e, t, r) {
          var n = t || "",
              o = void 0;
          if (a.IsKEWLApp && !a.IsIOS) o = d[e](n), r && r(o);else if (a.IsNewIosApp) {
            var i = _(r);

            this.iosPostMessage({
              type: e,
              jsonString: n,
              callback: i
            });
          }
        },
        spellGroupPay: function (e, t, r) {
          a.IsKEWLApp && !a.IsIOS ? d.spellGroupPay(e, t, r) : a.IsNewIosApp ? this.iosPostMessage({
            type: "spellGroupPay",
            productId: e,
            groupId: t,
            gold: r
          }) : this.tryOpen("spellGroupPay?productId=" + e + "&groupId=" + t + "&gold=" + r);
        },
        showInviteUserPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.showInviteUserPage() : a.IsNewIosApp ? this.iosPostMessage({
            type: "showInviteUserPage"
          }) : this.tryOpen("showInviteUserPage");
        },
        firstGiftGive: function () {
          a.IsKEWLApp && !a.IsIOS ? d.firstGiftGive() : a.IsNewIosApp ? this.iosPostMessage({
            type: "firstGiftGive"
          }) : this.tryOpen("firstGiftGive");
        },
        continuousWatchLiveThirtySeconds: function () {
          a.IsKEWLApp && !a.IsIOS ? d.continuousWatchLiveThirtySeconds() : a.IsNewIosApp ? this.iosPostMessage({
            type: "continuousWatchLiveThirtySeconds"
          }) : this.tryOpen("continuousWatchLiveThirtySeconds");
        },
        openFirstRechargeTaskPage: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openFirstRechargeTaskPage() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openFirstRechargeTaskPage"
          }) : this.tryOpen("openFirstRechargeTaskPage");
        },
        newbieTasksPageGoBack: function () {
          a.IsKEWLApp && !a.IsIOS ? d.newbieTasksPageGoBack() : a.IsNewIosApp ? this.iosPostMessage({
            type: "newbieTasksPageGoBack"
          }) : this.tryOpen("newbieTasksPageGoBack");
        },
        getNativeProductInfo: function (e) {
          var t = void 0;
          if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, "getNativeProductInfo")) t = "string" == typeof (t = d.getNativeProductInfo("")) && "null" !== t && "" !== t ? JSON.parse(t) : t, e && e(t);else if (a.IsKEWLApp && a.IsIOS) {
            var r = _(e);

            a.IsNewIosApp ? this.iosPostMessage({
              type: "getNativeProductInfo",
              callback: r
            }) : this.tryOpen("getNativeProductInfo?callback=" + r);
          }
        },
        openInputMethod: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openInputMethod() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openInputMethod"
          }) : this.tryOpen("openInputMethod");
        },
        showGiftPanel: function (e, t, r) {
          var n = e >= 0 ? e : "",
              o = t || "",
              i = r || 1;
          a.IsKEWLApp && !a.IsIOS ? (d.closePage(""), d.showGiftPanel(n, o, i)) : a.IsNewIosApp ? this.iosPostMessage({
            type: "showGiftPanel",
            tabType: "" + n,
            activityid: "" + o,
            isNeedOpen: "" + i
          }) : this.tryOpen("showGiftPanel?tabType=" + n + "&activityid=" + o, "&isNeedOpen=" + i);
        },
        openLiveRoom: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openLiveRoom() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openLiveRoom"
          }) : this.tryOpen("openLiveRoom");
        },
        openStickerMenu: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openStickerMenu() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openStickerMenu"
          }) : this.tryOpen("openStickerMenu");
        },
        openBeamMenu: function (e, t) {
          var r = {
            role: e,
            vtype: t
          };
          a.IsKEWLApp && !a.IsIOS ? d.openBeamMenu(JSON.stringify(r)) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openBeamMenu",
            role: e,
            vtype: t
          }) : this.tryOpen("openBeamMenu?jsonString=" + JSON.stringify(r));
        },
        taskfinish: function (e, t) {
          a.IsKEWLApp && !a.IsIOS ? d.taskfinish(e, t) : a.IsNewIosApp ? this.iosPostMessage({
            type: "taskfinish",
            task: e || "",
            info: t || 0
          }) : this.tryOpen("taskfinish?task=" + e + "&info=" + t);
        },
        openSystemSetting: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openSystemSetting() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openSystemSetting"
          }) : this.tryOpen("openSystemSetting");
        },
        openLiveH5Page: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.openLiveH5Page(e) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openLiveH5Page",
            url: e
          }) : this.tryOpen("openLiveH5Page?url=" + e);
        },
        openShareLivePanel: function (e, t, r, n) {
          var o = {
            tabIndex: e,
            vtype: t,
            content: r,
            context: n
          };
          a.IsKEWLApp && !a.IsIOS ? d.openShareLivePanel(JSON.stringify(o)) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openShareLivePanel",
            tabIndex: e,
            vtype: t,
            content: r,
            context: n
          }) : this.tryOpen("openShareLivePanel?jsonString=" + JSON.stringify(o));
        },
        startRechargeActivity: function (e, t) {
          var r = "string" == typeof e ? e : JSON.stringify(e),
              n = t && !window.isNaN(t) ? t - 0 : "";
          if (a.IsKEWLApp && !a.IsIOS) "" === n ? d.startRechargeActivity(r) : d.startRechargeActivityV2(r, n);else if (a.IsNewIosApp) {
            var o = {
              type: "startRechargeActivity",
              product_id: r
            };
            n && (o.source = n), this.iosPostMessage(o);
          } else this.tryOpen("startRechargeActivity?product_id=" + r);
        },
        openLegionTask: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.openLegionTask(e) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openLegionTask",
            legionID: e
          }) : this.tryOpen("openLegionTask?legionID=" + e);
        },
        openLegionDetail: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.openLegionDetail(e) : a.IsNewIosApp ? this.iosPostMessage({
            type: "openLegionDetail",
            legionId: e
          }) : this.tryOpen("openLegionDetail?legionId=" + e);
        },
        openLegionRoom: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openLegionRoom() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openLegionRoom"
          }) : this.tryOpen("openLegionRoom");
        },
        openLegionSharePanel: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openLegionSharePanel() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openLegionSharePanel"
          }) : this.tryOpen("openLegionSharePanel");
        },
        openLegionDynamic: function () {
          a.IsKEWLApp && !a.IsIOS ? d.openLegionDynamic() : a.IsNewIosApp ? this.iosPostMessage({
            type: "openLegionDynamic"
          }) : this.tryOpen("openLegionDynamic");
        },
        getNativeData: function (e, t) {
          if (e) {
            var r = e || "",
                o = void 0;
            if (a.IsKEWLApp && !a.IsIOS && "object" === (void 0 === d ? "undefined" : n(d)) && Object.prototype.hasOwnProperty.call(d, r)) o = "string" == typeof (o = d[r]()) && "null" !== o && "" !== o ? JSON.parse(o) : o, t && t(o);else if (a.IsKEWLApp && a.IsIOS) {
              var i = _(t);

              a.IsNewIosApp ? this.iosPostMessage({
                type: r,
                callback: i
              }) : this.tryOpen(r + "?callback=" + i);
            }
          }
        },
        sendGift: function (e, t) {
          var r = _(t);

          a.IsKEWLApp && !a.IsIOS ? (e.fnName = r, d.sendGift(JSON.stringify(e))) : a.IsNewIosApp ? this.iosPostMessage({
            type: "sendGift",
            obj: e,
            callback: r
          }) : this.tryOpen("sendGift?obj=" + e + "&callback=" + r);
        },
        sendSayHiMsg: function (e) {
          a.IsKEWLApp && !a.IsIOS ? d.sendSayHiMsg(JSON.stringify(e)) : a.IsNewIosApp ? this.iosPostMessage({
            type: "sendSayHiMsg",
            params: e
          }) : this.tryOpen("sendSayHiMsg?params=" + e);
        },
        tryOpenAppByPath: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              r = JSON.parse(JSON.stringify(e));
          delete r.other, delete r.path;
          var n = this;
          setTimeout(function () {
            if (n._setTimeEvent(function (t) {
              e.success && e.success(t);
            }, function (t) {
              e.fail && e.fail(t);
            }, function (t) {
              e.unknown && e.unknown(t);
            }, 2e3), e.other && n[e.other.fn]) n[e.other.fn].apply(n, e.other.param || []);else if (e.path) {
              var o = (0, s.json2url)(r) || "",
                  i = e.path + "?" + o;
              n.tryOpen(i, t);
            } else n.openHomePage();
          }, 100);
        },
        _setTimeEvent: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {},
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1500,
              o = !1,
              i = "hidden",
              s = "visibilitychange";
          void 0 !== document.hidden ? (i = "hidden", s = "visibilitychange") : void 0 !== document.msHidden ? (i = "msHidden", s = "msvisibilitychange") : void 0 !== document.webkitHidden && (i = "webkitHidden", s = "webkitvisibilitychange");

          var a = function t(n) {
            o = !0, document[i] || n.hidden || "hidden" == document.visibilityState ? e && e() : r && r(), document.removeEventListener(s, t);
          };

          document.addEventListener(s, a, !1), setTimeout(function () {
            o || (document.removeEventListener(s, a), document.hidden || o ? r && r() : t && t(), o = !0);
          }, n);
        }
      };
      Object.defineProperties(I, {
        isKEWLApp: {
          get: function () {
            return a.IsKEWLApp;
          }
        }
      }), a.IsKEWLApp && document.addEventListener("DOMContentLoaded", function () {
        I.setTitle(document.title);
      }, !1), window.Base64 = o.default, window.self == window.top ? window.KEWLApp = I : window.KEWLApp = window.top.KEWLApp ? window.top.KEWLApp : I, t.Base64 = o.default, t.KEWLApp = I;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = window,
          o = window.Base64,
          i = void 0,
          s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      if (e.exports) try {
        i = r(17).Buffer;
      } catch (e) {}

      var a = function (e) {
        for (var t = {}, r = 0, n = e.length; r < n; r++) t[e.charAt(r)] = r;

        return t;
      }(s),
          p = String.fromCharCode,
          c = function (e) {
        if (e.length < 2) {
          var t = e.charCodeAt(0);
          return t < 128 ? e : t < 2048 ? p(192 | t >>> 6) + p(128 | 63 & t) : p(224 | t >>> 12 & 15) + p(128 | t >>> 6 & 63) + p(128 | 63 & t);
        }

        var r = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return p(240 | r >>> 18 & 7) + p(128 | r >>> 12 & 63) + p(128 | r >>> 6 & 63) + p(128 | 63 & r);
      },
          u = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
          l = function (e) {
        return e.replace(u, c);
      },
          f = function (e) {
        var t = [0, 2, 1][e.length % 3],
            r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
        return [s.charAt(r >>> 18), s.charAt(r >>> 12 & 63), t >= 2 ? "=" : s.charAt(r >>> 6 & 63), t >= 1 ? "=" : s.charAt(63 & r)].join("");
      },
          d = window.btoa ? function (e) {
        return window.btoa(e);
      } : function (e) {
        return e.replace(/[\s\S]{1,3}/g, f);
      },
          h = i ? function (e) {
        return (e.constructor === i.constructor ? e : new i(e)).toString("base64");
      } : function (e) {
        return d(l(e));
      },
          g = function (e, t) {
        return t ? h(String(e)).replace(/[+\/]/g, function (e) {
          return "+" == e ? "-" : "_";
        }).replace(/=/g, "") : h(String(e));
      },
          m = new RegExp(["[脌-脽][聙-驴]", "[脿-茂][聙-驴]{2}", "[冒-梅][聙-驴]{3}"].join("|"), "g"),
          y = function (e) {
        switch (e.length) {
          case 4:
            var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
            return p(55296 + (t >>> 10)) + p(56320 + (1023 & t));

          case 3:
            return p((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

          default:
            return p((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
        }
      },
          _ = function (e) {
        return e.replace(m, y);
      },
          v = function (e) {
        var t = e.length,
            r = t % 4,
            n = (t > 0 ? a[e.charAt(0)] << 18 : 0) | (t > 1 ? a[e.charAt(1)] << 12 : 0) | (t > 2 ? a[e.charAt(2)] << 6 : 0) | (t > 3 ? a[e.charAt(3)] : 0),
            o = [p(n >>> 16), p(n >>> 8 & 255), p(255 & n)];
        return o.length -= [0, 0, 2, 1][r], o.join("");
      },
          w = n.atob ? function (e) {
        return n.atob(e);
      } : function (e) {
        return e.replace(/[\s\S]{1,4}/g, v);
      },
          I = i ? function (e) {
        return (e.constructor === i.constructor ? e : new i(e, "base64")).toString();
      } : function (e) {
        return _(w(e));
      },
          b = function (e) {
        return I(String(e).replace(/[-_]/g, function (e) {
          return "-" == e ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
      },
          S = {
        VERSION: "2.1.9",
        atob: w,
        btoa: d,
        fromBase64: b,
        toBase64: g,
        utob: l,
        encode: g,
        encodeURI: function (e) {
          return g(e, !0);
        },
        btou: _,
        decode: b,
        noConflict: function () {
          var e = n.Base64;
          return n.Base64 = o, e;
        }
      };

      t.default = S;
    }, function (e, t, r) {
      "use strict";

      (function (e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var n = r(19),
            o = r(20),
            i = r(21);

        function s() {
          return p.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }

        function a(e, t) {
          if (s() < t) throw new RangeError("Invalid typed array length");
          return p.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = p.prototype : (null === e && (e = new p(t)), e.length = t), e;
        }

        function p(e, t, r) {
          if (!(p.TYPED_ARRAY_SUPPORT || this instanceof p)) return new p(e, t, r);

          if ("number" == typeof e) {
            if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
            return l(this, e);
          }

          return c(this, e, t, r);
        }

        function c(e, t, r, n) {
          if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, r, n) {
            if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
            if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
            t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
            p.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = p.prototype : e = f(e, t);
            return e;
          }(e, t, r, n) : "string" == typeof t ? function (e, t, r) {
            "string" == typeof r && "" !== r || (r = "utf8");
            if (!p.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
            var n = 0 | h(t, r),
                o = (e = a(e, n)).write(t, r);
            o !== n && (e = e.slice(0, o));
            return e;
          }(e, t, r) : function (e, t) {
            if (p.isBuffer(t)) {
              var r = 0 | d(t.length);
              return 0 === (e = a(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
            }

            if (t) {
              if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? a(e, 0) : f(e, t);
              if ("Buffer" === t.type && i(t.data)) return f(e, t.data);
            }

            var n;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
          }(e, t);
        }

        function u(e) {
          if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
          if (e < 0) throw new RangeError('"size" argument must not be negative');
        }

        function l(e, t) {
          if (u(t), e = a(e, t < 0 ? 0 : 0 | d(t)), !p.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) e[r] = 0;
          return e;
        }

        function f(e, t) {
          var r = t.length < 0 ? 0 : 0 | d(t.length);
          e = a(e, r);

          for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];

          return e;
        }

        function d(e) {
          if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
          return 0 | e;
        }

        function h(e, t) {
          if (p.isBuffer(e)) return e.length;
          if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
          "string" != typeof e && (e = "" + e);
          var r = e.length;
          if (0 === r) return 0;

          for (var n = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;

            case "utf8":
            case "utf-8":
            case void 0:
              return K(e).length;

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;

            case "hex":
              return r >>> 1;

            case "base64":
              return B(e).length;

            default:
              if (n) return K(e).length;
              t = ("" + t).toLowerCase(), n = !0;
          }
        }

        function g(e, t, r) {
          var n = e[t];
          e[t] = e[r], e[r] = n;
        }

        function m(e, t, r, n, o) {
          if (0 === e.length) return -1;

          if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
            if (o) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!o) return -1;
            r = 0;
          }

          if ("string" == typeof t && (t = p.from(t, n)), p.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, n, o);
          if ("number" == typeof t) return t &= 255, p.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, o);
          throw new TypeError("val must be string, number or Buffer");
        }

        function y(e, t, r, n, o) {
          var i,
              s = 1,
              a = e.length,
              p = t.length;

          if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (e.length < 2 || t.length < 2) return -1;
            s = 2, a /= 2, p /= 2, r /= 2;
          }

          function c(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
          }

          if (o) {
            var u = -1;

            for (i = r; i < a; i++) if (c(e, i) === c(t, -1 === u ? 0 : i - u)) {
              if (-1 === u && (u = i), i - u + 1 === p) return u * s;
            } else -1 !== u && (i -= i - u), u = -1;
          } else for (r + p > a && (r = a - p), i = r; i >= 0; i--) {
            for (var l = !0, f = 0; f < p; f++) if (c(e, i + f) !== c(t, f)) {
              l = !1;
              break;
            }

            if (l) return i;
          }

          return -1;
        }

        function _(e, t, r, n) {
          r = Number(r) || 0;
          var o = e.length - r;
          n ? (n = Number(n)) > o && (n = o) : n = o;
          var i = t.length;
          if (i % 2 != 0) throw new TypeError("Invalid hex string");
          n > i / 2 && (n = i / 2);

          for (var s = 0; s < n; ++s) {
            var a = parseInt(t.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            e[r + s] = a;
          }

          return s;
        }

        function v(e, t, r, n) {
          return $(K(t, e.length - r), e, r, n);
        }

        function w(e, t, r, n) {
          return $(function (e) {
            for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));

            return t;
          }(t), e, r, n);
        }

        function I(e, t, r, n) {
          return w(e, t, r, n);
        }

        function b(e, t, r, n) {
          return $(B(t), e, r, n);
        }

        function S(e, t, r, n) {
          return $(function (e, t) {
            for (var r, n, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);

            return i;
          }(t, e.length - r), e, r, n);
        }

        function A(e, t, r) {
          return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r));
        }

        function O(e, t, r) {
          r = Math.min(e.length, r);

          for (var n = [], o = t; o < r;) {
            var i,
                s,
                a,
                p,
                c = e[o],
                u = null,
                l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (o + l <= r) switch (l) {
              case 1:
                c < 128 && (u = c);
                break;

              case 2:
                128 == (192 & (i = e[o + 1])) && (p = (31 & c) << 6 | 63 & i) > 127 && (u = p);
                break;

              case 3:
                i = e[o + 1], s = e[o + 2], 128 == (192 & i) && 128 == (192 & s) && (p = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (p < 55296 || p > 57343) && (u = p);
                break;

              case 4:
                i = e[o + 1], s = e[o + 2], a = e[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (p = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && p < 1114112 && (u = p);
            }
            null === u ? (u = 65533, l = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), o += l;
          }

          return function (e) {
            var t = e.length;
            if (t <= P) return String.fromCharCode.apply(String, e);
            var r = "",
                n = 0;

            for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += P));

            return r;
          }(n);
        }

        t.Buffer = p, t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return p.alloc(+e);
        }, t.INSPECT_MAX_BYTES = 50, p.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
          try {
            var e = new Uint8Array(1);
            return e.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              }
            }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
          } catch (e) {
            return !1;
          }
        }(), t.kMaxLength = s(), p.poolSize = 8192, p._augment = function (e) {
          return e.__proto__ = p.prototype, e;
        }, p.from = function (e, t, r) {
          return c(null, e, t, r);
        }, p.TYPED_ARRAY_SUPPORT && (p.prototype.__proto__ = Uint8Array.prototype, p.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && p[Symbol.species] === p && Object.defineProperty(p, Symbol.species, {
          value: null,
          configurable: !0
        })), p.alloc = function (e, t, r) {
          return function (e, t, r, n) {
            return u(t), t <= 0 ? a(e, t) : void 0 !== r ? "string" == typeof n ? a(e, t).fill(r, n) : a(e, t).fill(r) : a(e, t);
          }(null, e, t, r);
        }, p.allocUnsafe = function (e) {
          return l(null, e);
        }, p.allocUnsafeSlow = function (e) {
          return l(null, e);
        }, p.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }, p.compare = function (e, t) {
          if (!p.isBuffer(e) || !p.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;

          for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o) if (e[o] !== t[o]) {
            r = e[o], n = t[o];
            break;
          }

          return r < n ? -1 : n < r ? 1 : 0;
        }, p.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;

            default:
              return !1;
          }
        }, p.concat = function (e, t) {
          if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return p.alloc(0);
          var r;
          if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          var n = p.allocUnsafe(t),
              o = 0;

          for (r = 0; r < e.length; ++r) {
            var s = e[r];
            if (!p.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
            s.copy(n, o), o += s.length;
          }

          return n;
        }, p.byteLength = h, p.prototype._isBuffer = !0, p.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

          for (var t = 0; t < e; t += 2) g(this, t, t + 1);

          return this;
        }, p.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

          for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);

          return this;
        }, p.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

          for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);

          return this;
        }, p.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e ? "" : 0 === arguments.length ? O(this, 0, e) : function (e, t, r) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if ((r >>>= 0) <= (t >>>= 0)) return "";

            for (e || (e = "utf8");;) switch (e) {
              case "hex":
                return N(this, t, r);

              case "utf8":
              case "utf-8":
                return O(this, t, r);

              case "ascii":
                return E(this, t, r);

              case "latin1":
              case "binary":
                return k(this, t, r);

              case "base64":
                return A(this, t, r);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return L(this, t, r);

              default:
                if (n) throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), n = !0;
            }
          }.apply(this, arguments);
        }, p.prototype.equals = function (e) {
          if (!p.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === p.compare(this, e);
        }, p.prototype.inspect = function () {
          var e = "",
              r = t.INSPECT_MAX_BYTES;
          return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">";
        }, p.prototype.compare = function (e, t, r, n, o) {
          if (!p.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw new RangeError("out of range index");
          if (n >= o && t >= r) return 0;
          if (n >= o) return -1;
          if (t >= r) return 1;
          if (this === e) return 0;

          for (var i = (o >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (t >>>= 0), a = Math.min(i, s), c = this.slice(n, o), u = e.slice(t, r), l = 0; l < a; ++l) if (c[l] !== u[l]) {
            i = c[l], s = u[l];
            break;
          }

          return i < s ? -1 : s < i ? 1 : 0;
        }, p.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }, p.prototype.indexOf = function (e, t, r) {
          return m(this, e, t, r, !0);
        }, p.prototype.lastIndexOf = function (e, t, r) {
          return m(this, e, t, r, !1);
        }, p.prototype.write = function (e, t, r, n) {
          if (void 0 === t) n = "utf8", r = this.length, t = 0;else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
          }
          var o = this.length - t;
          if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");

          for (var i = !1;;) switch (n) {
            case "hex":
              return _(this, e, t, r);

            case "utf8":
            case "utf-8":
              return v(this, e, t, r);

            case "ascii":
              return w(this, e, t, r);

            case "latin1":
            case "binary":
              return I(this, e, t, r);

            case "base64":
              return b(this, e, t, r);

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return S(this, e, t, r);

            default:
              if (i) throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), i = !0;
          }
        }, p.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        var P = 4096;

        function E(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);

          for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);

          return n;
        }

        function k(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);

          for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);

          return n;
        }

        function N(e, t, r) {
          var n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);

          for (var o = "", i = t; i < r; ++i) o += U(e[i]);

          return o;
        }

        function L(e, t, r) {
          for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);

          return o;
        }

        function j(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
        }

        function x(e, t, r, n, o, i) {
          if (!p.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError("Index out of range");
        }

        function T(e, t, r, n) {
          t < 0 && (t = 65535 + t + 1);

          for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o) e[r + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o);
        }

        function M(e, t, r, n) {
          t < 0 && (t = 4294967295 + t + 1);

          for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o) e[r + o] = t >>> 8 * (n ? o : 3 - o) & 255;
        }

        function C(e, t, r, n, o, i) {
          if (r + n > e.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }

        function R(e, t, r, n, i) {
          return i || C(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4;
        }

        function W(e, t, r, n, i) {
          return i || C(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8;
        }

        p.prototype.slice = function (e, t) {
          var r,
              n = this.length;
          if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), p.TYPED_ARRAY_SUPPORT) (r = this.subarray(e, t)).__proto__ = p.prototype;else {
            var o = t - e;
            r = new p(o, void 0);

            for (var i = 0; i < o; ++i) r[i] = this[i + e];
          }
          return r;
        }, p.prototype.readUIntLE = function (e, t, r) {
          e |= 0, t |= 0, r || j(e, t, this.length);

          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;

          return n;
        }, p.prototype.readUIntBE = function (e, t, r) {
          e |= 0, t |= 0, r || j(e, t, this.length);

          for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;

          return n;
        }, p.prototype.readUInt8 = function (e, t) {
          return t || j(e, 1, this.length), this[e];
        }, p.prototype.readUInt16LE = function (e, t) {
          return t || j(e, 2, this.length), this[e] | this[e + 1] << 8;
        }, p.prototype.readUInt16BE = function (e, t) {
          return t || j(e, 2, this.length), this[e] << 8 | this[e + 1];
        }, p.prototype.readUInt32LE = function (e, t) {
          return t || j(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
        }, p.prototype.readUInt32BE = function (e, t) {
          return t || j(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
        }, p.prototype.readIntLE = function (e, t, r) {
          e |= 0, t |= 0, r || j(e, t, this.length);

          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;

          return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }, p.prototype.readIntBE = function (e, t, r) {
          e |= 0, t |= 0, r || j(e, t, this.length);

          for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) i += this[e + --n] * o;

          return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
        }, p.prototype.readInt8 = function (e, t) {
          return t || j(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
        }, p.prototype.readInt16LE = function (e, t) {
          t || j(e, 2, this.length);
          var r = this[e] | this[e + 1] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, p.prototype.readInt16BE = function (e, t) {
          t || j(e, 2, this.length);
          var r = this[e + 1] | this[e] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, p.prototype.readInt32LE = function (e, t) {
          return t || j(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
        }, p.prototype.readInt32BE = function (e, t) {
          return t || j(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
        }, p.prototype.readFloatLE = function (e, t) {
          return t || j(e, 4, this.length), o.read(this, e, !0, 23, 4);
        }, p.prototype.readFloatBE = function (e, t) {
          return t || j(e, 4, this.length), o.read(this, e, !1, 23, 4);
        }, p.prototype.readDoubleLE = function (e, t) {
          return t || j(e, 8, this.length), o.read(this, e, !0, 52, 8);
        }, p.prototype.readDoubleBE = function (e, t) {
          return t || j(e, 8, this.length), o.read(this, e, !1, 52, 8);
        }, p.prototype.writeUIntLE = function (e, t, r, n) {
          (e = +e, t |= 0, r |= 0, n) || x(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var o = 1,
              i = 0;

          for (this[t] = 255 & e; ++i < r && (o *= 256);) this[t + i] = e / o & 255;

          return t + r;
        }, p.prototype.writeUIntBE = function (e, t, r, n) {
          (e = +e, t |= 0, r |= 0, n) || x(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var o = r - 1,
              i = 1;

          for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;

          return t + r;
        }, p.prototype.writeUInt8 = function (e, t, r) {
          return e = +e, t |= 0, r || x(this, e, t, 1, 255, 0), p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
        }, p.prototype.writeUInt16LE = function (e, t, r) {
          return e = +e, t |= 0, r || x(this, e, t, 2, 65535, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : T(this, e, t, !0), t + 2;
        }, p.prototype.writeUInt16BE = function (e, t, r) {
          return e = +e, t |= 0, r || x(this, e, t, 2, 65535, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : T(this, e, t, !1), t + 2;
        }, p.prototype.writeUInt32LE = function (e, t, r) {
          return e = +e, t |= 0, r || x(this, e, t, 4, 4294967295, 0), p.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : M(this, e, t, !0), t + 4;
        }, p.prototype.writeUInt32BE = function (e, t, r) {
          return e = +e, t |= 0, r || x(this, e, t, 4, 4294967295, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4;
        }, p.prototype.writeIntLE = function (e, t, r, n) {
          if (e = +e, t |= 0, !n) {
            var o = Math.pow(2, 8 * r - 1);
            x(this, e, t, r, o - 1, -o);
          }

          var i = 0,
              s = 1,
              a = 0;

          for (this[t] = 255 & e; ++i < r && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;

          return t + r;
        }, p.prototype.writeIntBE = function (e, t, r, n) {
          if (e = +e, t |= 0, !n) {
            var o = Math.pow(2, 8 * r - 1);
            x(this, e, t, r, o - 1, -o);
          }

          var i = r - 1,
              s = 1,
              a = 0;

          for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;

          return t + r;
        }, p.prototype.writeInt8 = function (e, t, r) {
          return e = +e, t |= 0, r || x(this, e, t, 1, 127, -128), p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
        }, p.prototype.writeInt16LE = function (e, t, r) {
          return e = +e, t |= 0, r || x(this, e, t, 2, 32767, -32768), p.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : T(this, e, t, !0), t + 2;
        }, p.prototype.writeInt16BE = function (e, t, r) {
          return e = +e, t |= 0, r || x(this, e, t, 2, 32767, -32768), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : T(this, e, t, !1), t + 2;
        }, p.prototype.writeInt32LE = function (e, t, r) {
          return e = +e, t |= 0, r || x(this, e, t, 4, 2147483647, -2147483648), p.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : M(this, e, t, !0), t + 4;
        }, p.prototype.writeInt32BE = function (e, t, r) {
          return e = +e, t |= 0, r || x(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4;
        }, p.prototype.writeFloatLE = function (e, t, r) {
          return R(this, e, t, !0, r);
        }, p.prototype.writeFloatBE = function (e, t, r) {
          return R(this, e, t, !1, r);
        }, p.prototype.writeDoubleLE = function (e, t, r) {
          return W(this, e, t, !0, r);
        }, p.prototype.writeDoubleBE = function (e, t, r) {
          return W(this, e, t, !1, r);
        }, p.prototype.copy = function (e, t, r, n) {
          if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
          var o,
              i = n - r;
          if (this === e && r < t && t < n) for (o = i - 1; o >= 0; --o) e[o + t] = this[o + r];else if (i < 1e3 || !p.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) e[o + t] = this[o + r];else Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
          return i;
        }, p.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
              var o = e.charCodeAt(0);
              o < 256 && (e = o);
            }

            if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !p.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof e && (e &= 255);

          if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
          if (r <= t) return this;
          var i;
          if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (i = t; i < r; ++i) this[i] = e;else {
            var s = p.isBuffer(e) ? e : K(new p(e, n).toString()),
                a = s.length;

            for (i = 0; i < r - t; ++i) this[i + t] = s[i % a];
          }
          return this;
        };
        var D = /[^+\/0-9A-Za-z-_]/g;

        function U(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }

        function K(e, t) {
          var r;
          t = t || 1 / 0;

          for (var n = e.length, o = null, i = [], s = 0; s < n; ++s) {
            if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
              if (!o) {
                if (r > 56319) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }

                if (s + 1 === n) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }

                o = r;
                continue;
              }

              if (r < 56320) {
                (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                continue;
              }

              r = 65536 + (o - 55296 << 10 | r - 56320);
            } else o && (t -= 3) > -1 && i.push(239, 191, 189);

            if (o = null, r < 128) {
              if ((t -= 1) < 0) break;
              i.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              i.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            }
          }

          return i;
        }

        function B(e) {
          return n.toByteArray(function (e) {
            if ((e = function (e) {
              return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
            }(e).replace(D, "")).length < 2) return "";

            for (; e.length % 4 != 0;) e += "=";

            return e;
          }(e));
        }

        function $(e, t, r, n) {
          for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];

          return o;
        }
      }).call(this, r(18));
    }, function (e, t) {
      var r;

      r = function () {
        return this;
      }();

      try {
        r = r || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (r = window);
      }

      e.exports = r;
    }, function (e, t, r) {
      "use strict";

      t.byteLength = function (e) {
        var t = c(e),
            r = t[0],
            n = t[1];
        return 3 * (r + n) / 4 - n;
      }, t.toByteArray = function (e) {
        for (var t, r = c(e), n = r[0], s = r[1], a = new i(function (e, t, r) {
          return 3 * (t + r) / 4 - r;
        }(0, n, s)), p = 0, u = s > 0 ? n - 4 : n, l = 0; l < u; l += 4) t = o[e.charCodeAt(l)] << 18 | o[e.charCodeAt(l + 1)] << 12 | o[e.charCodeAt(l + 2)] << 6 | o[e.charCodeAt(l + 3)], a[p++] = t >> 16 & 255, a[p++] = t >> 8 & 255, a[p++] = 255 & t;

        2 === s && (t = o[e.charCodeAt(l)] << 2 | o[e.charCodeAt(l + 1)] >> 4, a[p++] = 255 & t);
        1 === s && (t = o[e.charCodeAt(l)] << 10 | o[e.charCodeAt(l + 1)] << 4 | o[e.charCodeAt(l + 2)] >> 2, a[p++] = t >> 8 & 255, a[p++] = 255 & t);
        return a;
      }, t.fromByteArray = function (e) {
        for (var t, r = e.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) i.push(u(e, s, s + 16383 > a ? a : s + 16383));

        1 === o ? (t = e[r - 1], i.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
        return i.join("");
      };

      for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, p = s.length; a < p; ++a) n[a] = s[a], o[s.charCodeAt(a)] = a;

      function c(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4];
      }

      function u(e, t, r) {
        for (var o, i, s = [], a = t; a < r; a += 3) o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);

        return s.join("");
      }

      o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
    }, function (e, t) {
      t.read = function (e, t, r, n, o) {
        var i,
            s,
            a = 8 * o - n - 1,
            p = (1 << a) - 1,
            c = p >> 1,
            u = -7,
            l = r ? o - 1 : 0,
            f = r ? -1 : 1,
            d = e[t + l];

        for (l += f, i = d & (1 << -u) - 1, d >>= -u, u += a; u > 0; i = 256 * i + e[t + l], l += f, u -= 8);

        for (s = i & (1 << -u) - 1, i >>= -u, u += n; u > 0; s = 256 * s + e[t + l], l += f, u -= 8);

        if (0 === i) i = 1 - c;else {
          if (i === p) return s ? NaN : 1 / 0 * (d ? -1 : 1);
          s += Math.pow(2, n), i -= c;
        }
        return (d ? -1 : 1) * s * Math.pow(2, i - n);
      }, t.write = function (e, t, r, n, o, i) {
        var s,
            a,
            p,
            c = 8 * i - o - 1,
            u = (1 << c) - 1,
            l = u >> 1,
            f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = n ? 0 : i - 1,
            h = n ? 1 : -1,
            g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = u) : (s = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -s)) < 1 && (s--, p *= 2), (t += s + l >= 1 ? f / p : f * Math.pow(2, 1 - l)) * p >= 2 && (s++, p /= 2), s + l >= u ? (a = 0, s = u) : s + l >= 1 ? (a = (t * p - 1) * Math.pow(2, o), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; e[r + d] = 255 & a, d += h, a /= 256, o -= 8);

        for (s = s << o | a, c += o; c > 0; e[r + d] = 255 & s, d += h, s /= 256, c -= 8);

        e[r + d - h] |= 128 * g;
      };
    }, function (e, t) {
      var r = {}.toString;

      e.exports = Array.isArray || function (e) {
        return "[object Array]" == r.call(e);
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = r(5),
          o = window,
          i = o.navigator.userAgent,
          s = o.location.hostname,
          a = i.indexOf("app/arab"),
          p = i.indexOf("app/us"),
          c = i.indexOf("app/cheez"),
          u = i.indexOf("app/lenovo"),
          l = i.indexOf("app/meet"),
          f = i.indexOf("app/pro"),
          d = i.indexOf("app/athena"),
          h = atob("Y21saXZl"),
          g = atob("Y29tLmNtY20ubGl2ZQ=="),
          m = "liveme";
      (a > -1 || "qa.royallive.com,www.royallive.com,qa.lmlite.net,www.lmlite.net,www.poplive.live,pop.lekerberos.com,royal.lekerberos.com".indexOf(s) > -1) && (h = "abslive", g = "com.alive.android", m = "arab"), (p > -1 || "qa.aaalive.com,www.aaalive.com,www.frill.live,www.frilllive.com".indexOf(s) > -1) && (h = "alive", g = "com.aaalive.live", m = "us"), (c > -1 || "qa.cheez.com,www.cheez.com".indexOf(s) > -1) && (h = "cheezlive", g = "com.joyinme.cheezlive", m = "cheez"), u > -1 && (m = "lenovo"), (l > -1 || "qa-meet.linkv.sg,meet.linkv.sg".indexOf(s) > -1) && (m = "meet"), (f > -1 || "qapro.liveme.com,pro.liveme.com,pro.lekerberos.com".indexOf(s) > -1) && (h = "cmlivepro", g = "com.europe.live", m = "pro"), (d > -1 || !n.IsKEWLApp && "qapro.liveme.com,pro.liveme.com,pro.lekerberos.com".indexOf(s) > -1) && (h = "lmathena", g = "com.athena.live", m = "athena"), t.default = {
        packageName: h,
        packageArea: g,
        packageInfo: m
      };
    }, function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }();

      var o = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.userInfo = null, this.fetchLock = !1, this.callbacks = [], this.instance = null;
        }

        return n(e, [{
          key: "toSafe",
          value: function (e) {
            return "string" == typeof e && "null" !== e && "" !== e ? JSON.parse(e) : JSON.parse(JSON.stringify(e));
          }
        }, {
          key: "getUserInfo",
          value: function (e) {
            this.userInfo ? e && e(this.toSafe(this.userInfo)) : (this.callbacks.push(e), this.fetchLock || (this.fetchLock = !0, this.getNativeUserInfo()));
          }
        }, {
          key: "getNativeUserInfo",
          value: function () {
            var e = window.KEWLApp.UAInfo,
                t = e.IsKEWLApp,
                n = e.IsIOS,
                o = e.IsNewIosApp,
                i = t && "object" === r(window.android) ? window.android : null;
            if (t && !n && "object" === (void 0 === i ? "undefined" : r(i)) && Object.prototype.hasOwnProperty.call(i, "getUserInfo")) this.updateUserInfo(i.getUserInfo(""));else if (t && n) {
              var s = window.KEWLApp.asyncCallbackName(this.updateUserInfo, this);
              o ? window.KEWLApp.iosPostMessage({
                type: "getuserinfo",
                callback: s
              }) : window.KEWLApp.tryOpen("getuserinfo?callback=" + s);
            }
          }
        }, {
          key: "updateUserInfo",
          value: function (e) {
            this.userInfo = this.toSafe(e);

            for (var t = this.callbacks.shift(); t;) t && t(this.toSafe(e)), t = this.callbacks.shift();
          }
        }], [{
          key: "getInstance",
          value: function () {
            return this.instance || (this.instance = new e()), this.instance;
          }
        }]), e;
      }();

      t.default = o;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n,
          o = function () {
        return function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return function (e, t) {
            var r = [],
                n = !0,
                o = !1,
                i = void 0;

            try {
              for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
            } catch (e) {
              o = !0, i = e;
            } finally {
              try {
                !n && a.return && a.return();
              } finally {
                if (o) throw i;
              }
            }

            return r;
          }(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(),
          i = r(25),
          s = (n = i) && n.__esModule ? n : {
        default: n
      },
          a = r(43);

      var p = s.default;

      if (s.default.interceptors.request.use(a.requestInterceptor), window.KEWLApp && window.KEWLApp.getPackgetInfo) {
        var c = window.KEWLApp.getPackgetInfo();

        switch (c) {
          case "arab":
            c = "ar";
            break;

          case "us":
            c = "us";
            break;

          case "cheez":
            c = "cheez";
            break;

          case "lenovo":
            c = "lenovo";
            break;

          case "meet":
            c = "meet";
            break;

          case "pro":
            c = "lmpro";
            break;

          case "athena":
            c = "athena";
            break;

          default:
            c = "liveme";
        }

        s.default.interceptors.request.use(function (e) {
          var t = {
            alias: c
          };
          return e.params = Object.assign(t, e.params), e;
        });
      }

      window.KEWLHttp = p, r(48);
      var u,
          l = ["en", "zh", "es", "ja", "id", "pt", "ar", "de"];
      u = function (e) {
        if (-1 === l.indexOf(e)) {
          var t = e.split("-"),
              r = o(t, 1)[0];
          e = l.indexOf(r) > -1 ? r : "";
        }

        return e;
      }(navigator.language.toLowerCase()) || "en", window.KEWLSensor.register("kewlweb_onerror_type3_restimes", {
        starttime: 0,
        errormsg: "",
        target: "",
        errortype: 0,
        webresponsetimes: 1,
        pageid: 0
      }), window.KEWLSensor.register("kewlweb_onerror_type4_res400", {
        starttime: 0,
        errormsg: "",
        target: "",
        errortype: 0,
        webresponsetimes: 1,
        pageid: 0
      }), window.KEWLSensor.register("kewlweb_onerror_type5_res500", {
        starttime: 0,
        errormsg: "",
        target: "",
        errortype: 0,
        webresponsetimes: 1,
        pageid: 0
      }), window.KEWLSensor.register("kewlweb_onerror_type6_resother", {
        starttime: 0,
        errormsg: "",
        target: "",
        errortype: 0,
        webresponsetimes: 1,
        pageid: 0
      });

      try {
        window.KEWLHttp.interceptors.request.use(function (e) {
          return e.metadata = {
            startTime: new Date()
          }, e;
        }, function (e) {
          return Promise.reject(e);
        }), window.KEWLHttp.interceptors.response.use(function (e) {
          try {
            e.duration = new Date() - e.config.metadata.startTime, window.KEWLSensor.track("kewlweb_onerror_type3_restimes", {
              starttime: e.config.metadata.startTime.getTime(),
              errormsg: "",
              target: e.config.url,
              errortype: 3,
              webresponsetimes: e.duration,
              pageid: 0
            });
            var t = e.data && e.data.status,
                r = e.data && e.data.data && e.data.data.status;

            if (window.errorMessageTMX[t] || window.errorMessageTMX[r]) {
              var n = (window.errorMessageTMX[t] || window.errorMessageTMX[r])[u],
                  o = document.createElement("div");
              o.className = "error-message-tmx", o.style.background = "rgba(0,0,0,.6)", o.style.position = "fixed", o.style.top = "40%", o.style.left = "50%", o.style.width = "300px", o.style.marginLeft = "-150px", o.style.padding = "0.3rem", o.style.color = "#fff", o.style.borderRadius = "4px", o.style.boxSizing = "border-box", o.style.fontSize = "0.4rem", o.style.zIndex = 999999999999999, o.style.textAlign = "center", o.style.lineHeight = "0.5rem", o.style.display = "block", o.innerHTML = n, document.body.appendChild(o), setTimeout(function () {
                o.style.display = "none", document.body.removeChild(o);
              }, 5e3);
            }
          } catch (e) {}

          return e;
        }, function (e) {
          e.duration = new Date() - e.config.metadata.startTime;
          var t = e.response;
          return t ? t.status >= 400 && t.status < 500 ? window.KEWLSensor.track("kewlweb_onerror_type4_res400", {
            starttime: e.config.metadata.startTime.getTime(),
            errormsg: JSON.stringify(e),
            target: e.config.url,
            errortype: 4,
            webresponsetimes: e.duration,
            pageid: 0
          }) : t.status >= 500 && t.status < 600 ? window.KEWLSensor.track("kewlweb_onerror_type5_res500", {
            starttime: e.config.metadata.startTime.getTime(),
            errormsg: JSON.stringify(e),
            target: e.config.url,
            errortype: 5,
            webresponsetimes: e.duration,
            pageid: 0
          }) : window.KEWLSensor.track("kewlweb_onerror_type6_resother", {
            starttime: e.config.metadata.startTime.getTime(),
            errormsg: JSON.stringify(e),
            target: e.config.url,
            errortype: 6,
            webresponsetimes: e.duration,
            pageid: 0
          }) : window.KEWLSensor.track("kewlweb_onerror_type6_resother", {
            starttime: e.config.metadata.startTime.getTime(),
            errormsg: JSON.stringify(e),
            target: e.config.url,
            errortype: 6,
            webresponsetimes: e.duration,
            pageid: 0
          }), Promise.reject(e);
        });
      } catch (e) {
        window.KEWLSensor.track("kewlweb_onerror_type6_resother", {
          errormsg: JSON.stringify(e),
          errortype: 6
        });
      }

      t.default = s.default;
    }, function (e, t, r) {
      e.exports = r(26);
    }, function (e, t, r) {
      "use strict";

      var n = r(0),
          o = r(6),
          i = r(28),
          s = r(12);

      function a(e) {
        var t = new i(e),
            r = o(i.prototype.request, t);
        return n.extend(r, i.prototype, t), n.extend(r, t), r;
      }

      var p = a(r(9));
      p.Axios = i, p.create = function (e) {
        return a(s(p.defaults, e));
      }, p.Cancel = r(13), p.CancelToken = r(41), p.isCancel = r(8), p.all = function (e) {
        return Promise.all(e);
      }, p.spread = r(42), e.exports = p, e.exports.default = p;
    }, function (e, t) {
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      e.exports = function (e) {
        return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(0),
          o = r(7),
          i = r(29),
          s = r(30),
          a = r(12);

      function p(e) {
        this.defaults = e, this.interceptors = {
          request: new i(),
          response: new i()
        };
      }

      p.prototype.request = function (e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
        var t = [s, void 0],
            r = Promise.resolve(e);

        for (this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }), this.interceptors.response.forEach(function (e) {
          t.push(e.fulfilled, e.rejected);
        }); t.length;) r = r.then(t.shift(), t.shift());

        return r;
      }, p.prototype.getUri = function (e) {
        return e = a(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
      }, n.forEach(["delete", "get", "head", "options"], function (e) {
        p.prototype[e] = function (t, r) {
          return this.request(n.merge(r || {}, {
            method: e,
            url: t
          }));
        };
      }), n.forEach(["post", "put", "patch"], function (e) {
        p.prototype[e] = function (t, r, o) {
          return this.request(n.merge(o || {}, {
            method: e,
            url: t,
            data: r
          }));
        };
      }), e.exports = p;
    }, function (e, t, r) {
      "use strict";

      var n = r(0);

      function o() {
        this.handlers = [];
      }

      o.prototype.use = function (e, t) {
        return this.handlers.push({
          fulfilled: e,
          rejected: t
        }), this.handlers.length - 1;
      }, o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }, o.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }, e.exports = o;
    }, function (e, t, r) {
      "use strict";

      var n = r(0),
          o = r(31),
          i = r(8),
          s = r(9),
          a = r(39),
          p = r(40);

      function c(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }

      e.exports = function (e) {
        return c(e), e.baseURL && !a(e.url) && (e.url = p(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
          delete e.headers[t];
        }), (e.adapter || s.adapter)(e).then(function (t) {
          return c(e), t.data = o(t.data, t.headers, e.transformResponse), t;
        }, function (t) {
          return i(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
        });
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(0);

      e.exports = function (e, t, r) {
        return n.forEach(r, function (r) {
          e = r(e, t);
        }), e;
      };
    }, function (e, t) {
      var r,
          n,
          o = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined");
      }

      function s() {
        throw new Error("clearTimeout has not been defined");
      }

      function a(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);

        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }

      !function () {
        try {
          r = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          r = i;
        }

        try {
          n = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          n = s;
        }
      }();
      var p,
          c = [],
          u = !1,
          l = -1;

      function f() {
        u && p && (u = !1, p.length ? c = p.concat(c) : l = -1, c.length && d());
      }

      function d() {
        if (!u) {
          var e = a(f);
          u = !0;

          for (var t = c.length; t;) {
            for (p = c, c = []; ++l < t;) p && p[l].run();

            l = -1, t = c.length;
          }

          p = null, u = !1, function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);

            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          }(e);
        }
      }

      function h(e, t) {
        this.fun = e, this.array = t;
      }

      function g() {}

      o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        c.push(new h(e, t)), 1 !== c.length || u || a(d);
      }, h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function (e) {
        return [];
      }, o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }, o.cwd = function () {
        return "/";
      }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }, o.umask = function () {
        return 0;
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(0);

      e.exports = function (e, t) {
        n.forEach(e, function (r, n) {
          n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n]);
        });
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(11);

      e.exports = function (e, t, r) {
        var o = r.config.validateStatus;
        !o || o(r.status) ? e(r) : t(n("Request failed with status code " + r.status, r.config, null, r.request, r));
      };
    }, function (e, t, r) {
      "use strict";

      e.exports = function (e, t, r, n, o) {
        return e.config = t, r && (e.code = r), e.request = n, e.response = o, e.isAxiosError = !0, e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code
          };
        }, e;
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(0),
          o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];

      e.exports = function (e) {
        var t,
            r,
            i,
            s = {};
        return e ? (n.forEach(e.split("\n"), function (e) {
          if (i = e.indexOf(":"), t = n.trim(e.substr(0, i)).toLowerCase(), r = n.trim(e.substr(i + 1)), t) {
            if (s[t] && o.indexOf(t) >= 0) return;
            s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([r]) : s[t] ? s[t] + ", " + r : r;
          }
        }), s) : s;
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(0);
      e.exports = n.isStandardBrowserEnv() ? function () {
        var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");

        function o(e) {
          var n = e;
          return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
            href: r.href,
            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
            host: r.host,
            search: r.search ? r.search.replace(/^\?/, "") : "",
            hash: r.hash ? r.hash.replace(/^#/, "") : "",
            hostname: r.hostname,
            port: r.port,
            pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
          };
        }

        return e = o(window.location.href), function (t) {
          var r = n.isString(t) ? o(t) : t;
          return r.protocol === e.protocol && r.host === e.host;
        };
      }() : function () {
        return !0;
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(0);
      e.exports = n.isStandardBrowserEnv() ? {
        write: function (e, t, r, o, i, s) {
          var a = [];
          a.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), n.isString(o) && a.push("path=" + o), n.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ");
        },
        read: function (e) {
          var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function (e) {
          this.write(e, "", Date.now() - 864e5);
        }
      } : {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {}
      };
    }, function (e, t, r) {
      "use strict";

      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    }, function (e, t, r) {
      "use strict";

      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(13);

      function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var r = this;
        e(function (e) {
          r.reason || (r.reason = new n(e), t(r.reason));
        });
      }

      o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }, o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e
        };
      }, e.exports = o;
    }, function (e, t, r) {
      "use strict";

      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.requestInterceptor = t.requestSign = t.transformRequest = t.getSignParams = t.requiredParams = void 0;
      var n,
          o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          i = r(44),
          s = (n = i) && n.__esModule ? n : {
        default: n
      };
      var a = r(45),
          p = "LM6000101139961122666757",
          c = void 0;
      c = window.ISONLINE || void 0 === window.ISONLINE ? atob("ZGQ0NmRiYjQ0MmI2ZTRiYTgxN2Q2MzQ3ZDJkZGY0OTM=") : atob("MDFhMTNiMWU1MzZhNWJjYTc4ZTVhNDIxMjI1ZDA2Y2U=");

      var u = void 0,
          l = void 0,
          f = t.requiredParams = {
        lm_s_id: p,
        lm_s_ts: u,
        lm_s_str: l,
        lm_s_ver: 1,
        h5: 1
      },
          d = t.getSignParams = function (e) {
        var t = {},
            r = e.method.toLowerCase();

        if ("get" === r) {
          var n = {};
          Object.keys(e.params).forEach(function (t) {
            void 0 !== e.params[t] && null !== e.params[t] && (n[t] = e.params[t]);
          }), e.params = Object.assign({}, f, n);
        } else if ("post" === r) if ("string" == typeof e.data) {
          var o = void 0;
          e.data.split("&").forEach(function (e) {
            o = e.split("="), t[o[0]] = o[1];
          }), t = Object.assign({}, f, t), e.data = Object.keys(t).map(function (e) {
            return e + "=" + t[e];
          }).join("&");
        } else t = Object.assign(t, f, e.data), e.data = t;

        return t = Object.assign({}, e.params, t);
      },
          h = t.transformRequest = function (e) {
        return "string" == typeof e && "&" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      },
          g = t.requestSign = function (e) {
        var t = Object.keys(e).sort().map(function (t) {
          return t + (r = e[t], Array.isArray(r) ? r.join(",") : "object" === (void 0 === r ? "undefined" : o(r)) ? JSON.stringify(r) : r);
          var r;
        }).join("");
        return a(t += p + u + c);
      };

      t.requestInterceptor = function (e) {
        if (u = new Date().getTime(), l = a(u), f.lm_s_ts = u, f.lm_s_str = l, !1 === window.ISONLINE) {
          var t = window.localStorage && window.localStorage.getItem("API_REQUEST_SIGN");
          if (!1 === JSON.parse(t)) return e;
        }

        if (r = e.url, (n = s.default.path.some(function (e) {
          return e.toLowerCase() == r.toLowerCase();
        })) || (n = s.default.reg.some(function (e) {
          return new RegExp(e, "i").test(r);
        })), !n) return e;
        var r,
            n,
            o = 1;
        if ("post" === e.method.toLowerCase() ? Object.hasOwnProperty.call(e.data, "lm_s_ver") && (o = e.data.lm_s_ver) : "get" === e.method.toLowerCase() && Object.hasOwnProperty.call(e.params, "lm_s_ver") && (o = e.params.lm_s_ver), 1 !== o) return e;
        "post" === e.method.toLowerCase() && (Array.isArray(e.transformRequest) && e.transformRequest.length > 0 ? e.transformRequest.push(h) : "function" == typeof e.transformRequest && (e.transformRequest = [e.transformRequest, h]));
        var i = d(e),
            p = "";
        return p = e.requestSign && "function" == typeof e.requestSign ? e.requestSign(i, e) : g(i), e.headers["lm-s-sign"] = p, e;
      };
    }, function (e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = {
        path: ["/feed-app/v1/h5/feed/detail", "/finan/Info/myvip", "/finan/customgift/Info", "/finan/customgift/List", "/finan/customgift/Save", "/finan/gameplat/roulette/begin", "/finan/gameplat/roulette/create", "/finan/gameplat/roulette/draw", "/finan/gameplat/roulette/info", "/finan/gameplat/roulette/join", "/finan/gameplat/roulette/weedout", "/finan/goldcard/Open", "/finan/goldcard/Status", "/finan/goldegg/result", "/finan/goldegg/send", "/finan/goldegg/topLists", "/finan/group/info", "/finan/naminggift/MessagePrompt", "/finan/naminggift/Rank", "/finan/recharge/control", "/finan/treasurechestchain/GetRewards", "/finan/treasurechestchain/ReceiveRewards", "/finan/treasurechestchain/SetUserPopupFlag", "/finan/turnplate/info", "/finan/turnplate/play", "/finan/turnplate/result", "/finan/turnplate/shopbuy", "/finan/turnplate/shoplist", "/finan/turnplate/toplist", "/finan/viplevel/MsgRead", "/finan/viplevel/MyVipRank", "/giftV2/bagGiftList", "/giftV2/liveGiftList", "/giftV2/redpktTaskLists", "/giftV2/sendGift", "/giftV2H5/giftStickers", "/com/listsV2", "/microService/notice/orderNotice", "/pay/order4Apple", "/pay/paymentCallback4Apple", "/payx/DelCardsinfo", "/payx/GetCardsinfo", "/payx/huawei/purchase", "/payx/ingenico/billaddrAdd", "/payx/ingenico/billaddrList", "/payx/ingenico/billaddrUpdate", "/payx/ingenico/pay", "/payx/orderInfo", "/payx/orderdetail", "/payx/orderlist", "/payx/stripe/pay", "/payx/systemMsg", "/payx/upOrder", "/payx/v1/history", "/seller/gear/groups", "/userBankExtractH5/getUserExtractList", "/userBankH5/bindingPayoneerAndDraw", "/userBankH5/getLimitDiamond", "/userBankH5/getMoneyByCustomDiamond", "/userBankH5/getUserBindingAccountList", "/gift_jade/v1/bag/gift", "/gift_jade/v1/gift/info", "/gift_jade/v1/gift/list", "/gift_jade/v1/gift/send", "/gift_jade/v1/giftGuide/officialSendGift", "/gift_jade/v1/giftGuide/report", "/gift_jade/v1/giftGuide/status", "/fanstag/v1/fans/changeMyTag", "/fanstag/v1/fans/choseMyFansTag", "/fanstag/v1/fans/getFansInfo", "/fanstag/v1/fans/getMyFanTags", "/fanstag/v1/fans/getMyFans", "/fanstag/v1/fans/getRank", "/finan_data/v1/bonus/draw", "/finan_data/v1/bonus/statis", "/finan_data/v1/diamond/consume_statistics", "/finan_data/v1/diamond/rank", "/finan_data/v1/finan/history", "/finan_data/v1/get/user_bag_info", "/finan_data/v1/liveday/rank", "/finan_data/v1/livetime/rank", "/finan_data/v1/reseller/history", "/finan_data/v1/reseller/statis", "/finan_data/v1/rules/get", "/finan_data/v1/vip/integral_flowing"],
        reg: [/^\/payx\//]
      };
    }, function (e, t, r) {
      var n, o, i, s, a;
      n = r(46), o = r(14).utf8, i = r(47), s = r(14).bin, (a = function (e, t) {
        e.constructor == String ? e = t && "binary" === t.encoding ? s.stringToBytes(e) : o.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());

        for (var r = n.bytesToWords(e), p = 8 * e.length, c = 1732584193, u = -271733879, l = -1732584194, f = 271733878, d = 0; d < r.length; d++) r[d] = 16711935 & (r[d] << 8 | r[d] >>> 24) | 4278255360 & (r[d] << 24 | r[d] >>> 8);

        r[p >>> 5] |= 128 << p % 32, r[14 + (p + 64 >>> 9 << 4)] = p;
        var h = a._ff,
            g = a._gg,
            m = a._hh,
            y = a._ii;

        for (d = 0; d < r.length; d += 16) {
          var _ = c,
              v = u,
              w = l,
              I = f;
          c = h(c, u, l, f, r[d + 0], 7, -680876936), f = h(f, c, u, l, r[d + 1], 12, -389564586), l = h(l, f, c, u, r[d + 2], 17, 606105819), u = h(u, l, f, c, r[d + 3], 22, -1044525330), c = h(c, u, l, f, r[d + 4], 7, -176418897), f = h(f, c, u, l, r[d + 5], 12, 1200080426), l = h(l, f, c, u, r[d + 6], 17, -1473231341), u = h(u, l, f, c, r[d + 7], 22, -45705983), c = h(c, u, l, f, r[d + 8], 7, 1770035416), f = h(f, c, u, l, r[d + 9], 12, -1958414417), l = h(l, f, c, u, r[d + 10], 17, -42063), u = h(u, l, f, c, r[d + 11], 22, -1990404162), c = h(c, u, l, f, r[d + 12], 7, 1804603682), f = h(f, c, u, l, r[d + 13], 12, -40341101), l = h(l, f, c, u, r[d + 14], 17, -1502002290), c = g(c, u = h(u, l, f, c, r[d + 15], 22, 1236535329), l, f, r[d + 1], 5, -165796510), f = g(f, c, u, l, r[d + 6], 9, -1069501632), l = g(l, f, c, u, r[d + 11], 14, 643717713), u = g(u, l, f, c, r[d + 0], 20, -373897302), c = g(c, u, l, f, r[d + 5], 5, -701558691), f = g(f, c, u, l, r[d + 10], 9, 38016083), l = g(l, f, c, u, r[d + 15], 14, -660478335), u = g(u, l, f, c, r[d + 4], 20, -405537848), c = g(c, u, l, f, r[d + 9], 5, 568446438), f = g(f, c, u, l, r[d + 14], 9, -1019803690), l = g(l, f, c, u, r[d + 3], 14, -187363961), u = g(u, l, f, c, r[d + 8], 20, 1163531501), c = g(c, u, l, f, r[d + 13], 5, -1444681467), f = g(f, c, u, l, r[d + 2], 9, -51403784), l = g(l, f, c, u, r[d + 7], 14, 1735328473), c = m(c, u = g(u, l, f, c, r[d + 12], 20, -1926607734), l, f, r[d + 5], 4, -378558), f = m(f, c, u, l, r[d + 8], 11, -2022574463), l = m(l, f, c, u, r[d + 11], 16, 1839030562), u = m(u, l, f, c, r[d + 14], 23, -35309556), c = m(c, u, l, f, r[d + 1], 4, -1530992060), f = m(f, c, u, l, r[d + 4], 11, 1272893353), l = m(l, f, c, u, r[d + 7], 16, -155497632), u = m(u, l, f, c, r[d + 10], 23, -1094730640), c = m(c, u, l, f, r[d + 13], 4, 681279174), f = m(f, c, u, l, r[d + 0], 11, -358537222), l = m(l, f, c, u, r[d + 3], 16, -722521979), u = m(u, l, f, c, r[d + 6], 23, 76029189), c = m(c, u, l, f, r[d + 9], 4, -640364487), f = m(f, c, u, l, r[d + 12], 11, -421815835), l = m(l, f, c, u, r[d + 15], 16, 530742520), c = y(c, u = m(u, l, f, c, r[d + 2], 23, -995338651), l, f, r[d + 0], 6, -198630844), f = y(f, c, u, l, r[d + 7], 10, 1126891415), l = y(l, f, c, u, r[d + 14], 15, -1416354905), u = y(u, l, f, c, r[d + 5], 21, -57434055), c = y(c, u, l, f, r[d + 12], 6, 1700485571), f = y(f, c, u, l, r[d + 3], 10, -1894986606), l = y(l, f, c, u, r[d + 10], 15, -1051523), u = y(u, l, f, c, r[d + 1], 21, -2054922799), c = y(c, u, l, f, r[d + 8], 6, 1873313359), f = y(f, c, u, l, r[d + 15], 10, -30611744), l = y(l, f, c, u, r[d + 6], 15, -1560198380), u = y(u, l, f, c, r[d + 13], 21, 1309151649), c = y(c, u, l, f, r[d + 4], 6, -145523070), f = y(f, c, u, l, r[d + 11], 10, -1120210379), l = y(l, f, c, u, r[d + 2], 15, 718787259), u = y(u, l, f, c, r[d + 9], 21, -343485551), c = c + _ >>> 0, u = u + v >>> 0, l = l + w >>> 0, f = f + I >>> 0;
        }

        return n.endian([c, u, l, f]);
      })._ff = function (e, t, r, n, o, i, s) {
        var a = e + (t & r | ~t & n) + (o >>> 0) + s;
        return (a << i | a >>> 32 - i) + t;
      }, a._gg = function (e, t, r, n, o, i, s) {
        var a = e + (t & n | r & ~n) + (o >>> 0) + s;
        return (a << i | a >>> 32 - i) + t;
      }, a._hh = function (e, t, r, n, o, i, s) {
        var a = e + (t ^ r ^ n) + (o >>> 0) + s;
        return (a << i | a >>> 32 - i) + t;
      }, a._ii = function (e, t, r, n, o, i, s) {
        var a = e + (r ^ (t | ~n)) + (o >>> 0) + s;
        return (a << i | a >>> 32 - i) + t;
      }, a._blocksize = 16, a._digestsize = 16, e.exports = function (e, t) {
        if (null == e) throw new Error("Illegal argument " + e);
        var r = n.wordsToBytes(a(e, t));
        return t && t.asBytes ? r : t && t.asString ? s.bytesToString(r) : n.bytesToHex(r);
      };
    }, function (e, t) {
      var r, n;
      r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
        rotl: function (e, t) {
          return e << t | e >>> 32 - t;
        },
        rotr: function (e, t) {
          return e << 32 - t | e >>> t;
        },
        endian: function (e) {
          if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);

          for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);

          return e;
        },
        randomBytes: function (e) {
          for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));

          return t;
        },
        bytesToWords: function (e) {
          for (var t = [], r = 0, n = 0; r < e.length; r++, n += 8) t[n >>> 5] |= e[r] << 24 - n % 32;

          return t;
        },
        wordsToBytes: function (e) {
          for (var t = [], r = 0; r < 32 * e.length; r += 8) t.push(e[r >>> 5] >>> 24 - r % 32 & 255);

          return t;
        },
        bytesToHex: function (e) {
          for (var t = [], r = 0; r < e.length; r++) t.push((e[r] >>> 4).toString(16)), t.push((15 & e[r]).toString(16));

          return t.join("");
        },
        hexToBytes: function (e) {
          for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));

          return t;
        },
        bytesToBase64: function (e) {
          for (var t = [], n = 0; n < e.length; n += 3) for (var o = e[n] << 16 | e[n + 1] << 8 | e[n + 2], i = 0; i < 4; i++) 8 * n + 6 * i <= 8 * e.length ? t.push(r.charAt(o >>> 6 * (3 - i) & 63)) : t.push("=");

          return t.join("");
        },
        base64ToBytes: function (e) {
          e = e.replace(/[^A-Z0-9+\/]/gi, "");

          for (var t = [], n = 0, o = 0; n < e.length; o = ++n % 4) 0 != o && t.push((r.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | r.indexOf(e.charAt(n)) >>> 6 - 2 * o);

          return t;
        }
      }, e.exports = n;
    }, function (e, t) {
      function r(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
      }
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */


      e.exports = function (e) {
        return null != e && (r(e) || function (e) {
          return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0));
        }(e) || !!e._isBuffer);
      };
    }, function (e, t) {
      window.errorMessageTMX = {
        50800: {
          ar: "丨爻丕亘賰 賮賷 禺胤乇 賵賷鬲賲 鬲噩賲賷丿 丕賱兀賲賵丕賱 丕賱丌賳. 賷乇噩賶 丕賱丕鬲氐丕賱 亘禺丿賲丞 丕賱毓賲賱丕亍.",
          pt: "Sua conta est谩 em risco e os fundos est茫o congelados agora. Por favor, contate o atendimento ao cliente.",
          en: "Your account is at risk and the funds are frozen now. Please contact customer service.",
          es: "Tu cuenta se encuentra en riesgo y los fondos est谩n bloqueados por el momento. Por favor, ponte en contacto con nuestro servicio al cliente.",
          id: "Akun-mu beresiko dan dananya telah diblokir. Silahkan hubungi customer service.",
          ja: "銇婂妲樸伄銈偒銈︺兂銉堛伄銈汇偔銉ャ儶銉嗐偅銇儶銈广偗銇屽瓨鍦ㄣ仐銇︺亜銈嬨仧銈併€佷竴閮ㄦ鑳姐倰鍋滄銇椼伨銇椼仧銆傘偟銉濄兗銉堛伕銇旈€ｇ怠銇忋仩銇曘亜銆�",
          tr: "Hesab谋n risk alt谋nda ve bloke edildi. L眉tfen m眉艧teri hizmetleri ile ileti艧ime ge莽.",
          zh: "鎮ㄧ殑甯虫埗铏曟柤楂橀ⅷ闅笖璩囬噾宸茶鍑嶇祼锛岃珛鑸囧鏈嶈伅绻€�",
          ru: "袙邪褕 邪泻泻邪褍薪褌 薪邪褏芯写懈褌褋褟 胁 芯锌邪褋薪芯褋褌懈, 懈 褋褉械写褋褌胁邪 薪邪 薪械屑 蟹邪斜谢芯泻懈褉芯胁邪薪褘. 袨斜褉邪褌懈褌械褋褜 胁 褋谢褍卸斜褍 锌芯写写械褉卸泻懈."
        },
        50801: {
          ar: "丨爻丕亘賰 賲購毓乇囟 賱賱禺胤乇. 賷乇噩賶 丕賱丕鬲氐丕賱 亘禺丿賲丞 丕賱毓賲賱丕亍 賱丿賷賳丕.",
          pt: "Sua conta est谩 em risco. Entre em contato com nosso servi莽o de atendimento ao cliente.",
          en: "Your account is at risk. Please contact our customer service.",
          es: "Tu cuenta est谩 en riesgo. Contacta con nuestro servicio de atenci贸n al cliente.",
          id: "Akun kamu beresiko. Silahkan hubungi layanan pengguna kami.",
          ja: "銇婂妲樸伄銈偒銈︺兂銉堛伅鐝惧湪鍗遍櫤銇姸娉併伀銇傘倞銇俱仚銆傘偒銈广偪銉炪兗銈点兗銉撱偣銇俱仹銇旈€ｇ怠銇忋仩銇曘亜銆�",
          tr: "Bir hata olu艧tu. L眉tfen M眉艧teri Hizmetleri ile ileti艧ime ge莽",
          zh: "鎮ㄧ殑甯虫埗瀛樺湪棰ㄩ毆锛岃珛鑱公鎴戝€戠殑瀹㈡湇銆�",
          ru: "袙邪褕 邪泻泻邪褍薪褌 胁 芯锌邪褋薪芯褋褌懈. 小胁褟卸懈褌械褋褜 褋 薪邪褕械泄 褋谢褍卸斜芯泄 锌芯写写械褉卸泻懈 泻谢懈械薪褌芯胁."
        },
        50802: {
          ar: "賴賳丕賰 丕賱賰孬賷乇 賲賳 丕賱毓賲賱賷丕鬲. 丕賱乇噩丕亍 丕賱賲丨丕賵賱丞 賱丕丨賯丕賸",
          pt: "Muitas opera莽玫es. Por favor, tente novamente mais tarde",
          en: "Too many operations. Please try again later",
          es: "Demasiadas operaciones. Por favor, int茅ntelo de nuevo m谩s tarde",
          id: "Terlalu sering mencoba. Silahkan coba lagi nanti",
          ja: "鎿嶄綔銇岄牷绻併仐銇欍亷銈嬨伄銇熴倎銆佸緦銇汇仼鍐嶅害銇婅│銇椼亸銇犮仌銇勩€�",
          tr: "脟ok fazla i艧lem. L眉tfen daha sonra tekrar dene",
          zh: "鎿嶄綔閬庡害闋荤箒锛岃珛绋嶅緦鍐嶈│",
          ru: "小谢懈褕泻芯屑 屑薪芯谐芯 芯锌械褉邪褑懈泄. 袩芯锌褉芯斜褍泄褌械 锌芯蟹卸械"
        }
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n,
          o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          i = r(3),
          s = (n = i) && n.__esModule ? n : {
        default: n
      };

      var a = function (e) {
        for (var t = (e = e.replace(/^\?+/, "").replace(/&amp;/, "&")).split("&"), r = t.length, n = {}; r--;) {
          var o = t[r].split("=");

          if (o[0]) {
            var i = o[1] || "";

            try {
              i = decodeURIComponent(i);
            } catch (e) {
              i = unescape(i);
            }

            n[decodeURIComponent(o[0])] = i;
          }
        }

        return n;
      }(window.location.search),
          p = [],
          c = {
        pageId: 1,
        random: 1,
        onReport: null,
        submit: function (e) {
          s.default.register("kewlweb_onerror", {
            starttime: "",
            errormsg: "",
            target: "",
            errortype: 0,
            pageid: 0,
            webresponsetimes: 1
          }), s.default.track("kewlweb_onerror", {
            starttime: Date.now(),
            errormsg: e.errorMsg,
            target: e.target || e.from,
            errortype: e.errorType || 0,
            pageid: this.pageId,
            webresponsetimes: e.webResponseTimes || 1
          });
        }
      },
          u = {
        isOBJByType: function (e, t) {
          return Object.prototype.toString.call(e) === "[object " + (t || "Object") + "]";
        },
        isOBJ: function (e) {
          return "object" === (void 0 === e ? "undefined" : o(e)) && !!e;
        },
        isEmpty: function (e) {
          return null === e || !u.isOBJByType(e, "Number") && !e;
        },
        extend: function (e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);

          return e;
        },
        processError: function (e) {
          try {
            if (e.stack) {
              var t = e.stack.match("https?://[^\n]+"),
                  r = (t = t ? t[0] : "").match(":(\\d+):(\\d+)");
              return r || (r = [0, 0, 0]), {
                errormsg: u.processStackMsg(e),
                rowNum: r[1],
                colNum: r[2],
                target: t.replace(r[0], ""),
                _orgMsg: e.toString()
              };
            }

            return e.name && e.message && e.description ? {
              errormsg: JSON.stringify(e)
            } : e;
          } catch (t) {
            return e;
          }
        },
        processStackMsg: function (e) {
          var t = e.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, ""),
              r = e.toString();
          return t.indexOf(r) < 0 && (t = r + "@" + t), t;
        }
      },
          l = window.onerror;

      window.onerror = function (e, t, r, n, o) {
        if (t.indexOf("fbclid") > -1) return !1;
        var i = e;
        o && o.stack && (i = u.processStackMsg(o)), u.isOBJByType(i, "Event") && (i += i.type ? "--" + i.type + "--" + (i.target ? i.target.tagName + "::" + i.target.src : "") : ""), m.push({
          errorMsg: i,
          target: t,
          rowNum: r,
          colNum: n,
          _orgMsg: e
        }), g(), l && l.apply(window, arguments);
      };

      try {
        var f = window.location.href;
        (f.indexOf("/app/") > 0 || f.indexOf("/activity") > 0) && ("{}" === JSON.stringify(a) || a.cache) || window.addEventListener("error", function (e) {
          if (window.location.href.indexOf("fbclid") > -1) return !1;
          var t = e.type,
              r = e.target,
              n = r.localName,
              o = e.message || "",
              i = "";
          "img" === n || "script" === n ? i = r.src : "link" === n && (i = r.href);
          var s = i.match(/analytics.js|fbevents.js|.html|tags.js|esx.esxscloud.com|www.googletagmanager.com/g);
          if (!i || s) return !1;
          m.push({
            errorMsg: t + "-" + n + ": " + i + " - " + o.toString()
          }), g();
        }, !0);
      } catch (e) {}

      var d = [],
          h = 0;

      function g(e) {
        Math.random(), c.random;

        if (p.length) {
          var t = p.shift();
          t.errormsg = (t.errormsg + "" || "").substr(0, 500), d.push(t), c.onReport && c.onReport(c.id, t), clearTimeout(h), h = 0, d.length && (c.submit ? c.submit(d[0]) : new Image().src = url, d = []);
        }
      }

      var m = {
        push: function (e) {
          var t = u.isOBJ(e) ? u.processError(e) : {
            errorMsg: e
          };
          return c.ext && !t.ext && (t.ext = c.ext), t.from || (t.from = location.href), p.push(t), g(), m;
        },
        report: function (e, t) {
          return e && m.push(e), t && g(), m;
        },
        init: function (e) {
          if (u.isOBJ(e)) for (var t in e) e.hasOwnProperty(t) && (c[t] = e[t]);
          return !!parseInt(c.pageId, 10) && (p.length && g(), m);
        },
        __onerror__: window.onerror
      };
      window.KEWLError = m, t.default = m;
    }, function (e, t, r) {
      var n,
          o = r(3),
          i = (n = o) && n.__esModule ? n : {
        default: n
      };
      window.addEventListener("load", function () {
        if (!this.window.KEWLSensors || window.performance || !window.performance.timing || !window.performance.getEntries) {
          var e = performance.timing.fetchStart,
              t = performance.timing.navigationStart || e,
              r = performance.timing.domainLookupEnd,
              n = performance.timing.domainLookupStart || e,
              o = performance.timing.connectEnd,
              s = performance.timing.connectStart,
              a = performance.timing.responseEnd,
              p = performance.timing.responseStart,
              c = performance.timing.domContentLoadedEventEnd;
          i.default.register("kewlweb_performance", {
            language: "",
            dnstime: 0,
            onloadtime: 0,
            domreadytime: 0,
            tcptime: 0,
            requesttime: 0,
            whitescreentime: 0,
            entrieslist: "",
            firstScreenOnloadTime: 0,
            fcp: 0
          });
          var u = setInterval(function () {
            try {
              if (0 !== performance.timing.loadEventEnd) {
                var e = performance.timing;
                clearInterval(u);

                for (var l = performance.getEntries(), f = [], d = [], h = [], g = null, m = 0, y = l.length; m < y; m++) "resource" == l[m].entryType && f.push(l[m]);

                for (var _ = 0; _ < f.length; _++) !g && "script" == f[_].initiatorType && f[_].name.indexOf("liveme.com") > -1 && (g = f[_]);

                d.push(g);

                for (var v = 0; v < d.length; v++) if (d[v] && "{}" != JSON.stringify(d[v])) {
                  var w = {
                    fetchStart: d[v].fetchStart,
                    name: d[v].name,
                    responseEnd: d[v].responseEnd
                  };
                  h.push(w);
                }

                var I = h.length > 0 ? JSON.stringify(h) : "",
                    b = {
                  getFcpTime: function () {
                    var e = performance.getEntriesByName("first-contentful-paint") || [];
                    return e.length > 0 ? parseInt(e[0].startTime) : 0;
                  }
                },
                    S = c > t ? c - t : 0,
                    A = {
                  language: navigator.language || "",
                  dnstime: r - n || 0,
                  onloadtime: e.loadEventEnd - t || 0,
                  domreadytime: c > t ? c - t : 0,
                  tcptime: o - s || 0,
                  requesttime: a - p || 0,
                  whitescreentime: p - t || 0,
                  entrieslist: I || "",
                  firstScreenOnloadTime: S,
                  fcp: b.getFcpTime()
                };
                i.default.track("kewlweb_performance", A);
              }
            } catch (e) {
              clearInterval(u);
            }
          }, 1);
        }
      }, !1);
    }, function (e, t, r) {
      r(15), n(r(52)), n(r(3)), n(r(49)), n(r(24)), n(r(1)), n(r(53)), n(r(54));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      r(50);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n,
          o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          i = r(2),
          s = r(15),
          a = r(1),
          p = (n = a) && n.__esModule ? n : {
        default: n
      };
      var c = {
        userid: "",
        account: "",
        liveid: "",
        br: "",
        brv: "",
        dis_pc: "",
        dis_br: "",
        network: 0,
        logintype: 0,
        country_sysyem: "",
        channel: "",
        pagetype: 0,
        system: 0,
        brand: "",
        ver: "",
        logtime: 0,
        tmzone: 0,
        uptime: 0,
        referrer: "",
        url: ""
      },
          u = (navigator.platform, navigator.userAgent);
      window.location.href, window.location.search;

      function l(e) {
        if (!e.businessIndex || !e.params) throw new Error("please config businessIndex and params");
        this.businessIndex = e.businessIndex, this.businessParams = e.params, this._businessParams = i.utility.copy(e.params), this.domainUrl = p.default ? location.protocol + "//liveme-up.liveme.com" : "http://118.89.55.235/g/v1/";
      }

      !function () {
        var e,
            t,
            r,
            n,
            a,
            p,
            l,
            f,
            d,
            h,
            g,
            m,
            y,
            _,
            v,
            w = u.toLowerCase();

        for (r in i.sysMap) if (i.sysMap.hasOwnProperty(r) && w.indexOf(r) > -1) {
          if ("object" === o(i.sysMap[r])) {
            for (n in i.sysMap[r]) if (i.sysMap[r].hasOwnProperty(n) && w.indexOf(n) > -1) {
              a = i.sysMap[r][n];
              break;
            }
          } else a = i.sysMap[r];

          break;
        }

        if (18 === a || 19 === a || 20 === a ? p = "Mac" : 16 === a || 17 === a ? p = (e = /iPad|iPhone/.exec(u)) && e[0] || p : 15 === a && (p = "Mobile"), (e = /(chrome)[ \/]([\w.]+)/i.exec(w) || /(AppleWebKit)[ \/]([\w.]+)/i.exec(w) || /ms(ie)\s([\w.]+)/i.exec(w) || /(safari)[ \/]([\w.]+)/i.exec(w) || /(firefox)[ \/]([\w.]+)/i.exec(w) || []) && e[1] && (l = e[1], t = e[2]), m = window.innerWidth + "*" + window.innerHeight, y = window.screen.width + "*" + window.screen.height, f = (d = (d = navigator.connection && navigator.connection.type ? navigator.connection.type : "0").toLowerCase()).indexOf("wifi") > -1 ? 1 : d.indexOf("2g") > -1 ? 2 : d.indexOf("3g") > -1 ? 3 : d.indexOf("4g") > -1 ? 4 : 0, h = window.navigator.userLanguage || window.navigator.language, _ = i.utility.getQueryString("f") ? i.utility.getQueryString("f") : i.utility.getQueryString("from") ? i.utility.getQueryString("from") : i.utility.getQueryString("channel") ? i.utility.getQueryString("channel") : i.utility.getQueryString("source") ? i.utility.getQueryString("source") : "0", g = s.KEWLApp && s.KEWLApp.isKEWLApp ? 3 : i.utility.isMobile() ? 2 : 1, (v = i.utility.getCookie("uuid")) || (v = i.utility.createUUID(), i.utility.setCookie("uuid", v, {
          expires: 365
        })), c.account = v, c.br = l, c.brv = t, c.dis_pc = m, c.dis_br = y, c.network = f, c.country_sysyem = h.split("-")[1], c.channel = _, c.pagetype = g, c.system = a, c.brand = p, c.ver = window.navigator.userAgent, c.tmzone = Math.abs(new Date().getTimezoneOffset() / 60), c.uptime = Math.round(new Date().getTime() / 1e3), c.referrer = document.referrer, c.url = location.href, s.KEWLApp && s.KEWLApp.isKEWLApp) {
          s.KEWLApp.getUserInfo(function (e) {
            var t = "string" == typeof e && "null" !== e && "" !== e ? JSON.parse(e) : e;
            t instanceof Object && t.userId && t.token && t.deviceId && (c.userid = t.userId);
          });
          var I = s.KEWLApp.getVerName();
          i.utility.versionCompare(I, "4.0.95") && (document.onreadystatechange = function () {
            "complete" == document.readyState && s.KEWLApp.pageFinish && "function" == typeof s.KEWLApp.pageFinish && "function" == typeof performance.getEntries && s.KEWLApp.pageFinish(location.href, JSON.stringify(performance.getEntries()[0]));
          });
        } else {
          var b = localStorage.getItem("userInfo") ? JSON.parse(s.Base64.fromBase64(localStorage.getItem("userInfo"))) : "";
          c.userid = b ? b.user.uid : "", c.liveid = i.utility.getQueryString("videoid");
          var S = localStorage.getItem("regType") || 0;
          c.logintype = S, c.logtime = b && b.user && b.user.reg_time ? Math.round((new Date().getTime() - parseInt(b.user.reg_time + "000")) / 3600 / 24 / 1e3) : 0;
        }
      }(), l.prototype.report = function (e) {
        if ("object" === (void 0 === e ? "undefined" : o(e))) for (var t in this.businessParams) e.hasOwnProperty(t) && this.businessParams.hasOwnProperty(t) && e[t] ? this.businessParams[t] = e[t] : this.businessParams[t] = this._businessParams[t];
        var r = i.utility.buildQuery(c),
            n = i.utility.buildQuery(this.businessParams),
            s = {
          product_no: 184,
          public_index: 3,
          business_index: this.businessIndex
        };
        this.domainUrl, i.utility.buildQuery(s);
      };
      var f = atob("S0VXTEluZm9j");
      l.noConflict = function (e) {
        window[f] === l && (window["_" + f] = l);
      }, window[f] = l, t.default = l;
    }, function (e, t) {
      var r = {
        live: "",
        live_test: ""
      };

      if (window.KEWLApp && window.KEWLApp.getPackgetInfo) {
        var n = window.KEWLApp.getPackgetInfo();
        "arab" === n ? (r.live = "//live.liveme.com", r.live_test = "//featuremix-qa.live.liveme.com", r.baseUrl = "https://live.liveme.com") : "us" === n ? (r.live = "//live.aaalive.com", r.live_test = "//featuremix-qa.live.aaalive.com", r.baseUrl = "https://live.liveme.com") : "cheez" === n ? (r.live = "//live.cheez.com", r.live_test = "//featuremix-qa.live.cheez.com", r.baseUrl = "https://live.liveme.com") : "meet" === n ? (r.live = "//live.liveme.com", r.live_test = "//featuremix-qa.live.liveme.com", r.baseUrl = "https://live.liveme.com") : "pro" === n ? (r.live = "//apipro.liveme.com", r.live_test = "//featuremix-qa.live.liveme.com", r.baseUrl = "https://live.liveme.com") : "athena" === n ? (r.live = "//apipro.liveme.com", r.live_test = "//featuremix-qa.live.liveme.com", r.baseUrl = "https://live.liveme.com") : (r.live = "//live.liveme.com", r.live_test = "//featuremix-qa.live.liveme.com", r.baseUrl = "https://live.liveme.com");
      }

      window.HTTPUrl = r;
    }, function (e, t) {
      window.KEWLPageEvent = {
        pageShowCalls: [],
        pageHideCalls: [],
        onPageShow: function (e) {
          if (!(e instanceof Function)) throw new Error("Arguments must be function");
          this.pageShowCalls.push(e);
        },
        onPageHide: function (e) {
          if (!(e instanceof Function)) throw new Error("Arguments must be function");
          this.pageHideCalls.push(e);
        }
      }, window.pagedidappear = function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        window.KEWLPageEvent.pageShowCalls.forEach(function (e) {
          e && e.apply(void 0, t);
        });
      }, window.pagediddisappear = function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        window.KEWLPageEvent.pageHideCalls.forEach(function (e) {
          e && e.apply(void 0, t);
        });
      };
    }]);
  }).call(root);
})( // The environment-specific global.
function () {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  return {};
}.call(this));