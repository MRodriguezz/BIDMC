define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnAssociate **/
    AS_Button_f388c667803946d3a1de8934cf324ea9: function AS_Button_f388c667803946d3a1de8934cf324ea9(eventobject) {
        var self = this;
        var navToAssociate = new kony.mvc.Navigation("frmAssociate");
        navToAssociate.navigate();
    },
    /** onClick defined for btnDiassociate **/
    AS_Button_a3bd6863e635405dbaee6dfdcbbe66f4: function AS_Button_a3bd6863e635405dbaee6dfdcbbe66f4(eventobject) {
        var self = this;
        var navToDiassociate = new kony.mvc.Navigation("frmDiassociate");
        navToDiassociate.navigate();
    },
    /** onClick defined for btnTrack **/
    AS_Button_cba560d6b6e640b29ccc8516aa61c0f4: function AS_Button_cba560d6b6e640b29ccc8516aa61c0f4(eventobject) {
        var self = this;
        var navToTrack = new kony.mvc.Navigation("frmTrack");
        navToTrack.navigate();
    }
});