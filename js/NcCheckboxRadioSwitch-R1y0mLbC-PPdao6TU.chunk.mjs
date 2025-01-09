(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode("/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-38a6f3e5] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.checkbox-content[data-v-38a6f3e5] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: var(--default-grid-baseline);\n  user-select: none;\n  min-height: var(--default-clickable-area);\n  border-radius: var(--checkbox-radio-switch--border-radius);\n  padding: var(--default-grid-baseline) calc((var(--default-clickable-area) - var(--icon-height)) / 2);\n  width: 100%;\n  max-width: fit-content;\n}\n.checkbox-content__text[data-v-38a6f3e5] {\n  flex: 1 0;\n}\n.checkbox-content__text[data-v-38a6f3e5]:empty {\n  display: none;\n}\n.checkbox-content__icon > *[data-v-38a6f3e5] {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  color: var(--color-primary-element);\n}\n.checkbox-content--button-variant .checkbox-content__icon:not(.checkbox-content__icon--checked) > *[data-v-38a6f3e5] {\n  color: var(--color-primary-element);\n}\n.checkbox-content--button-variant .checkbox-content__icon--checked > *[data-v-38a6f3e5] {\n  color: var(--color-primary-element-text);\n}\n.checkbox-content--has-text[data-v-38a6f3e5] {\n  padding-right: calc((var(--default-clickable-area) - 16px) / 2);\n}\n.checkbox-content[data-v-38a6f3e5], .checkbox-content *[data-v-38a6f3e5] {\n  cursor: pointer;\n  flex-shrink: 0;\n}/**\n * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/**\n * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon[data-v-ff5243c5] {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-content: center;\n}\n.checkbox-radio-switch[data-v-ff5243c5] {\n  display: flex;\n  align-items: center;\n  color: var(--color-main-text);\n  background-color: transparent;\n  font-size: var(--default-font-size);\n  line-height: var(--default-line-height);\n  padding: 0;\n  position: relative;\n  --checkbox-radio-switch--border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));\n  --checkbox-radio-switch--border-radius-outer: calc(var(--checkbox-radio-switch--border-radius) + 2px);\n  /* Special rules for vertical button groups */\n  /* Special rules for horizontal button groups */\n}\n.checkbox-radio-switch__input[data-v-ff5243c5] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0 !important;\n  width: var(--icon-size);\n  height: var(--icon-size);\n  margin: 4px calc((var(--default-clickable-area) - 16px) / 2);\n}\n.checkbox-radio-switch__input:focus-visible + .checkbox-radio-switch__content[data-v-ff5243c5], .checkbox-radio-switch__input[data-v-ff5243c5]:focus-visible {\n  outline: 2px solid var(--color-main-text);\n  border-color: var(--color-main-background);\n  outline-offset: -2px;\n}\n.checkbox-radio-switch--disabled .checkbox-radio-switch__content[data-v-ff5243c5] {\n  opacity: 0.5;\n}\n.checkbox-radio-switch--disabled .checkbox-radio-switch__content[data-v-ff5243c5] .checkbox-radio-switch__icon > * {\n  color: var(--color-main-text);\n}\n.checkbox-radio-switch:not(.checkbox-radio-switch--disabled, .checkbox-radio-switch--checked):focus-within .checkbox-radio-switch__content[data-v-ff5243c5], .checkbox-radio-switch:not(.checkbox-radio-switch--disabled, .checkbox-radio-switch--checked) .checkbox-radio-switch__content[data-v-ff5243c5]:hover {\n  background-color: var(--color-background-hover);\n}\n.checkbox-radio-switch--checked:not(.checkbox-radio-switch--disabled):focus-within .checkbox-radio-switch__content[data-v-ff5243c5], .checkbox-radio-switch--checked:not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__content[data-v-ff5243c5]:hover {\n  background-color: var(--color-primary-element-hover);\n}\n.checkbox-radio-switch--checked:not(.checkbox-radio-switch--button-variant):not(.checkbox-radio-switch--disabled):focus-within .checkbox-radio-switch__content[data-v-ff5243c5], .checkbox-radio-switch--checked:not(.checkbox-radio-switch--button-variant):not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__content[data-v-ff5243c5]:hover {\n  background-color: var(--color-primary-element-light-hover);\n}\n.checkbox-radio-switch-switch[data-v-ff5243c5]:not(.checkbox-radio-switch--checked) .checkbox-radio-switch__icon > * {\n  color: var(--color-text-maxcontrast);\n}\n.checkbox-radio-switch-switch.checkbox-radio-switch--disabled.checkbox-radio-switch--checked[data-v-ff5243c5] .checkbox-radio-switch__icon > * {\n  color: var(--color-primary-element-light);\n}\n.checkbox-radio-switch--button-variant.checkbox-radio-switch[data-v-ff5243c5] {\n  background-color: var(--color-main-background);\n  border: 2px solid var(--color-border-maxcontrast);\n  overflow: hidden;\n}\n.checkbox-radio-switch--button-variant.checkbox-radio-switch--checked[data-v-ff5243c5] {\n  font-weight: bold;\n}\n.checkbox-radio-switch--button-variant.checkbox-radio-switch--checked .checkbox-radio-switch__content[data-v-ff5243c5] {\n  background-color: var(--color-primary-element);\n  color: var(--color-primary-element-text);\n}\n.checkbox-radio-switch--button-variant[data-v-ff5243c5] .checkbox-radio-switch__text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n.checkbox-radio-switch--button-variant[data-v-ff5243c5]:not(.checkbox-radio-switch--checked) .checkbox-radio-switch__icon > * {\n  color: var(--color-main-text);\n}\n.checkbox-radio-switch--button-variant[data-v-ff5243c5] .checkbox-radio-switch__icon:empty {\n  display: none;\n}\n.checkbox-radio-switch--button-variant[data-v-ff5243c5]:not(.checkbox-radio-switch--button-variant-v-grouped):not(.checkbox-radio-switch--button-variant-h-grouped), .checkbox-radio-switch--button-variant .checkbox-radio-switch__content[data-v-ff5243c5] {\n  border-radius: var(--checkbox-radio-switch--border-radius);\n}\n.checkbox-radio-switch--button-variant-v-grouped .checkbox-radio-switch__content[data-v-ff5243c5] {\n  flex-basis: 100%;\n  max-width: unset;\n}\n.checkbox-radio-switch--button-variant-v-grouped[data-v-ff5243c5]:first-of-type {\n  border-top-left-radius: var(--checkbox-radio-switch--border-radius-outer);\n  border-top-right-radius: var(--checkbox-radio-switch--border-radius-outer);\n}\n.checkbox-radio-switch--button-variant-v-grouped[data-v-ff5243c5]:last-of-type {\n  border-bottom-left-radius: var(--checkbox-radio-switch--border-radius-outer);\n  border-bottom-right-radius: var(--checkbox-radio-switch--border-radius-outer);\n}\n.checkbox-radio-switch--button-variant-v-grouped[data-v-ff5243c5]:not(:last-of-type) {\n  border-bottom: 0 !important;\n}\n.checkbox-radio-switch--button-variant-v-grouped:not(:last-of-type) .checkbox-radio-switch__content[data-v-ff5243c5] {\n  margin-bottom: 2px;\n}\n.checkbox-radio-switch--button-variant-v-grouped[data-v-ff5243c5]:not(:first-of-type) {\n  border-top: 0 !important;\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-ff5243c5]:first-of-type {\n  border-top-left-radius: var(--checkbox-radio-switch--border-radius-outer);\n  border-bottom-left-radius: var(--checkbox-radio-switch--border-radius-outer);\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-ff5243c5]:last-of-type {\n  border-top-right-radius: var(--checkbox-radio-switch--border-radius-outer);\n  border-bottom-right-radius: var(--checkbox-radio-switch--border-radius-outer);\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-ff5243c5]:not(:last-of-type) {\n  border-right: 0 !important;\n}\n.checkbox-radio-switch--button-variant-h-grouped:not(:last-of-type) .checkbox-radio-switch__content[data-v-ff5243c5] {\n  margin-right: 2px;\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-ff5243c5]:not(:first-of-type) {\n  border-left: 0 !important;\n}\n.checkbox-radio-switch--button-variant-h-grouped[data-v-ff5243c5] .checkbox-radio-switch__text {\n  text-align: center;\n  display: flex;\n  align-items: center;\n}\n.checkbox-radio-switch--button-variant-h-grouped .checkbox-radio-switch__content[data-v-ff5243c5] {\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  margin: 0;\n  gap: 0;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const appName = "end_to_end_encryption";
const appVersion = "1.17.0-beta.2";
import { r as register, n as normalizeComponent, G as GenRandomId, t, A as n, B as NcLoadingIcon } from "./_plugin-vue2_normalizer-BdKAaywK.chunk.mjs";
import { u as useModelMigration } from "./useModelMigration-EhAWvqDD-BpHklyZH.chunk.mjs";
register();
const _sfc_main$8 = {
  name: "CheckboxBlankOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$8 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon checkbox-blank-outline-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$8 = [];
var __component__$8 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$8,
  _sfc_render$8,
  _sfc_staticRenderFns$8,
  false,
  null,
  null
);
const CheckboxBlankOutline = __component__$8.exports;
const _sfc_main$7 = {
  name: "MinusBoxIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$7 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon minus-box-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$7 = [];
var __component__$7 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$7,
  _sfc_render$7,
  _sfc_staticRenderFns$7,
  false,
  null,
  null
);
const MinusBox = __component__$7.exports;
const _sfc_main$6 = {
  name: "CheckboxMarkedIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$6 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon checkbox-marked-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$6 = [];
var __component__$6 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$6,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  false,
  null,
  null
);
const CheckboxMarked = __component__$6.exports;
const _sfc_main$5 = {
  name: "RadioboxMarkedIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$5 = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon radiobox-marked-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$5 = [];
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$5,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  false,
  null,
  null
);
const RadioboxMarked = __component__$5.exports;
const _sfc_main$4 = {
  name: "RadioboxBlankIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$4 = function render5() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon radiobox-blank-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$4 = [];
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  null
);
const RadioboxBlank = __component__$4.exports;
const _sfc_main$3 = {
  name: "ToggleSwitchOffIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$3 = function render6() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon toggle-switch-off-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null
);
const ToggleSwitchOff = __component__$3.exports;
const _sfc_main$2 = {
  name: "ToggleSwitchIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$2 = function render7() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon toggle-switch-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null
);
const ToggleSwitch = __component__$2.exports;
const TYPE_CHECKBOX = "checkbox";
const TYPE_RADIO = "radio";
const TYPE_SWITCH = "switch";
const TYPE_BUTTON = "button";
const _sfc_main$1 = {
  name: "NcCheckboxContent",
  components: {
    NcLoadingIcon
  },
  props: {
    /**
     * Unique id attribute of the input to label
     */
    id: {
      type: String,
      default: null
    },
    /**
     * Class for the icon element
     */
    iconClass: {
      type: [String, Object],
      default: null
    },
    /**
     * Class for the text element
     */
    textClass: {
      type: [String, Object],
      default: null
    },
    /**
     * Type of the input. checkbox, radio, switch, or button.
     *
     * Only use button when used in a `tablist` container and the
     * `tab` role is set.
     *
     * @type {'checkbox'|'radio'|'switch'|'button'}
     */
    type: {
      type: String,
      default: "checkbox",
      validator: (type) => [
        TYPE_CHECKBOX,
        TYPE_RADIO,
        TYPE_SWITCH,
        TYPE_BUTTON
      ].includes(type)
    },
    /**
     * Toggle the alternative button style
     */
    buttonVariant: {
      type: Boolean,
      default: false
    },
    /**
     * True if the entry is checked
     */
    isChecked: {
      type: Boolean,
      default: false
    },
    /**
     * Indeterminate state
     */
    indeterminate: {
      type: Boolean,
      default: false
    },
    /**
     * Loading state
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Icon size
     */
    size: {
      type: Number,
      default: 24
    }
  },
  computed: {
    isButtonType() {
      return this.type === TYPE_BUTTON;
    },
    /**
     * Returns the proper Material icon depending on the select case
     *
     * @return {object}
     */
    checkboxRadioIconElement() {
      if (this.type === TYPE_RADIO) {
        if (this.isChecked) {
          return RadioboxMarked;
        }
        return RadioboxBlank;
      }
      if (this.type === TYPE_SWITCH) {
        if (this.isChecked) {
          return ToggleSwitch;
        }
        return ToggleSwitchOff;
      }
      if (this.indeterminate) {
        return MinusBox;
      }
      if (this.isChecked) {
        return CheckboxMarked;
      }
      return CheckboxBlankOutline;
    }
  }
};
var _sfc_render$1 = function render8() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", { staticClass: "checkbox-content", class: {
    ["checkbox-content-" + _vm.type]: true,
    "checkbox-content--button-variant": _vm.buttonVariant,
    "checkbox-content--has-text": !!_vm.$slots.default
  }, attrs: { "id": !_vm.isButtonType ? "".concat(_vm.id, "-label") : void 0 } }, [_c("span", { class: {
    "checkbox-content__icon": true,
    "checkbox-content__icon--checked": _vm.isChecked,
    [_vm.iconClass]: true
  }, attrs: { "aria-hidden": true, "inert": "" } }, [_vm._t("icon", function() {
    return [_vm.loading ? _c("NcLoadingIcon") : !_vm.buttonVariant ? _c(_vm.checkboxRadioIconElement, { tag: "component", attrs: { "size": _vm.size } }) : _vm._e()];
  }, { "checked": _vm.isChecked, "loading": _vm.loading })], 2), _vm.$slots.default ? _c("span", { class: ["checkbox-content__text", _vm.textClass] }, [_vm._t("default")], 2) : _vm._e()]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  "38a6f3e5"
);
const NcCheckboxContent = __component__$1.exports;
const _sfc_main = {
  name: "NcCheckboxRadioSwitch",
  components: {
    NcCheckboxContent
  },
  // We need to pass attributes to the input element
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    /**
     * Unique id attribute of the input
     */
    id: {
      type: String,
      default: () => "checkbox-radio-switch-" + GenRandomId(),
      validator: (id) => id.trim() !== ""
    },
    /**
     * Unique id attribute of the wrapper element
     */
    wrapperId: {
      type: String,
      default: null
    },
    /**
     * Input name. Required for radio, optional for checkbox, and ignored
     * for button.
     */
    name: {
      type: String,
      default: null
    },
    /**
     * Required if no text is set.
     * The aria-label is forwarded to the input or button.
     */
    ariaLabel: {
      type: String,
      default: ""
    },
    /**
     * Type of the input. checkbox, radio, switch, or button.
     *
     * Only use button when used in a `tablist` container and the
     * `tab` role is set.
     *
     * @type {'checkbox'|'radio'|'switch'|'button'}
     */
    type: {
      type: String,
      default: "checkbox",
      validator: (type) => [
        TYPE_CHECKBOX,
        TYPE_RADIO,
        TYPE_SWITCH,
        TYPE_BUTTON
      ].includes(type)
    },
    /**
     * Toggle the alternative button style
     */
    buttonVariant: {
      type: Boolean,
      default: false
    },
    /**
     * Are the elements are all direct siblings?
     * If so they will be grouped horizontally or vertically
     *
     * @type {'no'|'horizontal'|'vertical'}
     */
    buttonVariantGrouped: {
      type: String,
      default: "no",
      validator: (v) => ["no", "vertical", "horizontal"].includes(v)
    },
    /**
     * Removed in v9 - use `modelValue` (`v-model`) instead
     * @deprecated
     */
    checked: {
      type: [Boolean, Array, String],
      default: void 0
    },
    /**
     * Checkbox value
     */
    modelValue: {
      type: [Boolean, Array, String],
      default: false
    },
    /**
     * Value to be synced on check
     */
    value: {
      type: String,
      default: null
    },
    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Indeterminate state
     */
    indeterminate: {
      type: Boolean,
      default: false
    },
    /**
     * Required state
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * Loading state
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Wrapping element tag
     *
     * When `type` is set to `button` this will be ignored
     *
     * Defaults to `span`
     */
    wrapperElement: {
      type: String,
      default: null
    }
  },
  emits: [
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "update:checked",
    "update:modelValue",
    /** Same as update:modelValue for Vue 2 compatibility */
    "update:model-value"
  ],
  setup() {
    const model = useModelMigration("checked", "update:checked");
    return {
      model
    };
  },
  computed: {
    dataAttrs() {
      return Object.fromEntries(Object.entries(this.$attrs).filter(([key]) => key.startsWith("data-")));
    },
    nonDataAttrs() {
      return Object.fromEntries(Object.entries(this.$attrs).filter(([key]) => !key.startsWith("data-")));
    },
    isButtonType() {
      return this.type === TYPE_BUTTON;
    },
    computedWrapperElement() {
      if (this.isButtonType) {
        return "button";
      }
      if (this.wrapperElement !== null) {
        return this.wrapperElement;
      }
      return "span";
    },
    listeners() {
      if (this.isButtonType) {
        return {
          click: this.onToggle
        };
      }
      return {
        change: this.onToggle
      };
    },
    /**
     * Icon size
     *
     * @return {number}
     */
    size() {
      return this.type === TYPE_SWITCH ? 36 : 24;
    },
    /**
     * Css local variables for this component
     *
     * @return {object}
     */
    cssVars() {
      return {
        "--icon-size": this.size + "px",
        "--icon-height": (this.type === TYPE_SWITCH ? 16 : this.size) + "px"
      };
    },
    /**
     * Return the input type.
     * Switch is not an official type
     *
     * @return {string}
     */
    inputType() {
      const nativeTypes = [
        TYPE_CHECKBOX,
        TYPE_RADIO,
        TYPE_BUTTON
      ];
      if (nativeTypes.includes(this.type)) {
        return this.type;
      }
      return TYPE_CHECKBOX;
    },
    /**
     * Check if that entry is checked
     * If value is defined, we use that as the checked value
     * If not, we expect true/false in checked state
     *
     * @return {boolean}
     */
    isChecked() {
      if (this.value !== null) {
        if (Array.isArray(this.model)) {
          return [...this.model].indexOf(this.value) > -1;
        }
        return this.model === this.value;
      }
      return this.model === true;
    },
    hasIndeterminate() {
      return [
        TYPE_CHECKBOX,
        TYPE_RADIO
      ].includes(this.inputType);
    }
  },
  mounted() {
    if (this.name && this.type === TYPE_CHECKBOX) {
      if (!Array.isArray(this.model)) {
        throw new Error("When using groups of checkboxes, the updated value will be an array.");
      }
    }
    if (this.name && this.type === TYPE_SWITCH) {
      throw new Error("Switches are not made to be used for data sets. Please use checkboxes instead.");
    }
    if (typeof this.model !== "boolean" && this.type === TYPE_SWITCH) {
      throw new Error("Switches can only be used with boolean as checked prop.");
    }
  },
  methods: {
    t,
    n,
    onToggle(event) {
      if (this.disabled || event.target.tagName.toLowerCase() === "a") {
        return;
      }
      if (this.type === TYPE_RADIO) {
        this.model = this.value;
        return;
      }
      if (this.type === TYPE_SWITCH) {
        this.model = !this.isChecked;
        return;
      }
      if (typeof this.model === "boolean") {
        this.model = !this.model;
        return;
      }
      const values = this.getInputsSet().filter((input) => input.checked).map((input) => input.value);
      if (values.includes(this.value)) {
        this.model = values.filter((v) => v !== this.value);
      } else {
        this.model = [...values, this.value];
      }
    },
    /**
     * Get the input set based on this name
     *
     * @return {Node[]}
     */
    getInputsSet() {
      return [...document.getElementsByName(this.name)];
    }
  }
};
var _sfc_render = function render9() {
  var _vm = this, _c = _vm._self._c;
  return _c(_vm.computedWrapperElement, _vm._g(_vm._b({ tag: "component", staticClass: "checkbox-radio-switch", class: {
    ["checkbox-radio-switch-" + _vm.type]: _vm.type,
    "checkbox-radio-switch--checked": _vm.isChecked,
    "checkbox-radio-switch--disabled": _vm.disabled,
    "checkbox-radio-switch--indeterminate": _vm.hasIndeterminate ? _vm.indeterminate : false,
    "checkbox-radio-switch--button-variant": _vm.buttonVariant,
    "checkbox-radio-switch--button-variant-v-grouped": _vm.buttonVariant && _vm.buttonVariantGrouped === "vertical",
    "checkbox-radio-switch--button-variant-h-grouped": _vm.buttonVariant && _vm.buttonVariantGrouped === "horizontal",
    "button-vue": _vm.isButtonType
  }, style: _vm.cssVars, attrs: { "id": _vm.wrapperId, "aria-label": _vm.isButtonType && _vm.ariaLabel ? _vm.ariaLabel : void 0, "type": _vm.isButtonType ? "button" : null } }, "component", _vm.isButtonType ? _vm.$attrs : _vm.dataAttrs, false), _vm.isButtonType ? _vm.listeners : null), [!_vm.isButtonType ? _c("input", _vm._g(_vm._b({ staticClass: "checkbox-radio-switch__input", attrs: { "id": _vm.id, "aria-labelledby": !_vm.isButtonType && !_vm.ariaLabel ? "".concat(_vm.id, "-label") : null, "aria-label": _vm.ariaLabel || void 0, "disabled": _vm.disabled, "type": _vm.inputType, "required": _vm.required, "name": _vm.name }, domProps: { "value": _vm.value, "checked": _vm.isChecked, "indeterminate": _vm.hasIndeterminate ? _vm.indeterminate : null } }, "input", _vm.nonDataAttrs, false), _vm.listeners)) : _vm._e(), _c("NcCheckboxContent", { staticClass: "checkbox-radio-switch__content", attrs: { "id": _vm.id, "icon-class": "checkbox-radio-switch__icon", "text-class": "checkbox-radio-switch__text", "type": _vm.type, "indeterminate": _vm.hasIndeterminate ? _vm.indeterminate : false, "button-variant": _vm.buttonVariant, "is-checked": _vm.isChecked, "loading": _vm.loading, "size": _vm.size }, nativeOn: { "click": function($event) {
    return _vm.onToggle.apply(null, arguments);
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_vm._t("icon")];
  }, proxy: true }], null, true) }, [_vm._t("default")], 2)], 1);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "ff5243c5"
);
const NcCheckboxRadioSwitch = __component__.exports;
export {
  NcCheckboxRadioSwitch as N
};
//# sourceMappingURL=NcCheckboxRadioSwitch-R1y0mLbC-PPdao6TU.chunk.mjs.map
