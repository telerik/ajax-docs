---
title: How to control the position of the modal advanced form
description: How to control the position of the modal advanced form - RadScheduler. Check it now!
type: how-to
page_title: How to control the position of the modal advanced form
slug: scheduler-how-to-control-the-position-of-the-modal-advanced-form
res_type: kb
---

## HOW TO  
   
Control the position of the modal advanced form  
   
## DESCRIPTION
   
 By default, the modal advanced form appears centered with respect to RadScheduler. You can override this behavior with either css or javascript.  
   
## SOLITION  

````CSS
<style type="text/css">
   /* Static advanced form positioning */
   .rsAdvancedEdit
   {
      top: 0px !important;
      left: 0px !important;      
   }
   .rsAdvDragCue
   {
      display: none !important;
   }
</style>
````
   
 The static approach has one limitation - it does not allow the form to be moved around through dragging.   
   
 Or the dynamic approach which allows repositioning of the advanced form through dragging:

 ````JavaScript
<script type="text/javascript">
   // Dynamic advanced form positioning
   $telerik.$.popupDialog.prototype._positionForm = function() {
      // This will be called each time the form needs to be repositioned
      var $ = $telerik.$;
      $(this._targetElement).css({ top: "200px", left: "0px" });
   }
</script>
 ```` 
   
   
   