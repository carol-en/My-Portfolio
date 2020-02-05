class Bookmark < ApplicationRecord
    validates :site_name, :url, :img, :description, :category, presence: true
end
