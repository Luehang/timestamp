var timeObj = {
  "unixTime": null,
  "naturalTime": ""
}

function naturalConversionRoute(req, res) {
  var timeString = req.url.replace("/", "");
  if(Number.isInteger(Number.parseInt(timeString))) {

    var unixTime = Number.parseInt(timeString);
    var tempDate = new Date(unixTime * 1000);
    var tempDate = tempDate.toGMTString();
    var tempStringDate = tempDate.toString();
    var tempArrDate = tempStringDate.split(" ");
    const month = tempArrDate[2];
    const day = tempArrDate[1];
    const year = tempArrDate[3];
    const naturalDate = `${month} ${day}, ${year}`;

    timeObj.unixTime = unixTime;
    timeObj.naturalTime = naturalDate;
    res.writeHeader(200, {'Content-Type': 'text/strings'});
    res.write(JSON.stringify(timeObj));
    res.end();
  }
}

function unixConversionRoute(req, res) {
  var timeString = req.url.replace("/", "");
  if(Number.isInteger(Number.parseInt(timeString)) === false) {
    var tempArrDate = timeString.split("%20");
    var month = tempArrDate[0].substr(0, 3);
    var monthIndex = months.indexOf(month) + 1;
    var day = Number.parseInt(tempArrDate[1].substr(0, 2));
    var year = Number.parseInt(tempArrDate[2]);
    var naturalTime = `${month} ${day}, ${year}`;
    var tempDate = new Date(dateString);
    var unixTime = Math.round(tempDate.getTime()/1000.0);

    timeObj.unixTime = unixTime;
    timeObj.naturalTime = naturalTime;
    res.writeHeader(200, {'Content-Type': 'text/strings'});
    res.write(JSON.stringify(timeObj));
    res.end();
  }
}

module.exports.naturalConversion = naturalConversionRoute;
module.exports.unixConversion = unixConversionRoute;
