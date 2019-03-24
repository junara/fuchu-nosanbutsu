class AjaxController < ApplicationController
  def item_autocomplete
    items = Item.ransack(name_or_name_hiragana_cont: params[:keyword]).result
    render json: ItemSerializer.new(items)
  end
end
