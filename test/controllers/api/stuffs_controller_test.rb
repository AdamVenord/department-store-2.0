require 'test_helper'

class Api::StuffsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_stuffs_index_url
    assert_response :success
  end

  test "should get show" do
    get api_stuffs_show_url
    assert_response :success
  end

  test "should get create" do
    get api_stuffs_create_url
    assert_response :success
  end

  test "should get update" do
    get api_stuffs_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_stuffs_destroy_url
    assert_response :success
  end

end
