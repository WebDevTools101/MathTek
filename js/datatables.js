$(document).ready(function() {
  $('#example').DataTable({ 
    "bLengthChange": false,
    "search": {
      "addClass": 'form-control input-lg col-xs-12'},
    "dom" : '<"top"lf>rt<"bottom"ip>'
  });

  $('#example2').DataTable({ 
    "bLengthChange": false,
    "search": {
      "addClass": 'form-control input-lg col-xs-12'},
    "dom" : '<"top"lf>rt<"bottom"ip>'
  });

  $('#example3').DataTable({ 
    "bLengthChange": false,
    "search": {
      "addClass": 'form-control input-lg col-xs-12'},
    "dom" : '<"top"lf>rt<"bottom"ip>'
  });
} );