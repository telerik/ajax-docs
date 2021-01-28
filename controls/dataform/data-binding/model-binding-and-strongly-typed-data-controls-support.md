---
title: Model Binding and Strongly Typed Data Controls Support
page_title: Model Binding and Strongly Typed Data Controls Support - RadDataForm
description: Check our Web Forms article about Model Binding and Strongly Typed Data Controls Support.
slug: dataform/data-binding/model-binding-and-strongly-typed-data-controls-support
tags: model,binding,and,strongly,typed,data,controls,support
published: True
position: 3
---

# Model Binding and Strongly Typed Data Controls Support



The **.NET 4.5** framework provides ability to enable **strongly-typed** data templates. To enable them the **ItemType** property needs to be set on the data bound control. After setting it two new types will be generated in the scope of the control’s template: **Item** and **BindItem**.

## Strongly Typed Data Controls Support

The code snippet bellow presents the usage of the new types:

````ASPNET
<telerik:RadDataForm RenderMode="Lightweight" ItemType="Product" ID="RadDataForm3" runat="server" ItemPlaceholderID="ProductItemContainer" DataKeyNames="ProductID"
    SelectMethod="GetProducts">

    <ItemTemplate>
        <fieldset class="rdfFieldset rdfBorders">
            <legend class="rdfLegend">Product</legend>
            <div class="rdfRow">
                <asp:Label ID="Label6" runat="server" CssClass="rdfLabel" Text="Name:"></asp:Label>
                <asp:Label ID="Label9" runat="server" CssClass="rdfFieldValue" Text='<%# Item.ProductName %>' />
            </div>
            <div class="rdfRow">
                <asp:Label ID="Label10" runat="server" CssClass="rdfLabel" Text="Quantity:"></asp:Label>
                <asp:Label ID="Label11" runat="server" CssClass="rdfFieldValue" Text='<%# Item.QuantityPerUnit %>' />
            </div>
            <div class="rdfRow">
                <asp:Label ID="Label12" runat="server" CssClass="rdfLabel" Text="Price:"></asp:Label>
                <asp:Label ID="Label13" runat="server" CssClass="rdfFieldValue" Text='<%# Item.UnitPrice.HasValue ? Item.UnitPrice.Value.ToString("C") : "" %>' />
            </div>
            <div class="rdfRow">
                <asp:Label ID="Label14" runat="server" CssClass="rdfLabel" Text="Units:"></asp:Label>
                <asp:Label ID="Label15" runat="server" CssClass="rdfFieldValue" Text='<%# Item.UnitsInStock %>' />
            </div>
            <div class="rdfRow">
                <asp:Label ID="Label16" runat="server" CssClass="rdfLabel" Text="Name:"></asp:Label>
                <asp:Label ID="Label17" runat="server" CssClass="rdfFieldValue" Text='<%# Item.ProductName %>' />
            </div>
            <div class="rdfRow">
                <asp:Label ID="Label18" runat="server" AssociatedControlID="CheckBoxDiscontinued" CssClass="rdfLabel" Text="Discontinued:"></asp:Label>
                <asp:CheckBox ID="CheckBox2" runat="server" Checked='<%# Item.Discontinued %>' Enabled="false" />
            </div>

           
        </fieldset>
    </ItemTemplate>

    <EditItemTemplate>
        <fieldset class="rdfFieldset rdfBorders">
            <legend class="rdfLegend">Edit Product</legend>
            <div class="rdfRow">
                <asp:Label ID="Label19" runat="server" AssociatedControlID="ProductNameTextBox" CssClass="rdfLabel" Text="Name:"></asp:Label>
                <telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox3" runat="server" Text='<%# BindItem.ProductName %>' WrapperCssClass="rdfInput" />
            </div>
            <div class="rdfRow">
                <asp:Label ID="Label20" runat="server" AssociatedControlID="QuantityPerUnitTextBox" CssClass="rdfLabel" Text="Quantity:"></asp:Label>
                <telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox4" runat="server" Text='<%# BindItem.QuantityPerUnit %>' WrapperCssClass="rdfInput" />
            </div>
            <div class="rdfRow">
                <asp:Label ID="Label21" runat="server" AssociatedControlID="UnitPriceTextBox" CssClass="rdfLabel" Text="Price:"></asp:Label>
                <telerik:RadNumericTextBox RenderMode="Lightweight" ID="RadNumericTextBox3" runat="server" DataType="Decimal" DbValue='<%# BindItem.UnitPrice %>' Skin="<%#Container.OwnerDataForm.Skin %>" WrapperCssClass="rdfInput" />
            </div>
            <div class="rdfRow">
                <asp:Label ID="Label22" runat="server" AssociatedControlID="UnitsInStockTextBox" CssClass="rdfLabel" Text="Units:"></asp:Label>
                <telerik:RadNumericTextBox RenderMode="Lightweight" ID="RadNumericTextBox4" runat="server" DataType="Int16" DbValue='<%# BindItem.UnitsInStock %>' NumberFormat-DecimalDigits="0" Skin="<%#Container.OwnerDataForm.Skin %>" WrapperCssClass="rdfInput" />
            </div>
            <div class="rdfRow">
                <asp:Label ID="Label23" runat="server" AssociatedControlID="DiscontinuedCheckBox" CssClass="rdfLabel" Text="Discontinued:"></asp:Label>
                <asp:CheckBox ID="CheckBox3" runat="server" Checked='<%# BindItem.Discontinued %>' />
            </div>
        </fieldset>
    </EditItemTemplate>
</telerik:RadDataForm>
````



## Model Binding Selecting Data and Paging

To bind databound UI controls via ModelBinding you need to set only the SelectMethod property to the name of the public method placed into the page's code-behind file:

The GetProducts method has following declaration:



````C#
DataClassesDataContext context = new DataClassesDataContext();

public IQueryable<Product> GetProducts()
{
    return from p in context.Products
           select p;
}
````
````VB
Private context As New DataClassesDataContext()

Public Function GetProducts() As IQueryable(Of Product)
    Return From p In context.Productsp
End Function	
````



## Collapse imageModel Binding CRUD operations

* **Editing**In order to have editing enabled into the data bound controls you need to set the **UpdateMethod** of the corresponding control to the web form page’s method. The **UpdateMethod** can have following signature:



````C#
public void UpdateProduct(int ProductID)
{
    Product updatedProduct = context.Products.Where(p => p.ProductID == ProductID).First();
    TryUpdateModel(updatedProduct);

    if (ModelState.IsValid)
    {
        context.SubmitChanges();
        MessageLabel.Text = string.Format("Product with ID {0} is updated!", ProductID);
    }
}
````
````VB
Public Sub UpdateProduct(ProductID As Integer)
    Dim updatedProduct As Product = context.Products.Where(Function(p) p.ProductID = ProductID).First()
    TryUpdateModel(updatedProduct)

    If ModelState.IsValid Then
        context.SubmitChanges()
        MessageLabel.Text = String.Format("Product with ID {0} is updated!", ProductID)
    End If
End Sub	
````

Where the "ProductID" is one of the fields set as DataKeyNames of the corresponding bound control.

* **Inserting**In order to have inserting enabled into the data bound controls you need to set the **InsertMethod** property of the corresponding control to the name of the web form page’s insert method. The **InsertMethod** can have following signatures:



````C#
public void InsertProduct(Product p)
{
    if (ModelState.IsValid)
    {
        context.Products.InsertOnSubmit(p);
        context.SubmitChanges();
        MessageLabel.Text = "New product is inserted!";
    }
}
````
````VB
Public Sub InsertProduct(p As Product)
    If ModelState.IsValid Then
        context.Products.InsertOnSubmit(p)
        context.SubmitChanges()
        MessageLabel.Text = "New product is inserted!"
    End If
End Sub	
````



* **Deleting**In order to have deleting enabled into the data bound controls you need to set the **DeleteMethod** property of the corresponding control to the name of the web form page’s delete method. The **DeleteMethod** can have following signature:



````C#
public void DeleteProduct(int ProductID)
{
    Product deletedProduct = context.Products.Where(p => p.ProductID == ProductID).First();
    context.Products.DeleteOnSubmit(deletedProduct);
    context.SubmitChanges();
    MessageLabel.Text = string.Format("Product with ID {0} is deleted!", ProductID);
}
````
````VB
Public Sub DeleteProduct(ProductID As Integer)
    Dim deletedProduct As Product = context.Products.Where(Function(p) p.ProductID = ProductID).First()
    context.Products.DeleteOnSubmit(deletedProduct)
    context.SubmitChanges()
    MessageLabel.Text = String.Format("Product with ID {0} is deleted!", ProductID)
End Sub
````



## ModelBinding Limitations

We do not support model binding when the **ViewState** of the page is disabled. In order to use the model binding you need to set **Page.EnableViewState = "true"**
