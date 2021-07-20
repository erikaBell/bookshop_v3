import axios from "axios";

export default async function getByisFeature(setState) {
  try {
    const response = await axios.get(`http://localhost:3001/api/books`);
    let AllBooks = await response.data;
    let featuredBooks = await [];
    await AllBooks.forEach((book) => {
      if (book.feature) {
        featuredBooks = [...featuredBooks, book];
      }
    });
    return setState(featuredBooks);
  } catch (err) {
    console.log(err);
  }
}
