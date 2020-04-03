import { CHANNEL_MESSAGE } from "../constants";

/** Live port connection with the background script. */
const connection = chrome.runtime.connect({ name: "free-press" });

function removeNode($node) {
  $node.parentNode.removeChild($node);
}

function cleanBloomberg() {
  if (window.document.body.hasAttribute("data-paywall-overlay-status")) {
    window.document.body.removeAttribute("data-paywall-overlay-status");
  }

  setTimeout(cleanBloomberg, 250);
}

function cleanBusinessInsider() {
  if (document.firstElementChild.classList.contains("sp-message-open")) {
    document.firstElementChild.classList.remove("sp-message-open");

    if (window.document.body.lastElementChild.tagName === "DIV") {
      removeNode(window.document.body.lastElementChild);

      if (window.document.body.lastElementChild.tagName === "DIV") {
        removeNode(window.document.body.lastElementChild);
      }
    }
  }

  if (document.body.classList.contains("tp-modal-open")) {
    document.body.classList.remove("tp-modal-open");

    const $tpModal = document.querySelector(`.tp-modal`);
    if ($tpModal !== null) {
      removeNode($tpModal);
      removeNode(document.querySelector(".tp-backdrop"));
    }
  }

  const $cookiesBanner = document.querySelector(".as-oil");
  if ($cookiesBanner !== null) {
    removeNode($cookiesBanner);
  }

  const $pianoInlineContentWrapper = document.querySelector("#piano-inline-content-wrapper");
  if ($pianoInlineContentWrapper !== null) {
    $pianoInlineContentWrapper.style.display = "block";
  }

  setTimeout(cleanBusinessInsider, 250);
}

const $bloombergMeta = document.querySelector(`meta[property="al:android:app_name"]`);
if ($bloombergMeta !== null && $bloombergMeta.content === "Bloomberg") {
  connection.postMessage({ value: CHANNEL_MESSAGE.TAB_IS_BLOOMBERG });

  cleanBloomberg();
}

const $businessInsiderMeta = document.querySelector(`meta[property="og:site_name"]`);
if ($businessInsiderMeta !== null && $businessInsiderMeta.content.startsWith("Business Insider")) {
  connection.postMessage({ value: CHANNEL_MESSAGE.TAB_IS_BUSINESS_INSIDER });

  cleanBusinessInsider();
}

const $forbesMeta = document.querySelector(`meta[property="og:site_name"]`);
if ($forbesMeta !== null && $forbesMeta.content === "Forbes") {
  connection.postMessage({ value: CHANNEL_MESSAGE.TAB_IS_FORBES });

  const $adblockModal = document.querySelector("adblock-modal");
  if ($adblockModal !== null) {
    $adblockModal.parentNode.removeChild($adblockModal);
  }

  const $body = document.querySelector("body");
  if ($body.classList.contains("adblock-on")) {
    const $adblockModalContainer = document.querySelector(".fbs-auth__container");
    $adblockModalContainer.parentNode.removeChild($adblockModalContainer);

    $body.classList.remove("adblock-on");
    $body.classList.remove("body--no-scroll");
  }
}
