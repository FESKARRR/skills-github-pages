var wms_layers = [];


        var lyr_SatelitegoogleMap_0 = new ol.layer.Tile({
            'title': 'Satelite googleMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.com/maps/vt?lyrs=s@180&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Лечебное направление',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Лечебное направление'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Досуговое направление',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Досуговое направление'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Историческое направление',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Историческое направление'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Религиозное направление',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Религиозное направление'
            });

lyr_SatelitegoogleMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_SatelitegoogleMap_0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr__1.set('fieldAliases', {'Название': 'Название', 'Адрес': 'Адрес', 'Контакты': 'Контакты', 'Часы': 'Часы', 'Стоимость': 'Стоимость', 'Описание': 'Описание', 'Фото': 'Фото', });
lyr__2.set('fieldAliases', {'Название': 'Название', 'Адрес': 'Адрес', 'Контакты': 'Контакты', 'Часы': 'Часы', 'Стоимость': 'Стоимость', 'Описание': 'Описание', 'Фото': 'Фото', });
lyr__3.set('fieldAliases', {'Название': 'Название', 'Адрес': 'Адрес', 'Описание': 'Описание', 'Фото': 'Фото', });
lyr__4.set('fieldAliases', {'Назва': 'Назва', 'Адрес': 'Адрес', 'Описа': 'Описа', 'Фото': 'Фото', });
lyr__1.set('fieldImages', {'Название': 'TextEdit', 'Адрес': 'TextEdit', 'Контакты': 'TextEdit', 'Часы': 'TextEdit', 'Стоимость': 'TextEdit', 'Описание': 'TextEdit', 'Фото': 'ExternalResource', });
lyr__2.set('fieldImages', {'Название': 'TextEdit', 'Адрес': 'TextEdit', 'Контакты': 'TextEdit', 'Часы': 'TextEdit', 'Стоимость': 'TextEdit', 'Описание': 'TextEdit', 'Фото': 'ExternalResource', });
lyr__3.set('fieldImages', {'Название': 'TextEdit', 'Адрес': 'TextEdit', 'Описание': 'TextEdit', 'Фото': 'ExternalResource', });
lyr__4.set('fieldImages', {'Назва': 'TextEdit', 'Адрес': 'TextEdit', 'Описа': 'TextEdit', 'Фото': 'ExternalResource', });
lyr__1.set('fieldLabels', {'Название': 'inline label - always visible', 'Адрес': 'inline label - always visible', 'Контакты': 'inline label - always visible', 'Часы': 'inline label - always visible', 'Стоимость': 'inline label - always visible', 'Описание': 'inline label - always visible', 'Фото': 'inline label - always visible', });
lyr__2.set('fieldLabels', {'Название': 'inline label - visible with data', 'Адрес': 'inline label - always visible', 'Контакты': 'inline label - always visible', 'Часы': 'inline label - always visible', 'Стоимость': 'inline label - always visible', 'Описание': 'inline label - always visible', 'Фото': 'inline label - always visible', });
lyr__3.set('fieldLabels', {'Название': 'inline label - always visible', 'Адрес': 'inline label - always visible', 'Описание': 'inline label - always visible', 'Фото': 'inline label - always visible', });
lyr__4.set('fieldLabels', {'Назва': 'inline label - always visible', 'Адрес': 'inline label - always visible', 'Описа': 'inline label - always visible', 'Фото': 'inline label - always visible', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});