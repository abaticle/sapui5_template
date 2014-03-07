sap.ui.controller("view.Page.Main", {

	onInit: function () {},

	onBeforeShow: function (evt) {},

	onBackTap: function (evt) {
		sap.ui.getCore().getEventBus().publish("nav", "back");
	}
});