class Api::StuffsController < ApplicationController
  before_action :set_stuff, only: [:show, :update, :destroy]

  def index
    render json: Stuff.all
  end

  def show
    render json: @stuff
  end

  def create
    stuff = Stuff.new(stuff_params)

    if stuff.save
      render json: stuff
    else
      render json: stuff.errors, status: 418
    end
  end

  def update
    if @stuff.update(stuff_params)
      render json: @stuff
    else
      render json: @stuff.errors, status: 418
    end
  end

  def destroy
    @stuff.destroy
  end

  private
    def set_stuff
      @stuff = Stuff.find(params[:id])
    end

    def stuff_params
      params.require(:stuff).permit(:name, :description, :price, :department)
    end
end
