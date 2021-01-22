var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRITopo_1 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Densidade_3 = new ol.format.GeoJSON();
var features_Densidade_3 = format_Densidade_3.readFeatures(json_Densidade_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densidade_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densidade_3.addFeatures(features_Densidade_3);
var lyr_Densidade_3 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_Densidade_3, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Densidade'
            });
var format_RededeSensores_4 = new ol.format.GeoJSON();
var features_RededeSensores_4 = format_RededeSensores_4.readFeatures(json_RededeSensores_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RededeSensores_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RededeSensores_4.addFeatures(features_RededeSensores_4);cluster_RededeSensores_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RededeSensores_4
});
var lyr_RededeSensores_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_RededeSensores_4, 
                style: style_RededeSensores_4,
                interactive: true,
                title: '<img src="styles/legend/RededeSensores_4.png" /> Rede de Sensores'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ESRITopo_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_Densidade_3.setVisible(true);lyr_RededeSensores_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ESRITopo_1,lyr_GoogleHybrid_2,lyr_Densidade_3,lyr_RededeSensores_4];
lyr_RededeSensores_4.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'Lat': 'Lat', 'Log': 'Log', });
lyr_RededeSensores_4.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'Lat': 'TextEdit', 'Log': 'TextEdit', });
lyr_RededeSensores_4.set('fieldLabels', {'Name': 'inline label', 'FolderPath': 'no label', 'Lat': 'no label', 'Log': 'no label', });
lyr_RededeSensores_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});