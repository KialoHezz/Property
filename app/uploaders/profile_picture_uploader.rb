# encoding utf-8

class ProfilePictureUploader < CarrierWave::Uploader::Base
    # Include RMagick or miniMagick support:
    # Include CarrierWave::RMagick
    include CarrierWave::MiniMagick
    # Choose what kind of storage to use for this Uploader:
    storage:file
    # storage :carrierwave

    # Override the directory where uploadded files will be stored.
    # This is a sensible default for uploaders that are meant to be mounted:
    def store_dir
        "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
    end

    # Provide a default URL as a default if there hasn't been a file uploaded:
    # Def default_url
    # # For Rails 3.1 + asset pipeline compatibility:
    #  # ActionController::Base.helpers.asset_path("fallback/"+ [version_name, "default.png"].compact.join('_'))
    # 
    #   "/images/fallback" + [version_name, "default.png"].compact.join('')
    # end

    # Process files as they are uploaded:
    # process :scale =>[200, 300]
    # 
    # def scale(width, height)
    #   #do something
    # end

    # create different version of uploaded files
    version :thumb do
        process :resize_to_fit => [20, 20]
    end

    # Add a wwhite list of extension which are allowed to be uploaded
    # For images you might use something like this:
    def extension_white_list
        %w(jpg jpeg gif png)
    end

    # Override the file of the uploaded files:
    # Avoid using model.id or version_name here, see uploader/store.rb for details
    # def filename
    #   "something.jpg" if original_filename
    # end
end