const { render } = require("ejs");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the path for views and static files
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use('/photos', express.static(path.join(__dirname, 'photos')));

// Sample book data
let items = [
    {
        id: 1,
        name: "Tenida Somogro",
        price: 20,
        author: "Narayan Gangopadhyay",
        pdf:"tenida_somogro.pdf",
        // Add your image URL here
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F17%2F1f%2F7b%2F171f7b8909fbbbaa0ce6d55bb79aa5c9.jpg&f=1&nofb=1&ipt=dbdc76918324ec36f6c716ba025397c9f2e82ab0ba711728d4dbe1639390616b&ipo=images",
        description: "Hilarious misadventures of iconic Bengali character, Tenida, and his gang.",
        about: "Tenida Somogro: Hilarious misadventures of the iconic Bengali literary character, Tenida, and his gang. Dive into the uproarious world of Tenida and his friends as they embark on comical escapades that will have you in stitches. This collection is a delightful and light-hearted read that brings a smile to your face.",
    },
    {
        id: 2,
        name: "Proffesor Shonku",
        price: 30,
        author: " Satyajit Ray",
        pdf:"proffesor_sonku.pdf",
        // Add your image URL here
        image: "https://production.listennotes.com/podcasts/sunday-suspense/professor-shonku-robu-PynU41aV_6S-SDahKWFoiTg.1400x1400.jpg",
        description: "Journeys into the unknown with eccentric scientist Professor Shonku.",
        about: "Tenida Somogro: Hilarious misadventures of the iconic Bengali literary character, Tenida, and his gang. Dive into the uproarious world of Tenida and his friends as they embark on comical escapades that will have you in stitches. This collection is a delightful and light-hearted read that brings a smile to your face.",
    },
    {
        id: 3,
        name: "Pother Panchali",
        price: 40,
        author: "Bibhutibhushan Bandyopadhyay",
        pdf:"pather-panchali.pdf",
        // Add your image URL here
        image: "https://yt3.ggpht.com/4YXZsdPvgxiZsDltPIE5yhy7O-z_uxhZHU7qhXKhM2cD8AEw6CfbklI532rhItAP45KRyQ5b47Q1JhtC7w=s900-mo-c-c0xffffffff-rj-k-no",
        description: "A poignant narrative of rural life, family bonds, and dreams in postcolonial Bengal.",
        about:"A mesmerizing journey through the heart of rural Bengal, Pother Panchali weaves a tapestry of life, dreams, and family bonds. Dive into the captivating narrative of a young boy's adventures, aspirations, and the challenges he encounters along the way. Bibhutibhushan Bandyopadhyay's storytelling transports you to the lush landscapes of postcolonial Bengal, where every page is a brushstroke painting the vivid picture of a bygone era. Pother Panchali is a timeless classic that resonates with the essence of rural India, ",
    },
    {
        id: 4,
        name: "Choker Bali",
        price: 50,
        author: "Rabindranath Tagore",
        pdf:"choker_bali",
        // Add your image URL here
        image: "https://cdn.bollywoodmdb.com/movies/largethumb/450x467/2003/chokher-bali/poster.jpg",
        description: "A timeless tale of love, desires, and societal norms in Bengal's aristocratic era.`        ",
        about: "Tenida Somogro: Hilarious misadventures of the iconic Bengali literary character, Tenida, and his gang. Dive into the uproarious world of Tenida and his friends as they embark on comical escapades that will have you in stitches. This collection is a delightful and light-hearted read that brings a smile to your face.",
    },
    {
        id: 5,
        name: "Srikanto",
        price: 50,
        author: "Sarat Chandra Chattopadhyay",
        pdf:"srikanta.pdf",
        // Add your image URL here
        image: "/photos/img5.png",
        description: "A timeless tale of love, desires, and societal norms in Bengal's aristocratic era.",
        about:"Step back in time to the aristocratic era of Bengal with Srikanta, a timeless masterpiece by the legendary Sarat Chandra Chattopadhyay. In this spellbinding narrative, we delve into the complexities of love, desires, and the intricacies of societal norms. Follow the journey of Srikanta, a captivating character whose experiences mirror the essence of an era. As he navigates the intricate web of emotions and social expectations you'll be drawn into a world where passion ignites, traditions collide, and hearts are torn between duty and desire.",
    },
    {
      id: 6,
      name: "Feluda samagra",
      price: 50,
      author: "Satyajit Ray",
      pdf:"feluda.pdf",
      // Add your image URL here
      image: "/photos/img6.png",
      description: "Embark on thrilling adventures with Feluda, Satyajit Ray's brilliant detective. With wit and charm, he unravels mysteries, making him a standout in detective fiction.",
      about:"The ultimate collection for Feluda fans! Join the brilliant detective and his friends as they unravel mysteries and secrets with wit and humor. Satyajit Ray's genius shines in this gripping anthology, promising hours of suspense and excitement for all readers, old and new.",
  },
  {
    id: 7,
    name: "Taranath Tantrik",
    price: 50,
    author: "Taradas Bandopadhyay",
    pdf:"taranath.pdf",
    // Add your image URL here
    image: "/photos/img7.png",
    description: "Delve into the chilling world of the supernatural with Taranath Tantrik, a spine-tingling journey through Bengali folklore and horror.",
    about:"Explore the eerie and mysterious realm of Bengali folklore in the Taranath Tantrik series by Bibhutibhushan Bandyopadhyay. Follow the enigmatic occult practitioner, Taranath, as he investigates paranormal phenomena and encounters malevolent spirits. These tales of the supernatural are a captivating blend of horror, mythology, and the inexplicable, offering readers a thrilling and unforgettable journey into the unknown.    ",
},
{
  id: 8,
  name: "Garliverse Travels",
  price: 50,
  author: "Jonathan swift",
  pdf:"garlivers.pdf",
  // Add your image URL here
  image: "/photos/img8.png",
  description: "Embark on an unforgettable journey across parallel worlds in Garliverse Travels, where adventure, mystery, and alternate realities await.",
  about:"Garliverse Travels takes readers on an enthralling expedition through parallel universes, where the boundaries of reality blur. Join the intrepid travelers as they navigate intricate plots, encounter diverse cultures, and confront mind-bending challenges across dimensions. This imaginative odyssey offers a captivating blend of adventure and mystery, making it a must-read for those who crave exploration beyond the confines of our known universe.",
},
{
  id: 9,
  name: "Garliverse Travels",
  price: 50,
  author: "Jonathan swift",
  pdf:"garlivers.pdf",
  // Add your image URL here
  image: "/photos/img8.png",
  description: "Embark on an unforgettable journey across parallel worlds in Garliverse Travels, where adventure, mystery, and alternate realities await.",
  about:"Garliverse Travels takes readers on an enthralling expedition through parallel universes, where the boundaries of reality blur. Join the intrepid travelers as they navigate intricate plots, encounter diverse cultures, and confront mind-bending challenges across dimensions. This imaginative odyssey offers a captivating blend of adventure and mystery, making it a must-read for those who crave exploration beyond the confines of our known universe.",
},
];

app.get("/bechdo", (req, res) => {
    res.render("index.ejs", { items });
  });
  app.get("/bechdo/catagory", (req, res) => {
    res.render("catagory.ejs");
  })
//login page 
app.get('/bechdo/login', (req, res) => {
    res.render('login.ejs'); // Render the "login.ejs" template without passing any book data
});


  // Handle individual book view
  app.get("/bechdo/:id", (req, res) => {
    const { id } = req.params;
    const book = items.find((n) => n.id === parseInt(id));
    res.render("view.ejs", { book });
  });
  
  // Handle individual book read
  app.get('/pdfs/:pdfName', (req, res) => {
    const pdfName = req.params.pdfName;
    const pdfPath = path.join(__dirname, 'pdfs', pdfName);
    res.sendFile(pdfPath);
});

//pdf viewer
app.get('/viewpdf/:pdfName', (req, res) => {
    const pdfName = req.params.pdfName;
    res.render('pdfviewer.ejs', { pdfName });
});


  app.listen(port, () => {
    console.log("Website is working");
  });
