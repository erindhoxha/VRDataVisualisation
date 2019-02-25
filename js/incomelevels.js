
$(document).ready(function() {
	var map;
	var baseLayer = new L.StamenTileLayer('toner', {
		detectRetina: true
	});

	var baseMaps = {
	    "Stamen Toner": baseLayer
	};

	map = L.map('map', {
		layers: [baseLayer]
	}).setView([0.0, 0.0], 2);
	
	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();
	map.boxZoom.disable();
	map.keyboard.disable();
	if (map.tap) map.tap.disable();
	document.getElementById('map').style.cursor='default';
	var incomeLevelTypes = ['OEC', 'NOC', 'UMC', 'MIC', 'LMC', 'LIC', 'HPC'];
	var valueArray = [{"id":"HIC","value":"High income"},{"id":"HPC","value":"Heavily indebted poor countries (HIPC)"},{"id":"INX","value":"Not classified"},{"id":"LIC","value":"Low income"},{"id":"LMC","value":"Lower middle income"},{"id":"LMY","value":"Low & middle income"},{"id":"MIC","value":"Middle income"},{"id":"NOC","value":"High income: nonOECD"},{"id":"OEC","value":"High income: OECD"},{"id":"UMC","value":"Upper middle income"}];
	var getMap = function (valueArray) {
		var map = {};
		for (var index = 0; index < valueArray.length; ++index) {
			var value = valueArray[index];

			map[value['id']] = value['value'];
		}
		return map;
	};

	var valueMap = getMap(valueArray);

	var incomeLevelToText = function (value) {
		return valueMap[incomeLevelTypes[value]];
	};

	var colorFunction1 = new L.HSLLuminosityFunction(new L.Point(0, 0.2), new L.Point(incomeLevelTypes.length - 1, 0.75), {outputHue: 0, outputLuminosity: '100%'});
	var fillColorFunction1 = new L.HSLLuminosityFunction(new L.Point(0, 0.5), new L.Point(incomeLevelTypes.length - 1, 1), {outputHue: 0, outputLuminosity: '100%'});

	var colorFunction1 = new L.HSLHueFunction(new L.Point(0, 240), new L.Point(incomeLevelTypes.length - 1, 0), {outputSaturation: '100%', outputLuminosity: '25%'});
	var fillColorFunction1 = new L.HSLHueFunction(new L.Point(0, 240), new L.Point(incomeLevelTypes.length - 1, 0), {outputSaturation: '100%', outputLuminosity: '50%'});

	var colorFunction1 = new L.HSLLuminosityFunction(new L.Point(0, 0.5), new L.Point(incomeLevelTypes.length - 1, 0.1), {outputHue: 27, outputLuminosity: '100%'});
	var fillColorFunction1 = new L.HSLLuminosityFunction(new L.Point(0, 0.5), new L.Point(incomeLevelTypes.length - 1, 0.2), {outputHue: 27, outputLuminosity: '100%'});

	var styles = new L.StylesBuilder(incomeLevelTypes, {
		displayName: incomeLevelToText,
		color: 'rgba(19, 165, 255, 0.721)',
		fillColor: 'rgba(19, 165, 255, 0.721)'
	});

	var options = {
		recordsField: '1',
		locationMode: L.LocationModes.COUNTRY,
		codeField: 'id',
		displayOptions: {
			'incomeLevel.id': {
				displayName: 'Income Level',
				styles: styles.getStyles()
			}
		},
		layerOptions: {
			fillOpacity: 0.7,
			opacity: 1,
			weight: 1
		},
		tooltipOptions: {
			iconSize: new L.Point(100,65),
			iconAnchor: new L.Point(-5,65)
		},

		onEachRecord: function (layer, record) {
			var $html = $(L.HTMLUtils.buildTable(record));

			layer.bindPopup($html.wrap('<div/>').parent().html(), {
				maxWidth: 400,
				minWidth: 400
			});
		}
	};

	var incomeLayer = new L.ChoroplethDataLayer(incomeLevels, options);

	map.addLayer(incomeLayer);
});

$(window).on('load', function() {
	$('.leaflet-zoom-animated').css('background-color', 'black');
})