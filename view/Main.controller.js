sap.ui.controller("view.Main", {

	onInit: function () {
		this._setLanguage();
	},


	onBeforeShow: function (evt) {},

	onMenuTap: function (evt) {
		var id = evt.getSource().getId();

		switch (id) {

		case "Main.Menu.Page":

			sap.ui.getCore().getEventBus().publish("nav", "to", {
				viewName: "Page.Main",
				id: "Page.Main"
			});
			break;

		}
	},

	_setLanguage: function () {

		var lang = sap.ui.getCore().getConfiguration().getLanguage();

		//Set default language
		if (lang != "fr" && lang != "en")
			lang = "en";

		var model = new sap.ui.model.resource.ResourceModel({
			bundleName: "Language.language",
			bundleLocale: lang
		});

		sap.ui.getCore().setModel(model, "i18n");

	}
});