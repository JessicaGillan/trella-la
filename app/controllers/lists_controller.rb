class ListsController < ApplicationController
  before_action :setBoard

  def index
    @lists = @board.lists.order(created_at: :desc)

    respond_to do |format|
      format.json { render json: @lists.to_json(include: :cards) }
    end
  end

  def create
    @list = @board.lists.create(list_params)

    if @list.save
      respond_to do |format|
        format.json { render json: @list.to_json(include: :cards) }
      end
    else
      respond_to do |format|
        format.json { render json: @list }
      end
    end
  end

  def update
    @list = List.find_by(id: params[:id])

    if @list.update(list_params)
      respond_to do |format|
        format.json { render json: @list.to_json(include: :cards) }
      end
    else
      respond_to do |format|
        format.json { render json: @list }
      end
    end
  end

  def destroy
    @list = List.find_by(id: params[:id])

    if @list.destroy
      respond_to do |format|
        format.json { render json: @list }
      end
    else
      respond_to do |format|
        format.json { render json: @list.to_json(include: :cards) }
      end
    end

  end

  private

    def list_params
      params.require(:list).permit(:name, :description)
    end

    def setBoard
      @board = Board.find_by_id(params[:board_id])
    end
end
