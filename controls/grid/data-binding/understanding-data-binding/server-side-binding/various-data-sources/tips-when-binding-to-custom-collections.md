---
title: Tips When Binding to Custom Collections
page_title: Tips When Binding to Custom Collections | UI for ASP.NET AJAX Documentation
description: Tips When Binding to Custom Collections
slug: grid/data-binding/understanding-data-binding/server-side-binding/various-data-sources/tips-when-binding-to-custom-collections
tags: tips,when,binding,to,custom,collections
published: True
position: 6
---

# Tips When Binding to Custom Collections



This topic describes some of the considerations you should keep in mind when designing business object collections to be displayed in __RadGrid__. Be aware that __RadGrid__ can display those collections as long as they support the __ITypedList__, __IListSource__, or __IEnumerable__ interface.

## Limiting the fields that the grid fetches

By default, __RadGrid__ fetches all [bindable property values]({%slug grid/data-binding/bindable-property-types%}) from the data source you use for control structure generation. These values can be used in sorting, filtering, grouping or other operations. In some cases, however, you may not need your grid instance to iterate through all the fields in your data source when binding. This can be a requirement when you have custom collection of business objects that you assign as the __DataSource__ property of a __RadGrid__ control to generate its content.

To prevent the grid from traversing all data fields in a collection, set the master table view's __RetrieveAllDataFields__ property to __False__. In this case, any additional fields that you want to use for sorting, grouping or assigning to __DataKeyNames__ can be included in the __AdditionalDataFieldNames__ array. When you set __RetrieveAllDataFields__ to __False__, only the properties that are used as column __DataFields__ or those specified in the __AdditionalDataFieldNames__ are extracted from the data source.

## Sorting, filtering, and grouping

Currently __RadGrid__ supports sorting, filtering and grouping natively. You can specify the way the grid sorts, groups, and filters its data using the following properties:

* GridTableView.SortExpressions

* GridTableView.FilterExpression

* GridTableView.GroupByExpressions

These features are not tightly coupled with the column declarations of the grid, but rather with the data that the grid is bound to.

To clarify the idea, consider the case of a __RadGrid__ instance with 2 columns: __ProductName__ and __ProductCategory__. In the __DataSource__, which is a business object collection describing orders of products, you have several additional fields: __ProductID__, __Units__, __TotalOrders__, __TotalCost__, and so on.

You can display the grid with two columns and a group by expression: "ProductCategory, ProductID, Sum(TotalCost), Sum (TotalOrders), Group By ProductID, ProductCategory". It is obvious that the columns declaration and the grouping and sorting expressions rely on different sets of fields. (This is the reason for the default behavior where __RadGrid__ extracts all bindable properties of the business object collection.)

## Example

The example below has two __RadGrid__ and two __GridView__ controls. These controls are bound to an object data source, with corresponding auto-generated or pre-defined column sets. The business object implements __ICustomTypeDescriptor__ with modified presentation structure using attributes.

The properties that are not visible for presentation have the [PresentationHidden] attribute. Here is the code-behind:

## BusinessObject

>tabbedCode

````C#
	
	using System;
	using System.Web;
	using System.Collections.Generic;
	using System.ComponentModel;
	using System.Web.UI;
	using BusinessObjects;
	public class BusinessObjectList : BindingList<BusinessObject>, ITypedList
	{
	 public BusinessObjectList()
	 {
	   Add( new BusinessObject(null, null, new SubObject("Four")));
	   Add( new BusinessObject(1, "1", new SubObject("One")));
	   Add( new BusinessObject(2, "3", new SubObject("Two")));
	   Add( new BusinessObject(3, "2", new SubObject("Three")));
	   Add( new BusinessObject(4, "1", new SubObject("Four")));
	 }
	 public BindingList<BusinessObject> GetList()
	 {
	   return this;
	 }
	 public PropertyDescriptorCollection GetItemProperties(PropertyDescriptor[] listAccessors)
	 {
	   return CustomTypeDescriptorHelper.GetExtendedProperties( typeof(BusinessObject));
	 }
	 public string GetListName(PropertyDescriptor[] listAccessors)
	 {
	   return "DefaultView";
	 }
	}
	public class SubObject
	{
	 private string _name;
	 public SubObject(string name)
	 {
	   this._name = name;
	 }
	 public string Name
	 {
	   get { return _name; }
	   set { _name = value; }
	 }
	}
	public class BusinessObject: ICustomTypeDescriptor
	{
	 private long? _objectId;
	 private string _stringProperty;
	 private SubObject _subObject;
	 public BusinessObject(int? objectId, string stringProperty, SubObject subObject)
	{
	  this._objectId = objectId;
	  this._stringProperty = stringProperty;
	  this._subObject = subObject;
	}
	public long? ObjectId
	{
	  get { return _objectId; }
	  set { _objectId = value; }
	}
	public string StringProperty
	{
	   get { return _stringProperty; }
	   set { _stringProperty = value; }
	}
	//The PresentationHidden attribute "hides" the property from GridView and RadGrid
	[PresentationHidden]
	public string ShouldNotBeAccesseed
	{
	   get
	   {
	      throw new NotSupportedException();
	   }
	   set
	   {
	      throw new NotSupportedException();
	   }
	}
	//using the IntroduceObject attribute the custom type descriptor helper would
	//recognize the objects to introduce sub-properties
	[IntroduceObject]
	public SubObject SubObjectProperty
	{
	  get { return _subObject; }
	  set { _subObject = value; }
	 }
	//---------------------------------------------------------------
	//This implementation of ICustomTypeDescriptor is general for all
	//types of objects that can serve as data-items in data-list
	//controls, including RadGrid, DataGrid, GridView, DataList, etc.
	//Note that the columns should be defined for the propertes of sub objects
	//no auto-generated columns can be used, unless the collection of
	//objects bound to the data-list control implements the ITypedList
	//intereface. The DataField of such columns showing sub-properties
	//should be constructed from the name of the property + _ +
	//name of the sub-property:
	//if sub-property is accessed using "SubProperty.Name", the DataField
	// should be "SubProperty_Name".
	//Copy-paste the implementation to other business objects
	//or implement in their base class.
	//Do not forget to mark the object, which contain subproperties as [IntroduceObject].
	//-----------------------------------------------------------------
	
	System.ComponentModel.AttributeCollection CustomTypeDescriptor.GetAttributes()
	{
	  return new System.ComponentModel.AttributeCollection(null);
	}
	string ICustomTypeDescriptor.GetClassName()
	{
	  return null;
	}
	string ICustomTypeDescriptor.GetComponentName()
	{
	  return null;
	}
	TypeConverter ICustomTypeDescriptor.GetConverter()
	{
	  return null;
	}
	EventDescriptor ICustomTypeDescriptor.GetDefaultEvent()
	{
	  return null;
	}
	PropertyDescriptor ICustomTypeDescriptor.GetDefaultProperty()
	{
	  return null;
	}
	object ICustomTypeDescriptor.GetEditor(Type editorBaseType)
	{
	  return null;
	}
	EventDescriptorCollection ICustomTypeDescriptor.GetEvents()
	{
	  return new EventDescriptorCollection(null);
	}
	EventDescriptorCollection ICustomTypeDescriptor.GetEvents(Attribute[] attributes)
	{
	  return new EventDescriptorCollection(null);
	}
	PropertyDescriptorCollection ICustomTypeDescriptor.GetProperties()
	{
	 return ((ICustomTypeDescriptor)this).GetProperties(null);
	}
	PropertyDescriptorCollection ICustomTypeDescriptor.GetProperties(Attribute[] attributes)
	{
	  return CustomTypeDescriptorHelper.GetExtendedProperties( TypeDescriptor.GetProperties(this, true) );
	}
	object ICustomTypeDescriptor.GetPropertyOwner(PropertyDescriptor pd)
	{
	  return this;
	}
	} 
				
````
````VB.NET
	Imports System
	Imports System.ComponentModel
	Imports System.Web.UI
	
	Namespace BusinessObjects
	
	        Friend Class IntroduceObjectAttribute
	            Inherits Attribute
	        End Class 'IntroduceObjectAttribute
	
	        Friend Class PresentationHidden
	            Inherits Attribute
	        End Class 'PresentationHidden
	
	        Friend Class CustomTypeDescriptorHelper
	            Public Overloads Shared Function GetExtendedProperties(ByVal originalProperties As PropertyDescriptorCollection) As PropertyDescriptorCollection
	                Dim originalArray(originalProperties.Count) As PropertyDescriptor
	                originalProperties.CopyTo(originalArray, 0)
	                Dim res As New PropertyDescriptorCollection(originalArray, False)
	                Dim aggObjectDescriptor As PropertyDescriptor
	                For Each aggObjectDescriptor In originalProperties
	                    If Not (aggObjectDescriptor.Attributes(GetType(IntroduceObjectAttribute)) Is Nothing) Then
	                        Try
	                            'This can be a recursive method to extract property values even deeper.
	                            Dim subObjectType As Type = aggObjectDescriptor.PropertyType
	                            Dim desc As PropertyDescriptor
	                            For Each desc In TypeDescriptor.GetProperties(subObjectType)
	                                If Telerik.Web.UI.RadGrid.IsBindableType(desc.PropertyType) Then
	                                    Dim descriptor As New AggregatedObjectPropertyDescriptor(aggObjectDescriptor.Name, desc)
	                                    res.Add(descriptor)
	                                End If
	                            Next desc
	               Catch Else
	                        End Try
	                        'Is object's getter throws, just ignore
	                    ElseIf Not (aggObjectDescriptor.Attributes(GetType(PresentationHidden)) Is Nothing) Then
	                        res.Remove(aggObjectDescriptor)
	                    End If
	                Next aggObjectDescriptor
	                Return res
	            End Function 'GetExtendedProperties
	
	            Public Overloads Shared Function GetExtendedProperties(ByVal sourceType As Type) As PropertyDescriptorCollection
	                Dim originalProperties As PropertyDescriptorCollection = TypeDescriptor.GetProperties(sourceType)
	                Return GetExtendedProperties(originalProperties)
	            End Function 'GetExtendedProperties
	        End Class 'CustomTypeDescriptorHelper
	
	        Friend Class AggregatedObjectPropertyDescriptor
	            Inherits PropertyDescriptor
	            Private parentPropertyName As String
	            Private subPropertyDesc As PropertyDescriptor
	            Private Const SubPropertySplitter As String = "_"
	
	            Friend Sub New(ByVal parentPropertyName As String, ByVal subPropertyDesc As PropertyDescriptor)
	                MyBase.New(parentPropertyName + SubPropertySplitter + subPropertyDesc.Name, CType(Nothing, Attribute()))
	                Me.subPropertyDesc = subPropertyDesc
	                Me.parentPropertyName = parentPropertyName
	            End Sub 'New
	
	            Public Overrides Function CanResetValue(ByVal component As Object) As Boolean
	                Throw New Exception("The method or operation is not implemented.")
	            End Function 'CanResetValue
	
	            Public Overrides ReadOnly Property ComponentType() As Type
	                Get
	                    Throw New Exception("The method or operation is not implemented.")
	                End Get
	            End Property
	            Public Overrides Function GetValue(ByVal component As Object) As Object
	                Return subPropertyDesc.GetValue(DataBinder.GetPropertyValue(component, parentPropertyName))
	            End Function 'GetValue
	
	            Public Overrides ReadOnly Property IsReadOnly() As Boolean
	                Get
	                    Return subPropertyDesc.IsReadOnly
	                End Get
	            End Property
	
	            Public Overrides ReadOnly Property PropertyType() As Type
	                Get
	                    Return subPropertyDesc.PropertyType
	                End Get
	            End Property
	
	            Public Overrides Sub ResetValue(ByVal component As Object)
	                Throw New Exception("The method or operation is not implemented.")
	            End Sub 'ResetValue
	
	            Public Overrides Sub SetValue(ByVal component As Object, ByVal value As Object)
	                subPropertyDesc.SetValue(DataBinder.GetPropertyValue(component, parentPropertyName), value)
	            End Sub 'SetValue
	
	            Public Overrides Function ShouldSerializeValue(ByVal component As Object) As Boolean
	                Throw New Exception("The method or operation is not implemented.")
	            End Function 'ShouldSerializeValue
	        End Class 'AggregatedObjectPropertyDescriptor
	    End Namespace 'BusinessObjects 
````
>end

## CustomTypeDescriptorHelper

>tabbedCode

````C#
	     
	using System;
	using System.ComponentModel;
	using System.Web.UI;
	
	namespace BusinessObjects
	{
	internal class IntroduceObjectAttribute : Attribute
	{
	}
	   internal class PresentationHidden : Attribute
	   {
	   }
	internal class CustomTypeDescriptorHelper
	{
	 public static PropertyDescriptorCollection GetExtendedProperties(PropertyDescriptorCollection originalProperties)
	 {
	  PropertyDescriptor[] originalArray = new PropertyDescriptor[originalProperties.Count];
	  originalProperties.CopyTo(originalArray, 0);
	  PropertyDescriptorCollection res = new PropertyDescriptorCollection(originalArray, false);
	  foreach (PropertyDescriptor aggObjectDescriptor in originalProperties)
	  {
	   if (aggObjectDescriptor.Attributes[typeof(IntroduceObjectAttribute)] != null)
	   {
	    try
	    {
	                       //This can be a recursive method to extract property values even deeper.
	     Type subObjectType = aggObjectDescriptor.PropertyType;
	     foreach (PropertyDescriptor desc in TypeDescriptor.GetProperties(subObjectType))
	     {
	       if (Telerik.Web.UI.RadGrid.IsBindableType(desc.PropertyType))
	      {
	       AggregatedObjectPropertyDescriptor descriptor = new AggregatedObjectPropertyDescriptor(aggObjectDescriptor.Name, desc);
	       res.Add(descriptor);
	      }
	     }
	    }
	    catch
	    {
	     //Is object's getter throws, just ignore
	    }
	   }
	                else
	                    if (aggObjectDescriptor.Attributes[typeof(PresentationHidden)] != null)
	               {
	                   res.Remove(aggObjectDescriptor);
	               }
	  }
	  return res;
	 }
	 public static PropertyDescriptorCollection GetExtendedProperties(Type sourceType)
	 {
	  PropertyDescriptorCollection originalProperties = TypeDescriptor.GetProperties(sourceType);
	  return GetExtendedProperties(originalProperties);
	 }
	}
	internal class AggregatedObjectPropertyDescriptor : PropertyDescriptor
	{
	 private string parentPropertyName;
	 private PropertyDescriptor subPropertyDesc;
	        private const string SubPropertySplitter = "_";
	 internal AggregatedObjectPropertyDescriptor( string parentPropertyName, PropertyDescriptor subPropertyDesc)
	           : base(parentPropertyName + SubPropertySplitter + subPropertyDesc.Name, (Attribute[])null)
	 {
	  this.subPropertyDesc = subPropertyDesc;
	  this.parentPropertyName = parentPropertyName;
	 }
	 public override bool CanResetValue(object component)
	 {
	  throw new Exception("The method or operation is not implemented.");
	 }
	 public override Type ComponentType
	 {
	  get { throw new Exception("The method or operation is not implemented."); }
	 }
	 public override object GetValue(object component)
	 {
	  return subPropertyDesc.GetValue(DataBinder.GetPropertyValue(component, parentPropertyName));
	 }
	 public override bool IsReadOnly
	 {
	  get
	  {
	   return subPropertyDesc.IsReadOnly;
	  }
	 }
	 public override Type PropertyType
	 {
	  get
	  {
	   return subPropertyDesc.PropertyType;
	  }
	 }
	 public override void ResetValue(object component)
	 {
	  throw new Exception("The method or operation is not implemented.");
	 }
	 public override void SetValue(object component, object value)
	 {
	  subPropertyDesc.SetValue(DataBinder.GetPropertyValue(component, parentPropertyName), value);
	 }
	 public override bool ShouldSerializeValue(object component)
	 {
	  throw new Exception("The method or operation is not implemented.");
	 }
	}
	} 	
````
````VB.NET
	    Imports System
	Imports System.ComponentModel
	Imports System.Web.UI
	
	Namespace BusinessObjects
	    _
	        Friend Class IntroduceObjectAttribute
	            Inherits Attribute
	        End Class 'IntroduceObjectAttribute
	    _
	        Friend Class PresentationHidden
	            Inherits Attribute
	        End Class 'PresentationHidden
	    _
	        Friend Class CustomTypeDescriptorHelper
	            Public Overloads Shared Function GetExtendedProperties(ByVal originalProperties As PropertyDescriptorCollection) As PropertyDescriptorCollection
	                Dim originalArray(originalProperties.Count) As PropertyDescriptor
	                originalProperties.CopyTo(originalArray, 0)
	                Dim res As New PropertyDescriptorCollection(originalArray, False)
	                Dim aggObjectDescriptor As PropertyDescriptor
	                For Each aggObjectDescriptor In originalProperties
	                    If Not (aggObjectDescriptor.Attributes(GetType(IntroduceObjectAttribute)) Is Nothing) Then
	                        Try
	                            'This can be a recursive method to extract property values even deeper.
	                            Dim subObjectType As Type = aggObjectDescriptor.PropertyType
	                            Dim desc As PropertyDescriptor
	                            For Each desc In TypeDescriptor.GetProperties(subObjectType)
	                                If Telerik.Web.UI.RadGrid.IsBindableType(desc.PropertyType) Then
	                                    Dim descriptor As New AggregatedObjectPropertyDescriptor(aggObjectDescriptor.Name, desc)
	                                    res.Add(descriptor)
	                                End If
	                            Next desc
	                        Catch
	                        End Try
	                        'Is object's getter throws, just ignore
	                    Else
	                        If Not (aggObjectDescriptor.Attributes(GetType(PresentationHidden)) Is Nothing) Then
	                            res.Remove(aggObjectDescriptor)
	                        End If
	                    End If
	                Next aggObjectDescriptor
	                Return res
	            End Function 'GetExtendedProperties
	
	            Public Overloads Shared Function GetExtendedProperties(ByVal sourceType As Type) As PropertyDescriptorCollection
	                Dim originalProperties As PropertyDescriptorCollection = TypeDescriptor.GetProperties(sourceType)
	                Return GetExtendedProperties(originalProperties)
	            End Function 'GetExtendedProperties
	        End Class 'CustomTypeDescriptorHelper
	    _
	        Friend Class AggregatedObjectPropertyDescriptor
	            Inherits PropertyDescriptor
	            Private parentPropertyName As String
	            Private subPropertyDesc As PropertyDescriptor
	            Private SubPropertySplitter As String = "_"
	
	            Friend Sub New(ByVal parentPropertyName As String, ByVal subPropertyDesc As PropertyDescriptor)
	                MyBase.New(parentPropertyName + SubPropertySplitter + subPropertyDesc.Name, CType(Nothing, Attribute()))
	                Me.subPropertyDesc = subPropertyDesc
	                Me.parentPropertyName = parentPropertyName
	            End Sub 'New
	
	            Public Overrides Function CanResetValue(ByVal component As Object) As Boolean
	                Throw New Exception("The method or operation is not implemented.")
	            End Function 'CanResetValue
	
	            Public Overrides ReadOnly Property ComponentType() As Type
	                Get
	                    Throw New Exception("The method or operation is not implemented.")
	                End Get
	            End Property
	            Public Overrides Function GetValue(ByVal component As Object) As Object
	                Return subPropertyDesc.GetValue(DataBinder.GetPropertyValue(component, parentPropertyName))
	            End Function 'GetValue
	
	            Public Overrides ReadOnly Property IsReadOnly() As Boolean
	                Get
	                    Return subPropertyDesc.IsReadOnly
	                End Get
	            End Property
	
	            Public Overrides ReadOnly Property PropertyType() As Type
	                Get
	                    Return subPropertyDesc.PropertyType
	                End Get
	            End Property
	
	            Public Overrides Sub ResetValue(ByVal component As Object)
	                Throw New Exception("The method or operation is not implemented.")
	            End Sub 'ResetValue
	
	            Public Overrides Sub SetValue(ByVal component As Object, ByVal value As Object)
	                subPropertyDesc.SetValue(DataBinder.GetPropertyValue(component, parentPropertyName), value)
	            End Sub 'SetValue
	
	            Public Overrides Function ShouldSerializeValue(ByVal component As Object) As Boolean
	                Throw New Exception("The method or operation is not implemented.")
	            End Function 'ShouldSerializeValue
	        End Class 'AggregatedObjectPropertyDescriptor
	    End Namespace 'BusinessObjects 
````
>end

This implementation also allows __RadGrid__ and __GridView__ (and other similar) controls to bind to properties of "sub-objects", which appear as properties of the business object, by just specifying the [IntroduceObject] attribute. The implementation of the __ICustomTypeDescriptor__ interface for the business object programmatically constructs a new set of properties for the type, containing the properties of the sub-objects in a "flat" manner. This is similar to what the __DataRowView__ does, for instance.

The implementation of __ITypedList__ for the business-objects collection allows __RadGrid__ and __GridView__ to enumerate the properties of the business objects in the collection. This also allows __RadGrid__ to automatically sort, group-by and filter these extended properties.

## Binding to a collections of dynamic objects

When you need to bind the grid control to a collection of dynamic objects it is important to know that only template columns are supported. In addition you should take in mind that the DataItem should be cast as a dynamic type and the dynamic object property name should be referenced in order for the binding expressions to work.

>caution  __Sorting__ , __Grouping__ and __Filtering__ are not supported when the grid is bound to a collection of dynamic objects.
>


````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" AutoGenerateColumns="false">
	            <MasterTableView>
	                <Columns>
	                    <telerik:GridTemplateColumn>
	                        <ItemTemplate>
	                            <%# (Container.DataItem as dynamic).RecordNumber %>
	                        </ItemTemplate>
	                    </telerik:GridTemplateColumn>
	                </Columns>
	            </MasterTableView>
	        </telerik:RadGrid>
````



>tabbedCode

````C#
	protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
	    {
	        RadGrid1.DataSource = GetData();
	    }
	
	    private List<dynamic> GetData()
	    {
	        List<dynamic> dynList = new List<dynamic>();
	        Enumerable.Range(1, 10).ToList().ForEach(delegate(int p)
	        {
	            dynamic currentItem = new DynamicObj();
	            currentItem.RecordNumber = p;
	            dynList.Add(currentItem);
	        });
	        return dynList;
	    }
	
	    public class DynamicObj : DynamicObject
	    {
	        Dictionary<string, object> internalData;
	
	        public DynamicObj()
	        {
	            internalData = new Dictionary<string, object>();
	        }
	
	        public override bool TrySetMember(SetMemberBinder binder, object value)
	        {
	            if (!internalData.ContainsKey(binder.Name))
	            {
	                internalData.Add(binder.Name, value);
	            }
	            else
	            {
	                internalData[binder.Name] = value;
	            }
	            return true;
	        }
	
	        public override bool TryGetMember(GetMemberBinder binder, out object result)
	        {
	            if (internalData.ContainsKey(binder.Name))
	            {
	                result = internalData[binder.Name];
	                return true;
	            }
	            result = null;
	            return false;
	        }
	    }
````
````VB.NET
		Protected Sub RadGrid1_NeedDataSource(sender As Object, e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
	        RadGrid1.DataSource = GetData()
	    End Sub
	
	    Private Function GetData() As List(Of Object)
	        Dim dynList As New List(Of Object)()
	        Enumerable.Range(1, 10).ToList().ForEach(Sub(p As Integer)
	                                                     Dim currentItem As Object = New DynamicObj()
	                                                     currentItem.RecordNumber = p
	                                                     dynList.Add(currentItem)
	                                                 End Sub)
	        Return dynList
	    End Function
	
	    Public Class DynamicObj
	        Inherits DynamicObject
	        Private internalData As Dictionary(Of String, Object)
	
	        Public Sub New()
	            internalData = New Dictionary(Of String, Object)()
	        End Sub
	
	        Public Overrides Function TrySetMember(binder As SetMemberBinder, value As Object) As Boolean
	            If Not internalData.ContainsKey(binder.Name) Then
	                internalData.Add(binder.Name, value)
	            Else
	                internalData(binder.Name) = value
	            End If
	            Return True
	        End Function
	
	        Public Overrides Function TryGetMember(binder As GetMemberBinder, ByRef result As Object) As Boolean
	            If internalData.ContainsKey(binder.Name) Then
	                result = internalData(binder.Name)
	                Return True
	            End If
	            result = Nothing
	            Return False
	        End Function
	    End Class
````
>end
