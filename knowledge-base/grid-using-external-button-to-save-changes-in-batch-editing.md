---
title: Using external button to Save Changes in Batch Editing
description: Using external button to Save Changes in Batch Editing - RadGrid
type: how-to
page_title: Using external button to Save Changes in Batch Editing
slug: grid-using-external-button-to-save-changes-in-batch-editing
res_type: kb
---

## DESCRIPTION

Save several batch edit grids on click of an external button and also save the other user input.

RadGrid offers a built-in Save Changes button in its command item when in Batch Edit mode. This works great for one single grid.

In some cases, however, you may have several grids on the page and so you would need to save their changes on a click of a button that is outside of the grid.

In addition, the grids may not be the only user input that must be handled by the page.

In such cases, you need to take a few things into account:

- a postback that does not originate from the grid will wipe its data: [https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/server-side-api](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/server-side-api).
- each grid has its own server event that fires and allows you to save data and execute additional logic—the BatchEditCommand event.
- the client-side API of the grid allows you to check for changes and prevent postbacks if there are changes (see the hasChanges method): [https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/client-side-api](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/client-side-api).


## SOLUTION

The solution is to check the grids for changes on the client and then implement the common logic in one place, and to ensure it is called once. To do that:

1. Check for changes on the client for each grid before allowing the postback.
2. If there are changes, save them through the grid's API.
3. Extract the common logic from the Click of the button to a separate method that you can call from the grid events.


Below you can find attached a basic example of the approach.

- [DOWNLOAD Sample](files/grid-save-batch-grids-and-page-external-button.zip) 

## SEE ALSO

- How to use validation with batch editing: [https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/validation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/validation).
- How to invoke client-side validation with RadButtons: [https://docs.telerik.com/devtools/aspnet-ajax/controls/button/how-to/radbutton-validation-and-client-side-event-handlers](https://docs.telerik.com/devtools/aspnet-ajax/controls/button/how-to/radbutton-validation-and-client-side-event-handlers).
- How to prevent a postback conditionally with RadButton through its events (applicable for other Telerik buttons as well, through their events): [https://docs.telerik.com/devtools/aspnet-ajax/controls/button/client-side-programming/events/onclientclicking](https://docs.telerik.com/devtools/aspnet-ajax/controls/button/client-side-programming/events/onclientclicking).

 
 