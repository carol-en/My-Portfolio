# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bookmark.create([
    {
        site_name: "Class 101",
        category: "Paid courses",
        url: "https://en.class101.net/",
        img: "https://i.imgur.com/exHWnIY.png",
        description: "Korea based programs for a variety of art and cooking interests. Paid."
    },

    {
        site_name: "Art Station",
        category: "Portfolio & Workshops",
        url: "https://www.artstation.com/",
        img:"https://i.imgur.com/8zHMS4v.png",
        description: "Offers paid workshops in a variety of art fields, both traditional and ditial."
    },

    {
        site_name: "New Masters Academy",
        category: "Online Workshops",
        url: "https://www.nma.art/",
        img:  "https://i.imgur.com/Fqik7Ak.png",
        description: "Offers different levels of paid subscriptions for classes and even personaly mentorying. Main focus is traditional."
    },

    {
        site_name: "Cube Brush",
        category: "Online Tools & Resources",
        url: "https://cubebrush.co",
        img: "https://i.imgur.com/6PRPFYG.png",
        description: "Mainly a resource site but features many (paid) tutorials. Focus is on 3D digitial sculping but art fundamentals exist."
    },

    {
        site_name: "How to Draw Comics",
        category: "Videos, podcasts, and tutorials",
        url: "https://www.howtodrawcomics.net/",
        img: "https://i.imgur.com/YsI8dBZ.png",
        description: "Main focus is comics, digital & tradtionals. Focuss on tutorials and classes, some are free, some are paid."
    }
])