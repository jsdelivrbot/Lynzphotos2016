/* */ 
"use strict";
exports.__esModule = true;
exports.remove = remove;
exports._callRemovalHooks = _callRemovalHooks;
exports._remove = _remove;
exports._markRemoved = _markRemoved;
exports._assertUnremoved = _assertUnremoved;
var _libRemovalHooks = require('./lib/removal-hooks');
function remove() {
  this._assertUnremoved();
  this.resync();
  if (this._callRemovalHooks()) {
    this._markRemoved();
    return;
  }
  this.shareCommentsWithSiblings();
  this._remove();
  this._markRemoved();
}
function _callRemovalHooks() {
  var _arr = _libRemovalHooks.hooks;
  for (var _i = 0; _i < _arr.length; _i++) {
    var fn = _arr[_i];
    if (fn(this, this.parentPath))
      return true;
  }
}
function _remove() {
  if (Array.isArray(this.container)) {
    this.container.splice(this.key, 1);
    this.updateSiblingKeys(this.key, -1);
  } else {
    this._replaceWith(null);
  }
}
function _markRemoved() {
  this.shouldSkip = true;
  this.removed = true;
  this.node = null;
}
function _assertUnremoved() {
  if (this.removed) {
    throw this.buildCodeFrameError("NodePath has been removed so is read-only.");
  }
}
