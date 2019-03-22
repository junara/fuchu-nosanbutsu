import $ from 'jquery';

require('selectize');

const url = (query) => {
  return `/ajax/item_autocomplete?keyword=${encodeURIComponent(query)}`
};

const items = (data) => {
  return data.map((item) => {
    return {
      title: item['attributes']['name']
    }
  })
};

const renderOption = (item, escape) => {
  return `<div><span>${escape(item.title ? item.title : '')}</span></div>`
};

const getAutocomplete = (query, callback) => {
  $.ajax({
    url: url(query),
    type: 'GET',
    error: () => {
      callback()
    },
    success: (res) => {
      callback(items(res.data))
    }
  })
};

const addSelectize = () => {
  $('#store_search').selectize({
    searchField: ['title'],
    labelField: 'title',
    valueField: 'title',
    closeAfterSelect: true,
    create: true,
    render: {
      option: (item, escape) => {
        return renderOption(item, escape)
      }
    },
    load: (query, callback) => {
      if (!query.length) return callback();
      getAutocomplete(query, callback)
    }
  })
};

const initialize = function () {
  addSelectize();
};

window.onload = function () {
  initialize();
};
