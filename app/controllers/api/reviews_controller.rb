class Api::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :set_stuff

  def index
    render json: @stuff.reviews
  end

  def show
  end

  def create
    @review = @stuff.Reviews.new(stuff_params)

    if review.save
      render json: review
    else
      render json: review.errors, status: 418
    end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: 418
    end
  end

  def destroy
    @review.destroy
  end

  private

  def set_stuff
    @stuff = Stuff.find(params[:stuff_id])
  end

    def set_review
      @review = Review.find(params[:id])
    end

    def review_params
      params.require(:review).permit(:name, :description, :price, :department)
    end
end
