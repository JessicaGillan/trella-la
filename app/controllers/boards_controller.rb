class BoardsController < ApplicationController

  def index
    @boards = current_user.boards # TODO: create method to return owned and member boards

    respond_to do |format|
      format.json { render json: @boards }
    end
  end

  def create
    @board = current_user.boards.create(board_params)

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
        format.json { render json: @board.to_json(include: :user) }
      end
    end

  end

  # def update
  #   @pin = Pin.find_by(id: params[:id])
  #
  #   if @pin.update(pin_params)
  #     respond_to do |format|
  #       format.json { render json: @pin.to_json(include: :user) }
  #     end
  #   else
  #     respond_to do |format|
  #       format.json { render json: @pin }
  #     end
  #   end
  # end

  private

  def board_params
    params.require(:board).permit(:name)
  end
end
