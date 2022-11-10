// ==UserScript==
// @name         NGA网址重定向
// @description  重定向NGA玩家社区的各种不同域名的网址到设定的地址
// @updateURL       https://raw.githubusercontent.com/VergilGao/nga-redirect/master/nga-redirect.user.js
// @downloadURL     https://raw.githubusercontent.com/VergilGao/nga-redirect/master/nga-redirect.user.js
// @version      1.2.0
// @author       羽先生(VergilGao), 咕德 @ WoW-玛洛加尔-<蓝丨图>
// @licence      MIT
// @namespace    https://github.com/VergilGao/nga-redirect
// @match        *://bbs.nga.cn/*
// @match        *://ngabbs.com/*
// @match        *://g.nga.cn/*
// @match        *://nga.178.com/*
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @noframes
// ==/UserScript==

((ui) => {
  if (!ui) return;

  const ENABLED_HOST = "ENABLED_HOST";

  const BBS_NGA_CN = "bbs.nga.cn";
  const NGA_178_COM = "nga.178.com";
  const NGABBS_COM = "ngabbs.com";

  const host = GM_getValue(ENABLED_HOST, NGA_178_COM);

  if (location.hostname != host) {
    window.location.replace(location.href.replace(location.hostname, host));
  }

  (() => {
    if (host != BBS_NGA_CN) {
      GM_registerMenuCommand("使用：" + BBS_NGA_CN, () => {
        GM_setValue(ENABLED_HOST, BBS_NGA_CN);
        location.reload();
      });
    }

    if (host != NGA_178_COM) {
      GM_registerMenuCommand("使用：" + NGA_178_COM, () => {
        GM_setValue(ENABLED_HOST, NGA_178_COM);
        location.reload();
      });
    }

    if (host != NGABBS_COM) {
      GM_registerMenuCommand("使用：" + NGABBS_COM, () => {
        GM_setValue(ENABLED_HOST, NGABBS_COM);
        location.reload();
      });
    }
  })();
})(commonui);
