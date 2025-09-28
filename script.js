// --- DATA ARRAYS (MUST BE AT THE TOP FOR GLOBAL ACCESS) ---

// --- NEWS AND RUMOURS DATA ---
const rugbyNews = [
    {
        title: "Guinness Premiership 2025/26: A Season of Surprises?",
        summary: "The new Guinness Premiership season is set to kick off with a bang. With several key player transfers and coaching changes, analysts predict a wide-open title race, with no clear favourite.",
        imageUrl: "https://www.ruck.co.uk/wp-content/uploads/2023/04/Untitled-design-2023-04-25T102352.701.png",
        linkUrl: "https://www.example.com/premiership-2025-26-preview"
    },
    {
        title: "Lions Tour 2029: The Countdown to New Zealand Begins",
        summary: "With the 2025 tour concluded, attention has already turned to the next major event on the rugby calendar: the 2029 Lions tour to New Zealand. The four-year build-up promises intense competition for squad spots.",
        imageUrl: "https://e0.365dm.com/25/06/1600x900/skysports-jac-morgan-lions_6947595.jpg?20250621193942x",
        linkUrl: "https://www.example.com/lions-tour-2029-countdown"
    },
    {
        title: "Transfer Rumour: Saracens Eyeing French Star for Next Season",
        summary: "Saracens are reportedly in advanced talks to sign a highly-rated French international centre. The move would be a major statement of intent as they look to reclaim their dominance in the Premiership.",
        imageUrl: "https://static.independent.co.uk/2024/01/22/21/53f369b0ce60ecaf869c3a8613873603Y29udGVudHNlYXJjaGFwaSwxNzA2MDQzMjQ4-2.74854690.jpg",
        linkUrl: "https://www.example.com/saracens-transfer-rumour-2025"
    },
    {
        title: "Leicester Tigers Squad Bolstered by Two New Signings",
        summary: "Leicester Tigers have announced the signing of a formidable prop and a versatile back-rower. The new additions are expected to strengthen their forward pack and provide much-needed depth.",
        imageUrl: "https://www.ruck.co.uk/wp-content/uploads/2022/05/Screen-Shot-2022-05-12-at-17.33.45.png",
        linkUrl: "https://www.example.com/leicester-tigers-new-players"
    },
    {
        title: "World Rugby Proposes Major Rule Changes for 2026",
        summary: "World Rugby is considering a series of experimental law variations aimed at increasing ball-in-play time and reducing stoppages. The proposals will be trialled in select leagues later this year.",
        imageUrl: "https://static.standard.co.uk/2021/11/24/14/newFile-4.jpg?width=1200&auto=webp&quality=75",
        linkUrl: "https://www.example.com/world-rugby-rule-changes-2026"
    },
    {
        title: "Eddie Jones Shares His Six Nations Predictions for the 2026 Tournament",
        summary: "Eddie Jones has weighed in on the upcoming Six Nations tournament, giving his thoughts on each team's chances and picking his dark horse for the title.",
        imageUrl: "https://content.api.news/v3/images/bin/609ea19bb047ba43ab9001da89227e2a",
        linkUrl: "https://www.example.com/eddie-jones-six-nations-predictions"
    },
];

// --- MERCHANDISE DATA (with added category and more items) ---
const rugbyMerch = [
    {
        name: "Lions Tour 2025 Official Replica Shirt",
        price: "£42.00",
        imageUrl: "https://store.lionsrugby.com/content/ws/all/88bdfe80-febb-4c81-99b4-af2f00e5fec9__1600X2710.png?w=1600",
        altText: "Lions Tour 2025 Official Replica Shirt",
        description: "Official replica shirt of the British & Irish Lions 2025 tour to Australia. Made with breathable, high-performance fabric for comfort on and off the pitch. Show your support with this iconic jersey.",
        category: "kits"
    },
    {
        name: "Leicester Tigers 2025/26 Home Jersey",
        price: "£39.00",
        imageUrl: "https://i.ebayimg.com/images/g/U3AAAeSw325n9-Aw/s-l1600.png",
        altText: "Leicester Tigers 2025/26 Home Jersey",
        description: "The official home jersey for the Leicester Tigers 2025/26 season. Featuring the classic green, white, and red stripes, this shirt is a must-have for any Tigers supporter. Sizes available from S to XXL.",
        category: "kits"
    },
    {
        name: "All Blacks Supporters Hoodie",
        price: "£60.00",
        imageUrl: "https://images.footballfanatics.com/new-zealand-rugby/all-blacks-classic-inaugural-hoodie-by-mitchell-and-ness_ss5_p-203294662+u-zs2nsuwjgryrlr4fenob+v-jm40ggthr04rvlmiddoy.jpg?_hv=2&w=800",
        altText: "All Blacks Supporters Hoodie",
        description: "Stay warm while showing your allegiance to the legendary All Blacks. This comfortable and stylish hoodie is perfect for training or casual wear. Features the iconic silver fern logo.",
        category: "kits"
    },
    {
        name: "England Rugby Training T-Shirt",
        price: "£40.00",
        imageUrl: "https://images.footballfanatics.com/england-rugby/england-rugby-performance-short-sleeve-t-shirt-blue-mens_ss5_p-202982002+u-klk2ksygn3yk2xo1wwma+v-rcrkd0q9s9kobl6onbi7.jpg?_hv=2&w=800",
        altText: "England Rugby Training T-Shirt",
        description: "A lightweight and durable training t-shirt for England rugby fans. Designed for maximum breathability, this shirt will help you perform your best while representing your team.",
        category: "kits"
    },
    {
        name: "Lions Tour 2025 Supporters Ball",
        price: "£15.00",
        imageUrl: "https://images.footballfanatics.com/british-and-irish-lions-rugby/british-and-irish-lions-thrillseeker-supporters-ball_ss5_p-201441269+u-jnqj2kgp3blbnvkg7xmq+v-vtyhtu6grmsc3sx7pxca.jpg?_hv=2&w=800",
        altText: "Lions Tour 2025 Supporters Ball",
        description: "An official Lions Supporters ball, perfect for backyard games or displaying as a collector's item. Features the Lions logo and signature colors.",
        category: "accessories"
    },
    {
        name: "Springboks 2024/25 jersey",
        price: "£70.00",
        imageUrl: "https://sarugbyshop.co.za/wp-content/uploads/2025/06/ib67854.jpg",
        altText: "Springboks 2024/25 jersey",
        description: "The official jersey for the Rugby World Cup-winning Springboks. Show your support for the world champions with this high-quality, authentic kit. Available in all sizes.",
        category: "kits"
    },
    {
        name: "Official Rugby Scrum Cap",
        price: "£30.00",
        imageUrl: "https://m.media-amazon.com/images/I/71Y-6J0R8hL._AC_SX679_.jpg",
        altText: "Official Rugby Scrum Cap",
        description: "Protect your ears with this official rugby scrum cap. Designed for comfort and durability, it features an adjustable chin strap for a secure fit.",
        category: "accessories"
    },
    {
        name: "Rugby Ball Keyring",
        price: "£5.00",
        imageUrl: "https://www.sgs-shop.co.uk/wp-content/uploads/2021/04/gilbert-mini-keyring-rugby-ball.jpg",
        altText: "Rugby Ball Keyring",
        description: "A small, detailed rugby ball keyring. A perfect accessory for any rugby fan to show their passion for the sport.",
        category: "accessories"
    },
    {
        name: "Wales Rugby Home Jersey 2025/26",
        price: "£65.00",
        imageUrl: "https://cdn.shoplightspeed.com/shops/604515/files/51290680/1600x2048x1/macron-wales-home-rugby-jersey-2025-26.jpg",
        altText: "Wales Rugby Home Jersey 2025/26",
        description: "Show your Welsh pride with the new home jersey for the 2025/26 season. Designed for both performance and comfort, this is a must-have for all fans of the Dragons.",
        category: "kits"
    },
    {
        name: "Scotland Rugby Supporters Cap",
        price: "£20.00",
        imageUrl: "https://images.footballfanatics.com/scotland-rugby/scotland-rugby-supporters-cap_ss5_p-203294662+u-zs2nsuwjgryrlr4fenob+v-jm40ggthr04rvlmiddoy.jpg",
        altText: "Scotland Rugby Supporters Cap",
        description: "A classic Scotland rugby supporters cap. Features the iconic thistle logo on the front and is perfect for showing your support on match day.",
        category: "accessories"
    },
    {
        name: "Ireland Rugby Training Shorts",
        price: "£35.00",
        imageUrl: "https://images.footballfanatics.com/ireland-rugby/ireland-rugby-performance-short-sleeve-t-shirt-blue-mens_ss5_p-202982002+u-klk2ksygn3yk2xo1wwma+v-rcrkd0q9s9kobl6onbi7.jpg",
        altText: "Ireland Rugby Training Shorts",
        description: "Lightweight and comfortable training shorts for Ireland rugby fans. Made with moisture-wicking technology to keep you cool and dry during workouts.",
        category: "accessories"
    },
    {
        name: "France Rugby 2025/26 Home Jersey",
        price: "£75.00",
        imageUrl: "https://img01.ztat.net/article/francerugby/FR251A004-K11@10.jpg?imwidth=762",
        altText: "France Rugby 2025/26 Home Jersey",
        description: "The new official home jersey for the French national team. A sleek and modern design with the iconic French Cockerel crest. Available in all men's sizes.",
        category: "kits"
    }
];

// --- FIXTURES DATA ---
const upcomingFixtures = [
    { homeTeam: "Bristol Bears", awayTeam: "Bath Rugby", date: "2025-09-28", time: "15:30", competition: "Guinness Premiership" },
    { homeTeam: "Harlequins", awayTeam: "Saracens", date: "2025-09-29", time: "19:45", competition: "Guinness Premiership" },
    { homeTeam: "Northampton Saints", awayTeam: "Exeter Chiefs", date: "2025-09-28", time: "14:00", competition: "Guinness Premiership" },
    { homeTeam: "Leicester Tigers", awayTeam: "Sale Sharks", date: "2025-09-29", time: "15:00", competition: "Guinness Premiership" },
    { homeTeam: "Gloucester", awayTeam: "Newcastle Falcons", date: "2025-09-27", time: "17:30", competition: "Guinness Premiership" },
    { homeTeam: "England", awayTeam: "Scotland", date: "2025-09-13", time: "10:00", competition: "Women's Rugby World Cup Semi-Final" }
];

// --- FUNCTIONS TO RENDER CONTENT ---
function renderNews() {
    const container = document.getElementById('news-container');
    if (!container) return;
    container.innerHTML = '';
    rugbyNews.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'news-article';
        articleElement.innerHTML = `
            <img src="${article.imageUrl}" alt="${article.title}">
            <div class="article-content">
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <a href="${article.linkUrl}" target="_blank" class="read-more">Read More</a>
            </div>
        `;
        container.appendChild(articleElement);
    });
}

function renderMerch(items) {
    const container = document.getElementById('merch-container');
    if (!container) return; // Crucial check: only proceed if the container exists
    container.innerHTML = '';
    
    if (items.length === 0) {
        container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; font-size: 1.2em; color: #555;">No merchandise found matching your criteria.</p>';
        return;
    }

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'merch-item';
        itemElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.altText}">
            <h4>${item.name}</h4>
            <p class="price">${item.price}</p>
        `;
        itemElement.addEventListener('click', () => {
            openMerchModal(item);
        });
        container.appendChild(itemElement);
    });
}

function renderFixtures() {
    const container = document.getElementById('fixtures-container');
    if (!container) return;
    container.innerHTML = '';
    upcomingFixtures.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.className = 'fixture-item';
        matchElement.innerHTML = `
            <h4>${match.homeTeam} vs ${match.awayTeam}</h4>
            <p><strong>Date:</strong> ${match.date}</p>
            <p><strong>Time:</strong> ${match.time}</p>
            <p><strong>Competition:</strong> ${match.competition}</p>
        `;
        container.appendChild(matchElement);
    });
}

// Function to open the modal and display item details
function openMerchModal(item) {
    const modal = document.getElementById('merch-modal');
    if (!modal) return;
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');

    modalImage.src = item.imageUrl;
    modalImage.alt = item.altText;
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;
    modalPrice.textContent = item.price;

    modal.style.display = 'block';
}

// Function to close the modal
function closeMerchModal() {
    const modal = document.getElementById('merch-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// --- INITIALIZATION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    // Only render News and Fixtures if their containers exist (for index.html)
    if (document.getElementById('news-container')) {
        renderNews();
    }
    if (document.getElementById('fixtures-container')) {
        renderFixtures();
    }

    // Logic specifically for the merchandise page
    const currentURL = window.location.href;
    if (currentURL.includes('merchandise.html')) {
        
        // --- THIS IS THE CRUCIAL LINE FOR INITIAL LOAD ---
        renderMerch(rugbyMerch); 

        const searchInput = document.getElementById('merch-search');
        if (searchInput) {
            searchInput.addEventListener('keyup', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredItems = rugbyMerch.filter(item =>
                    item.name.toLowerCase().includes(searchTerm) ||
                    item.description.toLowerCase().includes(searchTerm)
                );
                renderMerch(filteredItems);
            });
        }

        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                const filter = e.target.dataset.filter;

                let filteredItems;
                if (filter === 'all') {
                    filteredItems = rugbyMerch;
                } else {
                    filteredItems = rugbyMerch.filter(item => item.category === filter);
                }
                renderMerch(filteredItems);
            });
        });
    }

    // Modal close listeners (on both pages)
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeMerchModal);
    }
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('merch-modal');
        if (modal && event.target === modal) {
            closeMerchModal();
        }
    });
});