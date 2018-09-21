define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnCancel **/
    AS_Button_e446c890a8ba4e7a9167bed74a200b09: function AS_Button_e446c890a8ba4e7a9167bed74a200b09(eventobject) {
        var self = this;
        var navToHome = new kony.mvc.Navigation("frmHome");
        navToHome.navigate();
    },
    /** onClick defined for flxBtnClose **/
    AS_FlexContainer_fc63f541b7b547d4a4f49e4ba70e93b0: function AS_FlexContainer_fc63f541b7b547d4a4f49e4ba70e93b0(eventobject) {
        var self = this;
        // Clean textbox content
        this.view.tBoxMRNNumberText.text = "";
    },
    /** onClick defined for btnConnect **/
    AS_Button_f17a20b39257456bb2bd074e8671647d: function AS_Button_f17a20b39257456bb2bd074e8671647d(eventobject) {
        var self = this;
        var navToHome = new kony.mvc.Navigation("frmHome");
        navToHome.navigate();
    },
    /** onTextChange defined for tBoxMRNNumberText **/
    AS_TextField_ac677556481f4ab9b6763b3fdd9290c7: function AS_TextField_ac677556481f4ab9b6763b3fdd9290c7(eventobject, changedtext) {
        var self = this;
        this.view.flxBtnClose.isVisible = true;
    },
    /** onTextChange defined for tBoxBeaconNumberText **/
    AS_TextField_e06ab1b18aaa467cbc06d69f1c77eb59: function AS_TextField_e06ab1b18aaa467cbc06d69f1c77eb59(eventobject, changedtext) {
        var self = this;
        this.view.flxBtnBeaconClose.isVisible = true;
    },
    /** onClick defined for flxBtnBeaconClose **/
    AS_FlexContainer_f712937a3b314f6d9dc3cbcb8624d462: function AS_FlexContainer_f712937a3b314f6d9dc3cbcb8624d462(eventobject) {
        var self = this;
        // Clean textbox content
        this.view.tBoxBeaconNumberText.text = "";
    }
});