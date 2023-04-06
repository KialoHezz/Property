module PropertiesHelper
    def property_thumbnail property
        img = property.photo.present? ? property.photo.thumb.url : "img.jpeg"
        image_tag img, class: "property-thumb"
    end
end
