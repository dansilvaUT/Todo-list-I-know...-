class StaticController < ApplicationController
    def index
        render json: { info: "yo" }
    end
end