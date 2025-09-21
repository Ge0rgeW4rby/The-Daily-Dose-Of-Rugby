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
        imageUrl: "data:image/jpeg;base64,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",
        altText: "Official Rugby Scrum Cap",
        description: "Protect your ears with this official rugby scrum cap. Designed for comfort and durability, it features an adjustable chin strap for a secure fit.",
        category: "accessories"
    },
    {
        name: "Rugby Ball Keyring",
        price: "£8.95",
        imageUrl: "data:image/jpeg;base64,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",
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
        name: "Ireland Rugby Training Shirt",
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
    if (!container) return;
    container.innerHTML = '';
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

document.addEventListener('DOMContentLoaded', () => {
    // Only render sections that exist on the current page
    renderNews();
    renderFixtures();

    const currentPath = window.location.pathname;
    if (currentPath.includes('merchandise.html')) {
        renderMerch(rugbyMerch); // Render all merch items initially

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