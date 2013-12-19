/*
 * File: app/controller/ShopController.js
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

Ext.define('MyApp.controller.ShopController', {
    extend: 'Ext.app.Controller',

    stores: [
        'ShopListStore',
        'TypeStore',
        'RecShopStore',
        'RecShopAddListStore'
    ],
    views: [
        'ShopManagement',
        'RecShop',
        'ShopAdd'
    ],

    refs: [
        {
            ref: 'shoplist',
            selector: 'shoplist'
        },
        {
            ref: 'recshop',
            selector: 'recshop'
        }
    ]
});