class BookmarksController < ApplicationController
  before_action :set_bookmark, only: [ :update, :destroy]

  # GET /bookmarks
  def index
    @bookmarks = Bookmark.all.reverse

    render json: @bookmarks
  end

  # POST /bookmarks
  def create
    @bookmark = Bookmark.new(bookmark_params)

    if @bookmark.save
      render json: @bookmark, status: :created, location: @bookmark
    else
      render json: @bookmark.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bookmarks/1
  def update
    @bookmark.update(bookmark_params)
    render(json: {bookmark: @bookmark})
  end

  # DELETE /bookmarks/1
  def destroy
    @bookmark.destroy
    render(status: 204)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bookmark
      @bookmark = Bookmark.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def bookmark_params
      params.require(:bookmark).permit(:site_name, :category, :url, :img, :description)
    end
end
