define({ 
  rowValData:function() {
    var rowOpSelected = this.view.segDataDiassociate.selectedRowItems[0].lblBeaconTagNum;
    
    if(rowOpSelected === "MRN 2234554") {
      this.view.flxContShadowAlert.isVisible = true;
    } 
  }
 });
