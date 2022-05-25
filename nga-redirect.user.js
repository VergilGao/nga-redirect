// ==UserScript==
// @name         NGA网址重定向
// @description  重定向NGA玩家社区的各种不同域名的网址到 bbs.nga.cn
// @updateURL       https://raw.githubusercontent.com/VergilGao/nga-redirect/master/nga-redirect.user.js
// @downloadURL     https://raw.githubusercontent.com/VergilGao/nga-redirect/master/nga-redirect.user.js
// @version      1.0.0
// @author       羽先生(VergilGao), 咕德 @ WoW-玛洛加尔-<蓝丨图>
// @licence      MIT
// @namespace    https://github.com/VergilGao/nga-redirect
// @match        *://nga.178.com/*
// @match        *://ngabbs.com/*
// @match        *://g.nga.cn/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.location.href = document.location.href.replace('nga.178.com', 'bbs.nga.cn')
                                               .replace('ngabbs.com', 'bbs.nga.cn')
                                               .replace('g.nga.cn', 'bbs.nga.cn');