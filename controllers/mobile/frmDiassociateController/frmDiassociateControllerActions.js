define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBtnBack **/
    AS_FlexContainer_c2e6e47ddab34fbe88b0f187f454877c: function AS_FlexContainer_c2e6e47ddab34fbe88b0f187f454877c(eventobject) {
        var self = this;
        var navToHome = new kony.mvc.Navigation("frmHome");
        navToHome.navigate();
    },
    /** onClick defined for flxBtnCancel **/
    AS_FlexContainer_b99993c495b94a76868032b8741d79ec: function AS_FlexContainer_b99993c495b94a76868032b8741d79ec(eventobject) {
        var self = this;
        this.view.flxContShadowAlert.isVisible = false;
    },
    /** onClick defined for flxBtnYes **/
    AS_FlexContainer_g51ea603ffb74662854d0544e95c5113: function AS_FlexContainer_g51ea603ffb74662854d0544e95c5113(eventobject) {
        var self = this;
        this.view.flxContShadowAlert.isVisible = false;
    },
    /** onRowClick defined for segDataDiassociate **/
    AS_Segment_ff1e31cdf8414db6a1f69d8d6d5ddbb8: function AS_Segment_ff1e31cdf8414db6a1f69d8d6d5ddbb8(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.rowValData();
    }
});