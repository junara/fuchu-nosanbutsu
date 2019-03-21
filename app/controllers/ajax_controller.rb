class AjaxController < ApplicationController
  ITEMS = [
      { name: 'トマト' },
      { name: 'きゅうり' },
      { name: 'なす' },
      { name: 'ほうれん草' },
      { name: '乳' },
      { name: 'じゃがいも' },
      { name: 'みそ' },
      { name: '梨' },
      { name: 'ピーマン' },
      { name: 'おくら' },
  ]

  def item_autocomplete
    render json: { data: item_candidates(params[:keyword]) }
  end

  private

  def item_candidates(keyword)
    ITEMS.select do |item|
      item[:name].include?(keyword)
    end
  end
end
