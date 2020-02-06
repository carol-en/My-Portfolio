class WelcomeController < ApplicationController
    def index
        render json: { status: 200, message: "Art Marks API" }
    end
end
