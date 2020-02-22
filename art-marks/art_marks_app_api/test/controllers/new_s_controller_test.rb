require 'test_helper'

class NewSControllerTest < ActionDispatch::IntegrationTest
  setup do
    @new_ = new_s(:one)
  end

  test "should get index" do
    get new_s_url, as: :json
    assert_response :success
  end

  test "should create new_" do
    assert_difference('New.count') do
      post new_s_url, params: { new_: { bookmarks: @new_.bookmarks, category: @new_.category, description: @new_.description, img: @new_.img, site_name: @new_.site_name, url: @new_.url } }, as: :json
    end

    assert_response 201
  end

  test "should show new_" do
    get new__url(@new_), as: :json
    assert_response :success
  end

  test "should update new_" do
    patch new__url(@new_), params: { new_: { bookmarks: @new_.bookmarks, category: @new_.category, description: @new_.description, img: @new_.img, site_name: @new_.site_name, url: @new_.url } }, as: :json
    assert_response 200
  end

  test "should destroy new_" do
    assert_difference('New.count', -1) do
      delete new__url(@new_), as: :json
    end

    assert_response 204
  end
end
