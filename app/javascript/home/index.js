import $ from 'jquery';

require('selectize');

const url = (query) => {
  return `/ajax/item_autocomplete?keyword=${encodeURIComponent(query)}`
};

const items = (data) => {
  return data.map((item) => {
    return {
      text: item['attributes']['name'],
      label: item['attributes']['name'],
      value: item['attributes']['name']
    }
  })
};

const renderOption = (item, escape) => {
  return `<div><span>${escape(item.text ? item.text : '')}</span></div>`
};

const renderOptionCreate = (item, escape) => {
  return `<div><span>新規キーワード... </span><span>${escape(item.input) ? item.input : ''}</span></div>`
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
    searchField: ['text'], // 入力値のフィルター対象
    labelField: 'label', // 表示させるラベル
    valueField: 'value', // inputのvalue
    closeAfterSelect: true,
    create: true, // 新規単語を追加を許可
    createOnBlur: true, // 画面外をタッチすると新規単語を追加
    render: {
      option: (item, escape) => {
        return renderOption(item, escape)
      },
      option_create: (item, escape) => {
        return renderOptionCreate(item, escape)
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
