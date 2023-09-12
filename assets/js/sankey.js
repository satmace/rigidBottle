/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Set animated theme
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.SankeyDiagram);

// Set data
chart.data = [
  
  {"from":"Mix Plastic # 8114562", "to": "HDPE Sorted # 895632", "value" : 396},
{"from":"Mix Plastic # 9514562", "to": "HDPE Sorted # 96875632", "value" : 322},

{"from":"HDPE Sorted # 895632", "to": "HDPE Sorted Bale # 546589", "value" : 198},
{"from":"HDPE Sorted # 895632", "to": "HDPE Sorted Bale # 546589", "value" : 198},
{"from":"HDPE Sorted # 96875632", "to": "HDPE Sorted Bale # 989863", "value" : 160},
{"from":"HDPE Sorted # 96875632", "to": "HDPE Sorted Bale # 989863", "value" : 162},
{"from":"HDPE Sorted Bale # 546589", "to": "Recycled Granules #A2119", "value" : 100},
{"from":"HDPE Sorted Bale # 546589", "to": "Recycled Granules #A2119", "value" : 296},
{"from":"HDPE Sorted Bale # 989863", "to": "Recycled Granules #B41120", "value" : 200},
{"from":"HDPE Sorted Bale # 989863", "to": "Recycled Granules #B41120", "value" : 122},

{"from":"Virgin HDPE # 251515", "to": " Extrusion # 22256", "value" : 600},
{"from":"Virgin HDPE # 985956", "to": " Extrusion # 22256", "value" : 300},
{"from":"Virgin HDPE # 10956", "to": " Extrusion # 22256", "value" : 400},

{"from":"Recycled Granules #A2119", "to": " Extrusion # 22256", "value" : 96},
{"from":"Recycled Granules #A2119", "to": " Extrusion # 22256", "value" : 100},
{"from":"Recycled Granules #A2119", "to": " Extrusion # 22256", "value" : 100},
{"from":"Recycled Granules #A2119", "to": " Extrusion # 22256", "value" : 100},


{"from":" Extrusion # 22256", "to": "Bag Making #322551", "value" : 100},

{"from":"Bag Making #322551", "to": "BLACK HDPE REFUSE SACK# 422541", "value" : 100},

{"from":"BLACK HDPE REFUSE SACK# 422541", "to": "BLACK HDPE REFK# 42541", "value" : 100},

];

// Configure data fields
chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.dataFields.value2 = "value2";

// Configure nodes
var nodeTemplate = chart.nodes.template;
nodeTemplate.width = 35;
nodeTemplate.nameLabel.locationX = 0.1;
nodeTemplate.nameLabel.width = 300;
nodeTemplate.nameLabel.label.fill = am4core.color("#000000");
nodeTemplate.nameLabel.label.fontWeight = "bold";

// Configure links
var linkTemplate = chart.links.template;
linkTemplate.colorMode = "gradient";

// add labels
var labelBullet = chart.links.template.bullets.push(new am4charts.LabelBullet());
labelBullet.label.propertyFields.text = "labelText";
labelBullet.propertyFields.locationX = "labelLocation";
labelBullet.propertyFields.rotation = "labelRotation";
labelBullet.label.horizontalCenter = "left";
labelBullet.label.textAlign = "start";
labelBullet.label.dx = -50;

// add labels which will animate
var bullet = chart.links.template.bullets.push(new am4charts.LabelBullet());
bullet.label.text = ""; //{value} Kgs//
bullet.label.fill = am4core.color("00FF00");
bullet.label.fill.fontWeight = "bold";
bullet.label.isMeasured = false;
bullet.isMeasured = false;

// create animations