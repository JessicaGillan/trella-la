class CardsController < ApplicationController
  before_action :set_list, only: [:index, :create]

  def index
    @cards = @list.cards.order(position: :asc)

    respond_to do |format|
      format.json { render json: @cards.to_json(include: :activities) }
    end
  end

  def show
    @card = Card.find_by(id: params[:id])

    respond_to do |format|
      format.json { render json: @card.to_json(include: :activities) }
    end
  end

  def create
    @card = @list.cards.create(card_params)

    if @card.save
      respond_to do |format|
        format.json { render json: @card.to_json(include: :activities) }
      end
    else
      respond_to do |format|
        format.json { render json: @card }
      end
    end
  end

  def update
    @card = Card.find_by(id: params[:id])

    if @card.update(card_params)
      respond_to do |format|
        format.json { render json: @card.to_json(include: :activities) }
      end
    else
      respond_to do |format|
        format.json { render json: @card }
      end
    end
  end

  def destroy
    @card = Card.find_by(id: params[:id])

    if @card.destroy
      respond_to do |format|
        format.json { render json: @card }
      end
    else
      respond_to do |format|
        format.json { render json: @card.to_json(include: :activities) }
      end
    end

  end

  private

    def card_params
      params.require(:card).permit(:title, :description, :position, :completed)
    end

    def set_list
      @list = List.find_by_id(params[:list_id])
    end
end
