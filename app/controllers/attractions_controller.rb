class AttractionsController < ApplicationController
  respond_to :json

  def index
    @user = User.find(params[:user_id])
    @attractions = @user.attractions

    respond_with @attractions
  end

end
