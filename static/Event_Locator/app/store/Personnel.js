Ext.define('Event_Locator.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'city', 'type', 'day', 'time'
    ],

    data: { items: [
        { name: 'Cochella!',   city: "Pomona",  type: "Concert",     day: "October 30",  time: "9am - 5pm"        },
        { name: 'Worf',        city: "Rancho",  type: "Rally",       day: "November 29", time: "All Day"          },
        { name: 'SWAG PARTY!', city: "LA",      type: "Party",       day: "December 1",  time: "4:20am - 4:20 pm" },
        { name: 'LAN Session', city: "Fontana", type: "Video Games", day: "December 14", time: "All Day"          }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
