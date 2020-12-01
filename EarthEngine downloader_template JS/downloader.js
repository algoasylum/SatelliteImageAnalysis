var geom = ee.Geometry.Point(18.5204, 73.8567).buffer(500);
var roi = ee.Geometry.Polygon(
        [[[73.49375950802796, 18.167592833169195],
          [74.28477513302796, 18.167592833169195],
          [74.28477513302796, 18.917538431589787],
          [73.49375950802796, 18.167592833169195]]])
var collection = ee.ImageCollection('NASA/GPM_L3/IMERG_V06')
.select('precipitationCal')
.filterBounds(roi)
.filterDate('2000-01-01', '2020-09-09');

var ts = collection.map(function(image){
  var date = image.get('system:time_start');
  var mean = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: roi,
    scale: 250
  });
  // and return a feature with 'null' geometry with properties (dictionary)  
  return ee.Feature(null, {'mean': mean.get('precipitationCal'),
                            'date': date})
});
Export.table.toDrive({
  collection: ts,
  description: 'preci_all',
  folder: 'preci-download1',
  fileFormat: 'CSV'
});
print("done")