var Util = {


	getData: function (dataName, param) {

		var url;

		if (config.localMode)
			url = config.localDomain + config[dataName].url;
		else
			url = config.SAPDomain + config[dataName].url;

		if (param != undefined) {
			url += param;
		}

		return jQuery.ajax(url, {
			dataType: "json",
			async: true
		});
	},

	loadStart: function (title, text) {

		if (!title)
			title = "Chargement";

		if (!text)
			text = "Chargement en cours";

		var busyDialog = sap.ui.getCore().byId("BusyDialog");

		if (!busyDialog) {
			busyDialog = new sap.m.BusyDialog('BusyDialog', {
				text: title,
				title: text
			});
		}

		busyDialog.open();
	},


	loadEnd: function () {
		var busyDialog = sap.ui.getCore().byId("BusyDialog");

		if (busyDialog) {
			busyDialog.close();
		}
	}

}