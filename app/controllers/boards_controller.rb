class BoardsController < ApplicationController

  def index
    @boards = current_user.boards # TODO: create method to return owned and member boards

    respond_to do |format|
      format.json { render json: @boards }
    end
  end
end
