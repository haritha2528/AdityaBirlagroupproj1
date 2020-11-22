/*global QUnit*/

sap.ui.define([
	"ns/HTML5Module/controller/Charts.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Charts Controller");

	QUnit.test("I should test the Charts controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
