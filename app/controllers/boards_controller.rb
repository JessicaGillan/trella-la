class BoardsController < ApplicationController

  def index
    @boards = current_user.owned_boards # TODO: create method to return owned and member boards

    respond_to do |format|
      format.json { render json: @boards }
    end
  end

  def create
    @board = current_user.owned_boards.create(board_params)
    @board.save

    respond_to do |format|
      format.json { render json: @board }
    end
  end

  def destroy
    @board = Board.find_by(id: params[:id])

    if @board.destroy
      respond_to do |format|
        format.json { render json: @board }
      end
    else
      respond_to do |format|
        format.json { render json: @board.to_json(include: :owner) }
      end
    end

  end

  def update
    @board = Board.find_by(id: params[:id])

    if @board.update(board_params)
      respond_to do |format|
        format.json { render json: @board.to_json(include: :owner) }
      end
    else
      respond_to do |format|
        format.json { render json: @board }
      end
    end
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end
end
