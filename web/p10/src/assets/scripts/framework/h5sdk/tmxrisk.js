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
    !function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }

      n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var i in t) n.d(o, i, function (e) {
          return t[e];
        }.bind(null, i));
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 51);
    }({
      51: function (t, e) {
        !function () {
          try {
            var t = function (t) {
              var e = document.getElementsByTagName("head").item(0),
                  n = document.createElement("script");
              n.setAttribute("type", "text/javascript"), n.setAttribute("src", "https://online-metrix.imars.cloud/tags.js?org_id=bnjx0fpj&session_id=" + t + "&allow_reprofile=1"), e.appendChild(n);
            },
                e = function () {
              return new Promise(function (t, e) {
                var n = window.ISONLINE || void 0 === window.ISONLINE ? window.HTTPUrl.live : window.HTTPUrl.live_test,
                    o = {
                  h5: 1,
                  isKewlApp: window.KEWLApp.isKEWLApp,
                  risk_token: localStorage ? null == localStorage.getItem("tmxToken") ? "" : localStorage.getItem("tmxToken") : "",
                  tmx_session_id: localStorage ? null == localStorage.getItem("tmxSessionId") ? "" : localStorage.getItem("tmxSessionId") : ""
                };
                window.KEWLHttp({
                  url: n + "/risk/session/create",
                  method: "POST",
                  data: o,
                  transformRequest: [function (t) {
                    var e = "";

                    for (var n in t) e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]) + "&";

                    return e;
                  }]
                }).then(function (e) {
                  t(e.data);
                }).catch(function (t) {
                  e(t);
                });
              });
            };

            window.Tmxrisk = {
              init: function (n) {
                if (window.Tmxrisk.initRunCount = window.Tmxrisk.initRunCount + 1, !window.KEWLApp) return n && n instanceof Function && n({
                  msg: "寮轰緷璧杒ewlglobal.js,璇峰湪姝ゆ枃浠朵箣鍚庡紩鍏�",
                  state: 0,
                  tmxSessionId: "",
                  tmxToken: "",
                  err: window.KEWLApp
                }), !1;
                window.KEWLApp.isKEWLApp && window.KEWLApp.doTmxProfile ? window.KEWLApp.doTmxProfile(function (o) {
                  o ? (t(o), n && n instanceof Function && n({
                    msg: "window.KEWLApp.doTmxProfile",
                    state: 1,
                    tmxSessionId: o,
                    tmxToken: ""
                  })) : e().then(function (e) {
                    if (200 == e.status && e.data) {
                      t(e.data.sid);
                      var o = e.data.token || "";
                      n && n instanceof Function && n({
                        msg: "window.KEWLApp.doTmxProfile err to /risk/session/create",
                        state: 1,
                        tmxSessionId: "",
                        tmxToken: o
                      });
                    } else n({
                      msg: "window.KEWLApp.doTmxProfile errto /risk/session/create",
                      state: 0,
                      tmxSessionId: "",
                      tmxToken: "",
                      err: e
                    });
                  }).catch(function (t) {
                    n({
                      msg: "window.KEWLApp.doTmxProfile errto /risk/session/create",
                      state: 0,
                      tmxSessionId: "",
                      tmxToken: "",
                      err: t
                    });
                  });
                }) : e().then(function (e) {
                  if (200 == e.status && e.data) {
                    t(e.data.sid);
                    var o = e.data.token || "";
                    n && n instanceof Function && n({
                      msg: "/risk/session/create",
                      state: 1,
                      tmxSessionId: "",
                      tmxToken: o
                    });
                  } else n({
                    msg: "/risk/session/create",
                    state: 0,
                    tmxSessionId: "",
                    tmxToken: "",
                    err: e
                  });
                }).catch(function (t) {
                  n({
                    msg: "/risk/session/create",
                    state: 0,
                    tmxSessionId: "",
                    tmxToken: "",
                    err: t
                  });
                });
              },
              initRunCount: 0
            };
          } catch (t) {}
        }();
      }
    });
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