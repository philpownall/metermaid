//
var RogersClickCount = 0;
var HydroClickCount = 0;
var mydate = 0;
var dayusage = 0;
var day$ = 0;
var monthusage = 0;
var month$ = 0;
var yearusage = 0;
var year$ = 0;
var VirginClickCount = 0;
var TelusClickCount = 0;


$("#HydroData").load("HydroData.txt");

$(document).ready(function(){

  // get the last line (the most recent totals) from the HydroData.txt file
  // line format is "Mon Dec 19 13:09:55 2016","18.0282 kWh","$1.57","414.6078 kWh","$45.89","6342.4638 kWh","$685.55"
  $.get("HydroData.txt",function(data){
    var lines = data.split("\n");
    var lastline = lines[lines.length-2];
    var fields = lastline.split(",");
    mydate = fields[0].replace(/["]+/g, '');
    dayusage = fields[1].replace(/["]+/g, '');
    day$ = fields[2].replace(/["]+/g, '');
    monthusage = fields[3].replace(/["]+/g, '');
    month$ = fields[4].replace(/["]+/g, '');
    yearusage = fields[5].replace(/["]+/g, '');
    year$ = fields[6].replace(/["]+/g, '');
    document.getElementById('HydroData').innerHTML = dayusage + " for " + day$;
  });

  $("#RogersImage").click(function(){ 
    // Rogers image was clicked: cycle through the 2 Rogers images
    if (RogersClickCount == 0) {
      document.getElementById('RogersImage').src = document.getElementById('RogersImage2').src ;
      RogersClickCount += 1;
    } else if (RogersClickCount == 1) {
      document.getElementById('RogersImage').src = document.getElementById('RogersImage1').src ;
      RogersClickCount = 0;
    }
  });

  $("#HydroImage").click(function(){ 
    // hydro image was clicked: cycle through the 4 Hydro images
    if (HydroClickCount == 0) {
      document.getElementById('HydroImage').src = document.getElementById('HydroImage2').src ;
      document.getElementById('HydroData').innerHTML = monthusage + " for " + month$;     
      HydroClickCount += 1;
    } else if (HydroClickCount == 1) {
      document.getElementById('HydroImage').src = document.getElementById('HydroImage3').src ;
      document.getElementById('HydroData').innerHTML = yearusage + " for " + year$;     
      HydroClickCount += 1;
    } else if (HydroClickCount == 2) {
      document.getElementById('HydroImage').src = document.getElementById('HydroImage1').src ;
      document.getElementById('HydroData').innerHTML = dayusage + " for " + day$;     
      HydroClickCount = 0;
    }
  });

  $("#VirginImage").click(function(){ 
    // Virgin image was clicked: cycle through the 4 Virgin images
    if (VirginClickCount == 0) {
      document.getElementById('VirginImage').src = document.getElementById('VirginImage2').src ;
      VirginClickCount += 1;
    } else if (VirginClickCount == 1) {
      document.getElementById('VirginImage').src = document.getElementById('VirginImage3').src ;
      VirginClickCount += 1;
    } else if (VirginClickCount == 2) {
      document.getElementById('VirginImage').src = document.getElementById('VirginImage4').src ;
      VirginClickCount += 1;
    } else if (VirginClickCount == 3) {
      document.getElementById('VirginImage').src = document.getElementById('VirginImage1').src ;
      VirginClickCount = 0;
    }
  });

  $("#TelusImage").click(function(){ 
    // Telus image was clicked: cycle through the 2 Telus images
    if (TelusClickCount == 0) {
      document.getElementById('TelusImage').src = document.getElementById('TelusImage2').src ;
      TelusClickCount += 1;
    } else if (TelusClickCount == 1) {
      document.getElementById('TelusImage').src = document.getElementById('TelusImage1').src ;
      TelusClickCount = 0;
    }
  });

});
