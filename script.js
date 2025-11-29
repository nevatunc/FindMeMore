// Mood and genre options
const moodOptions = ["Energetic", "Emotional", "Calm", "Dark", "Fun"];

const genreOptions = {
  book: [
    "Science Fiction",
    "Fantasy",
    "Classic",
    "Personal Development",
    "Romance",
    "Mystery",
    "Thriller",
    "Historical",
    "Philosophy",
    "Young Adult",
    "Adventure",
    "Drama",
    "Mythology",
    "Satire",
  ],
  movie: [
    "Science Fiction",
    "Drama",
    "Action",
    "Animation",
    "Comedy",
    "Thriller",
    "Romance",
    "Horror",
    "Crime",
    "Adventure",
    "Fantasy",
  ],
  music: [
    "Pop",
    "Lo-fi",
    "Rock",
    "Soundtrack",
    "Hip-Hop",
    "Jazz",
    "Classical",
    "Electronic",
    "R&B",
    "Indie",
    "World",
  ],
};

// Book data seeds
const bookSeeds = [
  { id: 1, type: "book", title: "Dune", creator: "Frank Herbert", year: 1965, country: "International", genres: ["Science Fiction"], moods: ["Dark", "Calm"], tags: ["desert", "politics", "epic"], summary: "In a distant future, noble families fight for control of the desert planet Arrakis." },
  { id: 2, type: "book", title: "My Name is Red", creator: "Orhan Pamuk", year: 1998, country: "Turkey", genres: ["Historical", "Mystery"], moods: ["Calm", "Dark"], tags: ["Ottoman Empire", "art", "philosophy"], summary: "A historical mystery set in the Ottoman Empire, exploring art, faith, and identity." },
  { id: 3, type: "book", title: "The Forty Rules of Love", creator: "Elif Şafak", year: 2009, country: "Turkey", genres: ["Romance", "Philosophy"], moods: ["Emotional", "Calm"], tags: ["Rumi", "Sufism", "mysticism"], summary: "A modern editor discovers Sufi wisdom through the intertwined stories of Rumi and Shams." },
  { id: 4, type: "book", title: "The Hobbit", creator: "J.R.R. Tolkien", year: 1937, country: "International", genres: ["Fantasy", "Adventure"], moods: ["Fun", "Calm"], tags: ["dragons", "journey", "courage"], summary: "Bilbo Baggins joins a band of dwarves on a daring quest to reclaim their homeland." },
  { id: 5, type: "book", title: "Pride and Prejudice", creator: "Jane Austen", year: 1813, country: "International", genres: ["Classic", "Romance"], moods: ["Calm"], tags: ["society", "wit", "love"], summary: "Elizabeth Bennet navigates class, pride, and misunderstandings in Regency England." },
  { id: 6, type: "book", title: "Atomic Habits", creator: "James Clear", year: 2018, country: "International", genres: ["Personal Development"], moods: ["Energetic", "Fun"], tags: ["habits", "growth", "productivity"], summary: "A guide to building good habits and breaking bad ones using tiny, incremental changes." },
  { id: 7, type: "book", title: "Sapiens", creator: "Yuval Noah Harari", year: 2011, country: "International", genres: ["Philosophy", "Historical"], moods: ["Calm", "Dark"], tags: ["evolution", "society", "history"], summary: "A sweeping history of humankind, exploring how culture and cognition shaped our world." },
  { id: 8, type: "book", title: "The Kite Runner", creator: "Khaled Hosseini", year: 2003, country: "International", genres: ["Drama", "Historical"], moods: ["Emotional"], tags: ["friendship", "redemption", "Afghanistan"], summary: "A story of friendship and betrayal between two boys growing up in Kabul." },
  { id: 9, type: "book", title: "The Alchemist", creator: "Paulo Coelho", year: 1988, country: "International", genres: ["Philosophy", "Adventure"], moods: ["Calm", "Fun"], tags: ["journey", "dreams", "destiny"], summary: "A shepherd follows an adventurous path to discover his personal legend." },
  { id: 10, type: "book", title: "Madonna in a Fur Coat", creator: "Sabahattin Ali", year: 1943, country: "Turkey", genres: ["Romance", "Classic"], moods: ["Emotional", "Calm"], tags: ["Berlin", "identity", "love"], summary: "A quiet Turkish student in Berlin encounters a transformative love and self-discovery." },
  { id: 11, type: "book", title: "1984", creator: "George Orwell", year: 1949, country: "International", genres: ["Classic", "Science Fiction"], moods: ["Dark", "Emotional"], tags: ["dystopia", "surveillance", "rebellion"], summary: "A man challenges a totalitarian regime that monitors every aspect of life." },
  { id: 12, type: "book", title: "The Little Prince", creator: "Antoine de Saint-Exupéry", year: 1943, country: "International", genres: ["Classic", "Fantasy"], moods: ["Calm", "Emotional"], tags: ["childhood", "wisdom", "stars"], summary: "A pilot meets a young prince from another planet who teaches him about love and loss." },
  { id: 13, type: "book", title: "Snow", creator: "Orhan Pamuk", year: 2002, country: "Turkey", genres: ["Mystery", "Drama"], moods: ["Dark", "Emotional"], tags: ["Kars", "politics", "identity"], summary: "A poet returns to a snowy Turkish town and becomes entangled in political tensions." },
  { id: 14, type: "book", title: "Circe", creator: "Madeline Miller", year: 2018, country: "International", genres: ["Fantasy", "Mythology"], moods: ["Calm", "Emotional"], tags: ["Greek myths", "gods", "island"], summary: "The witch Circe forges her own path beyond the shadow of the Olympian gods." },
  { id: 15, type: "book", title: "Ikigai", creator: "Héctor García", year: 2016, country: "International", genres: ["Personal Development", "Philosophy"], moods: ["Calm"], tags: ["purpose", "Japan", "wellness"], summary: "A gentle guide to finding purpose and joy through the Japanese concept of ikigai." },
  { id: 16, type: "book", title: "The Silent Patient", creator: "Alex Michaelides", year: 2019, country: "International", genres: ["Thriller", "Mystery"], moods: ["Dark", "Emotional"], tags: ["psychology", "suspense", "twist"], summary: "A famed painter refuses to speak after a shocking crime, and a therapist seeks the truth." },
  { id: 17, type: "book", title: "The Architect's Apprentice", creator: "Elif Şafak", year: 2013, country: "Turkey", genres: ["Historical", "Adventure"], moods: ["Calm", "Emotional"], tags: ["Istanbul", "empire", "animals"], summary: "A young elephant keeper in 16th-century Istanbul dreams of becoming an architect." },
  { id: 18, type: "book", title: "The Night Circus", creator: "Erin Morgenstern", year: 2011, country: "International", genres: ["Fantasy", "Romance"], moods: ["Calm", "Emotional"], tags: ["magic", "competition", "circus"], summary: "Two young illusionists duel within a mysterious traveling circus filled with wonders." },
  { id: 19, type: "book", title: "Inferno", creator: "Dan Brown", year: 2013, country: "International", genres: ["Thriller", "Mystery"], moods: ["Energetic", "Dark"], tags: ["Florence", "symbology", "chase"], summary: "Robert Langdon races through Italy to unravel a puzzle tied to Dante's Inferno." },
  { id: 20, type: "book", title: "The Red-Haired Woman", creator: "Orhan Pamuk", year: 2016, country: "Turkey", genres: ["Drama", "Historical"], moods: ["Emotional", "Calm"], tags: ["myth", "family", "tragedy"], summary: "A well-digger's apprentice becomes obsessed with a traveling theatre actress." },
  { id: 21, type: "book", title: "Station Eleven", creator: "Emily St. John Mandel", year: 2014, country: "International", genres: ["Science Fiction", "Drama"], moods: ["Calm", "Dark"], tags: ["pandemic", "survival", "art"], summary: "After a pandemic, a traveling troupe keeps art alive in a scattered world." },
  { id: 22, type: "book", title: "Six of Crows", creator: "Leigh Bardugo", year: 2015, country: "International", genres: ["Fantasy", "Young Adult"], moods: ["Energetic", "Fun"], tags: ["heist", "magic", "crew"], summary: "A crew of outcasts attempts an impossible heist in a bustling fantasy port city." },
  { id: 23, type: "book", title: "Educated", creator: "Tara Westover", year: 2018, country: "International", genres: ["Personal Development", "Drama"], moods: ["Emotional", "Calm"], tags: ["memoir", "education", "resilience"], summary: "A woman raised in a strict household pursues education and self-definition." },
  { id: 24, type: "book", title: "The Queen's Gambit", creator: "Walter Tevis", year: 1983, country: "International", genres: ["Drama", "Young Adult"], moods: ["Calm", "Emotional"], tags: ["chess", "talent", "addiction"], summary: "An orphaned girl discovers a prodigious talent for chess and battles inner demons." },
  { id: 25, type: "book", title: "A Strangeness in My Mind", creator: "Orhan Pamuk", year: 2014, country: "Turkey", genres: ["Drama", "Historical"], moods: ["Emotional", "Calm"], tags: ["Istanbul", "migration", "family"], summary: "A street vendor's life mirrors the rapid transformation of Istanbul." },
  { id: 26, type: "book", title: "The Martian", creator: "Andy Weir", year: 2011, country: "International", genres: ["Science Fiction", "Thriller"], moods: ["Energetic", "Fun"], tags: ["Mars", "survival", "engineering"], summary: "An astronaut stranded on Mars must use ingenuity to survive and get home." },
  { id: 27, type: "book", title: "Fahrenheit 451", creator: "Ray Bradbury", year: 1953, country: "International", genres: ["Science Fiction", "Classic"], moods: ["Dark", "Emotional"], tags: ["censorship", "books", "rebellion"], summary: "A fireman burns books until he begins to question the purpose of his work." },
  { id: 28, type: "book", title: "The Time Regulation Institute", creator: "Ahmet Hamdi Tanpınar", year: 1961, country: "Turkey", genres: ["Classic", "Satire"], moods: ["Fun", "Calm"], tags: ["bureaucracy", "modernity", "humor"], summary: "A satirical look at Turkey's push for modernization through a quirky timekeeping institute." },
  { id: 29, type: "book", title: "The Midnight Library", creator: "Matt Haig", year: 2020, country: "International", genres: ["Fantasy", "Philosophy"], moods: ["Emotional", "Calm"], tags: ["choices", "regret", "parallel lives"], summary: "A woman explores alternate lives in a magical library between life and death." },
  { id: 30, type: "book", title: "Ten Minutes 38 Seconds in This Strange World", creator: "Elif Şafak", year: 2019, country: "Turkey", genres: ["Drama", "Historical"], moods: ["Emotional", "Calm"], tags: ["Istanbul", "memory", "friendship"], summary: "A woman remembers her life in vivid flashes during the moments after her death." },
];

const generatedBooks = Array.from({ length: 20 }, (_, i) => {
  const id = 31 + i;
  const genres = i % 2 === 0 ? ["Young Adult", "Fantasy"] : ["Personal Development", "Philosophy"];
  const moods = i % 3 === 0 ? ["Energetic", "Fun"] : ["Calm", "Emotional"];
  return {
    id,
    type: "book",
    title: `Skyline Tales ${i + 1}`,
    creator: i % 2 === 0 ? "International Collective" : "Anadolu Voices",
    year: 2001 + i,
    country: i % 2 === 0 ? "International" : "Turkey",
    genres,
    moods,
    tags: ["journey", "growth", "characters"],
    summary: "Intersecting stories of characters finding courage and curiosity in changing cities.",
  };
});

const books = [...bookSeeds, ...generatedBooks];

// Movie data seeds
const movieSeeds = [
  { id: 101, type: "movie", title: "Interstellar", creator: "Christopher Nolan", year: 2014, country: "International", genres: ["Science Fiction", "Drama"], moods: ["Emotional", "Calm"], tags: ["space", "time", "family"], summary: "Astronauts travel through a wormhole to secure humanity's survival." },
  { id: 102, type: "movie", title: "Ayla", creator: "Can Ulkay", year: 2017, country: "Turkey", genres: ["Drama", "Historical"], moods: ["Emotional", "Calm"], tags: ["Korean War", "friendship", "family"], summary: "A Turkish soldier forms a touching bond with an orphaned Korean girl during the war." },
  { id: 103, type: "movie", title: "G.O.R.A.", creator: "Çağan Irmak", year: 2004, country: "Turkey", genres: ["Comedy", "Science Fiction"], moods: ["Fun", "Energetic"], tags: ["space", "spoof", "adventure"], summary: "A carpet salesman is abducted by aliens and stumbles into a galactic adventure." },
  { id: 104, type: "movie", title: "Babam ve Oğlum", creator: "Çağan Irmak", year: 2005, country: "Turkey", genres: ["Drama"], moods: ["Emotional", "Calm"], tags: ["family", "healing", "Aegean"], summary: "A poignant family drama about reconciliation and generational wounds." },
  { id: 105, type: "movie", title: "Parasite", creator: "Bong Joon-ho", year: 2019, country: "International", genres: ["Drama", "Thriller"], moods: ["Dark", "Emotional"], tags: ["class", "satire", "twist"], summary: "A poor family infiltrates a wealthy household with consequences that spiral out of control." },
  { id: 106, type: "movie", title: "Inception", creator: "Christopher Nolan", year: 2010, country: "International", genres: ["Science Fiction", "Thriller"], moods: ["Energetic", "Dark"], tags: ["dreams", "heist", "mind-bending"], summary: "A thief steals secrets by entering dreams and must pull off one final job." },
  { id: 107, type: "movie", title: "Whiplash", creator: "Damien Chazelle", year: 2014, country: "International", genres: ["Drama"], moods: ["Energetic", "Emotional"], tags: ["music", "ambition", "mentor"], summary: "A young drummer faces a ruthless instructor in pursuit of greatness." },
  { id: 108, type: "movie", title: "Inside Out", creator: "Pete Docter", year: 2015, country: "International", genres: ["Animation", "Comedy"], moods: ["Fun", "Emotional"], tags: ["emotions", "family", "pixar"], summary: "Personified emotions navigate the mind of a young girl facing change." },
  { id: 109, type: "movie", title: "The Dark Knight", creator: "Christopher Nolan", year: 2008, country: "International", genres: ["Action", "Thriller"], moods: ["Dark", "Energetic"], tags: ["Gotham", "heroes", "chaos"], summary: "Batman faces the Joker's anarchic plans to plunge Gotham into chaos." },
  { id: 110, type: "movie", title: "Spirited Away", creator: "Hayao Miyazaki", year: 2001, country: "International", genres: ["Animation", "Fantasy"], moods: ["Calm", "Emotional"], tags: ["spirits", "adventure", "coming of age"], summary: "A young girl enters a spirit world and must find the courage to free her parents." },
  { id: 111, type: "movie", title: "Körfez", creator: "Emre Yeksan", year: 2017, country: "Turkey", genres: ["Drama"], moods: ["Calm", "Emotional"], tags: ["Izmir", "mystery", "isolation"], summary: "A man returns to his hometown after divorce and discovers strange changes." },
  { id: 112, type: "movie", title: "Winter Sleep", creator: "Nuri Bilge Ceylan", year: 2014, country: "Turkey", genres: ["Drama"], moods: ["Calm", "Emotional"], tags: ["Anatolia", "philosophy", "dialogue"], summary: "A former actor runs a hotel in Cappadocia while confronting moral dilemmas." },
  { id: 113, type: "movie", title: "Arrival", creator: "Denis Villeneuve", year: 2016, country: "International", genres: ["Science Fiction", "Drama"], moods: ["Emotional", "Calm"], tags: ["language", "aliens", "time"], summary: "A linguist communicates with aliens to unlock a message that could save humanity." },
  { id: 114, type: "movie", title: "Soul", creator: "Pete Docter", year: 2020, country: "International", genres: ["Animation", "Drama"], moods: ["Calm", "Emotional"], tags: ["jazz", "purpose", "afterlife"], summary: "A jazz musician explores what makes life meaningful after a near-death experience." },
  { id: 115, type: "movie", title: "The Grand Budapest Hotel", creator: "Wes Anderson", year: 2014, country: "International", genres: ["Comedy", "Adventure"], moods: ["Fun", "Energetic"], tags: ["hotel", "heist", "friendship"], summary: "A concierge and lobby boy embark on a caper involving a priceless painting." },
  { id: 116, type: "movie", title: "The Wild Pear Tree", creator: "Nuri Bilge Ceylan", year: 2018, country: "Turkey", genres: ["Drama"], moods: ["Calm", "Emotional"], tags: ["family", "ambition", "Anatolia"], summary: "An aspiring writer returns home after university and confronts lingering tensions." },
  { id: 117, type: "movie", title: "Blade Runner 2049", creator: "Denis Villeneuve", year: 2017, country: "International", genres: ["Science Fiction", "Thriller"], moods: ["Dark", "Emotional"], tags: ["androids", "identity", "future"], summary: "A replicant blade runner uncovers a secret that could change society." },
  { id: 118, type: "movie", title: "Roma", creator: "Alfonso Cuarón", year: 2018, country: "International", genres: ["Drama"], moods: ["Emotional", "Calm"], tags: ["family", "Mexico", "memory"], summary: "A housekeeper navigates personal and social turmoil in 1970s Mexico City." },
  { id: 119, type: "movie", title: "Spider-Man: Into the Spider-Verse", creator: "Peter Ramsey", year: 2018, country: "International", genres: ["Animation", "Action"], moods: ["Energetic", "Fun"], tags: ["multiverse", "heroes", "coming of age"], summary: "Miles Morales learns to be Spider-Man alongside heroes from other dimensions." },
  { id: 120, type: "movie", title: "Once Upon a Time in Anatolia", creator: "Nuri Bilge Ceylan", year: 2011, country: "Turkey", genres: ["Drama", "Crime"], moods: ["Dark", "Calm"], tags: ["investigation", "night", "philosophy"], summary: "Officials search for a body through the Anatolian steppe while confronting existential questions." },
  { id: 121, type: "movie", title: "Moana", creator: "Ron Clements", year: 2016, country: "International", genres: ["Animation", "Adventure"], moods: ["Fun", "Energetic"], tags: ["ocean", "myth", "journey"], summary: "A daring voyager sails across the ocean to save her island with help from a demigod." },
  { id: 122, type: "movie", title: "Get Out", creator: "Jordan Peele", year: 2017, country: "International", genres: ["Horror", "Thriller"], moods: ["Dark", "Emotional"], tags: ["social commentary", "mystery", "twist"], summary: "A young man's visit to his girlfriend's family estate reveals disturbing secrets." },
  { id: 123, type: "movie", title: "Paper Lives", creator: "Can Ulkay", year: 2021, country: "Turkey", genres: ["Drama"], moods: ["Emotional", "Calm"], tags: ["Istanbul", "survival", "found family"], summary: "A waste collector in Istanbul finds purpose when he rescues a homeless boy." },
  { id: 124, type: "movie", title: "The Shape of Water", creator: "Guillermo del Toro", year: 2017, country: "International", genres: ["Romance", "Fantasy"], moods: ["Emotional", "Calm"], tags: ["creature", "love", "espionage"], summary: "A mute janitor forms a bond with an amphibious creature held in a lab." },
  { id: 125, type: "movie", title: "The Intouchables", creator: "Olivier Nakache", year: 2011, country: "International", genres: ["Comedy", "Drama"], moods: ["Fun", "Emotional"], tags: ["friendship", "care", "Paris"], summary: "An aristocrat hires a lively caretaker and forms an unexpected friendship." },
  { id: 126, type: "movie", title: "Mustang", creator: "Deniz Gamze Ergüven", year: 2015, country: "Turkey", genres: ["Drama"], moods: ["Emotional", "Dark"], tags: ["sisters", "freedom", "Black Sea"], summary: "Five sisters in a Turkish village push against restrictive traditions." },
  { id: 127, type: "movie", title: "Coco", creator: "Lee Unkrich", year: 2017, country: "International", genres: ["Animation", "Adventure"], moods: ["Fun", "Emotional"], tags: ["music", "family", "afterlife"], summary: "A boy ventures into the Land of the Dead to understand his family's legacy." },
  { id: 128, type: "movie", title: "Okja", creator: "Bong Joon-ho", year: 2017, country: "International", genres: ["Adventure", "Drama"], moods: ["Emotional", "Energetic"], tags: ["friendship", "corporations", "animal"], summary: "A girl journeys to save her genetically engineered friend from a corporation." },
  { id: 129, type: "movie", title: "Her", creator: "Spike Jonze", year: 2013, country: "International", genres: ["Romance", "Science Fiction"], moods: ["Calm", "Emotional"], tags: ["AI", "future", "intimacy"], summary: "A lonely writer develops a relationship with an intelligent operating system." },
  { id: 130, type: "movie", title: "Sivas", creator: "Kaan Mujdeci", year: 2014, country: "Turkey", genres: ["Drama"], moods: ["Dark", "Emotional"], tags: ["Anatolia", "friendship", "coming of age"], summary: "A boy befriends a fighting dog in a remote Anatolian village." },
];

const generatedMovies = Array.from({ length: 20 }, (_, i) => {
  const id = 131 + i;
  const genres = i % 2 === 0 ? ["Action", "Adventure"] : ["Drama", "Crime"];
  const moods = i % 3 === 0 ? ["Energetic", "Fun"] : ["Calm", "Dark"];
  return {
    id,
    type: "movie",
    title: `Neon Horizon ${i + 1}`,
    creator: i % 2 === 0 ? "Global Directors" : "Anadolu Studios",
    year: 2000 + i,
    country: i % 2 === 0 ? "International" : "Turkey",
    genres,
    moods,
    tags: ["journey", "secrets", "alliance"],
    summary: "Characters face shifting alliances while chasing a pivotal secret across continents.",
  };
});

const movies = [...movieSeeds, ...generatedMovies];

// Music data seeds
const musicSeeds = [
  { id: 201, type: "music", title: "Blinding Lights", creator: "The Weeknd", year: 2019, country: "International", genres: ["Pop"], moods: ["Energetic", "Fun"], tags: ["80s", "dance"], summary: "An energetic pop track inspired by 80s synthwave sounds." },
  { id: 202, type: "music", title: "Yolla", creator: "Tarkan", year: 2017, country: "Turkey", genres: ["Pop"], moods: ["Fun", "Energetic"], tags: ["dance", "celebration"], summary: "A lively pop anthem filled with catchy hooks and upbeat rhythm." },
  { id: 203, type: "music", title: "Every Breath You Take", creator: "The Police", year: 1983, country: "International", genres: ["Rock"], moods: ["Calm", "Emotional"], tags: ["classic", "melody"], summary: "A timeless rock ballad with a haunting melody and reflective lyrics." },
  { id: 204, type: "music", title: "Bir Başkasını Sevdim", creator: "Sezen Aksu", year: 1991, country: "Turkey", genres: ["Pop"], moods: ["Emotional", "Calm"], tags: ["love", "nostalgia"], summary: "A heartfelt Turkish pop song about longing and complex emotions." },
  { id: 205, type: "music", title: "Lose Yourself", creator: "Eminem", year: 2002, country: "International", genres: ["Hip-Hop"], moods: ["Energetic", "Dark"], tags: ["rap", "motivation"], summary: "An intense rap track about seizing the moment and overcoming doubt." },
  { id: 206, type: "music", title: "Kal Yanımda", creator: "maNga", year: 2004, country: "Turkey", genres: ["Rock"], moods: ["Energetic", "Emotional"], tags: ["rock", "fusion"], summary: "A dynamic Turkish rock song blending nu-metal energy with melodic hooks." },
  { id: 207, type: "music", title: "Fly Me to the Moon", creator: "Frank Sinatra", year: 1964, country: "International", genres: ["Jazz"], moods: ["Calm", "Emotional"], tags: ["classic", "swing"], summary: "A smooth jazz standard with timeless charm and romance." },
  { id: 208, type: "music", title: "Rakkas", creator: "Sertab Erener", year: 2003, country: "Turkey", genres: ["Pop"], moods: ["Fun", "Energetic"], tags: ["Eurovision", "dance"], summary: "A vibrant pop track with eastern melodies and lively rhythms." },
  { id: 209, type: "music", title: "Nara", creator: "Mercan Dede", year: 2007, country: "Turkey", genres: ["Electronic", "World"], moods: ["Calm", "Emotional"], tags: ["Sufi", "electronic"], summary: "A mesmerizing blend of electronic beats and traditional Sufi influences." },
  { id: 210, type: "music", title: "Hoppipolla", creator: "Sigur Rós", year: 2005, country: "International", genres: ["Indie", "Soundtrack"], moods: ["Calm", "Emotional"], tags: ["cinematic", "uplifting"], summary: "An ethereal post-rock piece often used for cinematic inspiration." },
  { id: 211, type: "music", title: "Suzan Suzi", creator: "Sezen Aksu", year: 1993, country: "Turkey", genres: ["Pop"], moods: ["Emotional", "Calm"], tags: ["folk", "ballad"], summary: "A Turkish ballad that blends folk roots with heartfelt vocals." },
  { id: 212, type: "music", title: "Take Five", creator: "Dave Brubeck", year: 1959, country: "International", genres: ["Jazz"], moods: ["Calm", "Energetic"], tags: ["classic", "instrumental"], summary: "A cool jazz standard known for its distinctive 5/4 rhythm." },
  { id: 213, type: "music", title: "Everything in Its Right Place", creator: "Radiohead", year: 2000, country: "International", genres: ["Electronic", "Rock"], moods: ["Dark", "Calm"], tags: ["experimental", "ambient"], summary: "A haunting track blending electronic textures with introspective lyrics." },
  { id: 214, type: "music", title: "Dünyanın Sonuna Doğru", creator: "maNga", year: 2010, country: "Turkey", genres: ["Rock"], moods: ["Energetic", "Emotional"], tags: ["rock", "anthem"], summary: "A powerful Turkish rock anthem with soaring vocals and guitars." },
  { id: 215, type: "music", title: "Shape of You", creator: "Ed Sheeran", year: 2017, country: "International", genres: ["Pop"], moods: ["Fun", "Energetic"], tags: ["dance", "romance"], summary: "A chart-topping pop hit driven by catchy rhythms and playful lyrics." },
  { id: 216, type: "music", title: "Smooth Operator", creator: "Sade", year: 1984, country: "International", genres: ["R&B", "Jazz"], moods: ["Calm", "Emotional"], tags: ["saxophone", "classic"], summary: "A sleek R&B track with smooth vocals and jazzy undertones." },
  { id: 217, type: "music", title: "Neredesin Firuze", creator: "Nil Karaibrahimgil", year: 2003, country: "Turkey", genres: ["Pop"], moods: ["Fun", "Energetic"], tags: ["storytelling", "melody"], summary: "A spirited pop tune with quirky lyrics and bright instrumentation." },
  { id: 218, type: "music", title: "Take On Me", creator: "a-ha", year: 1985, country: "International", genres: ["Pop"], moods: ["Energetic", "Fun"], tags: ["synth", "80s"], summary: "An iconic synth-pop track with soaring vocals and driving rhythm." },
  { id: 219, type: "music", title: "Comfortably Numb", creator: "Pink Floyd", year: 1979, country: "International", genres: ["Rock"], moods: ["Calm", "Dark"], tags: ["guitar solo", "classic"], summary: "A progressive rock epic known for its emotional guitar solos." },
  { id: 220, type: "music", title: "Benimle Oynama", creator: "Edis", year: 2020, country: "Turkey", genres: ["Pop"], moods: ["Fun", "Energetic"], tags: ["dance", "summer"], summary: "A bright Turkish pop song built for dance floors and summer playlists." },
  { id: 221, type: "music", title: "Adı Bahtiyar", creator: "Mabel Matiz", year: 2013, country: "Turkey", genres: ["Pop", "Indie"], moods: ["Emotional", "Calm"], tags: ["folk", "modern"], summary: "A melodic blend of pop and Anatolian influences with poetic lyrics." },
  { id: 222, type: "music", title: "Lose Control", creator: "Meduza", year: 2019, country: "International", genres: ["Electronic"], moods: ["Energetic", "Fun"], tags: ["dance", "club"], summary: "An electronic dance track with driving bass and catchy hooks." },
  { id: 223, type: "music", title: "Blue Bird", creator: "Ikimonogakari", year: 2008, country: "International", genres: ["Pop", "Soundtrack"], moods: ["Energetic", "Fun"], tags: ["anime", "anthem"], summary: "A spirited J-pop track famous from its anime opening theme." },
  { id: 224, type: "music", title: "Samson", creator: "Regina Spektor", year: 2006, country: "International", genres: ["Indie"], moods: ["Emotional", "Calm"], tags: ["piano", "storytelling"], summary: "A gentle indie track weaving biblical imagery with modern emotion." },
  { id: 225, type: "music", title: "Hayde", creator: "Kardeş Türküler", year: 2000, country: "Turkey", genres: ["World"], moods: ["Energetic", "Fun"], tags: ["folk", "dance"], summary: "A lively folk-inspired song celebrating regional rhythms and unity." },
  { id: 226, type: "music", title: "Someone Like You", creator: "Adele", year: 2011, country: "International", genres: ["Pop"], moods: ["Emotional", "Calm"], tags: ["ballad", "piano"], summary: "A soulful ballad reflecting on love lost and cherished memories." },
  { id: 227, type: "music", title: "Tuna Kiremitçi ve Arkadaşları", creator: "Tuna Kiremitçi", year: 2016, country: "Turkey", genres: ["Indie", "Pop"], moods: ["Calm", "Emotional"], tags: ["duet", "story"], summary: "An indie-pop collaboration album filled with narrative-driven songs." },
  { id: 228, type: "music", title: "Lover", creator: "Taylor Swift", year: 2019, country: "International", genres: ["Pop"], moods: ["Emotional", "Calm"], tags: ["romance", "melody"], summary: "A dreamy pop song celebrating intimacy and commitment." },
  { id: 229, type: "music", title: "Bohemian Rhapsody", creator: "Queen", year: 1975, country: "International", genres: ["Rock"], moods: ["Energetic", "Emotional"], tags: ["classic", "operatic"], summary: "A genre-blending rock epic with soaring vocals and iconic solos." },
  { id: 230, type: "music", title: "Gelevera Deresi", creator: "Selda Bağcan", year: 1976, country: "Turkey", genres: ["World"], moods: ["Emotional", "Calm"], tags: ["folk", "anatolia"], summary: "A folk song with powerful vocals and Anatolian instrumentation." },
  { id: 231, type: "music", title: "Sunflower", creator: "Post Malone & Swae Lee", year: 2018, country: "International", genres: ["Hip-Hop", "Soundtrack"], moods: ["Fun", "Calm"], tags: ["vibe", "melodic"], summary: "A smooth hip-hop track featured in an animated superhero film." },
  { id: 232, type: "music", title: "Sen", creator: "Nilüfer", year: 2013, country: "Turkey", genres: ["Pop"], moods: ["Emotional", "Calm"], tags: ["ballad", "nostalgia"], summary: "A heartfelt Turkish pop ballad with nostalgic melodies." },
  { id: 233, type: "music", title: "City Lights", creator: "FKJ", year: 2020, country: "International", genres: ["Electronic", "Lo-fi"], moods: ["Calm", "Fun"], tags: ["chill", "groove"], summary: "A lo-fi electronic groove perfect for relaxed focus or night drives." },
  { id: 234, type: "music", title: "Believer", creator: "Imagine Dragons", year: 2017, country: "International", genres: ["Rock"], moods: ["Energetic", "Emotional"], tags: ["anthem", "perseverance"], summary: "A stadium rock anthem about transforming pain into strength." },
  { id: 235, type: "music", title: "Aman Aman", creator: "Duman", year: 2002, country: "Turkey", genres: ["Rock"], moods: ["Energetic", "Dark"], tags: ["grunge", "alternative"], summary: "A Turkish rock track with gritty guitars and intense vocals." },
  { id: 236, type: "music", title: "Clair de Lune", creator: "Claude Debussy", year: 1905, country: "International", genres: ["Classical"], moods: ["Calm", "Emotional"], tags: ["piano", "impressionist"], summary: "A delicate classical piano piece evoking moonlit serenity." },
  { id: 237, type: "music", title: "Yeniden", creator: "Melike Şahin", year: 2021, country: "Turkey", genres: ["Indie", "Pop"], moods: ["Emotional", "Calm"], tags: ["ballad", "cinematic"], summary: "An emotive track blending cinematic strings with modern Turkish vocals." },
  { id: 238, type: "music", title: "Belki Bir Gün", creator: "Pinhani", year: 2011, country: "Turkey", genres: ["Rock", "Indie"], moods: ["Calm", "Emotional"], tags: ["acoustic", "nostalgia"], summary: "A soft rock song with reflective lyrics and gentle guitar work." },
  { id: 239, type: "music", title: "Levitating", creator: "Dua Lipa", year: 2020, country: "International", genres: ["Pop"], moods: ["Energetic", "Fun"], tags: ["disco", "dance"], summary: "A disco-influenced pop track that keeps the energy high." },
  { id: 240, type: "music", title: "Seni Düsünmek", creator: "Mor ve Ötesi", year: 2008, country: "Turkey", genres: ["Rock"], moods: ["Energetic", "Emotional"], tags: ["alt-rock", "anthem"], summary: "A driving Turkish rock song about longing and commitment." },
];

const generatedMusic = Array.from({ length: 10 }, (_, i) => {
  const id = 241 + i;
  const genres = i % 2 === 0 ? ["Lo-fi", "Electronic"] : ["Indie", "Soundtrack"];
  const moods = i % 3 === 0 ? ["Calm", "Fun"] : ["Energetic", "Emotional"];
  return {
    id,
    type: "music",
    title: `Sky Echo ${i + 1}`,
    creator: i % 2 === 0 ? "Bedroom Producers" : "Ankara Ensemble",
    year: 2008 + i,
    country: i % 2 === 0 ? "International" : "Turkey",
    genres,
    moods,
    tags: ["groove", "layers", "mood"],
    summary: "Layered beats and mellow melodies designed for focused listening sessions.",
  };
});

const music = [...musicSeeds, ...generatedMusic];

const allItems = [...books, ...movies, ...music];

let activeType = "book";

const moodContainer = document.getElementById("mood-options");
const genreContainer = document.getElementById("genre-options");
const resultsContainer = document.getElementById("results");
const recommendBtn = document.getElementById("recommend-btn");
const tabButtons = document.querySelectorAll(".tab-button");

function renderMoodOptions() {
  moodContainer.innerHTML = "";
  moodOptions.forEach((mood, index) => {
    const id = `mood-${index}`;
    const wrapper = document.createElement("label");
    wrapper.className = "option";
    wrapper.setAttribute("aria-label", mood);
    wrapper.innerHTML = `<input type="checkbox" value="${mood}"> <span>${mood}</span>`;
    moodContainer.appendChild(wrapper);
  });
}

function renderGenreOptions() {
  genreContainer.innerHTML = "";
  genreOptions[activeType].forEach((genre, index) => {
    const id = `genre-${index}`;
    const wrapper = document.createElement("label");
    wrapper.className = "option";
    wrapper.setAttribute("aria-label", genre);
    wrapper.innerHTML = `<input type="checkbox" value="${genre}"> <span>${genre}</span>`;
    genreContainer.appendChild(wrapper);
  });
}

// Compute recommendation score
function scoreItem(item, selectedGenres, selectedMoods) {
  let score = 0;
  item.genres.forEach((g) => {
    if (selectedGenres.includes(g)) score += 3;
  });
  item.moods.forEach((m) => {
    if (selectedMoods.includes(m)) score += 2;
  });
  if (item.year > 2010) score += 1;
  return score;
}

function getSelectedValues(container) {
  return Array.from(container.querySelectorAll("input:checked")).map((el) => el.value);
}

function renderResults(items) {
  resultsContainer.innerHTML = "";
  if (!items.length) {
    resultsContainer.innerHTML = `<div class="empty-state">No content matches your filters. Try relaxing your filters.</div>`;
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    const genreBadges = item.genres.map((g) => `<span class="badge">${g}</span>`).join("");
    const moodBadges = item.moods.map((m) => `<span class="badge secondary">${m}</span>`).join("");
    card.innerHTML = `
      <div class="title-row">
        <h4>${item.title}</h4>
        <span class="subtitle">${item.type === "book" ? "Book" : item.type === "movie" ? "Movie" : "Music"} • ${item.year}</span>
      </div>
      <p class="subtitle">${item.creator} • ${item.country}</p>
      <div class="badges">${genreBadges}${moodBadges}</div>
      <p class="description">${item.summary}</p>
    `;
    resultsContainer.appendChild(card);
  });
}

function updateRecommendations() {
  const selectedGenres = getSelectedValues(genreContainer);
  const selectedMoods = getSelectedValues(moodContainer);

  const filtered = allItems
    .filter((item) => item.type === activeType)
    .map((item) => ({ ...item, score: scoreItem(item, selectedGenres, selectedMoods) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  renderResults(filtered);
}

function setActiveTab(type) {
  activeType = type;
  tabButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.type === type));
  renderGenreOptions();
  // Clear previous selections and results to encourage new recommendations
  genreContainer.querySelectorAll("input").forEach((input) => (input.checked = false));
  renderResults([]);
  resultsContainer.innerHTML = `<div class="empty-state">Select filters and click "Show Recommendations" to get suggestions.</div>`;
}

// Event listeners
recommendBtn.addEventListener("click", updateRecommendations);

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => setActiveTab(btn.dataset.type));
});

// Initialize page
function init() {
  renderMoodOptions();
  renderGenreOptions();
}

init();
