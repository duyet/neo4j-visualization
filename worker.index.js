(window["webpackJsonpNeo4jVisualization"] = window["webpackJsonpNeo4jVisualization"] || []).push([["worker"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZW80alZpc3VhbGl6YXRpb24vLi9zcmMvc2hhcmVkL3NlcnZpY2VzL2JvbHQvYm9sdFdvcmtlck1lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbIlJVTl9DWVBIRVJfTUVTU0FHRSIsIkNBTkNFTF9UUkFOU0FDVElPTl9NRVNTQUdFIiwiQ1lQSEVSX0VSUk9SX01FU1NBR0UiLCJDWVBIRVJfUkVTUE9OU0VfTUVTU0FHRSIsIlBPU1RfQ0FOQ0VMX1RSQU5TQUNUSU9OX01FU1NBR0UiLCJCT0xUX0NPTk5FQ1RJT05fRVJST1JfTUVTU0FHRSIsIkNMT1NFX0NPTk5FQ1RJT05fTUVTU0FHRSIsInJ1bkN5cGhlck1lc3NhZ2UiLCJpbnB1dCIsInBhcmFtZXRlcnMiLCJjb25uZWN0aW9uVHlwZSIsIlJPVVRFRF9XUklURV9DT05ORUNUSU9OIiwicmVxdWVzdElkIiwiY2FuY2VsYWJsZSIsImNvbm5lY3Rpb25Qcm9wZXJ0aWVzIiwidHlwZSIsImNhbmNlbFRyYW5zYWN0aW9uTWVzc2FnZSIsImlkIiwiY3lwaGVyUmVzcG9uc2VNZXNzYWdlIiwicmVzdWx0IiwicmVjdXJzaXZlbHlUeXBlR3JhcGhJdGVtcyIsImN5cGhlckVycm9yTWVzc2FnZSIsImVycm9yIiwicG9zdENhbmNlbFRyYW5zYWN0aW9uTWVzc2FnZSIsImJvbHRDb25uZWN0aW9uRXJyb3JNZXNzYWdlIiwiY2xvc2VDb25uZWN0aW9uTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUVPLElBQU1BLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLCtCQUErQixHQUFHLGlDQUF4QztBQUNBLElBQU1DLDZCQUE2QixHQUFHLCtCQUF0QztBQUNBLElBQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FDOUJDLEtBRDhCLEVBRTlCQyxVQUY4QixFQU8zQjtBQUFBLE1BSkhDLGNBSUcsdUVBSmNDLHVFQUlkO0FBQUEsTUFISEMsU0FHRyx1RUFIUyxJQUdUO0FBQUEsTUFGSEMsVUFFRyx1RUFGVSxLQUVWO0FBQUEsTUFESEMsb0JBQ0c7QUFDSCxTQUFPO0FBQ0xDLFFBQUksRUFBRWYsa0JBREQ7QUFFTFEsU0FBSyxFQUFMQSxLQUZLO0FBR0xDLGNBQVUsRUFBVkEsVUFISztBQUlMQyxrQkFBYyxFQUFkQSxjQUpLO0FBS0xFLGFBQVMsRUFBVEEsU0FMSztBQU1MQyxjQUFVLEVBQVZBLFVBTks7QUFPTEMsd0JBQW9CLEVBQXBCQTtBQVBLLEdBQVA7QUFTRCxDQWpCTTtBQW1CQSxJQUFNRSx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUFDLEVBQUUsRUFBSTtBQUM1QyxTQUFPO0FBQ0xGLFFBQUksRUFBRWQsMEJBREQ7QUFFTGdCLE1BQUUsRUFBRkE7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU9BLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQUMsTUFBTSxFQUFJO0FBQzdDLFNBQU87QUFDTEosUUFBSSxFQUFFWix1QkFERDtBQUVMZ0IsVUFBTSxFQUFFQywrRUFBeUIsQ0FBQ0QsTUFBRDtBQUY1QixHQUFQO0FBSUQsQ0FMTTtBQU9BLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsS0FBSyxFQUFJO0FBQ3pDLFNBQU87QUFDTFAsUUFBSSxFQUFFYixvQkFERDtBQUVMb0IsU0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsSUFBTUMsNEJBQTRCLEdBQUcsU0FBL0JBLDRCQUErQixHQUFNO0FBQ2hELFNBQU87QUFDTFIsUUFBSSxFQUFFWDtBQURELEdBQVA7QUFHRCxDQUpNO0FBTUEsSUFBTW9CLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQUYsS0FBSyxFQUFJO0FBQ2pELFNBQU87QUFDTFAsUUFBSSxFQUFFViw2QkFERDtBQUVMaUIsU0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsSUFBTUcsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QjtBQUFBLFNBQU87QUFDM0NWLFFBQUksRUFBRVQ7QUFEcUMsR0FBUDtBQUFBLENBQS9COzs7Ozs7Ozs7OzBCQTdETU4sa0I7MEJBQ0FDLDBCOzBCQUNBQyxvQjswQkFDQUMsdUI7MEJBQ0FDLCtCOzBCQUNBQyw2QjswQkFDQUMsd0I7MEJBRUFDLGdCOzBCQW1CQVMsd0I7MEJBT0FFLHFCOzBCQU9BRyxrQjswQkFPQUUsNEI7MEJBTUFDLDBCOzBCQU9BQyxzQiIsImZpbGUiOiJ3b3JrZXIuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDAyLTIwMjAgXCJOZW80aixcIlxuICogTmVvNGogU3dlZGVuIEFCIFtodHRwOi8vbmVvNGouY29tXVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIE5lbzRqLlxuICpcbiAqIE5lbzRqIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IHsgcmVjdXJzaXZlbHlUeXBlR3JhcGhJdGVtcyB9IGZyb20gJy4vYm9sdE1hcHBpbmdzJ1xuaW1wb3J0IHsgUk9VVEVEX1dSSVRFX0NPTk5FQ1RJT04gfSBmcm9tICcuL2JvbHRDb25uZWN0aW9uJ1xuXG5leHBvcnQgY29uc3QgUlVOX0NZUEhFUl9NRVNTQUdFID0gJ1JVTl9DWVBIRVJfTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBDQU5DRUxfVFJBTlNBQ1RJT05fTUVTU0FHRSA9ICdDQU5DRUxfVFJBTlNBQ1RJT05fTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBDWVBIRVJfRVJST1JfTUVTU0FHRSA9ICdDWVBIRVJfRVJST1JfTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBDWVBIRVJfUkVTUE9OU0VfTUVTU0FHRSA9ICdDWVBIRVJfUkVTUE9OU0VfTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBQT1NUX0NBTkNFTF9UUkFOU0FDVElPTl9NRVNTQUdFID0gJ1BPU1RfQ0FOQ0VMX1RSQU5TQUNUSU9OX01FU1NBR0UnXG5leHBvcnQgY29uc3QgQk9MVF9DT05ORUNUSU9OX0VSUk9SX01FU1NBR0UgPSAnQk9MVF9DT05ORUNUSU9OX0VSUk9SX01FU1NBR0UnXG5leHBvcnQgY29uc3QgQ0xPU0VfQ09OTkVDVElPTl9NRVNTQUdFID0gJ0NMT1NFX0NPTk5FQ1RJT05fTUVTU0FHRSdcblxuZXhwb3J0IGNvbnN0IHJ1bkN5cGhlck1lc3NhZ2UgPSAoXG4gIGlucHV0LFxuICBwYXJhbWV0ZXJzLFxuICBjb25uZWN0aW9uVHlwZSA9IFJPVVRFRF9XUklURV9DT05ORUNUSU9OLFxuICByZXF1ZXN0SWQgPSBudWxsLFxuICBjYW5jZWxhYmxlID0gZmFsc2UsXG4gIGNvbm5lY3Rpb25Qcm9wZXJ0aWVzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSVU5fQ1lQSEVSX01FU1NBR0UsXG4gICAgaW5wdXQsXG4gICAgcGFyYW1ldGVycyxcbiAgICBjb25uZWN0aW9uVHlwZSxcbiAgICByZXF1ZXN0SWQsXG4gICAgY2FuY2VsYWJsZSxcbiAgICBjb25uZWN0aW9uUHJvcGVydGllc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxUcmFuc2FjdGlvbk1lc3NhZ2UgPSBpZCA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ0FOQ0VMX1RSQU5TQUNUSU9OX01FU1NBR0UsXG4gICAgaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3lwaGVyUmVzcG9uc2VNZXNzYWdlID0gcmVzdWx0ID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDWVBIRVJfUkVTUE9OU0VfTUVTU0FHRSxcbiAgICByZXN1bHQ6IHJlY3Vyc2l2ZWx5VHlwZUdyYXBoSXRlbXMocmVzdWx0KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjeXBoZXJFcnJvck1lc3NhZ2UgPSBlcnJvciA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ1lQSEVSX0VSUk9SX01FU1NBR0UsXG4gICAgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcG9zdENhbmNlbFRyYW5zYWN0aW9uTWVzc2FnZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBQT1NUX0NBTkNFTF9UUkFOU0FDVElPTl9NRVNTQUdFXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJvbHRDb25uZWN0aW9uRXJyb3JNZXNzYWdlID0gZXJyb3IgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEJPTFRfQ09OTkVDVElPTl9FUlJPUl9NRVNTQUdFLFxuICAgIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNsb3NlQ29ubmVjdGlvbk1lc3NhZ2UgPSAoKSA9PiAoe1xuICB0eXBlOiBDTE9TRV9DT05ORUNUSU9OX01FU1NBR0Vcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9