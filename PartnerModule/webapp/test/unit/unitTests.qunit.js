/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/PartnerModule/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});