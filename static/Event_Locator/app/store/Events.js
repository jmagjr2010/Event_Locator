Ext.define('Event_Locator.store.Events', {
    extend: 'Ext.data.Store',

    alias: 'store.events',

    fields: [
        'name', 'url', 'start_date', 'description'
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});