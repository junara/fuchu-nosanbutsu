class HomeController < ApplicationController
  def index
    @stores = Store.ransack(description_cont_all: split_queries(params[:keyword])).result
  end

  private

  def split_queries(str)
    return nil unless str
    str.split(',')
  end
end