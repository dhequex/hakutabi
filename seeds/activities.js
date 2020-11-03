
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('activities').del()
      .then(function () {
        // Inserts seed entries
        return knex('activities').insert([
          {title: 'Fishing on an Iced lake', description: '10:00:00 PM', location:"", price:"", photo:''},
          {Open: '12:00:00 PM', Closing: '9:00:00 PM'},
          {Open: '10:00:00 AM', Closing: '9:30:00 PM'},
          {Open: '9:00:00 AM', Closing: '6:00:00 PM'},
          {Open: '10:00:00 AM', Closing: '10:00:00 PM'},
          {Open: '11:00:00 AM', Closing: '8:00:00 PM'},
          {Open: '10:00:00 AM', Closing: '4:30:00 PM'},
          {Open: '1:00:00 PM', Closing: '6:00:00 PM'},
          {Open: '10:00:00 AM', Closing: '10:00:00 PM'},
          {Open: '10:30:00 AM', Closing: '3:30:00 PM'},
          {Open: '11:00:00 AM', Closing: '10:00:00 PM'},
        ]);
      });
  };
  