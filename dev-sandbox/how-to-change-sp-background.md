So go to system ui > images upload the pic, then inside the record copy link. and use this in your themes 'css variables .. to get to css variables find the theme on the service portal record navigate to the right page , use service portal > pages then you'll hit page specific css.


























































hey can you give me a great Ui/UX description for general incident submission for a incident creation form?
i mean like a catalog to help the user understand what it is so they can know' oh submit tickets here'
in servicenow id like to modify the background image something that can make the catalog page scream IT support page i dont like a blank background , where do i configure this in servicenow 
i want option 2, where would i add the css 
my reocrd name is what would my url be 
found my image sid 672947491b504b504601cbf2604bcbbf

hmm on the images it says , Use the following code for displaying in content blocks:  <img src="Catalog-item-background.jpg" width="3732" height="3381"/>, maybe we no longer need the sid
well i copy the sid in the record my image is at and it still doesn work
hmm the css did work
ok so lets update the correct safe css with this url i copied on the record 'https://zekelmandev.service-now.com/nav_to.do?uri=db_image.do?sys_id=672947491b504b504601cbf2604bcbbf'
yes do that the imae wont load
i love all the added fesatures... but god i want that background image.... we gotta fix that but iom keeping everything else
hmm i see the image at this URL
https://zekelmandev.service-now.com/Catalog-item-background.jpg
modify this to include the link i gave you "/* ===== FULL PAGE IT SUPPORT THEME ===== */

body {
  background: #0b1f3a; /* fallback solid IT blue */
  font-family: Arial, sans-serif;
}

/* Center hero section feel */
.sp-page-sc_category .container,
.sp-page-sc_category .container-fluid {
  padding-top: 40px;
}

/* HERO TITLE AREA (we fake one visually) */
.it-hero {
  text-align: center;
  padding: 40px 20px;
  color: white;
  background: linear-gradient(
    135deg,
    #0b1f3a,
    #123a63
  );
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

.it-hero h1 {
  font-size: 34px;
  margin: 0;
}

.it-hero p {
  opacity: 0.85;
  margin-top: 10px;
  font-size: 16px;
}

/* Make catalog tiles look modern */
.panel, .card, .well {
  border-radius: 12px !important;
  box-shadow: 0 6px 18px rgba(0,0,0,0.15) !important;
  transition: transform 0.2s ease;
}

.panel:hover, .card:hover {
  transform: translateY(-3px);
}"
darn still not working but i did up it in another tab using 'https://zekelmandev.service-now.com/847903491b504b504601cbf2604bcba1.iix'
you we're right something else was forcing it to take that white background, just a lil worried when i moved this in my update set if it'll still work
how about i just re upload image in prod, and update the  css background url 
well copy image link worked for me in this case