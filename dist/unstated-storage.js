function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var e=t(require("set-immediate-shim")),r=require("unstated"),o=(t(r),function(t){if(void 0===t)return!1;try{return t.setItem("storage",""),t.getItem("storage"),t.removeItem("storage"),!0}catch(t){return!1}});exports.StoredContainer=function(t){function r(){var r=this;t.call(this);e(function(){var t=r.store,e=t.key,n=t.version,i=t.storage;if(!o(i))throw new Error("unstated-storage: Invalid storage provided");if(!e||"string"!=typeof e)throw new Error("unstated-storage: Invalid key provided");var s={_version:n},a=i.getItem(e);null!==a?(a=JSON.parse(a),r.setState(n&&a._version?a._version===n?a:s:a)):r.setState(s),r.subscribe(function(){i.setItem(e,JSON.stringify(r.state))})})}return t&&(r.__proto__=t),(r.prototype=Object.create(t&&t.prototype)).constructor=r,r}(r.Container);
//# sourceMappingURL=unstated-storage.js.map
