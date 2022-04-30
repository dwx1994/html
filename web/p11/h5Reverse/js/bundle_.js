var laya = function() {
    "use strict";
    class e {
        constructor() {}
        static getUrlParams(t, i = "1.0.1") {
            let s = !1, a = new Array();
            for (let e in t) {
                if ("string" != typeof t[e] && "number" != typeof t[e]) continue;
                "tick" == e && (s = !0);
                let i = e.toLocaleLowerCase();
                t[i] = t[e], a.push(i);
            }
            if (0 == s) {
                var n = new Date();
                t.tick = Math.floor(n.getTime() / 1e3), a.push("tick");
            }
            a.sort(function(e, t) {
                return e > t ? 1 : -1;
            });
            let o = "";
            for (var r = 0; r < a.length; r++) o = o + a[r] + "=" + t[a[r]] + "&";
            let l = "";
            return o + "key=" + (l = null != e.mKeys[i] ? Y.MD5(o + "key=" + e.mKeys[i]) : Y.MD5(o + "key=wvkbfuhl"));
        }
        static getServer() {
            return W.app.mWX.mURL;
        }
        static getCDN() {
            return "https://tcdn.wanzhushipin.cn/xcx/sf/";
        }
        static getCDNUrl() {
            return "https://tcdn.wanzhushipin.cn/xcx/games/xcx_yyj/";
        }
        static getJSON(e) {
            if ("" == e || null == e) return {
                code: -999
            };
            var t = e.indexOf("{", 0);
            return e = e.substr(t, e.length - t), JSON.parse(e);
        }
    }
    e.mKeys = {
        "1.0.1": "qweasdqweazxc"
    };
    var t = Laya.HttpRequest;
    class i {
        constructor() {
            this.m_httpHelper = null, this.m_url = "", this.m_first = !0, this.m_httpHelper = new t();
        }
        static GetInstance() {
            return null == this.m_instance && (this.m_instance = new i()), this.m_instance;
        }
        SetUrl(e) {
            this.m_url = e, this.m_first && (this.m_first = !1, this.channel_id = X.mChannle, 
            this.first_channel_id = W.app.first_channel_id, this.first_adid = W.app.first_adid, 
            this.adid = X.mAdId, this.uid = Q.uo.mWeUser.uid, this.isNew = W.app.isNew, this.session_id = new Date().valueOf(), 
            this.share_from = X.mSfrom, this.first_share_from = W.app.first_share_from);
        }
        WXLoadFinish() {
            let e = {
                is_new: W.app.isNew,
                system: Laya.Browser.onIOS ? 2 : 1
            }, t = '&clos="' + JSON.stringify(e) + '"&mobile=' + W.app.system + '&keyname="homepage_load"&now_time' + new Date().valueOf() + "&session_id" + this.session_id + '"&platform=5&uid=' + Q.uo.mWeUser.uid;
            this.m_httpHelper.send(this.m_url + t, null, "get", "text");
        }
        SendPoint(t, i) {
        }
    }
    i.m_instance = null;
    class s extends Laya.Script3D {
        constructor() {
            super();
        }
        onAwake() {
            this._owner = this.owner, this._trans = this._owner.transform;
        }
        onEnable() {}
        onDisable() {}
    }
    class a {
        constructor() {
            this.gravity = 3 * -9.8, this.cannonStep = 1, this.cannonRefreshDelta = 1 / 60;
        }
        static get instacne() {
            return a._instance || (a._instance = new a()), a._instance;
        }
        enableCannonWorld() {
            console.log("enable cannon world"), this.world = new CANNON.World(), this.world.gravity.set(0, this.gravity, 0), 
            this.world.broadphase = new CANNON.NaiveBroadphase(), this.world.quatNormalizeFast = !1, 
            this.world.quatNormalizeSkip = 0, this.world.defaultContactMaterial.restitution = 0, 
            this.world.defaultMaterial.restitution = -1, Laya.timer.frameLoop(this.cannonStep, this, this.updateCannonWorld);
        }
        updateCannonWorld() {
            this.world.step(this.cannonRefreshDelta);
        }
        setWorldIterations(e) {
            this.world.solver.iterations = e, console.log("set iterations", e);
        }
    }
    var n = CANNON.Vec3;
    class o extends Laya.Script3D {
        constructor() {
            super(), this._body = null, this.moveByForce = !1, this.isBox = !0, this.isGravity = !0, 
            this._stop = !1, this._active = !0;
        }
        onAwake() {
            super.onAwake(), this._owner = this.owner, this._trans = this._owner.transform;
        }
        initCollider(e, t = 0, i = !1, s = !1, o = !0, r = null, l = !0, h) {
            this._col = e, this.moveByForce = s, this._colliderCall = r, this.isBox = o, this.isGravity = l;
            var d = new CANNON.Material();
            if (d.restitution = .9, this._body = new CANNON.Body({
                mass: t,
                material: d
            }), o) {
                var m = new CANNON.Box(new n(.5 * e.transform.getWorldLossyScale().x, .5 * e.transform.getWorldLossyScale().y, .5 * e.transform.getWorldLossyScale().z));
                this._body.addShape(m, new CANNON.Vec3(e.transform.localPositionX, e.transform.localPositionY, e.transform.localPositionZ));
            } else {
                var c = new CANNON.Sphere(.5 * e.transform.getWorldLossyScale().x);
                this._body.addShape(c);
            }
            this._body.tag = h, this._body.owner = this._owner, this._body.position = new n(e.transform.position.x, e.transform.position.y, e.transform.position.z), 
            this._body.quaternion = new CANNON.Quaternion(e.transform.rotation.x, e.transform.rotation.y, e.transform.rotation.z, e.transform.rotation.w), 
            this._colliderCall && this._body.addEventListener("collide", this._onCollisionEnter.bind(this)), 
            i && (this._body.collisionResponse = !1), a.instacne.world.addBody(this._body);
        }
        onUpdate() {
            this._stop || null == this._body || (this.moveByForce ? (this._owner.transform.position.x = this._body.position.x, 
            this._owner.transform.position.y = this._body.position.y, this._owner.transform.position.z = this._body.position.z, 
            this._owner.transform.position = this._owner.transform.position, this._owner.transform.rotation.x = this._body.quaternion.x, 
            this._owner.transform.rotation.y = this._body.quaternion.y, this._owner.transform.rotation.z = this._body.quaternion.z, 
            this._owner.transform.rotation.w = this._body.quaternion.w, this._owner.transform.rotation = this._owner.transform.rotation) : (this._body.position.x = this._col.transform.position.x, 
            this._body.position.y = this._col.transform.position.y, this._body.position.z = this._col.transform.position.z, 
            this._body.quaternion.x = this._col.transform.rotation.x, this._body.quaternion.y = this._col.transform.rotation.y, 
            this._body.quaternion.z = this._col.transform.rotation.z, this._body.quaternion.w = this._col.transform.rotation.w));
        }
        _onCollisionEnter(e) {
            this._colliderCall(e);
        }
        onDisable() {
            null != this._body && a.instacne.world.removeBody(this._body);
        }
    }
    var r, l = Laya.ClassUtils.regClass;
    !function(e) {
        !function(e) {
            class t extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("test/StartScene");
                }
            }
            e.StartSceneUI = t, l("ui.test.StartSceneUI", t);
        }(e.test || (e.test = {}));
    }(r || (r = {})), function(e) {
        !function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(t.uiView);
                }
            }
            t.uiView = {
                type: "View",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "loading/bg.png",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 3
                }, {
                    type: "Box",
                    props: {
                        y: 100,
                        x: 0,
                        var: "mianBox"
                    },
                    compId: 12,
                    child: [ {
                        type: "Image",
                        props: {
                            width: 750,
                            skin: "collection/cl_bg.png",
                            sizeGrid: "259,123,367,204",
                            height: 1055
                        },
                        compId: 4
                    }, {
                        type: "List",
                        props: {
                            y: 205,
                            x: 58,
                            width: 633,
                            var: "list",
                            spaceY: 26,
                            spaceX: 27,
                            repeatX: 3,
                            height: 799
                        },
                        compId: 9,
                        child: [ {
                            type: "Box",
                            props: {
                                x: .5,
                                width: 193,
                                renderType: "render",
                                height: 249
                            },
                            compId: 8,
                            child: [ {
                                type: "Image",
                                props: {
                                    x: 0,
                                    width: 193,
                                    var: "img_select",
                                    skin: "collection/cl_unBg.png",
                                    name: "img_select",
                                    height: 249
                                },
                                compId: 6
                            }, {
                                type: "Image",
                                props: {
                                    y: 10,
                                    x: -6,
                                    var: "img_item",
                                    skin: "collection/10.png",
                                    scaleY: .8,
                                    scaleX: .8,
                                    name: "img_item"
                                },
                                compId: 7
                            }, {
                                type: "Image",
                                props: {
                                    y: 180,
                                    x: 34,
                                    var: "btn_unlock",
                                    skin: "collection/btn_unlock_fx.png",
                                    scaleY: .8,
                                    scaleX: .8,
                                    name: "btn_unlock"
                                },
                                compId: 10
                            }, {
                                type: "Image",
                                props: {
                                    y: 55,
                                    x: 67,
                                    var: "img_wenhao",
                                    skin: "collection/unlock.png",
                                    name: "img_wenhao"
                                },
                                compId: 14
                            } ]
                        } ]
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 35,
                        x: 25,
                        var: "btn_back",
                        texture: "collection/cl_back.png"
                    },
                    compId: 13
                } ],
                loadList: [ "loading/bg.png", "collection/cl_bg.png", "collection/cl_unBg.png", "collection/10.png", "collection/btn_unlock_fx.png", "collection/unlock.png", "collection/cl_back.png" ],
                loadList3D: []
            }, e.collectionViewUI = t, l("ui.wx.collectionViewUI", t);
            class i extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), 
                    this.createView(i.uiView);
                }
            }
            i.uiView = {
                type: "View",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        y: 10,
                        x: 10,
                        top: 0,
                        skin: "loading/bg.png",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 128,
                        x: 85,
                        skin: "loading/logo.png",
                        centerX: 0
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 985,
                        x: 85,
                        width: 600,
                        skin: "loading/ld_pro.png",
                        height: 60
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 992,
                        x: 92,
                        width: 586,
                        var: "ld_pro",
                        skin: "loading/ld_pro$bar.png",
                        height: 46
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 1015,
                        x: 85,
                        var: "ld_icon",
                        skin: "loading/ld_icon.png",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 7
                }, {
                    type: "Label",
                    props: {
                        y: 1050,
                        var: "txt_pro",
                        text: "0%",
                        fontSize: 40,
                        color: "#ffffff",
                        centerX: 0,
                        bold: !0
                    },
                    compId: 14
                } ],
                loadList: [ "loading/bg.png", "loading/logo.png", "loading/ld_pro.png", "loading/ld_pro$bar.png", "loading/ld_icon.png" ],
                loadList3D: []
            }, e.loadingViewUI = i, l("ui.wx.loadingViewUI", i);
            class s extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(s.uiView);
                }
            }
            s.uiView = {
                type: "Dialog",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        y: 20,
                        x: 20,
                        top: 0,
                        skin: "loading/bg.png",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 3
                }, {
                    type: "Box",
                    props: {
                        y: 517,
                        x: 220,
                        var: "box_main"
                    },
                    compId: 11,
                    child: [ {
                        type: "Sprite",
                        props: {
                            x: 5,
                            texture: "relive/rl_bg.png",
                            name: ""
                        },
                        compId: 4
                    }, {
                        type: "Sprite",
                        props: {
                            y: 24,
                            x: 29,
                            var: "img_circle",
                            texture: "relive/rl_circle.png",
                            name: ""
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            y: 95,
                            x: 114,
                            var: "img_num",
                            skin: "relive/1.png",
                            name: ""
                        },
                        compId: 9
                    }, {
                        type: "Image",
                        props: {
                            y: 338,
                            var: "btn_relive",
                            skin: "relive/rl_fuhuo1.png",
                            name: ""
                        },
                        compId: 10
                    } ]
                }, {
                    type: "Image",
                    props: {
                        y: 1002,
                        x: 303,
                        var: "btn_skip",
                        texture: "relive/rl_skip.png"
                    },
                    compId: 8
                } ],
                loadList: [ "loading/bg.png", "relive/rl_bg.png", "relive/rl_circle.png", "relive/1.png", "relive/rl_fuhuo1.png", "relive/rl_skip.png" ],
                loadList3D: []
            }, e.reliveDialogUI = s, l("ui.wx.reliveDialogUI", s);
            class a extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(a.uiView);
                }
            }
            a.uiView = {
                type: "Dialog",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "loading/bg.png",
                        right: 0,
                        left: 1,
                        bottom: 0
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 180,
                        x: 267,
                        var: "img_title",
                        skin: "result/re_sucess.png",
                        centerX: 0
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 1e3,
                        x: 322,
                        var: "img_next",
                        skin: "result/re_next.png",
                        centerX: 0
                    },
                    compId: 5
                } ],
                loadList: [ "loading/bg.png", "result/re_sucess.png", "result/re_next.png" ],
                loadList3D: []
            }, e.resultDialogUI = a, l("ui.wx.resultDialogUI", a);
            class n extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(n.uiView);
                }
            }
            n.uiView = {
                type: "Dialog",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        y: 40,
                        x: 40,
                        top: 0,
                        skin: "loading/bg.png",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 3
                }, {
                    type: "Box",
                    props: {
                        y: 370,
                        x: 73,
                        var: "box_main"
                    },
                    compId: 13,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: 1,
                            texture: "reward/rl_light.png",
                            name: ""
                        },
                        compId: 4
                    }, {
                        type: "Sprite",
                        props: {
                            x: 181,
                            texture: "reward/rw_title.png",
                            name: ""
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            y: 520,
                            x: 147,
                            var: "btn_get",
                            skin: "reward/rw_get1.png",
                            name: ""
                        },
                        compId: 6
                    }, {
                        type: "Image",
                        props: {
                            y: 170,
                            x: 174,
                            var: "img_item",
                            skin: "collection/17.png",
                            name: ""
                        },
                        compId: 7
                    } ]
                }, {
                    type: "Sprite",
                    props: {
                        y: 1030,
                        x: 339,
                        var: "btn_skip",
                        texture: "reward/rw_skip.png",
                        name: ""
                    },
                    compId: 8
                } ],
                loadList: [ "loading/bg.png", "reward/rl_light.png", "reward/rw_title.png", "reward/rw_get1.png", "collection/17.png", "reward/rw_skip.png" ],
                loadList3D: []
            }, e.rewardDialogUI = n, l("ui.wx.rewardDialogUI", n);
        }(e.wx || (e.wx = {}));
    }(r || (r = {}));
    class h extends Laya.EventDispatcher {
        static get Inst() {
            return h._inst || (h._inst = new h()), h._inst;
        }
    }
    h._inst = null, h.INIT_JUMP_GAMES = "INIT_JUMP_GAMES", h.CLICK_GAME_SUCCESS_CALLBACK = "CLICK_GAME_SUCCESS_CALLBACK", 
    h.FENFA_GAMES_SHOW = "FENFA_GAMES_SHOW", h.FENFA_GAMES_CLICK_GAME = "FENFA_GAMES_CLICK_GAME", 
    h.TAB_GAMES_SHARE_INIT = "TAB_GAMES_SHARE_INIT", h.TAB_GAMES_SHARE_CLOSE = "TAB_GAMES_SHARE_CLOSE", 
    h.TAB_GAMES_SHARE_CLICK_TO_GAME = "TAB_GAMES_SHARE_CLICK_TO_GAME", h.BANNER_GAMES_INIT = "BANNER_GAMES_INIT", 
    h.HOT_GAMES_INIT = "HOT_GAMES_INIT", h.HOT_GAMES_ON_CLOSE = "HOT_GAMES_ON_CLOSE", 
    h.HOT_GAMES_ON_TO_GAME = "HOT_GAMES_ON_TO_GAME", h.RESULT_GAMES_INIT = "RESULT_GAMES_INIT", 
    h.FRIEND_SHARE_GAMES_INIT = "FRIEND_SHARE_GAMES_INIT", h.FRIEND_SHARE_GAMES_ON_CLOSE = "FRIEND_SHARE_GAMES_ON_CLOSE";
    class d extends Laya.Label {
        constructor() {
            super(), this.moveTimeType = !0, this.size(Laya.stage.width, Laya.stage.height), 
            this.pos(0, 0);
        }
        preventMove() {
            return !!this.moveTimeType && (this.moveTimeType = !1, Laya.timer.once(100, this, () => {
                this.moveTimeType = !0;
            }), !0);
        }
        rotateIcon(e, t) {
            e.rotation = -90, Laya.Tween.to(e, {
                rotation: 0
            }, 450, null, Laya.Handler.create(this, () => {
                t.run();
            }));
        }
        createBg(e = .75) {
            let t = new Laya.Label();
            t.bgColor = "#000", t.alpha = e, t.size(this.width, this.height), this.addChild(t);
        }
    }
    class m {
        constructor() {
            this.jumpedGameInfo = {}, this.jumpGameInfo = {
                jump_tag: "",
                callBack: "",
                jump_appid: "",
                showList: []
            };
        }
        static get Inst() {
            return m._inst || (m._inst = new m()), m._inst;
        }
        initEvent() {
            h.Inst.on(h.INIT_JUMP_GAMES, this, this.initJumpGames), h.Inst.on(h.CLICK_GAME_SUCCESS_CALLBACK, this, this.changeClickGame);
        }
        initJumpGames(e, t) {
            this.jumpedGameInfo[e] = t;
        }
        changeClickGame(e, t, i) {
            this.jumpedGameInfo[t].forEach(t => {
                t.appid === e && (t.jumped = i.jumped);
            });
        }
        jump(e, t, i, s) {
            console.log(e.name), this.jumpGameInfo.jump_tag = t, this.jumpGameInfo.callBack = s, 
            this.jumpGameInfo.showList = i;
            let a = [], n = [];
            for (let e = 0; e < this.jumpedGameInfo[t].length; e++) {
                let i = this.jumpedGameInfo[t][e];
                i.jumped ? n.push(i.appid) : a.push(i);
            }
            n.indexOf(e.appid) < 0 || !a.length ? (this.jumpGameInfo.jump_appid = e.appid, this.jumpGame(e, !0)) : (a = this.randomArr(a), 
            this.jumpGameInfo.jump_appid = a[0].appid, this.jumpGame(a[0], !1));
        }
        jumpGame(e, t, i = "", s = null) {
            console.log(e.name), i && (this.jumpGameInfo.jump_tag = i);
            let a = e.appid, n = "";
            n = e.param.indexOf("?") >= 0 || e.path.indexOf("?") >= 0 ? e.path + e.param : e.path + "?" + e.param, 
            Laya.Browser.onMiniGame ? wx.navigateToMiniProgram({
                appId: a,
                path: n,
                fail: () => {
                    m.Inst.jumpedCB(e, 0, t);
                },
                success: () => {
                    s && s.run(), m.Inst.jumpedCB(e, 1, t);
                }
            }) : m.Inst.jumpedCB(e, 1, t);
        }
        jumpedCB(e, t, i) {
            h.Inst.event(h[this.jumpGameInfo.callBack], [ m.Inst.jumpGameInfo, e, t, i ]), "friend_share" == this.jumpGameInfo.jump_tag && h.Inst.event(h.FRIEND_SHARE_GAMES_ON_CLOSE), 
            1 == t && m.Inst.jumpGameInfo.jump_appid && x.ClickGame(m.Inst.jumpGameInfo.jump_appid, m.Inst.jumpGameInfo.jump_tag), 
            this.sendPoint(e.gameid, t);
        }
        randomArr(e) {
            let t = e.concat(), i = e.length;
            for (let e = 0; e < i; e++) {
                let s = t[e], a = Math.floor(Math.random() * i);
                t[e] = t[a], t[a] = s;
            }
            return t;
        }
        sendPoint(e, t) {
            let s = {};
            s.game_show_list = this.jumpGameInfo.showList, s.position_type = this.jumpGameInfo.jump_tag, 
            s.game_id = e, s.is_success_direct = t, s.jump_type = "game", s.adid = X.mAdId, 
            s.first_adid = W.app.first_adid;
            let a = N.instance.nowLevelIndex;
            A.app.isWin && a--, s.level = a, i.GetInstance().SendPoint("recom_click", s);
        }
    }
    class c {
        static convert(e) {
            let t = [], i = [], s = "", a = [], n = [], o = "", r = [], l = [];
            if (!e.anim_config || "" == e.anim_config) return null;
            {
                let h = {};
                try {
                    (h = JSON.parse(e.anim_config)).framelist = h.group_static.toString().split(","), 
                    h.framebiglist = h.group_static_big.toString().split(","), h.millisecond = h.millisecond_static.toString().split(","), 
                    h.millisecond_big = h.millisecond_static_big.toString().split(","), h.millisecond2 = h.millisecond2.toString().split(","), 
                    h.millisecond_big2 = h.millisecond_big2.toString().split(","), h.millisecond3 = h.millisecond3.toString().split(","), 
                    h.millisecond_big3 = h.millisecond_big3.toString().split(",");
                } catch (e) {
                    return console.log(e), null;
                }
                t = h.framelist, i = h.millisecond, s = e.static_icon, r = h.millisecond3, a = h.framebiglist, 
                n = h.millisecond_big, o = e.static_big_btn_icon, l = h.millisecond_big3;
            }
            return {
                small_frame: t,
                small_interval: i,
                small_image: s,
                millisecond: r,
                big_frame: a,
                big_interval: n,
                big_image: o,
                millisecond_big: l
            };
        }
        static addAni(e, t, i, s, a, n) {
            let o = 0, r = [];
            try {
                i.forEach(e => {
                    o += Number(e), r.push(o);
                });
            } catch (e) {
                console.log(i);
            }
            let l = [];
            l.push(t);
            for (let e = 2; e <= o; e++) {
                let i = t.replace("_1.", "_" + e + ".");
                l.push(i);
            }
            return Laya.loader.load([ t ], Laya.Handler.create(this, () => {
                e.skin = t, Laya.loader.load(l, Laya.Handler.create(this, () => {
                    let t = new Laya.Animation();
                    t.interval = 120, t.loadImages(l), "small" == n ? (t.scale(1, 1), t.pos(2, 0)) : "big" == n ? t.scale(.6, .6) : "big2" == n ? t.scale(.95, .95) : "big4" == n && t.scale(.7, .7), 
                    t.play(), e.addChild(t);
                }), null, null, 4);
            })), l;
        }
    }
    class p extends d {
        constructor() {
            super(), this.gameData = [], this.showList = [], this.direct = 1, this.DELAY_TIME = 90, 
            this.SPEED = 2, this.delayTimer = 0, this.isTouch = !1, this.allGameSImg = [], this.size(Laya.stage.width, 200), 
            h.Inst.on(h.BANNER_GAMES_INIT, this, this.initData);
        }
        clearPage() {
            h.Inst.offAll(h.BANNER_GAMES_INIT), Laya.loader.cancelLoadByUrls(this.allGameSImg);
        }
        initData(e, t, i, s) {
            p.TAG = s, this.gameData = e.games_box, this.gameData.forEach(e => {
                this.showList.push(e.appid);
            }), h.Inst.event(h.INIT_JUMP_GAMES, [ p.TAG, this.gameData ]), this.pos(0, i), this.initView(), 
            t.addChild(this), h.Inst.off(h.BANNER_GAMES_INIT, this, this.initData);
        }
        initView() {
            this.listBgImg = new Laya.Image("fenfa/mask.png"), this.listBgImg.size(this.width, this.height), 
            this.addChild(this.listBgImg), this.gameList = new Laya.List(), this.gameList.renderHandler = new Laya.Handler(this, this.updataGames), 
            this.gameList.repeatX = this.gameData.length, this.gameList.repeatY = 1, this.gameList.itemRender = u, 
            this.gameList.size(this.width, 200), this.gameList.hScrollBarSkin = "", this.gameList.scrollBar.elasticBackTime = 200, 
            this.gameList.scrollBar.elasticDistance = 150, this.listBgImg.addChild(this.gameList), 
            this.gameList.array = this.gameData, h.Inst.event(h.FENFA_GAMES_SHOW, [ this.showList ]), 
            this.listBgImg.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.listBgImg.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
            this.listBgImg.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp), Laya.timer.frameLoop(1, this, this._frameLoop);
        }
        updataGames(e, t) {
            let i = e.getChildByName("gameIcon"), s = e.dataSource, a = c.convert(s);
            if (!a) return;
            let n = c.addAni(i, a.small_image, a.small_frame, a.small_interval, a.millisecond, "small");
            this.allGameSImg.push.apply(this.allGameSImg, n), e.offAll(Laya.Event.CLICK), e.on(Laya.Event.CLICK, this, () => {
                m.Inst.jump(s, p.TAG, this.showList, "FENFA_GAMES_CLICK_GAME");
            });
        }
        scroll() {
            console.log("MyLikeView::scroll()");
            let e = this.gameData.length;
            e > 10 && (e = 10), this.gameList.scrollBar.min = 0, this.gameList.scrollBar.max = 184 * (e - 4) + 30, 
            this.gameList.scrollBar.elasticBackTime = 200, this.gameList.scrollBar.elasticDistance = 150;
        }
        _frameLoop() {
            let e = this.gameData.length, t = this.gameList.scrollBar;
            if (e > 10 && (e = 10), !(e <= 4)) if (this.isTouch) ; else if (this.delayTimer <= 0) if (1 == this.direct) {
                let i = t.value;
                t.value += this.SPEED;
                for (let s = 0; s < e; s++) {
                    let a = 184 * s;
                    t.value >= a && i < a && (this.delayTimer = this.DELAY_TIME), (t.value >= 184 * (e - 4) || i == t.value) && (this.delayTimer = this.DELAY_TIME, 
                    this.direct = -1);
                }
            } else {
                let i = t.value;
                t.value -= this.SPEED;
                for (let s = 0; s < e; s++) {
                    let e = 184 * s;
                    t.value <= e && i > e && (this.delayTimer = this.DELAY_TIME), (t.value <= 0 || i == t.value) && (this.delayTimer = this.DELAY_TIME, 
                    this.direct = 1);
                }
            } else this.delayTimer -= 1;
        }
        onMouseDown() {
            console.log("==MouseDown=="), this.isTouch = !0;
        }
        onMouseUp() {
            console.log("===MouseUP=="), this.isTouch && (this.isTouch = !1, this.delayTimer = this.DELAY_TIME);
        }
    }
    p.TAG = "";
    class u extends Laya.Box {
        constructor() {
            super(), this.initBox(), this.size(184, 184), this.pos(8, 8);
        }
        initBox() {
            let e = new Laya.Image();
            e.name = "gameIcon", e.size(156, 156), e.scale(.9, .9), e.anchorX = .5, e.anchorY = .5, 
            this.addChild(e), e.centerX = 0, e.centerY = 0;
            let t = new Laya.Image();
            t.skin = "fenfa/border2.png", t.size(184, 184), t.pos(0, 0), this.addChild(t);
        }
    }
    class g extends Laya.Label {
        constructor() {
            super(), this.align = "center", this.valign = "middle", this.fontSize = 32;
        }
        static addPoint(e, t = 6) {
            return e.length <= t ? e : e.slice(0, t) + "...";
        }
    }
    class _ extends Laya.Image {
        constructor() {
            super();
        }
        btnShowLater(e) {
            this.alpha = 0, Laya.timer.once(2e3, e, () => {
                e.addChild(this), Laya.Tween.to(this, {
                    alpha: 1
                }, 300);
            });
        }
    }
    class y extends d {
        constructor() {
            super(), this.showList = [], this.size(Laya.stage.width, Laya.stage.height), this.pos(0, 0), 
            h.Inst.on(h.FRIEND_SHARE_GAMES_INIT, this, this.initData);
        }
        initData(e, t) {
            this.gameData = e, this.showList = [ this.gameData.appid ], h.Inst.event(h.INIT_JUMP_GAMES, [ y.TAG, [ this.gameData ] ]), 
            this.initView(), this.initOpenData(), t.addChild(this), h.Inst.off(h.FRIEND_SHARE_GAMES_INIT, this, this.initData);
        }
        initOpenData() {
            if (Laya.Browser.onMiniGame) {
                wx.postMessage({
                    type: "friendShare",
                    game: this.gameData,
                    show: 1
                });
                let e = new Laya.WXOpenDataViewer();
                e.name = "inviteImg", e.size(this.width, this.height), e.pos(0, 0), this.addChild(e);
            }
        }
        initView() {
            this.createBg(), this.showBox = new Laya.Image("fenfa/invite_play_bg.png"), this.showBox.size(600, 255), 
            this.showBox.centerX = 0, this.showBox.centerY = 0, this.addChild(this.showBox), 
            this.showBox.on(Laya.Event.CLICK, this, this.onClikGame), this.headImg = new Laya.Image(), 
            this.headImg.size(80, 80), this.headImg.pos(42, 42), Laya.timer.once(1500, this, () => {
                this.headImg.skin = "fenfa/fakeImg.jpg";
            }), this.showBox.addChild(this.headImg);
            let e = new Laya.Image();
            e.size(80, 80), e.pos(0, 0), this.headImg.addChild(e), this.friendText = new g(), 
            this.friendText.size(420, 36), this.friendText.pos(144, 36), this.friendText.fontSize = 30, 
            this.friendText.color = "#010101", this.friendText.text = "喵喵喵邀请您加入", this.showBox.addChild(this.friendText), 
            this.gameText = new g(), this.gameText.size(420, 36), this.gameText.pos(144, 88), 
            this.gameText.fontSize = 30, this.gameText.color = "#000000", this.gameText.bold = !0, 
            this.gameText.text = this.gameData.name, this.showBox.addChild(this.gameText);
            let t = new Laya.Image("fenfa/invite_play_ok.png");
            this.showBox.addChild(t), t.centerX = 0, t.bottom = 32, this.closeBtn = new _(), 
            this.closeBtn.skin = "fenfa/invite_play_pass.png", this.closeBtn.centerX = 0, this.closeBtn.centerY = 242, 
            this.closeBtn.btnShowLater(this), this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseFriend);
        }
        onClikGame() {
            m.Inst.jump(this.gameData, y.TAG, [ this.gameData.appid ], "FENFA_GAMES_CLICK_GAME");
        }
        onCloseFriend() {
            h.Inst.event(h.FRIEND_SHARE_GAMES_ON_CLOSE);
        }
        clearPage() {
            Laya.Browser.onMiniGame && wx.postMessage({
                type: "friendShare",
                show: 0
            });
            let e = this.getChildByName("inviteImg");
            e && (e.removeSelf(), e.destroy(!0)), h.Inst.offAll(h.FRIEND_SHARE_GAMES_INIT);
        }
    }
    y.TAG = "friend_share";
    class f extends d {
        constructor() {
            super(), this.gameData = [], this.showList = [], this.allGameSImg = [], this.moveType = 1, 
            h.Inst.on(h.HOT_GAMES_INIT, this, this.initData);
        }
        initData(e, t) {
            h.Inst.off(h.HOT_GAMES_INIT, this, this.initData), this.gameData = e.games_box, 
            this.gameData.forEach(e => {
                this.showList.push(e.appid);
            }), h.Inst.event(h.INIT_JUMP_GAMES, [ f.TAG, this.gameData ]), this.initView(), 
            t.addChild(this);
        }
        initView() {
            this.createBg(1);
            let e = new Laya.Image("fenfa/bkyx.png");
            e.y = 70, e.centerX = 0, this.addChild(e), this.gameList = new Laya.List(), this.gameList.renderHandler = new Laya.Handler(this, this.updataGames), 
            this.gameList.repeatX = 2, this.gameList.repeatY = Math.ceil(this.gameData.length / 2), 
            this.gameList.spaceX = 32, this.gameList.spaceY = 20, this.gameList.top = 200, this.gameList.bottom = 0, 
            this.gameList.left = 0, this.gameList.right = 0, this.gameList.itemRender = w, this.gameList.vScrollBarSkin = "", 
            this.gameList.scrollBar.elasticBackTime = 200, this.gameList.scrollBar.elasticDistance = 50, 
            this.addChild(this.gameList), this.gameList.array = this.gameData, this.gameList.on(Laya.Event.MOUSE_DOWN, this, this.onTouch), 
            this.gameList.on(Laya.Event.MOUSE_UP, this, this.onLeave), this.gameList.on(Laya.Event.MOUSE_OUT, this, this.onLeave), 
            this.closeBtn = new Laya.Image("fenfa/fhan.png"), this.closeBtn.pos(0, 72), this.closeBtn.size(108, 99), 
            this.addChild(this.closeBtn), this.closeBtn.on(Laya.Event.CLICK, this, this.onBtnClose), 
            this.startBtn = new Laya.Image("fenfa/btn_start.png"), this.startBtn.bottom = 64, 
            this.startBtn.centerX = 0, this.addChild(this.startBtn), this.startBtn.on(Laya.Event.CLICK, this, this.onBtnStart), 
            Laya.timer.once(1e3, this, () => {
                this.gameList.scrollBar.max += 200, this.loopGames();
            });
        }
        onBtnClose(e) {
            e.stopPropagation(), h.Inst.event(h.HOT_GAMES_ON_CLOSE), Laya.loader.cancelLoadByUrls(this.allGameSImg);
        }
        onBtnStart(e) {
            e.stopPropagation(), h.Inst.event(h.HOT_GAMES_ON_CLOSE), Laya.loader.cancelLoadByUrls(this.allGameSImg);
        }
        loopGames() {
            let e = 0, t = 2e3 * Math.ceil(this.gameData.length / 2), i = this.gameList.scrollBar.value / this.gameList.scrollBar.max * t;
            1 == this.moveType && (e = this.gameList.scrollBar.max, i = (this.gameList.scrollBar.max - this.gameList.scrollBar.value) / this.gameList.scrollBar.max * t), 
            Laya.Tween.to(this.gameList.scrollBar, {
                value: e
            }, i, Laya.Ease.linearInOut, Laya.Handler.create(this, () => {
                this.gameList.scrollBar.value + 360 > this.gameList.scrollBar.max ? this.moveType = -1 : this.gameList.scrollBar.value - 360 < 0 && (this.moveType = 1), 
                this.loopGames();
            }));
        }
        onTouch(e) {
            Laya.timer.clear(this, this.loopGames), Laya.Tween.clearAll(this.gameList.scrollBar);
        }
        onLeave() {
            this.preventMove() && Laya.timer.once(1e3, this, this.loopGames);
        }
        updataGames(e, t) {
            let i = e.getChildByName("gameImg"), s = e.dataSource, a = c.convert(s);
            if (!a) return;
            let n = c.addAni(i, a.big_image, a.big_frame, a.big_interval, a.millisecond_big, "big2");
            this.allGameSImg.push.apply(this.allGameSImg, n), e.offAll(Laya.Event.CLICK), e.on(Laya.Event.CLICK, this, () => {
                m.Inst.jump(s, f.TAG, this.showList, "FENFA_GAMES_CLICK_GAME");
            });
        }
        clearPage() {
            h.Inst.offAll(h.HOT_GAMES_INIT);
        }
    }
    f.TAG = "recommend_page";
    class w extends Laya.Box {
        constructor() {
            super(), this.initBox(), this.size(330, 440), this.anchorX = .5, this.anchorY = .5, 
            this.pos(197, 220);
        }
        initBox() {
            let e = new Laya.Image();
            e.name = "gameImg", e.size(308, 412), e.pos(12, 12), this.addChild(e);
            let t = new Laya.Image();
            t.name = "game_mask", t.skin = "fenfa/kuang.png", t.centerX = .5, t.centerY = .5, 
            this.addChild(t);
        }
    }
    class L extends Laya.View {
        constructor() {
            super(), this.gameData = [], this.tablesName = {
                "最新游戏": "newGames",
                "爆款游戏": "hotGames",
                "好友在玩": "friendGames"
            }, this.initY = 106, this.moveType = 1, this.moveTimeType = !0, this.showList = [], 
            this.allGame = [], this.size(Laya.stage.width, Laya.stage.height), this.pos(0, 0);
            let e = new Laya.Label();
            e.size(Laya.stage.width, Laya.stage.height), e.bgColor = "#FFFFFF", e.pos(0, 0), 
            this.addChild(e), this.panelBox = new Laya.Panel(), this.panelBox.pos(0, 0), this.panelBox.size(this.width, this.height), 
            this.panelBox.vScrollBarSkin = "", this.addChild(this.panelBox), h.Inst.on(h.TAB_GAMES_SHARE_INIT, this, this.initData);
        }
        initData(e, t) {
            this.gameData = e.label_games_box, this.initView(), t.addChild(this), h.Inst.off(h.TAB_GAMES_SHARE_INIT, this, this.initData);
        }
        initView() {
            for (var e in this.gameData) {
                var t = this.gameData[e];
                this.initGamesBox(t), m.Inst.jumpedGameInfo[L.TAG] || (m.Inst.jumpedGameInfo[L.TAG] = []), 
                m.Inst.jumpedGameInfo[L.TAG].push.apply(m.Inst.jumpedGameInfo[L.TAG], t.games), 
                t.games.forEach(e => {
                    this.showList.push(e.appid);
                });
            }
            let i = new Laya.Box();
            i.size(this.width, 20), i.pos(0, this.initY), this.panelBox.addChild(i), Laya.timer.callLater(this, () => {
                this.panelBox.vScrollBar.max && (this.panelBox.vScrollBar.elasticBackTime = 200, 
                this.panelBox.vScrollBar.elasticDistance = 150, this.panelBox.on(Laya.Event.MOUSE_DOWN, this, this.onTouch), 
                this.panelBox.on(Laya.Event.MOUSE_UP, this, this.onLeave), this.panelBox.on(Laya.Event.MOUSE_OUT, this, this.onLeave), 
                Laya.timer.once(1e3, this, this.loopGames));
            }), this.toGameBtn = new Laya.Image("fenfa/toGameBtn.png"), this.toGameBtn.size(278, 96), 
            this.addChild(this.toGameBtn), this.toGameBtn.bottom = 32, this.toGameBtn.centerX = 0, 
            this.toGameBtn.on(Laya.Event.CLICK, this, () => {
                h.Inst.event(h.TAB_GAMES_SHARE_CLICK_TO_GAME, []), this.closePage();
            }), h.Inst.event(h.FENFA_GAMES_SHOW, [ this.showList, L.TAG ]);
        }
        closePage() {
            h.Inst.event(h.TAB_GAMES_SHARE_CLOSE, []), Laya.timer.clear(this, this.loopGames), 
            Laya.Tween.clearAll(this.panelBox.vScrollBar), this.removeSelf(), this.destroy(!0);
        }
        onTouch(e) {
            Laya.timer.clear(this, this.loopGames), Laya.Tween.clearAll(this.panelBox.vScrollBar);
        }
        onLeave() {
            this.preventMove() && Laya.timer.once(1e3, this, this.loopGames);
        }
        preventMove() {
            return this.moveTimeType ? (this.moveTimeType = !1, Laya.timer.once(100, this, this.changeMoveType), 
            !0) : (Laya.timer.clear(this, this.changeMoveType), Laya.timer.once(100, this, this.changeMoveType), 
            !1);
        }
        changeMoveType() {
            this.moveTimeType = !0;
        }
        loopGames() {
            let e = 0, t = 10 * this.panelBox.vScrollBar.max, i = this.panelBox.vScrollBar.value / this.panelBox.vScrollBar.max * t;
            1 == this.moveType && (e = this.panelBox.vScrollBar.max, i = (this.panelBox.vScrollBar.max - this.panelBox.vScrollBar.value) / this.panelBox.vScrollBar.max * t);
            Laya.Tween.to(this.panelBox.vScrollBar, {
                value: e
            }, i, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                this.panelBox.vScrollBar.value + 216 > this.panelBox.vScrollBar.max ? this.moveType = -1 : this.panelBox.vScrollBar.value - 216 < 0 && (this.moveType = 1), 
                this.loopGames();
            }), 0, !0);
        }
        initGamesBox(e) {
            let t = new Laya.Box();
            t.name = this.tablesName[e.name], t.width = this.width;
            let i = new Laya.Image();
            i.skin = "fenfa/" + this.tablesName[e.name] + ".png", i.name = t.name + "table", 
            i.size(194, 40), t.addChild(i), i.pos(26, 0);
            let s = new Laya.List();
            s.name = t.name + "List", s.renderHandler = new Laya.Handler(this, this.updataGames), 
            s.repeatX = 3, s.repeatY = Math.ceil(e.games.length / 3), s.spaceX = 48, s.spaceY = 40, 
            s.itemRender = v, s.size(this.width, 216 * s.repeatY), t.addChild(s), s.pos(0, i.height + i.y + 40), 
            s.array = e.games, this.panelBox.addChild(t), t.size(this.width, s.height + s.y + i.height + i.y), 
            t.pos(0, this.initY), this.initY = t.height + t.y + s.repeatY * s.spaceY;
        }
        updataGames(e, t) {
            let i = e.getChildByName("game_img"), s = e.getChildByName("game_name"), a = e.dataSource;
            i.skin = a.url_icon, s.text = g.addPoint(a.name), e.offAll(Laya.Event.CLICK), e.on(Laya.Event.CLICK, this, () => {
                m.Inst.jump(a, L.TAG, this.showList, "FENFA_GAMES_CLICK_GAME");
            });
        }
    }
    L.TAG = "mp_page";
    class v extends Laya.Box {
        constructor() {
            super(), this.initBox(), this.size(178, 216);
        }
        initBox() {
            let e = new Laya.Image();
            e.name = "game_img", e.size(178, 178), e.pos(60, 0), this.addChild(e);
            let t = new Laya.Image();
            t.name = "game_mask", t.skin = "fenfa/headmask.png", t.size(178, 178), t.pos(0, 0), 
            e.addChild(t);
            let i = new g();
            i.name = "game_name", i.size(e.width, 48), i.pos(e.x, e.height + e.y + 10), this.addChild(i);
        }
    }
    class S extends d {
        constructor() {
            super(), this.gameData = [], this.showList = [], this.showHand = !1, this.allGameSImg = [], 
            this.size(Laya.stage.width, 720), h.Inst.on(h.RESULT_GAMES_INIT, this, this.initData);
        }
        initData(e, t, i, s) {
            this.gameData = e.games_box, this.showHand = s, this.gameData.forEach(e => {
                this.showList.push(e.appid);
            }), h.Inst.event(h.INIT_JUMP_GAMES, [ S.TAG, this.gameData ]), this.initView(), 
            this.y = i, t.addChild(this), h.Inst.off(h.RESULT_GAMES_INIT, this, this.initData);
        }
        initView() {
            this.gameList = new Laya.List(), this.gameList.pos(0, 0), this.gameList.size(this.width, this.height), 
            this.gameList.renderHandler = new Laya.Handler(this, this.updataGames), this.gameList.repeatX = 3, 
            this.gameList.repeatY = 2, this.gameList.spaceX = 10, this.gameList.spaceY = 18, 
            this.gameList.itemRender = C, this.addChild(this.gameList), this.gameList.array = this.gameData;
        }
        updataGames(e, t) {
            let i = e.getChildByName("gameImg"), s = e.dataSource, a = e.getChildByName("hand");
            s.differ && this.showHand && !a ? this.addHand(e) : a && (a.removeSelf(), a.destroy());
            let n = c.convert(s);
            if (!n) return;
            let o = c.addAni(i, n.big_image, n.big_frame, n.big_interval, n.millisecond_big, "big");
            this.allGameSImg.push.apply(this.allGameSImg, o), this.rotateIcon(e, Laya.Handler.create(this, () => {
                e.on(Laya.Event.CLICK, this, () => {
                    m.Inst.jump(s, S.TAG, this.showList, "FENFA_GAMES_CLICK_GAME");
                });
            }));
        }
        clearPage() {
            h.Inst.offAll(h.RESULT_GAMES_INIT), Laya.loader.cancelLoadByUrls(this.allGameSImg), 
            x.hand.removeSelf();
        }
        addHand(e) {
            x.hand && (x.hand.play(0, !0), x.hand.name = "hand", x.hand.scale(.8, .8), x.hand.pos(20, 100), 
            x.hand.zOrder = 100, e.addChild(x.hand));
        }
    }
    S.TAG = "result_page";
    class C extends Laya.Box {
        constructor() {
            super(), this.size(238, 332), this.pos(10, 332), this.anchorX = 0, this.anchorY = 1, 
            this.initBox();
        }
        initBox() {
            let e = new Laya.Image();
            e.name = "gameImg", e.size(198, 264), e.pos(119, 152), e.anchorX = .5, e.anchorY = .5, 
            this.addChild(e);
            let t = new Laya.Image();
            t.name = "gameBroder", t.skin = "fenfa/result_border.png", t.size(238, 332), t.pos(0, 0), 
            this.addChild(t);
        }
    }
    var I = Laya.HttpRequest, b = Laya.Event;
    class x {
        static GetGamesBox(e, t) {
            // x.mHttpCall = new I(), x.mHttpCall.once(b.COMPLETE, x, function(e) {
            //     let i = null;
            //     i = x.getJSON(e), console.log(i), 0 == i.code && t && t.runWith(i), x.mHttpCall = null;
            // }), x.mHttpCall.once(b.ERROR, x, x.onHttpRequestError), console.log("uo/GetGamesBox");
            // let i = [];
            // i.position_type = "result_page", i.type = e, i.uid = Q.uo.mWeUser.uid;
            // let s = W.app.mWX.mURL + x.urlConfig.GetGamesBox.url + x.getUrlParams(i, x.urlConfig.GetGamesBox.key);
            // x.mHttpCall.send(s, null, "get", "text");
        }
        static ClickGame(e, t) {
            x.mHttpCall = new I(), x.mHttpCall.once(b.COMPLETE, x, function(i) {
                let s = null;
                s = x.getJSON(i), console.log(s), 0 == s.code && h.Inst.event(h.CLICK_GAME_SUCCESS_CALLBACK, [ e, t, s ]), 
                x.mHttpCall = null;
            }), x.mHttpCall.once(b.ERROR, x, x.onHttpRequestError), console.log("uo/ClickGame");
            let i = [];
            i.uid = Q.uo.mWeUser.uid, i.appid = e;
            let s = W.app.mWX.mURL + x.urlConfig.ClickGame.url + x.getUrlParams(i, x.urlConfig.ClickGame.key);
            x.mHttpCall.send(s, null, "get", "text");
        }
        static GetTabGames(e) {
            x.mHttpCall = new I(), x.mHttpCall.once(b.COMPLETE, x, function(t) {
                let i = null;
                i = x.getJSON(t), console.log(i), 0 == i.code && e && e.runWith(i), x.mHttpCall = null;
            }), x.mHttpCall.once(b.ERROR, x, x.onHttpRequestError), console.log("uo/GetGamesBoxLabel");
            let t = [];
            t.position_type = "result_page", t.uid = Q.uo.mWeUser.uid;
            let i = W.app.mWX.mURL + x.urlConfig.GetGamesBoxLabel.url + x.getUrlParams(t, x.urlConfig.GetGamesBoxLabel.key);
            x.mHttpCall.send(i, null, "get", "text");
        }
        static commitTotle(e, t) {}
        static onHttpRequestError(e) {
            x.mHttpCall = null, console.log("onHttpRequestError:" + e);
        }
        static getJSON(e) {
            if ("" == e || null == e) return {
                code: -999
            };
            var t = e.indexOf("{", 0);
            return e = e.substr(t, e.length - t), JSON.parse(e);
        }
        static getUrlParams(e, t = "1.0.1") {
            let i = !1, s = new Array();
            for (let t in e) {
                if ("string" != typeof e[t] && "number" != typeof e[t]) continue;
                "tick" == t && (i = !0);
                let a = t.toLocaleLowerCase();
                e[a] = e[t], s.push(a);
            }
            if (0 == i) {
                var a = new Date();
                e.tick = Math.floor(a.getTime() / 1e3), s.push("tick");
            }
            s.sort(function(e, t) {
                return e > t ? 1 : -1;
            });
            let n = "";
            for (var o = 0; o < s.length; o++) n = n + s[o] + "=" + e[s[o]] + "&";
            let r = "";
            return n + "key=" + (r = null != x.mKeys[t] ? Y.MD5(n + "key=" + x.mKeys[t]) : Y.MD5(n + "key=vicky"));
        }
        static onShowBanner(e, t, i) {
        }
        static clearBanner() {
        }
        static onShowResultShare(e, t) {
            console.log("result"), x.clearResultShare(), x.GetGamesBox("result", Laya.Handler.create(this, i => {
                x.resultView = new S(), x.resultView.visible = !0, h.Inst.event(h.RESULT_GAMES_INIT, [ i, e, t, W.app.mWX.of_showFinger ]), 
                A.app.sendPoint("result_page", x.resultView.showList);
            }));
        }
        static clearResultShare() {
            x.resultView && (x.resultView.clearPage(), x.resultView.removeSelf(), x.resultView.destroy(!0), 
            x.resultView = null);
        }
        static onShowHotView(e, t) {
            console.error("hotShare"), x.GetGamesBox("hotShare", Laya.Handler.create(x, e => {
                x.hotShare = new f(), h.Inst.event(h.HOT_GAMES_INIT, [ e, t ]), A.app.sendPoint("recommend_page", x.hotShare.showList);
            })), h.Inst.on(h.HOT_GAMES_ON_CLOSE, this, x.closeHotView, [ e ]), h.Inst.on(h.HOT_GAMES_ON_TO_GAME, this, x.closeHotView, [ e ]);
        }
        static closeHotView(e = null) {
            h.Inst.off(h.HOT_GAMES_ON_CLOSE, this, x.closeHotView), h.Inst.off(h.HOT_GAMES_ON_TO_GAME, this, x.closeHotView), 
            x.hotShare.clearPage(), x.hotShare.removeSelf(), x.hotShare.destroy(!0), x.hotShare = null, 
            e && e.run();
        }
        static onShowMoreGame(e) {
            x.diversion ? (x.diversion.removeSelf(), e.addChild(x.diversion), x.diversion.visible = !1, 
            x.diversion.offAll(Laya.Event.CLICK)) : (x.diversion = new Laya.Image(), x.diversion.anchorX = .5, 
            x.diversion.anchorY = .5, x.diversion.rotation = 0, x.diversion.pos(660, 450), x.diversion.visible = !1, 
            e.addChild(x.diversion), x.tween1(x.diversion));
            let t = Laya.Handler.create(x, x.onShowMoreGame, [ e ]);
            x.GetGamesBox("diversion", Laya.Handler.create(this, e => {
                x.diversion && null != x.diversion.getStyle() && (x.diversion.skin = e.games_box[0] ? e.games_box[0].url_btn : "", 
                x.diversion.on(Laya.Event.CLICK, this, () => {
                    m.Inst.jumpGame(e.games_box[0], !0, "icon", t);
                }), x.diversion.visible = !0, A.app.sendPoint("icon", [ e.games_box[0].appid ]));
            }));
        }
        static onShowTabList() {
            console.log("onShowTabList"), x.TabGamesShare && (h.Inst.offAll(h.TAB_GAMES_SHARE_INIT), 
            h.Inst.offAll(h.TAB_GAMES_SHARE_CLOSE), x.TabGamesShare.removeSelf(), x.TabGamesShare.destroy(!0), 
            x.TabGamesShare = null), x.GetTabGames(Laya.Handler.create(this, e => {
                x.TabGamesShare = new L(), h.Inst.event(h.TAB_GAMES_SHARE_INIT, [ e, Laya.stage ]), 
                A.app.sendPoint("mp_page", x.TabGamesShare.showList);
            })), h.Inst.on(h.TAB_GAMES_SHARE_CLOSE, this, () => {
                h.Inst.offAll(h.TAB_GAMES_SHARE_INIT), h.Inst.offAll(h.TAB_GAMES_SHARE_CLOSE), x.TabGamesShare.removeSelf(), 
                x.TabGamesShare.destroy(!0), x.TabGamesShare = null;
            });
        }
        static onShowFriendShare(e, t) {
            x.FriendShare ? x.onCloseFriend(t) : (console.log("FriendShare"), x.GetGamesBox("friend_share", Laya.Handler.create(this, i => {
                i.games_box[0] ? (x.FriendShare = new y(), h.Inst.event(h.FRIEND_SHARE_GAMES_INIT, [ i.games_box[0], e ]), 
                h.Inst.on(h.FRIEND_SHARE_GAMES_ON_CLOSE, this, x.onCloseFriend, [ t ]), A.app.sendPoint("friend_share", i.games_box[0].appid)) : t && t.run();
            })));
        }
        static onCloseFriend(e) {
            h.Inst.off(h.FRIEND_SHARE_GAMES_ON_CLOSE, this, x.onCloseFriend), x.FriendShare.clearPage(), 
            x.FriendShare.removeSelf(), x.FriendShare.destroy(!0), x.FriendShare = null, e && e.run();
        }
        static tween1(e, t = 0) {
            Laya.Tween.to(e, {
                rotation: 0
            }, 200, null, Laya.Handler.create(this, x.tween2, [ e ]), t);
        }
        static tween2(e) {
            Laya.Tween.to(e, {
                rotation: 30
            }, 200, null, Laya.Handler.create(this, x.tween3, [ e ]));
        }
        static tween3(e) {
            Laya.Tween.to(e, {
                rotation: 0
            }, 200, null, Laya.Handler.create(this, x.tween4, [ e ]));
        }
        static tween4(e) {
            Laya.Tween.to(e, {
                rotation: 30
            }, 200, null, Laya.Handler.create(this, x.tween1, [ e ]), 2e3);
        }
    }
    x.mKeys = {
        "1.0.1": "qweasdqweazxc"
    }, x.urlConfig = {
        GetGamesBox: {
            url: "1.0.1/xcx_yyj/GetGamesBox2?",
            key: "1.0.1",
            tips: "分发游戏数据"
        },
        ClickGame: {
            url: "1.0.1/xcx_yyj/ClickGame?",
            key: "1.0.1",
            tips: "提交点击游戏信息"
        },
        GetGamesBoxLabel: {
            url: "1.0.1/xcx_yyj/GetGamesBoxLabel?",
            key: "1.0.1",
            tips: "游戏集合页"
        }
    }, x.mHttpCall = null;
    class E extends r.wx.collectionViewUI {
        constructor() {
            super(), this.list.selectEnable = !0, this.list.renderHandler = Laya.Handler.create(this, this.updateRender, null, !1), 
            this.list.vScrollBarSkin = "", this.height = Laya.stage.height, this.btn_back.y = Q.uo.m_menuBtnHeight - 20;
        }
        reset() {
            let e = [];
            for (let t in W.app.itemObj) {
                let i = W.app.itemObj[t];
                e.push(i);
            }
            this.list.array = e, this.btn_back.on(Laya.Event.CLICK, this, this.backHome), x.onShowBanner(this, Laya.stage.height - 230, "banner_home"), 
            this.mianBox.y = (Laya.stage.height - 30 - this.mianBox.height) / 2;
        }
        sendPoint(e, t) {
            let s = {
                icon_type: "skin"
            };
            s["is_success "] = e, s.from_type = t, i.GetInstance().SendPoint("icon_page", s);
        }
        backHome() {
            super.destroy(), this.destroy(), W.app.collectionView = null, x.onShowBanner(A.app, Laya.stage.height - 230, "banner_home"), 
            x.onShowMoreGame(A.app);
        }
        updateRender(e, t) {
            if (!e) return;
            let i = e.getChildByName("img_wenhao"), s = e.getChildByName("img_item"), a = e.getChildByName("btn_unlock"), n = e.getChildByName("img_select");
            switch (s.visible = a.visible = i.visible = !0, W.app.mWX.of_collection) {
              case 0:
                a.visible = !1;
                break;

              case 1:
                a.skin = "collection/btn_unlock.png";
                break;

              case 2:
                a.skin = "collection/btn_unlock_sp.png";
                break;

              case 3:
                a.skin = "collection/btn_unlock_fx.png";
            }
            e.dataSource.have ? (s.skin = "collection/" + e.dataSource.id + ".png", n.skin = "collection/cl_slBg.png", 
            a.visible = i.visible = !1) : (s.visible = !1, n.skin = "collection/cl_unBg.png", 
            a.visible = i.visible = !0), a.on(Laya.Event.CLICK, this, this.onClick, [ e.dataSource.id ]);
        }
        onClick(e) {
            switch (this.selcetIndex = e, W.app.mWX.of_collection) {
              case 0:
                break;

              case 1:
                W.app.mWX.unlockItem(e), this.sendPoint(1, "direct");
                break;

              case 2:
                this.showADVideo(e);
                break;

              case 3:
                this.shareToFriends();
            }
        }
        updateArr() {
            let e = [];
            for (let t in W.app.itemObj) {
                let i = W.app.itemObj[t];
                e.push(i);
            }
            this.list.dataSource = e;
        }
        showADVideo(e) {
            if (W.app.mSDKVersion >= "2.0.4") try {
                W.app.mWX.videoAd.show().catch(e => (function() {
                    wx.showToast({
                        title: "视频获取失败",
                        icon: "success",
                        image: "",
                        duration: 2e3
                    }), console.log("广告播放失败");
                })), W.app.mWX.videoAd.onError(e => {
                    wx.showToast({
                        title: "视频获取失败",
                        icon: "success",
                        duration: 2e3
                    }), console.log(e.errMsg);
                }), W.app.mWX.videoAd.onClose(t => {
                    W.app.mSDKVersion >= "2.1.0" ? 1 == t.isEnded ? (this.sendPoint(1, "viedeo"), W.app.mWX.unlockItem(e)) : this.sendPoint(0, "viedeo") : (this.sendPoint(1, "viedeo"), 
                    W.app.mWX.unlockItem(e)), W.app.mWX.videoAd.offClose();
                });
            } catch (e) {
                console.log("广告播放失败"), this.shareToFriends();
            }
        }
        shareToFriends() {
            var e = W.app.mWX.shareurl[2];
            if (null != e) {
                var t = null != e.id ? e.id : 2, i = null != e.title ? e.title : "好生气，差一点就冲上榜首了", s = null != e.url ? e.url : "pngs/share/share3.png";
                e.type;
            }
            W.app.shareTag = 1, wx.shareAppMessage({
                title: i,
                imageUrl: s,
                query: "uid=" + Q.uo.mWeUser.uid + "&id=0&type=0&map=0&surl=" + t
            });
        }
    }
    class A extends r.test.StartSceneUI {
        constructor() {
            super(), this.random = 0, this.levelMax = 50, this.isWin = !1;
        }
        onAwake() {
            if ("0" != X.mAdId && W.app.mWX.of_tab_game_share && x.onShowTabList(), x.hand = new Laya.Animation(), 
            x.hand.loadAtlas("res/atlas/dianji/1.atlas", Laya.Handler.create(this, () => {})), 
            Q.uo.clear(), this.height = Laya.stage.height, A.app = this, Laya.stage.addComponent(N), 
            N.instance.nowLevelIndex = W.app.nowLevel, N.instance.nowSkinIndex = W.app.nowSkin, 
            x.onShowBanner(this, Laya.stage.height - 230, "banner_home"), x.onShowMoreGame(this), 
            this.cp_level.index = this.cp_level1.index = this.cp_score.index = this.cp_score1.index = this.cp_score2.index = -1, 
            this.addTween(), N.instance.changePlayerSkin(), 
            this.btn_collection.visible = false,
            // W.app.mWX.fh_onoff && 0 != W.app.mWX.of_collection ? this.btn_collection.visible = !0 : this.btn_collection.visible = !1, 
            N.instance.nowLevelIndex > this.levelMax) {
                N.instance.overMaxLevel = !0;
                let e = (N.instance.nowLevelIndex - this.levelMax) % 40;
                N.instance.fakeLevel = 0 == e ? 50 : e + 10;
            }
            Laya.timer.once(500, this, () => {
                this.addBtnEvents();
            });
        }
        sendPoint(e, t) {
            let s = {};
            s.game_show_list = t, s.position_type = e, s.adid = X.mAdId, s.first_adid = W.app.first_adid, 
            i.GetInstance().SendPoint("recom_show", s);
        }
        addTween() {
            Laya.Tween.clearTween(this.btn_start), Laya.Tween.to(this.btn_start, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 800, null, Laya.Handler.create(this, () => {
                Laya.Tween.clearTween(this.btn_start), Laya.Tween.to(this.btn_start, {
                    scaleX: .9,
                    scaleY: .9
                }, 800, null, Laya.Handler.create(this, () => {
                    this.addTween();
                }));
            }));
        }
        addBtnEvents() {
            this.img_bg.on(Laya.Event.CLICK, this, this.gameStart), this.btn_start.on(Laya.Event.CLICK, this, this.gameStart), 
            this.btn_clear.on(Laya.Event.CLICK, this, () => {
                N.instance._levelClear(), this.box_startGame.scaleX = 1, this.box_gaming.scaleX = 0, 
                this.lab_levelText.text = N.instance.nowLevelIndex + "";
            }), this.btn_reborn.on(Laya.Event.CLICK, this, () => {
                N.instance._reborn(), this.box_reborn.scaleX = 0, this.box_gaming.scaleX = 1;
            }), this.btn_setSkin.on(Laya.Event.CLICK, this, () => {
                N.instance.changePlayerSkin();
            }), this.btn_lastLevel.on(Laya.Event.CLICK, this, () => {
                N.instance.nowLevelIndex--, N.instance.nowLevelIndex < 1 && (N.instance.nowLevelIndex = this.levelMax), 
                this.lab_levelText.text = N.instance.nowLevelIndex + "";
            }), this.btn_nextLevel.on(Laya.Event.CLICK, this, () => {
                N.instance.nowLevelIndex++, N.instance.nowLevelIndex > this.levelMax && (N.instance.nowLevelIndex = 1), 
                this.lab_levelText.text = N.instance.nowLevelIndex + "";
            }), this.btn_back.on(Laya.Event.CLICK, this, () => {
                N.instance._levelClear(), this.box_reborn.scaleX = 0, this.box_startGame.scaleX = 1, 
                this.lab_levelText.text = N.instance.nowLevelIndex + "";
            }), this.btn_startNextLevel.on(Laya.Event.CLICK, this, () => {
                N.instance._levelClear(), N.instance.nowLevelIndex++, N.instance.nowLevelIndex > this.levelMax && (N.instance.nowLevelIndex = 1), 
                N.instance.loadLevel(), this.showLevel(), this.box_success.scaleX = 0, this.box_gaming.scaleX = 1;
            }), this.btn_startLastLevel.on(Laya.Event.CLICK, this, () => {
                N.instance._levelClear(), N.instance.nowLevelIndex--, N.instance.nowLevelIndex < 0 && (N.instance.nowLevelIndex = this.levelMax), 
                N.instance.loadLevel(), this.showLevel(), this.box_success.scaleX = 0, this.box_gaming.scaleX = 1;
            }), this.btn_clear2.on(Laya.Event.CLICK, this, () => {
                N.instance._levelClear(), this.box_success.scaleX = 0, this.box_startGame.scaleX = 1, 
                this.lab_levelText.text = N.instance.nowLevelIndex + "";
            }), this.btn_music.on(Laya.Event.CLICK, this, this.changeSound), this.btn_collection.on(Laya.Event.CLICK, this, this.showCollection);
        }
        showLevel() {
            let e = N.instance.nowLevelIndex + "";
            this.cp_level.index = this.cp_level1.index = -1, this.cp_level.index = e[0] ? +e[0] : -1, 
            this.cp_level1.index = e[1] ? +e[1] : -1;
        }
        gameStart() {
            // platform.getInstance().showInterstitial(()=>{
                N.instance.loadLevel();
                this.showLevel(), 
                this.box_startGame.scaleX = 0, 
                this.box_gaming.scaleX = 1, 
                this.tips.visible = !1;
            // })
        }
        showCollection() {
            W.app.collectionView || (W.app.collectionView = new E(), W.app.collectionView.reset(), 
            Laya.stage.addChild(W.app.collectionView));
        }
        changeSound() {
            Laya.SoundManager.muted ? (Laya.SoundManager.muted = !1, this.btn_music.skin = "index/in_music.png") : (Laya.SoundManager.muted = !0, 
            this.btn_music.skin = "index/in_music1.png");
        }
        showFaild() {
            this.isWin = !1, Laya.timer.once(1500, this, () => {
                W.app.reliveDialog.reset();
            });
        }
        showSuccess() {
            this.isWin = !0, Laya.timer.once(1500, this, () => {
                let e;
                for (let t in W.app.stageConfig) {
                    let i = W.app.stageConfig[t];
                    i.id == N.instance.nowLevelIndex && (e = i);
                }
                e && 0 != e.getType ? (W.app.rewardDialog.reset(Number(e.getType), Number(e.rewardid), Number(e.rewardType)), 
                N.instance.nowLevelIndex++) : (N.instance.nowLevelIndex++, N.instance.nowLevelIndex == this.levelMax && (N.instance.nowLevelIndex = 10), 
                W.app.resultDialog.reset(!0)), W.app.mWX.saveLevel();
            });
        }
    }
    class B extends s {
        constructor() {
            super(), this._nowSpeed = 1, this._speedRnge = .01, this._maxSpeed = 4, this.isUseShield = !1, 
            this.ismouseDown = !1;
        }
        onAwake() {
            super.onAwake(), this._animator = this.owner.getComponent(Laya.Animator), this._head = this._owner.getChildByName("Head"), 
            this._collider = this._head.addComponent(o);
            var e = this._head.getChildByName("Collider");
            this._collider.initCollider(e, 1, !1, !1, !0, this.onCollisionEnter.bind(this), !1, "player"), 
            this._efect1 = this._owner.getChildByName("zadi"), this._addTouchEvent();
            var t = this._owner.getChildByName("Ground");
            t.addComponent(o).initCollider(t, 1, !1, !1, !0, null, !1, "ground"), this._shield = this._owner.findChild("PressMachineRageEffect"), 
            this._efect2 = this._owner.findChild("SpeedLine"), N.instance._playerCtrl = this, 
            N.instance._player = this._owner;
        }
        onDisable() {
            this._removeTouchEvent();
        }
        _addTouchEvent() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this._onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this._onMouseUp), 
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this._onMouseUp);
        }
        _removeTouchEvent() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this._onMouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this._onMouseUp), 
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this._onMouseUp);
        }
        onUpdate() {
            if (N.instance._playerCtrl.ismouseDown) this._nowSpeed += this._speedRnge, this._nowSpeed >= this._maxSpeed && (this._nowSpeed = this._maxSpeed); else {
                var e = this._animator.getCurrentAnimatorPlayState().normalizedTime;
                e && !N.instance.isFinish && Number(e.toFixed(2)) > .5 && this._animator.play("Idle"), 
                this._nowSpeed -= 1.5 * this._speedRnge, this._nowSpeed <= 1 && (this._nowSpeed = 1);
            }
            this._animator.speed = this._nowSpeed, N.instance.itemMovespeed = .05 * this._nowSpeed * .7, 
            this._nowSpeed >= 2 ? this._efect2.active = !0 : this._efect2.active = !1, A.app.img_speedArrow.rotation = 260 / (this._maxSpeed - 1) * (this._nowSpeed - 1) - 130, 
            A.app.lab_nowSpeed.text = "×" + Math.floor(this._nowSpeed);
        }
        _onMouseDown() {
            N.instance.isFinish || N.instance.isFinish || (this.ismouseDown = !0, this._animator.play("Push"), 
            N.instance.clearLoadRes || Laya.timer.frameLoop(1, this, this.caluFrame));
        }
        caluFrame() {
            Laya.stage.getTimeFromFrameStart() > 20 && N.instance.levelLoadFinish && (Laya.loader.clearUnLoaded(), 
            N.instance.clearLoadRes = !0, Laya.timer.clear(this, this.caluFrame));
        }
        _onMouseUp() {
            this.ismouseDown = !1;
        }
        onCollisionEnter(e) {
            "ground" == e.body.tag ? this.showEfect1() : "enemy" == e.body.tag && (this._nowSpeed = 1, 
            this._animator.speed = 1);
        }
        showLevelSuccess() {
            this._animator.play("Scuccess");
        }
        showDie() {
            this._animator.play("Idle");
        }
        showEfect1() {
            N.instance.isFinish || (this._efect1.active = !0, this._efect1.particleSystem.play(), 
            this._groundAudio ? this._groundAudio.isStopped ? (this._groundAudio = Laya.SoundManager.playSound("res/Audio/zaxiaqu.mp3"), 
            this._groundAudio && (this._groundAudio.volume = .3)) : this._groundAudio && (this._groundAudio.volume = .3) : (this._groundAudio = Laya.SoundManager.playSound("res/Audio/zaxiaqu.mp3"), 
            this._groundAudio && (this._groundAudio.volume = .3)), window.wx && wx.vibrateShort(null));
        }
        useShield() {
            this.isUseShield = !0, this._shield.active = !0;
        }
    }
    class T {
        constructor() {}
    }
    T._Audio = {
        Burger: "Tomato",
        Chick: "Tomato",
        Clock: "Clock",
        Cup: "Cup",
        Egg: "Egg",
        Headphones: "Can",
        Micro: "BigMachine",
        Mouse: "Can",
        Phone: "Can",
        Pickle: "Tomato",
        Pumpkin: "Watermelon",
        Soda: "Can",
        Stereo: "Stereo",
        Tomato: "Tomato",
        Toster: "BigMachine",
        Vase: "Cup",
        Watermelon: "Watermelon",
        Youg: "Youg"
    };
    class k extends s {
        constructor() {
            super(), this.itemType = "", this.moveSpeed = new Laya.Vector3(0, 0, -1 * N.instance.itemMovespeed), 
            this.breaked = !1;
        }
        onAwake() {
            super.onAwake(), this._collider = this.owner.addComponent(o), this._efect = this._owner.getChildByName("suipian");
            var e = this._owner.findChild("PikcleSmushed_SM 1");
            if (e) for (let i = 0; i < e.meshRenderer.materials.length; i++) {
                var t = e.meshRenderer.materials[i].clone();
                e.meshRenderer.materials[i] = t;
            }
        }
        onEnable() {
            Laya.timer.loop(10, this, this.itemMove);
        }
        onDisable() {
            Laya.timer.clear(this, this.itemMove), null != this._sound && Laya.SoundManager.removeChannel(this._sound);
        }
        onUpdate() {}
        setUp(e) {
            this.itemType = e.tag;
        }
        itemMove() {
            N.instance.isFinish || (this.moveSpeed.z = -1 * N.instance.itemMovespeed, this.moveSpeed = this.moveSpeed, 
            this._trans.translate(this.moveSpeed, !1), this._trans.position.z < 4 && this.initCollider(), 
            this._trans.position.z <= -8 && (this._owner.removeSelf(), this._owner.destroyChildren(), 
            this._owner.destroy(!0)));
        }
        initCollider() {
            if (null == this._collider._body) {
                var e = this._owner.getChildByName("Collider");
                this._collider.initCollider(e, 1, !1, !1, !0, this.onCollisionEnter.bind(this), !1, "Item"), 
                this._states = this._owner.getChildByName("States");
            }
        }
        onCollisionEnter(e) {
            "player" == e.body.tag && this.showBreak();
        }
        showBreak() {
            if (!this.breaked) {
                this._efect.active = !0, this.breaked = !0, this._states.getChildAt(0).active = !1, 
                this._states.getChildAt(1).active = !0;
                var e = .01 * Math.random();
                this._states.getChildAt(1).transform.localPositionY += e, N.instance._addScore();
                var t = 1;
                switch (this.itemType) {
                  case "Cup":
                    t = .3;
                    break;

                  case "Clock":
                  case "Mouse":
                  default:
                    t = .5;
                }
                this._sound = Laya.SoundManager.playSound("res/Audio/" + T._Audio[this.itemType] + ".mp3"), 
                this._sound && (this._sound.volume = t);
            }
        }
    }
    class G extends s {
        constructor() {
            super(), this.moveSpeed = new Laya.Vector3(0, 0, -1 * N.instance.itemMovespeed);
        }
        onAwake() {
            super.onAwake(), this.btn = this._owner.getChildByName("Button_01_SM").getChildByName("ButtonButton_01_SM"), 
            this._efect = this._owner.getChildByName("Effect");
        }
        onEnable() {
            Laya.timer.loop(10, this, this.itemMove);
        }
        onDisable() {
            Laya.timer.clear(this, this.itemMove);
        }
        itemMove() {
            N.instance.isFinish || (this.moveSpeed.z = -1 * N.instance.itemMovespeed, this.moveSpeed = this.moveSpeed, 
            this._trans.position.z <= N.instance._playerCtrl._trans.position.z ? this.showFinsh() : this._trans.translate(this.moveSpeed, !1));
        }
        showFinsh() {
            N.instance.levelSuccess(), Laya.timer.once(200, this, () => {
                this.btn.transform.localPositionY = -.2;
            }), Laya.timer.once(500, this, () => {
                this._efect.active = !0;
            });
        }
    }
    class M extends s {
        constructor() {
            super(), this.moveSpeed = new Laya.Vector3(0, 0, -1 * N.instance.itemMovespeed), 
            this._boomed = !1;
        }
        onAwake() {
            super.onAwake(), this._collider = this.owner.addComponent(o), this._efect = this._owner.getChildByName("boom");
            var e = this._owner.findChild("bomb");
            for (let i = 0; i < e.meshRenderer.materials.length; i++) {
                var t = e.meshRenderer.materials[i].clone();
                e.meshRenderer.materials[i] = t;
            }
        }
        onEnable() {
            Laya.timer.loop(10, this, this.itemMove);
        }
        onDisable() {
            Laya.timer.clear(this, this.itemMove), this._sound && Laya.SoundManager.removeChannel(this._sound);
        }
        itemMove() {
            N.instance.isFinish || (this.moveSpeed.z = -1 * N.instance.itemMovespeed, this.moveSpeed = this.moveSpeed, 
            this._trans.translate(this.moveSpeed, !1), this._trans.position.z < 4 && this.initCollider(), 
            this._trans.position.z <= -8 && (this._owner.removeSelf(), this._owner.destroyChildren(), 
            this._owner.destroy()));
        }
        initCollider() {
            if (null == this._collider._body) {
                var e = this._owner.getChildByName("Collider");
                this._collider.initCollider(e, 1, !1, !1, !0, this.onCollisionEnter.bind(this), !1, "Item"), 
                this._states = this._owner.getChildByName("States");
            }
        }
        onCollisionEnter(e) {
            "player" == e.body.tag && this._showBoom();
        }
        _showBoom() {
            this._boomed || (this._boomed = !0, this._efect.active = !0, N.instance.levelFailed(), 
            this._owner.getChildByName("States").active = !1, this._sound = Laya.SoundManager.playSound("res/Audio/boom.mp3"), 
            this._sound && (this._sound.volume = 1));
        }
    }
    Laya.Node.prototype.find = function(e) {
        if (!e) return this;
        let t = e.split("/"), i = this;
        for (;t.length > 0; ) if (!(i = i.getChildByName(t.shift()))) return null;
        return i;
    }, Laya.Node.prototype.findChild = function(e) {
        let t = this;
        for (let i = 0; i < t.numChildren; i++) {
            let s = t.getChildAt(i);
            if (s.name === e) return s;
            if (s.numChildren > 0) {
                let t = s.findChild(e);
                if (null != t) return t;
            }
        }
        return null;
    }, Laya.Node.prototype.traverse = function(e) {
        let t = new Laya.Handler(Laya.Node.prototype, e);
        !function traverse(e, t) {
            if (t.runWith(e), e.numChildren > 0) for (let i = 0; i < e.numChildren; i++) traverse(e.getChildAt(i), t);
        }(this, t), t.recover();
    };
    class H extends s {
        constructor() {
            super(), this.moveSpeed = new Laya.Vector3(0, 0, -1 * N.instance.itemMovespeed);
        }
        onEnable() {
            Laya.timer.loop(10, this, this.itemMove);
        }
        onDisable() {
            Laya.timer.clear(this, this.itemMove);
        }
        itemMove() {
            N.instance.isFinish || (this.moveSpeed.z = -1 * N.instance.itemMovespeed, this.moveSpeed = this.moveSpeed, 
            this._trans.translate(this.moveSpeed, !1), this._trans.position.z <= -70 && (this._trans.position.z = this._other.transform.position.z + 70, 
            this._trans.position = this._trans.position));
        }
    }
    class D extends s {
        constructor() {
            super(), this.moveSpeed = new Laya.Vector3(0, 0, -1 * N.instance.itemMovespeed), 
            this.breaked = !1;
        }
        onAwake() {
            super.onAwake(), this._collider = this.owner.addComponent(o), this._efect = this._owner.getChildByName("flash");
        }
        onEnable() {
            Laya.timer.loop(10, this, this.itemMove);
        }
        onDisable() {
            Laya.timer.clear(this, this.itemMove), null != this._sound && Laya.SoundManager.removeChannel(this._sound);
        }
        itemMove() {
            N.instance.isFinish || (this.moveSpeed.z = -1 * N.instance.itemMovespeed, this.moveSpeed = this.moveSpeed, 
            this._trans.translate(this.moveSpeed, !1), this._trans.position.z < 4 && this.initCollider(), 
            this._trans.position.z <= -8 && (this._owner.removeSelf(), this._owner.destroyChildren(), 
            this._owner.destroy(!0)));
        }
        initCollider() {
            if (null == this._collider._body) {
                var e = this._owner.getChildByName("Collider");
                this._collider.initCollider(e, 1, !1, !1, !0, this.onCollisionEnter.bind(this), !1, "enemy"), 
                this._states = this._owner.getChildByName("States");
            }
        }
        onCollisionEnter(e) {
            "player" == e.body.tag && this.showBreak();
        }
        showBreak() {
            this.breaked || (this._efect.active = !0, this._efect.particleSystem.play(), this.breaked = !0, 
            this._states.getChildAt(0).active = !1, this._states.getChildAt(1).active = !0, 
            this._sound = Laya.SoundManager.playSound("res/Audio/elect.mp3"), this._sound && (this._sound.volume = 1));
        }
    }
    class N extends Laya.Script {
        constructor() {
            super(), this.isEdit = !0, this.overMaxLevel = !1, this.fakeLevel = 0, this.isFinish = !0, 
            this._levelArray = [], this.nowLevelLength = 50, this.itemMovespeed = .08, this.levelScore = 10, 
            this.nowLevelIndex = 1, this.levelLoadFinish = !1, this.clearLoadRes = !1, this._s = new Laya.Vector3(0, 0, -1 * this.itemMovespeed), 
            this.nowScore = 0, this.isSuccess = !1, this.nowSkinIndex = 0, null == N.instance && N.SingletonList_expand();
        }
        onAwake() {
            N.instance = this, a.instacne.enableCannonWorld(), this.onScenesLoaded(), window.wx && wx.showShareMenu(null);
        }
        onScenesLoaded() {
            this.Scenes3D = Laya.loader.getRes("Scenes/Main.ls"), this.Scenes3D.enableFog = !0, 
            this.Scenes3D.fogColor = new Laya.Vector3(.8, .8, .8), this.Scenes3D.fogStart = 20, 
            this.Scenes3D.fogRange = 30, Laya.stage.addChild(this.Scenes3D), Laya.stage.addChild(A.app), 
            Laya.stage.setChildIndex(this.Scenes3D, 0), this.Scenes3D.getChildByName("Main Camera").enableHDR = !1, 
            this._player = this.Scenes3D.getChildByName("Player"), this._playerCtrl = this._player.addComponent(B), 
            this.createPoint = this.Scenes3D.getChildByName("CreatePoint"), this._sceneRoot = this.Scenes3D.getChildByName("ScenesRoot");
            var e = this.Scenes3D.getChildByName("pathRoot"), t = this.Scenes3D.getChildByName("pathRoot2");
            e.addComponent(H)._other = t, t.addComponent(H)._other = e;
        }
        loadLevel() {
            this.isFinish = !1, this.levelLoadFinish = !1, this.clearLoadRes = !1, Laya.SoundManager.stopAllSound(), 
            this._playerCtrl._nowSpeed = 1, this.showScore(), this.loadJson(), Laya.timer.loop(1e3, this, this.loadJson);
        }
        loadJson() {
            let t = "res/data/Lv_", i = this.overMaxLevel ? this.fakeLevel : this.nowLevelIndex;
            Laya.loader.load(t + i + ".json", Laya.Handler.create(this, e => {
                this.levelLoadFinish || (this.levelLoadFinish = !0, Laya.timer.clear(this, this.loadJson), 
                A.app.tips.visible = !1, this._levelArray = e.objs, this._levelArray.forEach(e => {
                    "LevelSeting" == e.tag && (this.nowLevelLength = 10 * Number(e.LevelLength), this.levelScore = Number(e.LevelScore));
                }), this.createPoint.transform.position.z = 15, this.createPoint.transform.position = this.createPoint.transform.position, 
                this._cerateLevel(), Laya.timer.loop(10, this, this._move));
            }));
        }
        _move() {
            this.isFinish || (this._s.z = -1 * this.itemMovespeed, this._s = this._s, this.createPoint.transform.translate(this._s, !1), 
            this.createPoint.transform.position.z <= -1 * this.nowLevelLength + 25 && (this.createPoint.transform.position = new Laya.Vector3(0, 0, 25), 
            this._cerateLevel()));
        }
        showScore() {
            A.app.cp_score.index = A.app.cp_score1.index = A.app.cp_score2.index = -1;
            let e = this.nowScore + "";
            A.app.cp_score.index = e[0] ? +e[0] : -1, A.app.cp_score1.index = e[1] ? +e[1] : -1, 
            A.app.cp_score2.index = e[2] ? +e[2] : -1;
        }
        _cerateLevel() {
            if (this.startTime) {
                let e = new Date().getTime();
                if (e - this.startTime <= 5e3) return;
                this.startTime = e;
            } else this.startTime = new Date().getTime();
            var e = this.createPoint.transform.position.clone();
            if (this.isSuccess) return (t = Laya.loader.getRes("Prefab/Finish.lh").clone()).transform.position = new Laya.Vector3(e.x, e.y, e.z), 
            N.instance._sceneRoot.addChild(t), void t.addComponent(G);
            for (let i = 0; i < this._levelArray.length; i++) {
                const s = this._levelArray[i];
                
                if ("Untagged" == s.tag) break;
                var t;
               
                if ("LevelSeting" != s.tag) switch ((t = Laya.loader.getRes("Prefab/" + s.tag + ".lh").clone()).transform.position = new Laya.Vector3(e.x - s.position[0], e.y + s.position[1], e.z + s.position[2]), 
                t.transform.rotationEuler = new Laya.Vector3(s.eulerAngle[0], -s.eulerAngle[1], -s.eulerAngle[2]), 
                N.instance._sceneRoot.addChild(t), s.tag) {
                  case "Bomb":
                    t.addComponent(M);
                    break;

                  case "Enemy":
                    t.addComponent(D);
                    break;

                  default:
                    t.addComponent(k).setUp(s);
                }
            }
        }
        _addScore() {
            this.nowScore++, this.nowScore >= this.levelScore ? (this.isSuccess = !0,
            A.app.img_prog.scaleY = 1) : A.app.img_prog.scaleY = this.nowScore / this.levelScore, 
            this.showScore();
        }
        levelSuccess() {
            this.isFinish = !0, N.instance._playerCtrl.showLevelSuccess(), A.app.showSuccess(), 
            Laya.SoundManager.setSoundVolume(0);
        }
        levelFailed() {
            this._playerCtrl.isUseShield || (this._playerCtrl.showDie(), this.isFinish = !0, 
            N.instance.showFailed());
        }
        _reborn() {
            N.instance.isFinish = !1, W.app.reliveDialog && W.app.reliveDialog.close();
        }
        _levelClear() {
            Laya.timer.clear(this, this._move), this.nowScore = 0, this.isFinish = !0, this.isSuccess = !1, 
            N.instance._sceneRoot.removeChildren(0, N.instance._sceneRoot.numChildren - 1), 
            A.app.img_prog.scaleY = this.nowScore / this.levelScore, this.showScore(), this._playerCtrl._animator.play("Idle");
        }
        showFailed() {
            A.app.showFaild();
        }
        changePlayerSkin() {
            var e = this._playerCtrl._trans.position.clone();
            console.log(this.nowSkinIndex), this.nowSkinIndex > 4 && (this.nowSkinIndex = 0), 
            Laya.loader.create("Prefab/Player" + this.nowSkinIndex + ".lh", Laya.Handler.create(this, () => {
                var t = Laya.loader.getRes("Prefab/Player" + this.nowSkinIndex + ".lh");
                t.transform.position = e, this.Scenes3D.addChild(t), this._player.removeSelf(), 
                t.addComponent(B);
            }));
        }
        static SingletonList_expand() {
            Laya.SingletonList.prototype._remove = function(e) {
                if (-1 != e && (this.length--, e !== this.length)) {
                    var t = this.elements[this.length];
                    t && (this.elements[e] = t, t._setIndexInList(e));
                }
            };
            var e = Laya.SimpleSingletonList.prototype.add;
            Laya.SimpleSingletonList.prototype.add = function(t) {
                -1 === t._getIndexInList() && e.call(this, t);
            };
        }
    }
    var U = Laya.HttpRequest, O = Laya.Event;
    class P {
        constructor() {
            this.mOpenid = "", this.mVersion = 1007, this.mUID = 0, this.games_box = [], this.fh_onoff = 0, 
            this.shareurl = [], this.mHttpCall = null, this.mURL = "https://mascaiyou.wanzhushipin.cn/xcx_yyj/", 
            this.mCmd = {
                launch: "1.0.1/xcx_yyj/Lauch?",
                setUserValue: "1.0.1/xcx_yyj/SetUserValue?",
                login: "1.0.1/xcx_yyj/login?",
                GetStage: "1.0.1/xcx_yyj/GetStage?",
                GetGamesBox: "1.0.1/xcx_yyj/GetGamesBox2?",
                ClickGame: "1.0.1/xcx_yyj/ClickGame?"
            }, this.mLoginType = 0, this.videoAd = null, this.adBanner = null, this.of_yanchi = !1, 
            this.of_ycTime = 3e3, this.of_collection = 1, this.of_relive = 1, this.of_reward = 1, 
            this.of_score_num = 1, this.of_hotshare_page = 1, this.of_tab_game_share = 1, this.of_shareTime = 3e3, 
            this.itemList = {}, this.adid = "", this.defaultAdVideo = "", this.defaultAdBanner = "", 
            this.skipBtnY = 0, this.bannerHeight = 0, this.of_showFinger = !0, this.mIsInvokeRemoveCustomBannerAd = !1, 
            this.mCustomBanner = null, this.junmpedId = [], this.m_bannerIsShow = !1;
        }
        setupWXLaunchOptions(e) {
            var t = {};
            if (t.query = e.query, t.scene = e.scene, t.isSticky = e.isSticky, t.shareTicket = e.shareTicket, 
            null != t.query.scene) for (var i = decodeURIComponent(t.query.scene).split("&"), s = 0; s < i.length; s++) {
                var a = i[s].split("=");
                2 == a.length && (t.query[a[0]] = a[1]);
            }
            void 0 !== t.query && void 0 !== t.query.adid && (this.adid = String(t.query.adid)), 
            void 0 !== t.query && void 0 !== t.query.channel && (this.adid = String(t.query.channel)), 
            Q.uo.mLaunch = t;
        }
        onLaunch(t = !0) {

            W.app.nowLevel = platform.getInstance().getStorageSync("nowLevel") || 1;
            // let s = this;
            // this.mHttpCall = new U(), 
            // this.mHttpCall.once(O.COMPLETE, this, 
            //     function(a) {
            //     let n = null;
            //     if (n = "string" == typeof a ? e.getJSON(a) : e.getJSON(s.mHttpCall.data), console.log(n), 
            //     0 == n.code) {
            //         for (var o in s.shareurl = n.shareurl, W.app.isNew = n.nowday == n.regday ? 1 : 0, 
            //         W.app.isNew && (W.app.first_entry_time = n.nowday), n.on_off) {
            //             var r = n.on_off[o];
            //             "of_collection" == r.key && (s.of_collection = Number(r.value)), "of_relive" == r.key && (s.of_relive = Number(r.value)), 
            //             "of_reward" == r.key && (s.of_reward = Number(r.value)), "of_share_time" == r.key && (s.of_shareTime = Number(r.param)), 
            //             "of_score_num" == r.key && (s.of_score_num = Number(JSON.parse(r.param).number)), 
            //             "of_bannerid" == r.key && (s.defaultAdBanner = JSON.parse(r.param).bannerid), "of_videoid" == r.key && (s.defaultAdVideo = JSON.parse(r.param).videoid), 
            //             "of_hotshare_page" == r.key && (s.of_hotshare_page = Number(r.value)), "of_showFinger" == r.key && (s.of_showFinger = !!Number(r.value)), 
            //             "of_yanchi" == r.key && (s.of_yanchi = 1 == Number(r.value), s.of_yanchi && (s.of_ycTime = Number(r.param))), 
            //             "of_showgames" == r.key && JSON.parse(r.param), "of_friend_recom" == r.key && (s.of_friend_recom = JSON.parse(r.param)), 
            //             "of_tab_game_share" == r.key && (s.of_tab_game_share = Number(r.value));
            //         }
            //         W.app.mAdOn && (s.initVideoAD(s.defaultAdVideo), s.initBannerAD(s.defaultAdBanner)), 
            //         s.games_box = n.games_box, s.fh_onoff = n.fh_onoff;
            //         let e = [];
            //         for (let t in n.user_data) {
            //             var l = n.user_data[t];
            //             if ("jumpedId" == l.key) {
            //                 let e = JSON.parse(l.values);
            //                 for (let t in e) s.junmpedId.push(e[t]);
            //             } else if ("itemInfo" == l.key) {
            //                 if (!l.values) continue;
            //                 let e = JSON.parse(l.values);
            //                 W.app.itemObj = e;
            //             } else if ("stageLevel" == l.key) {
            //                 let e = l.values;
            //                 W.app.nowLevel = +e;
            //             } else if ("skinId" == l.key) {
            //                 let e = l.values;
            //                 W.app.nowSkin = +e;
            //             } else "first_channel_id" == l.key ? W.app.first_channel_id = l.values : "first_entry_time" == l.key ? W.app.first_entry_time = l.values : "first_adid" == l.key ? W.app.first_adid = l.values : "first_share_from" == l.key && (W.app.first_share_from = l.values);
            //             e.push(l.key);
            //         }
            //         -1 == e.indexOf("first_channel_id") && (W.app.first_channel_id = X.mChannle, s.saveFirstChannelId()), 
            //         -1 == e.indexOf("first_entry_time") && s.saveFirstEnterTime(), -1 == e.indexOf("first_adid") && (W.app.first_adid = X.mAdId, 
            //         s.saveFirstAdid()), -1 == e.indexOf("first_share_from") && (W.app.first_share_from = X.mSfrom, 
            //         s.saveFirstShareFrom());
            //         let a = n.nowday;
            //         W.app.last_entry_time = a, s.getStageConfig(), i.GetInstance().SetUrl(W.app.mWX.dt_value);
            //         let u = {};
            //         if (i.GetInstance().SendPoint("app_open", u), t) {
            //             m.Inst.initEvent(), Laya.Browser.onMiniGame && Laya.timer.callLater(this, () => {
            //                 wx.postMessage({
            //                     type: "init",
            //                     width: Laya.stage.width,
            //                     height: Laya.stage.height
            //                 }), Laya.Browser.window.sharedCanvas.width = Laya.stage.width, Laya.Browser.window.sharedCanvas.height = Laya.stage.height;
            //             }), Q.uo.resCom3 = !0;
            //             let e = {};
            //             e.share_from = X.mSfrom, e.device_os_version = W.app.system, e.device_type = W.app.brand, 
            //             e.first_entry_time = W.app.first_entry_time, e.last_entry_time = W.app.last_entry_time, 
            //             e.adid = X.mAdId, e.first_adid = W.app.first_adid, i.GetInstance().SendPoint("app_entry", e);
            //             var h = W.app.mWX.shareurl[2];
            //             if (null != h) {
            //                 var d = null != h.id ? h.id : 2, c = null != h.title ? h.title : "好生气，差一点就冲上榜首了", p = null != h.url ? h.url : "pngs/share/share3.png";
            //                 h.type;
            //             }
            //             wx.onShareAppMessage(() => ({
            //                 title: c,
            //                 imageUrl: p,
            //                 query: "uid=" + Q.uo.mWeUser.uid + "surl=" + d
            //             }));
            //         }
            //     }
            //     s.mHttpCall = null;
            // }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            Q.uo.getUser();
            let s = this;
            function aaa(a) {
                s.getStageConfig();
                i.GetInstance().SetUrl(W.app.mWX.dt_value);
                if (t) {

                    m.Inst.initEvent(), Q.uo.resCom3 = !0;
                    let e = {};
                    e.share_from = X.mSfrom, e.device_os_version = W.app.system, e.device_type = W.app.brand, 
                    e.first_entry_time = W.app.first_entry_time, e.last_entry_time = W.app.last_entry_time, 
                    e.adid = X.mAdId, e.first_adid = W.app.first_adid;
                }
                s.mHttpCall = null;
            }

            aaa();




            // let a = [];
            // Laya.Browser.onIOS ? a.platform = 2 : a.platform = 1, a.uid = Q.uo.mWeUser.uid, 
            // a.ver = W.app.mWX.mVersion, a.adid = X.mAdId, a.surl = X.mSurl, console.log(a);
            // let n = this.mURL + this.mCmd.launch + e.getUrlParams(a, "1.0.1");
            // this.mHttpCall.send(n, null, "get", "text");
        }
        GetValue(e, t) {
            let i = e.length, s = 0;
            for (let a = 0; a < i; a++) if (e[a].key == t) {
                s = 1 == e[a].value ? 0 : 1;
                break;
            }
            return s;
        }
        getMoreUrl(t) {
            for (var i = 0; i < this.games_box.length; i++) if (Number(t) == Number(this.games_box[i].gameid)) return this.games_box[i];
            return e.getCDN() + "myCompany.png";
        }
        onHttpRequestError(e) {
            this.mHttpCall = null, console.log("onHttpRequestError:" + e);
        }
        unlockItem(t) {
            let i = this;
            this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(t) {
                let s = null;
                s = "string" == typeof t ? e.getJSON(t) : e.getJSON(i.mHttpCall.data), console.log(s), 
                0 == s.code && W.app.collectionView && (W.app.collectionView.updateArr(), wx.showToast({
                    title: "解锁成功",
                    icon: "none",
                    duration: 2e3
                })), i.mHttpCall = null;
            }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            for (let e in W.app.itemObj) if (e == t) {
                W.app.itemObj[e].have = 1;
                break;
            }
            let s = [];
            s.uid = Q.uo.mWeUser.uid, s.dt_key = "itemInfo", s.dt_value = JSON.stringify(W.app.itemObj);
            let a = this.mURL + this.mCmd.setUserValue + e.getUrlParams(s);
            this.mHttpCall.send(a, null, "get", "text");
        }
        saveLevel() {
            // let t = this;
            // this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(i) {
            //     let s = null;
            //     s = "string" == typeof i ? e.getJSON(i) : e.getJSON(t.mHttpCall.data), console.log(s), 
            //     0 == s.code && console.log(N.instance.nowLevelIndex), t.mHttpCall = null;
            // }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            // let i = [];
            // i.uid = Q.uo.mWeUser.uid, i.dt_key = "stageLevel", i.dt_value = N.instance.nowLevelIndex + "";
            // let s = this.mURL + this.mCmd.setUserValue + e.getUrlParams(i);
            // this.mHttpCall.send(s, null, "get", "text");
        }
        saveFirstShareFrom() {
            let t = this;
            this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(i) {
                let s = null;
                s = "string" == typeof i ? e.getJSON(i) : e.getJSON(t.mHttpCall.data), console.log(s), 
                0 == s.code && console.log(N.instance.nowLevelIndex), t.mHttpCall = null;
            }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = Q.uo.mWeUser.uid, i.dt_key = "first_share_from", i.dt_value = W.app.first_share_from + "";
            let s = this.mURL + this.mCmd.setUserValue + e.getUrlParams(i);
            this.mHttpCall.send(s, null, "get", "text");
        }
        getStageConfig() {
            // let t = this;
            // this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(i) {
            //     let s = null;
            //     s = "string" == typeof i ? e.getJSON(i) : e.getJSON(t.mHttpCall.data), console.log(s), 
            //     0 == s.code && (W.app.stageConfig = s.stages), t.mHttpCall = null;
            // }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            // let i = [];
            // i.uid = Q.uo.mWeUser.uid, i.ver = W.app.mWX.mVersion, console.log(i);
            // let s = this.mURL + this.mCmd.GetStage + e.getUrlParams(i);
            // this.mHttpCall.send(s, null, "get", "text");
        }
        changeLevel() {
            let t = this;
            this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(i) {
                let s = null;
                s = "string" == typeof i ? e.getJSON(i) : e.getJSON(t.mHttpCall.data), console.log(s), 
                0 == s.code && console.log(N.instance.nowLevelIndex), t.mHttpCall = null;
            }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = Q.uo.mWeUser.uid, i.dt_key = "stageLevel", i.dt_value = "13";
            let s = this.mURL + this.mCmd.setUserValue + e.getUrlParams(i);
            this.mHttpCall.send(s, null, "get", "text");
        }
        changeSkin(t) {
            let i = this;
            this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(t) {
                let s = null;
                s = "string" == typeof t ? e.getJSON(t) : e.getJSON(i.mHttpCall.data), console.log(s), 
                0 == s.code && console.log("切换皮肤"), i.mHttpCall = null;
            }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError), N.instance.nowSkinIndex = t, 
            N.instance.changePlayerSkin();
            let s = [];
            s.uid = Q.uo.mWeUser.uid, s.dt_key = "skinId", s.dt_value = N.instance.nowSkinIndex + "";
            let a = this.mURL + this.mCmd.setUserValue + e.getUrlParams(s);
            this.mHttpCall.send(a, null, "get", "text");
        }
        setJumpedId() {
            let t = this;
            this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(i) {
                let s = null;
                s = "string" == typeof i ? e.getJSON(i) : e.getJSON(t.mHttpCall.data), t.mHttpCall = null;
            }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            let i = [], s = {};
            t.junmpedId.map((e, t) => {
                s[t] = e;
            }), i.uid = Q.uo.mWeUser.uid, i.dt_key = "jumpedId", i.dt_value = JSON.stringify(s);
            let a = this.mURL + this.mCmd.setUserValue + e.getUrlParams(i);
            this.mHttpCall.send(a, null, "get", "text");
        }
        clearJumpedId() {
            let t = this;
            this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(i) {
                let s = null;
                s = "string" == typeof i ? e.getJSON(i) : e.getJSON(t.mHttpCall.data), t.mHttpCall = null;
            }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = Q.uo.mWeUser.uid, i.dt_key = "jumpedId", i.dt_value = JSON.stringify({});
            let s = this.mURL + this.mCmd.setUserValue + e.getUrlParams(i);
            this.mHttpCall.send(s, null, "get", "text");
        }
        saveFirstChannelId() {
            let t = this;
            this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(i) {
                let s = null;
                s = "string" == typeof i ? e.getJSON(i) : e.getJSON(t.mHttpCall.data), t.mHttpCall = null;
            }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = Q.uo.mWeUser.uid, i.dt_key = "first_channel_id", i.dt_value = W.app.first_channel_id + "";
            let s = this.mURL + this.mCmd.setUserValue + e.getUrlParams(i);
            this.mHttpCall.send(s, null, "get", "text");
        }
        saveFirstEnterTime() {
            let t = this;
            this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(i) {
                let s = null;
                s = "string" == typeof i ? e.getJSON(i) : e.getJSON(t.mHttpCall.data), t.mHttpCall = null;
            }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = Q.uo.mWeUser.uid, i.dt_key = "first_entry_time", i.dt_value = W.app.first_entry_time + "";
            let s = this.mURL + this.mCmd.setUserValue + e.getUrlParams(i);
            this.mHttpCall.send(s, null, "get", "text");
        }
        saveFirstAdid() {
            let t = this;
            this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(i) {
                let s = null;
                s = "string" == typeof i ? e.getJSON(i) : e.getJSON(t.mHttpCall.data), t.mHttpCall = null;
            }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = Q.uo.mWeUser.uid, i.dt_key = "first_adid", i.dt_value = W.app.first_adid + "";
            let s = this.mURL + this.mCmd.setUserValue + e.getUrlParams(i);
            this.mHttpCall.send(s, null, "get", "text");
        }
        saveLastEnterTime() {
            let t = this;
            this.mHttpCall = new U(), this.mHttpCall.once(O.COMPLETE, this, function(i) {
                let s = null;
                s = "string" == typeof i ? e.getJSON(i) : e.getJSON(t.mHttpCall.data), t.mHttpCall = null;
            }), this.mHttpCall.once(O.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = Q.uo.mWeUser.uid, i.dt_key = "first_channel_id", i.dt_value = W.app.last_entry_time + "";
            let s = this.mURL + this.mCmd.setUserValue + e.getUrlParams(i);
            this.mHttpCall.send(s, null, "get", "text");
        }
        initVideoAD(e) {
            if (W.app.mSDKVersion >= "2.0.4" && e) try {
                this.videoAd = wx.createRewardedVideoAd({
                    adUnitId: e
                }), this.videoAd.onError(function(e) {
                    console.log("视频加载失败"), console.log(e.errMsg), W.app.mWX.videoAd = null;
                }), this.videoAd.load();
            } catch (e) {
                console.log("读取广告失败"), this.videoAd = null;
            }
        }
        initBannerAD(e, t = 1) {
            this.m_bannerIsShow = !0, W.app.mSDKVersion >= "2.0.4" && (null == W.app.mWX.adBanner && e ? (W.app.mWX.adBanner = wx.createBannerAd({
                adUnitId: e,
                style: {
                    left: 0,
                    top: W.app.mScreenHeight - 107,
                    width: 1.5 * W.app.mScreenWidth
                }
            }), W.app.mWX.adBanner.onResize(e => {
                W.app.mWX.adBanner.style.top = W.app.mScreenHeight - W.app.mWX.adBanner.style.realHeight, 
                W.app.mWX.adBanner.style.left = (W.app.mScreenWidth - W.app.mWX.adBanner.style.realWidth) / 2;
                let t = W.app.mWX.adBanner ? W.app.mWX.adBanner.style.realHeight : 0;
                t && (this.bannerHeight = t * Laya.stage.height / W.app.mScreenHeight, this.skipBtnY = Laya.stage.height - this.bannerHeight - 20 - 36);
            }), W.app.mWX.adBanner.onLoad(() => {
                console.log("adBanner 广告加载成功");
            }), W.app.mWX.adBanner.onError(() => {
                console.log("adBanner 广告加载失败"), W.app.mWX.adBanner = null;
            })) : W.app.mWX.adBanner && (console.log("已经创建 直接显示"), W.app.mWX.adBanner.show()));
        }
        hideADBanner() {
            this.m_bannerIsShow = !1, null != this.adBanner && this.adBanner.hide();
        }
    }
    class R {
        constructor() {}
        static init() {
            (0, Laya.ClassUtils.regClass)("script/GameUI.ts", A);
        }
    }
    R.width = 750, R.height = 1334, R.scaleMode = "fixedwidth", R.screenMode = "none", 
    R.alignV = "top", R.alignH = "center", R.startScene = "test/StartScene.scene", R.sceneRoot = "", 
    R.debug = !1, R.stat = !1, R.physicsDebug = !1, R.exportSceneToJson = !0, R.init();
    class W {
        constructor() {
            this.mVersion = "", this.mSDKVersion = "", this.mAdOn = !0, this.brand = "", this.first_entry_time = "0", 
            this.last_entry_time = "0", this.first_adid = "0", this.first_share_from = "0", 
            this.isNew = 0, this.first_channel_id = "0", this.shareTag = 0, this.itemIdList = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17 ], 
            this.skinIdList = [ 0, 1, 2, 3, 4 ], this.itemObj = {}, this.nowLevel = 1, this.nowSkin = 0, 
            window.Laya3D ? Laya3D.init(R.width, R.height) : Laya.init(R.width, R.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = "showall";//R.scaleMode,
             Laya.stage.screenMode = R.screenMode, Laya.stage.alignV = R.alignV, 
            Laya.stage.alignH = R.alignH, Laya.URL.exportSceneToJson = R.exportSceneToJson, 
            (R.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            R.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), R.stat && Laya.Stat.show(), 
            Laya.alertGlobalError = !0, 
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION); 
        }

        startup(){
            W.app = this, 
            Laya.timer.callLater(this, function() {
                null == Q.uo && new Q(), Q.uo.initWX(2);
            }), this.mWX = new P();
            for (let e of this.itemIdList) {
                let t = {};
                this.itemObj[e] = t, t.have = 0, t.id = e;
            }
        }



        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {


            async function saveui(){
                loadLib("libs/htmlfs.js");
                var _classMap =  Laya.ClassUtils._classMap;
                for (const key in _classMap) {
                    const ui = _classMap[key];
                    if(ui && ui.uiView){
                        let nams = key.split(".");
                        await new Promise(r=>{
                            setTimeout(r,0.1e3);
                        })
                        htmlfs.save(JSON.stringify(ui.uiView),nams.pop());
                    }
                }
            }

            let t = this;
            async function readui(){

                await new Promise(r=>{
                     Laya.loader.load([
                        "views/collectionViewUI.scene",
                        "views/loadingViewUI.scene",
                        "views/reliveDialogUI.scene",
                        "views/resultDialogUI.scene",
                        "views/rewardDialogUI.scene"
                    ],Laya.Handler.create(this,r))
                });

                var _classMap =  Laya.ClassUtils._classMap;
                for (const key in _classMap) {
                    const ui = _classMap[key];
                    if(ui && ui.uiView){
                        let name = key.split(".").pop();
                        ui.uiView =  Laya.loader.getRes("views/"+name+".scene");
                    }
                }
                t.startup();
            }
            readui();
            // saveui();
           
        }
        showloading() {}
    }
    new W();
    class X {
        constructor() {}
        version() {
            return ""//W.app.mWX.mVersion.toString();
        }
        onBefore() {
            return this.dealAdId(Q.uo.mLaunch), this.dealSurl(Q.uo.mLaunch), this.dealSchannel(Q.uo.mLaunch), 
            this.dealSfrom(Q.uo.mLaunch), !0;
        }
        onShow() {}
        onLogin(e, t) {
            var i = wx.getSystemInfoSync();
            return W.app.mSDKVersion = i.SDKVersion, W.app.mScreenHeight = Number(i.screenHeight), 
            W.app.mScreenWidth = Number(i.screenWidth), W.app.mVersion = i.version, W.app.system = i.system, 
            W.app.brand = i.brand, wx.setKeepScreenOn({
                keepScreenOn: !0
            }), wx.showShareMenu({
                withShareTicket: !0
            }), W.app.mWX.mOpenid = t.openid, W.app.mWX.mUID = t.uid, W.app.mWX.dt_value = t.dt_value, 
            !0;
        }
        onEnterGame(e, t, i) {
            W.app.mWX.mUID = Q.uo.getUserID(),
            W.app.mWX.onLaunch();
            1 == W.app.shareTag ? null != W.app.collectionView && (Q.uo.m_backTime >= W.app.mWX.of_shareTime ? (W.app.mWX.unlockItem(W.app.collectionView.selcetIndex), 
            wx.showToast({
                title: "解锁成功",
                icon: "none",
                duration: 2e3
            })) : (console.log("分享时间短....."), W.app.collectionView.sendPoint(0, "share"), wx.showToast({
                title: "分享到群生效",
                icon: "none",
                duration: 2e3
            }))) : 2 == W.app.shareTag ? null != W.app.rewardDialog && (Q.uo.m_backTime >= W.app.mWX.of_shareTime ? (0 == W.app.rewardDialog.rewrdType ? W.app.mWX.changeSkin(W.app.rewardDialog.rewardId) : W.app.mWX.unlockItem(W.app.rewardDialog.rewardId), 
            W.app.rewardDialog.sendPoint(1, "share"), W.app.rewardDialog.skip(), wx.showToast({
                title: "领取成功",
                icon: "none",
                duration: 2e3
            })) : (W.app.rewardDialog.sendPoint(0, "share"), console.log("分享时间短....."), wx.showToast({
                title: "分享到群生效",
                icon: "none",
                duration: 2e3
            }))) : 3 == W.app.shareTag && null != W.app.reliveDialog && (Q.uo.m_backTime >= W.app.mWX.of_shareTime ? (W.app.reliveDialog.reliveTime++, 
            W.app.reliveDialog.hideADBanner(), N.instance._reborn(), W.app.reliveDialog.sendPoint(1, "share"), 
            wx.showToast({
                title: "复活成功",
                icon: "none",
                duration: 2e3
            })) : (W.app.reliveDialog.sendPoint(0, "share"), console.log("分享时间短....."), wx.showToast({
                title: "分享到群生效",
                icon: "none",
                duration: 2e3
            }), Laya.timer.loop(1e3 / 60, W.app.reliveDialog, W.app.reliveDialog.countdown))), 
            W.app.shareTag = 0;
        }
        onHideGame() {}
        dealAdId(e) {
            // void 0 !== e.query && void 0 !== e.query.adid && (X.mAdId = String(e.query.adid)), 
            // console.log("mAdId = " + X.mAdId);
        }
        dealSurl(e) {
            // void 0 !== e.query.surl && (X.mSurl = String(e.query.surl)), console.log("mSurl = " + X.mSurl);
        }
        dealSfrom(e) {
            // void 0 !== e.query.uid && (X.mSfrom = String(e.query.uid));
        }
        dealSchannel(e) {
            // void 0 !== e.query && void 0 !== e.query.channel && (X.mChannle = String(e.query.channel));
        }
    }
    X.mIF = {
        login: {
            url: "1.0.1/xcx_yyj/login?",
            key: "1.0.1",
            tips: "登录服务"
        },
        GetGamesBox: {
            url: "1.0.1/xcx_yyj/GetGamesBox?",
            key: "1.0.1",
            tips: "分发游戏数据"
        }
    }, X.mAdId = "0", X.mSurl = "0", X.mSfrom = "0", X.mChannle = "0";
    class V {
        static addHand(e) {
            let t = new Laya.Animation();
            t.loadAtlas("dianji/1.atlas", Laya.Handler.create(this, () => {
                e && t.play(0, !0);
            })), t.name = "hand", t.scale(.8, .8), t.pos(20, 140), t.zOrder = 100, e.addChild(t);
        }
        static getPropType(e) {
            switch (e) {
              case 1:
                return "direct";

              case 2:
                return "video";

              case 3:
                return "share";

              default:
                return "other ";
            }
        }
        static submitInfo(t, i) {
            if (!Laya.Browser.onMiniGame) return;
            i.session_id = V.submitParam.session_id, i.is_new = "app_open" == t ? -1 : V.submitParam.is_new ? 1 : 0, 
            i.UID = V.submitParam.UID, i.channel_id = V.submitParam.channel_id, i.first_channel_id = V.submitParam.first_channel_id, 
            i.group = V.submitParam.group, i.share_from = V.submitParam.share_from, i.scene_id = V.submitParam.scene_id, 
            i.create_time = new Date().getTime(), i.version = V.submitParam.version;
            let s = [];
            s.gameid = V.submitParam.gameid, s.uid = V.submitParam.UID, s.create_time = new Date().getTime(), 
            s.mobile = V.submitParam.mobile, s.login_session = V.submitParam.session_id, s.keyname = t.trim(), 
            s.clos = JSON.stringify(i);
            let a = V.submitUrl + "?" + e.getUrlParams(s, "1.0.3"), n = new Laya.HttpRequest();
            n.on(Laya.Event.COMPLETE, this, function(e) {
                console.log("commitOk:", a);
            }), n.send(a, null, "get", "text");
        }
        static btnFadeOut(e, t, i = null) {
            e.alpha = 0, Laya.timer.once(t - 340, null, () => {
                Laya.Tween.to(e, {
                    alpha: 1
                }, 340, null, i);
            });
        }
        static get phoneInfo() {
            return V._phineInfo || (V._phineInfo = wx.getSystemInfoSync()), V._phineInfo;
        }
        static getMenuTop(e) {
            if (!Laya.Browser.onMiniGame) return;
            let t = () => {
                var t = V.phoneInfo.screenHeight / 1334;
                V.phoneInfo.screenWidth;
                V.phoneInfo.screenHeight < 812 ? e.y = 20 / t - 30 : e.y = 94;
            };
            if (V.phoneInfo.SDKVersion < "2.1.0") t(); else if (V.menuLayout || (V.menuLayout = wx.getMenuButtonBoundingClientRect()), 
            V.menuLayout.top) {
                let t = V.menuLayout.height, i = (V.menuLayout.top + t / 2) * (750 / V.phoneInfo.screenWidth);
                e.y = i - e.height / 2;
            } else t();
        }
    }
    V.submitUrl = "";
    class F extends r.wx.rewardDialogUI {
        constructor() {
            super(), this.getType = 1, this.height = Laya.stage.height, this.btn_get.on(Laya.Event.CLICK, this, this.getItem), 
            this.btn_skip.on(Laya.Event.CLICK, this, this.skip);
        }
        reset(e, t, s) {
            if (this.getType = e, this.rewardId = t, this.rewrdType = s, W.app.mWX.fh_onoff) switch (this.getType) {
              case 0:
                this.btn_get.visible = !1;
                break;

              case 1:
                this.btn_get.skin = "reward/rw_get1.png";
                break;

              case 2:
                this.btn_get.skin = "reward/rw_get2.png";
                break;

              case 3:
                this.btn_get.skin = "reward/rw_get3.png";
            } else this.btn_get.skin = "reward/rw_get1.png";
            if (0 == this.rewrdType ? (this.rewardId == N.instance.nowSkinIndex && (++this.rewardId, 
            this.rewardId = this.rewardId > 4 ? 0 : this.rewardId), this.img_item.skin = "reward/" + this.rewardId + ".png") : this.img_item.skin = "collection/" + this.rewardId + ".png", 
            x.onShowBanner(this, Q.uo.m_menuBtnHeight + 40, "banner_end"), W.app.mWX.of_yanchi) {
                let e = W.app.mWX.of_ycTime;
                V.btnFadeOut(this.btn_skip, e);
            } else this.btn_skip.alpha = 1;
            i.GetInstance().SendPoint("end_award", {}), this.adjustBoxY(), this.popup(!0, !1), 
            this.showADBanner();
        }
        adjustBoxY() {
        }
        sendPoint(e, t) {
        }
        getItem() {
            if (W.app.mWX.fh_onoff) switch (this.getType) {
              case 0:
                break;

              case 1:
                0 == this.rewrdType ? W.app.mWX.changeSkin(this.rewardId) : W.app.mWX.unlockItem(this.rewardId), 
                this.sendPoint(1, "direct"), wx.showToast({
                    title: "领取成功",
                    icon: "none",
                    duration: 2e3
                }), this.skip();
                break;

              case 2:
                this.showADVideo();
                break;

              case 3:
                this.shareToFriends();
            } else 0 == this.rewrdType ? W.app.mWX.changeSkin(this.rewardId) : W.app.mWX.unlockItem(this.rewardId), 
            wx.showToast({
                title: "领取成功",
                icon: "none",
                duration: 2e3
            }), this.sendPoint(1, "direct"), this.skip();
        }
        skip() {
            console.log("skipskipskipskip")
            this.close();
            W.app.resultDialog.reset(!0);
            // if (W.app.mWX.of_hotshare_page) if (W.app.isNew) this.close(), 
            // W.app.resultDialog.reset(!0); else {
            //     let e = Laya.Handler.create(this, () => {
            //         this.close(), W.app.resultDialog.reset(!0);
            //     });
            //     x.onShowHotView(e, this);
            // } else this.close(), W.app.resultDialog.reset(!0);
        }
        hideADBanner() {
            W.app.mWX.hideADBanner();
        }
        showADBanner() {
        }
        showADVideo() {
            if (this.hideADBanner(), W.app.mSDKVersion >= "2.0.4") try {
                W.app.mWX.videoAd.show().catch(e => (function() {
                    wx.showToast({
                        title: "视频获取失败",
                        icon: "success",
                        image: "",
                        duration: 2e3
                    }), console.log("广告播放失败");
                })), W.app.mWX.videoAd.onError(e => {
                    wx.showToast({
                        title: "视频获取失败",
                        icon: "success",
                        duration: 2e3
                    }), console.log(e.errMsg);
                }), W.app.mWX.videoAd.onClose(e => {
                    W.app.mSDKVersion >= "2.1.0" ? 1 == e.isEnded ? (0 == this.rewrdType ? W.app.mWX.changeSkin(this.rewardId) : W.app.mWX.unlockItem(this.rewardId), 
                    wx.showToast({
                        title: "领取成功",
                        icon: "none",
                        duration: 2e3
                    }), this.sendPoint(1, "video"), this.skip()) : (this.showADBanner(), this.sendPoint(0, "video")) : (0 == this.rewrdType ? W.app.mWX.changeSkin(this.rewardId) : W.app.mWX.unlockItem(this.rewardId), 
                    this.sendPoint(1, "video"), this.skip()), W.app.mWX.videoAd.offClose();
                });
            } catch (e) {
                console.log("广告播放失败"), this.shareToFriends();
            }
        }
        shareToFriends() {
            var e = W.app.mWX.shareurl[2];
            if (null != e) {
                var t = null != e.id ? e.id : 2, i = null != e.title ? e.title : "好生气，差一点就冲上榜首了", s = null != e.url ? e.url : "pngs/share/share3.png";
                e.type;
            }
            W.app.shareTag = 2, wx.shareAppMessage({
                title: i,
                imageUrl: s,
                query: "uid=" + Q.uo.mWeUser.uid + "&id=0&type=0&map=0&surl=" + t
            });
        }
    }
    class j extends r.wx.reliveDialogUI {
        constructor() {
            super(), this.radio = 0, this.restTime = 5, this.reliveTime = 0, this.height = Laya.stage.height;
        }
        reset() {
            if (this.reliveTime >= W.app.mWX.of_score_num) return this.reliveTime = 0, void this.showResultDialog();
            this.mp || (this.mp = new Laya.Sprite(), this.mp.pos(126, 126), this.img_circle.mask = this.mp), 
            Laya.timer.loop(1e3 / 60, this, this.countdown), 
            this.radio = 0, 
            this.btnSkip.on(Laya.Event.CLICK, this, this.showResultDialog), 
            this.btn_relive.on(Laya.Event.CLICK, this, this.relive);
            this.popup(!0, !1);
        }
        adjustBoxY() {
        }
        sendPoint(e, t) {
        }
        relive() {
            Laya.timer.clearAll(this)
            this.showADVideo();
        }
        showADVideo() {

            // platform.getInstance().showReward(()=>{
                this.reliveTime++, 
                N.instance._reborn();
            // },()=>{
                // platform.getInstance().prompt("Failed to get the reward, please watch the ads to the end.");
                // Laya.timer.loop(1e3 / 60, this, this.countdown);
            // })

        }
        shareToFriends() {
            var e = W.app.mWX.shareurl[2];
            if (null != e) {
                var t = null != e.id ? e.id : 2, i = null != e.title ? e.title : "好生气，差一点就冲上榜首了", s = null != e.url ? e.url : "pngs/share/share3.png";
                e.type;
            }
            W.app.shareTag = 3, wx.shareAppMessage({
                title: i,
                imageUrl: s,
                query: "uid=" + Q.uo.mWeUser.uid + "&id=0&type=0&map=0&surl=" + t
            });
        }
        countdown() {
            this.mp.graphics.clear(), this.mp.graphics.drawPie(0, 0, 200, this.radio, 360, "#ff0000"), 
            this.radio += 1.2;
            let e = Math.floor(this.radio / 72), t = this.restTime;
            0 == (t -= e) && (t = 1), this.img_num.skin = `relive/${t}.png`, this.radio >= 360 && (this.radio = 0, 
            Laya.timer.clearAll(this), this.mp.graphics.clear(), this.mp.graphics.drawPie(0, 0, 200, 360, 360, "#ff0000"), 
            this.showResultDialog());
        }
        showResultDialog() {
            Laya.timer.clearAll(this);
            this.close(), 
            this.radio = 0, 
            W.app.resultDialog.reset(!1);
        }
        hideADBanner() {
        }
        showADBanner() {
        }
    }
    class z extends r.wx.resultDialogUI {
        constructor() {
            super(), this.height = Laya.stage.height;
        }
        nextLevel(e) {
            W.app.nowLevel ++;
            platform.getInstance().setStorageSync("nowLevel", W.app.nowLevel);

            this.closePage();
        }
        closePage() {
            N.instance._levelClear(), A.app.box_startGame.scaleX = 1, A.app.box_gaming.scaleX = 0, 
             this.close(), x.clearResultShare(), A.app.isWin = !1;
        }
        reset(e) {

            platform.getInstance().initList(this._list);


            if (W.app.reliveDialog.reliveTime = 0, this.img_next.on(Laya.Event.CLICK, this, this.nextLevel, [ e ]), 
            e ? (this.img_title.skin = "result/re_sucess.png", this.img_next.skin = "result/re_next.png") : (this.img_title.skin = "result/re_fail.png", 
            this.img_next.skin = "result/re_replay.png"), W.app.mWX.of_yanchi) {
                let e = W.app.mWX.of_ycTime;
                V.btnFadeOut(this.img_next, e);
            } else this.img_next.alpha = 1;
            let t = Laya.Handler.create(this, () => {
                let e = W.app.mWX.bannerHeight, t = this.img_title.y + this.img_title.height, i = (Laya.stage.height - e - t - 720) / 2 + t;
                x.onShowResultShare(this, i), this.showADBanner();
            });
            if (x.resultView && (x.resultView.visible = !1), W.app.mWX.of_friend_recom) {
                let i = +W.app.mWX.of_friend_recom.startLevel, s = +W.app.mWX.of_friend_recom.interval, a = N.instance.nowLevelIndex;
                ((a = e ? --a : a) - i) % (s + 1) == 0 && a >= i ? x.onShowFriendShare(this, t) : t.run();
            } else t.run();
            let s, a = W.app.mWX.bannerHeight, n = this.img_title.y + this.img_title.height, o = (Laya.stage.height, 
            {});
            o.is_level_complete = e ? 1 : 0, e ? (s = N.instance.nowLevelIndex, s -= 1) : s = N.instance.nowLevelIndex, 
            o.level = s, i.GetInstance().SendPoint("level_complete_info", o), this.adjustBoxY(), 
            this.popup(!0, !1);
        }
        adjustBoxY() {
        }
        hideADBanner() {
            W.app.mWX.hideADBanner();
        }
        showADBanner() {
        }
    }
    class K extends r.wx.loadingViewUI {
        constructor() {
            super(), this.startX = 0, this._value = 0, this.start = 0, 
            this.resArr = [ "res/atlas/collection.atlas", "res/atlas/index.atlas", "res/atlas/relive.atlas", "res/atlas/result.atlas", "res/atlas/reward.atlas", "res/atlas/fenfa.atlas" ], 
            this.height = Laya.stage.height, this.startX = this.ld_icon.x, this.ld_pro.scaleX = 0, 
            this.start = new Date().getTime(), 
            Laya.Tween.to(this, {
                value: .9
            }, 3e3, null, Laya.Handler.create(this, this.loadCompelete));
        }
        get value() {
            return this._value;
        }
        set value(e) {
            this.ld_pro.scaleX = e, this.txt_pro.changeText(Math.floor(100 * e) + "%"), this.ld_icon.x = this.startX + this.ld_pro.width * e;
        }
        loadCompelete() {
            this._value = .9, Laya.Tween.to(this, {
                value: 1
            }, 2e3, null, Laya.Handler.create(this, () => {
                Laya.timer.loop(200, this, () => {
                    this.allFinish();
                });
            }));
        }
        onLoad(e) {}
        allFinish() {
            if(Q.uo.resCom1 && Q.uo.resCom2 && Q.uo.resCom3){

                // platform.getInstance().startup("Factory-Inc",()=>{
                    let yad     = new Laya.Image();
                    yad.scale(0.9,0.9);
                    yad.skin    = "common/yad.png";
                    yad.centerX = 0;
                    yad.bottom  = 10;
                    yad.zOrder  = 2e3;
                    // yad.on(Laya.Event.MOUSE_DOWN,yad,()=>{platform.getInstance().navigate("GAME","LOGO")})
                    Laya.stage.addChild(yad);

                    R.startScene && Laya.Scene.open(R.startScene);

                // });
                W.app.rewardDialog || (W.app.rewardDialog = new F()), 
                W.app.reliveDialog || (W.app.reliveDialog = new j()), W.app.resultDialog || (W.app.resultDialog = new z()), 
                Laya.timer.clearAll(this)
            }
        }
    }
    class q {
        constructor() {
            this.hexcase = 0, this.b64pad = "";
        }
        hex_md5(e) {
            return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)));
        }
        b64_md5(e) {
            return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)));
        }
        any_md5(e, t) {
            return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), t);
        }
        hex_hmac_md5(e, t) {
            return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
        }
        b64_hmac_md5(e, t) {
            return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
        }
        any_hmac_md5(e, t, i) {
            return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)), i);
        }
        md5_vm_test() {
            return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
        }
        rstr_md5(e) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length));
        }
        rstr_hmac_md5(e, t) {
            var i = this.rstr2binl(e);
            i.length > 16 && (i = this.binl_md5(i, 8 * e.length));
            for (var s = Array(16), a = Array(16), n = 0; n < 16; n++) s[n] = 909522486 ^ i[n], 
            a[n] = 1549556828 ^ i[n];
            var o = this.binl_md5(s.concat(this.rstr2binl(t)), 512 + 8 * t.length);
            return this.binl2rstr(this.binl_md5(a.concat(o), 640));
        }
        rstr2hex(e) {
            try {
                this.hexcase;
            } catch (e) {
                this.hexcase = 0;
            }
            for (var t, i = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", s = "", a = 0; a < e.length; a++) t = e.charCodeAt(a), 
            s += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
            return s;
        }
        rstr2b64(e) {
            try {
                this.b64pad;
            } catch (e) {
                this.b64pad = "";
            }
            for (var t = "", i = e.length, s = 0; s < i; s += 3) for (var a = e.charCodeAt(s) << 16 | (s + 1 < i ? e.charCodeAt(s + 1) << 8 : 0) | (s + 2 < i ? e.charCodeAt(s + 2) : 0), n = 0; n < 4; n++) 8 * s + 6 * n > 8 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 6 * (3 - n) & 63);
            return t;
        }
        rstr2any(e, t) {
            var i, s, a, n, o, r = t.length, l = Array(Math.ceil(e.length / 2));
            for (i = 0; i < l.length; i++) l[i] = e.charCodeAt(2 * i) << 8 | e.charCodeAt(2 * i + 1);
            var h = Math.ceil(8 * e.length / (Math.log(t.length) / Math.log(2))), d = Array(h);
            for (s = 0; s < h; s++) {
                for (o = Array(), n = 0, i = 0; i < l.length; i++) n = (n << 16) + l[i], n -= (a = Math.floor(n / r)) * r, 
                (o.length > 0 || a > 0) && (o[o.length] = a);
                d[s] = n, l = o;
            }
            var m = "";
            for (i = d.length - 1; i >= 0; i--) m += t.charAt(d[i]);
            return m;
        }
        str2rstr_utf8(e) {
            for (var t, i, s = "", a = -1; ++a < e.length; ) t = e.charCodeAt(a), i = a + 1 < e.length ? e.charCodeAt(a + 1) : 0, 
            55296 <= t && t <= 56319 && 56320 <= i && i <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & i), 
            a++), t <= 127 ? s += String.fromCharCode(t) : t <= 2047 ? s += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? s += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (s += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
            return s;
        }
        str2rstr_utf16le(e) {
            for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(255 & e.charCodeAt(i), e.charCodeAt(i) >>> 8 & 255);
            return t;
        }
        str2rstr_utf16be(e) {
            for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) >>> 8 & 255, 255 & e.charCodeAt(i));
            return t;
        }
        rstr2binl(e) {
            for (var t = Array(e.length >> 2), i = 0; i < t.length; i++) t[i] = 0;
            for (i = 0; i < 8 * e.length; i += 8) t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
            return t;
        }
        binl2rstr(e) {
            for (var t = "", i = 0; i < 32 * e.length; i += 8) t += String.fromCharCode(e[i >> 5] >>> i % 32 & 255);
            return t;
        }
        binl_md5(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var i = 1732584193, s = -271733879, a = -1732584194, n = 271733878, o = 0; o < e.length; o += 16) {
                var r = i, l = s, h = a, d = n;
                i = this.md5_ff(i, s, a, n, e[o + 0], 7, -680876936), n = this.md5_ff(n, i, s, a, e[o + 1], 12, -389564586), 
                a = this.md5_ff(a, n, i, s, e[o + 2], 17, 606105819), s = this.md5_ff(s, a, n, i, e[o + 3], 22, -1044525330), 
                i = this.md5_ff(i, s, a, n, e[o + 4], 7, -176418897), n = this.md5_ff(n, i, s, a, e[o + 5], 12, 1200080426), 
                a = this.md5_ff(a, n, i, s, e[o + 6], 17, -1473231341), s = this.md5_ff(s, a, n, i, e[o + 7], 22, -45705983), 
                i = this.md5_ff(i, s, a, n, e[o + 8], 7, 1770035416), n = this.md5_ff(n, i, s, a, e[o + 9], 12, -1958414417), 
                a = this.md5_ff(a, n, i, s, e[o + 10], 17, -42063), s = this.md5_ff(s, a, n, i, e[o + 11], 22, -1990404162), 
                i = this.md5_ff(i, s, a, n, e[o + 12], 7, 1804603682), n = this.md5_ff(n, i, s, a, e[o + 13], 12, -40341101), 
                a = this.md5_ff(a, n, i, s, e[o + 14], 17, -1502002290), s = this.md5_ff(s, a, n, i, e[o + 15], 22, 1236535329), 
                i = this.md5_gg(i, s, a, n, e[o + 1], 5, -165796510), n = this.md5_gg(n, i, s, a, e[o + 6], 9, -1069501632), 
                a = this.md5_gg(a, n, i, s, e[o + 11], 14, 643717713), s = this.md5_gg(s, a, n, i, e[o + 0], 20, -373897302), 
                i = this.md5_gg(i, s, a, n, e[o + 5], 5, -701558691), n = this.md5_gg(n, i, s, a, e[o + 10], 9, 38016083), 
                a = this.md5_gg(a, n, i, s, e[o + 15], 14, -660478335), s = this.md5_gg(s, a, n, i, e[o + 4], 20, -405537848), 
                i = this.md5_gg(i, s, a, n, e[o + 9], 5, 568446438), n = this.md5_gg(n, i, s, a, e[o + 14], 9, -1019803690), 
                a = this.md5_gg(a, n, i, s, e[o + 3], 14, -187363961), s = this.md5_gg(s, a, n, i, e[o + 8], 20, 1163531501), 
                i = this.md5_gg(i, s, a, n, e[o + 13], 5, -1444681467), n = this.md5_gg(n, i, s, a, e[o + 2], 9, -51403784), 
                a = this.md5_gg(a, n, i, s, e[o + 7], 14, 1735328473), s = this.md5_gg(s, a, n, i, e[o + 12], 20, -1926607734), 
                i = this.md5_hh(i, s, a, n, e[o + 5], 4, -378558), n = this.md5_hh(n, i, s, a, e[o + 8], 11, -2022574463), 
                a = this.md5_hh(a, n, i, s, e[o + 11], 16, 1839030562), s = this.md5_hh(s, a, n, i, e[o + 14], 23, -35309556), 
                i = this.md5_hh(i, s, a, n, e[o + 1], 4, -1530992060), n = this.md5_hh(n, i, s, a, e[o + 4], 11, 1272893353), 
                a = this.md5_hh(a, n, i, s, e[o + 7], 16, -155497632), s = this.md5_hh(s, a, n, i, e[o + 10], 23, -1094730640), 
                i = this.md5_hh(i, s, a, n, e[o + 13], 4, 681279174), n = this.md5_hh(n, i, s, a, e[o + 0], 11, -358537222), 
                a = this.md5_hh(a, n, i, s, e[o + 3], 16, -722521979), s = this.md5_hh(s, a, n, i, e[o + 6], 23, 76029189), 
                i = this.md5_hh(i, s, a, n, e[o + 9], 4, -640364487), n = this.md5_hh(n, i, s, a, e[o + 12], 11, -421815835), 
                a = this.md5_hh(a, n, i, s, e[o + 15], 16, 530742520), s = this.md5_hh(s, a, n, i, e[o + 2], 23, -995338651), 
                i = this.md5_ii(i, s, a, n, e[o + 0], 6, -198630844), n = this.md5_ii(n, i, s, a, e[o + 7], 10, 1126891415), 
                a = this.md5_ii(a, n, i, s, e[o + 14], 15, -1416354905), s = this.md5_ii(s, a, n, i, e[o + 5], 21, -57434055), 
                i = this.md5_ii(i, s, a, n, e[o + 12], 6, 1700485571), n = this.md5_ii(n, i, s, a, e[o + 3], 10, -1894986606), 
                a = this.md5_ii(a, n, i, s, e[o + 10], 15, -1051523), s = this.md5_ii(s, a, n, i, e[o + 1], 21, -2054922799), 
                i = this.md5_ii(i, s, a, n, e[o + 8], 6, 1873313359), n = this.md5_ii(n, i, s, a, e[o + 15], 10, -30611744), 
                a = this.md5_ii(a, n, i, s, e[o + 6], 15, -1560198380), s = this.md5_ii(s, a, n, i, e[o + 13], 21, 1309151649), 
                i = this.md5_ii(i, s, a, n, e[o + 4], 6, -145523070), n = this.md5_ii(n, i, s, a, e[o + 11], 10, -1120210379), 
                a = this.md5_ii(a, n, i, s, e[o + 2], 15, 718787259), s = this.md5_ii(s, a, n, i, e[o + 9], 21, -343485551), 
                i = this.safe_add(i, r), s = this.safe_add(s, l), a = this.safe_add(a, h), n = this.safe_add(n, d);
            }
            return [ i, s, a, n ];
        }
        md5_cmn(e, t, i, s, a, n) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(s, n)), a), i);
        }
        md5_ff(e, t, i, s, a, n, o) {
            return this.md5_cmn(t & i | ~t & s, e, t, a, n, o);
        }
        md5_gg(e, t, i, s, a, n, o) {
            return this.md5_cmn(t & s | i & ~s, e, t, a, n, o);
        }
        md5_hh(e, t, i, s, a, n, o) {
            return this.md5_cmn(t ^ i ^ s, e, t, a, n, o);
        }
        md5_ii(e, t, i, s, a, n, o) {
            return this.md5_cmn(i ^ (t | ~s), e, t, a, n, o);
        }
        safe_add(e, t) {
            var i = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i;
        }
        bit_rol(e, t) {
            return e << t | e >>> 32 - t;
        }
    }
    class J {
        constructor() {}
    }
    J.preLoadArray = [ "Prefab/Bomb.lh", "Prefab/Burger.lh", "Prefab/Chick.lh", "Prefab/Clock.lh", "Prefab/Cup.lh", "Prefab/Egg.lh", "Prefab/Enemy.lh", "Prefab/Finish.lh", "Prefab/Headphones.lh", "Prefab/Micro.lh", "Prefab/Mouse.lh", "Prefab/Phone.lh", "Prefab/Pickle.lh", "Prefab/Pumpkin.lh", "Prefab/Soda.lh", "Prefab/Stereo.lh", "Prefab/Tomato.lh", "Prefab/Toster.lh", "Prefab/Vase.lh", "Prefab/Watermelon.lh", "Prefab/Youg.lh" ];
    class Y {
        static MD5(e) {
            return new q().hex_md5(e);
        }
    }
    class Q {
        constructor() {
            this.version = "1.0.1", this.mLaunch = null, this.mWeUser = {}, this.mPhone = {}, 
            this.mSDKVersion = "", this.iphoneX = !1, this.mCallBack = null, this.mHttpCall = null, 
            this.loadingView = null, this.mLoginType = 1, this.mShowLogo = !0, this.btnLogin = null, 
            this.zOrder = 0, this.mFrist = !0, this.mInit = !1, this.m_menuBtnHeight = 0, Q.uo = this, 
            this.mCallBack = new X();
        }
        IsXP() {
            return this.iphoneX;
        }
        wxVersion() {
            return this.mSDKVersion;
        }
        getUser() {
            return this.mWeUser;
        }
        getUserID() {
            return Number(this.mWeUser.uid);
        }
        phone() {
            return this.mPhone;
        }
        launch() {
            return this.mLaunch;
        }
        initWX(e = 1, t = !0, i = 0) {
            // this.mPhone = wx.getSystemInfoSync();
            // let s = wx.getMenuButtonBoundingClientRect();
            this.m_menuBtnHeight =  0;
            this.mSDKVersion = "1111"
            // this.mPhone.SDKVersion;
            this.zOrder = i, 
            this.mLaunch = n, this.mLoginType = e, this.mShowLogo = t, this.mCallBack.onBefore(), 
            Laya.timer.callLater(this, this.check), 
            Laya.loader.create("Scenes/Main.ls", Laya.Handler.create(this, this.startViewCom)), 
            this.loadPack(), Q.uo.showLoading();
        }
        startViewCom() {
            this.resCom1 = !0;
        }
        loadPack() {
            var e = this;
            Laya.loader.create(J.preLoadArray, Laya.Handler.create(e, () => {
                e.resCom2 = !0;
            }));
            // window.wx ? (wx.loadSubpackage({
            //     name: "stage1",
            //     success: function(t) {
            //         console.log(t), 
            //     },
            //     fail: function(e) {
            //         console.log(e);
            //     }
            // }), wx.loadSubpackage({
            //     name: "stage2",
            //     success: function(e) {
            //         console.log("stage2 ok");
            //     },
            //     fail: function(e) {
            //         console.log(e);
            //     }
            // })) : Laya.loader.create(J.preLoadArray, Laya.Handler.create(e, () => {}));
        }
        showLoading() {
            null == this.loadingView && (this.loadingView = new K(), Laya.stage.addChild(this.loadingView)), 
            Laya.timer.callLater(this.mCallBack, this.mCallBack.onShow);
        }
        clear() {
            null != this.loadingView && (this.loadingView.removeSelf(), this.loadingView.destroy()), 
            this.loadingView = null;
        }
        check() {
            Q.uo.login();
        }
        reLogin() {
            wx.removeStorageSync("user"), this.login();
        }
        login() {
            Q.uo.checkCode(e.code);

            // var e = !0, t = wx.getStorageSync("user");
            // if ("object" == typeof t) {
            //     var i = t.openid;
            //     "" != i && null != i || (e = !1), ("" == t.uid || null == t.uid || Number(t.uid) < 1e4) && (e = !1);
            // } else e = !1;
            // e ? (Q.uo.mWeUser = t, wx.login({
            //     pkgName: "",
            //     success: function(e) {
            //         Q.uo.checkCode(e.code);
            //     },
            //     fail: function() {
            //         console.log("login fail,try again"), Laya.timer.once(1e3, Q.uo, Q.uo.login);
            //     },
            //     complete: function() {}
            // })) : wx.login({
            //     pkgName: "",
            //     success: function(e) {
            //         Q.uo.checkCode(e.code);
            //     },
            //     fail: function() {
            //         console.log("login fail,try again"), Laya.timer.once(1e3, Q.uo, Q.uo.login);
            //     },
            //     complete: function() {}
            // });
        }
        checkCode(e) {
            var t = [];
            t.code = e, t.ver = this.mCallBack.version(), 
            Q.uo.mWeUser = {}
            Q.uo.mWeUser.uid == 123456789;
            Q.uo.getUserInfo();
            // null != Q.uo.mWeUser && Q.uo.mWeUser.uid == e.uid || (Q.uo.mWeUser = {}, 
            // Q.uo.mWeUser.openid = e.openid, Q.uo.mWeUser.uid = Number(e.uid)), 1 == Q.uo.mCallBack.onLogin(Q.uo.mWeUser, e) ? Q.uo.getUserInfo() : Q.uo.init()
        }
        getUserInfo() {
            Q.uo.onEnter(null, this.mLaunch), 
            void Q.uo.init();
        }
        wxAuthorize() {
            wx.authorize({
                scope: "scope.userInfo",
                success: function(e) {
                    Q.uo.getUserInfo();
                },
                fail: function() {
                    Q.uo.openSeting();
                },
                complete: function() {}
            });
        }
        openSeting() {
            let e = this;
            wx.showModal({
                title: "提示",
                content: "游戏需要您授权头像和用户名信息",
                showCancel: !1,
                cancelText: "取消",
                cancelColor: "",
                confirmText: "确认",
                confirmColor: "",
                success: function(t) {
                    wx.openSetting({
                        success: function(e) {
                            0 == e.authSetting["scope.userInfo"] ? Q.uo.openSeting() : Q.uo.getUserInfo();
                        },
                        fail: function() {
                            e.openSeting();
                        },
                        complete: function() {}
                    });
                },
                fail: function() {},
                complete: function() {}
            });
        }
        initUser(e) {
            var t = 0, i = e.userInfo;
            console.log(i.avatarUrl, Q.uo.mWeUser.avatarUrl, Q.uo.mWeUser.nickName, i.nickName), 
            Q.uo.mWeUser.nickName != i.nickName && (Q.uo.mWeUser.nickName = i.nickName, t = 1);
            var s = i.avatarUrl;
            "0" == s.charAt(s.length - 1) && "/" == s.charAt(s.length - 2) && (s = s.substr(0, s.length - 2), 
            s += "/132"), Q.uo.mWeUser.avatarUrl != s && (Q.uo.mWeUser.avatarUrl = s, t = 1), 
            Q.uo.mWeUser.gender = i.gender, Q.uo.mWeUser.province = i.province, Q.uo.mWeUser.city = i.city, 
            Q.uo.mWeUser.country = i.country, 1 == t && Q.uo.updateUserInfo(), wx.setStorageSync("user", Q.uo.mWeUser), 
            Q.uo.onEnter(null, this.mLaunch), Q.uo.init();
        }
        onEnter(e, t) {
            this.mCallBack.onEnterGame(this.mFrist, e, t), this.mFrist = !1;
        }
        init() {
            this.mInit = true;
        }
        wxShow(e) {
            Q.uo.m_backTime = new Date().valueOf() - Q.uo.m_hideTime, null != Q.uo.m_shareCall && (Q.uo.m_shareCall.run(), 
            Q.uo.m_shareCall = null), console.log("默认隐藏"), console.log("达到"), console.log("进入:" + new Date().getTime()), 
            console.log(e);
            var t = {};
            if (t.query = e.query, t.scene = e.scene, t.shareTicket = e.shareTicket, t.isSticky = e.isSticky, 
            null != t.query.scene) for (var i = decodeURIComponent(t.query.scene).split("&"), s = 0; s < i.length; s++) {
                var a = i[s].split("=");
                2 == a.length && (t.query[a[0]] = a[1]);
            }
            if (1 == Q.uo.mFrist) return Q.uo.mLaunch = t, void Q.uo.getUserInfo();
            var n = Q.uo.mLaunch;
            Q.uo.mLaunch = t, Q.uo.onEnter(n, t);
        }
        wxHide(e) {
            Q.uo.mCallBack.onHideGame(), Q.uo.m_hideTime = new Date().valueOf(), console.log("退出:" + new Date().getTime()), 
            console.log(e);
        }
        updateUserInfo() {
            let e = {};
            e.uid = Q.uo.mWeUser.uid, e.name = Base64.encodeURI(this.mWeUser.nickName), e.avatar = Base64.encodeURI(this.mWeUser.avatarUrl), 
            e.gender = Q.uo.mWeUser.gender, null != Q.uo.mWeUser.province && "" != Q.uo.mWeUser.province && (e.province = Q.uo.mWeUser.province), 
            null != Q.uo.mWeUser.city && "" != Q.uo.mWeUser.city && (e.city = Q.uo.mWeUser.city), 
            this.server(X.mIF.userinfo, e, function(e) {
                console.log("updateUserInfo..ok");
            });
        }
        server(t, i, s, a = null) {
            this.mHttpCall = new Laya.HttpRequest(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(t) {
                let i = null;
                i = "string" == typeof t ? e.getJSON(t) : e.getJSON(Q.uo.mHttpCall.data), null != s && s(i), 
                Q.uo.mHttpCall = null;
            }), this.mHttpCall.once(Laya.Event.ERROR, this, function(e) {
                null != a ? a() : Q.uo.onHttpRequestError(e);
            });
            let n = e.getServer() + t.url + e.getUrlParams(i, t.key);
            this.mHttpCall.send(n, null, "get", "text");
        }
        onHttpRequestError(e) {
            wx.hideLoading();
        }
    }
    Q.uo = null;
    class $ {
    }
    return new $(), $;
}();