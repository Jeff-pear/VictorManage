/*
 * File: app/store/PortalAdvStore.js
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

Ext.define('MyApp.store.PortalAdvStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'PortalAdvStore',
            proxy: {
                type: 'ajax',
                url: '/Home/AdvManageGet',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            },
            fields: [
                {
                    name: 'advId'
                },
                {
                    name: 'advertisingTitle'
                },
                {
                    name: 'advType'
                },
                {
                    name: 'shopId'
                },
                {
                    name: 'content'
                },
                {
                    name: 'pictureUrl'
                },
                {
                    name: 'power'
                },
                {
                    name: 'addTime'
                },
                {
                    name: 'endTime'
                }
            ]
        }, cfg)]);
    }
});