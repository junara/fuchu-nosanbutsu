import $ from 'jquery';

require('selectize');

const autocomplete_path = (query) => {
  return `/ajax/item_autocomplete?keyword=${encodeURIComponent(query)}`
};

const addSelectize = () => {
  $('#store_search').selectize({
    searchField: ['name'],
    labelField: 'name',
    valueField: 'name',
    closeAfterSelect: true,
    create: true,
    render: {
      option: function (item, escape) {
        return `<div><span>${escape(item.name ? item.name : '')}</span></div>`
      }
    },
    load: function (query, callback) {
      if (!query.length) return callback();
      $.ajax({
        url: autocomplete_path(query),
        type: 'GET',
        error: function () {
          callback()
        },
        success: function (res) {
          callback(res.data)
        }
      })
    }
  })
};

const initialize = function () {
  addSelectize();
};

window.onload = function () {
  initialize();
};
