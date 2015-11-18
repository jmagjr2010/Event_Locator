Ext.define('Event_Locator.store.Events', {
    extend: 'Ext.data.Store',

    alias: 'store.events',

    fields: [
        'logo', 'name', 'url', 'start_date', 'end_date', 'location', 'description'
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});