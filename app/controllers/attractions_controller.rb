class AttractionsController < ApplicationController
  respond_to :json

  def index
    @user = User.find(params[:user_id])
    @attractions = @user.attractions

    respond_with @attractions
  end

  def create
    @user = User.find(params[:user_id])
    @attraction = @user.attractions.create(attraction_params)

    respond_with @user, @attraction
  end

  private

  def attraction_params
    params.require(:attraction).permit(:title, :media, :schedule)
  end

end
