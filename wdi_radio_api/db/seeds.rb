# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all
Album.destroy_all
Artist.destroy_all

artists = [
  'Tritonal',
  'Galantis',
  'Ellie Goulding',
  'Jay Z',
  'Katy Perry',
  'Chainsmokers',
  'Daft Punk',
  'Taylor Swift',
  'J. Cole',
  'Kanye West',
  'Coldplay',
  'Diplo'
]

puts 'Artists------'
artists.each do |artist|
  artist_data = JSON.parse(HTTParty.get("https://itunes.apple.com/search?term=#{artist}&media=music&entity=musicArtist"))["results"][0]
  new_artist = Artist.create!(
    name: artist_data["artistName"],
    genre: artist_data["primaryGenreName"],
    itunes_id: artist_data["artistId"]
  )
  puts new_artist.name
end

puts 'Albums------'
Artist.all.each do |artist|
  album_list = JSON.parse(HTTParty.get("https://itunes.apple.com/lookup?id=#{artist.itunes_id}&media=music&entity=album"))["results"]
  album_list.shift
  album_list.sample(5).each do |album|
    new_album = Album.create!(
      name: album["collectionName"],
      image_url: album["artworkUrl100"],
      itunes_id: album["collectionId"],
      artist: artist
    )
    puts new_album.name
  end
end

puts 'Songs------'
Album.all.each do |album|
  song_list = JSON.parse(HTTParty.get("https://itunes.apple.com/lookup?id=#{album.itunes_id}&media=music&entity=song"))["results"]
  song_list.shift
  song_list.sample(3).each do |song|
    new_song = Song.create!(
      name: song["trackName"],
      preview_url: song["previewUrl"],
      itunes_id: song["trackId"],
      album: album,
      artist: album.artist
    )
    puts new_song.name
  end
end
