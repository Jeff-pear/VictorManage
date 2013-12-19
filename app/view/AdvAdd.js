/*
 * File: app/view/AdvAdd.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.AdvAdd', {
    extend: 'Ext.window.Window',
    alias: 'widget.advadd',

    height: 300,
    width: 374,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: '新增广告',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '广告标题',
                            name: 'advertisingTitle',
                            enforceMaxLength: true,
                            maxLength: 128
                        },
                        me.processAdvType({
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: '类型',
                            name: 'advType',
                            allowBlank: false,
                            emptyText: '请选择',
                            editable: false,
                            displayField: 'Name',
                            hiddenName: 'advType',
                            valueField: 'Value',
                            listeners: {
                                change: {
                                    fn: me.onComboboxChange,
                                    scope: me
                                }
                            }
                        }),
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: '商铺',
                            name: 'shopId',
                            editable: false,
                            displayField: 'shopName',
                            hiddenName: 'shopId',
                            store: 'ShopListStore',
                            valueField: 'shopId'
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: '权值',
                            name: 'power',
                            value: 5,
                            enforceMaxLength: true,
                            maxLength: 1,
                            maxValue: 5,
                            minValue: 0
                        },
                        {
                            xtype: 'filefield',
                            width: 338,
                            fieldLabel: '商铺详细页图片',
                            name: 'pictureUrl',
                            buttonText: '浏览...',
                            clearOnSubmit: false
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: '广告体',
                            name: 'content',
                            enforceMaxLength: true,
                            maxLength: 300
                        },
                        {
                            xtype: 'button',
                            icon: 'data/img/save.gif',
                            text: '确认',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 20',
                            icon: 'data/img/reset.gif',
                            text: '重置'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    processAdvType: function(config) {
        config.store = Ext.create('Ext.data.Store', {
            autoDestroy: true,
            fields: [
            {type: 'string', name: 'Name'},
            {type: 'string', name: 'Value'}
            ],
            data: [
            {"Name":"头部广告","Value":"1"},
            {"Name":"中部广告","Value":"2"},
            {"Name":"下部广告","Value":"3"}]
        });
        return config;
    },

    onComboboxChange: function(field, newValue, oldValue, eOpts) {
        if(newValue == '2' || newValue == '3'){
            this.down('[name=shopId]').setValue();
            this.down('[name=shopId]').setDisabled(true);
        }else{
            this.down('[name=shopId]').setDisabled(false);
        }
    },

    onButtonClick: function(button, e, eOpts) {
        var form = this.down('form').getForm();
        var values = form.getValues();

        var UserFilePath = this.down('form [name=pictureUrl]').getValue();
        if(UserFilePath.length>0){
            if(!CheckFileExt(UserFilePath,/.jpg|.gif|.png|.bmp/i))
            {
                Ext.Msg.alert('错误','商铺详细页图片-您上传的文件不是图片类型，请重新选择！');
                return;
            }
        }
        UserFilePath = this.down('form [name=pictureUrl]').getValue();
        if(form.isValid()){
            form.submit({
                url:"/Home/AdvAdd",
                params: values,
                method:'POST',
                scope: this,
                success:function(f,action) {
                    Ext.Msg.alert('提示:','成功');
                    this.close();
                    Ext.ComponentQuery.query('portaladv grid')[0].getStore().load();
                },
                failure:function(f,action){
                    Ext.Msg.alert(f,action);
                }
            });
        }
        //判断是否是图片类型
        function CheckFileExt(extstr,exg)
        {
            var extstr = extstr.substring(extstr.lastIndexOf(".")).toLowerCase();
            if (extstr.match(exg) == null) {
                return false;
            }
            return true;
        }

    }

});