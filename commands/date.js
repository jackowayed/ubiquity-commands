//test
  CmdUtils.CreateCommand({
  name: "date",
  execute: function() {
  var date = new Date();
CmdUtils.setSelection( date.toLocaleDateString() );
}
  })