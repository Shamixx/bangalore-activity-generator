// Array to store activities
let activities = [
    "Hey, why not take a refreshing walk in Cubbon Park or Lalbagh for some greenery? Plus, check out @cubbonreads, Cubbonmeets, and the weekend yoga and run sessions!",
    "How about joining @puttingscenes for a fantastic roundup of events in the city? From concerts to food pop-ups, they've got it all covered!",
    "Looking to dance the night away? Koramangala and Indiranagar have some amazing clubbing spots. Check their Instagram pages for the latest events!",
    "Feeling artsy? Visit NGMA, MAP, or the Indian Music Experience Museum. Perfect for a solo art-filled day!",
    "Want to catch a live show? Book tickets for stand-up gigs and concerts through @paytminsider.",
    "Up for a challenge? Sign up for a trek with the Bangalore Mountaineering Club and test your endurance!",
    "Love board games? Check the Meetups app for board game events happening around the city, like at Claytopia or Church Street.",
    "Ever tried salsa or hip-hop? Drop by one of the many dance studios in the city for a fun session!",
    "Small World Koramangala hosts unique events like chai sessions, speed dating, and pottery workshops. Perfect for a fun outing with friends!",
    "Get your quiz on with pub quizzes on various topics, curated by @puttingscenes. Follow breweries’ Instagram pages for schedules!",
    "Did you know? Alliance Francaise and Max Mueller Bhavan host regular movie screenings and plays. Check them out!",
    "Check out @mello_fun for open-air screenings and dance workshops. Perfect for a fun evening out!",
    "Love to sing? Join a Soul Jams sing-along event. You can even sign up to perform!",
    "Visit the brain museum exhibit at NIMHANS. A fascinating trip for all the brainy nerds out there!",
    "Check out the handicraft stalls at Karnataka Chitra Kala Parishath and indulge in some flea market shopping.",
    "Love writing? Join writeclubbangalore for online and offline writing sessions every Saturday!",
    "Enjoy live theatre? Ranga Shankara in JP Nagar has some great plays lined up!",
    "Interested in sustainability and crafts? Visit Bangalore Creative Circus in Yeshwantpur for unique workshops and exhibits.",
    "Looking for a fun event? Check out Sunday Soul Sante, Zomato Food Festival, Gin Explorers Club, and Under 25 Official events!",
    "Want to try climbing? Visit Equilibrium Climbing Stadium in Indiranagar. Perfect for a solo adventure!",
    "How about a cycling tour? Pedal in Tandem hosts trails in and around Bangalore. You can even rent the gear!",
    "Interested in heritage? Join one of the regular walks in Malleshwaram and Cubbon, curated by @puttingscenes.",
    "Make a day out of Church Street! Coffee, food, bowling, and shopping await. Check out the cute stalls on weekends!",
    "Love beer? Toit offers brewery tours on the first Saturday of every month. Book in advance for a fun and educational experience!",
    "Looking for thrills? Funtura in Rajajinagar has indoor rollercoasters, spinning cups, and arcade games for adults!",
    "Fancy a classy day out? Visit Big Banyan and Grover Zampa Vineyards for wine tours and tastings.",
    "Interested in contemporary art and culture? @bicblr in Domlur hosts panels, masterclasses, and more!",
    "Love reading? Visit Atta Gala in Indiranagar. Cozy library, cafe, bookstore, and art events await!",
    "Want to try rowing? Ulsoor Lake offers classes through the Indian Army's Madras Sappers unit.",
    "Are you a quiz enthusiast? @kqaquizzes has some exciting sessions lined up!",
    "Into heritage conservation? Check out @INTACHIndia for talks, walks, and bird watching!",
    "Science buff? Visit Vishweshwaraya Museum and Jawaharlal Planetarium. Book tickets in advance!",
    "Fancy food pop-ups and open-air movie screenings? The Courtyard community has you covered!",
    "Love books? @cubbonreads organizes @cubbonmeets, a 1:1 reading community for book discussions and letter exchanges!",
    "Chess enthusiast? Check out @Blr_ChessClub for some serious matches!",
    "Enjoy boating? Yediyur and Madiwala lakes are perfect for a relaxing day out. Plus, Bugle Rock Park, NGMA, and more!",
    "Want to try shooting? @goldenace_blr offers shooting lessons!",
    "Up for some trampoline fun? Bounce in Orion Mall has great deals on certain days!",
    "Love books? @BibliophilesBlr conducts monthly book club meetups. Join in for some literary fun!",
    "Hungry? VV Puram food street is perfect for a foodie adventure with friends. Try the Pathir Pheni with badam milk!"
];

function generateActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    return activities[randomIndex];
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
}

document.getElementById('generateBtn').addEventListener('click', function() {
    const activity = generateActivity();
    document.getElementById('activityDisplay').textContent = activity;
    document.body.style.backgroundColor = getRandomColor();
});
