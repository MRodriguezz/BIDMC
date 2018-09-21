define({ 
  rowValData:function() {
    var rowOpSelected = this.view.segDataTrack.selectedRowItems[0].lblKFroTagNum;
    
    if(rowOpSelected === "KFro") {
      var navToHome = new kony.mvc.Navigation("frmKFro");
      navToHome.navigate();
    } 
  }
 });
