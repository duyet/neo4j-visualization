(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["worker"],{

/***/ "./src/shared/services/bolt/boltWorkerMessages.js":
/*!********************************************************!*\
  !*** ./src/shared/services/bolt/boltWorkerMessages.js ***!
  \********************************************************/
/*! exports provided: RUN_CYPHER_MESSAGE, CANCEL_TRANSACTION_MESSAGE, CYPHER_ERROR_MESSAGE, CYPHER_RESPONSE_MESSAGE, POST_CANCEL_TRANSACTION_MESSAGE, BOLT_CONNECTION_ERROR_MESSAGE, CLOSE_CONNECTION_MESSAGE, runCypherMessage, cancelTransactionMessage, cypherResponseMessage, cypherErrorMessage, postCancelTransactionMessage, boltConnectionErrorMessage, closeConnectionMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUN_CYPHER_MESSAGE", function() { return RUN_CYPHER_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL_TRANSACTION_MESSAGE", function() { return CANCEL_TRANSACTION_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CYPHER_ERROR_MESSAGE", function() { return CYPHER_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CYPHER_RESPONSE_MESSAGE", function() { return CYPHER_RESPONSE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_CANCEL_TRANSACTION_MESSAGE", function() { return POST_CANCEL_TRANSACTION_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOLT_CONNECTION_ERROR_MESSAGE", function() { return BOLT_CONNECTION_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_CONNECTION_MESSAGE", function() { return CLOSE_CONNECTION_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runCypherMessage", function() { return runCypherMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelTransactionMessage", function() { return cancelTransactionMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cypherResponseMessage", function() { return cypherResponseMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cypherErrorMessage", function() { return cypherErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postCancelTransactionMessage", function() { return postCancelTransactionMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boltConnectionErrorMessage", function() { return boltConnectionErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeConnectionMessage", function() { return closeConnectionMessage; });
/* harmony import */ var _boltMappings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boltMappings */ "./src/shared/services/bolt/boltMappings.js");
/* harmony import */ var _boltConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boltConnection */ "./src/shared/services/bolt/boltConnection.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*
 * Copyright (c) 2002-2020 "Neo4j,"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


var RUN_CYPHER_MESSAGE = 'RUN_CYPHER_MESSAGE';
var CANCEL_TRANSACTION_MESSAGE = 'CANCEL_TRANSACTION_MESSAGE';
var CYPHER_ERROR_MESSAGE = 'CYPHER_ERROR_MESSAGE';
var CYPHER_RESPONSE_MESSAGE = 'CYPHER_RESPONSE_MESSAGE';
var POST_CANCEL_TRANSACTION_MESSAGE = 'POST_CANCEL_TRANSACTION_MESSAGE';
var BOLT_CONNECTION_ERROR_MESSAGE = 'BOLT_CONNECTION_ERROR_MESSAGE';
var CLOSE_CONNECTION_MESSAGE = 'CLOSE_CONNECTION_MESSAGE';
var runCypherMessage = function runCypherMessage(input, parameters) {
  var connectionType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _boltConnection__WEBPACK_IMPORTED_MODULE_1__["ROUTED_WRITE_CONNECTION"];
  var requestId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var cancelable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var connectionProperties = arguments.length > 5 ? arguments[5] : undefined;
  return {
    type: RUN_CYPHER_MESSAGE,
    input: input,
    parameters: parameters,
    connectionType: connectionType,
    requestId: requestId,
    cancelable: cancelable,
    connectionProperties: connectionProperties
  };
};
var cancelTransactionMessage = function cancelTransactionMessage(id) {
  return {
    type: CANCEL_TRANSACTION_MESSAGE,
    id: id
  };
};
var cypherResponseMessage = function cypherResponseMessage(result) {
  return {
    type: CYPHER_RESPONSE_MESSAGE,
    result: Object(_boltMappings__WEBPACK_IMPORTED_MODULE_0__["recursivelyTypeGraphItems"])(result)
  };
};
var cypherErrorMessage = function cypherErrorMessage(error) {
  return {
    type: CYPHER_ERROR_MESSAGE,
    error: error
  };
};
var postCancelTransactionMessage = function postCancelTransactionMessage() {
  return {
    type: POST_CANCEL_TRANSACTION_MESSAGE
  };
};
var boltConnectionErrorMessage = function boltConnectionErrorMessage(error) {
  return {
    type: BOLT_CONNECTION_ERROR_MESSAGE,
    error: error
  };
};
var closeConnectionMessage = function closeConnectionMessage() {
  return {
    type: CLOSE_CONNECTION_MESSAGE
  };
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RUN_CYPHER_MESSAGE, "RUN_CYPHER_MESSAGE", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(CANCEL_TRANSACTION_MESSAGE, "CANCEL_TRANSACTION_MESSAGE", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(CYPHER_ERROR_MESSAGE, "CYPHER_ERROR_MESSAGE", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(CYPHER_RESPONSE_MESSAGE, "CYPHER_RESPONSE_MESSAGE", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(POST_CANCEL_TRANSACTION_MESSAGE, "POST_CANCEL_TRANSACTION_MESSAGE", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(BOLT_CONNECTION_ERROR_MESSAGE, "BOLT_CONNECTION_ERROR_MESSAGE", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(CLOSE_CONNECTION_MESSAGE, "CLOSE_CONNECTION_MESSAGE", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(runCypherMessage, "runCypherMessage", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(cancelTransactionMessage, "cancelTransactionMessage", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(cypherResponseMessage, "cypherResponseMessage", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(cypherErrorMessage, "cypherErrorMessage", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(postCancelTransactionMessage, "postCancelTransactionMessage", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(boltConnectionErrorMessage, "boltConnectionErrorMessage", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
  reactHotLoader.register(closeConnectionMessage, "closeConnectionMessage", "/home/runner/work/neo4j-visualization/neo4j-visualization/src/shared/services/bolt/boltWorkerMessages.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NlcnZpY2VzL2JvbHQvYm9sdFdvcmtlck1lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbIlJVTl9DWVBIRVJfTUVTU0FHRSIsIkNBTkNFTF9UUkFOU0FDVElPTl9NRVNTQUdFIiwiQ1lQSEVSX0VSUk9SX01FU1NBR0UiLCJDWVBIRVJfUkVTUE9OU0VfTUVTU0FHRSIsIlBPU1RfQ0FOQ0VMX1RSQU5TQUNUSU9OX01FU1NBR0UiLCJCT0xUX0NPTk5FQ1RJT05fRVJST1JfTUVTU0FHRSIsIkNMT1NFX0NPTk5FQ1RJT05fTUVTU0FHRSIsInJ1bkN5cGhlck1lc3NhZ2UiLCJpbnB1dCIsInBhcmFtZXRlcnMiLCJjb25uZWN0aW9uVHlwZSIsIlJPVVRFRF9XUklURV9DT05ORUNUSU9OIiwicmVxdWVzdElkIiwiY2FuY2VsYWJsZSIsImNvbm5lY3Rpb25Qcm9wZXJ0aWVzIiwidHlwZSIsImNhbmNlbFRyYW5zYWN0aW9uTWVzc2FnZSIsImlkIiwiY3lwaGVyUmVzcG9uc2VNZXNzYWdlIiwicmVzdWx0IiwicmVjdXJzaXZlbHlUeXBlR3JhcGhJdGVtcyIsImN5cGhlckVycm9yTWVzc2FnZSIsImVycm9yIiwicG9zdENhbmNlbFRyYW5zYWN0aW9uTWVzc2FnZSIsImJvbHRDb25uZWN0aW9uRXJyb3JNZXNzYWdlIiwiY2xvc2VDb25uZWN0aW9uTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUVPLElBQU1BLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLCtCQUErQixHQUFHLGlDQUF4QztBQUNBLElBQU1DLDZCQUE2QixHQUFHLCtCQUF0QztBQUNBLElBQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FDOUJDLEtBRDhCLEVBRTlCQyxVQUY4QixFQU8zQjtBQUFBLE1BSkhDLGNBSUcsdUVBSmNDLHVFQUlkO0FBQUEsTUFISEMsU0FHRyx1RUFIUyxJQUdUO0FBQUEsTUFGSEMsVUFFRyx1RUFGVSxLQUVWO0FBQUEsTUFESEMsb0JBQ0c7QUFDSCxTQUFPO0FBQ0xDLFFBQUksRUFBRWYsa0JBREQ7QUFFTFEsU0FBSyxFQUFMQSxLQUZLO0FBR0xDLGNBQVUsRUFBVkEsVUFISztBQUlMQyxrQkFBYyxFQUFkQSxjQUpLO0FBS0xFLGFBQVMsRUFBVEEsU0FMSztBQU1MQyxjQUFVLEVBQVZBLFVBTks7QUFPTEMsd0JBQW9CLEVBQXBCQTtBQVBLLEdBQVA7QUFTRCxDQWpCTTtBQW1CQSxJQUFNRSx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUFDLEVBQUUsRUFBSTtBQUM1QyxTQUFPO0FBQ0xGLFFBQUksRUFBRWQsMEJBREQ7QUFFTGdCLE1BQUUsRUFBRkE7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU9BLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQUMsTUFBTSxFQUFJO0FBQzdDLFNBQU87QUFDTEosUUFBSSxFQUFFWix1QkFERDtBQUVMZ0IsVUFBTSxFQUFFQywrRUFBeUIsQ0FBQ0QsTUFBRDtBQUY1QixHQUFQO0FBSUQsQ0FMTTtBQU9BLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsS0FBSyxFQUFJO0FBQ3pDLFNBQU87QUFDTFAsUUFBSSxFQUFFYixvQkFERDtBQUVMb0IsU0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsSUFBTUMsNEJBQTRCLEdBQUcsU0FBL0JBLDRCQUErQixHQUFNO0FBQ2hELFNBQU87QUFDTFIsUUFBSSxFQUFFWDtBQURELEdBQVA7QUFHRCxDQUpNO0FBTUEsSUFBTW9CLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQUYsS0FBSyxFQUFJO0FBQ2pELFNBQU87QUFDTFAsUUFBSSxFQUFFViw2QkFERDtBQUVMaUIsU0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsSUFBTUcsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QjtBQUFBLFNBQU87QUFDM0NWLFFBQUksRUFBRVQ7QUFEcUMsR0FBUDtBQUFBLENBQS9COzs7Ozs7Ozs7OzBCQTdETU4sa0I7MEJBQ0FDLDBCOzBCQUNBQyxvQjswQkFDQUMsdUI7MEJBQ0FDLCtCOzBCQUNBQyw2QjswQkFDQUMsd0I7MEJBRUFDLGdCOzBCQW1CQVMsd0I7MEJBT0FFLHFCOzBCQU9BRyxrQjswQkFPQUUsNEI7MEJBTUFDLDBCOzBCQU9BQyxzQiIsImZpbGUiOiJ3b3JrZXIuY2h1bmtoYXNoLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDItMjAyMCBcIk5lbzRqLFwiXG4gKiBOZW80aiBTd2VkZW4gQUIgW2h0dHA6Ly9uZW80ai5jb21dXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgTmVvNGouXG4gKlxuICogTmVvNGogaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgeyByZWN1cnNpdmVseVR5cGVHcmFwaEl0ZW1zIH0gZnJvbSAnLi9ib2x0TWFwcGluZ3MnXG5pbXBvcnQgeyBST1VURURfV1JJVEVfQ09OTkVDVElPTiB9IGZyb20gJy4vYm9sdENvbm5lY3Rpb24nXG5cbmV4cG9ydCBjb25zdCBSVU5fQ1lQSEVSX01FU1NBR0UgPSAnUlVOX0NZUEhFUl9NRVNTQUdFJ1xuZXhwb3J0IGNvbnN0IENBTkNFTF9UUkFOU0FDVElPTl9NRVNTQUdFID0gJ0NBTkNFTF9UUkFOU0FDVElPTl9NRVNTQUdFJ1xuZXhwb3J0IGNvbnN0IENZUEhFUl9FUlJPUl9NRVNTQUdFID0gJ0NZUEhFUl9FUlJPUl9NRVNTQUdFJ1xuZXhwb3J0IGNvbnN0IENZUEhFUl9SRVNQT05TRV9NRVNTQUdFID0gJ0NZUEhFUl9SRVNQT05TRV9NRVNTQUdFJ1xuZXhwb3J0IGNvbnN0IFBPU1RfQ0FOQ0VMX1RSQU5TQUNUSU9OX01FU1NBR0UgPSAnUE9TVF9DQU5DRUxfVFJBTlNBQ1RJT05fTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBCT0xUX0NPTk5FQ1RJT05fRVJST1JfTUVTU0FHRSA9ICdCT0xUX0NPTk5FQ1RJT05fRVJST1JfTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBDTE9TRV9DT05ORUNUSU9OX01FU1NBR0UgPSAnQ0xPU0VfQ09OTkVDVElPTl9NRVNTQUdFJ1xuXG5leHBvcnQgY29uc3QgcnVuQ3lwaGVyTWVzc2FnZSA9IChcbiAgaW5wdXQsXG4gIHBhcmFtZXRlcnMsXG4gIGNvbm5lY3Rpb25UeXBlID0gUk9VVEVEX1dSSVRFX0NPTk5FQ1RJT04sXG4gIHJlcXVlc3RJZCA9IG51bGwsXG4gIGNhbmNlbGFibGUgPSBmYWxzZSxcbiAgY29ubmVjdGlvblByb3BlcnRpZXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJVTl9DWVBIRVJfTUVTU0FHRSxcbiAgICBpbnB1dCxcbiAgICBwYXJhbWV0ZXJzLFxuICAgIGNvbm5lY3Rpb25UeXBlLFxuICAgIHJlcXVlc3RJZCxcbiAgICBjYW5jZWxhYmxlLFxuICAgIGNvbm5lY3Rpb25Qcm9wZXJ0aWVzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbFRyYW5zYWN0aW9uTWVzc2FnZSA9IGlkID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDQU5DRUxfVFJBTlNBQ1RJT05fTUVTU0FHRSxcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjeXBoZXJSZXNwb25zZU1lc3NhZ2UgPSByZXN1bHQgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENZUEhFUl9SRVNQT05TRV9NRVNTQUdFLFxuICAgIHJlc3VsdDogcmVjdXJzaXZlbHlUeXBlR3JhcGhJdGVtcyhyZXN1bHQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGN5cGhlckVycm9yTWVzc2FnZSA9IGVycm9yID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDWVBIRVJfRVJST1JfTUVTU0FHRSxcbiAgICBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwb3N0Q2FuY2VsVHJhbnNhY3Rpb25NZXNzYWdlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFBPU1RfQ0FOQ0VMX1RSQU5TQUNUSU9OX01FU1NBR0VcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYm9sdENvbm5lY3Rpb25FcnJvck1lc3NhZ2UgPSBlcnJvciA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQk9MVF9DT05ORUNUSU9OX0VSUk9SX01FU1NBR0UsXG4gICAgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2xvc2VDb25uZWN0aW9uTWVzc2FnZSA9ICgpID0+ICh7XG4gIHR5cGU6IENMT1NFX0NPTk5FQ1RJT05fTUVTU0FHRVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=