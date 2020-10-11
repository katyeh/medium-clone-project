module.exports = function dateFormatter(string) {
  var date = new Date(string);
  var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  var month = monthNames[date.getMonth()];
  var day = date.getDate();
  return month+' '+day;
}
