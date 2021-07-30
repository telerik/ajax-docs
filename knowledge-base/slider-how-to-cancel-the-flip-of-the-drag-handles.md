---
title: How to cancel the flip of the drag handles
description: How to cancel the flip of the drag handles of RadSlider. Check it now!
type: how-to
page_title: How to cancel the flip of the drag handles
slug: slider-how-to-cancel-the-flip-of-the-drag-handles
res_type: kb
---


   
 ## HOW-TO  
 Cancel the flip of the RadSlider's drag handles  
 
 ## SOLUTION
 The RadSlider control does not offer the functionality to cancel the flip of the drag handles out of the box but you can easily achieve this by using the control's client-side API.  You can use the **OnClientBeforeValueChange** client-side event to achieve to cancel the operation. e.g as shown below:   
   
````ASPX
        <telerik:RadSlider ID="RadSlider1" runat="server" IsSelectionRangeEnabled="true"
            SmallChange="1" SelectionStart="0" SelectionEnd="1" OnClientBeforeValueChange="OnClientBeforeValueChange">
        </telerik:RadSlider>

        <script type="text/javascript">   
        function OnClientBeforeValueChange(sender, args)   
        {   
            var minRangeBetweenHandles = sender.get_smallChange();   
            var newValue = args.get_newValue();   
                   
            var sliderDragHandles = sender.get_dragHandles();   
            var activeDragHandle = sender.get_activeHandle();   
               
            // In case we are moving the selectionStart dragHandle.   
            if(activeDragHandle == sliderDragHandles[0])   
            {               
                if(newValue >= (sender.get_selectionEnd() - minRangeBetweenHandles))   
                {   
                    args.set_cancel(true);   
                }   
            }   
            // In case we are moving the selectionEnd dragHandle.   
            else  
            {   
                if(newValue <= (sender.get_selectionStart() + minRangeBetweenHandles))   
                {   
                    args.set_cancel(true);   
                }   
            }   
        }   
        </script>
````


  