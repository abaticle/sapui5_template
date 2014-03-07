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
	}

}