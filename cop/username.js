(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[280], {
    221: function(e, c, o) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/[username]", function() {
            return o(6869)
        }
        ])
    },
    6526: function(e, c, o) {
        "use strict";
        o.d(c, {
            At: function() {
                return R
            },
            Bd: function() {
                return t
            },
            Bi: function() {
                return a
            },
            D0: function() {
                return j
            },
            EY: function() {
                return d
            },
            Iw: function() {
                return s
            },
            K3: function() {
                return f
            },
            Kg: function() {
                return b
            },
            Mo: function() {
                return g
            },
            Nj: function() {
                return N
            },
            PT: function() {
                return r
            },
            Q7: function() {
                return W
            },
            SS: function() {
                return Z
            },
            VV: function() {
                return F
            },
            Vb: function() {
                return y
            },
            Xl: function() {
                return z
            },
            Zg: function() {
                return w
            },
            Zl: function() {
                return p
            },
            aF: function() {
                return m
            },
            bW: function() {
                return C
            },
            bf: function() {
                return u
            },
            eR: function() {
                return l
            },
            ei: function() {
                return h
            },
            fB: function() {
                return H
            },
            gM: function() {
                return V
            },
            j7: function() {
                return S
            },
            jG: function() {
                return B
            },
            j_: function() {
                return T
            },
            lU: function() {
                return x
            },
            lX: function() {
                return L
            },
            ls: function() {
                return i
            },
            nr: function() {
                return k
            },
            ny: function() {
                return n
            },
            oc: function() {
                return M
            },
            tZ: function() {
                return G
            },
            uk: function() {
                return A
            },
            vZ: function() {
                return v
            }
        });
        let l = {
            duration: 1,
            ease: [.39, .21, .12, .96],
            delay: .1
        }
          , r = {
            duration: 1,
            ease: [.39, .21, .12, .96],
            delay: .5
        }
          , a = {
            duration: 1,
            ease: [.39, .21, .12, .96],
            delay: 1
        }
          , s = {
            duration: 1,
            ease: [.39, .21, .12, .96],
            delay: 2
        }
          , t = {
            amount: 1,
            once: !0
        }
          , n = {
            amount: .25,
            once: !0
        }
          , i = {
            amount: .1,
            once: !0
        }
          , d = {
            right: "-50rem",
            opacity: 0,
            rotate: 45
        }
          , h = {
            right: "-35rem",
            opacity: 1,
            rotate: 5
        }
          , x = {
            right: "-20rem",
            opacity: 0,
            rotate: 45
        }
          , m = {
            right: "0rem",
            opacity: 1,
            rotate: 5
        }
          , p = {
            right: "-25rem",
            opacity: 0
        }
          , u = {
            right: "-25rem",
            opacity: 1
        }
          , w = {
            right: "-22rem",
            opacity: 0
        }
          , g = {
            right: "-22rem",
            opacity: 1
        }
          , v = {
            right: "-34rem",
            opacity: 0
        }
          , f = {
            right: "-34rem",
            opacity: 1
        }
          , j = {
            right: "-38rem",
            opacity: 0
        }
          , b = {
            right: "-38rem",
            opacity: 1
        }
          , y = {
            left: "-50rem",
            opacity: 0,
            rotate: -45
        }
          , C = {
            left: "-35rem",
            opacity: 1,
            rotate: -7
        }
          , z = {
            left: "-20rem",
            opacity: 0,
            rotate: -45
        }
          , N = {
            left: "0rem",
            opacity: 1,
            rotate: -7
        }
          , F = {
            left: "-35rem",
            opacity: 0
        }
          , M = {
            left: "-35rem",
            opacity: 1
        }
          , T = {
            left: "-22rem",
            opacity: 0
        }
          , H = {
            left: "-22rem",
            opacity: 1
        }
          , A = {
            left: "-30rem",
            opacity: 0
        }
          , B = {
            left: "-30rem",
            opacity: 1
        }
          , k = {
            transform: "translateY(-30px)",
            opacity: 0
        }
          , V = {
            transform: "translateY(0px)",
            opacity: 1
        }
          , L = {
            transform: "translateY(30px)",
            opacity: 0
        }
          , Z = {
            transform: "translateY(0px)",
            opacity: 1
        }
          , R = {
            opacity: 0
        }
          , W = {
            opacity: 1
        }
          , G = {
            opacity: 1
        }
          , S = {
            opacity: 1
        }
    },
    7631: function(e, c, o) {
        "use strict";
        o.d(c, {
            Qr: function() {
                return r
            },
            ed: function() {
                return s
            },
            qT: function() {
                return a
            }
        });
        var l = o(6154);
        async function r() {
            try {
                let {data: e} = await l.Z.get("".concat("https://api.e-z.bio", "/bio/stats"));
                return e
            } catch (c) {
                let e = c.response.data.error;
                throw new t("".concat(e.charAt(0).toUpperCase() + e.slice(1), "."))
            }
        }
        async function a() {
            try {
                let {data: e} = await l.Z.get("".concat("https://api.e-z.bio", "/bio/display"));
                return e.bios
            } catch (c) {
                let e = c.response.data.error;
                throw new t("".concat(e.charAt(0).toUpperCase() + e.slice(1), "."))
            }
        }
        async function s(e) {
            try {
                let {data: c} = await (0,
                l.Z)({
                    url: "".concat("https://api.e-z.bio", "/bio/view/").concat(e),
                    method: "PUT",
                    withCredentials: !0
                });
                return c
            } catch (c) {
                let e = c.response.data.error;
                throw new t("".concat(e.charAt(0).toUpperCase() + e.slice(1), "."))
            }
        }
        class t extends Error {
            constructor(e) {
                super(e),
                this.name = "APIError"
            }
        }
    },
    6869: function(e, c, o) {
        "use strict";
        o.r(c),
        o.d(c, {
            __N_SSP: function() {
                return B
            },
            default: function() {
                return k
            }
        });
        var l = o(5893)
          , r = o(2962)
          , a = o(1163)
          , s = o(7294)
          , t = o(7631)
          , n = o(6465)
          , i = o.n(n)
          , d = o(5110)
          , h = o(590)
          , x = o(5459)
          , m = o.n(x)
          , p = o(5152)
          , u = o.n(p)
          , w = o(89)
          , g = o(1562)
          , v = o(6526)
          , f = o(689)
          , j = o(6501);
        let b = e=>{
            switch (e) {
            case "success":
                return (0,
                l.jsx)(j.KM, {});
            case "error":
                return (0,
                l.jsx)(j.Pz, {});
            case "info":
                return (0,
                l.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 40 40",
                    width: "24px",
                    height: "24px",
                    children: [(0,
                    l.jsx)("path", {
                        fill: "#8bb7f0",
                        d: "M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"
                    }), (0,
                    l.jsx)("path", {
                        fill: "none",
                        stroke: "#4e7ab5",
                        "stroke-miterlimit": "10",
                        d: "M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"
                    }), (0,
                    l.jsx)("path", {
                        fill: "#fff",
                        d: "M20,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S21.1,10,20,10z"
                    }), (0,
                    l.jsx)("path", {
                        fill: "#fff",
                        d: "M22,28V16h-5v1h1v11h-1v1h6v-1H22z"
                    })]
                })
            }
        }
          , y = e=>{
            switch (e) {
            case "success":
                return "Success";
            case "error":
                return "Error";
            case "info":
                return "Info"
            }
        }
          , C = (e,c,o,r,a,s,t,n)=>j.ZP.custom(i=>(0,
        l.jsxs)("div", {
            style: {
                backgroundColor: (0,
                d.G)(o, t),
                borderColor: a,
                backdropFilter: "blur(".concat(n, "px)")
            },
            className: "relative z-50 flex max-w-md border transform-gpu flex-row items-center justify-between rounded-lg shadow-2xl transition-all duration-1000 ease-custom hover:shadow-none lg:w-auto ".concat(i.visible ? "top-0" : "top-96"),
            onClick: ()=>j.ZP.dismiss(i.id),
            children: [(0,
            l.jsx)("div", {
                style: {
                    backgroundColor: (0,
                    d.G)(r, t),
                    borderRightColor: a
                },
                className: "flex h-full items-center rounded-l-lg border-r p-3 px-5 text-xl",
                children: b(c)
            }), (0,
            l.jsx)("div", {
                className: "flex items-center p-3",
                children: (0,
                l.jsxs)("div", {
                    className: "ml-4 flex cursor-default flex-col items-start justify-center",
                    children: [(0,
                    l.jsx)("h1", {
                        style: {
                            color: s
                        },
                        className: "mr-auto w-60 text-base font-poppins font-semibold",
                        children: y(c)
                    }), (0,
                    l.jsx)("span", {
                        style: {
                            color: s
                        },
                        className: "text-sm font-poppins",
                        children: e
                    })]
                })
            })]
        }), {
            position: "bottom-right",
            duration: 2e3
        });
        var z = o(9008)
          , N = o.n(z)
          , F = o(6825);
        let M = u()(()=>Promise.all([o.e(624), o.e(372)]).then(o.bind(o, 1120)), {
            loadableGenerated: {
                webpack: ()=>[1120]
            },
            ssr: !1
        });
        function T(e) {
            let {bio: c, musicIndex: o} = e;
            function r(e) {
                switch (e) {
                case "Link":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsxs)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 16 16",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            l.jsx)("path", {
                                d: "M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"
                            }), (0,
                            l.jsx)("path", {
                                d: "M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"
                            })]
                        })
                    });
                case "Personal":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsxs)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 16 16",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            l.jsx)("path", {
                                d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                            }), (0,
                            l.jsx)("path", {
                                "fill-rule": "evenodd",
                                d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            })]
                        })
                    });
                case "Shop":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                            },
                            className: "h-7 w-7",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 16 16",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"
                            })
                        })
                    });
                case "YouTube":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF0000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF0000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                            })
                        })
                    });
                case "Twitch":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#9146FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#9146FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"
                            })
                        })
                    });
                case "Kick":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#3db414", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#3db414"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 78 25.71",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M0 0H8.26393V5.71333H11.0186V2.85667H13.7732V0H22.0371V8.57H19.2825V11.4267H16.5279V14.2833H19.2825V17.14H22.0371V25.71H13.7732V22.8533H11.0186V19.9967H8.26393V25.71H0V0ZM55.0929 0H63.3568V5.71333H66.1114V2.85667H68.8661V0H77.13V8.57H74.3754V11.4267H71.6207V14.2833H74.3754V17.14H77.13V25.71H68.8661V22.8533H66.1114V19.9967H63.3568V25.71H55.0929V0ZM24.7918 0H33.0557V25.71H24.7918V0ZM44.0743 0H38.565V2.85667H35.8104V22.8533H38.565V25.71H44.0743H52.3382V17.14H44.0743V8.57H52.3382V0H44.0743Z",
                                "data-v-4e93c639": ""
                            })
                        })
                    });
                case "Twitter":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#1D9BF0", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#1D9BF0"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"
                            })
                        })
                    });
                case "X":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7 ",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                            })
                        })
                    });
                case "Instagram":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#E4405F", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#E4405F"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                            })
                        })
                    });
                case "Github":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#181717"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                            })
                        })
                    });
                case "Reddit":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF4500", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF4500"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                            })
                        })
                    });
                case "NameMC":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#020101", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#020101"
                            },
                            className: "h-7 w-7",
                            viewBox: "-8 -8 16 16",
                            xmlns: "http://www.w3.org/2000/svg",
                            shapeRendering: "crispEdges",
                            children: (0,
                            l.jsx)("path", {
                                d: "M-5-5L+3-5L+3-3L+5-3L+5+5L+3+5L+3-3L-3-3L-3+5L-5+5"
                            })
                        })
                    });
                case "Telegram":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#26A5E4", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#26A5E4"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                            })
                        })
                    });
                case "Soundcloud":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF3300", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF3300"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952"
                            })
                        })
                    });
                case "Spotify":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#1DB954", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#1DB954"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                            })
                        })
                    });
                case "Discord":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#5865F2", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#5865F2"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                            })
                        })
                    });
                case "Snapchat":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FFFC00", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FFFC00"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"
                            })
                        })
                    });
                case "Steam":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
                            })
                        })
                    });
                case "Email":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsxs)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 16 16",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            l.jsx)("path", {
                                d: "M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"
                            }), (0,
                            l.jsx)("path", {
                                d: "M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"
                            })]
                        })
                    });
                case "Facebook":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#0866FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#0866FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                            })
                        })
                    });
                case "TikTok":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                            })
                        })
                    });
                case "WhatsApp":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#25D366", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#25D366"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                            })
                        })
                    });
                case "WeHeartIt":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ff3c8d", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ff3c8d"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 50 50",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8.23 23h4.702c.229 0 .429-.155.484-.377l2.433-9.572 2.57 9.579c.06.218.257.37.483.37h4.763c.218 0 .411-.142.477-.35l5.364-17c.048-.151.021-.317-.073-.446C29.339 5.076 29.189 5 29.03 5h-4.906c-.228 0-.427.153-.483.374l-2.533 9.729-2.341-9.721C18.712 5.158 18.512 5 18.28 5h-4.66c-.233 0-.436.161-.487.389-1.156 5.054-1.864 8.054-2.27 9.735L8.252 5.371C8.188 5.13 7.955 4.985 7.71 5.007H3c-.158 0-.308.075-.402.203C2.504 5.338 2.476 5.502 2.522 5.654l5.23 16.993C7.817 22.856 8.011 23 8.23 23zM46.856 14.836c.095-.096.146-.226.144-.359l-.015-.793c0-6.703-5.263-9.136-8.8-9.136-7.367 0-8.98 6.582-8.98 9.118 0 8.128 5.064 9.834 9.313 9.834 4.182 0 7.037-2.118 8.26-6.126.046-.151.018-.315-.077-.443-.094-.127-.243-.202-.401-.202h-4.197c-.22 0-.414.144-.479.354-.275.907-1.646 1.918-3.173 1.918-1.002 0-1.808-.3-2.394-.891-.898-.906-1.128-2.308-1.182-3.125H46.5C46.634 14.985 46.763 14.932 46.856 14.836zM34.837 12c.405-1.989 1.6-2.996 3.558-2.996.92 0 3.017.305 3.529 2.996H34.837zM33.5 32h-4c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5v-13C34 32.224 33.776 32 33.5 32zM33.5 26h-4c-.276 0-.5.224-.5.5v3c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5v-3C34 26.224 33.776 26 33.5 26zM45.5 32H43v-5.5c0-.276-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5v5.503h-1.5c-.276 0-.5.224-.5.5V35.5c0 .276.224.5.5.5h1.506l.068 5.828c0 2.449 1.458 4.921 4.677 4.921.001 0 .002 0 .003 0 .025.002.361.026.911.026.481 0 1.128-.02 1.874-.089.256-.024.452-.239.453-.497L46 42.251c0-.141-.059-.275-.163-.37-.104-.096-.246-.14-.384-.129l-.101.01c-.211.021-.42.041-.611.041C43 41.803 43 41.462 43 41.03v-5.039l2.509-.043c.272-.005.491-.228.491-.5V32.5C46 32.224 45.776 32 45.5 32zM20.294 26c-2.635 0-3.94 1.37-4.796 2.468C14.63 27.363 13.259 26 10.14 26c-1.4 0-2.914.752-4.151 2.062-1.328 1.407-2.068 3.156-1.981 4.682.008.13.012.26.015.39.008.29.017.582.065.871.399 2.444 1.65 4.619 3.935 6.843 1.738 1.692 3.887 3.23 6.765 4.843l.473.253C15.332 45.98 15.412 46 15.492 46c.085 0 .17-.021.247-.065l.461-.263c2.391-1.401 4.121-2.609 5.611-3.916 1.574-1.388 3.516-3.319 4.562-5.955 1.243-3.118.645-5.954-1.684-7.985C23.271 26.577 21.874 26 20.294 26z"
                            })
                        })
                    });
                case "Kik":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#82BC23", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#82BC23"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.482 16.752c-.01.688-.56 1.242-1.238 1.242-.689 0-1.23-.541-1.244-1.23h-.016v-6.243H9v-.029c0-.693.556-1.256 1.237-1.256s1.236.563 1.236 1.258v.045h.016v6.225h-.016l.009-.012zm11.137-4.889c.75 0 1.381.618 1.381 1.377 0 .76-.631 1.375-1.381 1.375-.766 0-1.395-.615-1.395-1.379 0-.766.615-1.381 1.379-1.381l.016.008zm-2.084 4.186c.121.195.193.432.193.686 0 .703-.553 1.26-1.244 1.26-.463 0-.869-.256-1.08-.631l-2.053-2.746-.631.586v1.635h-.014c-.039.652-.57 1.168-1.225 1.168-.674 0-1.221-.553-1.221-1.238v-.025h-.016v-9.45h.027v-.047c0-.69.551-1.253 1.23-1.253.674 0 1.225.562 1.225 1.253v.07h.016l.01 4.597 2.311-2.261c.229-.255.559-.405.928-.405.689 0 1.248.57 1.248 1.26 0 .346-.133.646-.344.871l.012.015-1.621 1.605 2.281 3.061-.016.016-.016-.027zm-13.246 0c.12.195.195.432.195.686 0 .703-.555 1.26-1.244 1.26-.466 0-.871-.256-1.081-.631l-2.054-2.746-.63.586v1.631H2.46c-.036.654-.57 1.17-1.221 1.17-.676 0-1.225-.555-1.225-1.238v-.027H0V7.29h.031c-.004-.015-.004-.029-.004-.044 0-.69.551-1.252 1.23-1.252.675 0 1.225.559 1.225 1.25v.07h.016l.01 4.6 2.311-2.261c.23-.255.562-.405.931-.405.687 0 1.245.57 1.245 1.26 0 .33-.131.646-.346.871l.016.015-1.627 1.605 2.271 3.061-.016.016-.004-.027z"
                            })
                        })
                    });
                case "PayPal":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#003087", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#003087"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z"
                            })
                        })
                    });
                case "CashApp":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#00C244", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#00C244"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.59 3.475a5.1 5.1 0 00-3.05-3.05c-1.31-.42-2.5-.42-4.92-.42H8.36c-2.4 0-3.61 0-4.9.4a5.1 5.1 0 00-3.05 3.06C0 4.765 0 5.965 0 8.365v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 003.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 003.06-3.06c.41-1.3.41-2.5.41-4.9v-7.25c0-2.41 0-3.61-.41-4.91zm-6.17 4.63l-.93.93a.5.5 0 01-.67.01 5 5 0 00-3.22-1.18c-.97 0-1.94.32-1.94 1.21 0 .9 1.04 1.2 2.24 1.65 2.1.7 3.84 1.58 3.84 3.64 0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 01-.48.39H9.63l-.09-.01a.5.5 0 01-.38-.59l.28-1.27a6.54 6.54 0 01-2.88-1.57v-.01a.48.48 0 010-.68l1-.97a.49.49 0 01.67 0c.91.86 2.13 1.34 3.39 1.32 1.3 0 2.17-.55 2.17-1.42 0-.87-.88-1.1-2.54-1.72-1.76-.63-3.43-1.52-3.43-3.6 0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 01.48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z"
                            })
                        })
                    });
                case "Venmo":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#008CFF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#008CFF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M21.772 13.119c-.267 0-.381-.251-.38-.655 0-.533.121-1.575.712-1.575.267 0 .357.243.357.598 0 .533-.13 1.632-.689 1.632Zm.502-3.377c-1.677 0-2.405 1.285-2.405 2.658 0 1.042.421 1.874 1.693 1.874 1.717 0 2.438-1.406 2.438-2.763 0-1.025-.462-1.769-1.726-1.769Zm-3.833 0c-.558 0-.964.17-1.393.477-.154-.275-.462-.477-.932-.477-.542 0-.947.219-1.247.437l-.04-.364H13.54l-.688 4.354h1.506l.479-3.053c.129-.065.323-.154.518-.154.145 0 .267.049.267.267 0 .056-.016.145-.024.218l-.429 2.722h1.498l.478-3.053c.138-.073.324-.154.51-.154.146 0 .268.049.268.267 0 .056-.017.145-.025.218l-.429 2.722h1.499l.461-2.908c.025-.153.049-.388.049-.549 0-.582-.267-.97-1.037-.97Zm-6.871 0c-.575 0-.98.219-1.287.421l-.017-.348H8.962l-.689 4.354H9.78l.478-3.053c.13-.065.324-.154.518-.154.147 0 .268.049.268.242 0 .081-.024.227-.032.299l-.422 2.666h1.499l.462-2.908c.024-.153.049-.388.049-.549 0-.582-.268-.97-1.03-.97Zm-5.631 1.834c.041-.485.413-.824.697-.824.162 0 .299.097.299.291 0 .404-.713.533-.996.533Zm.843-1.834c-1.604 0-2.382 1.39-2.382 2.698 0 1.01.478 1.817 1.814 1.817.527 0 1.07-.113 1.418-.282l.186-1.26c-.494.25-.874.347-1.271.347-.365 0-.64-.194-.64-.687.826-.008 2.252-.347 2.252-1.453 0-.687-.494-1.18-1.377-1.18Zm-4.239.267c.089.186.146.412.146.743 0 .606-.429 1.494-.777 2.06l-.373-2.989L0 9.969l.705 4.2h1.757c.77-1.01 1.718-2.448 1.718-3.554 0-.347-.073-.622-.235-.889l-1.402.283Z"
                            })
                        })
                    });
                case "Bitcoin":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#F7931A", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#F7931A"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"
                            })
                        })
                    });
                case "Ethereum":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#3C3C3D", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#3C3C3D"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"
                            })
                        })
                    });
                case "Litecoin":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#A6A9AA", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#A6A9AA"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0a12 12 0 1012 12A12 12 0 0012 0zm-.2617 3.6777h2.584a.3425.3425 0 01.33.4356l-2.0312 6.918 1.9062-.582-.4082 1.3847-1.9238.5605-1.248 4.213h6.6757a.3425.3425 0 01.3282.4374l-.582 2a.4586.4586 0 01-.4395.3301H6.7324l1.7227-5.8223-1.9063.5801.42-1.3613 1.9101-.58 2.4219-8.1798a.4557.4557 0 01.4375-.334Z"
                            })
                        })
                    });
                case "Tether":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#50AF95", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#50AF95"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M18.7538 10.5176c0 .6251-2.2379 1.1483-5.2381 1.2812l.0028.0007c-.0848.0064-.5233.0325-1.5012.0325-.7778 0-1.33-.0233-1.5237-.0325-3.0059-.1322-5.2495-.6555-5.2495-1.2819s2.2436-1.149 5.2495-1.2834v2.0442c.1965.0142.7594.0474 1.5372.0474.9334 0 1.4008-.0389 1.4849-.0466V9.2356c2.9994.1337 5.2381.657 5.2381 1.282zm5.19.5466L12.1248 22.389a.1803.1803 0 0 1-.2496 0L.0562 11.0635a.1781.1781 0 0 1-.0382-.2079l4.3762-9.1921a.1767.1767 0 0 1 .1626-.1026h14.8878a.1768.1768 0 0 1 .1612.1032l4.3762 9.1922a.1782.1782 0 0 1-.0382.2079zm-4.478-.4038c0-.8068-2.5515-1.4799-5.9473-1.6369V7.195h4.186V4.4055H6.3076V7.195h4.1852v1.8286c-3.4018.1562-5.9601.83-5.9601 1.6376 0 .8075 2.5583 1.4806 5.9601 1.6376v5.8618h3.025v-5.8639c3.394-.1563 5.948-.8295 5.948-1.6363z"
                            })
                        })
                    });
                case "Monero":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF6600", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF6600"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0C5.365 0 0 5.373 0 12.015c0 1.335.228 2.607.618 3.81h3.577V5.729L12 13.545l7.805-7.815v10.095h3.577c.389-1.203.618-2.475.618-3.81C24 5.375 18.635 0 12 0zm-1.788 15.307l-3.417-3.421v6.351H1.758C3.87 21.689 7.678 24 12 24s8.162-2.311 10.245-5.764h-5.04v-6.351l-3.386 3.421-1.788 1.79-1.814-1.79h-.005z"
                            })
                        })
                    });
                case "Dogecoin":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#C2A633", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#C2A633"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.288 7.908h-1.715v3.38h2.697v1.415h-2.697v3.38h1.799c.462 0 3.794.052 3.789-3.933-.005-3.984-3.232-4.242-3.873-4.242zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.472 18.481H8.126v-5.778H6.594v-1.415h1.532V5.511h3.73c.882 0 6.727-.183 6.727 6.594-.001 6.888-6.111 6.376-6.111 6.376z"
                            })
                        })
                    });
                case "Battle Net":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#4381C3", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#4381C3"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M18.94 8.296C15.9 6.892 11.534 6 7.426 6.332c.206-1.36.714-2.308 1.548-2.508 1.148-.275 2.4.48 3.594 1.854.782.102 1.71.28 2.355.429C12.747 2.013 9.828-.282 7.607.565c-1.688.644-2.553 2.97-2.448 6.094-2.2.468-3.915 1.3-5.013 2.495-.056.065-.181.227-.137.305.034.058.146-.008.194-.04 1.274-.89 2.904-1.373 5.027-1.676.303 3.333 1.713 7.56 4.055 10.952-1.28.502-2.356.536-2.946-.087-.812-.856-.784-2.318-.19-4.04a26.764 26.764 0 0 1-.807-2.254c-2.459 3.934-2.986 7.61-1.143 9.11 1.402 1.14 3.847.725 6.502-.926 1.505 1.672 3.083 2.74 4.667 3.094.084.015.287.043.332-.034.034-.06-.08-.124-.131-.149-1.408-.657-2.64-1.828-3.964-3.515 2.735-1.929 5.691-5.263 7.457-8.988 1.076.86 1.64 1.773 1.398 2.595-.336 1.131-1.615 1.84-3.403 2.185a27.697 27.697 0 0 1-1.548 1.826c4.634.16 8.08-1.22 8.458-3.565.286-1.786-1.295-3.696-4.053-5.17.696-2.139.832-4.04.346-5.588-.029-.08-.106-.27-.196-.27-.068 0-.067.13-.063.187.135 1.547-.263 3.2-1.062 5.19zm-8.533 9.869c-1.96-3.145-3.09-6.849-3.082-10.594 3.702-.124 7.474.748 10.714 2.627-1.743 3.269-4.385 6.1-7.633 7.966h.001z"
                            })
                        })
                    });
                case "Valorant":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FA4454", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FA4454"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.792 2.152a.252.252 0 0 0-.098.083c-3.384 4.23-6.769 8.46-10.15 12.69-.107.093-.025.288.119.265 2.439.003 4.877 0 7.316.001a.66.66 0 0 0 .552-.25c.774-.967 1.55-1.934 2.324-2.903a.72.72 0 0 0 .144-.49c-.002-3.077 0-6.153-.003-9.23.016-.11-.1-.206-.204-.167zM.077 2.166c-.077.038-.074.132-.076.205.002 3.074.001 6.15.001 9.225a.679.679 0 0 0 .158.463l7.64 9.55c.12.152.308.25.505.247 2.455 0 4.91.003 7.365 0 .142.02.222-.174.116-.265C10.661 15.176 5.526 8.766.4 2.35c-.08-.094-.174-.272-.322-.184z"
                            })
                        })
                    });
                case "osu!":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF66AA", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF66AA"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M7.698 10.362c-.1855-.2184-.4189-.3905-.7002-.5162-.2813-.1257-.6104-.1885-.9874-.1885s-.7046.0628-.9829.1885-.5088.2978-.6912.5162c-.1827.2185-.3203.4773-.413.7765-.0928.2993-.1391.6194-.1391.9605 0 .3412.0463.6584.1391.9516.0927.2933.2303.5491.413.7675.1824.2185.4129.3891.6912.5116.2783.1226.6059.1841.9829.1841s.7061-.0615.9875-.1841c.2813-.1226.5146-.2931.7002-.5116.1855-.2184.3231-.4742.413-.7675.0897-.2931.1346-.6104.1346-.9516 0-.3411-.0449-.6612-.1346-.9605-.0899-.2992-.2276-.558-.4131-.7765zm-.965 2.8096c-.1467.2484-.3875.3725-.7227.3725-.3291 0-.567-.1241-.7136-.3725-.1467-.2483-.2199-.6059-.2199-1.0727s.0732-.8243.2199-1.0727c.1466-.2482.3844-.3725.7136-.3725.3352 0 .5759.1243.7227.3725.1466.2484.2199.6059.2199 1.0727.0001.4668-.0733.8245-.2199 1.0727zm11.8894-.8303-.0898-4.3896a4.5409 4.5409 0 0 1 .6912-.0539c.2334 0 .4668.0179.7002.0539l-.0898 4.3896c-.2096.0359-.41.0538-.6015.0538a3.4957 3.4957 0 0 1-.6103-.0538zm1.3196 1.4003c0 .2215-.0179.443-.0538.6643a4.2055 4.2055 0 0 1-.6553.0538 4.1414 4.1414 0 0 1-.6642-.0538 4.0882 4.0882 0 0 1-.0539-.6553c0-.2154.018-.4367.0539-.6643a4.0876 4.0876 0 0 1 .6552-.0538c.2155 0 .4368.018.6643.0538.0359.2276.0538.446.0538.6553zm-3.2226-4.0305c.2095 0 .422.018.6373.0539v4.4614c-.1916.0659-.4443.1302-.7585.193-.3141.0629-.6418.0943-.9829.0943-.3052 0-.5985-.024-.8798-.0718-.2813-.0479-.5282-.1495-.7405-.3052-.2125-.1555-.3815-.3829-.5072-.6823-.1257-.2991-.1885-.697-.1885-1.1938V9.765a3.8725 3.8725 0 0 1 .6373-.0539c.2094 0 .4219.018.6373.0539v2.4596c0 .2455.0194.4474.0584.6059.0388.1586.0988.2843.1795.377a.6606.6606 0 0 0 .3007.1974c.1197.0391.2603.0584.4219.0584.2214 0 .407-.0209.5566-.0628V9.765a3.8218 3.8218 0 0 1 .6284-.0539zm-4.3625 2.6841c.0538.1497.0808.3321.0808.5476 0 .2215-.0464.428-.1392.6194-.0928.1916-.2274.3577-.4039.4982-.1766.1407-.3905.2514-.6418.3322-.2514.0808-.5356.1212-.8528.1212a5.2984 5.2984 0 0 1-.395-.0135 3.1226 3.1226 0 0 1-.3456-.0448 4.0482 4.0482 0 0 1-.3277-.0763 3.9336 3.9336 0 0 1-.35-.1166 2.5768 2.5768 0 0 1 .0852-.4893 3.0737 3.0737 0 0 1 .1751-.4802c.1975.0779.3844.1362.561.1751.1765.039.3605.0584.5521.0584.0838 0 .175-.0075.2738-.0225a.9945.9945 0 0 0 .2737-.0808.6467.6467 0 0 0 .2109-.1526c.0569-.0628.0853-.145.0853-.2469 0-.1436-.0434-.2469-.1302-.3097-.0868-.0628-.208-.1181-.3636-.1661l-.5565-.1616c-.3352-.0956-.5969-.2379-.7855-.4263-.1885-.1886-.2827-.4713-.2827-.8484 0-.4547.163-.8108.4892-1.0682.3261-.2573.7705-.386 1.333-.386.2334 0 .4638.0211.6913.0629.2273.0419.4578.1048.6912.1885-.012.1557-.0419.3173-.0897.4847-.048.1676-.1048.3142-.1706.4398a3.58 3.58 0 0 0-.4757-.1571 2.18 2.18 0 0 0-.5477-.0673c-.2034 0-.3621.0314-.4758.0943-.1137.0629-.1705.1631-.1705.3007 0 .1317.0403.2244.1211.2783.0809.0538.1959.1048.3456.1526l.5117.1526c.1675.048.3187.1063.4533.1751.1347.0688.2498.1541.3456.2558.0958.1016.1707.2272.2246.3768zM12 0C5.3726 0 0 5.3726 0 12.0001 0 18.6273 5.3726 24 12 24c6.6275 0 12-5.3727 12-11.9999C24 5.3726 18.6275 0 12 0zm0 22.8c-5.9647 0-10.8-4.8354-10.8-10.7999C1.2 6.0353 6.0353 1.2 12 1.2s10.8 4.8353 10.8 10.8001C22.8 17.9646 17.9647 22.8 12 22.8z"
                            })
                        })
                    });
                case "Last.fm":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#D51007", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#D51007"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M10.584 17.21l-.88-2.392s-1.43 1.594-3.573 1.594c-1.897 0-3.244-1.649-3.244-4.288 0-3.382 1.704-4.591 3.381-4.591 2.42 0 3.189 1.567 3.849 3.574l.88 2.749c.88 2.666 2.529 4.81 7.285 4.81 3.409 0 5.718-1.044 5.718-3.793 0-2.227-1.265-3.381-3.63-3.931l-1.758-.385c-1.21-.275-1.567-.77-1.567-1.595 0-.934.742-1.484 1.952-1.484 1.32 0 2.034.495 2.144 1.677l2.749-.33c-.22-2.474-1.924-3.492-4.729-3.492-2.474 0-4.893.935-4.893 3.932 0 1.87.907 3.051 3.189 3.601l1.87.44c1.402.33 1.869.907 1.869 1.704 0 1.017-.99 1.43-2.86 1.43-2.776 0-3.93-1.457-4.59-3.464l-.907-2.75c-1.155-3.573-2.997-4.893-6.653-4.893C2.144 5.333 0 7.89 0 12.233c0 4.18 2.144 6.434 5.993 6.434 3.106 0 4.591-1.457 4.591-1.457z"
                            })
                        })
                    });
                case "MyAnimeList":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#2E51A2", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#2E51A2"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8.273 7.247v8.423l-2.103-.003v-5.216l-2.03 2.404-1.989-2.458-.02 5.285H.001L0 7.247h2.203l1.865 2.545 2.015-2.546 2.19.001zm8.628 2.069l.025 6.335h-2.365l-.008-2.871h-2.8c.07.499.21 1.266.417 1.779.155.381.298.751.583 1.128l-1.705 1.125c-.349-.636-.622-1.337-.878-2.082a9.296 9.296 0 0 1-.507-2.179c-.085-.75-.097-1.471.107-2.212a3.908 3.908 0 0 1 1.161-1.866c.313-.293.749-.5 1.1-.687.351-.187.743-.264 1.107-.359a7.405 7.405 0 0 1 1.191-.183c.398-.034 1.107-.066 2.39-.028l.545 1.749H14.51c-.593.008-.878.001-1.341.209a2.236 2.236 0 0 0-1.278 1.92l2.663.033.038-1.81h2.309zm3.992-2.099v6.627l3.107.032-.43 1.775h-4.807V7.187l2.13.03z"
                            })
                        })
                    });
                case "Deezer":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FEAA2D", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FEAA2D"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38h-5.19zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.189v-3.027h-5.19zm6.271 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.81v3.029h5.19v-3.03H0zm6.27 0v3.029h5.189v-3.03h-5.19zm6.271 0v3.029h5.19v-3.03h-5.19zm6.27 0v3.029H24v-3.03h-5.19Z"
                            })
                        })
                    });
                case "Pinterest":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#BD081C", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#BD081C"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
                            })
                        })
                    });
                case "Linkedin":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#0A66C2", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#0A66C2"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            })
                        })
                    });
                case "Tumblr":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#36465D", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#36465D"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"
                            })
                        })
                    });
                case "Keybase":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#33A0FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#33A0FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M10.445 21.372a.953.953 0 1 1-.955-.954c.524 0 .951.43.951.955m5.923-.001a.953.953 0 1 1-.958-.954c.526 0 .954.43.954.955m4.544-9.16l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.06-.094-.113-.141-.169-.104-.12-.21-.239-.32-.359l-.075-.08-.091-.099-.135-.13c-.015-.019-.032-.035-.05-.054a10.87 10.87 0 0 0-3.955-2.504l-.23-.078.035-.083a4.109 4.109 0 0 0-.12-3.255 4.11 4.11 0 0 0-2.438-2.16c-.656-.216-1.23-.319-1.712-.305-.033-.105-.1-.577.496-1.848L10.662 0l-.287.399c-.33.455-.648.895-.945 1.328a1.857 1.857 0 0 0-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003a1.876 1.876 0 0 0 1.755 1.98l1.002.06c-.065.84.073 1.62.405 2.306a11.28 11.28 0 0 0-3.66 2.484C.912 14.392.912 18.052.912 20.995v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06a9.197 9.197 0 0 1-1.68-3.848l1.913-2.03-.985 3.09 1.74-1.267c3.075-2.234 6.745-2.75 10.91-1.53 1.806.533 3.56.04 4.474-1.256l.104-.165c.09.498.14.998.14 1.496 0 1.563-.254 3.687-1.38 5.512h1.612c.776-1.563 1.181-3.432 1.181-5.512-.001-2.2-.786-4.421-2.184-6.274zM8.894 6.192c.122-1.002.577-1.949 1.23-2.97a1.36 1.36 0 0 0 1.283.749c.216-.008.604.025 1.233.232a2.706 2.706 0 0 1 1.608 1.425c.322.681.349 1.442.079 2.15a2.69 2.69 0 0 1-.806 1.108l-.408-.502-.002-.003a1.468 1.468 0 0 0-2.06-.205c-.334.27-.514.66-.534 1.058-1.2-.54-1.8-1.643-1.628-3.04zm4.304 5.11l-.52.425a.228.228 0 0 1-.323-.032l-.11-.135a.238.238 0 0 1 .034-.334l.51-.42-1.056-1.299a.307.307 0 0 1 .044-.436.303.303 0 0 1 .435.041l2.963 3.646a.309.309 0 0 1-.168.499.315.315 0 0 1-.31-.104l-.295-.365-1.045.854a.244.244 0 0 1-.154.055.237.237 0 0 1-.186-.09l-.477-.58a.24.24 0 0 1 .035-.335l1.05-.858-.425-.533zM7.752 4.866l-1.196-.075a.463.463 0 0 1-.435-.488l.09-1.4a.462.462 0 0 1 .461-.437h.024l1.401.091a.459.459 0 0 1 .433.488l-.007.101a9.27 9.27 0 0 0-.773 1.72zm12.525 11.482c-.565.805-1.687 1.08-2.924.718-3.886-1.141-7.397-.903-10.469.7l1.636-5.122-5.29 5.609c.098-3.762 2.452-6.967 5.757-8.312.471.373 1.034.66 1.673.841.16.044.322.074.48.102a1.41 1.41 0 0 0 .21 1.408l.075.09c-.172.45-.105.975.221 1.374l.476.582a1.39 1.39 0 0 0 1.079.513c.32 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113a1.45 1.45 0 0 0 .928-.326c.623-.51.72-1.435.209-2.06l-1.67-2.057a4.07 4.07 0 0 0 .408-.38c.135.036.27.077.4.12.266.096.533.197.795.314a9.55 9.55 0 0 1 2.77 1.897c.03.03.06.055.086.083l.17.176c.038.039.076.079.11.12.08.085.16.175.24.267l.126.15c.045.053.086.104.13.16l.114.15c.04.05.079.102.117.154.838 1.149.987 2.329.404 3.157v.005zM7.718 4.115l-.835-.05.053-.836.834.051z"
                            })
                        })
                    });
                case "Ebay":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#E53238", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#E53238"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M6.056 12.132v-4.92h1.2v3.026c.59-.703 1.402-.906 2.202-.906 1.34 0 2.828.904 2.828 2.855 0 .233-.015.457-.06.668.24-.953 1.274-1.305 2.896-1.344.51-.018 1.095-.018 1.56-.018v-.135c0-.885-.556-1.244-1.53-1.244-.72 0-1.245.3-1.305.81h-1.275c.136-1.29 1.5-1.62 2.686-1.62 1.064 0 1.995.27 2.415 1.02l-.436-.84h1.41l2.055 4.125 2.055-4.126H24l-3.72 7.305h-1.346l1.07-2.04-2.33-4.38c.13.255.2.555.2.93v2.46c0 .346.01.69.04 1.005H16.8a6.543 6.543 0 01-.046-.765c-.603.734-1.32.96-2.32.96-1.48 0-2.272-.78-2.272-1.695 0-.15.015-.284.037-.405-.3 1.246-1.36 2.086-2.767 2.086-.87 0-1.694-.315-2.2-.93 0 .24-.015.494-.04.734h-1.18c.02-.39.04-.855.04-1.245v-1.05h-4.83c.065 1.095.818 1.74 1.853 1.74.718 0 1.355-.3 1.568-.93h1.24c-.24 1.29-1.61 1.725-2.79 1.725C.95 15.009 0 13.822 0 12.232c0-1.754.982-2.91 3.116-2.91 1.688 0 2.93.886 2.94 2.806v.005zm9.137.183c-1.095.034-1.77.233-1.77.95 0 .465.36.97 1.305.97 1.26 0 1.935-.69 1.935-1.814v-.13c-.45 0-.99.006-1.484.022h.012zm-6.06 1.875c1.11 0 1.876-.806 1.876-2.02s-.768-2.02-1.893-2.02c-1.11 0-1.89.806-1.89 2.02s.765 2.02 1.875 2.02h.03zm-4.35-2.514c-.044-1.125-.854-1.546-1.725-1.546-.944 0-1.694.474-1.815 1.546z"
                            })
                        })
                    });
                case "Stake":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 396.11 197.92",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsxs)("g", {
                                id: "Layer_5",
                                "data-name": "Layer 5",
                                children: [(0,
                                l.jsx)("path", {
                                    d: "M25.68,56.89c-.1-26.47,16.84-41.15,47.94-41.26C96,15.55,100,30.19,100,35.51c0,10.19-14.42,21-14.42,21s.8,6.35,13.18,6.3,24.44-8.22,24.37-28.67C123.07,10.65,98.46-.09,74.13,0,53.78.07-.19,2.93,0,56.51c.18,47.59,90,51.79,90.07,82.26.12,33.09-37,42-49.56,42S22.84,171.88,22.82,167c-.09-26.8,26.58-34.26,26.58-34.26,0-2-1.56-10.91-11.89-10.87C10.9,121.92.3,144.8.38,167.14c.07,19,13.5,30.86,33.78,30.78,38.78-.14,82.51-19.06,82.35-61.08C116.37,97.54,25.79,87.28,25.68,56.89Z"
                                }), (0,
                                l.jsx)("path", {
                                    d: "M395.37,162.18c-.31-.75-1.18-.57-2.33.38-4.4,3.63-14.46,13.91-38,14-42.92.16-50.37-70.58-50.37-70.58s32.71-24.42,37.82-34.27-11.15-12-11.15-12-22.88,27.84-39.1,36C294,83.6,306,56,306.69,40.13s-19.11-12-22.27-10.48c0,6.93-17.49,69.84-23.86,104.42-3.75,6-9.11,12.86-13.91,12.87-2.78,0-3.8-5.15-3.83-12.53,0-10.24,5.64-26.65,5.6-36.62,0-6.9-3.17-7.31-5.9-7.3-.59,0-3.87.09-4.47.09-7,0-4.7-6-11-5.94-19.28.07-43.84,21.12-44.91,52.89-6.51,4.31-15.62,9.74-20.27,9.76-4.88,0-6.09-4.51-6.1-8.41,0-6.85,11.08-47.55,11.08-47.55s14.11-3.62,20.27-4.81c4.66-.91,6-1.25,7.81-3.5s5.35-6.9,8.21-11.08.05-7.41-5.24-7.39c-6.94,0-25.51,4.4-25.51,4.4s8.92-38.46,8.91-39.24-1-1.19-2.51-1.18c-3.38,0-9.41,1.82-13.27,3.2-5.91,2.11-10.72,9.35-11.69,12.72s-7.65,29.76-7.65,29.76-35.77,12.35-40.66,14.2a.74.74,0,0,0-.5.7c0,.32,4.09,16,12.48,15.94,6,0,23.63-7.22,23.63-7.22s-9.06,36-9,48c0,7.7,3.63,16.72,18.67,16.67,14,0,26.25-7.23,33.11-12.26,3.75,9.49,12.61,12.09,18.66,12.07,13.56,0,24-10.82,25.34-12.27,1.76,4.16,5.91,12.15,15.39,12.12,5.36,0,10.91-6,15-11.82a23.38,23.38,0,0,0,.05,3.63c1.64,14.92,23.79,6.15,25,4.07.75-10.79.28-32.85,4.59-46.47,5.72,46.46,27.42,77.71,66.43,77.57,21.81-.08,33-6.35,37.63-11.52A15.9,15.9,0,0,0,395.37,162.18ZM208.2,146.86c-18.73.07,5.73-48.48,21.71-48.54C229.93,104.58,229.58,146.79,208.2,146.86Z"
                                }), (0,
                                l.jsx)("path", {
                                    d: "M360.26,161.74c16.91-.06,30-11.19,32.4-14.81,3.1-4.71-3.6-11.82-5.73-11.7-5.34,5.11-10.92,11.29-23.45,11.33-14.75.06-11.41-16.17-11.41-16.17s28.39,3.67,39.8-16.74c3.65-6.53,3.8-15.56,2.33-19.45s-9.73-11.09-22.87-10c-16.14,1.36-36.48,18.19-40.95,38.4C326.79,138.86,333.58,161.84,360.26,161.74Zm18-68.1c2.66-.09,2.42,4.29,1.71,8.87-1,6.21-9.53,22-25.81,21.38C355.29,114.7,367.4,94,378.29,93.64Z"
                                })]
                            })
                        })
                    });
                case "4chan":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#006600", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#006600"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.07 8.82S9.803 1.079 5.145 1.097C2.006 1.109.78 4.124 3.055 4.802c0 0-2.698.973-2.698 2.697 0 1.725 4.274 3.54 10.713 1.32zm1.931 5.924s.904 7.791 5.558 7.991c3.136.135 4.503-2.82 2.262-3.604 0 0 2.74-.845 2.82-2.567.08-1.723-4.105-3.737-10.64-1.82zm-3.672-1.55s-7.532 2.19-6.952 6.813c.39 3.114 3.53 3.969 3.93 1.63 0 0 1.29 2.559 3.002 2.351 1.712-.208 3-4.67.02-10.794zm5.623-2.467s7.727-1.35 7.66-6.008c-.046-3.138-3.074-4.333-3.728-2.051 0 0-1-2.686-2.726-2.668-1.724.018-3.494 4.312-1.206 10.727z"
                            })
                        })
                    });
                case "WeChat":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#07C160", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#07C160"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
                            })
                        })
                    });
                case "Onlyfans":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#00AFF0", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#00AFF0"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M24 4.003h-4.015c-3.45 0-5.3.197-6.748 1.957a7.996 7.996 0 1 0 2.103 9.211c3.182-.231 5.39-2.134 6.085-5.173 0 0-2.399.585-4.43 0 4.018-.777 6.333-3.037 7.005-5.995zM5.61 11.999A2.391 2.391 0 0 1 9.28 9.97a2.966 2.966 0 0 1 2.998-2.528h.008c-.92 1.778-1.407 3.352-1.998 5.263A2.392 2.392 0 0 1 5.61 12Zm2.386-7.996a7.996 7.996 0 1 0 7.996 7.996 7.996 7.996 0 0 0-7.996-7.996Zm0 10.394A2.399 2.399 0 1 1 10.395 12a2.396 2.396 0 0 1-2.399 2.398Z"
                            })
                        })
                    });
                case "Threads":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"
                            })
                        })
                    });
                case "Xbox":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#107C10", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#107C10"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912C23.002 17.48 24 14.861 24 12.004c0-3.34-1.365-6.362-3.57-8.536 0 0-.027-.022-.082-.042-.063-.022-.152-.045-.281-.045-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042C1.365 5.642 0 8.664 0 12.004c0 2.854.998 5.473 2.661 7.533-1.401-2.605 3.579-9.951 6.08-12.91-2.82-2.813-4.216-3.245-4.806-3.245-.131 0-.223.021-.281.046v-.002zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085-.068-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.545v.006z"
                            })
                        })
                    });
                case "PlayStation":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#003791", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#003791"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z"
                            })
                        })
                    });
                case "BuyMeACoffee":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FFDD00", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FFDD00"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"
                            })
                        })
                    });
                case "Patreon":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"
                            })
                        })
                    });
                case "Roblox":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M5.164 0 .16 18.928 18.836 24 23.84 5.072Zm8.747 15.354-5.219-1.417 1.399-5.29 5.22 1.418-1.4 5.29z"
                            })
                        })
                    });
                case "VK":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#0077FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#0077FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "m9.489.004.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z"
                            })
                        })
                    });
                case "Mastodon":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#6364FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#6364FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"
                            })
                        })
                    });
                case "Matrix":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"
                            })
                        })
                    });
                case "Epic Games":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#313131", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#313131"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M3.537 0C2.165 0 1.66.506 1.66 1.879V18.44a4.262 4.262 0 00.02.433c.031.3.037.59.316.92.027.033.311.245.311.245.153.075.258.13.43.2l8.335 3.491c.433.199.614.276.928.27h.002c.314.006.495-.071.928-.27l8.335-3.492c.172-.07.277-.124.43-.2 0 0 .284-.211.311-.243.28-.33.285-.621.316-.92a4.261 4.261 0 00.02-.434V1.879c0-1.373-.506-1.88-1.878-1.88zm13.366 3.11h.68c1.138 0 1.688.553 1.688 1.696v1.88h-1.374v-1.8c0-.369-.17-.54-.523-.54h-.235c-.367 0-.537.17-.537.539v5.81c0 .369.17.54.537.54h.262c.353 0 .523-.171.523-.54V8.619h1.373v2.143c0 1.144-.562 1.71-1.7 1.71h-.694c-1.138 0-1.7-.566-1.7-1.71V4.82c0-1.144.562-1.709 1.7-1.709zm-12.186.08h3.114v1.274H6.117v2.603h1.648v1.275H6.117v2.774h1.74v1.275h-3.14zm3.816 0h2.198c1.138 0 1.7.564 1.7 1.708v2.445c0 1.144-.562 1.71-1.7 1.71h-.799v3.338h-1.4zm4.53 0h1.4v9.201h-1.4zm-3.13 1.235v3.392h.575c.354 0 .523-.171.523-.54V4.965c0-.368-.17-.54-.523-.54zm-3.74 10.147a1.708 1.708 0 01.591.108 1.745 1.745 0 01.49.299l-.452.546a1.247 1.247 0 00-.308-.195.91.91 0 00-.363-.068.658.658 0 00-.28.06.703.703 0 00-.224.163.783.783 0 00-.151.243.799.799 0 00-.056.299v.008a.852.852 0 00.056.31.7.7 0 00.157.245.736.736 0 00.238.16.774.774 0 00.303.058.79.79 0 00.445-.116v-.339h-.548v-.565H7.37v1.255a2.019 2.019 0 01-.524.307 1.789 1.789 0 01-.683.123 1.642 1.642 0 01-.602-.107 1.46 1.46 0 01-.478-.3 1.371 1.371 0 01-.318-.455 1.438 1.438 0 01-.115-.58v-.008a1.426 1.426 0 01.113-.57 1.449 1.449 0 01.312-.46 1.418 1.418 0 01.474-.309 1.58 1.58 0 01.598-.111 1.708 1.708 0 01.045 0zm11.963.008a2.006 2.006 0 01.612.094 1.61 1.61 0 01.507.277l-.386.546a1.562 1.562 0 00-.39-.205 1.178 1.178 0 00-.388-.07.347.347 0 00-.208.052.154.154 0 00-.07.127v.008a.158.158 0 00.022.084.198.198 0 00.076.066.831.831 0 00.147.06c.062.02.14.04.236.061a3.389 3.389 0 01.43.122 1.292 1.292 0 01.328.17.678.678 0 01.207.24.739.739 0 01.071.337v.008a.865.865 0 01-.081.382.82.82 0 01-.229.285 1.032 1.032 0 01-.353.18 1.606 1.606 0 01-.46.061 2.16 2.16 0 01-.71-.116 1.718 1.718 0 01-.593-.346l.43-.514c.277.223.578.335.9.335a.457.457 0 00.236-.05.157.157 0 00.082-.142v-.008a.15.15 0 00-.02-.077.204.204 0 00-.073-.066.753.753 0 00-.143-.062 2.45 2.45 0 00-.233-.062 5.036 5.036 0 01-.413-.113 1.26 1.26 0 01-.331-.16.72.72 0 01-.222-.243.73.73 0 01-.082-.36v-.008a.863.863 0 01.074-.359.794.794 0 01.214-.283 1.007 1.007 0 01.34-.185 1.423 1.423 0 01.448-.066 2.006 2.006 0 01.025 0zm-9.358.025h.742l1.183 2.81h-.825l-.203-.499H8.623l-.198.498h-.81zm2.197.02h.814l.663 1.08.663-1.08h.814v2.79h-.766v-1.602l-.711 1.091h-.016l-.707-1.083v1.593h-.754zm3.469 0h2.235v.658h-1.473v.422h1.334v.61h-1.334v.442h1.493v.658h-2.255zm-5.3.897l-.315.793h.624zm-1.145 5.19h8.014l-4.09 1.348z"
                            })
                        })
                    });
                case "Revolt":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF4655", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF4655"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M17.005 7.796c0 1.88-1.023 3.009-3.207 3.009h-3.615v-5.95H13.8c2.183 0 3.206 1.162 3.206 2.94zM.853 0l3.5 4.866v19.133h5.832v-9.06h1.398L16.563 24h6.583l-5.525-9.504a6.966 6.966 0 0 0 3.879-2.532 7 7 0 0 0 1.44-4.408C22.94 3.384 20.009 0 14.143 0h-9.79z"
                            })
                        })
                    });
                case "Guilded":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#F5C400", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#F5C400"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M5.297 6.255s.02 2.846 1.481 5.79c1.502 2.834 3.572 4.654 5.28 5.38 1.765-.826 3.47-2.258 4.4-3.8h-4.845c-1.253-1.04-2.24-2.763-2.466-4.755H23.36c-.701 3.203-2.188 6.116-3.605 7.971a17.108 17.108 0 01-7.686 5.659h-.045c-5.098-2.031-7.84-5.23-9.65-8.84C1.214 11.347 0 7.147 0 1.5h24a34.23 34.23 0 01-.32 4.755z"
                            })
                        })
                    });
                case "Skype":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#00AFF0", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#00AFF0"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.24c.015.045.044.074.059.12.12-.675.181-1.363.181-2.052 0-1.529-.301-3.012-.898-4.42-.569-1.348-1.395-2.562-2.427-3.596-1.049-1.033-2.247-1.856-3.595-2.426-1.318-.631-2.801-.93-4.328-.93-.72 0-1.444.07-2.143.204l.119.06-.239-.033.119-.025C8.91.274 7.829 0 6.731 0c-1.789 0-3.47.698-4.736 1.967C.729 3.235.032 4.923.032 6.716c0 1.143.292 2.265.844 3.258l.02-.124.041.239-.06-.115c-.114.645-.172 1.299-.172 1.955 0 1.53.3 3.017.884 4.416.568 1.362 1.378 2.576 2.427 3.609 1.034 1.05 2.247 1.857 3.595 2.442 1.394.6 2.877.898 4.404.898.659 0 1.334-.06 1.977-.179l-.119-.062.24.046-.135.03c1.002.569 2.126.871 3.294.871 1.783 0 3.459-.69 4.733-1.963 1.259-1.259 1.962-2.951 1.962-4.749 0-1.138-.299-2.262-.853-3.266"
                            })
                        })
                    });
                case "TeamSpeak":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#4B69B6", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#4B69B6"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.005.605h-.09l-.028.001h-.064l-.03.001-.07.001-.02.001-.09.003h-.022l-.07.003-.03.001-.063.003L11.4.62l-.09.005-.09.006h-.015l-.01.001-.064.005-.03.002-.07.005-.02.002-.088.008-.02.001-.07.007-.027.003-.065.006-.025.003-.088.01-.09.01-.023.003-.066.008-.008.002-.015.002h-.003l-.073.01-.015.002-.05.007-.04.006-.014.002-.073.01-.024.005-.07.01-.02.004-.088.015-.035.006-.018.004-.035.006-.02.003-.07.013-.02.004-.08.015h-.003l-.004.001-.005.001-.087.018-.007.002H9.57l-.034.008-.043.01-.018.002L9.4.89l-.013.003-.09.02-.09.02-.01.003-.08.02-.011.003-.087.022-.092.024-.088.024-.01.002-.084.024h-.003l-.09.026-.091.027H8.56l-.073.023-.01.003-.005.002h-.003l-.028.01a6.02 6.02 0 0 0-.19.062l-.08.025-.257.091-.075.027a8.04 8.04 0 0 0-.305.12c-.02.007-.041.014-.061.023l-.144.06a12.574 12.574 0 0 0-.53.24l-.07.034-.08.04c-.17.085-.34.174-.506.267-.154.18-.304.362-.45.548l-.06.08-.036.043.005-.003c-.037.048-.072.098-.11.146-.077.103-.156.205-.231.31-.057.08-.112.162-.167.243-.081.118-.163.234-.24.355-.054.083-.105.168-.158.25-.074.12-.15.24-.22.362-.051.085-.1.172-.148.258-.07.126-.141.25-.21.38-.044.086-.09.174-.132.26a16.1 16.1 0 0 0-.187.379c-.045.096-.088.193-.132.29a16.02 16.02 0 0 0-.433 1.063l-.05.128.009-.012c-.127.357-.245.717-.348 1.084l-.107.049a4.673 4.673 0 0 0-.015.006 4.75 4.75 0 0 0-.56.307 4.673 4.673 0 0 0-.035.022 4.693 4.693 0 0 0-.493.37 4.673 4.673 0 0 0-.045.038 4.705 4.705 0 0 0-.427.427 4.673 4.673 0 0 0-.044.05 4.692 4.692 0 0 0-.366.488 4.673 4.673 0 0 0-.025.04 4.663 4.663 0 0 0-.302.553 4.673 4.673 0 0 0-.01.024 4.638 4.638 0 0 0-.227.606 4.673 4.673 0 0 0-.003.013c-.06.208-.108.42-.14.64a4.673 4.673 0 0 0 0 .01 4.7 4.7 0 0 0 0 1.318 4.673 4.673 0 0 0 0 .01c.032.218.08.432.14.64a4.673 4.673 0 0 0 .004.014c.061.208.137.41.226.605a4.673 4.673 0 0 0 .01.024c.09.192.19.377.303.554a4.673 4.673 0 0 0 .024.038c.112.172.235.336.368.49a4.673 4.673 0 0 0 .041.049c.133.15.275.293.426.426a4.673 4.673 0 0 0 .048.04c.155.134.318.256.49.367a4.673 4.673 0 0 0 .04.027c.178.113.364.215.557.304a4.673 4.673 0 0 0 .015.006c.197.09.4.166.61.228a4.673 4.673 0 0 0 .017.005c.207.06.42.107.637.138a4.673 4.673 0 0 0 .012.002 4.698 4.698 0 0 0 1.315 0 4.673 4.673 0 0 0 .012-.002c.218-.031.43-.078.637-.138a4.673 4.673 0 0 0 .017-.005 4.67 4.67 0 0 0 .609-.227 4.673 4.673 0 0 0 .017-.008c.192-.09.378-.19.555-.303a4.673 4.673 0 0 0 .042-.027c.17-.111.335-.234.49-.366a4.673 4.673 0 0 0 .045-.04c.152-.133.295-.277.429-.43a4.673 4.673 0 0 0 .039-.044c.134-.156.257-.32.37-.493a4.673 4.673 0 0 0 .02-.035 4.62 4.62 0 0 0 .306-.557 4.673 4.673 0 0 0 .01-.021c.089-.197.165-.4.227-.61a4.673 4.673 0 0 0 .002-.008c.06-.208.108-.421.14-.64a4.673 4.673 0 0 0 0-.02 4.698 4.698 0 0 0 .04-.881 4.673 4.673 0 0 0 0-.002c0-.05-.005-.098-.01-.147a4.673 4.673 0 0 0-.006-.085 4.176 4.176 0 0 0-.028-.222 4.673 4.673 0 0 0 0-.005 4.606 4.606 0 0 0-.304-1.098 4.673 4.673 0 0 0 0-.001c-.03-.07-.061-.14-.094-.21a4.673 4.673 0 0 0-.002-.003 4.528 4.528 0 0 0-.083-.165 4.673 4.673 0 0 0-.02-.04l-.07-.123a4.673 4.673 0 0 0-.05-.085l-.037-.06a4.673 4.673 0 0 0-.087-.137l-.012-.016A4.673 4.673 0 0 0 7.14 8.635c-.018-.011-.035-.023-.053-.033a4.673 4.673 0 0 0-.096-.055c-.036-.021-.072-.043-.11-.063a4.673 4.673 0 0 0-.044-.022 4.636 4.636 0 0 0-1.368-.464 13.673 13.673 0 0 1 3.39-5.233 10.301 10.301 0 0 1 3.147-.493c5.7 0 10.329 4.629 10.33 10.329v.002c0 2.13-.647 4.11-1.753 5.756l-.013.018C18.5 21.46 14.682 23.57 9.503 23.02l.02.016c5.2 1.138 9.375-.545 11.882-3.46l-.018.026a10.7 10.7 0 0 0 .308-.372c.018-.023.035-.048.054-.071.094-.122.186-.245.275-.37l.1-.146a10.726 10.726 0 0 0 .506-.816l.076-.133c.173-.32.329-.647.469-.981l.062-.158a10.68 10.68 0 0 0 .314-.901c.016-.053.033-.105.047-.157a9.7 9.7 0 0 0 .136-.527l.003-.018c.039-.17.072-.343.103-.516l.025-.16a10.6 10.6 0 0 0 .108-.95c.004-.06.01-.118.012-.177.009-.181.015-.363.015-.545C24.001 5.982 18.626.605 12.005.605zm.232 3.277c1.363 1.373 2.135 3.205 2.41 5.229.104.765-.046 1.61-.77 2.13-.058.333.115.696.267 1.055.388.92.98 1.757 1.408 2.642.384.798-.632 1.388-1.374 1.63a6.24 6.24 0 0 1-.275.084c.048.383.274.67.215 1.003a.98.98 0 0 1-.372.6s.28.878-.38 1.26c-.152.087-.33.104-.364.34-.064.468-.134.926-.504 1.307-.056.057-.115.11-.177.159 4.326-.152 7.97-3.507 8.372-7.93.435-4.794-3.104-9.04-7.9-9.476a8.865 8.865 0 0 0-.556-.034zm-1.973.17a8.68 8.68 0 0 0-2.003.672c.388.134.736.316.97.534 1.09 1.01 1.629 2.003 1.93 3.383.267 1.218.395 1.809-.245 2.253-.865.6.923 3.164 1.272 3.906-.46.592-1.062.579-1.38.743-.176.09-.103.426-.074.685.028.254.26.413.133.61-.114.175-.55.188-.737.31.182.2.585.399.53.658-.04.2-.492.166-.666.622-.093.245-.045.698-.238.927-.448.53-.917.62-1.85.517a15.94 15.94 0 0 1-.908-.127 8.61 8.61 0 0 0 2.263 1.137c.25.082.517.11.78.082.492-.046.834-.226 1.166-.62.22-.26.165-.776.27-1.054.199-.52.713-.478.76-.706.06-.296-.398-.523-.604-.75.214-.138.707-.153.838-.353.145-.223-.12-.404-.152-.693-.032-.294-.115-.676.085-.78.36-.186 1.045-.172 1.569-.844-.397-.844-2.43-3.76-1.447-4.442.728-.506.583-1.177.28-2.563-.344-1.57-.957-2.698-2.195-3.847a2.214 2.214 0 0 0-.347-.26Z"
                            })
                        })
                    });
                case "Gitlab":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FC6D26", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FC6D26"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"
                            })
                        })
                    });
                case "NPM":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#CB3837", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#CB3837"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
                            })
                        })
                    });
                case "Codepen":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z"
                            })
                        })
                    });
                case "Element":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#0DBD8B", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#0DBD8B"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.314 4.715c3.289 0 5.956 2.66 5.956 5.943 0 .484-.394.877-.879.877s-.879-.393-.879-.877c0-2.313-1.88-4.189-4.198-4.189-.486 0-.879-.393-.879-.877s.392-.877.879-.877zm-5.092 9.504c-.486 0-.879-.394-.879-.877 0-3.283 2.666-5.945 5.956-5.945.485 0 .879.393.879.877s-.394.876-.879.876c-2.319 0-4.198 1.877-4.198 4.191 0 .484-.395.878-.879.878zm7.735 5.067c-3.29 0-5.957-2.662-5.957-5.944 0-.484.394-.878.879-.878s.879.394.879.878c0 2.313 1.88 4.189 4.199 4.189.485 0 .879.393.879.877 0 .486-.394.878-.879.878zm0-2.683c-.485 0-.88-.393-.88-.876 0-.484.395-.878.88-.878 2.318 0 4.199-1.876 4.199-4.19 0-.484.393-.877.879-.877.485 0 .879.393.879.877 0 3.282-2.667 5.944-5.957 5.944z"
                            })
                        })
                    });
                case "BeReal":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M6.501 10.727c.593 0 1.029.196 1.307.587.279.393.418.857.418 1.391v.312H5.674a.97.97 0 0 0 .343.596c.182.148.422.223.718.223.172 0 .327-.023.464-.066.163-.055.324-.119.48-.192l.297.733a1.73 1.73 0 0 1-.644.296c-.252.063-.46.093-.62.093-.656 0-1.172-.18-1.55-.537-.377-.36-.565-.84-.565-1.441 0-.603.17-1.086.51-1.45.342-.364.806-.545 1.394-.545Zm8.835 0c.593 0 1.028.196 1.307.587.278.393.417.857.417 1.391v.312h-2.552c.038.235.16.447.344.596.182.148.421.223.718.223.171 0 .326-.023.464-.066a4.53 4.53 0 0 0 .48-.192l.297.733a1.728 1.728 0 0 1-.644.296 2.67 2.67 0 0 1-.62.093c-.656 0-1.173-.18-1.55-.537-.377-.36-.566-.84-.566-1.441 0-.603.17-1.086.512-1.45.34-.364.805-.545 1.393-.545Zm3.875.041c.974 0 1.603.502 1.603 1.26v2.579h-1.027v-.561h-.02c-.215.385-.616.62-1.111.62-.756 0-1.265-.473-1.265-1.136v-.008c0-.683.53-1.083 1.465-1.144l.931-.055v-.231c0-.335-.217-.541-.618-.541-.383 0-.615.18-.664.421l-.007.03h-.939l.004-.04c.056-.696.653-1.194 1.648-1.194Zm4.789 2.8v1.039h-1.04v-1.039H24ZM1.982 9.308c.515 0 .934.114 1.257.34.322.225.484.607.484 1.14 0 .198-.046.376-.137.534-.09.16-.21.296-.355.41.24.125.436.294.59.506.153.213.23.483.23.81 0 .489-.171.871-.512 1.146-.34.275-.795.413-1.362.413H0V9.308h1.982Zm8.702 0c.578 0 1.072.133 1.483.398.411.265.617.675.617 1.231 0 .327-.085.609-.254.846a1.714 1.714 0 0 1-.652.549l1.304 2.275h-1.077l-1.124-2.025a3.626 3.626 0 0 1-.367.015h-.585v2.01H9.022V9.308h1.662ZM22.448 9.3v5.307h-1.076V9.3h1.076Zm-2.66 3.661-.777.049c-.397.025-.605.192-.605.46v.007c0 .277.229.442.584.442.46 0 .797-.294.797-.688l.001-.27ZM2.17 12.285H1.007v1.489h1.092c.27 0 .488-.063.652-.188a.622.622 0 0 0 .246-.53c0-.25-.076-.44-.226-.572-.151-.132-.352-.199-.601-.199Zm4.308-.694a.75.75 0 0 0-.523.19c-.14.128-.232.315-.273.558h1.584c-.052-.253-.146-.442-.281-.564a.73.73 0 0 0-.507-.184Zm8.834 0a.75.75 0 0 0-.523.19c-.14.128-.231.315-.273.558h1.585c-.053-.253-.146-.442-.281-.564a.73.73 0 0 0-.508-.184Zm-4.659-1.441h-.624v1.62h.64c.301 0 .551-.06.749-.182.198-.122.296-.324.296-.604 0-.297-.093-.51-.28-.639-.188-.13-.448-.195-.781-.195Zm-8.819 0h-.827v1.316h.749c.281 0 .5-.053.66-.16.158-.105.238-.273.238-.501 0-.25-.073-.422-.219-.515-.146-.093-.346-.14-.601-.14Z"
                            })
                        })
                    });
                case "Bilibili":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#00A1D6", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#00A1D6"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"
                            })
                        })
                    });
                case "Itch":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FA5C5C", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FA5C5C"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"
                            })
                        })
                    });
                case "Faceit":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF5500", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF5500"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.999 2.705a.167.167 0 00-.312-.1 1141.27 1141.27 0 00-6.053 9.375H.218c-.221 0-.301.282-.11.352 7.227 2.73 17.667 6.836 23.5 9.134.15.06.39-.08.39-.18z"
                            })
                        })
                    });
                case "Bandcamp":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#408294", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#408294"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M0 18.75l7.437-13.5H24l-7.438 13.5H0z"
                            })
                        })
                    });
                case "Rumble":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#85C742", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#85C742"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M14.4528 13.5458c.8064-.6542.9297-1.8381.2756-2.6445a1.8802 1.8802 0 0 0-.2756-.2756 21.2127 21.2127 0 0 0-4.3121-2.776c-1.066-.51-2.256.2-2.4261 1.414a23.5226 23.5226 0 0 0-.14 5.5021c.116 1.23 1.292 1.964 2.372 1.492a19.6285 19.6285 0 0 0 4.5062-2.704v-.008zm6.9322-5.4002c2.0335 2.228 2.0396 5.637.014 7.8723A26.1487 26.1487 0 0 1 8.2946 23.846c-2.6848.6713-5.4168-.914-6.1662-3.5781-1.524-5.2002-1.3-11.0803.17-16.3045.772-2.744 3.3521-4.4661 6.0102-3.832 4.9242 1.174 9.5443 4.196 13.0764 8.0121v.002z"
                            })
                        })
                    });
                case "Replit":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#F26207", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#F26207"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5ZM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12ZM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5Z"
                            })
                        })
                    });
                case "Ubisoft":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.561 11.988C23.301-.304 6.954-4.89.656 6.634c.282.206.661.477.943.672a11.747 11.747 0 00-.976 3.067 11.885 11.885 0 00-.184 2.071C.439 18.818 5.621 24 12.005 24c6.385 0 11.556-5.17 11.556-11.556v-.455zm-20.27 2.06c-.152 1.246-.054 1.636-.054 1.788l-.282.098c-.108-.206-.37-.932-.488-1.908C2.163 10.308 4.7 6.96 8.57 6.33c3.544-.52 6.937 1.68 7.728 4.758l-.282.098c-.087-.087-.228-.336-.77-.878-4.281-4.281-11.002-2.32-11.956 3.74zm11.002 2.081a3.145 3.145 0 01-2.59 1.355 3.15 3.15 0 01-3.155-3.155 3.159 3.159 0 012.927-3.144c1.018-.043 1.972.51 2.416 1.398a2.58 2.58 0 01-.455 2.95c.293.205.575.4.856.595zm6.58.12c-1.669 3.782-5.106 5.766-8.77 5.712-7.034-.347-9.083-8.466-4.38-11.393l.207.206c-.076.108-.358.325-.791 1.182-.51 1.041-.672 2.081-.607 2.732.369 5.67 8.314 6.83 11.045 1.214C21.057 8.217 11.822.401 3.626 6.374l-.184-.184C5.599 2.808 9.816 1.3 13.837 2.309c6.147 1.55 9.453 7.956 7.035 13.94z"
                            })
                        })
                    });
                case "Rockstar":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FCAF17", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FCAF17"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M5.971 6.816h3.241c1.469 0 2.741-.448 2.741-2.084 0-1.3-1.117-1.576-2.19-1.576H6.748l-.777 3.66Zm12.834 8.753h5.168l-4.664 3.228.755 5.087-4.041-3.07L10.599 24l2.536-5.392s-2.95-3.075-2.947-3.075c-.198-.262-.265-.936-.265-1.226 0-.367.024-.739.049-1.134.028-.451.058-.933.058-1.476 0-1.338-.59-2.038-2.036-2.038H5.283l-1.18 5.525H.026L3.269 0h7.672c2.852 0 5.027.702 5.027 3.936 0 2.276-1.12 3.894-3.592 4.233v.045c1.162.276 1.598 1.062 1.598 2.527 0 .585-.018 1.098-.034 1.581-.015.428-.03.834-.03 1.243 0 .525.137 1.382.48 1.968h.567l3.028-5.06.82 5.096Zm-1.233-2.948-2.187 3.654h-3.457l2.103 2.189-1.73 3.672 3.777-2.218 2.976 2.263-.553-3.731 3.093-2.139h-3.43l-.592-3.69Z"
                            })
                        })
                    });
                case "VSCO":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm11.52 12c0 .408-.023.792-.072 1.176l-2.04-.24c.024-.312.05-.624.05-.936 0-.288-.025-.6-.05-.888l2.04-.24c.072.384.072.744.072 1.128zM.479 12c0-.384.024-.769.049-1.152l2.04.24c-.024.312-.047.6-.047.912s.023.6.047.912l-2.04.24C.479 12.769.479 12.384.479 12zm20.472-3.096l1.921-.72c.264.72.433 1.464.552 2.232l-2.04.24c-.097-.6-.24-1.2-.433-1.752zM21 12c0 .6-.072 1.176-.167 1.752l-2.017-.455c.071-.409.119-.841.119-1.297s-.048-.912-.119-1.344l2.017-.457c.118.577.167 1.177.167 1.801zm-9 6.456C8.435 18.455 5.545 15.565 5.544 12 5.545 8.435 8.435 5.545 12 5.544c3.565.001 6.455 2.891 6.456 6.456.008 3.559-2.871 6.448-6.429 6.456H12zM12.216 21v-2.064c.885-.029 1.756-.224 2.568-.575l.888 1.872c-1.09.482-2.264.742-3.456.767zm-3.936-.791l.912-1.873c.792.359 1.656.575 2.568.6V21c-1.202-.023-2.386-.293-3.48-.791zM3 12c0-.624.072-1.224.192-1.824l2.016.456c-.098.45-.146.908-.144 1.368 0 .432.048.864.12 1.272l-2.016.455C3.051 13.159 2.994 12.58 3 12zm8.76-9v2.064c-.877.029-1.74.224-2.544.576l-.888-1.871C9.411 3.291 10.577 3.03 11.76 3zm3.935.792l-.911 1.872c-.809-.363-1.682-.559-2.568-.576V3.024c1.248 0 2.424.288 3.479.768zm5.088 4.656c-.231-.56-.513-1.098-.84-1.608l1.681-1.152c.407.648.768 1.32 1.056 2.04l-1.897.72zm-.07 1.296l-2.018.456c-.23-.85-.621-1.648-1.151-2.352l1.632-1.295c.72.959 1.248 2.015 1.537 3.191zm-3.457-2.256c-.572-.667-1.264-1.22-2.04-1.633l.912-1.871c1.056.549 1.993 1.299 2.76 2.208l-1.632 1.296zm-.6-3.744l.96-1.824c.672.384 1.295.816 1.896 1.32L18.145 4.8c-.461-.401-.959-.754-1.489-1.056zm-.408-.216c-.54-.266-1.102-.483-1.68-.648l.504-1.992c.744.216 1.464.48 2.159.84l-.983 1.8zm-2.16-.768c-.6-.144-1.2-.216-1.824-.239V.479c.793.024 1.584.12 2.328.289l-.504 1.992zm-2.28-.239c-.605.021-1.207.094-1.8.216L9.528.744c.72-.168 1.487-.265 2.28-.265v2.042zm-2.28.334c-.586.167-1.156.384-1.704.649l-.96-1.824c.691-.343 1.415-.616 2.16-.816l.504 1.991zm-2.112.865c-.529.294-1.027.64-1.488 1.032L4.56 3.216c.6-.504 1.224-.936 1.896-1.319l.96 1.823zm.48.264l.888 1.871c-.792.408-1.464.96-2.04 1.608L5.136 6.168c.775-.895 1.711-1.636 2.76-2.184zM4.848 6.552l1.608 1.295c-.53.705-.921 1.503-1.152 2.353l-2.016-.456c.312-1.2.84-2.28 1.56-3.192zM3.24 8.4l-1.92-.72c.287-.72.648-1.416 1.08-2.04l1.68 1.176c-.341.494-.623 1.025-.84 1.584zm-.168.455c-.192.577-.36 1.152-.432 1.776L.6 10.393c.12-.769.288-1.537.553-2.257l1.919.719zm-.456 4.513c.096.6.239 1.2.432 1.776l-1.92.72c-.271-.728-.456-1.485-.552-2.257l2.04-.239zm.624 2.208c.239.576.528 1.104.84 1.607L2.4 18.336c-.435-.629-.797-1.306-1.08-2.016l1.92-.744zm.024-1.392l2.017-.456c.216.864.624 1.681 1.128 2.376L4.8 17.4c-.725-.957-1.247-2.051-1.536-3.216zm3.432 2.28c.577.672 1.272 1.248 2.064 1.656l-.912 1.872c-1.063-.557-2.009-1.315-2.784-2.232l1.632-1.296zm.72 3.815l-.96 1.825c-.674-.376-1.31-.819-1.896-1.321l1.368-1.535c.456.407.936.744 1.488 1.031zm.408.217c.528.264 1.104.48 1.705.647l-.504 1.992c-.747-.196-1.471-.469-2.16-.815l.959-1.824zm2.16.768c.576.12 1.176.193 1.8.217v2.039c-.774-.026-1.544-.114-2.305-.264l.505-1.992zm2.28.216c.605-.021 1.207-.094 1.801-.217l.479 1.992c-.749.168-1.513.264-2.28.287V21.48zm2.257-.336c.586-.165 1.155-.382 1.703-.647l.96 1.824c-.688.35-1.412.623-2.159.815l-.504-1.992zm2.086-.865c.528-.287 1.032-.647 1.488-1.031l1.369 1.535c-.588.502-1.223.945-1.896 1.321l-.961-1.825zm-.479-.263l-.888-1.871c.788-.414 1.489-.977 2.064-1.656l1.606 1.296c-.778.91-1.722 1.668-2.782 2.231zm3.071-2.592l-1.607-1.296c.532-.708.916-1.517 1.128-2.376l2.017.456c-.311 1.157-.831 2.248-1.538 3.216zM20.76 15.6l1.92.721c-.288.72-.648 1.392-1.079 2.04l-1.682-1.177c.337-.504.624-1.032.841-1.584zm.168-.455c.192-.553.336-1.152.433-1.752l2.039.239c-.11.761-.294 1.508-.551 2.232l-1.921-.719zm.456-9.841l-1.681 1.152c-.358-.49-.76-.947-1.199-1.368l1.368-1.536c.552.552 1.056 1.128 1.512 1.752zM4.2 3.528l1.368 1.536c-.456.408-.84.864-1.2 1.368l-1.68-1.176c.431-.636.94-1.216 1.512-1.728zM2.664 18.744l1.68-1.152c.36.48.769.937 1.2 1.369l-1.368 1.535c-.548-.545-1.054-1.131-1.512-1.752zm17.16 1.729l-1.368-1.537c.432-.407.841-.863 1.199-1.344l1.682 1.176c-.457.6-.961 1.175-1.513 1.705z"
                            })
                        })
                    });
                case "Letterboxd":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#202830", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#202830"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8.224 14.352a4.447 4.447 0 0 1-3.775 2.092C1.992 16.444 0 14.454 0 12s1.992-4.444 4.45-4.444c1.592 0 2.988.836 3.774 2.092-.427.682-.673 1.488-.673 2.352s.246 1.67.673 2.352zM15.101 12c0-.864.247-1.67.674-2.352-.786-1.256-2.183-2.092-3.775-2.092s-2.989.836-3.775 2.092c.427.682.674 1.488.674 2.352s-.247 1.67-.674 2.352c.786 1.256 2.183 2.092 3.775 2.092s2.989-.836 3.775-2.092A4.42 4.42 0 0 1 15.1 12zm4.45-4.444a4.447 4.447 0 0 0-3.775 2.092c.427.682.673 1.488.673 2.352s-.246 1.67-.673 2.352a4.447 4.447 0 0 0 3.775 2.092C22.008 16.444 24 14.454 24 12s-1.992-4.444-4.45-4.444z"
                            })
                        })
                    });
                case "Crowdin":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#2E3340", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#2E3340"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M16.119 17.793a2.619 2.619 0 0 1-1.667-.562c-.546-.436-1.004-1.09-1.018-1.858-.008-.388.414-.388.414-.388l1.018-.008c.332.008.43.47.445.586.128 1.04.717 1.495 1.168 1.702.273.123.204.513-.362.528zm-5.695-5.287L8.5 12.252c-.867-.214-.844-.982-.807-1.247a5.119 5.119 0 0 1 .814-2.125c.545-.804 1.303-1.508 2.29-2.073 1.856-1.074 4.45-1.673 7.31-1.673 2.09 0 4.256.27 4.29.27.197.025.328.213.333.437a.377.377 0 0 1-.355.393l-.92-.01c-2.902 0-4.968.394-6.506 1.248-1.527.837-2.57 2.117-3.287 4.012-.076.163-.335 1.12-1.24 1.022zm2.533 7.823c-1.44 0-2.797-.622-3.825-1.746-.87-.96-1.397-1.931-1.493-3.164-.06-.813.3-1.094.788-1.044l1.988.218c.45.092.75.34.825.854.397 2.736 2.122 3.814 3.15 4.046.18.042.292.157.283.365a.412.412 0 0 1-.322.398c-.458.074-.936.073-1.394.073zm-4.101 2.418a14.216 14.216 0 0 1-2.307-.214c-1.202-.214-2.208-.582-3.072-1.13C1.41 20.095.163 17.786.014 15.048c-.037-.65-.11-1.89 1.427-1.797.638.033 1.653.343 2.368.548.887.247 1.314.933 1.314 1.608 0 3.858 3.494 6.408 5.02 6.408.654 0 .414.701.127.779-.502.136-1.15.153-1.413.153zM3.525 11.419c-.605-.109-1.194-.358-1.768-.5C-.018 10.479.284 8.688.45 8.196c1.617-4.757 6.746-6.35 10.887-6.773 3.898-.4 7.978-.092 11.778.967.31.083 1.269.327.718.891-.35.358-1.7-.016-2.073-.041-2.23-.167-4.434-.192-6.656.15-2.349.357-4.768 1.099-6.71 2.665-.938.758-1.76 1.723-2.313 2.866-.144.3-.256.6-.354.9-.11.327-.47 1.91-2.215 1.6zm9.94.917c.332-1.488 1.81-3.848 6.385-3.686 1.05.033.57.749.052.731-2.586-.09-3.815 1.578-4.457 3.27-.219.546-.68.626-1.271.53-.415-.074-.866-.123-.71-.846Z"
                            })
                        })
                    });
                case "GOG":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#86328A", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#86328A"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M7.15 15.24H4.36a.4.4 0 0 0-.4.4v2c0 .21.18.4.4.4h2.8v1.32h-3.5c-.56 0-1.02-.46-1.02-1.03v-3.39c0-.56.46-1.02 1.03-1.02h3.48v1.32zM8.16 11.54c0 .58-.47 1.05-1.05 1.05H2.63v-1.35h3.78a.4.4 0 0 0 .4-.4V6.39a.4.4 0 0 0-.4-.4H4.39a.4.4 0 0 0-.41.4v2.02c0 .23.18.4.4.4H6v1.35H3.68c-.58 0-1.05-.46-1.05-1.04V5.68c0-.57.47-1.04 1.05-1.04H7.1c.58 0 1.05.47 1.05 1.04v5.86zM21.36 19.36h-1.32v-4.12h-.93a.4.4 0 0 0-.4.4v3.72h-1.33v-4.12h-.93a.4.4 0 0 0-.4.4v3.72h-1.33v-4.42c0-.56.46-1.02 1.03-1.02h5.61v5.44zM21.37 11.54c0 .58-.47 1.05-1.05 1.05h-4.48v-1.35h3.78a.4.4 0 0 0 .4-.4V6.39a.4.4 0 0 0-.4-.4h-2.03a.4.4 0 0 0-.4.4v2.02c0 .23.18.4.4.4h1.62v1.35H16.9c-.58 0-1.05-.46-1.05-1.04V5.68c0-.57.47-1.04 1.05-1.04h3.43c.58 0 1.05.47 1.05 1.04v5.86zM13.72 4.64h-3.44c-.58 0-1.04.47-1.04 1.04v3.44c0 .58.46 1.04 1.04 1.04h3.44c.57 0 1.04-.46 1.04-1.04V5.68c0-.57-.47-1.04-1.04-1.04m-.3 1.75v2.02a.4.4 0 0 1-.4.4h-2.03a.4.4 0 0 1-.4-.4V6.4c0-.22.17-.4.4-.4H13c.23 0 .4.18.4.4zM12.63 13.92H9.24c-.57 0-1.03.46-1.03 1.02v3.39c0 .57.46 1.03 1.03 1.03h3.39c.57 0 1.03-.46 1.03-1.03v-3.39c0-.56-.46-1.02-1.03-1.02m-.3 1.72v2a.4.4 0 0 1-.4.4v-.01H9.94a.4.4 0 0 1-.4-.4v-1.99c0-.22.18-.4.4-.4h2c.22 0 .4.18.4.4zM23.49 1.1a1.74 1.74 0 0 0-1.24-.52H1.75A1.74 1.74 0 0 0 0 2.33v19.34a1.74 1.74 0 0 0 1.75 1.75h20.5A1.74 1.74 0 0 0 24 21.67V2.33c0-.48-.2-.92-.51-1.24m0 20.58a1.23 1.23 0 0 1-1.24 1.24H1.75A1.23 1.23 0 0 1 .5 21.67V2.33a1.23 1.23 0 0 1 1.24-1.24h20.5a1.24 1.24 0 0 1 1.24 1.24v19.34z"
                            })
                        })
                    });
                case "Fiverr":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#1DBF73", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#1DBF73"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"
                            })
                        })
                    });
                case "Ko-fi":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF5E5B", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF5E5B"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"
                            })
                        })
                    });
                case "Anilist":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#02A9FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#02A9FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M24 17.53v2.421c0 .71-.391 1.101-1.1 1.101h-5l-.057-.165L11.84 3.736c.106-.502.46-.788 1.053-.788h2.422c.71 0 1.1.391 1.1 1.1v12.38H22.9c.71 0 1.1.392 1.1 1.101zM11.034 2.947l6.337 18.104h-4.918l-1.052-3.131H6.019l-1.077 3.131H0L6.361 2.948h4.673zm-.66 10.96-1.69-5.014-1.541 5.015h3.23z"
                            })
                        })
                    });
                case "PronounsPage":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffc8dc", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffc8dc"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 650 650",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M396.52 174.35c1.35-2.4.21-4.35-2.54-4.35l-48.2.03c-2.75 0-6.15 1.94-7.54 4.31l-118.1 199.77c-16.48 27.15-39.48 33.15-61.58 30.47-37.94-4.6-58.34-32.45-58.34-69.54 0-37.25 30.31-67.56 67.56-67.56h75c2.75 0 6.12-1.95 7.48-4.34l27.03-47.2c1.37-2.39.23-4.34-2.52-4.34h-107c-68.06 0-123.44 55.37-123.44 123.44 0 32.89 12.85 68.36 36.22 91.54 23.03 22.84 53.8 31.21 86.64 31.89 18.54.21 69.46-.21 93.33-42.68 26.73-47.57 136-241.44 136-241.44zM571.94 244.44c-23.03-22.84-53.8-31.21-86.64-31.89-18.54-.21-69.46.21-93.33 42.68-26.72 47.55-136 241.42-136 241.42-1.35 2.4-.21 4.35 2.54 4.35l48.2-.03c2.75 0 6.15-1.94 7.54-4.31l118.1-199.77c16.48-27.15 39.48-33.15 61.58-30.47 37.94 4.6 58.34 32.45 58.34 69.54 0 37.25-30.31 67.56-67.56 67.56h-75c-2.75 0-6.12 1.95-7.48 4.34l-27.03 47.2c-1.37 2.39-.23 4.34 2.52 4.34h107c68.06 0 123.44-55.37 123.44-123.44 0-32.87-12.85-68.34-36.22-91.52z"
                            })
                        })
                    });
                case "Bluesky":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#0285FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#0285FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"
                            })
                        })
                    });
                case "TrackerNetwork":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FFFFFF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FFFFFF"
                            },
                            className: "h-7 w-7",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 68.65 23.441",
                            children: (0,
                            l.jsx)("path", {
                                d: "M13.814 23.442H7.535V5.86H0V0h40.228a4.2 4.2 0 0 1 4.186 4.186v6.447a4.2 4.2 0 0 1-4.186 4.186H39.6l4.814 8.623h-6.865l-5.065-8.916h-3.517V9.209c3.1-.084 6.112.084 9.084-.084V5.86H27.628v17.582h-6.279V5.86c-2.6.042-5.065-.042-7.535.084ZM51.907 23.442h-6.279V0h7.954l8.791 13.479V0h6.279v23.442h-6.865L51.908 8.916Z"
                            })
                        })
                    })
                }
            }
            let[a,t] = (0,
            s.useState)(!c.autoplayfix)
              , n = {
                date: new Date,
                currentMusicIndex: o,
                isMusicPlaying: !1,
                pageTitle: ""
            }
              , [{date: x, currentMusicIndex: p, isMusicPlaying: u, pageTitle: j},b] = (0,
            s.useState)(n);
            var y, z, T = 0, H = c.title;
            (0,
            s.useEffect)(function() {
                c.animatedTitle ? function e() {
                    b(e=>({
                        ...e,
                        pageTitle: H.substring(T, H.length) + " " + H.substring(0, T)
                    })),
                    ++T > H.length && (T = 0),
                    setTimeout(()=>e(), 150)
                }() : c.animatedTitle || b(e=>({
                    ...e,
                    pageTitle: c.title
                }))
            }, []),
            setInterval(()=>{
                b(e=>({
                    ...e,
                    date: new Date
                }))
            }
            , 1e3);
            let A = ()=>{
                b(e=>({
                    ...e,
                    currentMusicIndex: 0 === e.currentMusicIndex ? c.songs.length - 1 : e.currentMusicIndex - 1
                }))
            }
              , B = ()=>{
                b(e=>({
                    ...e,
                    currentMusicIndex: e.currentMusicIndex < c.songs.length - 1 ? e.currentMusicIndex + 1 : 0
                }))
            }
              , k = (0,
            s.useRef)(null)
              , V = (0,
            s.useRef)(null);
            var L = c.songs[p];
            let[Z,R] = (0,
            s.useState)(!1)
              , [W,G] = (0,
            s.useState)(!1)
              , S = ()=>{
                if (k.current) {
                    var e;
                    let c = null === (e = k.current) || void 0 === e ? void 0 : e.audio.current;
                    (null == c ? void 0 : c.volume) === .1 ? (c.volume = 0,
                    R(!0)) : (null == c ? void 0 : c.volume) === 0 && (c.volume = .1,
                    R(!1))
                }
            }
              , D = ()=>{
                if (V.current) {
                    let e = V.current;
                    (null == e ? void 0 : e.volume) === .1 ? (e.volume = 0,
                    G(!0)) : (null == e ? void 0 : e.volume) === 0 && (e.volume = .1,
                    G(!1))
                }
            }
            ;
            (0,
            s.useEffect)(()=>{
                if (c.cursor.enabled && "" !== c.cursor.type) {
                    let e;
                    switch (c.cursor.type) {
                    case "Sparkle":
                        e = new g.f4({
                            colors: [c.primarycolor, c.secondarycolor, c.accentcolor]
                        });
                        break;
                    case "Ghost":
                        e = new g.$N;
                        break;
                    case "Trailing":
                        e = new g.n8("" !== c.cursor.url ? {
                            particles: 15,
                            rate: .8,
                            baseImageSrc: c.cursor.url
                        } : {
                            particles: 15,
                            rate: .8
                        });
                        break;
                    case "Dot":
                        e = new g.Y2({
                            color: c.accentcolor
                        })
                    }
                    return ()=>{
                        e.destroy()
                    }
                }
            }
            , []);
            let E = ()=>{
                if (!a) {
                    var e, o, l;
                    null === (e = null === (o = k.current) || void 0 === o ? void 0 : o.audio.current) || void 0 === e || e.play(),
                    null === (l = V.current) || void 0 === l || l.play(),
                    c.useBackgroundAudio && V.current && (V.current.volume = .1),
                    t(!0)
                }
            }
              , _ = (()=>{
                let[e,c] = (0,
                s.useState)(!1);
                return (0,
                s.useEffect)(()=>{
                    let e = ()=>{
                        c(window.innerWidth <= 1100),
                        console.log(window.innerWidth)
                    }
                    ;
                    return e(),
                    window.addEventListener("resize", e),
                    ()=>window.removeEventListener("resize", e)
                }
                , []),
                e
            }
            )();
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)(N(), {
                    children: (0,
                    l.jsx)("title", {
                        children: j
                    })
                }), (0,
                l.jsx)("style", {
                    children: "body {\n                        font-family: ".concat(c.font, ", sans-serif;\n                    }")
                }), "" !== c.cursor.url ? (0,
                l.jsx)("style", {
                    children: "* {\n                            cursor: url(".concat(c.cursor.url, ") ").concat(c.cursor.center ? "16 16" : "0 0", ", auto !important;\n                        }\n                        \n                        ::selection {\n                            background-color: ").concat(c.primarycolor, " !important;\n                            color: ").concat(c.accentcolor, " !important;\n                        }")
                }) : (0,
                l.jsx)("style", {
                    children: "::selection {\n                            background-color: ".concat(c.primarycolor, " !important;\n                            color: ").concat(c.accentcolor, " !important;\n                        }")
                }), (0,
                l.jsx)("aside", {
                    style: {
                        backgroundColor: "".concat(c.backgroundcolor)
                    },
                    className: "".concat(a ? "blur-none" : "blur-md", " fixed w-screen h-screen z-[-5] duration-500"),
                    children: ((e,o)=>{
                        switch (e) {
                        case "video":
                            return (0,
                            l.jsx)("video", {
                                ref: V,
                                autoPlay: a,
                                loop: !0,
                                muted: !c.useBackgroundAudio,
                                playsInline: !0,
                                src: o,
                                className: "absolute object-cover w-full h-full"
                            });
                        case "image":
                            return (0,
                            l.jsx)("img", {
                                draggable: !1,
                                src: o,
                                className: "object-cover h-full w-full"
                            })
                        }
                    }
                    )(c.background.type, c.background.url)
                }), a && c.useBackgroundAudio ? (0,
                l.jsx)("button", {
                    onClick: D,
                    style: {
                        borderColor: (0,
                        d.G)(c.accentcolor, 1),
                        borderWidth: "".concat(c.borderWidth, "px"),
                        borderRadius: "".concat(c.borderRadius, "rem"),
                        backgroundColor: (0,
                        d.G)(c.primarycolor, c.opacity),
                        backdropFilter: "blur(".concat(c.blur, "px)"),
                        WebkitBackdropFilter: "blur(".concat(c.blur, "px)")
                    },
                    className: "p-2 h-12 w-12 m-2 absolute z-[100] items-center justify-center flex",
                    children: W ? (0,
                    l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                        },
                        className: "h-7 w-7",
                        viewBox: "0 0 16 16",
                        children: (0,
                        l.jsx)("path", {
                            d: "M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"
                        })
                    }) : (0,
                    l.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                        },
                        className: "h-7 w-7",
                        viewBox: "0 0 16 16",
                        children: [(0,
                        l.jsx)("path", {
                            d: "M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"
                        }), (0,
                        l.jsx)("path", {
                            d: "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"
                        }), (0,
                        l.jsx)("path", {
                            d: "M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"
                        })]
                    })
                }) : (0,
                l.jsx)(l.Fragment, {}), (0,
                l.jsxs)("main", {
                    style: {
                        backgroundColor: a ? "" : (0,
                        d.G)(c.primarycolor, .8)
                    },
                    onClick: E,
                    className: "".concat(a ? "flex min-h-screen py-8" : "flex flex-col justify-center w-screen h-screen cursor-pointer", " duration-500"),
                    children: [(0,
                    l.jsx)("h1", {
                        style: {
                            color: c.textcolor
                        },
                        className: "".concat(a ? "hidden" : "flex flex-col px-4 break-words text-center", " font-semibold text-3xl"),
                        children: c.message
                    }), (0,
                    l.jsx)("div", {
                        className: "".concat(a ? "max-w-[42rem] w-full m-auto px-4" : "hidden"),
                        children: a ? (0,
                        l.jsx)(F.Z, {
                            tiltEnable: c.tilt && !_,
                            tiltReverse: !0,
                            tiltMaxAngleX: 6,
                            tiltMaxAngleY: 6,
                            children: (0,
                            l.jsxs)(w.E.div, {
                                initial: c.animated ? v.nr : v.tZ,
                                animate: c.animated ? v.gM : v.j7,
                                transition: {
                                    duration: .5,
                                    ease: [.39, .21, .12, .96],
                                    delay: .1
                                },
                                style: {
                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                    backdropFilter: "blur(".concat(c.blur, "px)"),
                                    WebkitBackdropFilter: "blur(".concat(c.blur, "px)"),
                                    boxShadow: "".concat(c.glow ? "0 0 30px 0.5px ".concat((0,
                                    d.G)(c.accentcolor, c.opacity)) : "")
                                },
                                className: "relative",
                                children: [c.banner.enabled ? ((e,o)=>{
                                    switch (e) {
                                    case "video":
                                        return (0,
                                        l.jsx)("video", {
                                            style: {
                                                borderColor: (0,
                                                d.G)(c.accentcolor, 1),
                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                borderTopLeftRadius: "".concat(c.borderRadius, "rem"),
                                                borderTopRightRadius: "".concat(c.borderRadius, "rem"),
                                                backgroundColor: (0,
                                                d.G)(c.primarycolor, c.opacity)
                                            },
                                            autoPlay: !0,
                                            loop: !0,
                                            muted: !0,
                                            playsInline: !0,
                                            src: o,
                                            className: "object-cover w-full h-32"
                                        });
                                    case "image":
                                        return (0,
                                        l.jsx)("img", {
                                            draggable: !1,
                                            style: {
                                                borderColor: (0,
                                                d.G)(c.accentcolor, 1),
                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                borderTopLeftRadius: "".concat(c.borderRadius, "rem"),
                                                borderTopRightRadius: "".concat(c.borderRadius, "rem"),
                                                backgroundColor: (0,
                                                d.G)(c.primarycolor, c.opacity)
                                            },
                                            src: o,
                                            className: "object-cover w-full h-32"
                                        });
                                    case "":
                                        return (0,
                                        l.jsx)("img", {
                                            draggable: !1,
                                            style: {
                                                borderColor: (0,
                                                d.G)(c.accentcolor, 1),
                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                borderTopLeftRadius: "".concat(c.borderRadius, "rem"),
                                                borderTopRightRadius: "".concat(c.borderRadius, "rem"),
                                                backgroundColor: (0,
                                                d.G)(c.primarycolor, c.opacity)
                                            },
                                            src: "",
                                            className: "object-cover w-full h-32"
                                        })
                                    }
                                }
                                )(c.banner.type, c.banner.url) : (0,
                                l.jsx)(l.Fragment, {}), (0,
                                l.jsx)("style", {
                                    children: ".main-box{\n                                            border-color: ".concat((0,
                                    d.G)(c.accentcolor, 1), ";\n                                            border-width: ").concat(c.banner.enabled ? "0px" : "".concat(c.borderWidth, "px"), " ").concat(c.banner.enabled ? "" : "!important", ";\n                                            border-bottom-width : ").concat(c.banner.enabled ? "".concat(c.borderWidth, "px") : "0px", ";\n                                            border-left-width : ").concat(c.banner.enabled ? "".concat(c.borderWidth, "px") : "0px", ";\n                                            border-right-width : ").concat(c.banner.enabled ? "".concat(c.borderWidth, "px") : "0px", ";\n                                            background-color: ").concat((0,
                                    d.G)(c.primarycolor, c.opacity), ";\n                                            padding: 1rem;\n                                            border-radius: ").concat(c.banner.enabled ? "0rem" : "".concat(c.borderRadius, "rem"), " ").concat(c.banner.enabled ? "" : "!important", ";\n                                            border-bottom-right-radius : ").concat(c.banner.enabled ? "".concat(c.borderRadius, "rem") : "0rem", ";\n                                            border-bottom-left-radius : ").concat(c.banner.enabled ? "".concat(c.borderRadius, "rem") : "0rem", ";\n                                        }")
                                }), (0,
                                l.jsxs)("div", {
                                    className: "main-box",
                                    children: [c.showViews ? (0,
                                    l.jsxs)("div", {
                                        className: "".concat(c.banner.enabled ? "" : "absolute", " flex gap-1 items-center"),
                                        children: [(0,
                                        l.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            style: {
                                                fill: c.textcolor
                                            },
                                            className: "w-4 h-4",
                                            viewBox: "0 0 16 16",
                                            children: [(0,
                                            l.jsx)("path", {
                                                d: "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                                            }), (0,
                                            l.jsx)("path", {
                                                d: "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                            })]
                                        }), (0,
                                        l.jsx)("p", {
                                            style: {
                                                color: c.textcolor
                                            },
                                            children: c.views
                                        })]
                                    }) : (0,
                                    l.jsx)(l.Fragment, {}), (0,
                                    l.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0,
                                        l.jsx)("img", {
                                            draggable: !1,
                                            style: {
                                                borderColor: (0,
                                                d.G)(c.accentcolor, 1),
                                                borderWidth: "".concat(c.borderWidth, "px")
                                            },
                                            className: "".concat(c.banner.enabled ? c.showViews ? "my-[-2.9rem] -translate-y-[3.20rem]" : "my-[-2.22rem] -translate-y-[2.5rem]" : "", " h-28 w-28 mx-auto rounded-full"),
                                            src: c.pfp.url
                                        }), (0,
                                        l.jsxs)("div", {
                                            className: "flex flex-col z-50",
                                            children: [(0,
                                            l.jsxs)("div", {
                                                className: "flex flex-col mx-auto items-center",
                                                children: [(()=>{
                                                    if (!c.sparkles.enabled || "" === c.sparkles.type)
                                                        return (0,
                                                        l.jsx)("h1", {
                                                            style: {
                                                                color: c.textcolor
                                                            },
                                                            className: "font-semibold text-[1.75rem] break-all text-center",
                                                            children: c.name
                                                        });
                                                    switch (c.sparkles.type) {
                                                    case "Rainbow":
                                                        return (0,
                                                        l.jsx)("h1", {
                                                            style: {
                                                                color: c.textcolor,
                                                                backgroundImage: 'url("/_assets/sparkles/rainbowsparkle.gif")'
                                                            },
                                                            className: "font-semibold text-[1.75rem] break-all text-center",
                                                            children: c.name
                                                        });
                                                    case "White":
                                                        return (0,
                                                        l.jsx)("h1", {
                                                            style: {
                                                                color: c.textcolor,
                                                                backgroundImage: 'url("/_assets/sparkles/whitesparkle.gif")'
                                                            },
                                                            className: "font-semibold text-[1.75rem] break-all text-center",
                                                            children: c.name
                                                        });
                                                    case "Black":
                                                        return (0,
                                                        l.jsx)("h1", {
                                                            style: {
                                                                color: c.textcolor,
                                                                backgroundImage: 'url("/_assets/sparkles/blacksparkle.gif")'
                                                            },
                                                            className: "font-semibold text-[1.75rem] break-all text-center",
                                                            children: c.name
                                                        });
                                                    case "Blue":
                                                        return (0,
                                                        l.jsx)("h1", {
                                                            style: {
                                                                color: c.textcolor,
                                                                backgroundImage: 'url("/_assets/sparkles/bluesparkle.gif")'
                                                            },
                                                            className: "font-semibold text-[1.75rem] break-all text-center",
                                                            children: c.name
                                                        });
                                                    case "Green":
                                                        return (0,
                                                        l.jsx)("h1", {
                                                            style: {
                                                                color: c.textcolor,
                                                                backgroundImage: 'url("/_assets/sparkles/greensparkle.gif")'
                                                            },
                                                            className: "font-semibold text-[1.75rem] break-all text-center",
                                                            children: c.name
                                                        });
                                                    case "Yellow":
                                                        return (0,
                                                        l.jsx)("h1", {
                                                            style: {
                                                                color: c.textcolor,
                                                                backgroundImage: 'url("/_assets/sparkles/yellowsparkle.gif")'
                                                            },
                                                            className: "font-semibold text-[1.75rem] break-all text-center",
                                                            children: c.name
                                                        });
                                                    case "Pink":
                                                        return (0,
                                                        l.jsx)("h1", {
                                                            style: {
                                                                color: c.textcolor,
                                                                backgroundImage: 'url("/_assets/sparkles/pinksparkle.gif")'
                                                            },
                                                            className: "font-semibold text-[1.75rem] break-all text-center",
                                                            children: c.name
                                                        });
                                                    case "Purple":
                                                        return (0,
                                                        l.jsx)("h1", {
                                                            style: {
                                                                color: c.textcolor,
                                                                backgroundImage: 'url("/_assets/sparkles/purplesparkle.gif")'
                                                            },
                                                            className: "font-semibold text-[1.75rem] break-all text-center",
                                                            children: c.name
                                                        });
                                                    case "Red":
                                                        return (0,
                                                        l.jsx)("h1", {
                                                            style: {
                                                                color: c.textcolor,
                                                                backgroundImage: 'url("/_assets/sparkles/redsparkle.gif")'
                                                            },
                                                            className: "font-semibold text-[1.75rem] break-all text-center",
                                                            children: c.name
                                                        })
                                                    }
                                                }
                                                )(), c.ranks.length > 0 && c.showBadges ? (0,
                                                l.jsxs)("div", {
                                                    className: "flex flex-row flex-wrap justify-center z-40 gap-2 mb-1",
                                                    children: ["60f6f3e9-d258-4822-9ee6-58b9e34ef8b7" === c._id ? (0,
                                                    l.jsx)(l.Fragment, {
                                                        children: (0,
                                                        l.jsxs)("div", {
                                                            className: "group flex flex-col items-center justify-center",
                                                            children: [(0,
                                                            l.jsxs)("svg", {
                                                                style: {
                                                                    filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffd700", ")")
                                                                },
                                                                className: "w-7 h-7",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                viewBox: "0 0 24 24",
                                                                children: [(0,
                                                                l.jsx)("rect", {
                                                                    className: "w-7 h-7 fill-none"
                                                                }), (0,
                                                                l.jsx)("path", {
                                                                    style: {
                                                                        fill: c.useThemeColor ? c.iconcolor : "#ffd700"
                                                                    },
                                                                    d: "M12.4038,15.2835c-1.0588-.2985-1.2942-.493-1.2942-.9262,0-.305.1812-.68.8176-.68a.9542.9542,0,0,1,.7032.2243.8628.8628,0,0,1,.2481.4851.705.705,0,0,0,.7891.64.6743.6743,0,0,0,.6189-.64,1.8565,1.8565,0,0,0-.4107-1.0407,1.9183,1.9183,0,0,0-1.3286-.6662v-.65a.5886.5886,0,0,0-1.1771,0v.6637a1.8482,1.8482,0,0,0-1.6757,1.8c0,.9318.4882,1.5488,2.1612,2.03.9192.2625,1.1759.5,1.1759.9861,0,.3961-.2344.7469-.9668.7469a1.04,1.04,0,0,1-1.0994-.8331.7531.7531,0,0,0-.9325-.6026.67.67,0,0,0-.4721.6026A1.9339,1.9339,0,0,0,9.89,18.38a2.2132,2.2132,0,0,0,1.55.8725V20.05c.018.32.3428.4615.6313.46a.5228.5228,0,0,0,.5545-.46V19.25A1.8653,1.8653,0,0,0,14.44,17.3477C14.44,16.2927,13.8839,15.696,12.4038,15.2835Z"
                                                                }), (0,
                                                                l.jsx)("path", {
                                                                    style: {
                                                                        fill: c.useThemeColor ? c.iconcolor : "#ffd700"
                                                                    },
                                                                    d: "M15.6361,8.6425a2.231,2.231,0,0,0,.4525-1.3445,2.19,2.19,0,0,0-1.0455-1.8823l1.2608-3.0368a.8514.8514,0,0,0-.2557-.9926,6.6025,6.6025,0,0,0-8.0955,0,.8512.8512,0,0,0-.2558.9922l1.2608,3.037A2.1907,2.1907,0,0,0,7.9123,7.298a2.2309,2.2309,0,0,0,.4524,1.3445C5.0381,10.1676,2.66,14.0836,2.66,18.6762v.0132c0,1.704,1.1134,3.1637,3.1355,4.111A15.0337,15.0337,0,0,0,12,24c4.4995,0,9.3408-1.6618,9.3408-5.3238C21.34,14.0836,18.9624,10.1676,15.6361,8.6425ZM12,1.7031a4.8954,4.8954,0,0,1,2.4651.6613l-1.1416,2.75H10.677l-1.1416-2.75A4.8947,4.8947,0,0,1,12,1.7031ZM14.4013,7.298c0,.2649-.17.489-.37.489H9.9687c-.2,0-.3692-.2241-.3692-.489s.1688-.4886.3692-.4886h.0838c.019.0012.0366.0083.0559.0083h3.7841c.0193,0,.0369-.0071.0559-.0083h.0829C14.2317,6.8094,14.4013,7.033,14.4013,7.298ZM12,22.3558c-3.73,0-7.6965-1.2849-7.6965-3.6664v-.0132c0-5.0065,3.1979-9.08,7.1289-9.08H12.569c3.93,0,7.1279,4.0737,7.1279,9.0934C19.6969,21.0709,15.7309,22.3558,12,22.3558Z"
                                                                })]
                                                            }), (0,
                                                            l.jsx)("div", {
                                                                style: {
                                                                    borderColor: (0,
                                                                    d.G)(c.accentcolor, 1),
                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                    backgroundColor: (0,
                                                                    d.G)(c.secondarycolor, 1)
                                                                },
                                                                className: "absolute  p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                children: (0,
                                                                l.jsx)("span", {
                                                                    style: {
                                                                        color: c.textcolor
                                                                    },
                                                                    className: "font-semibold text-sm",
                                                                    children: "Super Rich"
                                                                })
                                                            })]
                                                        })
                                                    }) : (0,
                                                    l.jsx)(l.Fragment, {}), c.ranks.map((e,o)=>{
                                                        switch (e) {
                                                        case "Rich":
                                                            return (0,
                                                            l.jsx)(l.Fragment, {
                                                                children: (0,
                                                                l.jsxs)("div", {
                                                                    className: "group flex flex-col items-center justify-center",
                                                                    children: [(0,
                                                                    l.jsxs)("svg", {
                                                                        style: {
                                                                            filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#118C4F", ")")
                                                                        },
                                                                        className: "w-7 h-7",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 24 24",
                                                                        children: [(0,
                                                                        l.jsx)("rect", {
                                                                            className: "w-7 h-7 fill-none"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#118C4F"
                                                                            },
                                                                            d: "M12.0611,9.9156A.9806.9806,0,0,1,11.0244,9.13a.71.71,0,0,0-.88-.5682A.6314.6314,0,0,0,9.7,9.13a1.8232,1.8232,0,0,0,.31.9012,2.0871,2.0871,0,0,0,1.4618.8228v.7523c.017.3021.3232.4352.5953.434a.4931.4931,0,0,0,.5229-.434v-.7551a1.7589,1.7589,0,0,0,1.7108-1.7935c0-.9948-.5243-1.5575-1.92-1.9465C11.3824,6.83,11.16,6.6463,11.16,6.2378c0-.2877.1708-.6412.771-.6412a.9.9,0,0,1,.6632.2114.8142.8142,0,0,1,.2339.4575.6647.6647,0,0,0,.7441.6035.6358.6358,0,0,0,.5836-.6035,1.7507,1.7507,0,0,0-.3872-.9814,1.81,1.81,0,0,0-1.2529-.6283V4.0431a.555.555,0,0,0-1.11,0V4.669a1.7428,1.7428,0,0,0-1.58,1.6977c0,.8788.46,1.4606,2.0381,1.9147.8668.2475,1.1088.4712,1.1088.93C12.9727,9.5847,12.7517,9.9156,12.0611,9.9156Z"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#118C4F"
                                                                            },
                                                                            d: "M23.2941,1.4118H.7059A.706.706,0,0,0,0,2.1176V13.4118a.7018.7018,0,0,0,.213.5032,2.0689,2.0689,0,0,0,.3381,2.32,2.0838,2.0838,0,0,0,0,2.8235,2.1082,2.1082,0,0,0,1.5665,3.5294H21.8824a2.1082,2.1082,0,0,0,1.5665-3.5294,2.0838,2.0838,0,0,0,0-2.8235,2.0689,2.0689,0,0,0,.3381-2.32A.7018.7018,0,0,0,24,13.4118V2.1176A.706.706,0,0,0,23.2941,1.4118Zm-.7059,13.4117a.7072.7072,0,0,1-.7058.7059H2.1176a.7059.7059,0,0,1,0-1.4118H21.8824A.7072.7072,0,0,1,22.5882,14.8235Zm0,2.8236a.7072.7072,0,0,1-.7058.7058H2.1176a.7059.7059,0,0,1,0-1.4117H21.8824A.7072.7072,0,0,1,22.5882,17.6471ZM5.1051,2.8235h13.79a4.4589,4.4589,0,0,0,3.6933,3.6933V9.0126a4.459,4.459,0,0,0-3.6933,3.6933H5.1051A4.459,4.459,0,0,0,1.4118,9.0126V6.5168A4.4589,4.4589,0,0,0,5.1051,2.8235ZM1.4118,12.7059V10.4347a3.0742,3.0742,0,0,1,2.2711,2.2712H1.4118Zm18.9053,0a3.0742,3.0742,0,0,1,2.2711-2.2712v2.2712H20.3171Zm2.2711-9.8824V5.0947a3.0742,3.0742,0,0,1-2.2711-2.2712Zm-21.1764,0H3.6829A3.0742,3.0742,0,0,1,1.4118,5.0947Zm20.4706,18.353H2.1176a.7059.7059,0,0,1,0-1.4118H21.8824a.7059.7059,0,0,1,0,1.4118Z"
                                                                        })]
                                                                    }), (0,
                                                                    l.jsx)("div", {
                                                                        style: {
                                                                            borderColor: (0,
                                                                            d.G)(c.accentcolor, 1),
                                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                                                            backgroundColor: (0,
                                                                            d.G)(c.secondarycolor, 1)
                                                                        },
                                                                        className: "absolute  p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                        children: (0,
                                                                        l.jsx)("span", {
                                                                            style: {
                                                                                color: c.textcolor
                                                                            },
                                                                            className: "font-semibold text-sm",
                                                                            children: "Rich"
                                                                        })
                                                                    })]
                                                                })
                                                            });
                                                        case "Owner":
                                                            return (0,
                                                            l.jsx)(l.Fragment, {
                                                                children: (0,
                                                                l.jsxs)("div", {
                                                                    className: "group flex flex-col items-center justify-center",
                                                                    children: [(0,
                                                                    l.jsxs)("svg", {
                                                                        style: {
                                                                            filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#cc0011", ")")
                                                                        },
                                                                        className: "w-7 h-7",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 24 24",
                                                                        children: [(0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#cc0011"
                                                                            },
                                                                            d: "M23.6456,8.0229a.9272.9272,0,0,0-1.0042-.0865l-5.1463,2.7547L12.7716,3.7447a.924.924,0,0,0-.7626-.4038h-.0009a.9221.9221,0,0,0-.7626.4029l-4.74,6.9482L1.3586,7.9364a.9232.9232,0,0,0-1.33,1.0411l2.789,10.9857a.9238.9238,0,0,0,.8952.6959H20.2877a.9238.9238,0,0,0,.8952-.6959l2.789-10.9857A.9256.9256,0,0,0,23.6456,8.0229ZM4.4307,18.813l-.5324-2.0967H20.1017l-.5324,2.0967Zm16.14-3.9428H3.4294L2.3331,10.5523l4.033,2.1589a.9243.9243,0,0,0,1.198-.2938l4.4431-6.5138,4.4278,6.5129a.924.924,0,0,0,1.1989.2947l4.033-2.1589Z"
                                                                        }), (0,
                                                                        l.jsx)("rect", {
                                                                            className: "w-7 h-7 fill-none"
                                                                        })]
                                                                    }), (0,
                                                                    l.jsx)("div", {
                                                                        style: {
                                                                            borderColor: (0,
                                                                            d.G)(c.accentcolor, 1),
                                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                                                            backgroundColor: (0,
                                                                            d.G)(c.secondarycolor, 1)
                                                                        },
                                                                        className: "absolute  p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                        children: (0,
                                                                        l.jsx)("span", {
                                                                            style: {
                                                                                color: c.textcolor
                                                                            },
                                                                            className: "font-semibold text-sm",
                                                                            children: "Owner"
                                                                        })
                                                                    })]
                                                                })
                                                            });
                                                        case "Developer":
                                                            return (0,
                                                            l.jsx)(l.Fragment, {
                                                                children: (0,
                                                                l.jsxs)("div", {
                                                                    className: "group flex flex-col items-center justify-center",
                                                                    children: [(0,
                                                                    l.jsxs)("svg", {
                                                                        style: {
                                                                            filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#450006", ")")
                                                                        },
                                                                        className: "w-7 h-7",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 24 24",
                                                                        children: [(0,
                                                                        l.jsx)("rect", {
                                                                            className: "w-7 h-7 fill-none"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#450006"
                                                                            },
                                                                            d: "M13.74,2.5205h-.0037a.9848.9848,0,0,0-1.1491.7979L9.4951,20.3268a.9895.9895,0,0,0,.7943,1.151.9494.9494,0,0,0,.1819.0172.9887.9887,0,0,0,.9736-.8143L14.5374,3.6732A.9936.9936,0,0,0,13.74,2.5205Z",
                                                                            transform: "translate(0)"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#450006"
                                                                            },
                                                                            d: "M23.6951,11.2867,18.0114,6.4973a1.09,1.09,0,0,0-1.372,0,.8011.8011,0,0,0,0,1.2593l4.9576,4.177-4.7493,4.2353a.8115.8115,0,0,0-.2857.6323.8343.8343,0,0,0,.3248.626,1.0673,1.0673,0,0,0,.666.2256,1.0493,1.0493,0,0,0,.7051-.2593l5.4581-4.8649a.8023.8023,0,0,0-.0209-1.2419Z",
                                                                            transform: "translate(0)"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#450006"
                                                                            },
                                                                            d: "M7.6664,7.1269a.8181.8181,0,0,0-.3048-.63,1.09,1.09,0,0,0-1.3721,0L.3049,11.2867a.8007.8007,0,0,0-.0191,1.2419L5.743,17.3935a1.0907,1.0907,0,0,0,1.37.0337.8318.8318,0,0,0,.3257-.6242.8111.8111,0,0,0-.2848-.6332l-4.75-4.2362,4.9577-4.177A.8182.8182,0,0,0,7.6664,7.1269Z",
                                                                            transform: "translate(0)"
                                                                        })]
                                                                    }), (0,
                                                                    l.jsx)("div", {
                                                                        style: {
                                                                            borderColor: (0,
                                                                            d.G)(c.accentcolor, 1),
                                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                                                            backgroundColor: (0,
                                                                            d.G)(c.secondarycolor, 1)
                                                                        },
                                                                        className: "absolute  p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                        children: (0,
                                                                        l.jsx)("span", {
                                                                            style: {
                                                                                color: c.textcolor
                                                                            },
                                                                            className: "font-semibold text-sm",
                                                                            children: "Developer"
                                                                        })
                                                                    })]
                                                                })
                                                            });
                                                        case "Admin":
                                                            return (0,
                                                            l.jsx)(l.Fragment, {
                                                                children: (0,
                                                                l.jsxs)("div", {
                                                                    className: "group flex flex-col items-center justify-center",
                                                                    children: [(0,
                                                                    l.jsxs)("svg", {
                                                                        style: {
                                                                            filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ff4d5c", ")")
                                                                        },
                                                                        className: "w-7 h-7",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 24 24",
                                                                        children: [(0,
                                                                        l.jsx)("rect", {
                                                                            className: "w-7 h-7 fill-none"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#ff4d5c"
                                                                            },
                                                                            d: "M21.3392,2.9541a18.853,18.853,0,0,1-6.228-1.1765A13.2038,13.2038,0,0,1,12.4357.15a.7074.7074,0,0,0-.8245-.0331,17.2316,17.2316,0,0,1-2.9237,1.55,25.7748,25.7748,0,0,1-6.079,1.29.7055.7055,0,0,0-.6453.7031c0,9.8953.8052,13.0827,2.1931,15.239,2.2472,3.5754,7.4393,5.0165,7.659,5.0763A.7.7,0,0,0,12,24a.6833.6833,0,0,0,.1967-.0285l.1057-.03c1.5772-.4568,5.272-1.5267,7.5579-5.0074,2.1765-3.045,2.1765-7.648,2.1765-15.2739A.706.706,0,0,0,21.3392,2.9541Zm-2.6434,15.181a11.3223,11.3223,0,0,1-6.694,4.4237c-.9044-.28-4.9163-1.6525-6.6544-4.4182C4.1572,16.2914,3.409,13.3052,3.3759,4.296A24.6664,24.6664,0,0,0,9.2243,2.9715a18.524,18.524,0,0,0,2.7426-1.4062,14.6025,14.6025,0,0,0,2.56,1.4972A18.6525,18.6525,0,0,0,20.625,4.3392C20.6232,11.2785,20.5653,15.52,18.6958,18.1351Z"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#ff4d5c"
                                                                            },
                                                                            d: "M12.4357,3.4451a.7044.7044,0,0,0-.8245-.034A12.0007,12.0007,0,0,1,9.5754,4.49,18.0075,18.0075,0,0,1,5.33,5.389a.7055.7055,0,0,0-.6453.7031c0,7.0589.5828,9.3456,1.5846,10.9045,1.6351,2.6,5.387,3.6415,5.546,3.6847a.5841.5841,0,0,0,.1507.0165,1.227,1.227,0,0,0,.307-.0413,9.29,9.29,0,0,0,5.4623-3.625c1.58-2.2105,1.58-5.4954,1.58-10.9394a.7061.7061,0,0,0-.6977-.7058A13.136,13.136,0,0,1,14.29,4.5719,9.1264,9.1264,0,0,1,12.4357,3.4451Zm4.1351,12.7877a7.7776,7.7776,0,0,1-4.5671,3.0312c-.7188-.2279-3.3815-1.1774-4.5432-3.0248-.8153-1.2675-1.33-3.3263-1.3622-9.5138a17.22,17.22,0,0,0,4.0138-.93,13.3052,13.3052,0,0,0,1.8548-.9384,10.5955,10.5955,0,0,0,1.7381,1,13.1185,13.1185,0,0,0,4.1985.91C17.9007,11.5269,17.8447,14.4515,16.5708,16.2328Z"
                                                                        })]
                                                                    }), (0,
                                                                    l.jsx)("div", {
                                                                        style: {
                                                                            borderColor: (0,
                                                                            d.G)(c.accentcolor, 1),
                                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                                                            backgroundColor: (0,
                                                                            d.G)(c.secondarycolor, 1)
                                                                        },
                                                                        className: "absolute  p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                        children: (0,
                                                                        l.jsx)("span", {
                                                                            style: {
                                                                                color: c.textcolor
                                                                            },
                                                                            className: "font-semibold text-sm",
                                                                            children: "Admin"
                                                                        })
                                                                    })]
                                                                })
                                                            });
                                                        case "Staff":
                                                            return (0,
                                                            l.jsx)(l.Fragment, {
                                                                children: (0,
                                                                l.jsxs)("div", {
                                                                    className: "group flex flex-col items-center justify-center",
                                                                    children: [(0,
                                                                    l.jsxs)("svg", {
                                                                        style: {
                                                                            filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#020275", ")")
                                                                        },
                                                                        className: "w-7 h-7",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 24 24",
                                                                        children: [(0,
                                                                        l.jsx)("rect", {
                                                                            className: "w-7 h-7 fill-none"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#020275"
                                                                            },
                                                                            d: "M23.6807,7.0088a.6408.6408,0,0,0-.2627-.4117l-.001-.0007-2.5249-1.76a.6547.6547,0,0,0-.62-.0618,1.2035,1.2035,0,0,1-1.0861-.106,1.2567,1.2567,0,0,1-.4708-.9925.6386.6386,0,0,0-.1475-.44A9.4742,9.4742,0,0,0,11.77.0007C6.9146.0654,4.4793,4.2712,4.3783,4.45a.6386.6386,0,0,0,.1344.795.63.63,0,0,0,.0556.0435.6382.6382,0,0,0,.75-.0129,4.6334,4.6334,0,0,1,2.2485-.9087,4.8294,4.8294,0,0,1,3.2647.89l-1.28,1.8278L.8194,19.5558a2.8248,2.8248,0,1,0,4.6279,3.24l8.732-12.4706.7328-1.0466a1.3414,1.3414,0,0,1,1.5427-.6013,1.3053,1.3053,0,0,1,.66.8328.64.64,0,0,0,.2523.3633l2.521,1.7653a.6387.6387,0,0,0,.89-.157L23.575,7.4873A.6384.6384,0,0,0,23.6807,7.0088ZM4.4,22.0631a1.5466,1.5466,0,1,1-2.5338-1.7742l8.3654-11.947,2.5338,1.7742ZM20.0972,10.2255,18.2741,8.949a2.4912,2.4912,0,0,0-1.3326-1.4528,2.5949,2.5949,0,0,0-3.0836,1.06l-.359.5128L10.9651,7.2948l1.2608-1.8006a.6385.6385,0,0,0-.1007-.8454A6.2879,6.2879,0,0,0,7.4241,3.0973c-.0892.01-.1785.022-.267.0363a7.1369,7.1369,0,0,1,4.63-1.8547,8.19,8.19,0,0,1,5.6589,2.6222A2.49,2.49,0,0,0,18.4524,5.716a2.4426,2.4426,0,0,0,1.9676.35l1.7406,1.2127Z"
                                                                        })]
                                                                    }), (0,
                                                                    l.jsx)("div", {
                                                                        style: {
                                                                            borderColor: (0,
                                                                            d.G)(c.accentcolor, 1),
                                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                                                            backgroundColor: (0,
                                                                            d.G)(c.secondarycolor, 1)
                                                                        },
                                                                        className: "absolute  p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                        children: (0,
                                                                        l.jsx)("span", {
                                                                            style: {
                                                                                color: c.textcolor
                                                                            },
                                                                            className: "font-semibold text-sm",
                                                                            children: "Staff"
                                                                        })
                                                                    })]
                                                                })
                                                            });
                                                        case "Beta":
                                                            return (0,
                                                            l.jsx)(l.Fragment, {
                                                                children: (0,
                                                                l.jsxs)("div", {
                                                                    className: "group flex flex-col items-center justify-center",
                                                                    children: [(0,
                                                                    l.jsxs)("svg", {
                                                                        style: {
                                                                            filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#fbff00", ")")
                                                                        },
                                                                        className: "w-7 h-7",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 24 24",
                                                                        children: [(0,
                                                                        l.jsx)("rect", {
                                                                            className: "w-7 h-7 fill-none"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#fbff00"
                                                                            },
                                                                            d: "M23.5532,9.6626l-2.1526-.4307a.5533.5533,0,0,1-.4125-.3657,9.4548,9.4548,0,0,0-.4173-1.0091.553.553,0,0,1,.0332-.55l1.2167-1.8259a.5554.5554,0,0,0-.07-.7009L19.2168,2.2471a.5558.5558,0,0,0-.701-.0694L16.6909,3.394a.5529.5529,0,0,1-.55.0332A9.4565,9.4565,0,0,0,15.1325,3.01a.5533.5533,0,0,1-.3657-.4125l-.43-2.1508A.5558.5558,0,0,0,13.7919,0L10.2082,0a.5555.5555,0,0,0-.5448.4466l-.43,2.1509a.5532.5532,0,0,1-.3657.4123,9.4565,9.4565,0,0,0-1.0088.4172.5527.5527,0,0,1-.55-.0333L5.4826,2.1765a.5557.5557,0,0,0-.7012.07L2.2488,4.7808a.5552.5552,0,0,0-.0693.7006L3.3961,7.3075a.5527.5527,0,0,1,.0332.55,9.459,9.459,0,0,0-.4174,1.0091A.5537.5537,0,0,1,2.6,9.2319L.4467,9.6626A.5556.5556,0,0,0,0,10.2074V13.79a.5556.5556,0,0,0,.4464.5448L2.6,14.7664a.5525.5525,0,0,1,.4124.3656A9.4626,9.4626,0,0,0,3.43,16.1411a.5532.5532,0,0,1-.0334.55l-1.2175,1.827a.5553.5553,0,0,0,.0693.7009l2.5335,2.534a.5556.5556,0,0,0,.7012.0694l1.8263-1.2179a.553.553,0,0,1,.55-.0333,9.4634,9.4634,0,0,0,1.0088.4175.5534.5534,0,0,1,.3656.4123l.4306,2.1527a.5558.5558,0,0,0,.545.4467l3.5831-.0012a.5555.5555,0,0,0,.5447-.4466l.43-2.1516a.5534.5534,0,0,1,.3657-.4123,9.47,9.47,0,0,0,1.0087-.4175.5531.5531,0,0,1,.55.0333l1.825,1.2169a.5555.5555,0,0,0,.7011-.07l2.5339-2.5346a.5553.5553,0,0,0,.0693-.7009L20.604,16.6907a.5525.5525,0,0,1-.0332-.5495,9.4682,9.4682,0,0,0,.4173-1.0094.5536.5536,0,0,1,.4123-.3656l2.1531-.4311A.5557.5557,0,0,0,24,13.79V10.2074A.5557.5557,0,0,0,23.5532,9.6626Zm-.9651,2.9707a.5553.5553,0,0,1-.4465.5447l-1.8451.37a.5557.5557,0,0,0-.4286.4053l-.0042.0159a8.6222,8.6222,0,0,1-.9111,2.2009l-.0076.0129a.5554.5554,0,0,0,.0169.5894l1.0421,1.5641a.5554.5554,0,0,1-.07.7009l-.8973.8976a.5555.5555,0,0,1-.701.0693l-1.5637-1.0422a.5552.5552,0,0,0-.59-.0166l-.0142.0083a8.5577,8.5577,0,0,1-2.1881.9077l-.0275.0071a.5558.5558,0,0,0-.405.4287L13.1791,22.14a.5559.5559,0,0,1-.5446.4468l-1.2685,0a.5555.5555,0,0,1-.545-.4465l-.3689-1.844a.5557.5557,0,0,0-.4051-.4287l-.0274-.0071a8.5563,8.5563,0,0,1-2.1881-.9077l-.0141-.0083a.5556.5556,0,0,0-.59.0166L5.6624,20.005a.5556.5556,0,0,1-.7011-.0695l-.8968-.8967a.5555.5555,0,0,1-.0695-.7012l1.0435-1.5651a.5562.5562,0,0,0,.0166-.59,8.6691,8.6691,0,0,1-.9187-2.2138l-.0042-.0161a.5553.5553,0,0,0-.4284-.4049l-1.8455-.37a.5553.5553,0,0,1-.4465-.5447V11.3647a.5557.5557,0,0,1,.4465-.5448l1.8452-.369a.5556.5556,0,0,0,.429-.4054l.0039-.0156a8.6151,8.6151,0,0,1,.9148-2.2076l.0039-.0064a.5562.5562,0,0,0-.0166-.59L3.9959,5.6614a.5555.5555,0,0,1,.0693-.7008l.8969-.8974a.5552.5552,0,0,1,.7011-.07L7.2273,5.0364a.5558.5558,0,0,0,.59.0165l.0142-.0085a8.5579,8.5579,0,0,1,2.1859-.9066l.03-.0077a.5557.5557,0,0,0,.4051-.4287l.3686-1.8429a.5559.5559,0,0,1,.5447-.4466l1.2691,0a.5555.5555,0,0,1,.5449.4467l.3684,1.8429a.5559.5559,0,0,0,.405.4288l.03.0077a8.5587,8.5587,0,0,1,2.1858.9066l.0142.0085a.5556.5556,0,0,0,.59-.0165l1.5634-1.0423a.5555.5555,0,0,1,.7009.0694l.8977.8971a.5553.5553,0,0,1,.07.701L18.9616,7.2261a.5555.5555,0,0,0-.0168.59l.0084.0143a8.5938,8.5938,0,0,1,.91,2.1987l.0044.017a.5556.5556,0,0,0,.4287.4052l1.845.369a.5556.5556,0,0,1,.4465.5448Z"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#fbff00"
                                                                            },
                                                                            d: "M14.4229,11.5439a3.4973,3.4973,0,1,0-4.8459,0,4.82,4.82,0,0,0-2.71,4.3162v.0048c0,.5205.2412,1.4834,1.8565,2.09A9.662,9.662,0,0,0,12,18.4658c2.3681,0,5.1338-.6816,5.1338-2.6054A4.821,4.821,0,0,0,14.4229,11.5439ZM12,7.0342a1.9976,1.9976,0,1,1-1.9971,1.997A2,2,0,0,1,12,7.0342Zm0,9.9316c-2.2178,0-3.6329-.6523-3.6329-1.1006V15.86a3.34,3.34,0,0,1,3.3409-3.3311h.5849a3.3409,3.3409,0,0,1,3.3409,3.3359C15.6334,16.3135,14.2183,16.9658,12,16.9658Z"
                                                                        })]
                                                                    }), (0,
                                                                    l.jsx)("div", {
                                                                        style: {
                                                                            borderColor: (0,
                                                                            d.G)(c.accentcolor, 1),
                                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                                                            backgroundColor: (0,
                                                                            d.G)(c.secondarycolor, 1)
                                                                        },
                                                                        className: "absolute  p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                        children: (0,
                                                                        l.jsx)("span", {
                                                                            style: {
                                                                                color: c.textcolor
                                                                            },
                                                                            className: "font-semibold text-sm",
                                                                            children: "Beta Tester"
                                                                        })
                                                                    })]
                                                                })
                                                            });
                                                        case "Premium":
                                                            return (0,
                                                            l.jsx)(l.Fragment, {
                                                                children: (0,
                                                                l.jsxs)("div", {
                                                                    className: "group flex flex-col items-center justify-center",
                                                                    children: [(0,
                                                                    l.jsxs)("svg", {
                                                                        style: {
                                                                            filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#1da1f2", ")")
                                                                        },
                                                                        className: "w-7 h-7",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 24 24",
                                                                        children: [(0,
                                                                        l.jsx)("rect", {
                                                                            className: "w-7 h-7 fill-none"
                                                                        }), (0,
                                                                        l.jsx)("path", {
                                                                            style: {
                                                                                fill: c.useThemeColor ? c.iconcolor : "#1da1f2"
                                                                            },
                                                                            d: "M23.9993,6.7569,24,6.7537c0-.0067-.0037-.0122-.0038-.0189a.7.7,0,0,0-.0456-.2256.6818.6818,0,0,0-.0363-.075.698.698,0,0,0-.04-.0831l-3.546-5.1a.7068.7068,0,0,0-.58-.3033H4.2518a.7068.7068,0,0,0-.58.3033l-3.546,5.1a.698.698,0,0,0-.04.0831.6818.6818,0,0,0-.0363.075.7.7,0,0,0-.0456.2256C.0037,6.7415,0,6.747,0,6.7537l.0007.0032a.7073.7073,0,0,0,.05.2462.718.718,0,0,0,.0364.0716.7019.7019,0,0,0,.0475.0935L11.4283,22.761l.0046.0039a.69.69,0,0,0,.0674.0683.7022.7022,0,0,0,.06.0582.69.69,0,0,0,.0916.0608.6592.6592,0,0,0,.0641.0319c.0133.006.0253.0144.0388.0195.0078.0028.013.0094.0209.012l.0049.0008a.6866.6866,0,0,0,.4388,0l.0049-.0008c.0079-.0026.0131-.0092.0209-.012.0135-.0051.0255-.0135.0388-.0195a.6592.6592,0,0,0,.0641-.0319.69.69,0,0,0,.0916-.0608.7022.7022,0,0,0,.06-.0582.69.69,0,0,0,.0674-.0683l.0046-.0039L23.8658,7.1682a.7019.7019,0,0,0,.0475-.0935.718.718,0,0,0,.0364-.0716A.7073.7073,0,0,0,23.9993,6.7569ZM6.2636,7.46l3.599,10.7328L2.0889,7.46Zm8.1869-5.1,1.6812,3.6884H7.8683L9.55,2.3594Zm1.7975,5.1L12,20.127,7.752,7.46Zm1.4884,0h4.1747L14.1374,18.1924Zm4.2071-1.4118H17.6829L16.0018,2.3594H19.38ZM4.62,2.3594H7.9989L6.3169,6.0478h-4.26Z"
                                                                        })]
                                                                    }), (0,
                                                                    l.jsx)("div", {
                                                                        style: {
                                                                            borderColor: (0,
                                                                            d.G)(c.accentcolor, 1),
                                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                                                            backgroundColor: (0,
                                                                            d.G)(c.secondarycolor, 1)
                                                                        },
                                                                        className: "absolute  p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                        children: (0,
                                                                        l.jsx)("span", {
                                                                            style: {
                                                                                color: c.textcolor
                                                                            },
                                                                            className: "font-semibold text-sm",
                                                                            children: "Premium"
                                                                        })
                                                                    })]
                                                                })
                                                            })
                                                        }
                                                    }
                                                    )]
                                                }) : (0,
                                                l.jsx)(l.Fragment, {})]
                                            }), "" !== c.description ? (0,
                                            l.jsx)("div", {
                                                style: {
                                                    color: c.textcolor
                                                },
                                                className: "mx-auto text-center text-base whitespace-pre-wrap break-all",
                                                children: c.typewriter ? (0,
                                                l.jsx)(m(), {
                                                    options: {
                                                        delay: 75,
                                                        strings: ["".concat(c.description)],
                                                        loop: !0,
                                                        autoStart: !0,
                                                        deleteSpeed: c.typeOnce ? 6048e5 : "natural"
                                                    }
                                                }) : (0,
                                                l.jsx)("span", {
                                                    children: c.description
                                                })
                                            }) : (0,
                                            l.jsx)(l.Fragment, {}), c.socials.length > 0 && a ? (0,
                                            l.jsx)("ul", {
                                                className: "flex flex-row flex-wrap justify-center gap-3 mt-1",
                                                children: c.socials.map((e,o)=>(0,
                                                l.jsxs)(w.E.li, {
                                                    style: {
                                                        zIndex: 30 - o
                                                    },
                                                    initial: c.animated ? v.nr : v.tZ,
                                                    animate: c.animated ? v.gM : v.j7,
                                                    transition: {
                                                        duration: .5,
                                                        ease: [.39, .21, .12, .96],
                                                        delay: o + 1 < 9 ? .1 * (o + 1) : 1 + .1 * (o + 1 - 10)
                                                    },
                                                    className: "group flex flex-col items-center",
                                                    children: [e.url.startsWith("https://") || e.url.startsWith("http://") || e.url.startsWith("mailto:") ? (0,
                                                    l.jsx)("a", {
                                                        style: {
                                                            borderColor: (0,
                                                            d.G)(c.accentcolor, 1),
                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                            borderRadius: "".concat(c.fullRoundedSocials ? "9999px" : "".concat(c.borderRadius, "rem")),
                                                            backgroundColor: (0,
                                                            d.G)(c.secondarycolor, c.opacity)
                                                        },
                                                        className: "p-2 duration-300 flex hover:brightness-50",
                                                        href: e.url,
                                                        target: "_blank",
                                                        children: r(e.name)
                                                    }) : (0,
                                                    l.jsx)("button", {
                                                        style: {
                                                            borderColor: (0,
                                                            d.G)(c.accentcolor, 1),
                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                            borderRadius: "".concat(c.fullRoundedSocials ? "9999px" : "".concat(c.borderRadius, "rem")),
                                                            backgroundColor: (0,
                                                            d.G)(c.secondarycolor, c.opacity)
                                                        },
                                                        className: "p-2 duration-300 flex hover:brightness-50",
                                                        onClick: ()=>{
                                                            C("Text copied to clipboard", "info", c.primarycolor, c.secondarycolor, c.accentcolor, c.textcolor, c.opacity, c.blur),
                                                            navigator.clipboard.writeText(e.url)
                                                        }
                                                        ,
                                                        children: r(e.name)
                                                    }), (0,
                                                    l.jsx)("div", {
                                                        style: {
                                                            borderColor: (0,
                                                            d.G)(c.accentcolor, 1),
                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                                            backgroundColor: (0,
                                                            d.G)(c.secondarycolor, 1)
                                                        },
                                                        className: "absolute  p-1 translate-y-6 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[3.2rem] duration-300 transform-gpu",
                                                        children: (0,
                                                        l.jsx)("span", {
                                                            style: {
                                                                color: c.textcolor
                                                            },
                                                            className: "font-semibold text-sm",
                                                            children: "Personal" === e.name && e.url.startsWith("https://") || e.url.startsWith("http://") ? new URL(e.url).hostname : e.url.startsWith("mailto:") ? e.url.split("mailto:").pop() : e.name
                                                        })
                                                    })]
                                                }, o))
                                            }) : (0,
                                            l.jsx)(l.Fragment, {})]
                                        }), c.customLinks.length > 0 && a ? (0,
                                        l.jsx)(w.E.div, {
                                            initial: c.animated ? v.At : v.tZ,
                                            animate: c.animated ? v.Q7 : v.j7,
                                            transition: {
                                                duration: .5,
                                                ease: [.39, .21, .12, .96],
                                                delay: .4
                                            },
                                            style: {
                                                backgroundColor: (0,
                                                d.G)(c.accentcolor, 1),
                                                height: "".concat(c.borderWidth, "px")
                                            },
                                            className: "w-full my-3"
                                        }) : (0,
                                        l.jsx)(l.Fragment, {}), c.customLinks.length > 0 && a ? (0,
                                        l.jsx)("ul", {
                                            className: "grid md:grid-cols-2 grid-cols-1 gap-3",
                                            children: c.customLinks.map((e,o)=>(0,
                                            l.jsx)(w.E.li, {
                                                initial: c.animated ? v.nr : v.tZ,
                                                animate: c.animated ? v.gM : v.j7,
                                                transition: {
                                                    duration: .5,
                                                    ease: [.39, .21, .12, .96],
                                                    delay: o + 1 < 9 ? .1 * (o + 1) : 1 + .1 * (o + 1 - 10)
                                                },
                                                className: "relative flex md:odd:last:col-span-2 group",
                                                children: e.url.startsWith("https://") || e.url.startsWith("http://") || e.url.startsWith("mailto:") ? (0,
                                                l.jsxs)("a", {
                                                    href: e.url,
                                                    target: "_blank",
                                                    style: {
                                                        borderColor: (0,
                                                        d.G)(c.accentcolor, 1),
                                                        borderWidth: "".concat(c.borderWidth, "px"),
                                                        borderRadius: "".concat(c.borderRadius, "rem"),
                                                        backgroundColor: (0,
                                                        d.G)(c.secondarycolor, c.opacity)
                                                    },
                                                    className: "w-full p-4 flex flex-row items-center justify-between hover:brightness-150 duration-300",
                                                    children: [(0,
                                                    l.jsxs)("div", {
                                                        className: "flex flex-row gap-3 items-center max-w-[80%] w-full",
                                                        children: [(0,
                                                        l.jsx)("div", {
                                                            style: {
                                                                borderColor: (0,
                                                                d.G)(c.accentcolor, 1),
                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                                backgroundColor: (0,
                                                                d.G)(c.primarycolor, c.opacity)
                                                            },
                                                            className: "p-2",
                                                            children: r(e.icon)
                                                        }), (0,
                                                        l.jsxs)("div", {
                                                            className: "flex flex-col max-w-[85%]",
                                                            children: [(0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor
                                                                },
                                                                className: "text-sm font-semibold text-left overflow-x-hidden truncate",
                                                                children: e.name
                                                            }), (0,
                                                            l.jsx)("p", {
                                                                style: {
                                                                    color: c.textcolor
                                                                },
                                                                className: "text-sm brightness-75 text-left overflow-x-hidden truncate",
                                                                children: e.url
                                                            })]
                                                        })]
                                                    }), (0,
                                                    l.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-7 h-7 fill-white group-hover:translate-x-1 duration-300",
                                                        viewBox: "0 0 16 16",
                                                        children: (0,
                                                        l.jsx)("path", {
                                                            "fill-rule": "evenodd",
                                                            d: "M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                                        })
                                                    })]
                                                }) : (0,
                                                l.jsxs)("button", {
                                                    style: {
                                                        borderColor: (0,
                                                        d.G)(c.accentcolor, 1),
                                                        borderWidth: "".concat(c.borderWidth, "px"),
                                                        borderRadius: "".concat(c.borderRadius, "rem"),
                                                        backgroundColor: (0,
                                                        d.G)(c.secondarycolor, c.opacity)
                                                    },
                                                    className: "w-full p-4 flex flex-row items-center justify-between hover:brightness-150 duration-300",
                                                    onClick: ()=>{
                                                        C("Text copied to clipboard", "info", c.primarycolor, c.secondarycolor, c.accentcolor, c.textcolor, c.opacity, c.blur),
                                                        navigator.clipboard.writeText(e.url)
                                                    }
                                                    ,
                                                    children: [(0,
                                                    l.jsxs)("div", {
                                                        className: "flex flex-row gap-3 items-center max-w-[80%] w-full",
                                                        children: [(0,
                                                        l.jsx)("div", {
                                                            style: {
                                                                borderColor: (0,
                                                                d.G)(c.accentcolor, 1),
                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                                backgroundColor: (0,
                                                                d.G)(c.primarycolor, c.opacity)
                                                            },
                                                            className: "p-2",
                                                            children: r(e.icon)
                                                        }), (0,
                                                        l.jsxs)("div", {
                                                            className: "flex flex-col max-w-[85%]",
                                                            children: [(0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor
                                                                },
                                                                className: "text-sm font-semibold text-left overflow-x-hidden truncate",
                                                                children: e.name
                                                            }), (0,
                                                            l.jsx)("p", {
                                                                style: {
                                                                    color: c.textcolor
                                                                },
                                                                className: "text-sm brightness-75 text-left overflow-x-hidden truncate",
                                                                children: e.url
                                                            })]
                                                        })]
                                                    }), (0,
                                                    l.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-7 h-7 fill-white group-hover:translate-x-1 duration-300",
                                                        viewBox: "0 0 16 16",
                                                        children: (0,
                                                        l.jsx)("path", {
                                                            "fill-rule": "evenodd",
                                                            d: "M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                                        })
                                                    })]
                                                })
                                            }, o))
                                        }) : (0,
                                        l.jsx)(l.Fragment, {}), c.songs.length > 0 && !c.useBackgroundAudio && a || c.bio_presence && a ? (0,
                                        l.jsx)(w.E.div, {
                                            initial: c.animated ? v.At : v.tZ,
                                            animate: c.animated ? v.Q7 : v.j7,
                                            transition: {
                                                duration: .5,
                                                ease: [.39, .21, .12, .96],
                                                delay: .4
                                            },
                                            style: {
                                                backgroundColor: (0,
                                                d.G)(c.accentcolor, 1),
                                                height: "".concat(c.borderWidth, "px")
                                            },
                                            className: "w-full my-3"
                                        }) : (0,
                                        l.jsx)(l.Fragment, {}), c.songs.length > 0 && !c.useBackgroundAudio || c.bio_presence ? (0,
                                        l.jsx)(l.Fragment, {
                                            children: (0,
                                            l.jsxs)("div", {
                                                className: "flex flex-col gap-3",
                                                children: [c.bio_presence && a ? (0,
                                                l.jsx)(l.Fragment, {
                                                    children: (0,
                                                    l.jsxs)(w.E.div, {
                                                        initial: c.animated ? v.nr : v.tZ,
                                                        animate: c.animated ? v.gM : v.j7,
                                                        transition: {
                                                            duration: .5,
                                                            ease: [.39, .21, .12, .96],
                                                            delay: .1
                                                        },
                                                        style: {
                                                            borderColor: (0,
                                                            d.G)(c.accentcolor, 1),
                                                            borderWidth: "".concat(c.borderWidth, "px"),
                                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                                            backgroundColor: (0,
                                                            d.G)(c.secondarycolor, c.opacity)
                                                        },
                                                        className: "flex flex-col justify-center w-full p-4",
                                                        children: [(0,
                                                        l.jsxs)("div", {
                                                            className: "flex sm:flex-row flex-col items-center gap-4 justify-between w-full",
                                                            children: [(0,
                                                            l.jsxs)("div", {
                                                                className: "flex flex-row items-center gap-3",
                                                                children: [(0,
                                                                l.jsx)("img", {
                                                                    draggable: !1,
                                                                    style: {
                                                                        borderRadius: "".concat(c.borderRadius, "rem")
                                                                    },
                                                                    className: "".concat((e=>{
                                                                        switch (e) {
                                                                        case "online":
                                                                            return "border-green-600";
                                                                        case "idle":
                                                                            return "border-yellow-600";
                                                                        case "dnd":
                                                                            return "border-red-600";
                                                                        case "offline":
                                                                            return "border-slate-600"
                                                                        }
                                                                    }
                                                                    )(c.bio_presence.status), " h-[4.5rem] w-[4.5rem] border-2"),
                                                                    src: c.bio_presence.pfp
                                                                }), (0,
                                                                l.jsx)("div", {
                                                                    className: "flex flex-col",
                                                                    children: (0,
                                                                    l.jsxs)("div", {
                                                                        className: "flex flex-col gap-1",
                                                                        children: [(0,
                                                                        l.jsxs)("div", {
                                                                            className: "flex sm:flex-row flex-col gap-1",
                                                                            children: [(0,
                                                                            l.jsxs)("h2", {
                                                                                style: {
                                                                                    color: c.textcolor
                                                                                },
                                                                                className: "font-semibold break-all",
                                                                                children: ["@", c.bio_presence.tag]
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                className: "flex flex-row flex-wrap",
                                                                                children: null === (z = c.bio_presence.badges) || void 0 === z ? void 0 : z.map(e=>{
                                                                                    switch (e) {
                                                                                    case "Active Developer":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsx)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                width: "24",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                fill: "none",
                                                                                                children: (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "M6.47213 4L4 6.47213V17.5279L6.47217 20H17.5278L20 17.5279V6.47213L17.5279 4H6.47213ZM10.8582 16.4255H8.64551C8.64551 14.5952 7.1567 13.1064 5.32642 13.1064V10.8936C7.1567 10.8936 8.64551 9.40483 8.64551 7.57454H10.8582C10.8582 9.39042 9.96684 10.9908 8.61129 12C9.96684 13.0093 10.8582 14.6096 10.8582 16.4255ZM18.6667 13.1064C16.8364 13.1064 15.3476 14.5952 15.3476 16.4255H13.1348C13.1348 14.6096 14.0263 13.0093 15.3818 12C14.0263 10.9908 13.1348 9.39042 13.1348 7.57454H15.3476C15.3476 9.40483 16.8364 10.8936 18.6667 10.8936V13.1064V13.1064Z",
                                                                                                    fill: "#2EA967"
                                                                                                })
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "Active Developer"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "HypeSquad Bravery":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsx)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: (0,
                                                                                                l.jsx)("path", {
                                                                                                    clipRule: "evenodd",
                                                                                                    d: "m5.01502 4h13.97008c.1187 0 .215.09992.215.22305v9.97865c0 .0697-.0312.1343-.0837.1767l-6.985 5.5752c-.0389.0313-.0847.0464-.1314.0464-.0466 0-.0924-.0151-.1313-.0464l-6.985-5.5752c-.05252-.0424-.08365-.107-.08365-.1767v-9.97865c0-.12313.0963-.22305.21497-.22305zm7.82148 7.0972 4.1275-2.71296c.1039-.06863.2299.04542.1725.15644l-1.7114 3.36192c-.0403.0807.0182.1756.1079.1756h1.0246c.118 0 .1664.1504.0706.219l-4.6267 3.3175c-.0414.0303-.0978.0303-.1402 0l-4.6267-3.3175c-.0948-.0686-.04639-.219.07059-.219h1.02356c.09076 0 .14925-.0949.10791-.1756l-1.71132-3.36293c-.05648-.11001.06958-.22305.17345-.15543l4.12851 2.71296c.0716.0474.1291.112.1674.1887l.6293 1.2636c.0444.0888.1714.0888.2158 0l.6293-1.2636c.0383-.0767.0958-.1423.1674-.1887z",
                                                                                                    fill: "#9c84ef",
                                                                                                    fillRule: "evenodd"
                                                                                                })
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "HypeSquad Bravery"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "HypeSquad Brilliance":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsx)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: (0,
                                                                                                l.jsx)("path", {
                                                                                                    clipRule: "evenodd",
                                                                                                    d: "m12 20c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm.7921-8.275 3.6146-2.3738c.0909-.05916.2013.03974.151.136l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1315.0618.1916l-4.0517 2.9027c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9027c-.08301-.0601-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.09626.06094-.19516.1519-.136l3.61545 2.3738c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z",
                                                                                                    fill: "#f47b67",
                                                                                                    fillRule: "evenodd"
                                                                                                })
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "HypeSquad Brilliance"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "HypeSquad Balance":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsx)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: (0,
                                                                                                l.jsx)("path", {
                                                                                                    clipRule: "evenodd",
                                                                                                    d: "m11.8622 4.05696c.076-.07595.1996-.07595.2756 0l7.8048 7.80474c.0371.0362.0574.0865.0574.1377 0 .0513-.0212.1016-.0574.1378l-7.8048 7.8047c-.038.038-.0883.0574-.1378.0574s-.0998-.0194-.1378-.0574l-7.8048-7.8047c-.03709-.0362-.0574-.0857-.0574-.1378s.02031-.1015.0574-.1377zm.9299 8.29474 3.6146-2.37377c.0909-.05917.2013.03977.151.13597l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1316.0618.1916l-4.0517 2.9028c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9028c-.08301-.06-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.0962.06094-.19514.1519-.13597l3.61545 2.37377c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z",
                                                                                                    fill: "#45ddc0",
                                                                                                    fillRule: "evenodd"
                                                                                                })
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "HypeSquad Balance"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "Discord Nitro":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsxs)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: [(0,
                                                                                                l.jsx)("circle", {
                                                                                                    cx: "15",
                                                                                                    cy: "12",
                                                                                                    fill: "#fff",
                                                                                                    r: "6"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    clipRule: "evenodd",
                                                                                                    d: "m2.20812 10.124c.42636 0 .7816-.34817.7816-.76611 0-.41793-.35524-.76615-.7816-.76615h-.42635c-.42636 0-.78177.34822-.78177.76615 0 .41794.35541.76611.78177.76611zm16.13038 9.2643c4.0504-1.811 5.7558-6.4083 3.9083-10.23937-1.2791-2.71657-3.9793-4.31859-6.8217-4.45801h-8.02965c-.71065 0-1.20812.55735-1.20812 1.18425 0 .69645.56859 1.18409 1.20812 1.18409h2.06067c.42635 0 .78158.34822.78158.76616 0 .41793-.35523.76632-.78158.76632h-5.04517c-.42635 0-.78176.34822-.78176.76615 0 .41794.35541.76611.78176.76611h3.62404c.42635 0 .78159.3484.78159.7664 0 .4179-.35524.7661-.78159.7661h-2.27402c-.42636 0-.7816.3482-.7816.7662 0 .4179.35524.7663.7816.7663h1.56336c.07112.8359.2843 1.6717.63954 2.4379 1.77654 3.8311 6.46643 5.5028 10.37463 3.7614zm-7.2725-5.1884c-1.0318-2.2025-.0466-4.80794 2.2003-5.81933 2.2469-1.0114 4.9049-.04564 5.9366 2.15683 1.0318 2.2025.0468 4.8079-2.2003 5.8193-2.2469 1.0114-4.9048.0457-5.9366-2.1568z",
                                                                                                    fill: "#4f5d7f",
                                                                                                    fillRule: "evenodd"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m16.8142 9.86662 1.4212 2.36838c.0711.1392.0711.2089 0 .3482l-1.4212 2.3683c-.0711.1393-.2131.1393-.2842.1393h-2.7714c-.142 0-.2131-.0697-.2841-.1393l-1.4213-2.3683c-.0709-.1393-.0709-.209 0-.3482l1.4213-2.36838c.071-.13926.2132-.13926.2841-.13926h2.7714c.1422-.06971.2131 0 .2842.13926z",
                                                                                                    fill: "#c5cedd"
                                                                                                })]
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "Discord Nitro"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "Early Supporter":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsxs)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: [(0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m16.4823 15.6364h-1.2218c-.7028-.0096-1.3731-.2975-1.8639-.8006s-.7621-1.1803-.7543-1.8831v-1.2509c-.0019-.2803.1071-.5501.3033-.7504s.4636-.3148.744-.3187h5.7382v-1.49815h-10.18186c-.92363 2.08005-1.86909 4.24725-2.18181 5.09095-.20109.4955-.54642.9193-.99121 1.2162-.44479.297-.96854.4535-1.50334.4492v.8946c.40174.4023.87908.7212 1.40455.9384s1.08869.3283 1.65727.327h9.1564c.7008 0 1.373-.2779 1.8693-.7728s.776-1.1663.7779-1.8672v-.1891c-.4132.2695-.8957.4135-1.3891.4146zm-6.1309-2.0437c-.1802.0013-.35663-.0514-.50658-.1513-.14996-.0999-.26654-.2424-.33472-.4092-.06819-.1668-.08484-.3502-.04782-.5265.03702-.1764.12602-.3376.25552-.4629s.2936-.2089.471-.2401c.1775-.0312.3603-.0084.5247.0652.1644.0737.3031.1949.398.3481.0949.1531.1417.3312.1344.5113-.0093.2315-.1074.4506-.274.6118-.1665.1611-.3888.252-.6205.2536z",
                                                                                                    fill: "#9cb8ff"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m19.617 10.6327h-5.92c-.1394.001-.2773.0294-.4057.0836-.1285.0543-.245.1333-.343.2326-.0979.0992-.1753.2168-.2278.346-.0524.1292-.079.2675-.078.4069v1.2509c-.0078.7028.2635 1.38.7543 1.8831s1.1611.791 1.8639.8006h2.7854c.4934-.0011.9759-.1451 1.3891-.4146l.0728-.0436c.3531-.2533.6404-.5876.8378-.9748s.2991-.8161.2967-1.2507v-1.2509c.0039-.2772-.1015-.5448-.2934-.7449s-.4549-.3166-.7321-.3242zm-2.6109 3.8327h-1.1563c-.0626.0081-.1261.0027-.1864-.0157s-.1159-.0495-.1633-.0911c-.0473-.0416-.0853-.0929-.1112-.1503-.026-.0575-.0395-.1198-.0395-.1829 0-.063.0135-.1253.0395-.1828.0259-.0574.0639-.1087.1112-.1503.0474-.0416.103-.0727.1633-.0911s.1238-.0238.1864-.0158h1.1563c.0626-.008.1261-.0026.1864.0158s.1159.0495.1633.0911c.0473.0416.0853.0929.1112.1503.026.0575.0395.1198.0395.1828 0 .0631-.0135.1254-.0395.1829-.0259.0574-.0639.1087-.1112.1503-.0474.0416-.103.0727-.1633.0911s-.1238.0238-.1864.0157zm2.0728 0h-.4437c-.1069-.0137-.2052-.066-.2764-.147s-.1105-.1851-.1105-.293c0-.1078.0393-.2119.1105-.2929s.1695-.1333.2764-.1471h.4437c.0625-.008.126-.0026.1863.0158s.116.0495.1633.0911c.0474.0416.0853.0929.1113.1503.0259.0575.0394.1198.0394.1828 0 .0631-.0135.1254-.0394.1829-.026.0574-.0639.1087-.1113.1503-.0473.0416-.103.0727-.1633.0911s-.1238.0238-.1863.0157z",
                                                                                                    fill: "#cbdaf7"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m17.0061 13.5855h-1.1564c-.0625-.0081-.1261-.0027-.1864.0157s-.1159.0495-.1633.0911c-.0473.0417-.0852.0929-.1112.1503-.026.0575-.0394.1198-.0394.1829 0 .063.0134.1253.0394.1828.026.0574.0639.1087.1112.1503.0474.0416.103.0727.1633.0911s.1239.0238.1864.0158h1.1564c.0625.008.126.0026.1863-.0158s.116-.0495.1633-.0911c.0474-.0416.0853-.0929.1113-.1503.0259-.0575.0394-.1198.0394-.1828 0-.0631-.0135-.1254-.0394-.1829-.026-.0574-.0639-.1086-.1113-.1503-.0473-.0416-.103-.0727-.1633-.0911s-.1238-.0238-.1863-.0157zm2.0581 0h-.4436c-.107.0137-.2052.066-.2765.147-.0712.081-.1105.1851-.1105.293 0 .1078.0393.2119.1105.2929.0713.081.1695.1333.2765.1471h.4436c.0626.008.1261.0026.1864-.0158s.1159-.0495.1633-.0911c.0473-.0416.0853-.0929.1112-.1503.026-.0575.0395-.1198.0395-.1828 0-.0631-.0135-.1254-.0395-.1829-.0259-.0574-.0639-.1086-.1112-.1503-.0474-.0416-.103-.0727-.1633-.0911s-.1238-.0238-.1864-.0157z",
                                                                                                    fill: "#9cb8ff"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m2.62786 15.1709c-.10957-.05-.21639-.1058-.32-.1673v4.2037l1.13455.7927 1.12727-.7927v-3.3164c-.71689.0255-1.41481-.2333-1.94182-.72z",
                                                                                                    fill: "#ff903e"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m6.3152 13.7455c-.1373.345-.34381.6583-.6068.9205-.26298.2622-.57687.4677-.92232.604-.34546.1363-.71516.2004-1.08632.1883-.37117-.012-.73594-.0999-1.07183-.2583.52585.4893 1.22391.7508 1.94182.7273.53666-.0108 1.05762-.1831 1.49485-.4945s.77041-.7473.95606-1.251c.32727-.8291 1.27272-2.9963 2.18182-5.09089h-.92364s-1.25818 2.85819-1.96364 4.65459z",
                                                                                                    fill: "#d0d9ea"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m11.5298 4 .6182.05091z",
                                                                                                    fill: "#ebeff7"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m16.897 7.11273c.8756.02248 1.7483.11 2.6109.26182-.5673-.67636-2.7782-2.90909-7.3527-3.30909 3.309.79273 4.5309 2.67636 4.7418 3.04727zm-10.58184 6.63277c.70545-1.7964 1.96363-4.61095 1.96363-4.61095s2.24001-1.69454 6.85091-1.98545c-1.6073-2.18182-4.2473-2.90909-5.87636-3.08364-5.62182.60364-8.24727 4.87273-8.24727 8.27634-.033091.5186.06957 1.0368.29786 1.5036s.57432.866 1.00396 1.1582c.1036.0615.21042.1173.32.1673.33408.1592.69713.2485 1.06693.2625.36979.014.73856-.0476 1.08372-.181.34517-.1335.65948-.3359.92369-.595.26422-.2591.47278-.5694.61293-.9119zm-4.74909-2.0655c.02458-.5434.26177-1.0553.66042-1.4254.39864-.37006.92678-.5686 1.47049-.55278.53236.11535.99792.43568 1.29598.89158s.40466 1.0109.29674 1.5448c-.02451.5382-.25765 1.0458-.65 1.415-.39235.3693-.91308.5713-1.45181.5632-.26672-.053-.52036-.1581-.74635-.3094-.22599-.1512-.41989-.3456-.57057-.572-.15069-.2263-.25519-.4802-.30751-.7471-.05232-.2668-.05144-.5414.00261-.8079z",
                                                                                                    fill: "#fff"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m16.1552 7.10544c-.3564 0-.7273 0-1.0328.04363-4.6109.29091-6.84359 1.98546-6.84359 1.98546h15.60729c-1.29-.93245-2.7877-1.53654-4.3637-1.76-.8626-.15183-1.7353-.23934-2.6109-.26182z",
                                                                                                    fill: "#7687b2"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m3.18792 14.1164c.54495.0178 1.07495-.1799 1.47517-.5502.40023-.3703.63843-.8833.66301-1.428.10697-.5391-.00456-1.0986-.31006-1.5555s-.77995-.77374-1.31903-.88086c-.5437-.01583-1.07184.18271-1.47049.55276-.39864.3701-.63583.882-.66042 1.4254-.05404.2665-.05493.5411-.0026.8079.05232.2669.15682.5208.30751.7471.15068.2264.34458.4208.57057.572.22599.1513.47962.2564.74634.3094zm-1.28-2.3564c.00742-.1825.05112-.3617.12857-.5271s.18709-.3137.32251-.4363c.13542-.1225.29391-.2168.4662-.2775.1723-.0606.35494-.0862.53727-.0754.35402.0768.6634.2902.86088.5939.19747.3037.26707.6731.19366 1.0279-.01513.3614-.17287.7021-.43868.9475-.26581.2453-.61802.3753-.9795.3616-.35825-.0704-.67407-.2798-.87847-.5823-.20441-.3025-.28078-.6736-.21244-1.0323z",
                                                                                                    fill: "#7687b2"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m2.96248 13.3745c.36148.0138.71369-.1162.9795-.3616.2658-.2453.42355-.586.43868-.9474.0734-.3548.0038-.7242-.19367-1.0279-.19748-.3037-.50686-.5171-.86088-.594-.36217-.0118-.71436.1199-.97995.3664s-.42308.588-.43823.95c-.06934.3535.00209.7201.19907 1.0216.19698.3016.50394.5144.85548.5929zm12.16002-6.21814h1.7527c-.2182-.37818-1.4545-2.25454-4.7345-3.04727l-.611-.10909h-.9163c-.4521.0002-.90378.02691-1.35274.08 1.62184.19636 4.25454.86545 5.86184 3.07636z",
                                                                                                    fill: "#ff903e"
                                                                                                }), (0,
                                                                                                l.jsx)("circle", {
                                                                                                    cx: "10.28",
                                                                                                    cy: "12.75",
                                                                                                    fill: "#040405",
                                                                                                    r: "1"
                                                                                                })]
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "Early Supporter"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "Early Verified Bot Developer":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsx)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m21.58 11.4-4.28-7.39-.35-.6h-9.91l-.35.6-4.27 7.39-.35.6.35.6 4.27 7.39.35.6h9.92l.35-.6 4.28-7.39.35-.6zm-13.07-1.03-1.63 1.63 1.63 1.63v2.73l-4.36-4.36 4.37-4.37v2.74zm3.12 6.93-2.04-.63 3.1-9.98 2.04.64zm3.86-.93v-2.73l1.63-1.64-1.63-1.63v-2.74l4.36 4.37z",
                                                                                                    fill: "#3e70dd"
                                                                                                })
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "Early Verified Bot Developer"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "Discord Bug Hunter_1":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsxs)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: [(0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m16.5822 2.63812s7.6721 5.23623 4.7567 12.58868c-2.9154 7.3525-8.7142 5.313-6.5469 3.1648 2.1674-2.1482-2.5573-3.6059-5.58143-6.3935l7.36523-9.35998",
                                                                                                    fill: "#3ba55c"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m16.1155 9.83717c-1.6175 2.05873-3.9 3.08803-5.6646 2.71723l-6.15684 7.8447c-.10362.1324-.23231.243-.37871.3256-.1464.0825-.30764.1354-.47451.1556-.16686.0202-.33606.0073-.49793-.038-.16187-.0452-.31322-.122-.44541-.2258-.13374-.1032-.2457-.2319-.32942-.3786s-.13754-.3086-.15834-.4762c-.02081-.1677-.00819-.3378.03712-.5005s.12242-.3149.22687-.4476l6.12492-7.832c-.81197-1.62394-.36443-4.11099 1.27869-6.18886 2.03946-2.58295 5.11476-3.54836 6.89856-2.15459 1.7837 1.39377 1.5664 4.61607-.4604 7.19902z",
                                                                                                    fill: "#b4e1cd"
                                                                                                })]
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "Discord Bug Hunter"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "Discord Bug Hunter_2":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsxs)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: [(0,
                                                                                                l.jsx)("mask", {
                                                                                                    id: "a",
                                                                                                    height: "19",
                                                                                                    maskUnits: "userSpaceOnUse",
                                                                                                    width: "16",
                                                                                                    x: "2",
                                                                                                    y: "2",
                                                                                                    children: (0,
                                                                                                    l.jsx)("path", {
                                                                                                        d: "m16.1438 9.84735c-1.6048 2.04975-3.9088 3.08265-5.7044 2.70125l-6.14926 7.8813c-.44491.572-1.22351.6356-1.79554.1907-.57203-.445-.63558-1.2235-.25423-1.7956l6.1493-7.8177c-.82626-1.60486-.38135-4.09954 1.28707-6.21286 2.04976-2.57413 5.11646-3.52751 6.91196-2.19278 1.7956 1.33473 1.5413 4.6239-.4449 7.24569z",
                                                                                                        fill: "#ffd56c"
                                                                                                    })
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m16.5888 2.60168s7.6906 5.25949 4.7351 12.63232c-2.9555 7.3728-8.7235 5.323-6.5307 3.1461s-2.5582-3.591-5.57726-6.4194z",
                                                                                                    fill: "#ffeac0"
                                                                                                }), (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m16.1438 9.84735c-1.6048 2.04975-3.9088 3.08265-5.7044 2.70125l-6.14926 7.8813c-.44491.572-1.22351.6356-1.79554.1907-.57203-.445-.63558-1.2235-.25423-1.7956l6.1493-7.8177c-.82626-1.60486-.38135-4.09954 1.28707-6.21286 2.04976-2.57413 5.11646-3.52751 6.91196-2.19278 1.7956 1.33473 1.5413 4.6239-.4449 7.24569z",
                                                                                                    fill: "#ffd56c"
                                                                                                }), (0,
                                                                                                l.jsxs)("g", {
                                                                                                    fill: "#fff",
                                                                                                    mask: "url(#a)",
                                                                                                    children: [(0,
                                                                                                    l.jsx)("path", {
                                                                                                        d: "m13.0389-1.26782.7405.09754-3.1567 23.96118-.74043-.0976z"
                                                                                                    }), (0,
                                                                                                    l.jsx)("path", {
                                                                                                        d: "m14.2822-1.51801 1.6226.21377-3.1566 23.96114-1.6226-.2137z"
                                                                                                    })]
                                                                                                })]
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "Discord Bug Hunter"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "Discord Certified Moderator":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsx)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: (0,
                                                                                                l.jsx)("path", {
                                                                                                    d: "m17.2719 3h-9.54383c-.14912 1.9386-1.78947 3.42982-3.72807 3.42982v.89474c0 4.39914 2.08772 8.50004 5.74123 11.40794l2.75877 2.1622 2.7588-2.1622c3.6535-2.8334 5.7412-7.0088 5.7412-11.40794v-.89474c-1.9386 0-3.5044-1.49122-3.7281-3.42982zm-6.4868 12.8991c-2.23685-1.7895-3.57896-4.3245-3.57896-7.08331v-.52193c1.19298 0 2.23684-.89474 2.3114-2.08772h2.98246v11.10966z",
                                                                                                    fill: "#5865f2"
                                                                                                })
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "Discord Certified Moderator"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "Discord Staff":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsx)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: (0,
                                                                                                l.jsxs)("g", {
                                                                                                    fill: "#5865f2",
                                                                                                    children: [(0,
                                                                                                    l.jsx)("path", {
                                                                                                        d: "m5.92127 6.03526s.22115-.33086.31286-.47743c.09172-.14657-.23743-.49286-.36514-.60257-.12772-.10971-.32914-.05486-.32914-.05486-1.60715.71229-2.41115 2.17372-2.52086 2.466-.10972.29229.27943.61115.56657.76715.132.072.342-.08743.47143-.20572l.04371-.04457.06772-.06857.00085-.00086 4.37229 4.35517.59743-.5975 1.09801-1.098-4.32173-4.43224z"
                                                                                                    }), (0,
                                                                                                    l.jsx)("path", {
                                                                                                        d: "m16.2505 10.6294.2306-.2194 2.0717 2.052c.0146.0129.03.018.0437.018.0395 0 .072-.036.072-.036s2.2937-2.2757 2.3015-2.2834c.0677-.0669 0-.1037 0-.1037l-1.7692-1.78119-.0026.00258-.2425-.23743.1354-.13029.2897.03343-.0548-.384.0728-.07371-.1088-.55372c-.378-.53571-1.4135-1.39371-1.4135-1.39371l-.5417-.09772-.0548.07286-.408-.06086.0394.348.0257.02572-.1209.12171-.6685-.654s-3.8795-2.10686-4.086-2.20457c-.1166-.054-.2023-.09-.2846-.09-.0634 0-.1251.02143-.1963.072-.1646.11571-.0677.34886-.0677.34886l2.412 4.45714.4826.47829-.1509.15085-.0557.05572-.3857-.05315.0591.38229-.1114.11143-.0197-.01972c-.018-.018-.0429-.02742-.0669-.02742s-.048.00942-.0668.02742c-.0369.03686-.0369.09686 0 .13372l.0197.01971-.0532.054-.0137-.01457c-.0188-.018-.0428-.02743-.0668-.02743-.0249 0-.0489.00943-.0669.02743-.0368.03686-.0368.09686 0 .13372l.0146.01457-1.0149 1.02004-.0231-.0232c-.0189-.018-.0429-.0274-.0669-.0274s-.048.0094-.0668.0274c-.0369.0369-.0369.0969 0 .1337l.024.0232-.054.054-.018-.0172c-.018-.0188-.0429-.0283-.066-.0283-.0249 0-.0489.0095-.0677.0283-.036.0369-.036.096 0 .1329l.018.018-.132.1337-.018.1697.0694.0712-.0017.0008-.084.0857-5.47632 5.4755-.07114-.0592-.22714.0326-.12858.1303-.00857-.0086c-.01885-.0189-.04285-.0283-.06685-.0283s-.04886.0094-.06686.0283c-.03686.0369-.03686.096 0 .1329l.01028.0102-.05314.0549-.00514-.0051c-.018-.0189-.04286-.0283-.06686-.0283s-.048.0094-.06686.0283c-.036.0368-.036.096 0 .1328l.006.0069-1.002 1.0191-.02057-.0206c-.01885-.0188-.042-.0274-.06685-.0274-.024 0-.048.0086-.06686.0274-.03686.0369-.03686.0969 0 .1338l.02228.0214-.05314.054-.01628-.0163c-.01886-.018-.04286-.0274-.06772-.0274-.02314 0-.048.0094-.066.0274-.03686.0369-.03686.0969 0 .1337l.01714.018-.07457.0763-.38828-.0694.02914.4337-.12257.1251.10628.5846s.16286.5091.498.8469c.32486.3274.82029.4842.84172.5005l.55971.0977.138-.1354.38572.0626-.06343-.3814.11743-.1149.054.054c.018.018.042.0274.066.0274s.04885-.0094.06685-.0274c.03686-.0377.03686-.0969 0-.1337l-.05314-.0532.05486-.0531.04628.0463c.018.0188.04286.0283.06686.0283s.048-.0095.06686-.0283c.03686-.0369.03686-.096 0-.1329l-.04543-.0463 1.01743-1.0037.04457.0446c.018.0189.04286.0274.06686.0274s.048-.0085.06685-.0274c.036-.0369.036-.0969 0-.1337l-.04371-.0429.054-.054.03771.0377c.018.018.042.0275.066.0275.02486 0 .04886-.0095.06686-.0275.03686-.0368.03686-.0968 0-.1337l-.03686-.0368.114-.1115.04115-.2442-.06086-.0609.00086-.0009.11057-.1097 5.43946-5.4411-.0026-.0052.1063.1098.1706-.0189.1534-.1543.0248.0249c.0189.018.0429.0274.0669.0274s.0489-.0094.0669-.0274c.0368-.0369.0368-.0969 0-.1337l-.0249-.0249.054-.0531.0189.0188c.018.018.042.0274.0668.0274.024 0 .048-.0094.066-.0274.0369-.0368.0369-.0968 0-.1337l-.0188-.0197 1.0165-1.0183.0266.0266c.018.018.042.0274.066.0274.0249 0 .0489-.0094.0669-.0274.0368-.0369.0368-.0969 0-.1337l-.0266-.0266.054-.054.0206.0214c.0188.018.0428.0274.0668.0274s.048-.0094.0669-.0274c.0368-.0377.0368-.0968 0-.1337l-.0206-.0214.1131-.1132.378.0592z"
                                                                                                    }), (0,
                                                                                                    l.jsx)("path", {
                                                                                                        d: "m17.0057 16.7793-2.4111-1.8274-.4294-.4423-1.6637 1.6637.4183.3995 1.5711 2.3562 2.1188 2.3203 2.4421-2.2783z"
                                                                                                    })]
                                                                                                })
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "Discord Staff"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "HypeSquad Events":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsx)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: (0,
                                                                                                l.jsxs)("g", {
                                                                                                    fill: "#fbb848",
                                                                                                    children: [(0,
                                                                                                    l.jsx)("path", {
                                                                                                        d: "m21.5912 6.84349-7.8694 5.16551c-.1351.088-.2444.2103-.317.3543l-1.1997 2.4056c-.0174.0399-.0461.0739-.0825.0977-.0364.0239-.079.0366-.1226.0366s-.0862-.0127-.1226-.0366c-.0364-.0238-.0651-.0578-.0825-.0977l-1.1997-2.4056c-.0726-.144-.1819-.2663-.317-.3543l-7.86944-5.16551c-.03957-.04698-.09618-.07632-.15738-.08157-.0612-.00524-.12198.01404-.16896.0536-.04698.03957-.07633.09618-.08157.15738-.00525.0612.01403.12198.0536.16896l3.28825 6.39624c.01598.0335.02385.0703.02297.1074s-.01049.0734-.02804.1061c-.01756.0327-.04257.0608-.07301.082-.03043.0212-.06544.035-.10219.0402h-1.97668c-.04881-.0005-.0965.0146-.13617.043-.03967.0285-.06926.0688-.08449.1152s-.0153.0964-.00022.1428c.01509.0464.04455.0869.08413.1154l8.8142 6.3155c.0403.0275.088.0422.1368.0422s.0965-.0147.1368-.0422l8.8142-6.3155c.0396-.0285.069-.069.0841-.1154s.015-.0964-.0002-.1428-.0448-.0867-.0845-.1152c-.0396-.0284-.0873-.0435-.1362-.043h-1.9766c-.0389-.0015-.0769-.0126-.1105-.0323-.0335-.0197-.0617-.0474-.082-.0806s-.0321-.071-.0343-.1098c-.0022-.0389.0052-.0777.0216-.113l3.3132-6.39624c.0395-.04698.0588-.10776.0536-.16896-.0053-.0612-.0346-.11781-.0816-.15738-.047-.03956-.1078-.05884-.169-.0536-.0612.00525-.1178.03459-.1574.08157z"
                                                                                                    }), (0,
                                                                                                    l.jsx)("path", {
                                                                                                        d: "m12.1741 2.10696.8081 1.64723c.0143.02721.0346.05084.0594.06913.0247.01829.0533.03078.0835.03654l1.8213.26107c.0356.00524.0691.02036.0966.04366s.0479.05383.0589.08814.0122.07102.0034.10595c-.0089.03494-.0273.06671-.0532.0917l-1.3178 1.28049c-.0213.02203-.0373.04854-.047.07758s-.0127.05988-.009.09025l.3108 1.80885c.0069.03487.0036.07096-.0094.10404-.013.03307-.0351.06174-.0639.08264-.0287.0209-.0628.03315-.0983.03532-.0354.00217-.0708-.00584-.1019-.02309l-1.6285-.85159c-.0265-.01527-.0565-.02331-.0871-.02331-.0305 0-.0605.00804-.087.02331l-1.6286.85159c-.031.01725-.0664.02526-.1019.02309-.0354-.00217-.0695-.01442-.0983-.03532-.0287-.0209-.0509-.04957-.0639-.08264-.0129-.03308-.0162-.06917-.0094-.10404l.3108-1.80885c.0038-.03037.0008-.06121-.0089-.09025s-.0258-.05555-.047-.07758l-1.31781-1.28049c-.02595-.02499-.04438-.05676-.05318-.0917-.00881-.03493-.00764-.07164.00336-.10595s.03141-.06484.05889-.08814c.02749-.0233.06095-.03842.0966-.04366l1.82124-.25485c.0303-.00576.0588-.01825.0836-.03654.0247-.01829.045-.04192.0594-.06913l.8081-1.64723c.015-.03321.0392-.06147.0696-.08149.0305-.02003.066-.03101.1025-.03166.0364-.00065.0723.00905.1035.02798.0311.01893.0563.0463.0725.07895z"
                                                                                                    })]
                                                                                                })
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "HypeSquad Events"
                                                                                                })
                                                                                            })]
                                                                                        });
                                                                                    case "Partnered Server Owner":
                                                                                        return (0,
                                                                                        l.jsxs)("div", {
                                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                                            children: [(0,
                                                                                            l.jsx)("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                className: "group",
                                                                                                height: "24",
                                                                                                viewBox: "0 0 24 24",
                                                                                                width: "24",
                                                                                                children: (0,
                                                                                                l.jsxs)("g", {
                                                                                                    fill: "#5865f2",
                                                                                                    children: [(0,
                                                                                                    l.jsx)("path", {
                                                                                                        d: "m16.6033 9.15179-2.4908 1.66051c-.249.2491-.6642.1661-.7472 0-.2491-.2491-.6642-.4151-.9133-.4982-.6642-.166-1.2454 0-1.7435.2491l-.83027.5812-4.64945 2.9889c-.99631.6642-2.2417.4152-2.9059-.6642-.66421-1.0793-.24908-2.2417.74723-2.8228l5.31365-3.65318c1.49447-.83026 3.23804-1.24539 4.89854-.83026 1.4114.24907 2.6568.99631 3.4871 2.15867.249.16605.249.66421-.1661.83026z"
                                                                                                    }), (0,
                                                                                                    l.jsx)("path", {
                                                                                                        d: "m22 11.6425c0 .7473-.4152 1.4115-.9963 1.7436l-5.4797 3.5701c-.9964.6642-2.2417.9963-3.4041.9963-.4982 0-.9963 0-1.4114-.166-1.41148-.2491-2.49081-1.1624-3.48712-2.1587-.16606-.1661-.16606-.6642.16605-.7473l2.49077-1.6605c.2491-.249.6642-.166.7472 0 .2491.2491.4982.4152.9133.4982.6642.166 1.2454 0 1.7436-.2491l1.2453-.7472 3.7362-2.4908.4982-.41513c.9963-.6642 2.2417-.41512 2.9059.66423.166.4151.3321.7472.3321 1.1623z"
                                                                                                    })]
                                                                                                })
                                                                                            }), (0,
                                                                                            l.jsx)("div", {
                                                                                                style: {
                                                                                                    borderColor: (0,
                                                                                                    d.G)(c.accentcolor, 1),
                                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                                    backgroundColor: (0,
                                                                                                    d.G)(c.secondarycolor, 1)
                                                                                                },
                                                                                                className: "absolute  p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                                children: (0,
                                                                                                l.jsx)("span", {
                                                                                                    style: {
                                                                                                        color: c.textcolor
                                                                                                    },
                                                                                                    className: "font-semibold text-sm",
                                                                                                    children: "Partnered Server Owner"
                                                                                                })
                                                                                            })]
                                                                                        })
                                                                                    }
                                                                                }
                                                                                )
                                                                            })]
                                                                        }), null !== c.bio_presence.customStatus ? (0,
                                                                        l.jsxs)("div", {
                                                                            className: "flex flex-row gap-1",
                                                                            children: [null !== c.bio_presence.customStatus.emoji ? (0,
                                                                            l.jsx)("img", {
                                                                                draggable: !1,
                                                                                src: c.bio_presence.customStatus.emoji,
                                                                                className: "h-5 w-5",
                                                                                alt: ""
                                                                            }) : (0,
                                                                            l.jsx)(l.Fragment, {}), (0,
                                                                            l.jsx)("p", {
                                                                                style: {
                                                                                    color: c.textcolor
                                                                                },
                                                                                className: "text-sm break-all",
                                                                                children: c.bio_presence.customStatus.name
                                                                            })]
                                                                        }) : (0,
                                                                        l.jsx)("p", {
                                                                            style: {
                                                                                color: c.textcolor
                                                                            },
                                                                            className: "text-sm break-all",
                                                                            children: null === (y = c.bio_presence.activities[0]) || void 0 === y ? void 0 : y.title
                                                                        })]
                                                                    })
                                                                })]
                                                            }), (0,
                                                            l.jsxs)("a", {
                                                                href: "https://discord.com/users/".concat(c.bio_presence._id),
                                                                target: "_blank",
                                                                style: {
                                                                    borderColor: (0,
                                                                    d.G)(c.accentcolor, 1),
                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                    backgroundColor: (0,
                                                                    d.G)(c.primarycolor, c.opacity),
                                                                    color: c.textcolor
                                                                },
                                                                className: "p-1.5 pl-3 duration-300 flex hover:brightness-150 sm:w-fit w-full justify-center items-center text-sm font-semibold group whitespace-nowrap",
                                                                children: ["Add on Discord", (0,
                                                                l.jsx)("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "w-7 h-7 fill-white group-hover:translate-x-1 duration-300",
                                                                    viewBox: "0 0 16 16",
                                                                    children: (0,
                                                                    l.jsx)("path", {
                                                                        "fill-rule": "evenodd",
                                                                        d: "M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                                                    })
                                                                })]
                                                            })]
                                                        }), c.bio_presence && c.bio_presence.activities.length > 0 ? (0,
                                                        l.jsx)(w.E.div, {
                                                            initial: c.animated ? v.At : v.tZ,
                                                            animate: c.animated ? v.Q7 : v.j7,
                                                            transition: {
                                                                duration: .5,
                                                                ease: [.39, .21, .12, .96],
                                                                delay: .7
                                                            },
                                                            style: {
                                                                backgroundColor: (0,
                                                                d.G)(c.accentcolor, 1)
                                                            },
                                                            className: "w-full h-0.5 my-3"
                                                        }) : (0,
                                                        l.jsx)(l.Fragment, {}), c.bio_presence && c.bio_presence.activities.length > 0 ? (0,
                                                        l.jsx)(w.E.div, {
                                                            initial: c.animated ? v.nr : v.tZ,
                                                            animate: c.animated ? v.gM : v.j7,
                                                            transition: {
                                                                duration: .5,
                                                                ease: [.39, .21, .12, .96],
                                                                delay: .5
                                                            },
                                                            className: "flex flex-col",
                                                            children: (0,
                                                            l.jsx)(M, {
                                                                bio: c,
                                                                primarycolor: c.primarycolor,
                                                                secondarycolor: c.secondarycolor,
                                                                accentcolor: c.accentcolor,
                                                                textcolor: c.textcolor
                                                            })
                                                        }) : (0,
                                                        l.jsx)(l.Fragment, {})]
                                                    })
                                                }) : (0,
                                                l.jsx)(l.Fragment, {}), c.songs.length > 0 && !c.useBackgroundAudio && a ? (0,
                                                l.jsxs)(w.E.div, {
                                                    initial: c.animated ? v.nr : v.tZ,
                                                    animate: c.animated ? v.gM : v.j7,
                                                    transition: {
                                                        duration: .5,
                                                        ease: [.39, .21, .12, .96],
                                                        delay: .1
                                                    },
                                                    style: {
                                                        borderColor: (0,
                                                        d.G)(c.accentcolor, 1),
                                                        borderWidth: "".concat(c.borderWidth, "px"),
                                                        borderRadius: "".concat(c.borderRadius, "rem"),
                                                        backgroundColor: (0,
                                                        d.G)(c.secondarycolor, c.opacity)
                                                    },
                                                    className: "p-3",
                                                    children: [(0,
                                                    l.jsx)("button", {
                                                        onClick: S,
                                                        className: i().dynamic([["c6b2cdca192799ae", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.primarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.primarycolor, c.accentcolor]]]) + " flex absolute z-10",
                                                        children: Z ? (0,
                                                        l.jsx)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            style: {
                                                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                                                            },
                                                            viewBox: "0 0 16 16",
                                                            className: i().dynamic([["c6b2cdca192799ae", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.primarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.primarycolor, c.accentcolor]]]) + " h-7 w-7",
                                                            children: (0,
                                                            l.jsx)("path", {
                                                                d: "M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0",
                                                                className: i().dynamic([["c6b2cdca192799ae", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.primarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.primarycolor, c.accentcolor]]])
                                                            })
                                                        }) : (0,
                                                        l.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            style: {
                                                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                                                            },
                                                            viewBox: "0 0 16 16",
                                                            className: i().dynamic([["c6b2cdca192799ae", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.primarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.primarycolor, c.accentcolor]]]) + " h-7 w-7",
                                                            children: [(0,
                                                            l.jsx)("path", {
                                                                d: "M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z",
                                                                className: i().dynamic([["c6b2cdca192799ae", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.primarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.primarycolor, c.accentcolor]]])
                                                            }), (0,
                                                            l.jsx)("path", {
                                                                d: "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z",
                                                                className: i().dynamic([["c6b2cdca192799ae", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.primarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.primarycolor, c.accentcolor]]])
                                                            }), (0,
                                                            l.jsx)("path", {
                                                                d: "M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06",
                                                                className: i().dynamic([["c6b2cdca192799ae", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.primarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.primarycolor, c.accentcolor]]])
                                                            })]
                                                        })
                                                    }), (0,
                                                    l.jsx)(i(), {
                                                        id: "c6b2cdca192799ae",
                                                        dynamic: [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.primarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.primarycolor, c.accentcolor],
                                                        children: ".rhap_container{margin-top:0px}.rhap_header{color:".concat(c.textcolor, ";font-family:").concat(c.font, ",sans-serif;font-weight:600;font-size:1rem;line-height:1.5rem;word-break:break-all}.rhap_main-controls-button{color:").concat(c.accentcolor, "}.rhap_time{color:").concat(c.textcolor, ";font-family:").concat(c.font, ",sans-serif;font-weight:600;font-size:.9rem;line-height:1.5rem}.rhap_progress-bar-show-download{background-color:").concat(c.primarycolor, "}.rhap_progress-filled{background-color:").concat(c.accentcolor, "}.rhap_progress-indicator{background:").concat(c.accentcolor, "}.rhap_volume-button{color:").concat(c.accentcolor, "}.rhap_volume-bar{background:").concat(c.primarycolor, "}.rhap_volume-indicator{background:").concat(c.accentcolor, "}")
                                                    }), (0,
                                                    l.jsx)(h.Z, {
                                                        ref: k,
                                                        autoPlay: a,
                                                        header: u ? L.name.replace(/\.[^/.]+$/, "").replaceAll("_", " ") : "Now playing: -",
                                                        src: L.url,
                                                        showSkipControls: !0,
                                                        showJumpControls: !1,
                                                        volume: .1,
                                                        onPlay: ()=>b(e=>({
                                                            ...e,
                                                            isMusicPlaying: !0
                                                        })),
                                                        onClickPrevious: A,
                                                        onClickNext: B,
                                                        onEnded: B,
                                                        customVolumeControls: [],
                                                        customAdditionalControls: []
                                                    })]
                                                }) : (0,
                                                l.jsx)(l.Fragment, {})]
                                            })
                                        }) : (0,
                                        l.jsx)(l.Fragment, {}), c.embeds.length > 0 && a ? (0,
                                        l.jsx)(w.E.div, {
                                            initial: c.animated ? v.At : v.tZ,
                                            animate: c.animated ? v.Q7 : v.j7,
                                            transition: {
                                                duration: .5,
                                                ease: [.39, .21, .12, .96],
                                                delay: .4
                                            },
                                            style: {
                                                backgroundColor: (0,
                                                d.G)(c.accentcolor, 1),
                                                height: "".concat(c.borderWidth, "px")
                                            },
                                            className: "w-full my-3"
                                        }) : (0,
                                        l.jsx)(l.Fragment, {}), c.embeds.length > 0 && a ? (0,
                                        l.jsx)("ul", {
                                            className: "flex flex-col w-full gap-3",
                                            children: c.embeds.map((e,o)=>(0,
                                            l.jsx)(w.E.li, {
                                                initial: c.animated ? v.nr : v.tZ,
                                                animate: c.animated ? v.gM : v.j7,
                                                transition: {
                                                    duration: .5,
                                                    ease: [.39, .21, .12, .96],
                                                    delay: o + 1 < 9 ? .1 * (o + 1) : 1 + .1 * (o + 1 - 10)
                                                },
                                                className: "flex flex-col",
                                                children: (0,
                                                l.jsx)(f.p, {
                                                    as: "div",
                                                    style: {
                                                        borderColor: (0,
                                                        d.G)(c.accentcolor, 1),
                                                        borderWidth: "".concat(c.borderWidth, "px"),
                                                        borderRadius: "".concat(c.borderRadius, "rem"),
                                                        backgroundColor: (0,
                                                        d.G)(c.secondarycolor, c.opacity)
                                                    },
                                                    children: r=>{
                                                        let {open: a} = r;
                                                        return (0,
                                                        l.jsx)(l.Fragment, {
                                                            children: (0,
                                                            l.jsx)("dt", {
                                                                children: (0,
                                                                l.jsxs)(f.p.Button, {
                                                                    className: "flex flex-col w-full items-start text-left",
                                                                    children: [(0,
                                                                    l.jsx)("h1", {
                                                                        style: {
                                                                            color: c.textcolor
                                                                        },
                                                                        className: "".concat(a ? "pt-2" : "py-2", " text-base font-semibold mx-auto break-all text-center px-2"),
                                                                        children: "" !== e.name ? e.name : "Media Embed #".concat(o + 1)
                                                                    }), (0,
                                                                    l.jsx)(f.p.Panel, {
                                                                        as: "dd",
                                                                        className: "mt-2 w-full px-4 pb-4",
                                                                        children: (0,
                                                                        l.jsx)("iframe", {
                                                                            style: {
                                                                                borderRadius: "".concat(c.borderRadius, "rem")
                                                                            },
                                                                            src: e.url,
                                                                            width: "100%",
                                                                            height: "".concat(e.url.includes("open.spotify.com/embed/") ? "155px" : "300px"),
                                                                            allowFullScreen: !1,
                                                                            allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                                                        })
                                                                    })]
                                                                })
                                                            })
                                                        })
                                                    }
                                                })
                                            }, o))
                                        }) : (0,
                                        l.jsx)(l.Fragment, {})]
                                    })]
                                })]
                            })
                        }) : (0,
                        l.jsx)(l.Fragment, {})
                    })]
                })]
            })
        }
        let H = u()(()=>Promise.all([o.e(624), o.e(372)]).then(o.bind(o, 1120)), {
            loadableGenerated: {
                webpack: ()=>[1120]
            },
            ssr: !1
        });
        function A(e) {
            let {bio: c, musicIndex: o} = e;
            function r(e) {
                switch (e) {
                case "Link":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsxs)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 16 16",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            l.jsx)("path", {
                                d: "M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"
                            }), (0,
                            l.jsx)("path", {
                                d: "M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"
                            })]
                        })
                    });
                case "Personal":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsxs)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 16 16",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            l.jsx)("path", {
                                d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                            }), (0,
                            l.jsx)("path", {
                                "fill-rule": "evenodd",
                                d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            })]
                        })
                    });
                case "Shop":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                            },
                            className: "h-7 w-7",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 16 16",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"
                            })
                        })
                    });
                case "YouTube":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF0000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF0000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                            })
                        })
                    });
                case "Twitch":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#9146FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#9146FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"
                            })
                        })
                    });
                case "Kick":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#3db414", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#3db414"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 78 25.71",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M0 0H8.26393V5.71333H11.0186V2.85667H13.7732V0H22.0371V8.57H19.2825V11.4267H16.5279V14.2833H19.2825V17.14H22.0371V25.71H13.7732V22.8533H11.0186V19.9967H8.26393V25.71H0V0ZM55.0929 0H63.3568V5.71333H66.1114V2.85667H68.8661V0H77.13V8.57H74.3754V11.4267H71.6207V14.2833H74.3754V17.14H77.13V25.71H68.8661V22.8533H66.1114V19.9967H63.3568V25.71H55.0929V0ZM24.7918 0H33.0557V25.71H24.7918V0ZM44.0743 0H38.565V2.85667H35.8104V22.8533H38.565V25.71H44.0743H52.3382V17.14H44.0743V8.57H52.3382V0H44.0743Z",
                                "data-v-4e93c639": ""
                            })
                        })
                    });
                case "Twitter":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#1D9BF0", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#1D9BF0"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"
                            })
                        })
                    });
                case "X":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7 ",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                            })
                        })
                    });
                case "Instagram":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#E4405F", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#E4405F"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                            })
                        })
                    });
                case "Github":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#181717"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                            })
                        })
                    });
                case "Reddit":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF4500", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF4500"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                            })
                        })
                    });
                case "NameMC":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#020101", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#020101"
                            },
                            className: "h-7 w-7",
                            viewBox: "-8 -8 16 16",
                            xmlns: "http://www.w3.org/2000/svg",
                            shapeRendering: "crispEdges",
                            children: (0,
                            l.jsx)("path", {
                                d: "M-5-5L+3-5L+3-3L+5-3L+5+5L+3+5L+3-3L-3-3L-3+5L-5+5"
                            })
                        })
                    });
                case "Telegram":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#26A5E4", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#26A5E4"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                            })
                        })
                    });
                case "Soundcloud":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF3300", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF3300"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952"
                            })
                        })
                    });
                case "Spotify":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#1DB954", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#1DB954"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                            })
                        })
                    });
                case "Discord":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#5865F2", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#5865F2"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                            })
                        })
                    });
                case "Snapchat":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FFFC00", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FFFC00"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"
                            })
                        })
                    });
                case "Steam":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
                            })
                        })
                    });
                case "Email":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsxs)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 16 16",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            l.jsx)("path", {
                                d: "M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"
                            }), (0,
                            l.jsx)("path", {
                                d: "M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"
                            })]
                        })
                    });
                case "Facebook":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#0866FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#0866FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                            })
                        })
                    });
                case "TikTok":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                            })
                        })
                    });
                case "WhatsApp":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#25D366", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#25D366"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                            })
                        })
                    });
                case "WeHeartIt":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ff3c8d", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ff3c8d"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 50 50",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8.23 23h4.702c.229 0 .429-.155.484-.377l2.433-9.572 2.57 9.579c.06.218.257.37.483.37h4.763c.218 0 .411-.142.477-.35l5.364-17c.048-.151.021-.317-.073-.446C29.339 5.076 29.189 5 29.03 5h-4.906c-.228 0-.427.153-.483.374l-2.533 9.729-2.341-9.721C18.712 5.158 18.512 5 18.28 5h-4.66c-.233 0-.436.161-.487.389-1.156 5.054-1.864 8.054-2.27 9.735L8.252 5.371C8.188 5.13 7.955 4.985 7.71 5.007H3c-.158 0-.308.075-.402.203C2.504 5.338 2.476 5.502 2.522 5.654l5.23 16.993C7.817 22.856 8.011 23 8.23 23zM46.856 14.836c.095-.096.146-.226.144-.359l-.015-.793c0-6.703-5.263-9.136-8.8-9.136-7.367 0-8.98 6.582-8.98 9.118 0 8.128 5.064 9.834 9.313 9.834 4.182 0 7.037-2.118 8.26-6.126.046-.151.018-.315-.077-.443-.094-.127-.243-.202-.401-.202h-4.197c-.22 0-.414.144-.479.354-.275.907-1.646 1.918-3.173 1.918-1.002 0-1.808-.3-2.394-.891-.898-.906-1.128-2.308-1.182-3.125H46.5C46.634 14.985 46.763 14.932 46.856 14.836zM34.837 12c.405-1.989 1.6-2.996 3.558-2.996.92 0 3.017.305 3.529 2.996H34.837zM33.5 32h-4c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5v-13C34 32.224 33.776 32 33.5 32zM33.5 26h-4c-.276 0-.5.224-.5.5v3c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5v-3C34 26.224 33.776 26 33.5 26zM45.5 32H43v-5.5c0-.276-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5v5.503h-1.5c-.276 0-.5.224-.5.5V35.5c0 .276.224.5.5.5h1.506l.068 5.828c0 2.449 1.458 4.921 4.677 4.921.001 0 .002 0 .003 0 .025.002.361.026.911.026.481 0 1.128-.02 1.874-.089.256-.024.452-.239.453-.497L46 42.251c0-.141-.059-.275-.163-.37-.104-.096-.246-.14-.384-.129l-.101.01c-.211.021-.42.041-.611.041C43 41.803 43 41.462 43 41.03v-5.039l2.509-.043c.272-.005.491-.228.491-.5V32.5C46 32.224 45.776 32 45.5 32zM20.294 26c-2.635 0-3.94 1.37-4.796 2.468C14.63 27.363 13.259 26 10.14 26c-1.4 0-2.914.752-4.151 2.062-1.328 1.407-2.068 3.156-1.981 4.682.008.13.012.26.015.39.008.29.017.582.065.871.399 2.444 1.65 4.619 3.935 6.843 1.738 1.692 3.887 3.23 6.765 4.843l.473.253C15.332 45.98 15.412 46 15.492 46c.085 0 .17-.021.247-.065l.461-.263c2.391-1.401 4.121-2.609 5.611-3.916 1.574-1.388 3.516-3.319 4.562-5.955 1.243-3.118.645-5.954-1.684-7.985C23.271 26.577 21.874 26 20.294 26z"
                            })
                        })
                    });
                case "Kik":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#82BC23", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#82BC23"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.482 16.752c-.01.688-.56 1.242-1.238 1.242-.689 0-1.23-.541-1.244-1.23h-.016v-6.243H9v-.029c0-.693.556-1.256 1.237-1.256s1.236.563 1.236 1.258v.045h.016v6.225h-.016l.009-.012zm11.137-4.889c.75 0 1.381.618 1.381 1.377 0 .76-.631 1.375-1.381 1.375-.766 0-1.395-.615-1.395-1.379 0-.766.615-1.381 1.379-1.381l.016.008zm-2.084 4.186c.121.195.193.432.193.686 0 .703-.553 1.26-1.244 1.26-.463 0-.869-.256-1.08-.631l-2.053-2.746-.631.586v1.635h-.014c-.039.652-.57 1.168-1.225 1.168-.674 0-1.221-.553-1.221-1.238v-.025h-.016v-9.45h.027v-.047c0-.69.551-1.253 1.23-1.253.674 0 1.225.562 1.225 1.253v.07h.016l.01 4.597 2.311-2.261c.229-.255.559-.405.928-.405.689 0 1.248.57 1.248 1.26 0 .346-.133.646-.344.871l.012.015-1.621 1.605 2.281 3.061-.016.016-.016-.027zm-13.246 0c.12.195.195.432.195.686 0 .703-.555 1.26-1.244 1.26-.466 0-.871-.256-1.081-.631l-2.054-2.746-.63.586v1.631H2.46c-.036.654-.57 1.17-1.221 1.17-.676 0-1.225-.555-1.225-1.238v-.027H0V7.29h.031c-.004-.015-.004-.029-.004-.044 0-.69.551-1.252 1.23-1.252.675 0 1.225.559 1.225 1.25v.07h.016l.01 4.6 2.311-2.261c.23-.255.562-.405.931-.405.687 0 1.245.57 1.245 1.26 0 .33-.131.646-.346.871l.016.015-1.627 1.605 2.271 3.061-.016.016-.004-.027z"
                            })
                        })
                    });
                case "PayPal":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#003087", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#003087"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z"
                            })
                        })
                    });
                case "CashApp":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#00C244", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#00C244"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.59 3.475a5.1 5.1 0 00-3.05-3.05c-1.31-.42-2.5-.42-4.92-.42H8.36c-2.4 0-3.61 0-4.9.4a5.1 5.1 0 00-3.05 3.06C0 4.765 0 5.965 0 8.365v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 003.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 003.06-3.06c.41-1.3.41-2.5.41-4.9v-7.25c0-2.41 0-3.61-.41-4.91zm-6.17 4.63l-.93.93a.5.5 0 01-.67.01 5 5 0 00-3.22-1.18c-.97 0-1.94.32-1.94 1.21 0 .9 1.04 1.2 2.24 1.65 2.1.7 3.84 1.58 3.84 3.64 0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 01-.48.39H9.63l-.09-.01a.5.5 0 01-.38-.59l.28-1.27a6.54 6.54 0 01-2.88-1.57v-.01a.48.48 0 010-.68l1-.97a.49.49 0 01.67 0c.91.86 2.13 1.34 3.39 1.32 1.3 0 2.17-.55 2.17-1.42 0-.87-.88-1.1-2.54-1.72-1.76-.63-3.43-1.52-3.43-3.6 0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 01.48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z"
                            })
                        })
                    });
                case "Venmo":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#008CFF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#008CFF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M21.772 13.119c-.267 0-.381-.251-.38-.655 0-.533.121-1.575.712-1.575.267 0 .357.243.357.598 0 .533-.13 1.632-.689 1.632Zm.502-3.377c-1.677 0-2.405 1.285-2.405 2.658 0 1.042.421 1.874 1.693 1.874 1.717 0 2.438-1.406 2.438-2.763 0-1.025-.462-1.769-1.726-1.769Zm-3.833 0c-.558 0-.964.17-1.393.477-.154-.275-.462-.477-.932-.477-.542 0-.947.219-1.247.437l-.04-.364H13.54l-.688 4.354h1.506l.479-3.053c.129-.065.323-.154.518-.154.145 0 .267.049.267.267 0 .056-.016.145-.024.218l-.429 2.722h1.498l.478-3.053c.138-.073.324-.154.51-.154.146 0 .268.049.268.267 0 .056-.017.145-.025.218l-.429 2.722h1.499l.461-2.908c.025-.153.049-.388.049-.549 0-.582-.267-.97-1.037-.97Zm-6.871 0c-.575 0-.98.219-1.287.421l-.017-.348H8.962l-.689 4.354H9.78l.478-3.053c.13-.065.324-.154.518-.154.147 0 .268.049.268.242 0 .081-.024.227-.032.299l-.422 2.666h1.499l.462-2.908c.024-.153.049-.388.049-.549 0-.582-.268-.97-1.03-.97Zm-5.631 1.834c.041-.485.413-.824.697-.824.162 0 .299.097.299.291 0 .404-.713.533-.996.533Zm.843-1.834c-1.604 0-2.382 1.39-2.382 2.698 0 1.01.478 1.817 1.814 1.817.527 0 1.07-.113 1.418-.282l.186-1.26c-.494.25-.874.347-1.271.347-.365 0-.64-.194-.64-.687.826-.008 2.252-.347 2.252-1.453 0-.687-.494-1.18-1.377-1.18Zm-4.239.267c.089.186.146.412.146.743 0 .606-.429 1.494-.777 2.06l-.373-2.989L0 9.969l.705 4.2h1.757c.77-1.01 1.718-2.448 1.718-3.554 0-.347-.073-.622-.235-.889l-1.402.283Z"
                            })
                        })
                    });
                case "Bitcoin":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#F7931A", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#F7931A"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"
                            })
                        })
                    });
                case "Ethereum":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#3C3C3D", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#3C3C3D"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"
                            })
                        })
                    });
                case "Litecoin":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#A6A9AA", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#A6A9AA"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0a12 12 0 1012 12A12 12 0 0012 0zm-.2617 3.6777h2.584a.3425.3425 0 01.33.4356l-2.0312 6.918 1.9062-.582-.4082 1.3847-1.9238.5605-1.248 4.213h6.6757a.3425.3425 0 01.3282.4374l-.582 2a.4586.4586 0 01-.4395.3301H6.7324l1.7227-5.8223-1.9063.5801.42-1.3613 1.9101-.58 2.4219-8.1798a.4557.4557 0 01.4375-.334Z"
                            })
                        })
                    });
                case "Tether":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#50AF95", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#50AF95"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M18.7538 10.5176c0 .6251-2.2379 1.1483-5.2381 1.2812l.0028.0007c-.0848.0064-.5233.0325-1.5012.0325-.7778 0-1.33-.0233-1.5237-.0325-3.0059-.1322-5.2495-.6555-5.2495-1.2819s2.2436-1.149 5.2495-1.2834v2.0442c.1965.0142.7594.0474 1.5372.0474.9334 0 1.4008-.0389 1.4849-.0466V9.2356c2.9994.1337 5.2381.657 5.2381 1.282zm5.19.5466L12.1248 22.389a.1803.1803 0 0 1-.2496 0L.0562 11.0635a.1781.1781 0 0 1-.0382-.2079l4.3762-9.1921a.1767.1767 0 0 1 .1626-.1026h14.8878a.1768.1768 0 0 1 .1612.1032l4.3762 9.1922a.1782.1782 0 0 1-.0382.2079zm-4.478-.4038c0-.8068-2.5515-1.4799-5.9473-1.6369V7.195h4.186V4.4055H6.3076V7.195h4.1852v1.8286c-3.4018.1562-5.9601.83-5.9601 1.6376 0 .8075 2.5583 1.4806 5.9601 1.6376v5.8618h3.025v-5.8639c3.394-.1563 5.948-.8295 5.948-1.6363z"
                            })
                        })
                    });
                case "Monero":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF6600", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF6600"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0C5.365 0 0 5.373 0 12.015c0 1.335.228 2.607.618 3.81h3.577V5.729L12 13.545l7.805-7.815v10.095h3.577c.389-1.203.618-2.475.618-3.81C24 5.375 18.635 0 12 0zm-1.788 15.307l-3.417-3.421v6.351H1.758C3.87 21.689 7.678 24 12 24s8.162-2.311 10.245-5.764h-5.04v-6.351l-3.386 3.421-1.788 1.79-1.814-1.79h-.005z"
                            })
                        })
                    });
                case "Dogecoin":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#C2A633", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#C2A633"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.288 7.908h-1.715v3.38h2.697v1.415h-2.697v3.38h1.799c.462 0 3.794.052 3.789-3.933-.005-3.984-3.232-4.242-3.873-4.242zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.472 18.481H8.126v-5.778H6.594v-1.415h1.532V5.511h3.73c.882 0 6.727-.183 6.727 6.594-.001 6.888-6.111 6.376-6.111 6.376z"
                            })
                        })
                    });
                case "Battle Net":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#4381C3", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#4381C3"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M18.94 8.296C15.9 6.892 11.534 6 7.426 6.332c.206-1.36.714-2.308 1.548-2.508 1.148-.275 2.4.48 3.594 1.854.782.102 1.71.28 2.355.429C12.747 2.013 9.828-.282 7.607.565c-1.688.644-2.553 2.97-2.448 6.094-2.2.468-3.915 1.3-5.013 2.495-.056.065-.181.227-.137.305.034.058.146-.008.194-.04 1.274-.89 2.904-1.373 5.027-1.676.303 3.333 1.713 7.56 4.055 10.952-1.28.502-2.356.536-2.946-.087-.812-.856-.784-2.318-.19-4.04a26.764 26.764 0 0 1-.807-2.254c-2.459 3.934-2.986 7.61-1.143 9.11 1.402 1.14 3.847.725 6.502-.926 1.505 1.672 3.083 2.74 4.667 3.094.084.015.287.043.332-.034.034-.06-.08-.124-.131-.149-1.408-.657-2.64-1.828-3.964-3.515 2.735-1.929 5.691-5.263 7.457-8.988 1.076.86 1.64 1.773 1.398 2.595-.336 1.131-1.615 1.84-3.403 2.185a27.697 27.697 0 0 1-1.548 1.826c4.634.16 8.08-1.22 8.458-3.565.286-1.786-1.295-3.696-4.053-5.17.696-2.139.832-4.04.346-5.588-.029-.08-.106-.27-.196-.27-.068 0-.067.13-.063.187.135 1.547-.263 3.2-1.062 5.19zm-8.533 9.869c-1.96-3.145-3.09-6.849-3.082-10.594 3.702-.124 7.474.748 10.714 2.627-1.743 3.269-4.385 6.1-7.633 7.966h.001z"
                            })
                        })
                    });
                case "Valorant":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FA4454", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FA4454"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.792 2.152a.252.252 0 0 0-.098.083c-3.384 4.23-6.769 8.46-10.15 12.69-.107.093-.025.288.119.265 2.439.003 4.877 0 7.316.001a.66.66 0 0 0 .552-.25c.774-.967 1.55-1.934 2.324-2.903a.72.72 0 0 0 .144-.49c-.002-3.077 0-6.153-.003-9.23.016-.11-.1-.206-.204-.167zM.077 2.166c-.077.038-.074.132-.076.205.002 3.074.001 6.15.001 9.225a.679.679 0 0 0 .158.463l7.64 9.55c.12.152.308.25.505.247 2.455 0 4.91.003 7.365 0 .142.02.222-.174.116-.265C10.661 15.176 5.526 8.766.4 2.35c-.08-.094-.174-.272-.322-.184z"
                            })
                        })
                    });
                case "osu!":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF66AA", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF66AA"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M7.698 10.362c-.1855-.2184-.4189-.3905-.7002-.5162-.2813-.1257-.6104-.1885-.9874-.1885s-.7046.0628-.9829.1885-.5088.2978-.6912.5162c-.1827.2185-.3203.4773-.413.7765-.0928.2993-.1391.6194-.1391.9605 0 .3412.0463.6584.1391.9516.0927.2933.2303.5491.413.7675.1824.2185.4129.3891.6912.5116.2783.1226.6059.1841.9829.1841s.7061-.0615.9875-.1841c.2813-.1226.5146-.2931.7002-.5116.1855-.2184.3231-.4742.413-.7675.0897-.2931.1346-.6104.1346-.9516 0-.3411-.0449-.6612-.1346-.9605-.0899-.2992-.2276-.558-.4131-.7765zm-.965 2.8096c-.1467.2484-.3875.3725-.7227.3725-.3291 0-.567-.1241-.7136-.3725-.1467-.2483-.2199-.6059-.2199-1.0727s.0732-.8243.2199-1.0727c.1466-.2482.3844-.3725.7136-.3725.3352 0 .5759.1243.7227.3725.1466.2484.2199.6059.2199 1.0727.0001.4668-.0733.8245-.2199 1.0727zm11.8894-.8303-.0898-4.3896a4.5409 4.5409 0 0 1 .6912-.0539c.2334 0 .4668.0179.7002.0539l-.0898 4.3896c-.2096.0359-.41.0538-.6015.0538a3.4957 3.4957 0 0 1-.6103-.0538zm1.3196 1.4003c0 .2215-.0179.443-.0538.6643a4.2055 4.2055 0 0 1-.6553.0538 4.1414 4.1414 0 0 1-.6642-.0538 4.0882 4.0882 0 0 1-.0539-.6553c0-.2154.018-.4367.0539-.6643a4.0876 4.0876 0 0 1 .6552-.0538c.2155 0 .4368.018.6643.0538.0359.2276.0538.446.0538.6553zm-3.2226-4.0305c.2095 0 .422.018.6373.0539v4.4614c-.1916.0659-.4443.1302-.7585.193-.3141.0629-.6418.0943-.9829.0943-.3052 0-.5985-.024-.8798-.0718-.2813-.0479-.5282-.1495-.7405-.3052-.2125-.1555-.3815-.3829-.5072-.6823-.1257-.2991-.1885-.697-.1885-1.1938V9.765a3.8725 3.8725 0 0 1 .6373-.0539c.2094 0 .4219.018.6373.0539v2.4596c0 .2455.0194.4474.0584.6059.0388.1586.0988.2843.1795.377a.6606.6606 0 0 0 .3007.1974c.1197.0391.2603.0584.4219.0584.2214 0 .407-.0209.5566-.0628V9.765a3.8218 3.8218 0 0 1 .6284-.0539zm-4.3625 2.6841c.0538.1497.0808.3321.0808.5476 0 .2215-.0464.428-.1392.6194-.0928.1916-.2274.3577-.4039.4982-.1766.1407-.3905.2514-.6418.3322-.2514.0808-.5356.1212-.8528.1212a5.2984 5.2984 0 0 1-.395-.0135 3.1226 3.1226 0 0 1-.3456-.0448 4.0482 4.0482 0 0 1-.3277-.0763 3.9336 3.9336 0 0 1-.35-.1166 2.5768 2.5768 0 0 1 .0852-.4893 3.0737 3.0737 0 0 1 .1751-.4802c.1975.0779.3844.1362.561.1751.1765.039.3605.0584.5521.0584.0838 0 .175-.0075.2738-.0225a.9945.9945 0 0 0 .2737-.0808.6467.6467 0 0 0 .2109-.1526c.0569-.0628.0853-.145.0853-.2469 0-.1436-.0434-.2469-.1302-.3097-.0868-.0628-.208-.1181-.3636-.1661l-.5565-.1616c-.3352-.0956-.5969-.2379-.7855-.4263-.1885-.1886-.2827-.4713-.2827-.8484 0-.4547.163-.8108.4892-1.0682.3261-.2573.7705-.386 1.333-.386.2334 0 .4638.0211.6913.0629.2273.0419.4578.1048.6912.1885-.012.1557-.0419.3173-.0897.4847-.048.1676-.1048.3142-.1706.4398a3.58 3.58 0 0 0-.4757-.1571 2.18 2.18 0 0 0-.5477-.0673c-.2034 0-.3621.0314-.4758.0943-.1137.0629-.1705.1631-.1705.3007 0 .1317.0403.2244.1211.2783.0809.0538.1959.1048.3456.1526l.5117.1526c.1675.048.3187.1063.4533.1751.1347.0688.2498.1541.3456.2558.0958.1016.1707.2272.2246.3768zM12 0C5.3726 0 0 5.3726 0 12.0001 0 18.6273 5.3726 24 12 24c6.6275 0 12-5.3727 12-11.9999C24 5.3726 18.6275 0 12 0zm0 22.8c-5.9647 0-10.8-4.8354-10.8-10.7999C1.2 6.0353 6.0353 1.2 12 1.2s10.8 4.8353 10.8 10.8001C22.8 17.9646 17.9647 22.8 12 22.8z"
                            })
                        })
                    });
                case "Last.fm":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#D51007", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#D51007"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M10.584 17.21l-.88-2.392s-1.43 1.594-3.573 1.594c-1.897 0-3.244-1.649-3.244-4.288 0-3.382 1.704-4.591 3.381-4.591 2.42 0 3.189 1.567 3.849 3.574l.88 2.749c.88 2.666 2.529 4.81 7.285 4.81 3.409 0 5.718-1.044 5.718-3.793 0-2.227-1.265-3.381-3.63-3.931l-1.758-.385c-1.21-.275-1.567-.77-1.567-1.595 0-.934.742-1.484 1.952-1.484 1.32 0 2.034.495 2.144 1.677l2.749-.33c-.22-2.474-1.924-3.492-4.729-3.492-2.474 0-4.893.935-4.893 3.932 0 1.87.907 3.051 3.189 3.601l1.87.44c1.402.33 1.869.907 1.869 1.704 0 1.017-.99 1.43-2.86 1.43-2.776 0-3.93-1.457-4.59-3.464l-.907-2.75c-1.155-3.573-2.997-4.893-6.653-4.893C2.144 5.333 0 7.89 0 12.233c0 4.18 2.144 6.434 5.993 6.434 3.106 0 4.591-1.457 4.591-1.457z"
                            })
                        })
                    });
                case "MyAnimeList":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#2E51A2", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#2E51A2"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8.273 7.247v8.423l-2.103-.003v-5.216l-2.03 2.404-1.989-2.458-.02 5.285H.001L0 7.247h2.203l1.865 2.545 2.015-2.546 2.19.001zm8.628 2.069l.025 6.335h-2.365l-.008-2.871h-2.8c.07.499.21 1.266.417 1.779.155.381.298.751.583 1.128l-1.705 1.125c-.349-.636-.622-1.337-.878-2.082a9.296 9.296 0 0 1-.507-2.179c-.085-.75-.097-1.471.107-2.212a3.908 3.908 0 0 1 1.161-1.866c.313-.293.749-.5 1.1-.687.351-.187.743-.264 1.107-.359a7.405 7.405 0 0 1 1.191-.183c.398-.034 1.107-.066 2.39-.028l.545 1.749H14.51c-.593.008-.878.001-1.341.209a2.236 2.236 0 0 0-1.278 1.92l2.663.033.038-1.81h2.309zm3.992-2.099v6.627l3.107.032-.43 1.775h-4.807V7.187l2.13.03z"
                            })
                        })
                    });
                case "Deezer":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FEAA2D", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FEAA2D"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38h-5.19zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.189v-3.027h-5.19zm6.271 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.81v3.029h5.19v-3.03H0zm6.27 0v3.029h5.189v-3.03h-5.19zm6.271 0v3.029h5.19v-3.03h-5.19zm6.27 0v3.029H24v-3.03h-5.19Z"
                            })
                        })
                    });
                case "Pinterest":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#BD081C", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#BD081C"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
                            })
                        })
                    });
                case "Linkedin":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#0A66C2", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#0A66C2"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            })
                        })
                    });
                case "Tumblr":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#36465D", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#36465D"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"
                            })
                        })
                    });
                case "Keybase":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#33A0FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#33A0FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M10.445 21.372a.953.953 0 1 1-.955-.954c.524 0 .951.43.951.955m5.923-.001a.953.953 0 1 1-.958-.954c.526 0 .954.43.954.955m4.544-9.16l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.06-.094-.113-.141-.169-.104-.12-.21-.239-.32-.359l-.075-.08-.091-.099-.135-.13c-.015-.019-.032-.035-.05-.054a10.87 10.87 0 0 0-3.955-2.504l-.23-.078.035-.083a4.109 4.109 0 0 0-.12-3.255 4.11 4.11 0 0 0-2.438-2.16c-.656-.216-1.23-.319-1.712-.305-.033-.105-.1-.577.496-1.848L10.662 0l-.287.399c-.33.455-.648.895-.945 1.328a1.857 1.857 0 0 0-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003a1.876 1.876 0 0 0 1.755 1.98l1.002.06c-.065.84.073 1.62.405 2.306a11.28 11.28 0 0 0-3.66 2.484C.912 14.392.912 18.052.912 20.995v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06a9.197 9.197 0 0 1-1.68-3.848l1.913-2.03-.985 3.09 1.74-1.267c3.075-2.234 6.745-2.75 10.91-1.53 1.806.533 3.56.04 4.474-1.256l.104-.165c.09.498.14.998.14 1.496 0 1.563-.254 3.687-1.38 5.512h1.612c.776-1.563 1.181-3.432 1.181-5.512-.001-2.2-.786-4.421-2.184-6.274zM8.894 6.192c.122-1.002.577-1.949 1.23-2.97a1.36 1.36 0 0 0 1.283.749c.216-.008.604.025 1.233.232a2.706 2.706 0 0 1 1.608 1.425c.322.681.349 1.442.079 2.15a2.69 2.69 0 0 1-.806 1.108l-.408-.502-.002-.003a1.468 1.468 0 0 0-2.06-.205c-.334.27-.514.66-.534 1.058-1.2-.54-1.8-1.643-1.628-3.04zm4.304 5.11l-.52.425a.228.228 0 0 1-.323-.032l-.11-.135a.238.238 0 0 1 .034-.334l.51-.42-1.056-1.299a.307.307 0 0 1 .044-.436.303.303 0 0 1 .435.041l2.963 3.646a.309.309 0 0 1-.168.499.315.315 0 0 1-.31-.104l-.295-.365-1.045.854a.244.244 0 0 1-.154.055.237.237 0 0 1-.186-.09l-.477-.58a.24.24 0 0 1 .035-.335l1.05-.858-.425-.533zM7.752 4.866l-1.196-.075a.463.463 0 0 1-.435-.488l.09-1.4a.462.462 0 0 1 .461-.437h.024l1.401.091a.459.459 0 0 1 .433.488l-.007.101a9.27 9.27 0 0 0-.773 1.72zm12.525 11.482c-.565.805-1.687 1.08-2.924.718-3.886-1.141-7.397-.903-10.469.7l1.636-5.122-5.29 5.609c.098-3.762 2.452-6.967 5.757-8.312.471.373 1.034.66 1.673.841.16.044.322.074.48.102a1.41 1.41 0 0 0 .21 1.408l.075.09c-.172.45-.105.975.221 1.374l.476.582a1.39 1.39 0 0 0 1.079.513c.32 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113a1.45 1.45 0 0 0 .928-.326c.623-.51.72-1.435.209-2.06l-1.67-2.057a4.07 4.07 0 0 0 .408-.38c.135.036.27.077.4.12.266.096.533.197.795.314a9.55 9.55 0 0 1 2.77 1.897c.03.03.06.055.086.083l.17.176c.038.039.076.079.11.12.08.085.16.175.24.267l.126.15c.045.053.086.104.13.16l.114.15c.04.05.079.102.117.154.838 1.149.987 2.329.404 3.157v.005zM7.718 4.115l-.835-.05.053-.836.834.051z"
                            })
                        })
                    });
                case "Ebay":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#E53238", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#E53238"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M6.056 12.132v-4.92h1.2v3.026c.59-.703 1.402-.906 2.202-.906 1.34 0 2.828.904 2.828 2.855 0 .233-.015.457-.06.668.24-.953 1.274-1.305 2.896-1.344.51-.018 1.095-.018 1.56-.018v-.135c0-.885-.556-1.244-1.53-1.244-.72 0-1.245.3-1.305.81h-1.275c.136-1.29 1.5-1.62 2.686-1.62 1.064 0 1.995.27 2.415 1.02l-.436-.84h1.41l2.055 4.125 2.055-4.126H24l-3.72 7.305h-1.346l1.07-2.04-2.33-4.38c.13.255.2.555.2.93v2.46c0 .346.01.69.04 1.005H16.8a6.543 6.543 0 01-.046-.765c-.603.734-1.32.96-2.32.96-1.48 0-2.272-.78-2.272-1.695 0-.15.015-.284.037-.405-.3 1.246-1.36 2.086-2.767 2.086-.87 0-1.694-.315-2.2-.93 0 .24-.015.494-.04.734h-1.18c.02-.39.04-.855.04-1.245v-1.05h-4.83c.065 1.095.818 1.74 1.853 1.74.718 0 1.355-.3 1.568-.93h1.24c-.24 1.29-1.61 1.725-2.79 1.725C.95 15.009 0 13.822 0 12.232c0-1.754.982-2.91 3.116-2.91 1.688 0 2.93.886 2.94 2.806v.005zm9.137.183c-1.095.034-1.77.233-1.77.95 0 .465.36.97 1.305.97 1.26 0 1.935-.69 1.935-1.814v-.13c-.45 0-.99.006-1.484.022h.012zm-6.06 1.875c1.11 0 1.876-.806 1.876-2.02s-.768-2.02-1.893-2.02c-1.11 0-1.89.806-1.89 2.02s.765 2.02 1.875 2.02h.03zm-4.35-2.514c-.044-1.125-.854-1.546-1.725-1.546-.944 0-1.694.474-1.815 1.546z"
                            })
                        })
                    });
                case "Stake":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffffff", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 396.11 197.92",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsxs)("g", {
                                id: "Layer_5",
                                "data-name": "Layer 5",
                                children: [(0,
                                l.jsx)("path", {
                                    d: "M25.68,56.89c-.1-26.47,16.84-41.15,47.94-41.26C96,15.55,100,30.19,100,35.51c0,10.19-14.42,21-14.42,21s.8,6.35,13.18,6.3,24.44-8.22,24.37-28.67C123.07,10.65,98.46-.09,74.13,0,53.78.07-.19,2.93,0,56.51c.18,47.59,90,51.79,90.07,82.26.12,33.09-37,42-49.56,42S22.84,171.88,22.82,167c-.09-26.8,26.58-34.26,26.58-34.26,0-2-1.56-10.91-11.89-10.87C10.9,121.92.3,144.8.38,167.14c.07,19,13.5,30.86,33.78,30.78,38.78-.14,82.51-19.06,82.35-61.08C116.37,97.54,25.79,87.28,25.68,56.89Z"
                                }), (0,
                                l.jsx)("path", {
                                    d: "M395.37,162.18c-.31-.75-1.18-.57-2.33.38-4.4,3.63-14.46,13.91-38,14-42.92.16-50.37-70.58-50.37-70.58s32.71-24.42,37.82-34.27-11.15-12-11.15-12-22.88,27.84-39.1,36C294,83.6,306,56,306.69,40.13s-19.11-12-22.27-10.48c0,6.93-17.49,69.84-23.86,104.42-3.75,6-9.11,12.86-13.91,12.87-2.78,0-3.8-5.15-3.83-12.53,0-10.24,5.64-26.65,5.6-36.62,0-6.9-3.17-7.31-5.9-7.3-.59,0-3.87.09-4.47.09-7,0-4.7-6-11-5.94-19.28.07-43.84,21.12-44.91,52.89-6.51,4.31-15.62,9.74-20.27,9.76-4.88,0-6.09-4.51-6.1-8.41,0-6.85,11.08-47.55,11.08-47.55s14.11-3.62,20.27-4.81c4.66-.91,6-1.25,7.81-3.5s5.35-6.9,8.21-11.08.05-7.41-5.24-7.39c-6.94,0-25.51,4.4-25.51,4.4s8.92-38.46,8.91-39.24-1-1.19-2.51-1.18c-3.38,0-9.41,1.82-13.27,3.2-5.91,2.11-10.72,9.35-11.69,12.72s-7.65,29.76-7.65,29.76-35.77,12.35-40.66,14.2a.74.74,0,0,0-.5.7c0,.32,4.09,16,12.48,15.94,6,0,23.63-7.22,23.63-7.22s-9.06,36-9,48c0,7.7,3.63,16.72,18.67,16.67,14,0,26.25-7.23,33.11-12.26,3.75,9.49,12.61,12.09,18.66,12.07,13.56,0,24-10.82,25.34-12.27,1.76,4.16,5.91,12.15,15.39,12.12,5.36,0,10.91-6,15-11.82a23.38,23.38,0,0,0,.05,3.63c1.64,14.92,23.79,6.15,25,4.07.75-10.79.28-32.85,4.59-46.47,5.72,46.46,27.42,77.71,66.43,77.57,21.81-.08,33-6.35,37.63-11.52A15.9,15.9,0,0,0,395.37,162.18ZM208.2,146.86c-18.73.07,5.73-48.48,21.71-48.54C229.93,104.58,229.58,146.79,208.2,146.86Z"
                                }), (0,
                                l.jsx)("path", {
                                    d: "M360.26,161.74c16.91-.06,30-11.19,32.4-14.81,3.1-4.71-3.6-11.82-5.73-11.7-5.34,5.11-10.92,11.29-23.45,11.33-14.75.06-11.41-16.17-11.41-16.17s28.39,3.67,39.8-16.74c3.65-6.53,3.8-15.56,2.33-19.45s-9.73-11.09-22.87-10c-16.14,1.36-36.48,18.19-40.95,38.4C326.79,138.86,333.58,161.84,360.26,161.74Zm18-68.1c2.66-.09,2.42,4.29,1.71,8.87-1,6.21-9.53,22-25.81,21.38C355.29,114.7,367.4,94,378.29,93.64Z"
                                })]
                            })
                        })
                    });
                case "4chan":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#006600", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#006600"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M11.07 8.82S9.803 1.079 5.145 1.097C2.006 1.109.78 4.124 3.055 4.802c0 0-2.698.973-2.698 2.697 0 1.725 4.274 3.54 10.713 1.32zm1.931 5.924s.904 7.791 5.558 7.991c3.136.135 4.503-2.82 2.262-3.604 0 0 2.74-.845 2.82-2.567.08-1.723-4.105-3.737-10.64-1.82zm-3.672-1.55s-7.532 2.19-6.952 6.813c.39 3.114 3.53 3.969 3.93 1.63 0 0 1.29 2.559 3.002 2.351 1.712-.208 3-4.67.02-10.794zm5.623-2.467s7.727-1.35 7.66-6.008c-.046-3.138-3.074-4.333-3.728-2.051 0 0-1-2.686-2.726-2.668-1.724.018-3.494 4.312-1.206 10.727z"
                            })
                        })
                    });
                case "WeChat":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#07C160", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#07C160"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
                            })
                        })
                    });
                case "Onlyfans":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#00AFF0", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#00AFF0"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M24 4.003h-4.015c-3.45 0-5.3.197-6.748 1.957a7.996 7.996 0 1 0 2.103 9.211c3.182-.231 5.39-2.134 6.085-5.173 0 0-2.399.585-4.43 0 4.018-.777 6.333-3.037 7.005-5.995zM5.61 11.999A2.391 2.391 0 0 1 9.28 9.97a2.966 2.966 0 0 1 2.998-2.528h.008c-.92 1.778-1.407 3.352-1.998 5.263A2.392 2.392 0 0 1 5.61 12Zm2.386-7.996a7.996 7.996 0 1 0 7.996 7.996 7.996 7.996 0 0 0-7.996-7.996Zm0 10.394A2.399 2.399 0 1 1 10.395 12a2.396 2.396 0 0 1-2.399 2.398Z"
                            })
                        })
                    });
                case "Threads":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"
                            })
                        })
                    });
                case "Xbox":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#107C10", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#107C10"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912C23.002 17.48 24 14.861 24 12.004c0-3.34-1.365-6.362-3.57-8.536 0 0-.027-.022-.082-.042-.063-.022-.152-.045-.281-.045-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042C1.365 5.642 0 8.664 0 12.004c0 2.854.998 5.473 2.661 7.533-1.401-2.605 3.579-9.951 6.08-12.91-2.82-2.813-4.216-3.245-4.806-3.245-.131 0-.223.021-.281.046v-.002zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085-.068-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.545v.006z"
                            })
                        })
                    });
                case "PlayStation":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#003791", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#003791"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z"
                            })
                        })
                    });
                case "BuyMeACoffee":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FFDD00", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FFDD00"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"
                            })
                        })
                    });
                case "Patreon":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"
                            })
                        })
                    });
                case "Roblox":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M5.164 0 .16 18.928 18.836 24 23.84 5.072Zm8.747 15.354-5.219-1.417 1.399-5.29 5.22 1.418-1.4 5.29z"
                            })
                        })
                    });
                case "VK":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#0077FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#0077FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "m9.489.004.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z"
                            })
                        })
                    });
                case "Mastodon":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#6364FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#6364FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"
                            })
                        })
                    });
                case "Matrix":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"
                            })
                        })
                    });
                case "Epic Games":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#313131", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#313131"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M3.537 0C2.165 0 1.66.506 1.66 1.879V18.44a4.262 4.262 0 00.02.433c.031.3.037.59.316.92.027.033.311.245.311.245.153.075.258.13.43.2l8.335 3.491c.433.199.614.276.928.27h.002c.314.006.495-.071.928-.27l8.335-3.492c.172-.07.277-.124.43-.2 0 0 .284-.211.311-.243.28-.33.285-.621.316-.92a4.261 4.261 0 00.02-.434V1.879c0-1.373-.506-1.88-1.878-1.88zm13.366 3.11h.68c1.138 0 1.688.553 1.688 1.696v1.88h-1.374v-1.8c0-.369-.17-.54-.523-.54h-.235c-.367 0-.537.17-.537.539v5.81c0 .369.17.54.537.54h.262c.353 0 .523-.171.523-.54V8.619h1.373v2.143c0 1.144-.562 1.71-1.7 1.71h-.694c-1.138 0-1.7-.566-1.7-1.71V4.82c0-1.144.562-1.709 1.7-1.709zm-12.186.08h3.114v1.274H6.117v2.603h1.648v1.275H6.117v2.774h1.74v1.275h-3.14zm3.816 0h2.198c1.138 0 1.7.564 1.7 1.708v2.445c0 1.144-.562 1.71-1.7 1.71h-.799v3.338h-1.4zm4.53 0h1.4v9.201h-1.4zm-3.13 1.235v3.392h.575c.354 0 .523-.171.523-.54V4.965c0-.368-.17-.54-.523-.54zm-3.74 10.147a1.708 1.708 0 01.591.108 1.745 1.745 0 01.49.299l-.452.546a1.247 1.247 0 00-.308-.195.91.91 0 00-.363-.068.658.658 0 00-.28.06.703.703 0 00-.224.163.783.783 0 00-.151.243.799.799 0 00-.056.299v.008a.852.852 0 00.056.31.7.7 0 00.157.245.736.736 0 00.238.16.774.774 0 00.303.058.79.79 0 00.445-.116v-.339h-.548v-.565H7.37v1.255a2.019 2.019 0 01-.524.307 1.789 1.789 0 01-.683.123 1.642 1.642 0 01-.602-.107 1.46 1.46 0 01-.478-.3 1.371 1.371 0 01-.318-.455 1.438 1.438 0 01-.115-.58v-.008a1.426 1.426 0 01.113-.57 1.449 1.449 0 01.312-.46 1.418 1.418 0 01.474-.309 1.58 1.58 0 01.598-.111 1.708 1.708 0 01.045 0zm11.963.008a2.006 2.006 0 01.612.094 1.61 1.61 0 01.507.277l-.386.546a1.562 1.562 0 00-.39-.205 1.178 1.178 0 00-.388-.07.347.347 0 00-.208.052.154.154 0 00-.07.127v.008a.158.158 0 00.022.084.198.198 0 00.076.066.831.831 0 00.147.06c.062.02.14.04.236.061a3.389 3.389 0 01.43.122 1.292 1.292 0 01.328.17.678.678 0 01.207.24.739.739 0 01.071.337v.008a.865.865 0 01-.081.382.82.82 0 01-.229.285 1.032 1.032 0 01-.353.18 1.606 1.606 0 01-.46.061 2.16 2.16 0 01-.71-.116 1.718 1.718 0 01-.593-.346l.43-.514c.277.223.578.335.9.335a.457.457 0 00.236-.05.157.157 0 00.082-.142v-.008a.15.15 0 00-.02-.077.204.204 0 00-.073-.066.753.753 0 00-.143-.062 2.45 2.45 0 00-.233-.062 5.036 5.036 0 01-.413-.113 1.26 1.26 0 01-.331-.16.72.72 0 01-.222-.243.73.73 0 01-.082-.36v-.008a.863.863 0 01.074-.359.794.794 0 01.214-.283 1.007 1.007 0 01.34-.185 1.423 1.423 0 01.448-.066 2.006 2.006 0 01.025 0zm-9.358.025h.742l1.183 2.81h-.825l-.203-.499H8.623l-.198.498h-.81zm2.197.02h.814l.663 1.08.663-1.08h.814v2.79h-.766v-1.602l-.711 1.091h-.016l-.707-1.083v1.593h-.754zm3.469 0h2.235v.658h-1.473v.422h1.334v.61h-1.334v.442h1.493v.658h-2.255zm-5.3.897l-.315.793h.624zm-1.145 5.19h8.014l-4.09 1.348z"
                            })
                        })
                    });
                case "Revolt":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF4655", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF4655"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M17.005 7.796c0 1.88-1.023 3.009-3.207 3.009h-3.615v-5.95H13.8c2.183 0 3.206 1.162 3.206 2.94zM.853 0l3.5 4.866v19.133h5.832v-9.06h1.398L16.563 24h6.583l-5.525-9.504a6.966 6.966 0 0 0 3.879-2.532 7 7 0 0 0 1.44-4.408C22.94 3.384 20.009 0 14.143 0h-9.79z"
                            })
                        })
                    });
                case "Guilded":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#F5C400", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#F5C400"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M5.297 6.255s.02 2.846 1.481 5.79c1.502 2.834 3.572 4.654 5.28 5.38 1.765-.826 3.47-2.258 4.4-3.8h-4.845c-1.253-1.04-2.24-2.763-2.466-4.755H23.36c-.701 3.203-2.188 6.116-3.605 7.971a17.108 17.108 0 01-7.686 5.659h-.045c-5.098-2.031-7.84-5.23-9.65-8.84C1.214 11.347 0 7.147 0 1.5h24a34.23 34.23 0 01-.32 4.755z"
                            })
                        })
                    });
                case "Skype":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#00AFF0", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#00AFF0"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.24c.015.045.044.074.059.12.12-.675.181-1.363.181-2.052 0-1.529-.301-3.012-.898-4.42-.569-1.348-1.395-2.562-2.427-3.596-1.049-1.033-2.247-1.856-3.595-2.426-1.318-.631-2.801-.93-4.328-.93-.72 0-1.444.07-2.143.204l.119.06-.239-.033.119-.025C8.91.274 7.829 0 6.731 0c-1.789 0-3.47.698-4.736 1.967C.729 3.235.032 4.923.032 6.716c0 1.143.292 2.265.844 3.258l.02-.124.041.239-.06-.115c-.114.645-.172 1.299-.172 1.955 0 1.53.3 3.017.884 4.416.568 1.362 1.378 2.576 2.427 3.609 1.034 1.05 2.247 1.857 3.595 2.442 1.394.6 2.877.898 4.404.898.659 0 1.334-.06 1.977-.179l-.119-.062.24.046-.135.03c1.002.569 2.126.871 3.294.871 1.783 0 3.459-.69 4.733-1.963 1.259-1.259 1.962-2.951 1.962-4.749 0-1.138-.299-2.262-.853-3.266"
                            })
                        })
                    });
                case "TeamSpeak":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#4B69B6", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#4B69B6"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12.005.605h-.09l-.028.001h-.064l-.03.001-.07.001-.02.001-.09.003h-.022l-.07.003-.03.001-.063.003L11.4.62l-.09.005-.09.006h-.015l-.01.001-.064.005-.03.002-.07.005-.02.002-.088.008-.02.001-.07.007-.027.003-.065.006-.025.003-.088.01-.09.01-.023.003-.066.008-.008.002-.015.002h-.003l-.073.01-.015.002-.05.007-.04.006-.014.002-.073.01-.024.005-.07.01-.02.004-.088.015-.035.006-.018.004-.035.006-.02.003-.07.013-.02.004-.08.015h-.003l-.004.001-.005.001-.087.018-.007.002H9.57l-.034.008-.043.01-.018.002L9.4.89l-.013.003-.09.02-.09.02-.01.003-.08.02-.011.003-.087.022-.092.024-.088.024-.01.002-.084.024h-.003l-.09.026-.091.027H8.56l-.073.023-.01.003-.005.002h-.003l-.028.01a6.02 6.02 0 0 0-.19.062l-.08.025-.257.091-.075.027a8.04 8.04 0 0 0-.305.12c-.02.007-.041.014-.061.023l-.144.06a12.574 12.574 0 0 0-.53.24l-.07.034-.08.04c-.17.085-.34.174-.506.267-.154.18-.304.362-.45.548l-.06.08-.036.043.005-.003c-.037.048-.072.098-.11.146-.077.103-.156.205-.231.31-.057.08-.112.162-.167.243-.081.118-.163.234-.24.355-.054.083-.105.168-.158.25-.074.12-.15.24-.22.362-.051.085-.1.172-.148.258-.07.126-.141.25-.21.38-.044.086-.09.174-.132.26a16.1 16.1 0 0 0-.187.379c-.045.096-.088.193-.132.29a16.02 16.02 0 0 0-.433 1.063l-.05.128.009-.012c-.127.357-.245.717-.348 1.084l-.107.049a4.673 4.673 0 0 0-.015.006 4.75 4.75 0 0 0-.56.307 4.673 4.673 0 0 0-.035.022 4.693 4.693 0 0 0-.493.37 4.673 4.673 0 0 0-.045.038 4.705 4.705 0 0 0-.427.427 4.673 4.673 0 0 0-.044.05 4.692 4.692 0 0 0-.366.488 4.673 4.673 0 0 0-.025.04 4.663 4.663 0 0 0-.302.553 4.673 4.673 0 0 0-.01.024 4.638 4.638 0 0 0-.227.606 4.673 4.673 0 0 0-.003.013c-.06.208-.108.42-.14.64a4.673 4.673 0 0 0 0 .01 4.7 4.7 0 0 0 0 1.318 4.673 4.673 0 0 0 0 .01c.032.218.08.432.14.64a4.673 4.673 0 0 0 .004.014c.061.208.137.41.226.605a4.673 4.673 0 0 0 .01.024c.09.192.19.377.303.554a4.673 4.673 0 0 0 .024.038c.112.172.235.336.368.49a4.673 4.673 0 0 0 .041.049c.133.15.275.293.426.426a4.673 4.673 0 0 0 .048.04c.155.134.318.256.49.367a4.673 4.673 0 0 0 .04.027c.178.113.364.215.557.304a4.673 4.673 0 0 0 .015.006c.197.09.4.166.61.228a4.673 4.673 0 0 0 .017.005c.207.06.42.107.637.138a4.673 4.673 0 0 0 .012.002 4.698 4.698 0 0 0 1.315 0 4.673 4.673 0 0 0 .012-.002c.218-.031.43-.078.637-.138a4.673 4.673 0 0 0 .017-.005 4.67 4.67 0 0 0 .609-.227 4.673 4.673 0 0 0 .017-.008c.192-.09.378-.19.555-.303a4.673 4.673 0 0 0 .042-.027c.17-.111.335-.234.49-.366a4.673 4.673 0 0 0 .045-.04c.152-.133.295-.277.429-.43a4.673 4.673 0 0 0 .039-.044c.134-.156.257-.32.37-.493a4.673 4.673 0 0 0 .02-.035 4.62 4.62 0 0 0 .306-.557 4.673 4.673 0 0 0 .01-.021c.089-.197.165-.4.227-.61a4.673 4.673 0 0 0 .002-.008c.06-.208.108-.421.14-.64a4.673 4.673 0 0 0 0-.02 4.698 4.698 0 0 0 .04-.881 4.673 4.673 0 0 0 0-.002c0-.05-.005-.098-.01-.147a4.673 4.673 0 0 0-.006-.085 4.176 4.176 0 0 0-.028-.222 4.673 4.673 0 0 0 0-.005 4.606 4.606 0 0 0-.304-1.098 4.673 4.673 0 0 0 0-.001c-.03-.07-.061-.14-.094-.21a4.673 4.673 0 0 0-.002-.003 4.528 4.528 0 0 0-.083-.165 4.673 4.673 0 0 0-.02-.04l-.07-.123a4.673 4.673 0 0 0-.05-.085l-.037-.06a4.673 4.673 0 0 0-.087-.137l-.012-.016A4.673 4.673 0 0 0 7.14 8.635c-.018-.011-.035-.023-.053-.033a4.673 4.673 0 0 0-.096-.055c-.036-.021-.072-.043-.11-.063a4.673 4.673 0 0 0-.044-.022 4.636 4.636 0 0 0-1.368-.464 13.673 13.673 0 0 1 3.39-5.233 10.301 10.301 0 0 1 3.147-.493c5.7 0 10.329 4.629 10.33 10.329v.002c0 2.13-.647 4.11-1.753 5.756l-.013.018C18.5 21.46 14.682 23.57 9.503 23.02l.02.016c5.2 1.138 9.375-.545 11.882-3.46l-.018.026a10.7 10.7 0 0 0 .308-.372c.018-.023.035-.048.054-.071.094-.122.186-.245.275-.37l.1-.146a10.726 10.726 0 0 0 .506-.816l.076-.133c.173-.32.329-.647.469-.981l.062-.158a10.68 10.68 0 0 0 .314-.901c.016-.053.033-.105.047-.157a9.7 9.7 0 0 0 .136-.527l.003-.018c.039-.17.072-.343.103-.516l.025-.16a10.6 10.6 0 0 0 .108-.95c.004-.06.01-.118.012-.177.009-.181.015-.363.015-.545C24.001 5.982 18.626.605 12.005.605zm.232 3.277c1.363 1.373 2.135 3.205 2.41 5.229.104.765-.046 1.61-.77 2.13-.058.333.115.696.267 1.055.388.92.98 1.757 1.408 2.642.384.798-.632 1.388-1.374 1.63a6.24 6.24 0 0 1-.275.084c.048.383.274.67.215 1.003a.98.98 0 0 1-.372.6s.28.878-.38 1.26c-.152.087-.33.104-.364.34-.064.468-.134.926-.504 1.307-.056.057-.115.11-.177.159 4.326-.152 7.97-3.507 8.372-7.93.435-4.794-3.104-9.04-7.9-9.476a8.865 8.865 0 0 0-.556-.034zm-1.973.17a8.68 8.68 0 0 0-2.003.672c.388.134.736.316.97.534 1.09 1.01 1.629 2.003 1.93 3.383.267 1.218.395 1.809-.245 2.253-.865.6.923 3.164 1.272 3.906-.46.592-1.062.579-1.38.743-.176.09-.103.426-.074.685.028.254.26.413.133.61-.114.175-.55.188-.737.31.182.2.585.399.53.658-.04.2-.492.166-.666.622-.093.245-.045.698-.238.927-.448.53-.917.62-1.85.517a15.94 15.94 0 0 1-.908-.127 8.61 8.61 0 0 0 2.263 1.137c.25.082.517.11.78.082.492-.046.834-.226 1.166-.62.22-.26.165-.776.27-1.054.199-.52.713-.478.76-.706.06-.296-.398-.523-.604-.75.214-.138.707-.153.838-.353.145-.223-.12-.404-.152-.693-.032-.294-.115-.676.085-.78.36-.186 1.045-.172 1.569-.844-.397-.844-2.43-3.76-1.447-4.442.728-.506.583-1.177.28-2.563-.344-1.57-.957-2.698-2.195-3.847a2.214 2.214 0 0 0-.347-.26Z"
                            })
                        })
                    });
                case "Gitlab":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FC6D26", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FC6D26"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"
                            })
                        })
                    });
                case "NPM":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#CB3837", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#CB3837"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
                            })
                        })
                    });
                case "Codepen":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z"
                            })
                        })
                    });
                case "Element":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#0DBD8B", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#0DBD8B"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.314 4.715c3.289 0 5.956 2.66 5.956 5.943 0 .484-.394.877-.879.877s-.879-.393-.879-.877c0-2.313-1.88-4.189-4.198-4.189-.486 0-.879-.393-.879-.877s.392-.877.879-.877zm-5.092 9.504c-.486 0-.879-.394-.879-.877 0-3.283 2.666-5.945 5.956-5.945.485 0 .879.393.879.877s-.394.876-.879.876c-2.319 0-4.198 1.877-4.198 4.191 0 .484-.395.878-.879.878zm7.735 5.067c-3.29 0-5.957-2.662-5.957-5.944 0-.484.394-.878.879-.878s.879.394.879.878c0 2.313 1.88 4.189 4.199 4.189.485 0 .879.393.879.877 0 .486-.394.878-.879.878zm0-2.683c-.485 0-.88-.393-.88-.876 0-.484.395-.878.88-.878 2.318 0 4.199-1.876 4.199-4.19 0-.484.393-.877.879-.877.485 0 .879.393.879.877 0 3.282-2.667 5.944-5.957 5.944z"
                            })
                        })
                    });
                case "BeReal":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M6.501 10.727c.593 0 1.029.196 1.307.587.279.393.418.857.418 1.391v.312H5.674a.97.97 0 0 0 .343.596c.182.148.422.223.718.223.172 0 .327-.023.464-.066.163-.055.324-.119.48-.192l.297.733a1.73 1.73 0 0 1-.644.296c-.252.063-.46.093-.62.093-.656 0-1.172-.18-1.55-.537-.377-.36-.565-.84-.565-1.441 0-.603.17-1.086.51-1.45.342-.364.806-.545 1.394-.545Zm8.835 0c.593 0 1.028.196 1.307.587.278.393.417.857.417 1.391v.312h-2.552c.038.235.16.447.344.596.182.148.421.223.718.223.171 0 .326-.023.464-.066a4.53 4.53 0 0 0 .48-.192l.297.733a1.728 1.728 0 0 1-.644.296 2.67 2.67 0 0 1-.62.093c-.656 0-1.173-.18-1.55-.537-.377-.36-.566-.84-.566-1.441 0-.603.17-1.086.512-1.45.34-.364.805-.545 1.393-.545Zm3.875.041c.974 0 1.603.502 1.603 1.26v2.579h-1.027v-.561h-.02c-.215.385-.616.62-1.111.62-.756 0-1.265-.473-1.265-1.136v-.008c0-.683.53-1.083 1.465-1.144l.931-.055v-.231c0-.335-.217-.541-.618-.541-.383 0-.615.18-.664.421l-.007.03h-.939l.004-.04c.056-.696.653-1.194 1.648-1.194Zm4.789 2.8v1.039h-1.04v-1.039H24ZM1.982 9.308c.515 0 .934.114 1.257.34.322.225.484.607.484 1.14 0 .198-.046.376-.137.534-.09.16-.21.296-.355.41.24.125.436.294.59.506.153.213.23.483.23.81 0 .489-.171.871-.512 1.146-.34.275-.795.413-1.362.413H0V9.308h1.982Zm8.702 0c.578 0 1.072.133 1.483.398.411.265.617.675.617 1.231 0 .327-.085.609-.254.846a1.714 1.714 0 0 1-.652.549l1.304 2.275h-1.077l-1.124-2.025a3.626 3.626 0 0 1-.367.015h-.585v2.01H9.022V9.308h1.662ZM22.448 9.3v5.307h-1.076V9.3h1.076Zm-2.66 3.661-.777.049c-.397.025-.605.192-.605.46v.007c0 .277.229.442.584.442.46 0 .797-.294.797-.688l.001-.27ZM2.17 12.285H1.007v1.489h1.092c.27 0 .488-.063.652-.188a.622.622 0 0 0 .246-.53c0-.25-.076-.44-.226-.572-.151-.132-.352-.199-.601-.199Zm4.308-.694a.75.75 0 0 0-.523.19c-.14.128-.232.315-.273.558h1.584c-.052-.253-.146-.442-.281-.564a.73.73 0 0 0-.507-.184Zm8.834 0a.75.75 0 0 0-.523.19c-.14.128-.231.315-.273.558h1.585c-.053-.253-.146-.442-.281-.564a.73.73 0 0 0-.508-.184Zm-4.659-1.441h-.624v1.62h.64c.301 0 .551-.06.749-.182.198-.122.296-.324.296-.604 0-.297-.093-.51-.28-.639-.188-.13-.448-.195-.781-.195Zm-8.819 0h-.827v1.316h.749c.281 0 .5-.053.66-.16.158-.105.238-.273.238-.501 0-.25-.073-.422-.219-.515-.146-.093-.346-.14-.601-.14Z"
                            })
                        })
                    });
                case "Bilibili":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#00A1D6", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#00A1D6"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"
                            })
                        })
                    });
                case "Itch":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FA5C5C", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FA5C5C"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"
                            })
                        })
                    });
                case "Faceit":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF5500", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF5500"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.999 2.705a.167.167 0 00-.312-.1 1141.27 1141.27 0 00-6.053 9.375H.218c-.221 0-.301.282-.11.352 7.227 2.73 17.667 6.836 23.5 9.134.15.06.39-.08.39-.18z"
                            })
                        })
                    });
                case "Bandcamp":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#408294", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#408294"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M0 18.75l7.437-13.5H24l-7.438 13.5H0z"
                            })
                        })
                    });
                case "Rumble":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#85C742", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#85C742"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M14.4528 13.5458c.8064-.6542.9297-1.8381.2756-2.6445a1.8802 1.8802 0 0 0-.2756-.2756 21.2127 21.2127 0 0 0-4.3121-2.776c-1.066-.51-2.256.2-2.4261 1.414a23.5226 23.5226 0 0 0-.14 5.5021c.116 1.23 1.292 1.964 2.372 1.492a19.6285 19.6285 0 0 0 4.5062-2.704v-.008zm6.9322-5.4002c2.0335 2.228 2.0396 5.637.014 7.8723A26.1487 26.1487 0 0 1 8.2946 23.846c-2.6848.6713-5.4168-.914-6.1662-3.5781-1.524-5.2002-1.3-11.0803.17-16.3045.772-2.744 3.3521-4.4661 6.0102-3.832 4.9242 1.174 9.5443 4.196 13.0764 8.0121v.002z"
                            })
                        })
                    });
                case "Replit":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#F26207", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#F26207"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5ZM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12ZM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5Z"
                            })
                        })
                    });
                case "Ubisoft":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.561 11.988C23.301-.304 6.954-4.89.656 6.634c.282.206.661.477.943.672a11.747 11.747 0 00-.976 3.067 11.885 11.885 0 00-.184 2.071C.439 18.818 5.621 24 12.005 24c6.385 0 11.556-5.17 11.556-11.556v-.455zm-20.27 2.06c-.152 1.246-.054 1.636-.054 1.788l-.282.098c-.108-.206-.37-.932-.488-1.908C2.163 10.308 4.7 6.96 8.57 6.33c3.544-.52 6.937 1.68 7.728 4.758l-.282.098c-.087-.087-.228-.336-.77-.878-4.281-4.281-11.002-2.32-11.956 3.74zm11.002 2.081a3.145 3.145 0 01-2.59 1.355 3.15 3.15 0 01-3.155-3.155 3.159 3.159 0 012.927-3.144c1.018-.043 1.972.51 2.416 1.398a2.58 2.58 0 01-.455 2.95c.293.205.575.4.856.595zm6.58.12c-1.669 3.782-5.106 5.766-8.77 5.712-7.034-.347-9.083-8.466-4.38-11.393l.207.206c-.076.108-.358.325-.791 1.182-.51 1.041-.672 2.081-.607 2.732.369 5.67 8.314 6.83 11.045 1.214C21.057 8.217 11.822.401 3.626 6.374l-.184-.184C5.599 2.808 9.816 1.3 13.837 2.309c6.147 1.55 9.453 7.956 7.035 13.94z"
                            })
                        })
                    });
                case "Rockstar":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FCAF17", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FCAF17"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M5.971 6.816h3.241c1.469 0 2.741-.448 2.741-2.084 0-1.3-1.117-1.576-2.19-1.576H6.748l-.777 3.66Zm12.834 8.753h5.168l-4.664 3.228.755 5.087-4.041-3.07L10.599 24l2.536-5.392s-2.95-3.075-2.947-3.075c-.198-.262-.265-.936-.265-1.226 0-.367.024-.739.049-1.134.028-.451.058-.933.058-1.476 0-1.338-.59-2.038-2.036-2.038H5.283l-1.18 5.525H.026L3.269 0h7.672c2.852 0 5.027.702 5.027 3.936 0 2.276-1.12 3.894-3.592 4.233v.045c1.162.276 1.598 1.062 1.598 2.527 0 .585-.018 1.098-.034 1.581-.015.428-.03.834-.03 1.243 0 .525.137 1.382.48 1.968h.567l3.028-5.06.82 5.096Zm-1.233-2.948-2.187 3.654h-3.457l2.103 2.189-1.73 3.672 3.777-2.218 2.976 2.263-.553-3.731 3.093-2.139h-3.43l-.592-3.69Z"
                            })
                        })
                    });
                case "VSCO":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#000000", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#000000"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm11.52 12c0 .408-.023.792-.072 1.176l-2.04-.24c.024-.312.05-.624.05-.936 0-.288-.025-.6-.05-.888l2.04-.24c.072.384.072.744.072 1.128zM.479 12c0-.384.024-.769.049-1.152l2.04.24c-.024.312-.047.6-.047.912s.023.6.047.912l-2.04.24C.479 12.769.479 12.384.479 12zm20.472-3.096l1.921-.72c.264.72.433 1.464.552 2.232l-2.04.24c-.097-.6-.24-1.2-.433-1.752zM21 12c0 .6-.072 1.176-.167 1.752l-2.017-.455c.071-.409.119-.841.119-1.297s-.048-.912-.119-1.344l2.017-.457c.118.577.167 1.177.167 1.801zm-9 6.456C8.435 18.455 5.545 15.565 5.544 12 5.545 8.435 8.435 5.545 12 5.544c3.565.001 6.455 2.891 6.456 6.456.008 3.559-2.871 6.448-6.429 6.456H12zM12.216 21v-2.064c.885-.029 1.756-.224 2.568-.575l.888 1.872c-1.09.482-2.264.742-3.456.767zm-3.936-.791l.912-1.873c.792.359 1.656.575 2.568.6V21c-1.202-.023-2.386-.293-3.48-.791zM3 12c0-.624.072-1.224.192-1.824l2.016.456c-.098.45-.146.908-.144 1.368 0 .432.048.864.12 1.272l-2.016.455C3.051 13.159 2.994 12.58 3 12zm8.76-9v2.064c-.877.029-1.74.224-2.544.576l-.888-1.871C9.411 3.291 10.577 3.03 11.76 3zm3.935.792l-.911 1.872c-.809-.363-1.682-.559-2.568-.576V3.024c1.248 0 2.424.288 3.479.768zm5.088 4.656c-.231-.56-.513-1.098-.84-1.608l1.681-1.152c.407.648.768 1.32 1.056 2.04l-1.897.72zm-.07 1.296l-2.018.456c-.23-.85-.621-1.648-1.151-2.352l1.632-1.295c.72.959 1.248 2.015 1.537 3.191zm-3.457-2.256c-.572-.667-1.264-1.22-2.04-1.633l.912-1.871c1.056.549 1.993 1.299 2.76 2.208l-1.632 1.296zm-.6-3.744l.96-1.824c.672.384 1.295.816 1.896 1.32L18.145 4.8c-.461-.401-.959-.754-1.489-1.056zm-.408-.216c-.54-.266-1.102-.483-1.68-.648l.504-1.992c.744.216 1.464.48 2.159.84l-.983 1.8zm-2.16-.768c-.6-.144-1.2-.216-1.824-.239V.479c.793.024 1.584.12 2.328.289l-.504 1.992zm-2.28-.239c-.605.021-1.207.094-1.8.216L9.528.744c.72-.168 1.487-.265 2.28-.265v2.042zm-2.28.334c-.586.167-1.156.384-1.704.649l-.96-1.824c.691-.343 1.415-.616 2.16-.816l.504 1.991zm-2.112.865c-.529.294-1.027.64-1.488 1.032L4.56 3.216c.6-.504 1.224-.936 1.896-1.319l.96 1.823zm.48.264l.888 1.871c-.792.408-1.464.96-2.04 1.608L5.136 6.168c.775-.895 1.711-1.636 2.76-2.184zM4.848 6.552l1.608 1.295c-.53.705-.921 1.503-1.152 2.353l-2.016-.456c.312-1.2.84-2.28 1.56-3.192zM3.24 8.4l-1.92-.72c.287-.72.648-1.416 1.08-2.04l1.68 1.176c-.341.494-.623 1.025-.84 1.584zm-.168.455c-.192.577-.36 1.152-.432 1.776L.6 10.393c.12-.769.288-1.537.553-2.257l1.919.719zm-.456 4.513c.096.6.239 1.2.432 1.776l-1.92.72c-.271-.728-.456-1.485-.552-2.257l2.04-.239zm.624 2.208c.239.576.528 1.104.84 1.607L2.4 18.336c-.435-.629-.797-1.306-1.08-2.016l1.92-.744zm.024-1.392l2.017-.456c.216.864.624 1.681 1.128 2.376L4.8 17.4c-.725-.957-1.247-2.051-1.536-3.216zm3.432 2.28c.577.672 1.272 1.248 2.064 1.656l-.912 1.872c-1.063-.557-2.009-1.315-2.784-2.232l1.632-1.296zm.72 3.815l-.96 1.825c-.674-.376-1.31-.819-1.896-1.321l1.368-1.535c.456.407.936.744 1.488 1.031zm.408.217c.528.264 1.104.48 1.705.647l-.504 1.992c-.747-.196-1.471-.469-2.16-.815l.959-1.824zm2.16.768c.576.12 1.176.193 1.8.217v2.039c-.774-.026-1.544-.114-2.305-.264l.505-1.992zm2.28.216c.605-.021 1.207-.094 1.801-.217l.479 1.992c-.749.168-1.513.264-2.28.287V21.48zm2.257-.336c.586-.165 1.155-.382 1.703-.647l.96 1.824c-.688.35-1.412.623-2.159.815l-.504-1.992zm2.086-.865c.528-.287 1.032-.647 1.488-1.031l1.369 1.535c-.588.502-1.223.945-1.896 1.321l-.961-1.825zm-.479-.263l-.888-1.871c.788-.414 1.489-.977 2.064-1.656l1.606 1.296c-.778.91-1.722 1.668-2.782 2.231zm3.071-2.592l-1.607-1.296c.532-.708.916-1.517 1.128-2.376l2.017.456c-.311 1.157-.831 2.248-1.538 3.216zM20.76 15.6l1.92.721c-.288.72-.648 1.392-1.079 2.04l-1.682-1.177c.337-.504.624-1.032.841-1.584zm.168-.455c.192-.553.336-1.152.433-1.752l2.039.239c-.11.761-.294 1.508-.551 2.232l-1.921-.719zm.456-9.841l-1.681 1.152c-.358-.49-.76-.947-1.199-1.368l1.368-1.536c.552.552 1.056 1.128 1.512 1.752zM4.2 3.528l1.368 1.536c-.456.408-.84.864-1.2 1.368l-1.68-1.176c.431-.636.94-1.216 1.512-1.728zM2.664 18.744l1.68-1.152c.36.48.769.937 1.2 1.369l-1.368 1.535c-.548-.545-1.054-1.131-1.512-1.752zm17.16 1.729l-1.368-1.537c.432-.407.841-.863 1.199-1.344l1.682 1.176c-.457.6-.961 1.175-1.513 1.705z"
                            })
                        })
                    });
                case "Letterboxd":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#202830", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#202830"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M8.224 14.352a4.447 4.447 0 0 1-3.775 2.092C1.992 16.444 0 14.454 0 12s1.992-4.444 4.45-4.444c1.592 0 2.988.836 3.774 2.092-.427.682-.673 1.488-.673 2.352s.246 1.67.673 2.352zM15.101 12c0-.864.247-1.67.674-2.352-.786-1.256-2.183-2.092-3.775-2.092s-2.989.836-3.775 2.092c.427.682.674 1.488.674 2.352s-.247 1.67-.674 2.352c.786 1.256 2.183 2.092 3.775 2.092s2.989-.836 3.775-2.092A4.42 4.42 0 0 1 15.1 12zm4.45-4.444a4.447 4.447 0 0 0-3.775 2.092c.427.682.673 1.488.673 2.352s-.246 1.67-.673 2.352a4.447 4.447 0 0 0 3.775 2.092C22.008 16.444 24 14.454 24 12s-1.992-4.444-4.45-4.444z"
                            })
                        })
                    });
                case "Crowdin":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#2E3340", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#2E3340"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M16.119 17.793a2.619 2.619 0 0 1-1.667-.562c-.546-.436-1.004-1.09-1.018-1.858-.008-.388.414-.388.414-.388l1.018-.008c.332.008.43.47.445.586.128 1.04.717 1.495 1.168 1.702.273.123.204.513-.362.528zm-5.695-5.287L8.5 12.252c-.867-.214-.844-.982-.807-1.247a5.119 5.119 0 0 1 .814-2.125c.545-.804 1.303-1.508 2.29-2.073 1.856-1.074 4.45-1.673 7.31-1.673 2.09 0 4.256.27 4.29.27.197.025.328.213.333.437a.377.377 0 0 1-.355.393l-.92-.01c-2.902 0-4.968.394-6.506 1.248-1.527.837-2.57 2.117-3.287 4.012-.076.163-.335 1.12-1.24 1.022zm2.533 7.823c-1.44 0-2.797-.622-3.825-1.746-.87-.96-1.397-1.931-1.493-3.164-.06-.813.3-1.094.788-1.044l1.988.218c.45.092.75.34.825.854.397 2.736 2.122 3.814 3.15 4.046.18.042.292.157.283.365a.412.412 0 0 1-.322.398c-.458.074-.936.073-1.394.073zm-4.101 2.418a14.216 14.216 0 0 1-2.307-.214c-1.202-.214-2.208-.582-3.072-1.13C1.41 20.095.163 17.786.014 15.048c-.037-.65-.11-1.89 1.427-1.797.638.033 1.653.343 2.368.548.887.247 1.314.933 1.314 1.608 0 3.858 3.494 6.408 5.02 6.408.654 0 .414.701.127.779-.502.136-1.15.153-1.413.153zM3.525 11.419c-.605-.109-1.194-.358-1.768-.5C-.018 10.479.284 8.688.45 8.196c1.617-4.757 6.746-6.35 10.887-6.773 3.898-.4 7.978-.092 11.778.967.31.083 1.269.327.718.891-.35.358-1.7-.016-2.073-.041-2.23-.167-4.434-.192-6.656.15-2.349.357-4.768 1.099-6.71 2.665-.938.758-1.76 1.723-2.313 2.866-.144.3-.256.6-.354.9-.11.327-.47 1.91-2.215 1.6zm9.94.917c.332-1.488 1.81-3.848 6.385-3.686 1.05.033.57.749.052.731-2.586-.09-3.815 1.578-4.457 3.27-.219.546-.68.626-1.271.53-.415-.074-.866-.123-.71-.846Z"
                            })
                        })
                    });
                case "GOG":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#86328A", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#86328A"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M7.15 15.24H4.36a.4.4 0 0 0-.4.4v2c0 .21.18.4.4.4h2.8v1.32h-3.5c-.56 0-1.02-.46-1.02-1.03v-3.39c0-.56.46-1.02 1.03-1.02h3.48v1.32zM8.16 11.54c0 .58-.47 1.05-1.05 1.05H2.63v-1.35h3.78a.4.4 0 0 0 .4-.4V6.39a.4.4 0 0 0-.4-.4H4.39a.4.4 0 0 0-.41.4v2.02c0 .23.18.4.4.4H6v1.35H3.68c-.58 0-1.05-.46-1.05-1.04V5.68c0-.57.47-1.04 1.05-1.04H7.1c.58 0 1.05.47 1.05 1.04v5.86zM21.36 19.36h-1.32v-4.12h-.93a.4.4 0 0 0-.4.4v3.72h-1.33v-4.12h-.93a.4.4 0 0 0-.4.4v3.72h-1.33v-4.42c0-.56.46-1.02 1.03-1.02h5.61v5.44zM21.37 11.54c0 .58-.47 1.05-1.05 1.05h-4.48v-1.35h3.78a.4.4 0 0 0 .4-.4V6.39a.4.4 0 0 0-.4-.4h-2.03a.4.4 0 0 0-.4.4v2.02c0 .23.18.4.4.4h1.62v1.35H16.9c-.58 0-1.05-.46-1.05-1.04V5.68c0-.57.47-1.04 1.05-1.04h3.43c.58 0 1.05.47 1.05 1.04v5.86zM13.72 4.64h-3.44c-.58 0-1.04.47-1.04 1.04v3.44c0 .58.46 1.04 1.04 1.04h3.44c.57 0 1.04-.46 1.04-1.04V5.68c0-.57-.47-1.04-1.04-1.04m-.3 1.75v2.02a.4.4 0 0 1-.4.4h-2.03a.4.4 0 0 1-.4-.4V6.4c0-.22.17-.4.4-.4H13c.23 0 .4.18.4.4zM12.63 13.92H9.24c-.57 0-1.03.46-1.03 1.02v3.39c0 .57.46 1.03 1.03 1.03h3.39c.57 0 1.03-.46 1.03-1.03v-3.39c0-.56-.46-1.02-1.03-1.02m-.3 1.72v2a.4.4 0 0 1-.4.4v-.01H9.94a.4.4 0 0 1-.4-.4v-1.99c0-.22.18-.4.4-.4h2c.22 0 .4.18.4.4zM23.49 1.1a1.74 1.74 0 0 0-1.24-.52H1.75A1.74 1.74 0 0 0 0 2.33v19.34a1.74 1.74 0 0 0 1.75 1.75h20.5A1.74 1.74 0 0 0 24 21.67V2.33c0-.48-.2-.92-.51-1.24m0 20.58a1.23 1.23 0 0 1-1.24 1.24H1.75A1.23 1.23 0 0 1 .5 21.67V2.33a1.23 1.23 0 0 1 1.24-1.24h20.5a1.24 1.24 0 0 1 1.24 1.24v19.34z"
                            })
                        })
                    });
                case "Fiverr":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#1DBF73", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#1DBF73"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"
                            })
                        })
                    });
                case "Ko-fi":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FF5E5B", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FF5E5B"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"
                            })
                        })
                    });
                case "Anilist":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#02A9FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#02A9FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M24 17.53v2.421c0 .71-.391 1.101-1.1 1.101h-5l-.057-.165L11.84 3.736c.106-.502.46-.788 1.053-.788h2.422c.71 0 1.1.391 1.1 1.1v12.38H22.9c.71 0 1.1.392 1.1 1.101zM11.034 2.947l6.337 18.104h-4.918l-1.052-3.131H6.019l-1.077 3.131H0L6.361 2.948h4.673zm-.66 10.96-1.69-5.014-1.541 5.015h3.23z"
                            })
                        })
                    });
                case "PronounsPage":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffc8dc", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#ffc8dc"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 650 650",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M396.52 174.35c1.35-2.4.21-4.35-2.54-4.35l-48.2.03c-2.75 0-6.15 1.94-7.54 4.31l-118.1 199.77c-16.48 27.15-39.48 33.15-61.58 30.47-37.94-4.6-58.34-32.45-58.34-69.54 0-37.25 30.31-67.56 67.56-67.56h75c2.75 0 6.12-1.95 7.48-4.34l27.03-47.2c1.37-2.39.23-4.34-2.52-4.34h-107c-68.06 0-123.44 55.37-123.44 123.44 0 32.89 12.85 68.36 36.22 91.54 23.03 22.84 53.8 31.21 86.64 31.89 18.54.21 69.46-.21 93.33-42.68 26.73-47.57 136-241.44 136-241.44zM571.94 244.44c-23.03-22.84-53.8-31.21-86.64-31.89-18.54-.21-69.46.21-93.33 42.68-26.72 47.55-136 241.42-136 241.42-1.35 2.4-.21 4.35 2.54 4.35l48.2-.03c2.75 0 6.15-1.94 7.54-4.31l118.1-199.77c16.48-27.15 39.48-33.15 61.58-30.47 37.94 4.6 58.34 32.45 58.34 69.54 0 37.25-30.31 67.56-67.56 67.56h-75c-2.75 0-6.12 1.95-7.48 4.34l-27.03 47.2c-1.37 2.39-.23 4.34 2.52 4.34h107c68.06 0 123.44-55.37 123.44-123.44 0-32.87-12.85-68.34-36.22-91.52z"
                            })
                        })
                    });
                case "Bluesky":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#0285FF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#0285FF"
                            },
                            className: "h-7 w-7",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            l.jsx)("path", {
                                d: "M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"
                            })
                        })
                    });
                case "TrackerNetwork":
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("svg", {
                            role: "img",
                            style: {
                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#FFFFFF", ")"),
                                fill: c.useThemeColor ? c.iconcolor : "#FFFFFF"
                            },
                            className: "h-7 w-7",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 68.65 23.441",
                            children: (0,
                            l.jsx)("path", {
                                d: "M13.814 23.442H7.535V5.86H0V0h40.228a4.2 4.2 0 0 1 4.186 4.186v6.447a4.2 4.2 0 0 1-4.186 4.186H39.6l4.814 8.623h-6.865l-5.065-8.916h-3.517V9.209c3.1-.084 6.112.084 9.084-.084V5.86H27.628v17.582h-6.279V5.86c-2.6.042-5.065-.042-7.535.084ZM51.907 23.442h-6.279V0h7.954l8.791 13.479V0h6.279v23.442h-6.865L51.908 8.916Z"
                            })
                        })
                    })
                }
            }
            let[a,t] = (0,
            s.useState)(!c.autoplayfix)
              , n = {
                date: new Date,
                currentMusicIndex: o,
                isMusicPlaying: !1,
                pageTitle: ""
            }
              , [{date: x, currentMusicIndex: p, isMusicPlaying: u, pageTitle: j},b] = (0,
            s.useState)(n);
            var y, z, M = 0, T = c.title;
            (0,
            s.useEffect)(function() {
                c.animatedTitle ? function e() {
                    b(e=>({
                        ...e,
                        pageTitle: T.substring(M, T.length) + " " + T.substring(0, M)
                    })),
                    ++M > T.length && (M = 0),
                    setTimeout(()=>e(), 150)
                }() : c.animatedTitle || b(e=>({
                    ...e,
                    pageTitle: c.title
                }))
            }, []),
            setInterval(()=>{
                b(e=>({
                    ...e,
                    date: new Date
                }))
            }
            , 1e3);
            let A = ()=>{
                b(e=>({
                    ...e,
                    currentMusicIndex: 0 === e.currentMusicIndex ? c.songs.length - 1 : e.currentMusicIndex - 1
                }))
            }
              , B = ()=>{
                b(e=>({
                    ...e,
                    currentMusicIndex: e.currentMusicIndex < c.songs.length - 1 ? e.currentMusicIndex + 1 : 0
                }))
            }
              , k = (0,
            s.useRef)(null)
              , V = (0,
            s.useRef)(null);
            var L = c.songs[p];
            let[Z,R] = (0,
            s.useState)(!1)
              , [W,G] = (0,
            s.useState)(!1)
              , S = ()=>{
                if (k.current) {
                    var e;
                    let c = null === (e = k.current) || void 0 === e ? void 0 : e.audio.current;
                    (null == c ? void 0 : c.volume) === .1 ? (c.volume = 0,
                    R(!0)) : (null == c ? void 0 : c.volume) === 0 && (c.volume = .1,
                    R(!1))
                }
            }
              , D = ()=>{
                if (V.current) {
                    let e = V.current;
                    (null == e ? void 0 : e.volume) === .1 ? (e.volume = 0,
                    G(!0)) : (null == e ? void 0 : e.volume) === 0 && (e.volume = .1,
                    G(!1))
                }
            }
            ;
            (0,
            s.useEffect)(()=>{
                if (c.cursor.enabled && "" !== c.cursor.type) {
                    let e;
                    switch (c.cursor.type) {
                    case "Sparkle":
                        e = new g.f4({
                            colors: [c.primarycolor, c.secondarycolor, c.accentcolor]
                        });
                        break;
                    case "Ghost":
                        e = new g.$N;
                        break;
                    case "Trailing":
                        e = new g.n8("" !== c.cursor.url ? {
                            particles: 15,
                            rate: .8,
                            baseImageSrc: c.cursor.url
                        } : {
                            particles: 15,
                            rate: .8
                        });
                        break;
                    case "Dot":
                        e = new g.Y2({
                            color: c.accentcolor
                        })
                    }
                    return ()=>{
                        e.destroy()
                    }
                }
            }
            , []);
            let E = ()=>{
                if (!a) {
                    var e, o, l;
                    null === (e = null === (o = k.current) || void 0 === o ? void 0 : o.audio.current) || void 0 === e || e.play(),
                    null === (l = V.current) || void 0 === l || l.play(),
                    c.useBackgroundAudio && V.current && (V.current.volume = .1),
                    t(!0)
                }
            }
              , _ = (()=>{
                let[e,c] = (0,
                s.useState)(!1);
                return (0,
                s.useEffect)(()=>{
                    let e = ()=>{
                        c(window.innerWidth <= 1100),
                        console.log(window.innerWidth)
                    }
                    ;
                    return e(),
                    window.addEventListener("resize", e),
                    ()=>window.removeEventListener("resize", e)
                }
                , []),
                e
            }
            )();
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)(N(), {
                    children: (0,
                    l.jsx)("title", {
                        children: j
                    })
                }), (0,
                l.jsx)("style", {
                    children: "body {\n                        font-family: ".concat(c.font, ", sans-serif;\n                    }")
                }), "" !== c.cursor.url ? (0,
                l.jsx)(i(), {
                    id: "51f6158f4d69533d",
                    dynamic: [c.cursor.url, c.cursor.center ? "16 16" : "0 0", c.primarycolor, c.accentcolor],
                    children: "*{cursor:url(".concat(c.cursor.url, ")").concat(c.cursor.center ? "16 16" : "0 0", ",auto!important}::-moz-selection{background-color:").concat(c.primarycolor, "!important;color:").concat(c.accentcolor, "!important}::selection{background-color:").concat(c.primarycolor, "!important;color:").concat(c.accentcolor, "!important}")
                }) : (0,
                l.jsx)(i(), {
                    id: "1d5e4801afcb1fbe",
                    dynamic: [c.primarycolor, c.accentcolor],
                    children: "::-moz-selection{background-color:".concat(c.primarycolor, "!important;color:").concat(c.accentcolor, "!important}::selection{background-color:").concat(c.primarycolor, "!important;color:").concat(c.accentcolor, "!important}")
                }), (0,
                l.jsx)("aside", {
                    style: {
                        backgroundColor: "".concat(c.backgroundcolor)
                    },
                    className: "".concat(a ? "blur-none" : "blur-md", " fixed w-screen h-screen z-[-5] duration-500"),
                    children: ((e,o)=>{
                        switch (e) {
                        case "video":
                            return (0,
                            l.jsx)("video", {
                                ref: V,
                                autoPlay: a,
                                loop: !0,
                                muted: !c.useBackgroundAudio,
                                playsInline: !0,
                                src: o,
                                className: "absolute object-cover w-full h-full"
                            });
                        case "image":
                            return (0,
                            l.jsx)("img", {
                                draggable: !1,
                                src: o,
                                className: "object-cover h-full w-full"
                            })
                        }
                    }
                    )(c.background.type, c.background.url)
                }), a && c.useBackgroundAudio ? (0,
                l.jsx)("button", {
                    onClick: D,
                    style: {
                        borderColor: (0,
                        d.G)(c.accentcolor, 1),
                        borderWidth: "".concat(c.borderWidth, "px"),
                        borderRadius: "".concat(c.borderRadius, "rem"),
                        backgroundColor: (0,
                        d.G)(c.primarycolor, c.opacity),
                        backdropFilter: "blur(".concat(c.blur, "px)"),
                        WebkitBackdropFilter: "blur(".concat(c.blur, "px)")
                    },
                    className: "p-2 h-12 w-12 m-2 absolute z-[100] items-center justify-center flex",
                    children: W ? (0,
                    l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                        },
                        className: "h-7 w-7",
                        viewBox: "0 0 16 16",
                        children: (0,
                        l.jsx)("path", {
                            d: "M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"
                        })
                    }) : (0,
                    l.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                        },
                        className: "h-7 w-7",
                        viewBox: "0 0 16 16",
                        children: [(0,
                        l.jsx)("path", {
                            d: "M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"
                        }), (0,
                        l.jsx)("path", {
                            d: "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"
                        }), (0,
                        l.jsx)("path", {
                            d: "M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"
                        })]
                    })
                }) : (0,
                l.jsx)(l.Fragment, {}), (0,
                l.jsxs)("main", {
                    style: {
                        backgroundColor: a ? "" : (0,
                        d.G)(c.primarycolor, .8)
                    },
                    onClick: E,
                    className: "".concat(a ? "flex min-h-screen py-8" : "flex flex-col justify-center w-screen h-screen cursor-pointer", " duration-500"),
                    children: [(0,
                    l.jsx)("h1", {
                        style: {
                            color: c.textcolor
                        },
                        className: "".concat(a ? "hidden" : "flex flex-col px-4 break-words text-center", " font-semibold text-3xl"),
                        children: c.message
                    }), (0,
                    l.jsx)("div", {
                        className: "".concat(a ? "max-w-[42rem] w-full m-auto px-4" : "hidden"),
                        children: (0,
                        l.jsx)(F.Z, {
                            tiltEnable: c.tilt && !_,
                            tiltReverse: !0,
                            tiltMaxAngleX: 6,
                            tiltMaxAngleY: 6,
                            children: (0,
                            l.jsxs)("div", {
                                className: "flex flex-col gap-3",
                                children: [a ? (0,
                                l.jsxs)(w.E.div, {
                                    style: {
                                        backdropFilter: "blur(".concat(c.blur, "px)"),
                                        WebkitBackdropFilter: "blur(".concat(c.blur, "px)"),
                                        borderRadius: "".concat(c.borderRadius, "rem")
                                    },
                                    initial: c.animated ? v.nr : v.tZ,
                                    animate: c.animated ? v.gM : v.j7,
                                    transition: {
                                        duration: .5,
                                        ease: [.39, .21, .12, .96],
                                        delay: .1
                                    },
                                    className: "flex flex-col z-50",
                                    children: [c.banner.enabled ? ((e,o)=>{
                                        switch (e) {
                                        case "video":
                                            return (0,
                                            l.jsx)("video", {
                                                style: {
                                                    borderColor: (0,
                                                    d.G)(c.accentcolor, 1),
                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                    borderTopLeftRadius: "".concat(c.borderRadius, "rem"),
                                                    borderTopRightRadius: "".concat(c.borderRadius, "rem"),
                                                    backgroundColor: (0,
                                                    d.G)(c.primarycolor, c.opacity)
                                                },
                                                autoPlay: !0,
                                                loop: !0,
                                                muted: !0,
                                                playsInline: !0,
                                                src: o,
                                                className: "object-cover w-full h-32"
                                            });
                                        case "image":
                                            return (0,
                                            l.jsx)("img", {
                                                draggable: !1,
                                                style: {
                                                    borderColor: (0,
                                                    d.G)(c.accentcolor, 1),
                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                    borderTopLeftRadius: "".concat(c.borderRadius, "rem"),
                                                    borderTopRightRadius: "".concat(c.borderRadius, "rem"),
                                                    backgroundColor: (0,
                                                    d.G)(c.primarycolor, c.opacity)
                                                },
                                                src: o,
                                                className: "object-cover w-full h-32"
                                            });
                                        case "":
                                            return (0,
                                            l.jsx)("img", {
                                                draggable: !1,
                                                style: {
                                                    borderColor: (0,
                                                    d.G)(c.accentcolor, 1),
                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                    borderTopLeftRadius: "".concat(c.borderRadius, "rem"),
                                                    borderTopRightRadius: "".concat(c.borderRadius, "rem"),
                                                    backgroundColor: (0,
                                                    d.G)(c.primarycolor, c.opacity)
                                                },
                                                src: "",
                                                className: "object-cover w-full h-32"
                                            })
                                        }
                                    }
                                    )(c.banner.type, c.banner.url) : (0,
                                    l.jsx)(l.Fragment, {}), (0,
                                    l.jsx)("style", {
                                        children: ".main-box{\n                                                border-color: ".concat((0,
                                        d.G)(c.accentcolor, 1), ";\n                                                border-width: ").concat(c.banner.enabled ? "0px" : "".concat(c.borderWidth, "px"), " ").concat(c.banner.enabled ? "" : "!important", ";\n                                                border-bottom-width : ").concat(c.banner.enabled ? "".concat(c.borderWidth, "px") : "0px", ";\n                                                border-left-width : ").concat(c.banner.enabled ? "".concat(c.borderWidth, "px") : "0px", ";\n                                                border-right-width : ").concat(c.banner.enabled ? "".concat(c.borderWidth, "px") : "0px", ";\n                                                background-color: ").concat((0,
                                        d.G)(c.primarycolor, c.opacity), ";\n                                                padding: 1rem;\n                                                border-radius: ").concat(c.banner.enabled ? "0rem" : "".concat(c.borderRadius, "rem"), " ").concat(c.banner.enabled ? "" : "!important", ";\n                                                border-bottom-right-radius : ").concat(c.banner.enabled ? "".concat(c.borderRadius, "rem") : "0rem", ";\n                                                border-bottom-left-radius : ").concat(c.banner.enabled ? "".concat(c.borderRadius, "rem") : "0rem", ";\n                                            }")
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "main-box",
                                        children: [c.showViews ? (0,
                                        l.jsxs)("div", {
                                            className: "".concat(c.banner.enabled ? "" : "absolute", " flex gap-1 items-center"),
                                            children: [(0,
                                            l.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                style: {
                                                    fill: c.textcolor
                                                },
                                                className: "w-4 h-4",
                                                viewBox: "0 0 16 16",
                                                children: [(0,
                                                l.jsx)("path", {
                                                    d: "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                                                }), (0,
                                                l.jsx)("path", {
                                                    d: "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                                })]
                                            }), (0,
                                            l.jsx)("p", {
                                                style: {
                                                    color: c.textcolor
                                                },
                                                children: c.views
                                            })]
                                        }) : (0,
                                        l.jsx)(l.Fragment, {}), (0,
                                        l.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [(0,
                                            l.jsx)("img", {
                                                draggable: !1,
                                                style: {
                                                    borderColor: (0,
                                                    d.G)(c.accentcolor, 1),
                                                    borderWidth: "".concat(c.borderWidth, "px")
                                                },
                                                className: "".concat(c.banner.enabled ? c.showViews ? "my-[-2.9rem] -translate-y-[3.20rem]" : "my-[-2.22rem] -translate-y-[2.5rem]" : "", " h-28 w-28 mx-auto rounded-full"),
                                                src: c.pfp.url
                                            }), (0,
                                            l.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [(0,
                                                l.jsxs)("div", {
                                                    className: "flex flex-col mx-auto items-center",
                                                    children: [(()=>{
                                                        if (!c.sparkles.enabled || "" === c.sparkles.type)
                                                            return (0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor
                                                                },
                                                                className: "font-semibold text-[1.75rem] break-all text-center",
                                                                children: c.name
                                                            });
                                                        switch (c.sparkles.type) {
                                                        case "Rainbow":
                                                            return (0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor,
                                                                    backgroundImage: 'url("/_assets/sparkles/rainbowsparkle.gif")'
                                                                },
                                                                className: "font-semibold text-[1.75rem] break-all text-center",
                                                                children: c.name
                                                            });
                                                        case "White":
                                                            return (0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor,
                                                                    backgroundImage: 'url("/_assets/sparkles/whitesparkle.gif")'
                                                                },
                                                                className: "font-semibold text-[1.75rem] break-all text-center",
                                                                children: c.name
                                                            });
                                                        case "Black":
                                                            return (0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor,
                                                                    backgroundImage: 'url("/_assets/sparkles/blacksparkle.gif")'
                                                                },
                                                                className: "font-semibold text-[1.75rem] break-all text-center",
                                                                children: c.name
                                                            });
                                                        case "Blue":
                                                            return (0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor,
                                                                    backgroundImage: 'url("/_assets/sparkles/bluesparkle.gif")'
                                                                },
                                                                className: "font-semibold text-[1.75rem] break-all text-center",
                                                                children: c.name
                                                            });
                                                        case "Green":
                                                            return (0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor,
                                                                    backgroundImage: 'url("/_assets/sparkles/greensparkle.gif")'
                                                                },
                                                                className: "font-semibold text-[1.75rem] break-all text-center",
                                                                children: c.name
                                                            });
                                                        case "Yellow":
                                                            return (0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor,
                                                                    backgroundImage: 'url("/_assets/sparkles/yellowsparkle.gif")'
                                                                },
                                                                className: "font-semibold text-[1.75rem] break-all text-center",
                                                                children: c.name
                                                            });
                                                        case "Pink":
                                                            return (0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor,
                                                                    backgroundImage: 'url("/_assets/sparkles/pinksparkle.gif")'
                                                                },
                                                                className: "font-semibold text-[1.75rem] break-all text-center",
                                                                children: c.name
                                                            });
                                                        case "Purple":
                                                            return (0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor,
                                                                    backgroundImage: 'url("/_assets/sparkles/purplesparkle.gif")'
                                                                },
                                                                className: "font-semibold text-[1.75rem] break-all text-center",
                                                                children: c.name
                                                            });
                                                        case "Red":
                                                            return (0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor,
                                                                    backgroundImage: 'url("/_assets/sparkles/redsparkle.gif")'
                                                                },
                                                                className: "font-semibold text-[1.75rem] break-all text-center",
                                                                children: c.name
                                                            })
                                                        }
                                                    }
                                                    )(), c.ranks.length > 0 && c.showBadges ? (0,
                                                    l.jsxs)("div", {
                                                        className: "flex flex-row flex-wrap justify-center z-40 gap-2 mb-1",
                                                        children: ["60f6f3e9-d258-4822-9ee6-58b9e34ef8b7" === c._id ? (0,
                                                        l.jsx)(l.Fragment, {
                                                            children: (0,
                                                            l.jsxs)("div", {
                                                                className: "group flex flex-col items-center justify-center",
                                                                children: [(0,
                                                                l.jsxs)("svg", {
                                                                    style: {
                                                                        filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ffd700", ")")
                                                                    },
                                                                    className: "w-7 h-7",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 24 24",
                                                                    children: [(0,
                                                                    l.jsx)("rect", {
                                                                        className: "w-7 h-7 fill-none"
                                                                    }), (0,
                                                                    l.jsx)("path", {
                                                                        style: {
                                                                            fill: c.useThemeColor ? c.iconcolor : "#ffd700"
                                                                        },
                                                                        d: "M12.4038,15.2835c-1.0588-.2985-1.2942-.493-1.2942-.9262,0-.305.1812-.68.8176-.68a.9542.9542,0,0,1,.7032.2243.8628.8628,0,0,1,.2481.4851.705.705,0,0,0,.7891.64.6743.6743,0,0,0,.6189-.64,1.8565,1.8565,0,0,0-.4107-1.0407,1.9183,1.9183,0,0,0-1.3286-.6662v-.65a.5886.5886,0,0,0-1.1771,0v.6637a1.8482,1.8482,0,0,0-1.6757,1.8c0,.9318.4882,1.5488,2.1612,2.03.9192.2625,1.1759.5,1.1759.9861,0,.3961-.2344.7469-.9668.7469a1.04,1.04,0,0,1-1.0994-.8331.7531.7531,0,0,0-.9325-.6026.67.67,0,0,0-.4721.6026A1.9339,1.9339,0,0,0,9.89,18.38a2.2132,2.2132,0,0,0,1.55.8725V20.05c.018.32.3428.4615.6313.46a.5228.5228,0,0,0,.5545-.46V19.25A1.8653,1.8653,0,0,0,14.44,17.3477C14.44,16.2927,13.8839,15.696,12.4038,15.2835Z"
                                                                    }), (0,
                                                                    l.jsx)("path", {
                                                                        style: {
                                                                            fill: c.useThemeColor ? c.iconcolor : "#ffd700"
                                                                        },
                                                                        d: "M15.6361,8.6425a2.231,2.231,0,0,0,.4525-1.3445,2.19,2.19,0,0,0-1.0455-1.8823l1.2608-3.0368a.8514.8514,0,0,0-.2557-.9926,6.6025,6.6025,0,0,0-8.0955,0,.8512.8512,0,0,0-.2558.9922l1.2608,3.037A2.1907,2.1907,0,0,0,7.9123,7.298a2.2309,2.2309,0,0,0,.4524,1.3445C5.0381,10.1676,2.66,14.0836,2.66,18.6762v.0132c0,1.704,1.1134,3.1637,3.1355,4.111A15.0337,15.0337,0,0,0,12,24c4.4995,0,9.3408-1.6618,9.3408-5.3238C21.34,14.0836,18.9624,10.1676,15.6361,8.6425ZM12,1.7031a4.8954,4.8954,0,0,1,2.4651.6613l-1.1416,2.75H10.677l-1.1416-2.75A4.8947,4.8947,0,0,1,12,1.7031ZM14.4013,7.298c0,.2649-.17.489-.37.489H9.9687c-.2,0-.3692-.2241-.3692-.489s.1688-.4886.3692-.4886h.0838c.019.0012.0366.0083.0559.0083h3.7841c.0193,0,.0369-.0071.0559-.0083h.0829C14.2317,6.8094,14.4013,7.033,14.4013,7.298ZM12,22.3558c-3.73,0-7.6965-1.2849-7.6965-3.6664v-.0132c0-5.0065,3.1979-9.08,7.1289-9.08H12.569c3.93,0,7.1279,4.0737,7.1279,9.0934C19.6969,21.0709,15.7309,22.3558,12,22.3558Z"
                                                                    })]
                                                                }), (0,
                                                                l.jsx)("div", {
                                                                    style: {
                                                                        borderColor: (0,
                                                                        d.G)(c.accentcolor, 1),
                                                                        borderWidth: "".concat(c.borderWidth, "px"),
                                                                        borderRadius: "".concat(c.borderRadius, "rem"),
                                                                        backgroundColor: (0,
                                                                        d.G)(c.secondarycolor, 1)
                                                                    },
                                                                    className: "absolute p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                    children: (0,
                                                                    l.jsx)("span", {
                                                                        style: {
                                                                            color: c.textcolor
                                                                        },
                                                                        className: "font-semibold text-sm",
                                                                        children: "Super Rich"
                                                                    })
                                                                })]
                                                            })
                                                        }) : (0,
                                                        l.jsx)(l.Fragment, {}), c.ranks.map((e,o)=>{
                                                            switch (e) {
                                                            case "Rich":
                                                                return (0,
                                                                l.jsx)(l.Fragment, {
                                                                    children: (0,
                                                                    l.jsxs)("div", {
                                                                        className: "group flex flex-col items-center justify-center",
                                                                        children: [(0,
                                                                        l.jsxs)("svg", {
                                                                            style: {
                                                                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#118C4F", ")")
                                                                            },
                                                                            className: "w-7 h-7",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            viewBox: "0 0 24 24",
                                                                            children: [(0,
                                                                            l.jsx)("rect", {
                                                                                className: "w-7 h-7 fill-none"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#118C4F"
                                                                                },
                                                                                d: "M12.0611,9.9156A.9806.9806,0,0,1,11.0244,9.13a.71.71,0,0,0-.88-.5682A.6314.6314,0,0,0,9.7,9.13a1.8232,1.8232,0,0,0,.31.9012,2.0871,2.0871,0,0,0,1.4618.8228v.7523c.017.3021.3232.4352.5953.434a.4931.4931,0,0,0,.5229-.434v-.7551a1.7589,1.7589,0,0,0,1.7108-1.7935c0-.9948-.5243-1.5575-1.92-1.9465C11.3824,6.83,11.16,6.6463,11.16,6.2378c0-.2877.1708-.6412.771-.6412a.9.9,0,0,1,.6632.2114.8142.8142,0,0,1,.2339.4575.6647.6647,0,0,0,.7441.6035.6358.6358,0,0,0,.5836-.6035,1.7507,1.7507,0,0,0-.3872-.9814,1.81,1.81,0,0,0-1.2529-.6283V4.0431a.555.555,0,0,0-1.11,0V4.669a1.7428,1.7428,0,0,0-1.58,1.6977c0,.8788.46,1.4606,2.0381,1.9147.8668.2475,1.1088.4712,1.1088.93C12.9727,9.5847,12.7517,9.9156,12.0611,9.9156Z"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#118C4F"
                                                                                },
                                                                                d: "M23.2941,1.4118H.7059A.706.706,0,0,0,0,2.1176V13.4118a.7018.7018,0,0,0,.213.5032,2.0689,2.0689,0,0,0,.3381,2.32,2.0838,2.0838,0,0,0,0,2.8235,2.1082,2.1082,0,0,0,1.5665,3.5294H21.8824a2.1082,2.1082,0,0,0,1.5665-3.5294,2.0838,2.0838,0,0,0,0-2.8235,2.0689,2.0689,0,0,0,.3381-2.32A.7018.7018,0,0,0,24,13.4118V2.1176A.706.706,0,0,0,23.2941,1.4118Zm-.7059,13.4117a.7072.7072,0,0,1-.7058.7059H2.1176a.7059.7059,0,0,1,0-1.4118H21.8824A.7072.7072,0,0,1,22.5882,14.8235Zm0,2.8236a.7072.7072,0,0,1-.7058.7058H2.1176a.7059.7059,0,0,1,0-1.4117H21.8824A.7072.7072,0,0,1,22.5882,17.6471ZM5.1051,2.8235h13.79a4.4589,4.4589,0,0,0,3.6933,3.6933V9.0126a4.459,4.459,0,0,0-3.6933,3.6933H5.1051A4.459,4.459,0,0,0,1.4118,9.0126V6.5168A4.4589,4.4589,0,0,0,5.1051,2.8235ZM1.4118,12.7059V10.4347a3.0742,3.0742,0,0,1,2.2711,2.2712H1.4118Zm18.9053,0a3.0742,3.0742,0,0,1,2.2711-2.2712v2.2712H20.3171Zm2.2711-9.8824V5.0947a3.0742,3.0742,0,0,1-2.2711-2.2712Zm-21.1764,0H3.6829A3.0742,3.0742,0,0,1,1.4118,5.0947Zm20.4706,18.353H2.1176a.7059.7059,0,0,1,0-1.4118H21.8824a.7059.7059,0,0,1,0,1.4118Z"
                                                                            })]
                                                                        }), (0,
                                                                        l.jsx)("div", {
                                                                            style: {
                                                                                borderColor: (0,
                                                                                d.G)(c.accentcolor, 1),
                                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                backgroundColor: (0,
                                                                                d.G)(c.secondarycolor, 1)
                                                                            },
                                                                            className: "absolute p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                            children: (0,
                                                                            l.jsx)("span", {
                                                                                style: {
                                                                                    color: c.textcolor
                                                                                },
                                                                                className: "font-semibold text-sm",
                                                                                children: "Rich"
                                                                            })
                                                                        })]
                                                                    })
                                                                });
                                                            case "Owner":
                                                                return (0,
                                                                l.jsx)(l.Fragment, {
                                                                    children: (0,
                                                                    l.jsxs)("div", {
                                                                        className: "group flex flex-col items-center justify-center",
                                                                        children: [(0,
                                                                        l.jsxs)("svg", {
                                                                            style: {
                                                                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#cc0011", ")")
                                                                            },
                                                                            className: "w-7 h-7",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            viewBox: "0 0 24 24",
                                                                            children: [(0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#cc0011"
                                                                                },
                                                                                d: "M23.6456,8.0229a.9272.9272,0,0,0-1.0042-.0865l-5.1463,2.7547L12.7716,3.7447a.924.924,0,0,0-.7626-.4038h-.0009a.9221.9221,0,0,0-.7626.4029l-4.74,6.9482L1.3586,7.9364a.9232.9232,0,0,0-1.33,1.0411l2.789,10.9857a.9238.9238,0,0,0,.8952.6959H20.2877a.9238.9238,0,0,0,.8952-.6959l2.789-10.9857A.9256.9256,0,0,0,23.6456,8.0229ZM4.4307,18.813l-.5324-2.0967H20.1017l-.5324,2.0967Zm16.14-3.9428H3.4294L2.3331,10.5523l4.033,2.1589a.9243.9243,0,0,0,1.198-.2938l4.4431-6.5138,4.4278,6.5129a.924.924,0,0,0,1.1989.2947l4.033-2.1589Z"
                                                                            }), (0,
                                                                            l.jsx)("rect", {
                                                                                className: "w-7 h-7 fill-none"
                                                                            })]
                                                                        }), (0,
                                                                        l.jsx)("div", {
                                                                            style: {
                                                                                borderColor: (0,
                                                                                d.G)(c.accentcolor, 1),
                                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                backgroundColor: (0,
                                                                                d.G)(c.secondarycolor, 1)
                                                                            },
                                                                            className: "absolute p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                            children: (0,
                                                                            l.jsx)("span", {
                                                                                style: {
                                                                                    color: c.textcolor
                                                                                },
                                                                                className: "font-semibold text-sm",
                                                                                children: "Owner"
                                                                            })
                                                                        })]
                                                                    })
                                                                });
                                                            case "Developer":
                                                                return (0,
                                                                l.jsx)(l.Fragment, {
                                                                    children: (0,
                                                                    l.jsxs)("div", {
                                                                        className: "group flex flex-col items-center justify-center",
                                                                        children: [(0,
                                                                        l.jsxs)("svg", {
                                                                            style: {
                                                                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#450006", ")")
                                                                            },
                                                                            className: "w-7 h-7",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            viewBox: "0 0 24 24",
                                                                            children: [(0,
                                                                            l.jsx)("rect", {
                                                                                className: "w-7 h-7 fill-none"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#450006"
                                                                                },
                                                                                d: "M13.74,2.5205h-.0037a.9848.9848,0,0,0-1.1491.7979L9.4951,20.3268a.9895.9895,0,0,0,.7943,1.151.9494.9494,0,0,0,.1819.0172.9887.9887,0,0,0,.9736-.8143L14.5374,3.6732A.9936.9936,0,0,0,13.74,2.5205Z",
                                                                                transform: "translate(0)"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#450006"
                                                                                },
                                                                                d: "M23.6951,11.2867,18.0114,6.4973a1.09,1.09,0,0,0-1.372,0,.8011.8011,0,0,0,0,1.2593l4.9576,4.177-4.7493,4.2353a.8115.8115,0,0,0-.2857.6323.8343.8343,0,0,0,.3248.626,1.0673,1.0673,0,0,0,.666.2256,1.0493,1.0493,0,0,0,.7051-.2593l5.4581-4.8649a.8023.8023,0,0,0-.0209-1.2419Z",
                                                                                transform: "translate(0)"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#450006"
                                                                                },
                                                                                d: "M7.6664,7.1269a.8181.8181,0,0,0-.3048-.63,1.09,1.09,0,0,0-1.3721,0L.3049,11.2867a.8007.8007,0,0,0-.0191,1.2419L5.743,17.3935a1.0907,1.0907,0,0,0,1.37.0337.8318.8318,0,0,0,.3257-.6242.8111.8111,0,0,0-.2848-.6332l-4.75-4.2362,4.9577-4.177A.8182.8182,0,0,0,7.6664,7.1269Z",
                                                                                transform: "translate(0)"
                                                                            })]
                                                                        }), (0,
                                                                        l.jsx)("div", {
                                                                            style: {
                                                                                borderColor: (0,
                                                                                d.G)(c.accentcolor, 1),
                                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                backgroundColor: (0,
                                                                                d.G)(c.secondarycolor, 1)
                                                                            },
                                                                            className: "absolute p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                            children: (0,
                                                                            l.jsx)("span", {
                                                                                style: {
                                                                                    color: c.textcolor
                                                                                },
                                                                                className: "font-semibold text-sm",
                                                                                children: "Developer"
                                                                            })
                                                                        })]
                                                                    })
                                                                });
                                                            case "Admin":
                                                                return (0,
                                                                l.jsx)(l.Fragment, {
                                                                    children: (0,
                                                                    l.jsxs)("div", {
                                                                        className: "group flex flex-col items-center justify-center",
                                                                        children: [(0,
                                                                        l.jsxs)("svg", {
                                                                            style: {
                                                                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#ff4d5c", ")")
                                                                            },
                                                                            className: "w-7 h-7",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            viewBox: "0 0 24 24",
                                                                            children: [(0,
                                                                            l.jsx)("rect", {
                                                                                className: "w-7 h-7 fill-none"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#ff4d5c"
                                                                                },
                                                                                d: "M21.3392,2.9541a18.853,18.853,0,0,1-6.228-1.1765A13.2038,13.2038,0,0,1,12.4357.15a.7074.7074,0,0,0-.8245-.0331,17.2316,17.2316,0,0,1-2.9237,1.55,25.7748,25.7748,0,0,1-6.079,1.29.7055.7055,0,0,0-.6453.7031c0,9.8953.8052,13.0827,2.1931,15.239,2.2472,3.5754,7.4393,5.0165,7.659,5.0763A.7.7,0,0,0,12,24a.6833.6833,0,0,0,.1967-.0285l.1057-.03c1.5772-.4568,5.272-1.5267,7.5579-5.0074,2.1765-3.045,2.1765-7.648,2.1765-15.2739A.706.706,0,0,0,21.3392,2.9541Zm-2.6434,15.181a11.3223,11.3223,0,0,1-6.694,4.4237c-.9044-.28-4.9163-1.6525-6.6544-4.4182C4.1572,16.2914,3.409,13.3052,3.3759,4.296A24.6664,24.6664,0,0,0,9.2243,2.9715a18.524,18.524,0,0,0,2.7426-1.4062,14.6025,14.6025,0,0,0,2.56,1.4972A18.6525,18.6525,0,0,0,20.625,4.3392C20.6232,11.2785,20.5653,15.52,18.6958,18.1351Z"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#ff4d5c"
                                                                                },
                                                                                d: "M12.4357,3.4451a.7044.7044,0,0,0-.8245-.034A12.0007,12.0007,0,0,1,9.5754,4.49,18.0075,18.0075,0,0,1,5.33,5.389a.7055.7055,0,0,0-.6453.7031c0,7.0589.5828,9.3456,1.5846,10.9045,1.6351,2.6,5.387,3.6415,5.546,3.6847a.5841.5841,0,0,0,.1507.0165,1.227,1.227,0,0,0,.307-.0413,9.29,9.29,0,0,0,5.4623-3.625c1.58-2.2105,1.58-5.4954,1.58-10.9394a.7061.7061,0,0,0-.6977-.7058A13.136,13.136,0,0,1,14.29,4.5719,9.1264,9.1264,0,0,1,12.4357,3.4451Zm4.1351,12.7877a7.7776,7.7776,0,0,1-4.5671,3.0312c-.7188-.2279-3.3815-1.1774-4.5432-3.0248-.8153-1.2675-1.33-3.3263-1.3622-9.5138a17.22,17.22,0,0,0,4.0138-.93,13.3052,13.3052,0,0,0,1.8548-.9384,10.5955,10.5955,0,0,0,1.7381,1,13.1185,13.1185,0,0,0,4.1985.91C17.9007,11.5269,17.8447,14.4515,16.5708,16.2328Z"
                                                                            })]
                                                                        }), (0,
                                                                        l.jsx)("div", {
                                                                            style: {
                                                                                borderColor: (0,
                                                                                d.G)(c.accentcolor, 1),
                                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                backgroundColor: (0,
                                                                                d.G)(c.secondarycolor, 1)
                                                                            },
                                                                            className: "absolute p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                            children: (0,
                                                                            l.jsx)("span", {
                                                                                style: {
                                                                                    color: c.textcolor
                                                                                },
                                                                                className: "font-semibold text-sm",
                                                                                children: "Admin"
                                                                            })
                                                                        })]
                                                                    })
                                                                });
                                                            case "Staff":
                                                                return (0,
                                                                l.jsx)(l.Fragment, {
                                                                    children: (0,
                                                                    l.jsxs)("div", {
                                                                        className: "group flex flex-col items-center justify-center",
                                                                        children: [(0,
                                                                        l.jsxs)("svg", {
                                                                            style: {
                                                                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#020275", ")")
                                                                            },
                                                                            className: "w-7 h-7",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            viewBox: "0 0 24 24",
                                                                            children: [(0,
                                                                            l.jsx)("rect", {
                                                                                className: "w-7 h-7 fill-none"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#020275"
                                                                                },
                                                                                d: "M23.6807,7.0088a.6408.6408,0,0,0-.2627-.4117l-.001-.0007-2.5249-1.76a.6547.6547,0,0,0-.62-.0618,1.2035,1.2035,0,0,1-1.0861-.106,1.2567,1.2567,0,0,1-.4708-.9925.6386.6386,0,0,0-.1475-.44A9.4742,9.4742,0,0,0,11.77.0007C6.9146.0654,4.4793,4.2712,4.3783,4.45a.6386.6386,0,0,0,.1344.795.63.63,0,0,0,.0556.0435.6382.6382,0,0,0,.75-.0129,4.6334,4.6334,0,0,1,2.2485-.9087,4.8294,4.8294,0,0,1,3.2647.89l-1.28,1.8278L.8194,19.5558a2.8248,2.8248,0,1,0,4.6279,3.24l8.732-12.4706.7328-1.0466a1.3414,1.3414,0,0,1,1.5427-.6013,1.3053,1.3053,0,0,1,.66.8328.64.64,0,0,0,.2523.3633l2.521,1.7653a.6387.6387,0,0,0,.89-.157L23.575,7.4873A.6384.6384,0,0,0,23.6807,7.0088ZM4.4,22.0631a1.5466,1.5466,0,1,1-2.5338-1.7742l8.3654-11.947,2.5338,1.7742ZM20.0972,10.2255,18.2741,8.949a2.4912,2.4912,0,0,0-1.3326-1.4528,2.5949,2.5949,0,0,0-3.0836,1.06l-.359.5128L10.9651,7.2948l1.2608-1.8006a.6385.6385,0,0,0-.1007-.8454A6.2879,6.2879,0,0,0,7.4241,3.0973c-.0892.01-.1785.022-.267.0363a7.1369,7.1369,0,0,1,4.63-1.8547,8.19,8.19,0,0,1,5.6589,2.6222A2.49,2.49,0,0,0,18.4524,5.716a2.4426,2.4426,0,0,0,1.9676.35l1.7406,1.2127Z"
                                                                            })]
                                                                        }), (0,
                                                                        l.jsx)("div", {
                                                                            style: {
                                                                                borderColor: (0,
                                                                                d.G)(c.accentcolor, 1),
                                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                backgroundColor: (0,
                                                                                d.G)(c.secondarycolor, 1)
                                                                            },
                                                                            className: "absolute p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                            children: (0,
                                                                            l.jsx)("span", {
                                                                                style: {
                                                                                    color: c.textcolor
                                                                                },
                                                                                className: "font-semibold text-sm",
                                                                                children: "Staff"
                                                                            })
                                                                        })]
                                                                    })
                                                                });
                                                            case "Beta":
                                                                return (0,
                                                                l.jsx)(l.Fragment, {
                                                                    children: (0,
                                                                    l.jsxs)("div", {
                                                                        className: "group flex flex-col items-center justify-center",
                                                                        children: [(0,
                                                                        l.jsxs)("svg", {
                                                                            style: {
                                                                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#fbff00", ")")
                                                                            },
                                                                            className: "w-7 h-7",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            viewBox: "0 0 24 24",
                                                                            children: [(0,
                                                                            l.jsx)("rect", {
                                                                                className: "w-7 h-7 fill-none"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#fbff00"
                                                                                },
                                                                                d: "M23.5532,9.6626l-2.1526-.4307a.5533.5533,0,0,1-.4125-.3657,9.4548,9.4548,0,0,0-.4173-1.0091.553.553,0,0,1,.0332-.55l1.2167-1.8259a.5554.5554,0,0,0-.07-.7009L19.2168,2.2471a.5558.5558,0,0,0-.701-.0694L16.6909,3.394a.5529.5529,0,0,1-.55.0332A9.4565,9.4565,0,0,0,15.1325,3.01a.5533.5533,0,0,1-.3657-.4125l-.43-2.1508A.5558.5558,0,0,0,13.7919,0L10.2082,0a.5555.5555,0,0,0-.5448.4466l-.43,2.1509a.5532.5532,0,0,1-.3657.4123,9.4565,9.4565,0,0,0-1.0088.4172.5527.5527,0,0,1-.55-.0333L5.4826,2.1765a.5557.5557,0,0,0-.7012.07L2.2488,4.7808a.5552.5552,0,0,0-.0693.7006L3.3961,7.3075a.5527.5527,0,0,1,.0332.55,9.459,9.459,0,0,0-.4174,1.0091A.5537.5537,0,0,1,2.6,9.2319L.4467,9.6626A.5556.5556,0,0,0,0,10.2074V13.79a.5556.5556,0,0,0,.4464.5448L2.6,14.7664a.5525.5525,0,0,1,.4124.3656A9.4626,9.4626,0,0,0,3.43,16.1411a.5532.5532,0,0,1-.0334.55l-1.2175,1.827a.5553.5553,0,0,0,.0693.7009l2.5335,2.534a.5556.5556,0,0,0,.7012.0694l1.8263-1.2179a.553.553,0,0,1,.55-.0333,9.4634,9.4634,0,0,0,1.0088.4175.5534.5534,0,0,1,.3656.4123l.4306,2.1527a.5558.5558,0,0,0,.545.4467l3.5831-.0012a.5555.5555,0,0,0,.5447-.4466l.43-2.1516a.5534.5534,0,0,1,.3657-.4123,9.47,9.47,0,0,0,1.0087-.4175.5531.5531,0,0,1,.55.0333l1.825,1.2169a.5555.5555,0,0,0,.7011-.07l2.5339-2.5346a.5553.5553,0,0,0,.0693-.7009L20.604,16.6907a.5525.5525,0,0,1-.0332-.5495,9.4682,9.4682,0,0,0,.4173-1.0094.5536.5536,0,0,1,.4123-.3656l2.1531-.4311A.5557.5557,0,0,0,24,13.79V10.2074A.5557.5557,0,0,0,23.5532,9.6626Zm-.9651,2.9707a.5553.5553,0,0,1-.4465.5447l-1.8451.37a.5557.5557,0,0,0-.4286.4053l-.0042.0159a8.6222,8.6222,0,0,1-.9111,2.2009l-.0076.0129a.5554.5554,0,0,0,.0169.5894l1.0421,1.5641a.5554.5554,0,0,1-.07.7009l-.8973.8976a.5555.5555,0,0,1-.701.0693l-1.5637-1.0422a.5552.5552,0,0,0-.59-.0166l-.0142.0083a8.5577,8.5577,0,0,1-2.1881.9077l-.0275.0071a.5558.5558,0,0,0-.405.4287L13.1791,22.14a.5559.5559,0,0,1-.5446.4468l-1.2685,0a.5555.5555,0,0,1-.545-.4465l-.3689-1.844a.5557.5557,0,0,0-.4051-.4287l-.0274-.0071a8.5563,8.5563,0,0,1-2.1881-.9077l-.0141-.0083a.5556.5556,0,0,0-.59.0166L5.6624,20.005a.5556.5556,0,0,1-.7011-.0695l-.8968-.8967a.5555.5555,0,0,1-.0695-.7012l1.0435-1.5651a.5562.5562,0,0,0,.0166-.59,8.6691,8.6691,0,0,1-.9187-2.2138l-.0042-.0161a.5553.5553,0,0,0-.4284-.4049l-1.8455-.37a.5553.5553,0,0,1-.4465-.5447V11.3647a.5557.5557,0,0,1,.4465-.5448l1.8452-.369a.5556.5556,0,0,0,.429-.4054l.0039-.0156a8.6151,8.6151,0,0,1,.9148-2.2076l.0039-.0064a.5562.5562,0,0,0-.0166-.59L3.9959,5.6614a.5555.5555,0,0,1,.0693-.7008l.8969-.8974a.5552.5552,0,0,1,.7011-.07L7.2273,5.0364a.5558.5558,0,0,0,.59.0165l.0142-.0085a8.5579,8.5579,0,0,1,2.1859-.9066l.03-.0077a.5557.5557,0,0,0,.4051-.4287l.3686-1.8429a.5559.5559,0,0,1,.5447-.4466l1.2691,0a.5555.5555,0,0,1,.5449.4467l.3684,1.8429a.5559.5559,0,0,0,.405.4288l.03.0077a8.5587,8.5587,0,0,1,2.1858.9066l.0142.0085a.5556.5556,0,0,0,.59-.0165l1.5634-1.0423a.5555.5555,0,0,1,.7009.0694l.8977.8971a.5553.5553,0,0,1,.07.701L18.9616,7.2261a.5555.5555,0,0,0-.0168.59l.0084.0143a8.5938,8.5938,0,0,1,.91,2.1987l.0044.017a.5556.5556,0,0,0,.4287.4052l1.845.369a.5556.5556,0,0,1,.4465.5448Z"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#fbff00"
                                                                                },
                                                                                d: "M14.4229,11.5439a3.4973,3.4973,0,1,0-4.8459,0,4.82,4.82,0,0,0-2.71,4.3162v.0048c0,.5205.2412,1.4834,1.8565,2.09A9.662,9.662,0,0,0,12,18.4658c2.3681,0,5.1338-.6816,5.1338-2.6054A4.821,4.821,0,0,0,14.4229,11.5439ZM12,7.0342a1.9976,1.9976,0,1,1-1.9971,1.997A2,2,0,0,1,12,7.0342Zm0,9.9316c-2.2178,0-3.6329-.6523-3.6329-1.1006V15.86a3.34,3.34,0,0,1,3.3409-3.3311h.5849a3.3409,3.3409,0,0,1,3.3409,3.3359C15.6334,16.3135,14.2183,16.9658,12,16.9658Z"
                                                                            })]
                                                                        }), (0,
                                                                        l.jsx)("div", {
                                                                            style: {
                                                                                borderColor: (0,
                                                                                d.G)(c.accentcolor, 1),
                                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                backgroundColor: (0,
                                                                                d.G)(c.secondarycolor, 1)
                                                                            },
                                                                            className: "absolute p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                            children: (0,
                                                                            l.jsx)("span", {
                                                                                style: {
                                                                                    color: c.textcolor
                                                                                },
                                                                                className: "font-semibold text-sm",
                                                                                children: "Beta Tester"
                                                                            })
                                                                        })]
                                                                    })
                                                                });
                                                            case "Premium":
                                                                return (0,
                                                                l.jsx)(l.Fragment, {
                                                                    children: (0,
                                                                    l.jsxs)("div", {
                                                                        className: "group flex flex-col items-center justify-center",
                                                                        children: [(0,
                                                                        l.jsxs)("svg", {
                                                                            style: {
                                                                                filter: "drop-shadow(0px 0px ".concat(c.glow ? "3.5px" : "0px", " ").concat(c.useThemeColor ? c.iconcolor : "#1da1f2", ")")
                                                                            },
                                                                            className: "w-7 h-7",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            viewBox: "0 0 24 24",
                                                                            children: [(0,
                                                                            l.jsx)("rect", {
                                                                                className: "w-7 h-7 fill-none"
                                                                            }), (0,
                                                                            l.jsx)("path", {
                                                                                style: {
                                                                                    fill: c.useThemeColor ? c.iconcolor : "#1da1f2"
                                                                                },
                                                                                d: "M23.9993,6.7569,24,6.7537c0-.0067-.0037-.0122-.0038-.0189a.7.7,0,0,0-.0456-.2256.6818.6818,0,0,0-.0363-.075.698.698,0,0,0-.04-.0831l-3.546-5.1a.7068.7068,0,0,0-.58-.3033H4.2518a.7068.7068,0,0,0-.58.3033l-3.546,5.1a.698.698,0,0,0-.04.0831.6818.6818,0,0,0-.0363.075.7.7,0,0,0-.0456.2256C.0037,6.7415,0,6.747,0,6.7537l.0007.0032a.7073.7073,0,0,0,.05.2462.718.718,0,0,0,.0364.0716.7019.7019,0,0,0,.0475.0935L11.4283,22.761l.0046.0039a.69.69,0,0,0,.0674.0683.7022.7022,0,0,0,.06.0582.69.69,0,0,0,.0916.0608.6592.6592,0,0,0,.0641.0319c.0133.006.0253.0144.0388.0195.0078.0028.013.0094.0209.012l.0049.0008a.6866.6866,0,0,0,.4388,0l.0049-.0008c.0079-.0026.0131-.0092.0209-.012.0135-.0051.0255-.0135.0388-.0195a.6592.6592,0,0,0,.0641-.0319.69.69,0,0,0,.0916-.0608.7022.7022,0,0,0,.06-.0582.69.69,0,0,0,.0674-.0683l.0046-.0039L23.8658,7.1682a.7019.7019,0,0,0,.0475-.0935.718.718,0,0,0,.0364-.0716A.7073.7073,0,0,0,23.9993,6.7569ZM6.2636,7.46l3.599,10.7328L2.0889,7.46Zm8.1869-5.1,1.6812,3.6884H7.8683L9.55,2.3594Zm1.7975,5.1L12,20.127,7.752,7.46Zm1.4884,0h4.1747L14.1374,18.1924Zm4.2071-1.4118H17.6829L16.0018,2.3594H19.38ZM4.62,2.3594H7.9989L6.3169,6.0478h-4.26Z"
                                                                            })]
                                                                        }), (0,
                                                                        l.jsx)("div", {
                                                                            style: {
                                                                                borderColor: (0,
                                                                                d.G)(c.accentcolor, 1),
                                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                backgroundColor: (0,
                                                                                d.G)(c.secondarycolor, 1)
                                                                            },
                                                                            className: "absolute p-1 translate-y-3 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2.2rem] duration-300 transform-gpu",
                                                                            children: (0,
                                                                            l.jsx)("span", {
                                                                                style: {
                                                                                    color: c.textcolor
                                                                                },
                                                                                className: "font-semibold text-sm",
                                                                                children: "Premium"
                                                                            })
                                                                        })]
                                                                    })
                                                                })
                                                            }
                                                        }
                                                        )]
                                                    }) : (0,
                                                    l.jsx)(l.Fragment, {})]
                                                }), "" !== c.description ? (0,
                                                l.jsx)("div", {
                                                    style: {
                                                        color: c.textcolor
                                                    },
                                                    className: "mx-auto text-center text-base whitespace-pre-wrap break-all",
                                                    children: c.typewriter ? (0,
                                                    l.jsx)(m(), {
                                                        options: {
                                                            delay: 75,
                                                            strings: ["".concat(c.description)],
                                                            loop: !c.typeOnce,
                                                            autoStart: !0,
                                                            deleteSpeed: c.typeOnce ? 6048e5 : "natural"
                                                        }
                                                    }) : (0,
                                                    l.jsx)("span", {
                                                        children: c.description
                                                    })
                                                }) : (0,
                                                l.jsx)(l.Fragment, {}), c.socials.length > 0 && a ? (0,
                                                l.jsx)("ul", {
                                                    className: "flex flex-row flex-wrap justify-center gap-3 mt-1",
                                                    children: c.socials.map((e,o)=>(0,
                                                    l.jsxs)(w.E.li, {
                                                        style: {
                                                            zIndex: 30 - o
                                                        },
                                                        initial: c.animated ? v.nr : v.tZ,
                                                        animate: c.animated ? v.gM : v.j7,
                                                        transition: {
                                                            duration: .5,
                                                            ease: [.39, .21, .12, .96],
                                                            delay: o + 1 < 9 ? .1 * (o + 1) : 1 + .1 * (o + 1 - 10)
                                                        },
                                                        className: "group flex flex-col items-center",
                                                        children: [e.url.startsWith("https://") || e.url.startsWith("http://") || e.url.startsWith("mailto:") ? (0,
                                                        l.jsx)("a", {
                                                            style: {
                                                                borderColor: (0,
                                                                d.G)(c.accentcolor, 1),
                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                borderRadius: "".concat(c.fullRoundedSocials ? "9999px" : "".concat(c.borderRadius, "rem")),
                                                                backgroundColor: (0,
                                                                d.G)(c.secondarycolor, c.opacity)
                                                            },
                                                            className: "p-2 duration-300 flex hover:brightness-50",
                                                            href: e.url,
                                                            target: "_blank",
                                                            children: r(e.name)
                                                        }) : (0,
                                                        l.jsx)("button", {
                                                            style: {
                                                                borderColor: (0,
                                                                d.G)(c.accentcolor, 1),
                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                borderRadius: "".concat(c.fullRoundedSocials ? "9999px" : "".concat(c.borderRadius, "rem")),
                                                                backgroundColor: (0,
                                                                d.G)(c.secondarycolor, c.opacity)
                                                            },
                                                            className: "p-2 duration-300 flex hover:brightness-50",
                                                            onClick: ()=>{
                                                                C("Text copied to clipboard", "info", c.primarycolor, c.secondarycolor, c.accentcolor, c.textcolor, c.opacity, c.blur),
                                                                navigator.clipboard.writeText(e.url)
                                                            }
                                                            ,
                                                            children: r(e.name)
                                                        }), (0,
                                                        l.jsx)("div", {
                                                            style: {
                                                                borderColor: (0,
                                                                d.G)(c.accentcolor, 1),
                                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                                backgroundColor: (0,
                                                                d.G)(c.secondarycolor, 1)
                                                            },
                                                            className: "absolute p-1 translate-y-6 z-50 scale-0 group-hover:scale-100 group-hover:translate-y-[3.2rem] duration-300 transform-gpu",
                                                            children: (0,
                                                            l.jsx)("span", {
                                                                style: {
                                                                    color: c.textcolor
                                                                },
                                                                className: "font-semibold text-sm",
                                                                children: "Personal" === e.name && e.url.startsWith("https://") || e.url.startsWith("http://") ? new URL(e.url).hostname : e.url.startsWith("mailto:") ? e.url.split("mailto:").pop() : e.name
                                                            })
                                                        })]
                                                    }, o))
                                                }) : (0,
                                                l.jsx)(l.Fragment, {})]
                                            })]
                                        })]
                                    })]
                                }) : (0,
                                l.jsx)(l.Fragment, {}), c.customLinks.length > 0 && a ? (0,
                                l.jsx)("ul", {
                                    className: "grid md:grid-cols-2 grid-cols-1 gap-3",
                                    children: c.customLinks.map((e,o)=>(0,
                                    l.jsx)(w.E.li, {
                                        style: {
                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                            backdropFilter: "blur(".concat(c.blur, "px)"),
                                            WebkitBackdropFilter: "blur(".concat(c.blur, "px)")
                                        },
                                        initial: c.animated ? v.nr : v.tZ,
                                        animate: c.animated ? v.gM : v.j7,
                                        transition: {
                                            duration: .5,
                                            ease: [.39, .21, .12, .96],
                                            delay: o + 1 < 9 ? .1 * (o + 1) : 1 + .1 * (o + 1 - 10)
                                        },
                                        className: "relative flex md:odd:last:col-span-2 group",
                                        children: e.url.startsWith("https://") || e.url.startsWith("http://") || e.url.startsWith("mailto:") ? (0,
                                        l.jsxs)("a", {
                                            href: e.url,
                                            target: "_blank",
                                            style: {
                                                borderColor: (0,
                                                d.G)(c.accentcolor, 1),
                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                backgroundColor: (0,
                                                d.G)(c.primarycolor, c.opacity)
                                            },
                                            className: "w-full p-4 flex flex-row items-center justify-between hover:brightness-150 duration-300",
                                            children: [(0,
                                            l.jsxs)("div", {
                                                className: "flex flex-row gap-3 items-center max-w-[80%] w-full",
                                                children: [(0,
                                                l.jsx)("div", {
                                                    style: {
                                                        borderColor: (0,
                                                        d.G)(c.accentcolor, 1),
                                                        borderWidth: "".concat(c.borderWidth, "px"),
                                                        borderRadius: "".concat(c.borderRadius, "rem"),
                                                        backgroundColor: (0,
                                                        d.G)(c.secondarycolor, c.opacity)
                                                    },
                                                    className: "p-2",
                                                    children: r(e.icon)
                                                }), (0,
                                                l.jsxs)("div", {
                                                    className: "flex flex-col max-w-[85%]",
                                                    children: [(0,
                                                    l.jsx)("h1", {
                                                        style: {
                                                            color: c.textcolor
                                                        },
                                                        className: "text-sm font-semibold text-left overflow-x-hidden truncate",
                                                        children: e.name
                                                    }), (0,
                                                    l.jsx)("p", {
                                                        style: {
                                                            color: c.textcolor
                                                        },
                                                        className: "text-sm brightness-75 text-left overflow-x-hidden truncate",
                                                        children: e.url
                                                    })]
                                                })]
                                            }), (0,
                                            l.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-7 h-7 fill-white group-hover:translate-x-1 duration-300",
                                                viewBox: "0 0 16 16",
                                                children: (0,
                                                l.jsx)("path", {
                                                    "fill-rule": "evenodd",
                                                    d: "M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                                })
                                            })]
                                        }) : (0,
                                        l.jsxs)("button", {
                                            style: {
                                                borderColor: (0,
                                                d.G)(c.accentcolor, 1),
                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                backgroundColor: (0,
                                                d.G)(c.primarycolor, c.opacity)
                                            },
                                            className: "w-full p-4 flex flex-row items-center justify-between hover:brightness-150 duration-300",
                                            onClick: ()=>{
                                                C("Text copied to clipboard", "info", c.primarycolor, c.secondarycolor, c.accentcolor, c.textcolor, c.opacity, c.blur),
                                                navigator.clipboard.writeText(e.url)
                                            }
                                            ,
                                            children: [(0,
                                            l.jsxs)("div", {
                                                className: "flex flex-row gap-3 items-center max-w-[80%] w-full",
                                                children: [(0,
                                                l.jsx)("div", {
                                                    style: {
                                                        borderColor: (0,
                                                        d.G)(c.accentcolor, 1),
                                                        borderWidth: "".concat(c.borderWidth, "px"),
                                                        borderRadius: "".concat(c.borderRadius, "rem"),
                                                        backgroundColor: (0,
                                                        d.G)(c.secondarycolor, c.opacity)
                                                    },
                                                    className: "p-2",
                                                    children: r(e.icon)
                                                }), (0,
                                                l.jsxs)("div", {
                                                    className: "flex flex-col max-w-[85%]",
                                                    children: [(0,
                                                    l.jsx)("h1", {
                                                        style: {
                                                            color: c.textcolor
                                                        },
                                                        className: "text-sm font-semibold text-left overflow-x-hidden truncate",
                                                        children: e.name
                                                    }), (0,
                                                    l.jsx)("p", {
                                                        style: {
                                                            color: c.textcolor
                                                        },
                                                        className: "text-sm brightness-75 text-left overflow-x-hidden truncate",
                                                        children: e.url
                                                    })]
                                                })]
                                            }), (0,
                                            l.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-7 h-7 fill-white group-hover:translate-x-1 duration-300",
                                                viewBox: "0 0 16 16",
                                                children: (0,
                                                l.jsx)("path", {
                                                    "fill-rule": "evenodd",
                                                    d: "M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                                })
                                            })]
                                        })
                                    }, o))
                                }) : (0,
                                l.jsx)(l.Fragment, {}), c.bio_presence && a ? (0,
                                l.jsx)(l.Fragment, {
                                    children: (0,
                                    l.jsxs)(w.E.div, {
                                        initial: c.animated ? v.nr : v.tZ,
                                        animate: c.animated ? v.gM : v.j7,
                                        transition: {
                                            duration: .5,
                                            ease: [.39, .21, .12, .96],
                                            delay: .1
                                        },
                                        style: {
                                            borderColor: (0,
                                            d.G)(c.accentcolor, 1),
                                            borderWidth: "".concat(c.borderWidth, "px"),
                                            borderRadius: "".concat(c.borderRadius, "rem"),
                                            backgroundColor: (0,
                                            d.G)(c.primarycolor, c.opacity),
                                            backdropFilter: "blur(".concat(c.blur, "px)"),
                                            WebkitBackdropFilter: "blur(".concat(c.blur, "px)")
                                        },
                                        className: "flex flex-col justify-center w-full p-4",
                                        children: [(0,
                                        l.jsxs)("div", {
                                            className: "flex sm:flex-row flex-col items-center gap-4 justify-between w-full",
                                            children: [(0,
                                            l.jsxs)("div", {
                                                className: "flex flex-row items-center gap-3",
                                                children: [(0,
                                                l.jsx)("img", {
                                                    draggable: !1,
                                                    style: {
                                                        borderRadius: "".concat(c.borderRadius, "rem")
                                                    },
                                                    className: "".concat((e=>{
                                                        switch (e) {
                                                        case "online":
                                                            return "border-green-600";
                                                        case "idle":
                                                            return "border-yellow-600";
                                                        case "dnd":
                                                            return "border-red-600";
                                                        case "offline":
                                                            return "border-slate-600"
                                                        }
                                                    }
                                                    )(c.bio_presence.status), " h-[4.5rem] w-[4.5rem] border-2"),
                                                    src: c.bio_presence.pfp
                                                }), (0,
                                                l.jsx)("div", {
                                                    className: "flex flex-col",
                                                    children: (0,
                                                    l.jsxs)("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [(0,
                                                        l.jsxs)("div", {
                                                            className: "flex sm:flex-row flex-col gap-1",
                                                            children: [(0,
                                                            l.jsxs)("h2", {
                                                                style: {
                                                                    color: c.textcolor
                                                                },
                                                                className: "font-semibold break-all",
                                                                children: ["@", c.bio_presence.tag]
                                                            }), (0,
                                                            l.jsx)("div", {
                                                                className: "flex flex-row flex-wrap",
                                                                children: null === (z = c.bio_presence.badges) || void 0 === z ? void 0 : z.map(e=>{
                                                                    switch (e) {
                                                                    case "Active Developer":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                width: "24",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                children: (0,
                                                                                l.jsx)("path", {
                                                                                    d: "M6.47213 4L4 6.47213V17.5279L6.47217 20H17.5278L20 17.5279V6.47213L17.5279 4H6.47213ZM10.8582 16.4255H8.64551C8.64551 14.5952 7.1567 13.1064 5.32642 13.1064V10.8936C7.1567 10.8936 8.64551 9.40483 8.64551 7.57454H10.8582C10.8582 9.39042 9.96684 10.9908 8.61129 12C9.96684 13.0093 10.8582 14.6096 10.8582 16.4255ZM18.6667 13.1064C16.8364 13.1064 15.3476 14.5952 15.3476 16.4255H13.1348C13.1348 14.6096 14.0263 13.0093 15.3818 12C14.0263 10.9908 13.1348 9.39042 13.1348 7.57454H15.3476C15.3476 9.40483 16.8364 10.8936 18.6667 10.8936V13.1064V13.1064Z",
                                                                                    fill: "#2EA967"
                                                                                })
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "Active Developer"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "HypeSquad Bravery":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: (0,
                                                                                l.jsx)("path", {
                                                                                    clipRule: "evenodd",
                                                                                    d: "m5.01502 4h13.97008c.1187 0 .215.09992.215.22305v9.97865c0 .0697-.0312.1343-.0837.1767l-6.985 5.5752c-.0389.0313-.0847.0464-.1314.0464-.0466 0-.0924-.0151-.1313-.0464l-6.985-5.5752c-.05252-.0424-.08365-.107-.08365-.1767v-9.97865c0-.12313.0963-.22305.21497-.22305zm7.82148 7.0972 4.1275-2.71296c.1039-.06863.2299.04542.1725.15644l-1.7114 3.36192c-.0403.0807.0182.1756.1079.1756h1.0246c.118 0 .1664.1504.0706.219l-4.6267 3.3175c-.0414.0303-.0978.0303-.1402 0l-4.6267-3.3175c-.0948-.0686-.04639-.219.07059-.219h1.02356c.09076 0 .14925-.0949.10791-.1756l-1.71132-3.36293c-.05648-.11001.06958-.22305.17345-.15543l4.12851 2.71296c.0716.0474.1291.112.1674.1887l.6293 1.2636c.0444.0888.1714.0888.2158 0l.6293-1.2636c.0383-.0767.0958-.1423.1674-.1887z",
                                                                                    fill: "#9c84ef",
                                                                                    fillRule: "evenodd"
                                                                                })
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "HypeSquad Bravery"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "HypeSquad Brilliance":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: (0,
                                                                                l.jsx)("path", {
                                                                                    clipRule: "evenodd",
                                                                                    d: "m12 20c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm.7921-8.275 3.6146-2.3738c.0909-.05916.2013.03974.151.136l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1315.0618.1916l-4.0517 2.9027c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9027c-.08301-.0601-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.09626.06094-.19516.1519-.136l3.61545 2.3738c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z",
                                                                                    fill: "#f47b67",
                                                                                    fillRule: "evenodd"
                                                                                })
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "HypeSquad Brilliance"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "HypeSquad Balance":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: (0,
                                                                                l.jsx)("path", {
                                                                                    clipRule: "evenodd",
                                                                                    d: "m11.8622 4.05696c.076-.07595.1996-.07595.2756 0l7.8048 7.80474c.0371.0362.0574.0865.0574.1377 0 .0513-.0212.1016-.0574.1378l-7.8048 7.8047c-.038.038-.0883.0574-.1378.0574s-.0998-.0194-.1378-.0574l-7.8048-7.8047c-.03709-.0362-.0574-.0857-.0574-.1378s.02031-.1015.0574-.1377zm.9299 8.29474 3.6146-2.37377c.0909-.05917.2013.03977.151.13597l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1316.0618.1916l-4.0517 2.9028c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9028c-.08301-.06-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.0962.06094-.19514.1519-.13597l3.61545 2.37377c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z",
                                                                                    fill: "#45ddc0",
                                                                                    fillRule: "evenodd"
                                                                                })
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "HypeSquad Balance"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "Discord Nitro":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsxs)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: [(0,
                                                                                l.jsx)("circle", {
                                                                                    cx: "15",
                                                                                    cy: "12",
                                                                                    fill: "#fff",
                                                                                    r: "6"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    clipRule: "evenodd",
                                                                                    d: "m2.20812 10.124c.42636 0 .7816-.34817.7816-.76611 0-.41793-.35524-.76615-.7816-.76615h-.42635c-.42636 0-.78177.34822-.78177.76615 0 .41794.35541.76611.78177.76611zm16.13038 9.2643c4.0504-1.811 5.7558-6.4083 3.9083-10.23937-1.2791-2.71657-3.9793-4.31859-6.8217-4.45801h-8.02965c-.71065 0-1.20812.55735-1.20812 1.18425 0 .69645.56859 1.18409 1.20812 1.18409h2.06067c.42635 0 .78158.34822.78158.76616 0 .41793-.35523.76632-.78158.76632h-5.04517c-.42635 0-.78176.34822-.78176.76615 0 .41794.35541.76611.78176.76611h3.62404c.42635 0 .78159.3484.78159.7664 0 .4179-.35524.7661-.78159.7661h-2.27402c-.42636 0-.7816.3482-.7816.7662 0 .4179.35524.7663.7816.7663h1.56336c.07112.8359.2843 1.6717.63954 2.4379 1.77654 3.8311 6.46643 5.5028 10.37463 3.7614zm-7.2725-5.1884c-1.0318-2.2025-.0466-4.80794 2.2003-5.81933 2.2469-1.0114 4.9049-.04564 5.9366 2.15683 1.0318 2.2025.0468 4.8079-2.2003 5.8193-2.2469 1.0114-4.9048.0457-5.9366-2.1568z",
                                                                                    fill: "#4f5d7f",
                                                                                    fillRule: "evenodd"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m16.8142 9.86662 1.4212 2.36838c.0711.1392.0711.2089 0 .3482l-1.4212 2.3683c-.0711.1393-.2131.1393-.2842.1393h-2.7714c-.142 0-.2131-.0697-.2841-.1393l-1.4213-2.3683c-.0709-.1393-.0709-.209 0-.3482l1.4213-2.36838c.071-.13926.2132-.13926.2841-.13926h2.7714c.1422-.06971.2131 0 .2842.13926z",
                                                                                    fill: "#c5cedd"
                                                                                })]
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "Discord Nitro"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "Early Supporter":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsxs)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: [(0,
                                                                                l.jsx)("path", {
                                                                                    d: "m16.4823 15.6364h-1.2218c-.7028-.0096-1.3731-.2975-1.8639-.8006s-.7621-1.1803-.7543-1.8831v-1.2509c-.0019-.2803.1071-.5501.3033-.7504s.4636-.3148.744-.3187h5.7382v-1.49815h-10.18186c-.92363 2.08005-1.86909 4.24725-2.18181 5.09095-.20109.4955-.54642.9193-.99121 1.2162-.44479.297-.96854.4535-1.50334.4492v.8946c.40174.4023.87908.7212 1.40455.9384s1.08869.3283 1.65727.327h9.1564c.7008 0 1.373-.2779 1.8693-.7728s.776-1.1663.7779-1.8672v-.1891c-.4132.2695-.8957.4135-1.3891.4146zm-6.1309-2.0437c-.1802.0013-.35663-.0514-.50658-.1513-.14996-.0999-.26654-.2424-.33472-.4092-.06819-.1668-.08484-.3502-.04782-.5265.03702-.1764.12602-.3376.25552-.4629s.2936-.2089.471-.2401c.1775-.0312.3603-.0084.5247.0652.1644.0737.3031.1949.398.3481.0949.1531.1417.3312.1344.5113-.0093.2315-.1074.4506-.274.6118-.1665.1611-.3888.252-.6205.2536z",
                                                                                    fill: "#9cb8ff"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m19.617 10.6327h-5.92c-.1394.001-.2773.0294-.4057.0836-.1285.0543-.245.1333-.343.2326-.0979.0992-.1753.2168-.2278.346-.0524.1292-.079.2675-.078.4069v1.2509c-.0078.7028.2635 1.38.7543 1.8831s1.1611.791 1.8639.8006h2.7854c.4934-.0011.9759-.1451 1.3891-.4146l.0728-.0436c.3531-.2533.6404-.5876.8378-.9748s.2991-.8161.2967-1.2507v-1.2509c.0039-.2772-.1015-.5448-.2934-.7449s-.4549-.3166-.7321-.3242zm-2.6109 3.8327h-1.1563c-.0626.0081-.1261.0027-.1864-.0157s-.1159-.0495-.1633-.0911c-.0473-.0416-.0853-.0929-.1112-.1503-.026-.0575-.0395-.1198-.0395-.1829 0-.063.0135-.1253.0395-.1828.0259-.0574.0639-.1087.1112-.1503.0474-.0416.103-.0727.1633-.0911s.1238-.0238.1864-.0158h1.1563c.0626-.008.1261-.0026.1864.0158s.1159.0495.1633.0911c.0473.0416.0853.0929.1112.1503.026.0575.0395.1198.0395.1828 0 .0631-.0135.1254-.0395.1829-.0259.0574-.0639.1087-.1112.1503-.0474.0416-.103.0727-.1633.0911s-.1238.0238-.1864.0157zm2.0728 0h-.4437c-.1069-.0137-.2052-.066-.2764-.147s-.1105-.1851-.1105-.293c0-.1078.0393-.2119.1105-.2929s.1695-.1333.2764-.1471h.4437c.0625-.008.126-.0026.1863.0158s.116.0495.1633.0911c.0474.0416.0853.0929.1113.1503.0259.0575.0394.1198.0394.1828 0 .0631-.0135.1254-.0394.1829-.026.0574-.0639.1087-.1113.1503-.0473.0416-.103.0727-.1633.0911s-.1238.0238-.1863.0157z",
                                                                                    fill: "#cbdaf7"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m17.0061 13.5855h-1.1564c-.0625-.0081-.1261-.0027-.1864.0157s-.1159.0495-.1633.0911c-.0473.0417-.0852.0929-.1112.1503-.026.0575-.0394.1198-.0394.1829 0 .063.0134.1253.0394.1828.026.0574.0639.1087.1112.1503.0474.0416.103.0727.1633.0911s.1239.0238.1864.0158h1.1564c.0625.008.126.0026.1863-.0158s.116-.0495.1633-.0911c.0474-.0416.0853-.0929.1113-.1503.0259-.0575.0394-.1198.0394-.1828 0-.0631-.0135-.1254-.0394-.1829-.026-.0574-.0639-.1086-.1113-.1503-.0473-.0416-.103-.0727-.1633-.0911s-.1238-.0238-.1863-.0157zm2.0581 0h-.4436c-.107.0137-.2052.066-.2765.147-.0712.081-.1105.1851-.1105.293 0 .1078.0393.2119.1105.2929.0713.081.1695.1333.2765.1471h.4436c.0626.008.1261.0026.1864-.0158s.1159-.0495.1633-.0911c.0473-.0416.0853-.0929.1112-.1503.026-.0575.0395-.1198.0395-.1828 0-.0631-.0135-.1254-.0395-.1829-.0259-.0574-.0639-.1086-.1112-.1503-.0474-.0416-.103-.0727-.1633-.0911s-.1238-.0238-.1864-.0157z",
                                                                                    fill: "#9cb8ff"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m2.62786 15.1709c-.10957-.05-.21639-.1058-.32-.1673v4.2037l1.13455.7927 1.12727-.7927v-3.3164c-.71689.0255-1.41481-.2333-1.94182-.72z",
                                                                                    fill: "#ff903e"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m6.3152 13.7455c-.1373.345-.34381.6583-.6068.9205-.26298.2622-.57687.4677-.92232.604-.34546.1363-.71516.2004-1.08632.1883-.37117-.012-.73594-.0999-1.07183-.2583.52585.4893 1.22391.7508 1.94182.7273.53666-.0108 1.05762-.1831 1.49485-.4945s.77041-.7473.95606-1.251c.32727-.8291 1.27272-2.9963 2.18182-5.09089h-.92364s-1.25818 2.85819-1.96364 4.65459z",
                                                                                    fill: "#d0d9ea"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m11.5298 4 .6182.05091z",
                                                                                    fill: "#ebeff7"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m16.897 7.11273c.8756.02248 1.7483.11 2.6109.26182-.5673-.67636-2.7782-2.90909-7.3527-3.30909 3.309.79273 4.5309 2.67636 4.7418 3.04727zm-10.58184 6.63277c.70545-1.7964 1.96363-4.61095 1.96363-4.61095s2.24001-1.69454 6.85091-1.98545c-1.6073-2.18182-4.2473-2.90909-5.87636-3.08364-5.62182.60364-8.24727 4.87273-8.24727 8.27634-.033091.5186.06957 1.0368.29786 1.5036s.57432.866 1.00396 1.1582c.1036.0615.21042.1173.32.1673.33408.1592.69713.2485 1.06693.2625.36979.014.73856-.0476 1.08372-.181.34517-.1335.65948-.3359.92369-.595.26422-.2591.47278-.5694.61293-.9119zm-4.74909-2.0655c.02458-.5434.26177-1.0553.66042-1.4254.39864-.37006.92678-.5686 1.47049-.55278.53236.11535.99792.43568 1.29598.89158s.40466 1.0109.29674 1.5448c-.02451.5382-.25765 1.0458-.65 1.415-.39235.3693-.91308.5713-1.45181.5632-.26672-.053-.52036-.1581-.74635-.3094-.22599-.1512-.41989-.3456-.57057-.572-.15069-.2263-.25519-.4802-.30751-.7471-.05232-.2668-.05144-.5414.00261-.8079z",
                                                                                    fill: "#fff"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m16.1552 7.10544c-.3564 0-.7273 0-1.0328.04363-4.6109.29091-6.84359 1.98546-6.84359 1.98546h15.60729c-1.29-.93245-2.7877-1.53654-4.3637-1.76-.8626-.15183-1.7353-.23934-2.6109-.26182z",
                                                                                    fill: "#7687b2"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m3.18792 14.1164c.54495.0178 1.07495-.1799 1.47517-.5502.40023-.3703.63843-.8833.66301-1.428.10697-.5391-.00456-1.0986-.31006-1.5555s-.77995-.77374-1.31903-.88086c-.5437-.01583-1.07184.18271-1.47049.55276-.39864.3701-.63583.882-.66042 1.4254-.05404.2665-.05493.5411-.0026.8079.05232.2669.15682.5208.30751.7471.15068.2264.34458.4208.57057.572.22599.1513.47962.2564.74634.3094zm-1.28-2.3564c.00742-.1825.05112-.3617.12857-.5271s.18709-.3137.32251-.4363c.13542-.1225.29391-.2168.4662-.2775.1723-.0606.35494-.0862.53727-.0754.35402.0768.6634.2902.86088.5939.19747.3037.26707.6731.19366 1.0279-.01513.3614-.17287.7021-.43868.9475-.26581.2453-.61802.3753-.9795.3616-.35825-.0704-.67407-.2798-.87847-.5823-.20441-.3025-.28078-.6736-.21244-1.0323z",
                                                                                    fill: "#7687b2"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m2.96248 13.3745c.36148.0138.71369-.1162.9795-.3616.2658-.2453.42355-.586.43868-.9474.0734-.3548.0038-.7242-.19367-1.0279-.19748-.3037-.50686-.5171-.86088-.594-.36217-.0118-.71436.1199-.97995.3664s-.42308.588-.43823.95c-.06934.3535.00209.7201.19907 1.0216.19698.3016.50394.5144.85548.5929zm12.16002-6.21814h1.7527c-.2182-.37818-1.4545-2.25454-4.7345-3.04727l-.611-.10909h-.9163c-.4521.0002-.90378.02691-1.35274.08 1.62184.19636 4.25454.86545 5.86184 3.07636z",
                                                                                    fill: "#ff903e"
                                                                                }), (0,
                                                                                l.jsx)("circle", {
                                                                                    cx: "10.28",
                                                                                    cy: "12.75",
                                                                                    fill: "#040405",
                                                                                    r: "1"
                                                                                })]
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "Early Supporter"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "Early Verified Bot Developer":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m21.58 11.4-4.28-7.39-.35-.6h-9.91l-.35.6-4.27 7.39-.35.6.35.6 4.27 7.39.35.6h9.92l.35-.6 4.28-7.39.35-.6zm-13.07-1.03-1.63 1.63 1.63 1.63v2.73l-4.36-4.36 4.37-4.37v2.74zm3.12 6.93-2.04-.63 3.1-9.98 2.04.64zm3.86-.93v-2.73l1.63-1.64-1.63-1.63v-2.74l4.36 4.37z",
                                                                                    fill: "#3e70dd"
                                                                                })
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "Early Verified Bot Developer"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "Discord Bug Hunter_1":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsxs)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: [(0,
                                                                                l.jsx)("path", {
                                                                                    d: "m16.5822 2.63812s7.6721 5.23623 4.7567 12.58868c-2.9154 7.3525-8.7142 5.313-6.5469 3.1648 2.1674-2.1482-2.5573-3.6059-5.58143-6.3935l7.36523-9.35998",
                                                                                    fill: "#3ba55c"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m16.1155 9.83717c-1.6175 2.05873-3.9 3.08803-5.6646 2.71723l-6.15684 7.8447c-.10362.1324-.23231.243-.37871.3256-.1464.0825-.30764.1354-.47451.1556-.16686.0202-.33606.0073-.49793-.038-.16187-.0452-.31322-.122-.44541-.2258-.13374-.1032-.2457-.2319-.32942-.3786s-.13754-.3086-.15834-.4762c-.02081-.1677-.00819-.3378.03712-.5005s.12242-.3149.22687-.4476l6.12492-7.832c-.81197-1.62394-.36443-4.11099 1.27869-6.18886 2.03946-2.58295 5.11476-3.54836 6.89856-2.15459 1.7837 1.39377 1.5664 4.61607-.4604 7.19902z",
                                                                                    fill: "#b4e1cd"
                                                                                })]
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "Discord Bug Hunter"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "Discord Bug Hunter_2":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsxs)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: [(0,
                                                                                l.jsx)("mask", {
                                                                                    id: "a",
                                                                                    height: "19",
                                                                                    maskUnits: "userSpaceOnUse",
                                                                                    width: "16",
                                                                                    x: "2",
                                                                                    y: "2",
                                                                                    children: (0,
                                                                                    l.jsx)("path", {
                                                                                        d: "m16.1438 9.84735c-1.6048 2.04975-3.9088 3.08265-5.7044 2.70125l-6.14926 7.8813c-.44491.572-1.22351.6356-1.79554.1907-.57203-.445-.63558-1.2235-.25423-1.7956l6.1493-7.8177c-.82626-1.60486-.38135-4.09954 1.28707-6.21286 2.04976-2.57413 5.11646-3.52751 6.91196-2.19278 1.7956 1.33473 1.5413 4.6239-.4449 7.24569z",
                                                                                        fill: "#ffd56c"
                                                                                    })
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m16.5888 2.60168s7.6906 5.25949 4.7351 12.63232c-2.9555 7.3728-8.7235 5.323-6.5307 3.1461s-2.5582-3.591-5.57726-6.4194z",
                                                                                    fill: "#ffeac0"
                                                                                }), (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m16.1438 9.84735c-1.6048 2.04975-3.9088 3.08265-5.7044 2.70125l-6.14926 7.8813c-.44491.572-1.22351.6356-1.79554.1907-.57203-.445-.63558-1.2235-.25423-1.7956l6.1493-7.8177c-.82626-1.60486-.38135-4.09954 1.28707-6.21286 2.04976-2.57413 5.11646-3.52751 6.91196-2.19278 1.7956 1.33473 1.5413 4.6239-.4449 7.24569z",
                                                                                    fill: "#ffd56c"
                                                                                }), (0,
                                                                                l.jsxs)("g", {
                                                                                    fill: "#fff",
                                                                                    mask: "url(#a)",
                                                                                    children: [(0,
                                                                                    l.jsx)("path", {
                                                                                        d: "m13.0389-1.26782.7405.09754-3.1567 23.96118-.74043-.0976z"
                                                                                    }), (0,
                                                                                    l.jsx)("path", {
                                                                                        d: "m14.2822-1.51801 1.6226.21377-3.1566 23.96114-1.6226-.2137z"
                                                                                    })]
                                                                                })]
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "Discord Bug Hunter"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "Discord Certified Moderator":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: (0,
                                                                                l.jsx)("path", {
                                                                                    d: "m17.2719 3h-9.54383c-.14912 1.9386-1.78947 3.42982-3.72807 3.42982v.89474c0 4.39914 2.08772 8.50004 5.74123 11.40794l2.75877 2.1622 2.7588-2.1622c3.6535-2.8334 5.7412-7.0088 5.7412-11.40794v-.89474c-1.9386 0-3.5044-1.49122-3.7281-3.42982zm-6.4868 12.8991c-2.23685-1.7895-3.57896-4.3245-3.57896-7.08331v-.52193c1.19298 0 2.23684-.89474 2.3114-2.08772h2.98246v11.10966z",
                                                                                    fill: "#5865f2"
                                                                                })
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "Discord Certified Moderator"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "Discord Staff":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: (0,
                                                                                l.jsxs)("g", {
                                                                                    fill: "#5865f2",
                                                                                    children: [(0,
                                                                                    l.jsx)("path", {
                                                                                        d: "m5.92127 6.03526s.22115-.33086.31286-.47743c.09172-.14657-.23743-.49286-.36514-.60257-.12772-.10971-.32914-.05486-.32914-.05486-1.60715.71229-2.41115 2.17372-2.52086 2.466-.10972.29229.27943.61115.56657.76715.132.072.342-.08743.47143-.20572l.04371-.04457.06772-.06857.00085-.00086 4.37229 4.35517.59743-.5975 1.09801-1.098-4.32173-4.43224z"
                                                                                    }), (0,
                                                                                    l.jsx)("path", {
                                                                                        d: "m16.2505 10.6294.2306-.2194 2.0717 2.052c.0146.0129.03.018.0437.018.0395 0 .072-.036.072-.036s2.2937-2.2757 2.3015-2.2834c.0677-.0669 0-.1037 0-.1037l-1.7692-1.78119-.0026.00258-.2425-.23743.1354-.13029.2897.03343-.0548-.384.0728-.07371-.1088-.55372c-.378-.53571-1.4135-1.39371-1.4135-1.39371l-.5417-.09772-.0548.07286-.408-.06086.0394.348.0257.02572-.1209.12171-.6685-.654s-3.8795-2.10686-4.086-2.20457c-.1166-.054-.2023-.09-.2846-.09-.0634 0-.1251.02143-.1963.072-.1646.11571-.0677.34886-.0677.34886l2.412 4.45714.4826.47829-.1509.15085-.0557.05572-.3857-.05315.0591.38229-.1114.11143-.0197-.01972c-.018-.018-.0429-.02742-.0669-.02742s-.048.00942-.0668.02742c-.0369.03686-.0369.09686 0 .13372l.0197.01971-.0532.054-.0137-.01457c-.0188-.018-.0428-.02743-.0668-.02743-.0249 0-.0489.00943-.0669.02743-.0368.03686-.0368.09686 0 .13372l.0146.01457-1.0149 1.02004-.0231-.0232c-.0189-.018-.0429-.0274-.0669-.0274s-.048.0094-.0668.0274c-.0369.0369-.0369.0969 0 .1337l.024.0232-.054.054-.018-.0172c-.018-.0188-.0429-.0283-.066-.0283-.0249 0-.0489.0095-.0677.0283-.036.0369-.036.096 0 .1329l.018.018-.132.1337-.018.1697.0694.0712-.0017.0008-.084.0857-5.47632 5.4755-.07114-.0592-.22714.0326-.12858.1303-.00857-.0086c-.01885-.0189-.04285-.0283-.06685-.0283s-.04886.0094-.06686.0283c-.03686.0369-.03686.096 0 .1329l.01028.0102-.05314.0549-.00514-.0051c-.018-.0189-.04286-.0283-.06686-.0283s-.048.0094-.06686.0283c-.036.0368-.036.096 0 .1328l.006.0069-1.002 1.0191-.02057-.0206c-.01885-.0188-.042-.0274-.06685-.0274-.024 0-.048.0086-.06686.0274-.03686.0369-.03686.0969 0 .1338l.02228.0214-.05314.054-.01628-.0163c-.01886-.018-.04286-.0274-.06772-.0274-.02314 0-.048.0094-.066.0274-.03686.0369-.03686.0969 0 .1337l.01714.018-.07457.0763-.38828-.0694.02914.4337-.12257.1251.10628.5846s.16286.5091.498.8469c.32486.3274.82029.4842.84172.5005l.55971.0977.138-.1354.38572.0626-.06343-.3814.11743-.1149.054.054c.018.018.042.0274.066.0274s.04885-.0094.06685-.0274c.03686-.0377.03686-.0969 0-.1337l-.05314-.0532.05486-.0531.04628.0463c.018.0188.04286.0283.06686.0283s.048-.0095.06686-.0283c.03686-.0369.03686-.096 0-.1329l-.04543-.0463 1.01743-1.0037.04457.0446c.018.0189.04286.0274.06686.0274s.048-.0085.06685-.0274c.036-.0369.036-.0969 0-.1337l-.04371-.0429.054-.054.03771.0377c.018.018.042.0275.066.0275.02486 0 .04886-.0095.06686-.0275.03686-.0368.03686-.0968 0-.1337l-.03686-.0368.114-.1115.04115-.2442-.06086-.0609.00086-.0009.11057-.1097 5.43946-5.4411-.0026-.0052.1063.1098.1706-.0189.1534-.1543.0248.0249c.0189.018.0429.0274.0669.0274s.0489-.0094.0669-.0274c.0368-.0369.0368-.0969 0-.1337l-.0249-.0249.054-.0531.0189.0188c.018.018.042.0274.0668.0274.024 0 .048-.0094.066-.0274.0369-.0368.0369-.0968 0-.1337l-.0188-.0197 1.0165-1.0183.0266.0266c.018.018.042.0274.066.0274.0249 0 .0489-.0094.0669-.0274.0368-.0369.0368-.0969 0-.1337l-.0266-.0266.054-.054.0206.0214c.0188.018.0428.0274.0668.0274s.048-.0094.0669-.0274c.0368-.0377.0368-.0968 0-.1337l-.0206-.0214.1131-.1132.378.0592z"
                                                                                    }), (0,
                                                                                    l.jsx)("path", {
                                                                                        d: "m17.0057 16.7793-2.4111-1.8274-.4294-.4423-1.6637 1.6637.4183.3995 1.5711 2.3562 2.1188 2.3203 2.4421-2.2783z"
                                                                                    })]
                                                                                })
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "Discord Staff"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "HypeSquad Events":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: (0,
                                                                                l.jsxs)("g", {
                                                                                    fill: "#fbb848",
                                                                                    children: [(0,
                                                                                    l.jsx)("path", {
                                                                                        d: "m21.5912 6.84349-7.8694 5.16551c-.1351.088-.2444.2103-.317.3543l-1.1997 2.4056c-.0174.0399-.0461.0739-.0825.0977-.0364.0239-.079.0366-.1226.0366s-.0862-.0127-.1226-.0366c-.0364-.0238-.0651-.0578-.0825-.0977l-1.1997-2.4056c-.0726-.144-.1819-.2663-.317-.3543l-7.86944-5.16551c-.03957-.04698-.09618-.07632-.15738-.08157-.0612-.00524-.12198.01404-.16896.0536-.04698.03957-.07633.09618-.08157.15738-.00525.0612.01403.12198.0536.16896l3.28825 6.39624c.01598.0335.02385.0703.02297.1074s-.01049.0734-.02804.1061c-.01756.0327-.04257.0608-.07301.082-.03043.0212-.06544.035-.10219.0402h-1.97668c-.04881-.0005-.0965.0146-.13617.043-.03967.0285-.06926.0688-.08449.1152s-.0153.0964-.00022.1428c.01509.0464.04455.0869.08413.1154l8.8142 6.3155c.0403.0275.088.0422.1368.0422s.0965-.0147.1368-.0422l8.8142-6.3155c.0396-.0285.069-.069.0841-.1154s.015-.0964-.0002-.1428-.0448-.0867-.0845-.1152c-.0396-.0284-.0873-.0435-.1362-.043h-1.9766c-.0389-.0015-.0769-.0126-.1105-.0323-.0335-.0197-.0617-.0474-.082-.0806s-.0321-.071-.0343-.1098c-.0022-.0389.0052-.0777.0216-.113l3.3132-6.39624c.0395-.04698.0588-.10776.0536-.16896-.0053-.0612-.0346-.11781-.0816-.15738-.047-.03956-.1078-.05884-.169-.0536-.0612.00525-.1178.03459-.1574.08157z"
                                                                                    }), (0,
                                                                                    l.jsx)("path", {
                                                                                        d: "m12.1741 2.10696.8081 1.64723c.0143.02721.0346.05084.0594.06913.0247.01829.0533.03078.0835.03654l1.8213.26107c.0356.00524.0691.02036.0966.04366s.0479.05383.0589.08814.0122.07102.0034.10595c-.0089.03494-.0273.06671-.0532.0917l-1.3178 1.28049c-.0213.02203-.0373.04854-.047.07758s-.0127.05988-.009.09025l.3108 1.80885c.0069.03487.0036.07096-.0094.10404-.013.03307-.0351.06174-.0639.08264-.0287.0209-.0628.03315-.0983.03532-.0354.00217-.0708-.00584-.1019-.02309l-1.6285-.85159c-.0265-.01527-.0565-.02331-.0871-.02331-.0305 0-.0605.00804-.087.02331l-1.6286.85159c-.031.01725-.0664.02526-.1019.02309-.0354-.00217-.0695-.01442-.0983-.03532-.0287-.0209-.0509-.04957-.0639-.08264-.0129-.03308-.0162-.06917-.0094-.10404l.3108-1.80885c.0038-.03037.0008-.06121-.0089-.09025s-.0258-.05555-.047-.07758l-1.31781-1.28049c-.02595-.02499-.04438-.05676-.05318-.0917-.00881-.03493-.00764-.07164.00336-.10595s.03141-.06484.05889-.08814c.02749-.0233.06095-.03842.0966-.04366l1.82124-.25485c.0303-.00576.0588-.01825.0836-.03654.0247-.01829.045-.04192.0594-.06913l.8081-1.64723c.015-.03321.0392-.06147.0696-.08149.0305-.02003.066-.03101.1025-.03166.0364-.00065.0723.00905.1035.02798.0311.01893.0563.0463.0725.07895z"
                                                                                    })]
                                                                                })
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "HypeSquad Events"
                                                                                })
                                                                            })]
                                                                        });
                                                                    case "Partnered Server Owner":
                                                                        return (0,
                                                                        l.jsxs)("div", {
                                                                            className: "group flex flex-col items-center justify-center transition-all duration-300 ease-linear",
                                                                            children: [(0,
                                                                            l.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "group",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                width: "24",
                                                                                children: (0,
                                                                                l.jsxs)("g", {
                                                                                    fill: "#5865f2",
                                                                                    children: [(0,
                                                                                    l.jsx)("path", {
                                                                                        d: "m16.6033 9.15179-2.4908 1.66051c-.249.2491-.6642.1661-.7472 0-.2491-.2491-.6642-.4151-.9133-.4982-.6642-.166-1.2454 0-1.7435.2491l-.83027.5812-4.64945 2.9889c-.99631.6642-2.2417.4152-2.9059-.6642-.66421-1.0793-.24908-2.2417.74723-2.8228l5.31365-3.65318c1.49447-.83026 3.23804-1.24539 4.89854-.83026 1.4114.24907 2.6568.99631 3.4871 2.15867.249.16605.249.66421-.1661.83026z"
                                                                                    }), (0,
                                                                                    l.jsx)("path", {
                                                                                        d: "m22 11.6425c0 .7473-.4152 1.4115-.9963 1.7436l-5.4797 3.5701c-.9964.6642-2.2417.9963-3.4041.9963-.4982 0-.9963 0-1.4114-.166-1.41148-.2491-2.49081-1.1624-3.48712-2.1587-.16606-.1661-.16606-.6642.16605-.7473l2.49077-1.6605c.2491-.249.6642-.166.7472 0 .2491.2491.4982.4152.9133.4982.6642.166 1.2454 0 1.7436-.2491l1.2453-.7472 3.7362-2.4908.4982-.41513c.9963-.6642 2.2417-.41512 2.9059.66423.166.4151.3321.7472.3321 1.1623z"
                                                                                    })]
                                                                                })
                                                                            }), (0,
                                                                            l.jsx)("div", {
                                                                                style: {
                                                                                    borderColor: (0,
                                                                                    d.G)(c.accentcolor, 1),
                                                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                                                    backgroundColor: (0,
                                                                                    d.G)(c.secondarycolor, 1)
                                                                                },
                                                                                className: "absolute p-1 translate-y-2 z-10 scale-0 group-hover:scale-100 group-hover:translate-y-[2rem] duration-300 transform-gpu",
                                                                                children: (0,
                                                                                l.jsx)("span", {
                                                                                    style: {
                                                                                        color: c.textcolor
                                                                                    },
                                                                                    className: "font-semibold text-sm",
                                                                                    children: "Partnered Server Owner"
                                                                                })
                                                                            })]
                                                                        })
                                                                    }
                                                                }
                                                                )
                                                            })]
                                                        }), null !== c.bio_presence.customStatus ? (0,
                                                        l.jsxs)("div", {
                                                            className: "flex flex-row gap-1",
                                                            children: [null !== c.bio_presence.customStatus.emoji ? (0,
                                                            l.jsx)("img", {
                                                                draggable: !1,
                                                                src: c.bio_presence.customStatus.emoji,
                                                                className: "h-5 w-5",
                                                                alt: ""
                                                            }) : (0,
                                                            l.jsx)(l.Fragment, {}), (0,
                                                            l.jsx)("p", {
                                                                style: {
                                                                    color: c.textcolor
                                                                },
                                                                className: "text-sm break-all",
                                                                children: c.bio_presence.customStatus.name
                                                            })]
                                                        }) : (0,
                                                        l.jsx)("p", {
                                                            style: {
                                                                color: c.textcolor
                                                            },
                                                            className: "text-sm break-all",
                                                            children: null === (y = c.bio_presence.activities[0]) || void 0 === y ? void 0 : y.title
                                                        })]
                                                    })
                                                })]
                                            }), (0,
                                            l.jsxs)("a", {
                                                href: "https://discord.com/users/".concat(c.bio_presence._id),
                                                target: "_blank",
                                                style: {
                                                    borderColor: (0,
                                                    d.G)(c.accentcolor, 1),
                                                    borderWidth: "".concat(c.borderWidth, "px"),
                                                    borderRadius: "".concat(c.borderRadius, "rem"),
                                                    backgroundColor: (0,
                                                    d.G)(c.secondarycolor, c.opacity),
                                                    color: c.textcolor
                                                },
                                                className: "p-1.5 pl-3 duration-300 flex hover:brightness-150 sm:w-fit w-full justify-center items-center text-sm font-semibold group whitespace-nowrap",
                                                children: ["Add on Discord", (0,
                                                l.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-7 h-7 fill-white group-hover:translate-x-1 duration-300",
                                                    viewBox: "0 0 16 16",
                                                    children: (0,
                                                    l.jsx)("path", {
                                                        "fill-rule": "evenodd",
                                                        d: "M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                                    })
                                                })]
                                            })]
                                        }), c.bio_presence && c.bio_presence.activities.length > 0 ? (0,
                                        l.jsx)(w.E.div, {
                                            initial: c.animated ? v.At : v.tZ,
                                            animate: c.animated ? v.Q7 : v.j7,
                                            transition: {
                                                duration: .5,
                                                ease: [.39, .21, .12, .96],
                                                delay: .7
                                            },
                                            style: {
                                                backgroundColor: (0,
                                                d.G)(c.accentcolor, 1)
                                            },
                                            className: "w-full h-0.5 my-3"
                                        }) : (0,
                                        l.jsx)(l.Fragment, {}), c.bio_presence && c.bio_presence.activities.length > 0 ? (0,
                                        l.jsx)(w.E.div, {
                                            initial: c.animated ? v.nr : v.tZ,
                                            animate: c.animated ? v.gM : v.j7,
                                            transition: {
                                                duration: .5,
                                                ease: [.39, .21, .12, .96],
                                                delay: .5
                                            },
                                            className: "flex flex-col",
                                            children: (0,
                                            l.jsx)(H, {
                                                bio: c,
                                                primarycolor: c.primarycolor,
                                                secondarycolor: c.secondarycolor,
                                                accentcolor: c.accentcolor,
                                                textcolor: c.textcolor
                                            })
                                        }) : (0,
                                        l.jsx)(l.Fragment, {})]
                                    })
                                }) : (0,
                                l.jsx)(l.Fragment, {}), c.songs.length > 0 && !c.useBackgroundAudio && a ? (0,
                                l.jsxs)(w.E.div, {
                                    initial: c.animated ? v.nr : v.tZ,
                                    animate: c.animated ? v.gM : v.j7,
                                    transition: {
                                        duration: .5,
                                        ease: [.39, .21, .12, .96],
                                        delay: .1
                                    },
                                    style: {
                                        borderColor: (0,
                                        d.G)(c.accentcolor, 1),
                                        borderWidth: "".concat(c.borderWidth, "px"),
                                        borderRadius: "".concat(c.borderRadius, "rem"),
                                        backgroundColor: (0,
                                        d.G)(c.primarycolor, c.opacity),
                                        backdropFilter: "blur(".concat(c.blur, "px)"),
                                        WebkitBackdropFilter: "blur(".concat(c.blur, "px)")
                                    },
                                    className: "p-3",
                                    children: [(0,
                                    l.jsx)("button", {
                                        onClick: S,
                                        className: i().dynamic([["fb83aad460a0e7a3", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.secondarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.secondarycolor, c.accentcolor]]]) + " flex absolute z-10",
                                        children: Z ? (0,
                                        l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            style: {
                                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                                            },
                                            viewBox: "0 0 16 16",
                                            className: i().dynamic([["fb83aad460a0e7a3", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.secondarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.secondarycolor, c.accentcolor]]]) + " h-7 w-7",
                                            children: (0,
                                            l.jsx)("path", {
                                                d: "M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0",
                                                className: i().dynamic([["fb83aad460a0e7a3", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.secondarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.secondarycolor, c.accentcolor]]])
                                            })
                                        }) : (0,
                                        l.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            style: {
                                                fill: c.useThemeColor ? c.iconcolor : "#ffffff"
                                            },
                                            viewBox: "0 0 16 16",
                                            className: i().dynamic([["fb83aad460a0e7a3", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.secondarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.secondarycolor, c.accentcolor]]]) + " h-7 w-7",
                                            children: [(0,
                                            l.jsx)("path", {
                                                d: "M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z",
                                                className: i().dynamic([["fb83aad460a0e7a3", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.secondarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.secondarycolor, c.accentcolor]]])
                                            }), (0,
                                            l.jsx)("path", {
                                                d: "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z",
                                                className: i().dynamic([["fb83aad460a0e7a3", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.secondarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.secondarycolor, c.accentcolor]]])
                                            }), (0,
                                            l.jsx)("path", {
                                                d: "M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06",
                                                className: i().dynamic([["fb83aad460a0e7a3", [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.secondarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.secondarycolor, c.accentcolor]]])
                                            })]
                                        })
                                    }), (0,
                                    l.jsx)(i(), {
                                        id: "fb83aad460a0e7a3",
                                        dynamic: [c.textcolor, c.font, c.accentcolor, c.textcolor, c.font, c.secondarycolor, c.accentcolor, c.accentcolor, c.accentcolor, c.secondarycolor, c.accentcolor],
                                        children: ".rhap_container{margin-top:0px}.rhap_header{color:".concat(c.textcolor, ";font-family:").concat(c.font, ",sans-serif;font-weight:600;font-size:1rem;line-height:1.5rem;word-break:break-all}.rhap_main-controls-button{color:").concat(c.accentcolor, "}.rhap_time{color:").concat(c.textcolor, ";font-family:").concat(c.font, ",sans-serif;font-weight:600;font-size:.9rem;line-height:1.5rem}.rhap_progress-bar-show-download{background-color:").concat(c.secondarycolor, "}.rhap_progress-filled{background-color:").concat(c.accentcolor, "}.rhap_progress-indicator{background:").concat(c.accentcolor, "}.rhap_volume-button{color:").concat(c.accentcolor, "}.rhap_volume-bar{background:").concat(c.secondarycolor, "}.rhap_volume-indicator{background:").concat(c.accentcolor, "}")
                                    }), (0,
                                    l.jsx)(h.Z, {
                                        ref: k,
                                        autoPlay: a,
                                        header: u ? L.name.replace(/\.[^/.]+$/, "").replaceAll("_", " ") : "Now playing: -",
                                        src: L.url,
                                        showSkipControls: !0,
                                        showJumpControls: !1,
                                        volume: .1,
                                        onPlay: ()=>b(e=>({
                                            ...e,
                                            isMusicPlaying: !0
                                        })),
                                        onClickPrevious: A,
                                        onClickNext: B,
                                        onEnded: B,
                                        customVolumeControls: [],
                                        customAdditionalControls: []
                                    })]
                                }) : (0,
                                l.jsx)(l.Fragment, {}), c.embeds.length > 0 && a ? (0,
                                l.jsx)("ul", {
                                    className: "flex flex-col w-full gap-3",
                                    children: c.embeds.map((e,o)=>(0,
                                    l.jsx)(w.E.li, {
                                        style: {
                                            backdropFilter: "blur(".concat(c.blur, "px)"),
                                            WebkitBackdropFilter: "blur(".concat(c.blur, "px)")
                                        },
                                        initial: c.animated ? v.nr : v.tZ,
                                        animate: c.animated ? v.gM : v.j7,
                                        transition: {
                                            duration: .5,
                                            ease: [.39, .21, .12, .96],
                                            delay: o + 1 < 9 ? .1 * (o + 1) : 1 + .1 * (o + 1 - 10)
                                        },
                                        className: "flex flex-col",
                                        children: (0,
                                        l.jsx)(f.p, {
                                            as: "div",
                                            style: {
                                                borderColor: (0,
                                                d.G)(c.accentcolor, 1),
                                                borderWidth: "".concat(c.borderWidth, "px"),
                                                borderRadius: "".concat(c.borderRadius, "rem"),
                                                backgroundColor: (0,
                                                d.G)(c.primarycolor, c.opacity)
                                            },
                                            children: r=>{
                                                let {open: a} = r;
                                                return (0,
                                                l.jsx)(l.Fragment, {
                                                    children: (0,
                                                    l.jsx)("dt", {
                                                        children: (0,
                                                        l.jsxs)(f.p.Button, {
                                                            className: "flex flex-col w-full items-start text-left",
                                                            children: [(0,
                                                            l.jsx)("h1", {
                                                                style: {
                                                                    color: c.textcolor
                                                                },
                                                                className: "".concat(a ? "pt-2" : "py-2", " text-base font-semibold mx-auto break-all text-center px-2"),
                                                                children: "" !== e.name ? e.name : "Media Embed #".concat(o + 1)
                                                            }), (0,
                                                            l.jsx)(f.p.Panel, {
                                                                as: "dd",
                                                                className: "mt-2 w-full px-4 pb-4",
                                                                children: (0,
                                                                l.jsx)("iframe", {
                                                                    style: {
                                                                        borderRadius: "".concat(c.borderRadius, "rem")
                                                                    },
                                                                    src: e.url,
                                                                    width: "100%",
                                                                    height: "".concat(e.url.includes("open.spotify.com/embed/") ? "155px" : "300px"),
                                                                    allowFullScreen: !1,
                                                                    allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })
                                            }
                                        })
                                    }, o))
                                }) : (0,
                                l.jsx)(l.Fragment, {})]
                            })
                        })
                    })]
                })]
            })
        }
        var B = !0;
        function k(e) {
            let {bio: c, musicIndex: o} = e
              , [n,i] = (0,
            s.useState)(c)
              , d = (0,
            a.useRouter)()
              , {username: h} = d.query;
            return (0,
            s.useEffect)(()=>{
                if (c.countViews && (0,
                t.ed)(h.toString()),
                c.presence) {
                    let e = new WebSocket("wss://".concat("https://api.e-z.bio".replace("https://", ""), "/bio/presence/").concat(h));
                    e.addEventListener("open", c=>{
                        e.send("Connection established")
                    }
                    ),
                    e.addEventListener("message", e=>{
                        if ("connected" !== e.data) {
                            let c = n;
                            c.bio_presence = JSON.parse(e.data),
                            i(c)
                        }
                    }
                    )
                }
            }
            , []),
            (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)(r.PB, {
                    title: c.name,
                    description: c.description,
                    canonical: "https://e-z.bio/".concat(c.url),
                    themeColor: c.color,
                    openGraph: {
                        url: "https://e-z.bio/".concat(c.url),
                        title: c.name,
                        description: c.description,
                        images: [{
                            url: c.pfp.url,
                            alt: c.description
                        }],
                        siteName: "E-Z Bio"
                    }
                }), (e=>{
                    switch (e) {
                    case 0:
                        return (0,
                        l.jsx)(T, {
                            bio: n,
                            musicIndex: o
                        });
                    case 1:
                        return (0,
                        l.jsx)(A, {
                            bio: n,
                            musicIndex: o
                        })
                    }
                }
                )(c.layout)]
            })
        }
    },
    5110: function(e, c, o) {
        "use strict";
        o.d(c, {
            G: function() {
                return a
            }
        });
        let l = e=>/^#[0-9A-F]{6}$/i.test(e)
          , r = e=>Math.round(255 * e).toString(16);
        function a(e, c) {
            let o = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (e,c,o,l)=>c + c + o + o + l + l);
            if (!l(o))
                throw Error("Invalid HEX param");
            if (c > 1 || c < 0)
                throw Error("Invalid opacity, it should be between 0 and 1");
            return "".concat(o).concat(r(c))
        }
    }
}, function(e) {
    e.O(0, [972, 923, 774, 888, 179], function() {
        return e(e.s = 221)
    }),
    _N_E = e.O()
}
]);
