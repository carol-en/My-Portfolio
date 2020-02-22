class NewSController < ApplicationController
  before_action :set_new_, only: [:show, :update, :destroy]

  # GET /new_s
  def index
    @new_s = New.all

    render json: @new_s
  end

  # GET /new_s/1
  def show
    render json: @new_
  end

  # POST /new_s
  def create
    @new_ = New.new(new__params)

    if @new_.save
      render json: @new_, status: :created, location: @new_
    else
      render json: @new_.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /new_s/1
  def update
    if @new_.update(new__params)
      render json: @new_
    else
      render json: @new_.errors, status: :unprocessable_entity
    end
  end

  # DELETE /new_s/1
  def destroy
    @new_.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_new_
      @new_ = New.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def new__params
      params.require(:new_).permit(:bookmarks, :site_name, :category, :url, :img, :description)
    end
end
