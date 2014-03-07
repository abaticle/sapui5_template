var Util = {

	/*
	 *	Récupere les données JSON
	 */
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

	/*
	 *	Ouverture de la boîte de chargement
	 */
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


	/*
	 *	Fermeture de la boîte de chargement
	 */
	loadEnd: function () {
		var busyDialog = sap.ui.getCore().byId("BusyDialog");

		if (busyDialog) {
			busyDialog.close();
		}
	}

}