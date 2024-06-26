<template lang="">
    <div>
      <h1>This is the Products Page 🏳️‍⚧️</h1>  
    </div>
    <div class="hehe">
      <section v-for="book in books" :key="book.name">
        <!-- {{book.title}} -->

        <!-- <products-comp :book-title="book"/> -->
        <products-comp :cover="book.cover">
          <template #heading>
            <h1>{{book.title}}</h1>
          </template>
          <template #author>
            <h5>{{book.author}}</h5>
          </template>
          <template #pages>
            <h5>{{book.pages}}</h5>
          </template>
          <template #year>
            <h5>{{book.year}}</h5>
          </template>
          <template #genre>
            <h5>{{book.genre}}</h5>
          </template>
          <template #default>
            <h5>{{book.title}}</h5>
          </template>
        </products-comp>
      </section>
    </div>
</template>
<script>
import ProductsComp from '@/components/ProductsComp.vue';
export default {
    data(){
      return{
        books:[
            {title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            genre: "Literary Fiction",
            pages: 180,
            publisher: "Charles Scribner's Sons",
            isbn: "978-0743273565",
            cover:'https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1'
            },
            {title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            genre: "Southern Gothic",
            pages: 281,
            publisher: "J. B. Lippincott & Co.",
            isbn: "978-0446310789",
            cover:'https://media.glamour.com/photos/56e1f3c462b398fa64cbd304/master/w_1600%2Cc_limit/entertainment-2016-02-18-main.jpg'
            },
            {title: "1984",
            author: "George Orwell",
            year: 1949,
            genre: "Dystopian Fiction",
            pages: 328,
            publisher: "Secker & Warburg",
            isbn: "978-0451524935",
            cover:'https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/01/2a34d8_463ff497abfa4bca9b96d696e911746fmv2.jpeg?resize=500%2C769&quality=89&ssl=1'
            },
            {title: "Pride and Prejudice",
            author: "Jane Austen",
            year: 1813,
            genre: "Romance",
            pages: 279,
            publisher: "Thomas Egerton",
            isbn: "978-0141439513",
            cover:'https://cdn.kobo.com/book-images/08ba5a67-f48d-420e-be8e-6de7a73b7d85/1200/1200/False/pride-prejudice-13.jpg'
            },
            {title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            year: 1951,
            genre: "Coming-of-age Fiction",
            pages: 214,
            publisher: "Little, Brown and Company",
            isbn: "978-0316769488",
            cover:'https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg'
            }
]
    }
},
components: {
  ProductsComp
}
}
</script>
<style>
h1{
  color: white;
  text-shadow: 3px 3px black;
}
section{
  border: 3px solid black;
  border-radius: 1rem;
  width: 300px;
  height: 400px;
  margin: auto;
}
    .hehe{
      display: grid;
      grid-template-columns: repeat(5,1fr);
    }
    div{
      width: 300px;
      height: 400px;
      position: absolute;
      border-radius: 10%;
    }
</style>