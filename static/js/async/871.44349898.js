"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["871"], {
        75013: function(e, t, n) {
            n.r(t), n.d(t, {
                default: () => tC
            });
            var l, i = n("85893"),
                o = n("67294"),
                a = n("67026"),
                s = n("92198"),
                r = n("89250"),
                c = n("30453"),
                d = n("37979"),
                h = n("2502"),
                u = n("89471");
            let m = function() {
                let e = (0, r.TH)(),
                    t = (0, r.s0)();
                return {
                    deleteQueryString: function(n) {
                        let l = new URLSearchParams(e.search);
                        l.delete(n), t({
                            search: l.toString()
                        }, {
                            replace: !0
                        })
                    },
                    queryString: function() {
                        let t = new URLSearchParams(e.search),
                            n = {};
                        return t.forEach((e, t) => {
                            n[t] = e
                        }), n
                    }(),
                    setQueryString: function(n) {
                        ! function(n) {
                            let l = new URLSearchParams(e.search);
                            Object.entries(n).forEach(e => {
                                let [t, n] = e;
                                void 0 === n ? l.delete(t) : l.set(t, n)
                            }), t({
                                search: l.toString()
                            }, {
                                replace: !0
                            })
                        }(n)
                    }
                }
            };

            function g(e) {
                let {
                    deleteQueryString: t,
                    queryString: n,
                    setQueryString: l
                } = m(), {
                    isDesktop: i
                } = (0, h.F)(), [a, s] = (0, u.Sx)(), r = () => {
                    if (!n.modal && s.setAll([]), (null == e ? void 0 : e.shouldReinitializeModals) !== void 0 && !1 === e.shouldReinitializeModals) t("modal");
                    else {
                        let e = n.modal;
                        if (e) {
                            let t = e.split(","),
                                n = t.slice(-1)[0];
                            s.setAll([]), t.forEach(e => {
                                s.set(e, !i)
                            }), s.set(n, !0)
                        }
                    }
                };
                return (0, o.useEffect)(() => {
                    r()
                }, []), (0, o.useEffect)(() => {
                    !(null == n ? void 0 : n.modal) && s.reset()
                }, [null == n ? void 0 : n.modal]), (0, u.OR)("popstate", () => {
                    r()
                }), {
                    hideModal: e => {
                        let i = n.modal;
                        if (i) {
                            let n = i.split(",");
                            if (null == e ? void 0 : e.shouldHideAllModals) a.forEach((e, n) => {
                                s.set(n, !1), t("modal")
                            });
                            else if (null == e ? void 0 : e.shouldHidePreviousModals) {
                                if (n.length > 1) {
                                    let e = n.shift();
                                    n.forEach(e => {
                                        s.set(e, !1)
                                    }), n = [e ? ? ""], l({
                                        modal: e
                                    })
                                } else 1 === n.length ? l({
                                    modal: n[0]
                                }) : t("modal")
                            } else {
                                let e = n.pop(),
                                    i = n.slice(-1)[0];
                                i ? (s.set(e, !1), s.set(i, !0)) : s.set(e, !1), 0 === n.length ? t("modal") : l({
                                    modal: n.join(",")
                                })
                            }
                        }
                    },
                    isModalOpenFor: e => a.get(e) || !1,
                    showModal: (e, t) => {
                        let o = n.modal;
                        if (o) {
                            let n = o.split(","),
                                a = n.slice(-1)[0];
                            if (a === e) return;
                            (null == t ? void 0 : t.shouldStackModals) === !1 ? s.set(a, !1) : s.set(a, (null == t ? void 0 : t.shouldStackModals) || !i), s.set(e, !0), n.push(e), l({
                                modal: (null == t ? void 0 : t.shouldClearPreviousModals) ? e : n.join(",")
                            })
                        } else s.set(e, !0), l({
                            modal: e
                        })
                    }
                }
            }
            let p = () => {
                let e = localStorage.getItem("active_tab"),
                    t = ["dashboard", "bot_builder", "chart", "tutorial"],
                    n = t[Number(e)],
                    l = window.location.href.split("#")[0];
                return `${l}#${n}`
            };
            var x = n("32305"),
                v = n("96223"),
                b = n("3693"),
                j = n("98146"),
                _ = n("64410"),
                f = n("918"),
                w = n("50051"),
                y = n("16496"),
                C = n("59001"),
                k = n("57218"),
                N = n("12811"),
                I = n("28505"),
                Z = n("73971"),
                S = n("99243"),
                L = n("63066"),
                z = n("96396"),
                M = n("14249"),
                E = n("45322"),
                T = n("34273"),
                F = n("473");
            let A = [{
                code: "EN",
                displayName: "English",
                icon: (0, i.jsx)(x.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(x.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(x.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "AR",
                displayName: "العربية",
                icon: (0, i.jsx)(v.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(v.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(v.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "BN",
                displayName: "বাংলা",
                icon: (0, i.jsx)(b.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(b.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(b.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "DE",
                displayName: "Deutsch",
                icon: (0, i.jsx)(j.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(j.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(j.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ES",
                displayName: "Espa\xf1ol",
                icon: (0, i.jsx)(_.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(_.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(_.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "FR",
                displayName: "Fran\xe7ais",
                icon: (0, i.jsx)(f.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(f.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(f.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "IT",
                displayName: "Italiano",
                icon: (0, i.jsx)(w.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(w.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(w.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SW",
                displayName: "Kiswahili",
                icon: (0, i.jsx)(y.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(y.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(y.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KM",
                displayName: "ខ្មែរ",
                icon: (0, i.jsx)(C.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(C.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(C.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KO",
                displayName: "한국어",
                icon: (0, i.jsx)(k.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(k.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(k.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PL",
                displayName: "Polish",
                icon: (0, i.jsx)(N.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(N.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(N.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PT",
                displayName: "Portugu\xeas",
                icon: (0, i.jsx)(I.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(I.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(I.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "RU",
                displayName: "Русский",
                icon: (0, i.jsx)(Z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(Z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(Z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SI",
                displayName: "සිංහල",
                icon: (0, i.jsx)(S.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(S.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(S.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TH",
                displayName: "ไทย",
                icon: (0, i.jsx)(L.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(L.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(L.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TR",
                displayName: "T\xfcrk\xe7e",
                icon: (0, i.jsx)(z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "UZ",
                displayName: "O'zbek",
                icon: (0, i.jsx)(M.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(M.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(M.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "VI",
                displayName: "Tiếng Việt",
                icon: (0, i.jsx)(E.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(E.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(E.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_CN",
                displayName: "简体中文",
                icon: (0, i.jsx)(T.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(T.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(T.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_TW",
                displayName: "繁體中文",
                icon: (0, i.jsx)(F.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, i.jsx)(F.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, i.jsx)(F.Z, {
                    height: 14.67,
                    width: 22
                })
            }];
            var R = n("48059"),
                D = n("44412"),
                O = n("96877"),
                P = n("83257"),
                V = n("53261"),
                B = n("21456"),
                U = n("64915");
            let H = (0, O.Pi)(() => {
                let {
                    is_dark_mode_on: e,
                    toggleTheme: t
                } = (0, P.Z)(), {
                    localize: n
                } = (0, R.T_)();
                return (0, i.jsx)(U.u, {
                    as: "button",
                    className: "app-footer__icon",
                    tooltipContent: n("Change theme"),
                    onClick: t,
                    children: e ? (0, i.jsx)(B.Z, {
                        iconSize: "xs"
                    }) : (0, i.jsx)(V.Z, {
                        iconSize: "xs"
                    })
                })
            });
            var $ = n("79655"),
                q = n("66175"),
                W = n("45452"),
                X = n("12838");
            let G = () => {
                    let e = X.fV.getValue(X.sE.configServerURL);
                    return e ? (0, i.jsxs)(W.Z, {
                        className: "app-footer__endpoint",
                        color: "red",
                        size: "s",
                        children: ["The server", " ", (0, i.jsx)($.rU, {
                            className: "app-footer__endpoint-text",
                            to: q.xOw.endpoint,
                            children: "endpoint"
                        }), " ", `is: ${e}`]
                    }) : null
                },
                J = {
                    exit: ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                    request: ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
                    screenChange: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                    screenElement: ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"]
                },
                K = () => {
                    let [e, t] = (0, o.useState)(!1), {
                        exit: n,
                        request: l,
                        screenChange: i,
                        screenElement: a
                    } = J, s = (0, o.useCallback)(() => t(a.some(e => document[e])), [a]);
                    return (0, o.useEffect)(() => (i.forEach(e => {
                        document.addEventListener(e, s, !1)
                    }), () => {
                        i.forEach(e => {
                            document.removeEventListener(e, s, !1)
                        })
                    }), [s, i]), {
                        toggleFullScreenMode: i => {
                            null == i || i.stopPropagation();
                            let o = n.find(e => document[e]),
                                a = l.find(e => document.documentElement[e]);
                            e && o ? document[o]() : a ? document.documentElement[a]() : t(!1)
                        }
                    }
                };
            var Y = n("69914");
            let Q = () => {
                    let {
                        toggleFullScreenMode: e
                    } = K(), {
                        localize: t
                    } = (0, R.T_)();
                    return (0, i.jsx)(U.u, {
                        as: "button",
                        className: "app-footer__icon",
                        onClick: e,
                        tooltipContent: t("Full screen"),
                        children: (0, i.jsx)(Y.Z, {
                            iconSize: "xs"
                        })
                    })
                },
                ee = e => {
                    let {
                        openLanguageSettingModal: t
                    } = e, {
                        currentLang: n,
                        localize: l
                    } = (0, R.T_)(), a = (0, o.useMemo)(() => {
                        var e;
                        return null === (e = A.find(e => {
                            let {
                                code: t
                            } = e;
                            return t == n
                        })) || void 0 === e ? void 0 : e.placeholderIcon
                    }, [n]);
                    return (0, i.jsxs)(U.u, {
                        as: "button",
                        className: "app-footer__language",
                        onClick: t,
                        tooltipContent: l("Language"),
                        children: [a, (0, i.jsx)(W.Z, {
                            size: "xs",
                            weight: "bold",
                            children: n
                        })]
                    })
                },
                et = () => "undefined" == typeof navigator || "boolean" != typeof navigator.onLine || navigator.onLine,
                en = () => {
                    let [e, t] = (0, o.useState)(et()), n = () => t(!0), l = () => t(!1);
                    return (0, o.useEffect)(() => (window.addEventListener("online", n), window.addEventListener("offline", l), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", l)
                    }), []), e
                },
                el = () => {
                    let [e, t] = (0, o.useState)("online"), n = en();
                    return (0, o.useEffect)(() => {
                        n ? t("online") : t("offline")
                    }, [n]), e
                },
                ei = () => ({
                    blinking: {
                        className: "app-footer__network-status-online app-footer__network-status-blinking",
                        tooltip: (0, R.NC)("Connecting to server")
                    },
                    offline: {
                        className: "app-footer__network-status-offline",
                        tooltip: "Offline"
                    },
                    online: {
                        className: "app-footer__network-status-online",
                        tooltip: "Online"
                    }
                }),
                eo = () => {
                    let e = el(),
                        {
                            className: t,
                            tooltip: n
                        } = (0, o.useMemo)(() => ei()[e], [e]);
                    return (0, i.jsx)(U.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_network_status",
                        tooltipContent: (0, R.NC)("Network status: {{status}}", {
                            status: n
                        }),
                        children: (0, i.jsx)("div", {
                            className: (0, a.Z)("app-footer__network-status", t),
                            "data-testid": "dt_circle"
                        })
                    })
                };
            var ea = n("30381"),
                es = n.n(ea),
                er = n("83274"),
                ec = n("27179"),
                ed = n("83606");
            let eh = (0, O.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, h.F)(), {
                        common: t
                    } = (0, er.oR)() ? ? {
                        common: {
                            server_time: es()()
                        }
                    };
                    return (0, i.jsx)(U.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_server_time",
                        tooltipContent: t.server_time.format(ec.kT),
                        children: (0, i.jsx)(ed.x, {
                            size: e ? "xs" : "sm",
                            children: t.server_time.format(ec.Yp)
                        })
                    })
                }),
                eu = () => {
                    let {
                        currentLang: e = "EN",
                        localize: t,
                        switchLanguage: n
                    } = (0, R.T_)(), {
                        hideModal: l,
                        isModalOpenFor: o,
                        showModal: a
                    } = g();
                    return (0, i.jsxs)("footer", {
                        className: "app-footer",
                        children: [(0, i.jsx)(Q, {}), (0, i.jsx)(ee, {
                            openLanguageSettingModal: () => a("DesktopLanguagesModal")
                        }), (0, i.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, i.jsx)(H, {}), (0, i.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, i.jsx)(eh, {}), (0, i.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, i.jsx)(eo, {}), (0, i.jsx)(G, {}), o("DesktopLanguagesModal") && (0, i.jsx)(D.u, {
                            headerTitle: t("Select Language"),
                            isModalOpen: !0,
                            languages: A,
                            onClose: l,
                            onLanguageSwitch: e => {
                                n(e), l(), window.location.replace(p()), window.location.reload()
                            },
                            selectedLanguage: e
                        })]
                    })
                };
            var em = n("8015");
            let eg = {
                    aud: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAudIcon
                    }))),
                    bch: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBchIcon
                    }))),
                    btc: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBtcIcon
                    }))),
                    busd: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBusdIcon
                    }))),
                    dai: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDaiIcon
                    }))),
                    eth: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEthIcon
                    }))),
                    eur: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    "eur-check": (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    eurs: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEursIcon
                    }))),
                    eusdt: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    gbp: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyGbpIcon
                    }))),
                    idk: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIdkIcon
                    }))),
                    ltc: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLtcIcon
                    }))),
                    pax: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPaxIcon
                    }))),
                    tusd: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTusdIcon
                    }))),
                    tusdt: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    unknown: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPlaceholderIcon
                    }))),
                    usd: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdIcon
                    }))),
                    usdc: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdcIcon
                    }))),
                    usdk: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdkIcon
                    }))),
                    ust: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    virtual: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDemoIcon
                    }))),
                    xrp: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXrpIcon
                    }))),
                    algo: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAlgoIcon
                    }))),
                    avax: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAvaxIcon
                    }))),
                    bat: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBatIcon
                    }))),
                    bnb: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBnbIcon
                    }))),
                    dash: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDashIcon
                    }))),
                    doge: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDogeIcon
                    }))),
                    dot: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDotIcon
                    }))),
                    eos: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEosIcon
                    }))),
                    etc: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEtcIcon
                    }))),
                    fil: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyFilIcon
                    }))),
                    iota: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIotaIcon
                    }))),
                    link: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLinkIcon
                    }))),
                    matic: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMaticIcon
                    }))),
                    mkr: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMkrIcon
                    }))),
                    mcd: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMultiCollateralDaiIcon
                    }))),
                    neo: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNeoIcon
                    }))),
                    none: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNoneIcon
                    }))),
                    omg: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyOmgIcon
                    }))),
                    p2p: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyP2PIcon
                    }))),
                    scd: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySingleCollateralDaiIcon
                    }))),
                    sol: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySolIcon
                    }))),
                    terra: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTerraIcon
                    }))),
                    trx: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTrxIcon
                    }))),
                    uni: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUniIcon
                    }))),
                    xlm: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXlmIcon
                    }))),
                    xmr: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXmrIcon
                    }))),
                    xtz: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXtzIcon
                    }))),
                    zec: (0, o.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyZecIcon
                    })))
                },
                ep = e => {
                    let {
                        currency: t,
                        isVirtual: n
                    } = e, l = n ? eg.virtual : eg[null == t ? void 0 : t.toLowerCase()] || eg.unknown;
                    return (0, i.jsx)(o.Suspense, {
                        fallback: null,
                        children: (0, i.jsx)(l, {
                            iconSize: "sm"
                        })
                    })
                };
            var ex = n("79649");
            let ev = e => {
                var t;
                let {
                    allBalanceData: n
                } = e, {
                    accountList: l,
                    activeLoginid: a
                } = (0, ex.T)(), s = (0, o.useMemo)(() => null == l ? void 0 : l.find(e => e.loginid === a), [a, l]), r = null == n ? void 0 : null === (t = n.accounts) || void 0 === t ? void 0 : t[(null == s ? void 0 : s.loginid) ? ? ""];
                return {
                    data: (0, o.useMemo)(() => {
                        var e, t;
                        return s ? { ...s,
                            balance: (0, q.oC5)(null == r ? void 0 : null === (e = r.balance) || void 0 === e ? void 0 : e.toFixed((0, q.i4S)(r.currency))) ? ? "0",
                            currencyLabel: (null == s ? void 0 : s.is_virtual) ? (0, R.NC)("Demo") : null == s ? void 0 : s.currency,
                            icon: (0, i.jsx)(ep, {
                                currency: null == s ? void 0 : null === (t = s.currency) || void 0 === t ? void 0 : t.toLowerCase(),
                                isVirtual: !!(null == s ? void 0 : s.is_virtual)
                            }),
                            isVirtual: !!(null == s ? void 0 : s.is_virtual),
                            isActive: (null == s ? void 0 : s.loginid) === a
                        } : void 0
                    }, [s, a, n])
                }
            };
            var eb = n("77898"),
                ej = n("16857"),
                e_ = n("32767"),
                ef = n("99466"),
                ew = n("42913"),
                ey = n("54458"),
                eC = n("62269"),
                ek = n("28607"),
                eN = n("56594"),
                eI = n("23638"),
                eZ = n("83253"),
                eS = n.n(eZ);
            let eL = [{
                    id: "binarytool",
                    name: "Binarytool",
                    logo: "/loader.jpg",
                    minBalance: 20,
                    token: "475l5cnigYxGI1I",
                    isVerified: !0
                }, {
                    id: "daniel-andeche",
                    name: "Daniel Andeche",
                    logo: "/daniel_logo.svg",
                    minBalance: 100,
                    token: "6kWudRwICFwwTMa",
                    isVerified: !1
                }],
                ez = e => {
                    let {
                        api: t,
                        balance: n,
                        currency: l,
                        displayCode: a,
                        isDarkMode: s = !1
                    } = e, [r, c] = (0, o.useState)(!1), [d, h] = (0, o.useState)(!1), [u, m] = (0, o.useState)(null), [g, p] = (0, o.useState)(null), [x, v] = (0, o.useState)(""), [b, j] = (0, o.useState)(""), _ = null !== g;
                    (0, o.useEffect)(() => {
                        let e = localStorage.getItem("activeProviderId");
                        e && p(e)
                    }, []);
                    let f = e => new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: l || "USD",
                        minimumFractionDigits: 2
                    }).format(e);
                    (0, o.useEffect)(() => {
                        if (!t) return;
                        let e = t.onMessage().subscribe(e => {
                            let {
                                data: t
                            } = e;
                            if ((null == t ? void 0 : t.msg_type) === "copy_start" && 1 === t.copy_start) {
                                let e = (null == u ? void 0 : u.id) ? ? g;
                                e && (p(e), localStorage.setItem("activeProviderId", e))
                            }(null == t ? void 0 : t.msg_type) === "copy_stop" && 1 === t.copy_stop && (p(null), localStorage.removeItem("activeProviderId"))
                        });
                        return () => {
                            var t;
                            return null == e ? void 0 : null === (t = e.unsubscribe) || void 0 === t ? void 0 : t.call(e)
                        }
                    }, [t, u, g]);
                    let w = e => {
                        _ && g === e.id ? t.send({
                            copy_stop: e.token
                        }) : !_ && (m(e), h(!0))
                    };
                    return (0, i.jsxs)("div", {
                        className: `ct-program ${_?"running":""} ${s?"dark":""}`,
                        children: [(0, i.jsx)("div", {
                            className: "mobile-menu__social-icon",
                            onClick: () => c(!r),
                            children: (0, i.jsx)(eI.C3L, {
                                size: 20,
                                style: {
                                    color: "#00c4ff"
                                }
                            })
                        }), (0, i.jsxs)(eS(), {
                            isOpen: r,
                            onRequestClose: () => c(!1),
                            ariaHideApp: !1,
                            style: {
                                overlay: {
                                    backgroundColor: "rgba(0,0,0,0.55)",
                                    zIndex: 2e3
                                },
                                content: {
                                    inset: "10vh 0",
                                    maxWidth: 450,
                                    margin: "0 auto",
                                    borderRadius: 12,
                                    padding: 0,
                                    overflow: "hidden"
                                }
                            },
                            children: [(0, i.jsxs)("header", {
                                className: "cts-header",
                                children: [(0, i.jsx)("h2", {
                                    children: "Copy‑Trading Program"
                                }), (0, i.jsx)("span", {
                                    className: "cts-close",
                                    onClick: () => c(!1),
                                    children: "\xd7"
                                })]
                            }), (0, i.jsx)("section", {
                                className: "cts-body",
                                children: eL.map(e => (0, i.jsxs)("div", {
                                    className: "cts-provider-card",
                                    children: [(0, i.jsx)("img", {
                                        src: e.logo,
                                        alt: e.name,
                                        className: "provider-logo"
                                    }), (0, i.jsxs)("div", {
                                        className: "info",
                                        children: [(0, i.jsxs)("div", {
                                            className: "provider-name",
                                            children: [(0, i.jsx)("strong", {
                                                children: e.name
                                            }), e.isVerified && (0, i.jsx)("span", {
                                                className: "verified-badge",
                                                title: "Verified Provider",
                                                children: "✓"
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "meta",
                                            children: (0, i.jsxs)("span", {
                                                children: ["Min Balance: ", (0, i.jsxs)("b", {
                                                    children: ["$", e.minBalance]
                                                })]
                                            })
                                        })]
                                    }), (0, i.jsx)("button", {
                                        className: `copy-btn ${_&&g===e.id?"active":""}`,
                                        disabled: n < e.minBalance || _ && g !== e.id,
                                        onClick: () => w(e),
                                        children: _ && g === e.id ? "Stop Copying" : "Copy Trades"
                                    }), n < e.minBalance && (0, i.jsxs)("div", {
                                        className: "cts-alert",
                                        children: ["Your account balance (", f(n), " ", a, ") is lower than the required minimum (", f(e.minBalance), ")."]
                                    })]
                                }, e.id))
                            })]
                        }), (0, i.jsxs)(eS(), {
                            isOpen: d,
                            onRequestClose: () => h(!1),
                            ariaHideApp: !1,
                            style: {
                                overlay: {
                                    backgroundColor: "rgba(0,0,0,0.55)",
                                    zIndex: 2100
                                },
                                content: {
                                    inset: "25vh auto",
                                    width: 400,
                                    margin: "0 auto",
                                    borderRadius: 12,
                                    padding: 20
                                }
                            },
                            children: [(0, i.jsx)("h3", {
                                children: "Set Trade Stake Limits"
                            }), (0, i.jsxs)("div", {
                                className: "form-group",
                                children: [(0, i.jsx)("label", {
                                    children: "Min Trade Stake"
                                }), (0, i.jsx)("input", {
                                    type: "number",
                                    value: x,
                                    onChange: e => v("" === e.target.value ? "" : Number(e.target.value)),
                                    placeholder: "e.g. 1",
                                    min: "0"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "form-group",
                                children: [(0, i.jsx)("label", {
                                    children: "Max Trade Stake"
                                }), (0, i.jsx)("input", {
                                    type: "number",
                                    value: b,
                                    onChange: e => j("" === e.target.value ? "" : Number(e.target.value)),
                                    placeholder: "e.g. 50",
                                    min: "0"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "modal-actions",
                                children: [(0, i.jsx)("button", {
                                    onClick: () => {
                                        if (!u) return;
                                        let {
                                            token: e,
                                            id: n
                                        } = u, l = {
                                            copy_start: e
                                        };
                                        "" !== x && (l.min_trade_stake = x), "" !== b && (l.max_trade_stake = b), t.send(l), p(n), h(!1)
                                    },
                                    disabled: !u || n < ((null == u ? void 0 : u.minBalance) ? ? 0),
                                    children: "Confirm & Start"
                                }), (0, i.jsx)("button", {
                                    onClick: () => h(!1),
                                    children: "Cancel"
                                })]
                            })]
                        })]
                    })
                };
            var eM = n("88199");
            let eE = {
                    "gamer.binarytool.site": {
                        logo: "/gamer.jpeg",
                        name: "Gamer",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/LFzX7IJxVoN5Sh5gm7HwcD",
                            telegram: "https://t.me/gamerstradingtools",
                            tiktok: "https://www.tiktok.com/@gamerbrayoh"
                        }
                    },
                    "random.binarytool.site": {
                        logo: "/random.jpeg",
                        name: "MR Random",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/LWJ7RqrNcU7AaMFAs8g76S",
                            telegram: "https://t.me/randomhubtools",
                            tiktok: "tiktok.com/@random.binarytool"
                        }
                    },
                    "marketsniper.site": {
                        name: "Market Sniper",
                        social: {}
                    },
                    "alphatraders.vercel.app": {
                        name: "Alpha Traders",
                        social: {}
                    },
                    default: {
                        logo: "/binary_logo.svg",
                        name: "BinaryTools",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VaDbybILo4heuWEGso3B",
                            telegram: "https://t.me/binarytools",
                            youtube: "https://www.youtube.com/@binarytooltutorial",
                            instagram: "https://www.instagram.com/binarytoolsite/",
                            tiktok: "https://www.tiktok.com/@binarytools",
                            facebook: "https://www.facebook.com/profile.php?id=61559570918487"
                        }
                    }
                },
                eT = () => {
                    var e, t, n;
                    let [l, a] = (0, o.useState)(!1), {
                        logo: s,
                        name: r,
                        social: c
                    } = eE[window.location.hostname] || eE.default, d = (0, er.oR)(), h = null == d ? void 0 : d.client, u = h ? Object.values(h.accounts || {}).find(e => !e.is_virtual) : void 0, m = u ? (null === (n = h.all_accounts_balance) || void 0 === n ? void 0 : null === (t = n.accounts) || void 0 === t ? void 0 : null === (e = t[u.loginid]) || void 0 === e ? void 0 : e.balance) ? ? 0 : 0, g = (null == u ? void 0 : u.currency) ? ? "USD", p = (0, q.O$T)(g);
                    return (0, i.jsxs)("div", {
                        className: "d-apollo-logo",
                        children: [(0, i.jsxs)("div", {
                            className: "logo-holder",
                            children: [s && (0, i.jsx)("img", {
                                src: s,
                                alt: "custom Logo",
                                className: "d-apollo-logo__image"
                            }), (0, i.jsx)(W.Z, {
                                color: "less-prominent",
                                lineHeight: "xs",
                                size: "xs",
                                weight: "bold",
                                align: "center",
                                className: "dc-contract-card-message",
                                children: r
                            })]
                        }), d && eM.api_base.api && (0, i.jsx)(ez, {
                            api: eM.api_base.api,
                            balance: m,
                            currency: g,
                            displayCode: p,
                            isDarkMode: !1
                        }), (0, i.jsx)("button", {
                            className: "d-apollo-logo__icon",
                            onClick: () => a(!0),
                            children: (0, i.jsx)(e_.Kz1, {})
                        }), l && (0, i.jsx)("div", {
                            className: "modal-overlay",
                            onClick: () => a(!1),
                            children: (0, i.jsxs)("div", {
                                className: "modal-content",
                                onClick: e => e.stopPropagation(),
                                children: [(0, i.jsx)("h3", {
                                    children: "Follow Us"
                                }), (0, i.jsxs)("ul", {
                                    children: [c.whatsapp && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: c.whatsapp,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(ef.Z, {}), " WhatsApp Group"]
                                        })
                                    }), [2, 3, 4, 5, 6].map(e => {
                                        let t = c[`whatsapp${e}`];
                                        return t ? (0, i.jsx)("li", {
                                            children: (0, i.jsxs)("a", {
                                                href: t,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [(0, i.jsx)(ef.Z, {}), " WhatsApp Group ", e]
                                            })
                                        }, `whatsapp${e}`) : null
                                    }), c.telegram && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: c.telegram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(ew.Z, {}), " Telegram"]
                                        })
                                    }), c.youtube && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: c.youtube,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(ey.Z, {}), " YouTube"]
                                        })
                                    }), c.instagram && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: c.instagram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(eC.Z, {}), " Instagram"]
                                        })
                                    }), c.tiktok && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: c.tiktok,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(ek.Z, {}), " TikTok"]
                                        })
                                    }), c.facebook && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: c.facebook,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(eN.Z, {}), " Facebook"]
                                        })
                                    })]
                                }), (0, i.jsx)("button", {
                                    onClick: () => a(!1),
                                    children: "Close"
                                })]
                            })
                        })]
                    })
                },
                eF = () => {
                    let {
                        isDesktop: e
                    } = (0, h.F)();
                    return e ? (0, i.jsx)(eT, {}) : null
                };
            var eA = n("24561");
            let eR = e => {
                    let {
                        isMobile: t
                    } = e;
                    return (0, i.jsx)(i.Fragment, {
                        children: t ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "13"
                            }), (0, i.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "35",
                                y: "19"
                            }), (0, i.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "120",
                                y: "6"
                            })]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "12"
                            }), (0, i.jsx)("circle", {
                                cx: "58",
                                cy: "22",
                                r: "12"
                            }), (0, i.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "150",
                                y: "20"
                            }), (0, i.jsx)("circle", {
                                cx: "118",
                                cy: "24",
                                r: "13"
                            }), (0, i.jsx)("rect", {
                                height: "30",
                                rx: "4",
                                ry: "4",
                                width: "1",
                                x: "87",
                                y: "8"
                            }), (0, i.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "250",
                                y: "8"
                            })]
                        })
                    })
                },
                eD = e => {
                    let {
                        isMobile: t,
                        speed: n
                    } = e;
                    return (0, i.jsx)(eA.ZP, {
                        "data-testid": "dt_accounts_info_loader",
                        height: t ? 42 : 46,
                        speed: n,
                        width: t ? 216 : 350,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: (0, i.jsx)(eR, {
                            isMobile: t
                        })
                    })
                };
            var eO = n("30394"),
                eP = n("42457"),
                eV = n("33281"),
                eB = n("47342"),
                eU = n("63387"),
                eH = n.n(eU);
            let e$ = e => {
                let {
                    width: t,
                    height: n
                } = e;
                return (0, i.jsx)("div", {
                    className: "skeleton",
                    style: {
                        width: t,
                        height: n
                    }
                })
            };
            var eq = n("44884"),
                eW = n("37410"),
                eX = n("37528");
            let eG = {
                    currency: " ",
                    currencyLabel: "Options & Multipliers",
                    is_virtual: 1,
                    loginid: "",
                    is_disabled: !1,
                    balance: "",
                    icon: (0, i.jsx)(eW.Z, {
                        width: 24,
                        height: 24
                    }),
                    isActive: !1,
                    isVirtual: !0
                },
                eJ = e => Number(e.replace(/,/g, "")),
                eK = () => (0, i.jsx)(eX.i, {
                    color: "var(--general-section-2)",
                    height: "4px"
                }),
                eY = e => {
                    let {
                        oAuthLogout: t,
                        loginid: n,
                        is_logging_out: l
                    } = e, o = (null == n ? void 0 : n.includes("CR")) || (null == n ? void 0 : n.includes("MF"));
                    return (0, i.jsxs)("div", {
                        className: "",
                        children: [(0, i.jsx)(eB.T.TradersHubLink, {
                            href: q.xOw.traders_hub,
                            children: (0, R.NC)("Looking for CFD accounts? Go to Trader's Hub")
                        }), (0, i.jsx)(eK, {}), (0, i.jsxs)("div", {
                            className: eH()("account-switcher-footer__actions", {
                                "account-switcher-footer__actions--hide-manage-button": !o
                            }),
                            children: [o && (0, i.jsx)(em.Z, {
                                id: "manage-button",
                                className: "manage-button",
                                onClick: () => location.replace("https://app.deriv.com"),
                                children: (0, i.jsx)(R.Xx, {
                                    i18n_default_text: "Manage accounts"
                                })
                            }), (0, i.jsx)(eB.T.Footer, {
                                children: l ? (0, i.jsx)("div", {
                                    className: "deriv-account-switcher__logout--loader",
                                    children: (0, i.jsx)(e$, {
                                        width: "120px",
                                        height: "12px"
                                    })
                                }) : (0, i.jsxs)("div", {
                                    id: "dt_logout_button",
                                    className: "deriv-account-switcher__logout",
                                    onClick: t,
                                    children: [(0, i.jsx)(W.Z, {
                                        color: "prominent",
                                        size: "xs",
                                        align: "left",
                                        className: "deriv-account-switcher__logout-text",
                                        children: (0, R.NC)("Logout")
                                    }), (0, i.jsx)(eq.Z, {
                                        iconSize: "xs",
                                        fill: "var(--text-general)",
                                        className: "icon-general-fill-path"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                eQ = e => {
                    let {
                        tabs_labels: t,
                        modifiedVRTCRAccountList: n,
                        switchAccount: l,
                        isVirtual: o,
                        activeLoginId: s,
                        oAuthLogout: r,
                        is_logging_out: c
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(eB.T.AccountsPanel, {
                            isOpen: !0,
                            title: (0, R.NC)("Deriv account"),
                            className: "account-switcher-panel",
                            children: n && n.map(e => (0, i.jsx)("span", {
                                className: (0, a.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, i.jsx)(eB.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && l(e.loginid)
                                    },
                                    onResetBalance: o && s === e.loginid && 1e4 !== eJ(e.balance) ? () => {
                                        var e;
                                        null === eM.api_base || void 0 === eM.api_base || null === (e = eM.api_base.api) || void 0 === e || e.send({
                                            topup_virtual: 1
                                        })
                                    } : void 0
                                })
                            }, e.loginid))
                        }, t.demo.toLowerCase()), (0, i.jsx)(eK, {}), (0, i.jsx)(eY, {
                            loginid: s,
                            oAuthLogout: r,
                            is_logging_out: c
                        })]
                    })
                },
                e0 = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedMFAccountList: l,
                        switchAccount: o,
                        is_low_risk_country: s
                    } = e, r = (null == l ? void 0 : l.length) !== 0 && s ? (0, R.NC)("Eu Deriv accounts") : (0, R.NC)("Deriv accounts");
                    return (0, i.jsx)(eB.T.AccountsPanel, {
                        isOpen: !0,
                        title: r,
                        className: "account-switcher-panel",
                        children: l.map(e => (e.currencyLabel = (0, R.NC)("Multipliers"), (0, i.jsx)("span", {
                            className: (0, a.Z)("account-switcher__item", {
                                "account-switcher__item--disabled": e.is_disabled
                            }),
                            children: (0, i.jsx)(eB.T.AccountsItem, {
                                account: e,
                                onSelectAccount: () => {
                                    !e.is_disabled && o(e.loginid)
                                }
                            })
                        }, e.loginid)))
                    }, t ? n.real.toLowerCase() : n.demo.toLowerCase())
                };
            var e1 = n("11527");
            let e6 = e => {
                    var t, n;
                    let {
                        isVirtual: l,
                        tabs_labels: o,
                        is_low_risk_country: a
                    } = e;
                    return a ? (0, i.jsx)(eB.T.AccountsPanel, {
                        isOpen: !0,
                        title: (0, R.NC)("Non-Eu Deriv account"),
                        className: "account-switcher-panel",
                        children: (0, i.jsxs)("div", {
                            className: "account-switcher-panel__no-eu-accounts",
                            children: [(0, i.jsx)(eB.T.AccountsItem, {
                                account: eG,
                                onSelectAccount: () => {}
                            }), (0, i.jsx)(eK, {}), (0, i.jsx)(e1.z, {
                                id: "add-button",
                                className: "add-button",
                                onClick: () => location.replace(q.xOw.traders_hub),
                                children: (0, i.jsx)(R.Xx, {
                                    i18n_default_text: "Add"
                                })
                            })]
                        })
                    }, l ? null == o ? void 0 : null === (n = o.real) || void 0 === n ? void 0 : n.toLowerCase() : null == o ? void 0 : null === (t = o.demo) || void 0 === t ? void 0 : t.toLowerCase()) : null
                },
                e2 = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedCRAccountList: l,
                        modifiedMFAccountList: o,
                        is_low_risk_country: s,
                        switchAccount: r
                    } = e;
                    if (!s && l && (null == l ? void 0 : l.length) === 0) return null;
                    let c = (null == o ? void 0 : o.length) === 0 ? (0, R.NC)("Deriv accounts") : (0, R.NC)("Non-Eu Deriv account");
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(eB.T.AccountsPanel, {
                            isOpen: !0,
                            title: c,
                            className: "account-switcher-panel",
                            style: {
                                maxHeight: "220px"
                            },
                            children: l.map(e => (0, i.jsx)("span", {
                                className: (0, a.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, i.jsx)(eB.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && r(e.loginid)
                                    }
                                })
                            }, e.loginid))
                        }, t ? null == n ? void 0 : n.real.toLowerCase() : n.demo.toLowerCase())
                    })
                },
                e9 = e => {
                    let {
                        modifiedCRAccountList: t,
                        modifiedMFAccountList: n,
                        switchAccount: l,
                        isVirtual: o,
                        tabs_labels: a,
                        is_low_risk_country: s,
                        oAuthLogout: r,
                        loginid: c,
                        is_logging_out: d
                    } = e, h = t && (null == t ? void 0 : t.length) > 0, u = n && (null == n ? void 0 : n.length) > 0;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [h ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(e2, {
                                modifiedCRAccountList: t,
                                modifiedMFAccountList: n,
                                switchAccount: l,
                                isVirtual: o,
                                tabs_labels: a,
                                is_low_risk_country: s
                            }), (0, i.jsx)(eK, {})]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(e6, {
                                is_low_risk_country: s,
                                isVirtual: o,
                                tabs_labels: a
                            }), (0, i.jsx)(eK, {})]
                        }), u && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(e0, {
                                modifiedMFAccountList: n,
                                switchAccount: l,
                                isVirtual: o,
                                tabs_labels: a,
                                is_low_risk_country: s
                            }), (0, i.jsx)(eK, {})]
                        }), (0, i.jsx)(eY, {
                            oAuthLogout: r,
                            loginid: c,
                            is_logging_out: d
                        })]
                    })
                };
            var e3 = n("17481");
            let e7 = (0, o.lazy)(() => n.e("932").then(n.bind(n, 67568))),
                e4 = {
                    demo: (0, R.NC)("Demo"),
                    real: (0, R.NC)("Real")
                },
                e8 = e => {
                    var t;
                    let {
                        isVirtual: n,
                        modifiedCRAccountList: l,
                        modifiedMFAccountList: a,
                        modifiedVRTCRAccountList: s,
                        switchAccount: r,
                        activeLoginId: d,
                        client: h
                    } = e, {
                        oAuthLogout: u
                    } = (0, c.q)({
                        handleLogout: async () => h.logout(),
                        client: h
                    }), m = (0, e3.Gz)().includes((null === (t = h.account_settings) || void 0 === t ? void 0 : t.country_code) ? ? ""), g = !!n;
                    return ((0, o.useEffect)(() => {
                        var e, t;
                        let l = null === (e = document.getElementsByClassName("account-switcher-panel")) || void 0 === e ? void 0 : e[0];
                        !n && l && (l.style.maxHeight = "70vh", null === (t = (0, eP._)(".deriv-accordion__content", l)) || void 0 === t || t.then(e => {
                            e && (e.style.maxHeight = "70vh")
                        }))
                    }, [n]), g) ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(eQ, {
                            modifiedVRTCRAccountList: s,
                            switchAccount: r,
                            activeLoginId: d,
                            isVirtual: g,
                            tabs_labels: e4,
                            oAuthLogout: u,
                            is_logging_out: h.is_logging_out
                        })
                    }) : (0, i.jsx)(e9, {
                        modifiedCRAccountList: l,
                        modifiedMFAccountList: a,
                        switchAccount: r,
                        isVirtual: g,
                        tabs_labels: e4,
                        is_low_risk_country: m,
                        oAuthLogout: u,
                        loginid: d,
                        is_logging_out: h.is_logging_out
                    })
                },
                e5 = (0, O.Pi)(e => {
                    var t, n;
                    let {
                        activeAccount: l
                    } = e, {
                        isDesktop: a
                    } = (0, h.F)(), {
                        accountList: s
                    } = (0, ex.T)(), {
                        ui: r,
                        run_panel: c,
                        client: d
                    } = (0, er.oR)(), {
                        accounts: u
                    } = d, {
                        toggleAccountsDialog: m,
                        is_accounts_switcher_on: g,
                        account_switcher_disabled_message: p
                    } = r, {
                        is_stop_button_visible: x
                    } = c, v = Object.keys(u).some(e => "wallet" === u[e].account_category), b = (0, o.useMemo)(() => null == s ? void 0 : s.map(e => {
                        var t, n, o, a, s, r, c, h;
                        return { ...e,
                            balance: (0, q.oC5)((null === (a = d.all_accounts_balance) || void 0 === a ? void 0 : null === (o = a.accounts) || void 0 === o ? void 0 : null === (n = o[null == e ? void 0 : e.loginid]) || void 0 === n ? void 0 : null === (t = n.balance) || void 0 === t ? void 0 : t.toFixed((0, q.i4S)(e.currency))) ? ? "0"),
                            currencyLabel: (null == e ? void 0 : e.is_virtual) ? e4.demo : (null === (c = d.website_status) || void 0 === c ? void 0 : null === (r = c.currencies_config) || void 0 === r ? void 0 : null === (s = r[null == e ? void 0 : e.currency]) || void 0 === s ? void 0 : s.name) ? ? (null == e ? void 0 : e.currency),
                            icon: (0, i.jsx)(ep, {
                                currency: null == e ? void 0 : null === (h = e.currency) || void 0 === h ? void 0 : h.toLowerCase(),
                                isVirtual: !!(null == e ? void 0 : e.is_virtual)
                            }),
                            isVirtual: !!(null == e ? void 0 : e.is_virtual),
                            isActive: (null == e ? void 0 : e.loginid) === (null == l ? void 0 : l.loginid)
                        }
                    }), [s, null === (t = d.all_accounts_balance) || void 0 === t ? void 0 : t.accounts, null === (n = d.website_status) || void 0 === n ? void 0 : n.currencies_config, null == l ? void 0 : l.loginid]), j = (0, o.useMemo)(() => (null == b ? void 0 : b.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("CR")
                    })) ? ? [], [b]), _ = (0, o.useMemo)(() => (null == b ? void 0 : b.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("MF")
                    })) ? ? [], [b]), f = (0, o.useMemo)(() => (null == b ? void 0 : b.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("VRT")
                    })) ? ? [], [b]), w = async e => {
                        if (e.toString() === (null == l ? void 0 : l.loginid)) return;
                        let t = JSON.parse(localStorage.getItem("accountsList") ? ? "{}")[e];
                        if (!t) return;
                        localStorage.setItem("authToken", t), localStorage.setItem("active_loginid", e.toString()), await (null === eM.api_base || void 0 === eM.api_base ? void 0 : eM.api_base.init(!0));
                        let n = new URLSearchParams(window.location.search),
                            i = b.find(t => t.loginid === e.toString());
                        if (!i) return;
                        let o = i.is_virtual ? "demo" : i.currency;
                        n.set("account", o), window.history.pushState({}, "", `${window.location.pathname}?${n.toString()}`)
                    };
                    return l && (v ? (0, i.jsx)(o.Suspense, {
                        fallback: (0, i.jsx)(eV.a, {}),
                        children: (0, i.jsx)(e7, {
                            is_dialog_on: g,
                            toggleDialog: m
                        })
                    }) : (0, i.jsx)(eO.Z, {
                        className: "run-panel__info",
                        classNameBubble: "run-panel__info--bubble",
                        alignment: "bottom",
                        message: p,
                        zIndex: "5",
                        children: (0, i.jsxs)(eB.T, {
                            activeAccount: l,
                            isDisabled: x,
                            tabsLabels: e4,
                            modalContentStyle: {
                                content: {
                                    top: a ? "30%" : "50%",
                                    borderRadius: "10px"
                                }
                            },
                            children: [(0, i.jsx)(eB.T.Tab, {
                                title: e4.real,
                                children: (0, i.jsx)(e8, {
                                    modifiedCRAccountList: j,
                                    modifiedMFAccountList: _,
                                    switchAccount: w,
                                    activeLoginId: null == l ? void 0 : l.loginid,
                                    client: d
                                })
                            }), (0, i.jsx)(eB.T.Tab, {
                                title: e4.demo,
                                children: (0, i.jsx)(e8, {
                                    modifiedVRTCRAccountList: f,
                                    switchAccount: w,
                                    isVirtual: !0,
                                    activeLoginId: null == l ? void 0 : l.loginid,
                                    client: d
                                })
                            })]
                        })
                    }))
                });
            var te = n("39523"),
                tt = n("38051"),
                tn = n("39590"),
                tl = n("14393"),
                ti = n("34215"),
                to = n("44741");
            tl.Z, (0, R.NC)("A whole new trading experience on a powerful yet easy to use platform."), q.xOw.trade, tl.Z, ti.Z, (0, R.NC)("Automated trading at your fingertips. No coding needed."), q.xOw.bot, ti.Z, to.Z, (0, R.NC)("Trade the world’s markets with our popular user-friendly platform."), q.xOw.smarttrader, to.Z;
            let ta = {
                    as: "a",
                    href: q.xOw.traders_hub,
                    icon: (0, i.jsx)(tt.Z, {
                        iconSize: "xs"
                    }),
                    label: "Trader's Hub"
                },
                ts = [{
                    as: "a",
                    href: `https://binarytool-dtrader.vercel.app/dtrader/reports?acct1=${localStorage.getItem("active_loginid")}&token1=${localStorage.getItem("authToken")}&cur1=${(null===(l=JSON.parse(localStorage.getItem("clientAccounts")||"{}")[localStorage.getItem("active_loginid")||""])||void 0===l?void 0:l.currency)||"USD"}&lang=EN`,
                    icon: (0, i.jsx)(tn.Z, {
                        iconSize: "xs"
                    }),
                    label: (0, R.NC)("Reports")
                }],
                tr = (0, O.Pi)(() => {
                    let {
                        localize: e
                    } = (0, R.T_)(), {
                        isDesktop: t
                    } = (0, h.F)(), n = (0, er.oR)();
                    if (!n) return null;
                    let {
                        is_logged_in: l
                    } = n.client;
                    return l && 0 !== ts.length ? (0, i.jsx)(i.Fragment, {
                        children: t ? ts.map(t => {
                            let {
                                as: n,
                                href: l,
                                icon: o,
                                label: a
                            } = t;
                            return (0, i.jsx)(te.s, {
                                as: n,
                                className: "app-header__menu",
                                href: l,
                                leftComponent: o,
                                children: (0, i.jsx)(ed.x, {
                                    children: e(a)
                                })
                            }, a)
                        }) : ts["1"] && (0, i.jsx)(te.s, {
                            as: ts["1"].as,
                            className: "flex gap-2 p-5",
                            href: ts["1"].href,
                            leftComponent: ts["1"].icon,
                            children: (0, i.jsx)(ed.x, {
                                children: e(ts["1"].label)
                            })
                        }, ts["1"].label)
                    }) : null
                });
            tr.TradershubLink = () => (0, i.jsx)(te.s, {
                as: "a",
                className: "app-header__menu",
                href: ta.href,
                leftComponent: ta.icon,
                children: (0, i.jsx)(ed.x, {
                    children: ta.label
                })
            }, ta.label);
            var tc = n("17934"),
                td = n("41301"),
                th = n("68782");
            let tu = e => {
                let {
                    buttonText: t,
                    onClick: n
                } = e, {
                    isDesktop: l
                } = (0, h.F)();
                return (0, i.jsxs)("button", {
                    className: "flex items-center w-full pt-8 p-[3.2rem]",
                    onClick: n,
                    children: [(0, i.jsx)(th.Z, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    }), (0, i.jsx)(ed.x, {
                        className: "ml-[1.6rem]",
                        size: l ? "md" : "lg",
                        weight: "bold",
                        children: t
                    })]
                })
            };
            var tm = n("68534"),
                tg = n("93217");
            let tp = e => {
                    let {
                        localize: t
                    } = (0, R.T_)(), {
                        is_dark_mode_on: n,
                        toggleTheme: l
                    } = (0, P.Z)(), {
                        oAuthLogout: o
                    } = (0, c.q)({
                        handleLogout: async () => null == e ? void 0 : e.logout(),
                        client: e
                    });
                    return {
                        config: [
                            [{
                                as: "button",
                                label: t("Dark theme"),
                                LeftComponent: tm.Z,
                                RightComponent: (0, i.jsx)(tg.Z, {
                                    value: n,
                                    onChange: l
                                })
                            }], (null == e ? void 0 : e.is_logged_in) ? [{
                                as: "button",
                                label: t("Log out"),
                                LeftComponent: eq.Z,
                                onClick: o,
                                removeBorderBottom: !0
                            }] : []
                        ]
                    }
                },
                tx = (0, O.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, h.F)(), {
                        client: t
                    } = (0, er.oR)(), n = e ? "sm" : "md", {
                        config: l
                    } = tp(t);
                    return (0, i.jsx)("div", {
                        className: "mobile-menu__content",
                        children: (0, i.jsx)("div", {
                            className: "mobile-menu__content__items",
                            children: l.map((e, t) => {
                                let l = e.find(e => {
                                    let {
                                        removeBorderBottom: t
                                    } = e;
                                    return t
                                });
                                return (0, i.jsx)("div", {
                                    className: (0, a.Z)("mobile-menu__content__items--padding", {
                                        "mobile-menu__content__items--bottom-border": !l
                                    }),
                                    "data-testid": "dt_menu_item",
                                    children: e.map(e => {
                                        let {
                                            LeftComponent: t,
                                            RightComponent: l,
                                            as: o,
                                            href: s,
                                            label: r,
                                            onClick: c,
                                            target: d
                                        } = e, h = "Binarytools.com" === r;
                                        return "a" === o ? (0, i.jsx)(te.s, {
                                            as: "a",
                                            className: (0, a.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !h
                                            }),
                                            disableHover: !0,
                                            href: s,
                                            leftComponent: (0, i.jsx)(t, {
                                                className: "mobile-menu__content__items--right-margin",
                                                height: 16,
                                                width: 16
                                            }),
                                            target: d,
                                            children: (0, i.jsx)(ed.x, {
                                                size: n,
                                                children: r
                                            })
                                        }, r) : (0, i.jsx)(te.s, {
                                            as: "button",
                                            className: (0, a.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !h
                                            }),
                                            disableHover: !0,
                                            leftComponent: (0, i.jsx)(t, {
                                                className: "mobile-menu__content__items--right-margin",
                                                iconSize: "xs"
                                            }),
                                            onClick: c,
                                            rightComponent: l,
                                            children: (0, i.jsx)(ed.x, {
                                                size: n,
                                                children: r
                                            })
                                        }, r)
                                    })
                                }, t)
                            })
                        })
                    })
                }),
                tv = e => {
                    let {
                        hideLanguageSetting: t,
                        openLanguageSetting: n
                    } = e, {
                        currentLang: l,
                        localize: a
                    } = (0, R.T_)(), {
                        isDesktop: s
                    } = (0, h.F)(), r = (0, o.useMemo)(() => {
                        var e;
                        return null === (e = A.find(e => {
                            let {
                                code: t
                            } = e;
                            return t === l
                        })) || void 0 === e ? void 0 : e.placeholderIconInMobile
                    }, [l]);
                    return (0, i.jsxs)("div", {
                        className: "mobile-menu__header",
                        children: [(0, i.jsx)(ed.x, {
                            size: s ? "md" : "lg",
                            weight: "bold",
                            children: a("Menu")
                        }), !t && (0, i.jsxs)("button", {
                            className: "mobile-menu__header__language items-center",
                            onClick: n,
                            children: [r, (0, i.jsx)(ed.x, {
                                className: "ml-[0.4rem]",
                                size: s ? "xs" : "sm",
                                weight: "bold",
                                children: l
                            })]
                        })]
                    })
                };
            var tb = n("89816");
            let tj = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, i.jsx)("button", {
                        onClick: t,
                        children: (0, i.jsx)(tb.Z, {
                            iconSize: "xs",
                            fill: "var(--text-general)"
                        })
                    })
                },
                t_ = {
                    "jeffhub.binarytool.site": {
                        logo: "/jeffhub.jpeg",
                        name: "JeffHub",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VawwKhVFCCoRpmFH3j23",
                            instagram: "https://instagram.com/jeffhub-instagram",
                            tiktok: "https://www.tiktok.com/@jeff.hub.traders"
                        }
                    },
                    "gamer.binarytool.site": {
                        logo: "/gamer.jpeg",
                        name: "Gamer",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/LFzX7IJxVoN5Sh5gm7HwcD",
                            telegram: "https://t.me/gamerstradingtools",
                            tiktok: "https://www.tiktok.com/@gamerbrayoh"
                        }
                    },
                    "marketsniper.site": {
                        name: "Market Sniper",
                        social: {}
                    },
                    "alphatraders.vercel.app": {
                        name: "Alpha Traders",
                        social: {}
                    },
                    default: {
                        logo: "/binary_logo.svg",
                        name: "BinaryTools",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VaDbybILo4heuWEGso3B",
                            telegram: "https://t.me/binarytools",
                            youtube: "https://www.youtube.com/@binarytooltutorial",
                            instagram: "https://www.instagram.com/binarytoolsite/",
                            tiktok: "https://www.tiktok.com/@binarytools",
                            facebook: "https://www.facebook.com/profile.php?id=61559570918487"
                        }
                    }
                },
                tf = () => {
                    var e, t, n;
                    let [l, a] = (0, o.useState)(!1), [s, r] = (0, o.useState)(!1), {
                        currentLang: c = "EN",
                        localize: d,
                        switchLanguage: u
                    } = (0, R.T_)(), {
                        hideModal: m,
                        isModalOpenFor: x,
                        showModal: v
                    } = g(), {
                        isDesktop: b
                    } = (0, h.F)(), j = () => a(!1), _ = !!x("MobileLanguagesDrawer"), f = () => {
                        window.location.reload()
                    }, w = (0, er.oR)(), y = null == w ? void 0 : w.client, C = y ? Object.values(y.accounts || {}).find(e => !e.is_virtual) : void 0, k = C ? (null === (n = y.all_accounts_balance) || void 0 === n ? void 0 : null === (t = n.accounts) || void 0 === t ? void 0 : null === (e = t[C.loginid]) || void 0 === e ? void 0 : e.balance) ? ? 0 : 0, N = (null == C ? void 0 : C.currency) ? ? "USD", I = (0, q.O$T)(N), {
                        social: Z
                    } = t_[window.location.hostname] || t_.default;
                    return b ? null : (0, i.jsxs)("div", {
                        className: "mobile-menu",
                        children: [(0, i.jsxs)("div", {
                            className: "mobile-menu__toggle",
                            children: [(0, i.jsx)(tj, {
                                onClick: () => a(!0)
                            }), w && eM.api_base.api && (0, i.jsx)(ez, {
                                api: eM.api_base.api,
                                balance: k,
                                currency: N,
                                displayCode: I,
                                isDarkMode: !1
                            }), (0, i.jsx)("div", {
                                className: "mobile-menu__social-icon",
                                onClick: () => r(!0),
                                children: (0, i.jsx)(e_.Kz1, {
                                    size: 25,
                                    style: {
                                        color: "#60b5ff"
                                    }
                                })
                            }), (0, i.jsx)("div", {
                                onClick: () => f(),
                                children: (0, i.jsx)(e_.e8N, {
                                    size: 20,
                                    style: {
                                        color: "#29dfc0"
                                    }
                                })
                            })]
                        }), s && (0, i.jsx)("div", {
                            className: "modal-overlay",
                            onClick: () => r(!1),
                            children: (0, i.jsxs)("div", {
                                className: "modal-content",
                                onClick: e => e.stopPropagation(),
                                children: [(0, i.jsx)("h3", {
                                    children: "Follow Us"
                                }), (0, i.jsxs)("ul", {
                                    className: "social-links-list",
                                    children: [Z.whatsapp && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: Z.whatsapp,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(ef.Z, {}), " WhatsApp"]
                                        })
                                    }), [2, 3, 4, 5, 6].map(e => {
                                        let t = Z[`whatsapp${e}`];
                                        return t ? (0, i.jsx)("li", {
                                            children: (0, i.jsxs)("a", {
                                                href: t,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [(0, i.jsx)(ef.Z, {}), " WhatsApp Group ", e]
                                            })
                                        }, `whatsapp${e}`) : null
                                    }), Z.telegram && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: Z.telegram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(ew.Z, {}), " Telegram"]
                                        })
                                    }), Z.youtube && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: Z.youtube,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(ey.Z, {}), " Youtube"]
                                        })
                                    }), Z.instagram && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: Z.instagram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(eC.Z, {}), " Instagram"]
                                        })
                                    }), Z.tiktok && (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("a", {
                                            href: Z.tiktok,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, i.jsx)(ek.Z, {}), " Tiktok"]
                                        })
                                    })]
                                }), (0, i.jsx)("button", {
                                    className: "modal-close-button",
                                    onClick: () => r(!1),
                                    children: "Close"
                                })]
                            })
                        }), (0, i.jsxs)(tc.d, {
                            isOpen: l,
                            onCloseDrawer: j,
                            width: "29.5rem",
                            children: [(0, i.jsx)(tc.d.Header, {
                                onCloseDrawer: j,
                                children: (0, i.jsx)(tv, {
                                    hideLanguageSetting: _,
                                    openLanguageSetting: () => v("MobileLanguagesDrawer")
                                })
                            }), (0, i.jsx)(tc.d.Content, {
                                children: _ ? (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: "mobile-menu__back-btn",
                                        children: (0, i.jsx)(tu, {
                                            buttonText: d("Language"),
                                            onClick: m
                                        })
                                    }), (0, i.jsx)(td.I, {
                                        isOpen: !0,
                                        languages: A,
                                        onClose: m,
                                        onLanguageSwitch: e => {
                                            u(e), window.location.replace(p()), window.location.reload()
                                        },
                                        selectedLanguage: c,
                                        wrapperClassName: "mobile-menu__language-drawer"
                                    })]
                                }) : (0, i.jsx)(tx, {})
                            }), (0, i.jsxs)(tc.d.Footer, {
                                className: "mobile-menu__footer",
                                children: [(0, i.jsx)(eh, {}), (0, i.jsx)(eo, {})]
                            })]
                        })]
                    })
                },
                tw = (0, O.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, h.F)(), {
                        isAuthorizing: t,
                        activeLoginid: n
                    } = (0, ex.T)(), {
                        client: l
                    } = (0, er.oR)() ? ? {}, {
                        data: o
                    } = ev({
                        allBalanceData: null == l ? void 0 : l.all_accounts_balance
                    }), {
                        isOAuth2Enabled: s
                    } = (0, c.q)();
                    return (0, i.jsxs)(eb.h, {
                        className: (0, a.Z)("app-header", {
                            "app-header--desktop": e,
                            "app-header--mobile": !e
                        }),
                        children: [(0, i.jsxs)(ej.i, {
                            variant: "left",
                            children: [(0, i.jsx)(eF, {}), (0, i.jsx)(tf, {}), e && (0, i.jsx)(tr, {})]
                        }), (0, i.jsx)(ej.i, {
                            variant: "right",
                            children: t ? (0, i.jsx)(eD, {
                                isLoggedIn: !0,
                                isMobile: !e,
                                speed: 3
                            }) : n ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(e5, {
                                    activeAccount: o
                                })
                            }) : (0, i.jsxs)("div", {
                                className: "auth-actions",
                                children: [(0, i.jsx)(em.Z, {
                                    tertiary: !0,
                                    onClick: async () => {
                                        s ? await (0, d.P6)({
                                            redirectCallbackUri: `${window.location.origin}/callback`
                                        }) : window.location.replace((0, q.O2o)())
                                    },
                                    children: (0, i.jsx)(R.Xx, {
                                        i18n_default_text: "Log in"
                                    })
                                }), (0, i.jsx)(em.Z, {
                                    primary: !0,
                                    onClick: () => {
                                        window.open(q.xOw.signup)
                                    },
                                    children: (0, i.jsx)(R.Xx, {
                                        i18n_default_text: "Sign up"
                                    })
                                })]
                            })
                        })]
                    })
                }),
                ty = e => {
                    let {
                        children: t
                    } = e, n = localStorage.getItem("theme") ? ? "light", {
                        ui: l
                    } = (0, er.oR)() ? ? {
                        ui: {
                            setDevice: () => {}
                        }
                    }, {
                        setDevice: a
                    } = l, {
                        isDesktop: s,
                        isMobile: r,
                        isTablet: c
                    } = (0, h.F)();
                    return (0, o.useEffect)(() => {
                        let e = document.querySelector("body");
                        e && ("light" === n ? (e.classList.remove("theme--dark"), e.classList.add("theme--light")) : (e.classList.remove("theme--light"), e.classList.add("theme--dark")))
                    }, [n]), (0, o.useEffect)(() => {
                        r ? a("mobile") : c ? a("tablet") : a("desktop")
                    }, [s, r, c, a]), (0, i.jsx)("div", {
                        className: "main-body",
                        children: t
                    })
                },
                tC = () => {
                    let {
                        isDesktop: e
                    } = (0, h.F)(), {
                        isOAuth2Enabled: t
                    } = (0, c.q)(), n = "/callback" === window.location.pathname, l = "true" === s.Z.get("logged_state"), u = window.location.pathname.includes("endpoint"), m = Object.keys(JSON.parse(localStorage.getItem("accountsList") ? ? "{}")).length > 0;
                    return (0, o.useEffect)(() => {
                        l && !m && t && !u && !n && (0, d.P6)({
                            redirectCallbackUri: `${window.location.origin}/callback`
                        })
                    }, [l, m, t, u, n]), (0, i.jsxs)("div", {
                        className: (0, a.Z)("layout", {
                            responsive: e
                        }),
                        children: [!n && (0, i.jsx)(tw, {}), (0, i.jsx)(ty, {
                            children: (0, i.jsx)(r.j3, {})
                        }), !n && e && (0, i.jsx)(eu, {})]
                    })
                }
        },
        30394: function(e, t, n) {
            n.d(t, {
                Z: () => g
            });
            var l = n("85893"),
                i = n("67294"),
                o = n("63387"),
                a = n.n(o),
                s = n("82106"),
                r = n("86278"),
                c = n("14244"),
                d = n("26088"),
                h = n("92868"),
                u = n("2502"),
                m = n("45452");
            let g = e => {
                let {
                    alignment: t,
                    children: n,
                    className: o,
                    classNameBubble: g,
                    classNameTarget: p,
                    classNameTargetIcon: x,
                    counter: v,
                    disable_message_icon: b,
                    disable_target_icon: j,
                    has_error: _,
                    icon: f,
                    id: w,
                    is_open: y,
                    is_bubble_hover_enabled: C,
                    margin: k = 0,
                    message: N,
                    onBubbleClose: I,
                    onBubbleOpen: Z,
                    onClick: S = () => void 0,
                    relative_render: L = !1,
                    should_disable_pointer_events: z = !1,
                    should_show_cursor: M,
                    zIndex: E = "1",
                    data_testid: T,
                    arrow_styles: F
                } = e, A = i.useRef(), [R, D] = i.useState(void 0), [O, P] = i.useState(!1), {
                    isDesktop: V
                } = (0, u.F)(), [B, U] = (0, r.X)(null, !0), [H, $] = (0, r.m)(), q = i.useMemo(() => !V && void 0 === y, [V, y]);
                i.useEffect(() => {
                    A.current && D(A.current)
                }, [_]), i.useEffect(() => {
                    !U && q && P(!1)
                }, [U, q]);
                let W = () => {
                        Z && Z()
                    },
                    X = () => {
                        I && I()
                    },
                    G = a()(x, f),
                    J = U && N && (!q || O);
                return (0, l.jsxs)("div", {
                    ref: B,
                    className: a()({
                        "dc-popover__wrapper": L
                    }),
                    onClick: e => {
                        S(e), q && P(!O)
                    },
                    "data-testid": "dt_popover_wrapper",
                    children: [L && (0, l.jsx)("div", {
                        className: "dc-popover__container",
                        style: {
                            zIndex: E
                        },
                        children: (0, l.jsx)("div", {
                            ref: A,
                            className: "dc-popover__container-relative",
                            "data-testid": "dt_popover_relative_container"
                        })
                    }), (R || !L) && (0, l.jsx)(s.Popover, {
                        isOpen: y ? ? (J || C && $),
                        positions: [t],
                        padding: k + 8,
                        containerClassName: a()({
                            "react-tiny-popover-container--disabled-pointer-event": z,
                            "react-tiny-popover-cursor-option": M
                        }),
                        ...L ? {
                            parentElement: R,
                            contentLocation: e => {
                                let {
                                    childRect: n,
                                    popoverRect: l,
                                    nudgedLeft: i
                                } = e, o = document.body.clientWidth, a = n.right + (l.width - n.width / 2), s = 0, r = 0;
                                switch (t) {
                                    case "left":
                                        r = -1 * Math.abs((l.height > l.width ? i : l.width) + k), s = n.height > l.height ? (n.height - l.height) / 2 : -((l.height - n.height) / 2 * 1);
                                        break;
                                    case "right":
                                        r = l.width + k, s = n.height > l.height ? (n.height - l.height) / 2 : -((l.height - n.height) / 2 * 1);
                                        break;
                                    case "top":
                                        r = a > o ? -1 * Math.abs(a - o) : 0, s = -1 * Math.abs(l.height + k);
                                        break;
                                    case "bottom":
                                        r = a > o ? -1 * Math.abs(a - o) : 0, s = n.height + k
                                }
                                return {
                                    top: s,
                                    left: r
                                }
                            }
                        } : {
                            containerStyle: {
                                zIndex: E
                            }
                        },
                        content: e => {
                            let {
                                position: t,
                                childRect: n,
                                popoverRect: i
                            } = e;
                            return (0, l.jsx)(s.ArrowContainer, {
                                position: t,
                                childRect: n,
                                popoverRect: i,
                                arrowColor: _ ? "var(--status-danger)" : "var(--general-active)",
                                arrowSize: 5,
                                arrowStyle: L ? {
                                    borderTop: "10px solid transparent",
                                    borderLeft: "10px solid transparent",
                                    borderRight: `10px solid ${_?"var(--status-danger)":"var(--general-active)"}`,
                                    transform: "rotate(315deg)",
                                    right: "0px",
                                    top: "5px",
                                    height: "10px",
                                    margin: "auto",
                                    bottom: "0px"
                                } : { ...F
                                },
                                children: (0, l.jsxs)("div", {
                                    id: w,
                                    onMouseEnter: W,
                                    onMouseLeave: X,
                                    className: a()(g, "dc-popover__bubble", {
                                        "dc-popover__bubble--error": _
                                    }),
                                    ref: H,
                                    children: [!b && "info" === f && (0, l.jsx)("i", {
                                        className: "dc-popover__bubble__icon",
                                        children: (0, l.jsx)(c.Z, {})
                                    }), _ && (0, l.jsx)(m.Z, {
                                        size: "xxs",
                                        color: "colored-background",
                                        children: N
                                    }) || (0, l.jsx)(m.Z, {
                                        lineHeight: "md",
                                        size: "xxs",
                                        className: "dc-popover__bubble__text",
                                        children: N
                                    })]
                                })
                            })
                        },
                        children: (0, l.jsx)("div", {
                            "data-testid": T,
                            className: a()("dc-popover", o),
                            id: w,
                            children: (0, l.jsxs)("div", {
                                className: a()(p, "dc-popover__target"),
                                children: [!j && (0, l.jsxs)("i", {
                                    className: N ? "dc-popover__target__icon" : "dc-popover__target__icon--disabled",
                                    children: ["info" === f && (0, l.jsx)(c.Z, {
                                        className: G
                                    }), "question" === f && (0, l.jsx)(h.Z, {
                                        className: G
                                    }), "dot" === f && (0, l.jsx)(d.Z, {
                                        className: G
                                    }), "counter" === f && (0, l.jsx)("span", {
                                        className: G,
                                        children: v
                                    })]
                                }), n]
                            })
                        })
                    })]
                })
            }
        },
        86278: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return i
                },
                m: function() {
                    return o
                }
            });
            var l = n(67294);
            let i = (e, t) => {
                    let [n, i] = l.useState(!1), o = l.useRef(null), a = e || o, s = () => i(!0), r = () => i(!1);
                    return l.useEffect(() => {
                        let e = a.current;
                        if (e) return t ? (e.addEventListener("mouseenter", s), e.addEventListener("mouseleave", r)) : (e.addEventListener("mouseover", s), e.addEventListener("mouseout", r)), () => {
                            t ? (e.removeEventListener("mouseenter", s), e.removeEventListener("mouseleave", r)) : (e.removeEventListener("mouseover", s), e.removeEventListener("mouseout", r))
                        }
                    }, [a, t]), [a, n]
                },
                o = () => {
                    let [e, t] = l.useState(!1), n = l.useCallback(() => t(!0), []), i = l.useCallback(() => t(!1), []), o = l.useRef(null);
                    return [l.useCallback(e => {
                        o.current && (o.current.removeEventListener("mouseover", n), o.current.removeEventListener("mouseout", i)), o.current = e, o.current && (o.current.addEventListener("mouseover", n), o.current.addEventListener("mouseout", i))
                    }, [n, i]), e]
                }
        },
        83257: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var l = n(67294),
                i = n(83274);
            let o = () => {
                let {
                    ui: e
                } = (0, i.oR)() ? ? {
                    ui: {
                        setDarkMode: () => {},
                        is_dark_mode_on: !1
                    }
                }, {
                    setDarkMode: t,
                    is_dark_mode_on: n
                } = e;
                return {
                    toggleTheme: (0, l.useCallback)(() => {
                        let e = document.querySelector("body");
                        e && (e.classList.contains("theme--dark") ? (localStorage.setItem("theme", "light"), e.classList.remove("theme--dark"), e.classList.add("theme--light"), t(!1)) : (localStorage.setItem("theme", "dark"), e.classList.remove("theme--light"), e.classList.add("theme--dark"), t(!0)))
                    }, [t]),
                    is_dark_mode_on: n,
                    setDarkMode: t
                }
            }
        }
    }
]);