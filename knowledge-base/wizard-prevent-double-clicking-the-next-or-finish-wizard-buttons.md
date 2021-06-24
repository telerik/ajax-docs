---
title: Prevent double clicking the Next or Finish Wizard buttons
description: Prevent double clicking the Next or Finish Wizard buttons. Check it now!
type: how-to
page_title: Prevent double clicking the Next or Finish Wizard buttons
slug: wizard-prevent-double-clicking-the-next-or-finish-wizard-buttons
res_type: kb
---


### Problem

Quickly clicking multiple times on the Next or Finish button calls the event handlers multiple time.

### Description

Clicking the Finish button twice, will make two requests to the server, which would lead to executing the server-side logic twice. This can be a problem, for example, if a billing process takes place in the Finish button click handler.

### Solution

The solution for this case is to disable the button in the [OnClientButtonClicking]({%slug wizard/client-side-programming/events/buttonclicking%}) event. Usually, when the button is disabled, the disabled state is not persisted when a postback is triggered.

If there is no postback when a button is clicked, re-enabling the button is needed. In the examples below, this is achieved in the commented out setTimeout functions.

```JavaScript
function OnClientButtonClicking(sender, args) {
    var command = args.get_command();
    if (command == Telerik.Web.UI.WizardCommand.Finish) {
        var $finishButton = $telerik.$(sender.get_element()).find(".rwzFinish");
        // disable the finish button
        $finishButton.prop('disabled', true);
        // reenable the finish button after 500ms
        //setTimeout(function () {
        //    $finishButton.prop('disabled', false);
        //}, 500);
    } else if (command == Telerik.Web.UI.WizardCommand.Next) {
        var $nextButton = $telerik.$(sender.get_element()).find(".rwzNext");
        $nextButton.prop('disabled', true);
        //setTimeout(function () {
        //    $nextButton.prop('disabled', false);
        //}, 500)
    } else if (command == Telerik.Web.UI.WizardCommand.Previous) {
        var $prevButton = $telerik.$(sender.get_element()).find(".rwzPrevious");
        $prevButton.prop('disabled', true);
        //setTimeout(function () {
        //    $prevButton.prop('disabled', false);
        //}, 500)
    }
}
```



  


