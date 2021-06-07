"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function _react() {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@umijs/utils");

  _utils = function _utils() {
    return data;
  };

  return data;
}

function _path() {
  const data = require("path");

  _path = function _path() {
    return data;
  };

  return data;
}

function _fs() {
  const data = require("fs");

  _fs = function _fs() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = api => {
  api.onGenerateFiles({
    fn() {
      var _api$config;

      // runtime.tsx
      const runtimeTpl = (0, _fs().readFileSync)((0, _path().join)(__dirname, 'runtime.tpl'), 'utf-8');
      api.writeTmpFile({
        path: 'plugin-kea/runtime.tsx',
        content: _utils().Mustache.render(runtimeTpl, {
          SSR: !!((_api$config = api.config) === null || _api$config === void 0 ? void 0 : _api$config.ssr)
        })
      });
    }

  }); // Runtime Plugin

  api.addRuntimePlugin(() => [(0, _path().join)(api.paths.absTmpPath, 'plugin-kea/runtime.tsx')]);
};

exports.default = _default;