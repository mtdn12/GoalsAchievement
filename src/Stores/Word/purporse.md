- Create A tracking for learing new word
- It will have a word and a mind map match with that word
- Using word webs to create map
  + write out the dictionary description
  + write out words you think of when you think of this word
  + Get your dictionary write out synonyms and antonyms for the word
  + find idioms with these words
// Functional
- have list of words when hover it will show description of this word
- when click specify word will go to page show wordweb of this word and idiom of this word
- Will have list filter with status of word (recovering, all word)
- // Create word
  + word name:
  + description of the word
  + A button to add image mapWeb of the page (accept : images only)
   => will upload images to firebase storage first when success will have Url of the will
      then send to the node server (word, description and mapLink)
  // Edit word
  + Can edit name-description and link Map. But if edit linkMap will delete old images in firebase storage
    then upload new image and edit linkMap
  // Delete Word
  + Also delete image in firebase storage match with that word



