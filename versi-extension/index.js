 // ==UserScript==
 // @name         Survey AutoFill Radio + Text
// @namespace    local.autofill.survey
 // @version      1.0
 // @description  Auto pilih radio & isi text/textarea setiap halaman survey (offset berubah).
 // @match        *://*/survey/*
 // @run-at       document-idle
// ==/UserScript==
 // use Tampermonkey extension on google chrome
(function () {
  "use strict";

  const CONFIG = {
    textValue: "-",
    debounceMs: 250,
    // Kalau kamu mau hanya berlaku untuk pageid tertentu, isi "2001"
    onlyPageId: "2001", // set "" jika mau semua pageid
  };

  const url = new URL(location.href);
  const pageid = url.searchParams.get("pageid") || "";
  if (CONFIG.onlyPageId && pageid !== CONFIG.onlyPageId) return;

  let t = null;
  const debounceRun = (reason) => {
    clearTimeout(t);
    t = setTimeout(() => run(reason), CONFIG.debounceMs);
  };

  function run(reason = "run") {
    // ===== RADIO GROUPS =====
    const radioGroups = {};
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      if (radio.disabled) return;
      const name = radio.name || "__no_name__";
      (radioGroups[name] ||= []).push(radio);
    });

    Object.values(radioGroups).forEach((group) => {
      const usable = group.filter((r) => !r.disabled);
      if (usable.length === 4) {
        usable[3].checked = true; // pilih radio ke-4
        usable[3].dispatchEvent(new Event("change", { bubbles: true }));
      } else if (usable.length === 2) {
        usable[1].checked = true; // pilih radio ke-2
        usable[1].dispatchEvent(new Event("change", { bubbles: true }));
      }
    });

    // ===== TEXT INPUT + TEXTAREA =====
    document.querySelectorAll('input[type="text"], textarea').forEach((input) => {
      if (input.disabled) return;
      input.value = CONFIG.textValue;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });

    console.log(`[AutoFill Survey] OK (${reason}) offset=${new URL(location.href).searchParams.get("offset")}`);
  }

  // Run awal
  run("initial");

  // Kalau kontennya kadang muncul telat (AJAX), pantau perubahan DOM dan rerun
  const obs = new MutationObserver(() => debounceRun("dom-changed"));
  obs.observe(document.body, { childList: true, subtree: true });
})();