// Photo gallery data
        const photoData = [
            { url: "./images/moment14.jpeg", caption: "Our Love story's Cover page", category: "moments" },
            { url: "./images/date3.jpeg", caption: "Movie Date", category: "dates" },
            { url: "./images/trip6.jpeg", caption: "Beauty and the Beast", category: "trips" },
            { url: "./images/moment13.jpeg", caption: "Sweet moment", category: "moments" },
            { url: "./images/celeb2.jpeg", caption: "Mujhe sharam aagayi", category: "celebrations" },
            { url: "./images/moment5.jpeg", caption: "Hug to Remember for Life", category: "moments" },
            { url: "./images/date9.jpeg", caption: "Yummyyy Candies", category: "dates" },
            { url: "./images/trip1.jpeg", caption: "National Park me mera National Crush mila", category: "trips" },
            { url: "./images/moment10.jpeg", caption: "Kya lag rahe hai yaar🥹", category: "moments" },
            { url: "./images/date1.jpeg", caption: "Our Date Marines (August 10, 2024)", category: "dates" },
            { url: "./images/celeb5.jpeg", caption: "My Birthday Celebration", category: "celebrations" },
            { url: "./images/moment2.jpeg", caption: "Aise na mujhe tum dekho", category: "moments" },
            { url: "./images/trip8.jpeg", caption: "Long Drive Moment", category: "trips" },
            { url: "./images/date7.jpeg", caption: "Marines 2.O Date", category: "dates" },
            { url: "./images/moment16.jpeg", caption: "Very close to my Heart", category: "moments" },
            { url: "./images/celeb1.jpeg", caption: "My first proposal🥹", category: "celebrations" },
            { url: "./images/date4.jpeg", caption: "One more movie Date", category: "dates" },
            { url: "./images/moment8.jpeg", caption: "My love language", category: "moments" },
            { url: "./images/trip4.jpeg", caption: "IMAGICA(L)", category: "trips" },
            { url: "./images/date11.jpeg", caption: "Double Date", category: "dates" },
            { url: "./images/moment1.jpeg", caption: "Trying our best to get close", category: "moments" },
            { url: "./images/celeb7.jpeg", caption: "Friendship day celebration (Dadi ko pata liya ab bas Mummy Papa remaining)", category: "celebrations" },
            { url: "./images/trip3.jpeg", caption: "Sundar log Sundar nazare", category: "trips" },
            { url: "./images/date5.jpeg", caption: "Birthday Date(Adrak)", category: "dates" },
            { url: "./images/moment12.jpeg", caption: "Me getting lucky in Lucky", category: "moments" },
            { url: "./images/celeb4.jpeg", caption: "Kammo ka Sagayi celebration", category: "celebrations" },
            { url: "./images/date10.jpeg", caption: "Marines 3.O", category: "dates" },
            { url: "./images/trip9.jpeg", caption: "Aur kya chahiye jeene ke liye", category: "trips" },
            { url: "./images/moment3.jpeg", caption: "Hayeeee 🥹", category: "moments" },
            { url: "./images/date6.jpeg", caption: "Social at our service", category: "dates" },
            { url: "./images/celeb8.jpeg", caption: "MOJO me mazza aagaya", category: "celebrations" },
            { url: "./images/moment6.jpeg", caption: "Hakk se MINEEEEEE", category: "moments" },
            { url: "./images/trip2.jpeg", caption: "Happy Shappy", category: "trips" },
            { url: "./images/date2.jpeg", caption: "Dahisar Short Date", category: "dates" },
            { url: "./images/moment15.jpeg", caption: "Mad in Love❌ Made in Love✔️", category: "moments" },
            { url: "./images/celeb6.jpeg", caption: "Miyaa kya Kebab hai", category: "celebrations" },
            { url: "./images/trip7.jpeg", caption: "Tera Saath na Chhodunga", category: "trips" },
            { url: "./images/moment9.jpeg", caption: "Ek plate ye wala moment lagado yaar", category: "moments" },
            { url: "./images/date8.jpeg", caption: "Banger moments at BandStand", category: "dates" },
            { url: "./images/moment11.jpeg", caption: "Rose by my Rose(Sorry for not reacting nicely)", category: "moments" },
            { url: "./images/celeb3.jpeg", caption: "Tujhe sharam aagayi", category: "celebrations" },
            { url: "./images/trip5.jpeg", caption: "Posing like Mr. and Mrs. Pai", category: "trips" },
            { url: "./images/moment7.jpeg", caption: "No captions required", category: "moments" },
            { url: "./images/moment4.jpeg", caption: "Bhipuri❌  Mannat Puri✔️", category: "moments" }
        ];
        
        // Love Vault game data (kept as Unicode escapes to avoid encoding issues)
        const LOVE_VAULT_PAIRS = [
            { key: 'heart', symbol: '\u{1F496}', title: 'Our Spark', body: 'Somehow, you make ordinary days feel like a celebration.' },
            { key: 'stars', symbol: '\u{1F31F}', title: 'Your Shine', body: 'Your smile is still my favorite kind of magic.' },
            { key: 'rose', symbol: '\u{1F339}', title: 'Soft & Strong', body: 'Your kindness is gentle, but you make me feel mental.(Bidee)' },
            { key: 'sun', symbol: '\u{2600}\u{FE0F}', title: 'Warmth', body: 'You bring comfort in a way I never knew I needed.' },
            { key: 'moon', symbol: '\u{1F319}', title: 'Ant Shant Talks', body: 'I love when the topic shifts from intelectual to "haa batana bhai kya bola tha usne fir?"' },
            { key: 'music', symbol: '\u{1F3B6}', title: 'Our Rhythm', body: 'With you, even silence feels like a song.(Meri Shreya Ghosal 🥹)' },
            { key: 'coffee', symbol: '\u{2615}\u{FE0F}', title: 'Little Rituals', body: 'To look into each other’s eyes while holding hands.' },
            { key: 'camera', symbol: '\u{1F4F7}', title: 'Memories', body: 'Let\'s keep collecting moments we\'ll smile about forever.' },
            { key: 'gift', symbol: '\u{1F381}', title: 'Grateful', body: 'You\'re my favorite blessing.' },
            { key: 'ring', symbol: '\u{1F48D}', title: 'Promise', body: 'No matter what, Mai tere hi team me hu re.' },
            { key: 'sparkles', symbol: '\u{2728}', title: 'Wonder', body: 'You make me believe in beautiful things again.' },
            { key: 'love', symbol: '\u{1F495}', title: 'Us', body: 'You + me is my favorite story.' }
        ];

        const LOVE_VAULT_DIFFICULTY = {
            sweet: { pairs: 8, cols: 4 },
            spicy: { pairs: 10, cols: 5 },
            wild: { pairs: 12, cols: 6 }
        };

        const SURPRISES = [
            { title: 'For You', lines: ['Out of everything, you come first in my order of preferences.'] },
            { title: 'For You', lines: ['You are my favorite place to be.', 'Today, tomorrow, always - I choose you.'] },
            { title: 'Tiny Reminder', lines: ['If love had a sound, it would be your laugh.', 'My Laughing Buddhu.'] },
            { title: 'My Promise', lines: ['I will celebrate you in the small moments.', 'And in the big ones too.'] },
            { title: 'One More', lines: ['You make my world softer, brighter, better.', 'I am lucky - every day.'] },
            { title: 'Tiny Reminder', lines: ['I’ll definitely be the first person you see when you land in India.'] },
            { title: 'One question', lines: ['Am I still on Probabation period bro?'] },
            { title: 'All The Best', lines: ['Praying tere saare exams bahot achhe jaye.','My Doctor'] },
        ];

        const NOTE_POINTS = [
            "Teri koi baat nahi sunta.( Sab sunnenge ab se)",
            "Mai Baat hi nahi karta.( Harr ek possible way me baat karenge)",
            "Mai kisi aur ko dhuund lu.( Mera matha dusri baar thodi kharab karunga)",
            "Tu sirf apne mummy papa ki Gondappi hai.( Poori koshish karenge apni bhi banane ka)",
            "I don't care about you.( Try karenge ye area me bhi strong hone ka)"
        ];

        // Memory game data
        const memoryCards = [
            "💖", "🌟", "🌹", "😊", "🎉", "💑", "🌙", "🎶",
            "💖", "🌟", "🌹", "😊", "🎉", "💑", "🌙", "🎶"
        ];

        // DOM Elements
        const surpriseBtn = document.getElementById('surpriseBtn');
        const surpriseOverlay = document.getElementById('surpriseOverlay');
        const surpriseClose = document.getElementById('surpriseClose');
        const surpriseTitle = document.getElementById('surpriseTitle');
        const surpriseBody = document.getElementById('surpriseBody');
        const surpriseMore = document.getElementById('surpriseMore');
        const photoGallery = document.getElementById('photoGallery');
        const valentineBtn = document.getElementById('valentineBtn');
        const notesBtn = document.getElementById('notesBtn');
        const notesOverlay = document.getElementById('notesOverlay');
        const notesClose = document.getElementById('notesClose');
        const notesList = document.getElementById('notesList');
        const notesOkay = document.getElementById('notesOkay');
        const valentineOverlay = document.getElementById('valentineOverlay');
        const valentineClose = document.getElementById('valentineClose');
        const valentineYes = document.getElementById('valentineYes');
        const valentineNo = document.getElementById('valentineNo');
        const valentineChoice = document.getElementById('valentineChoice');
        const valentineStatus = document.getElementById('valentineStatus');
        const valentineReset = document.getElementById('valentineReset');
        const memoryBoard = document.getElementById('memoryBoard');
        const movesCount = document.getElementById('movesCount');
        const matchesCount = document.getElementById('matchesCount');
        const matchesTotal = document.getElementById('matchesTotal');
        const timeCount = document.getElementById('timeCount');
        const streakCount = document.getElementById('streakCount');
        const resetGameBtn = document.getElementById('resetGame');
        const anniversaryDateEl = document.getElementById('anniversaryDate');
        const countdownProgressBar = document.getElementById('countdownProgressBar');
        const countdownProgressLabel = document.getElementById('countdownProgressLabel');
        const countdownMessage = document.getElementById('countdownMessage');
        const footerYear = document.getElementById('footerYear');
        const footerLoveBtn = document.getElementById('footerLoveBtn');
        const siteFooter = document.querySelector('.site-footer');
        const hintGameBtn = document.getElementById('hintGame');
        const shuffleGameBtn = document.getElementById('shuffleGame');
        const difficultySelect = document.getElementById('difficultySelect');
        const loveNotes = document.getElementById('loveNotes');
        const bestScore = document.getElementById('bestScore');
        const gameWin = document.getElementById('gameWin');
        const winSummary = document.getElementById('winSummary');
        const playAgainBtn = document.getElementById('playAgain');
        const photoModal = document.getElementById('photoModal');
        const modalImage = document.getElementById('modalImage');
        const closeModal = document.querySelector('.close-modal');
        const boyfriendName = document.getElementById('boyfriendName');
        const letterPager = document.getElementById('letterPager');
        const letterPrev = document.getElementById('letterPrev');
        const letterNext = document.getElementById('letterNext');
        const letterIndicator = document.getElementById('letterIndicator');
        const letterNextBtn = document.getElementById('letterNextBtn');
        const letterBackBtn = document.getElementById('letterBackBtn');
        const gallerySearch = document.getElementById('gallerySearch');
        const shuffleGalleryBtn = document.getElementById('shuffleGallery');
        const galleryCount = document.getElementById('galleryCount');
        const galleryMore = document.getElementById('galleryMore');
        const viewMoreGalleryBtn = document.getElementById('viewMoreGallery');
        const galleryFilterChips = document.querySelectorAll('#gallery .chip-row .chip');
        const girlfriendName = 'Harshyaa';

        // Initialize variables
        let gameFirstCard = null;
        let gameSecondCard = null;
        let gameLock = false;
        let gameMoves = 0;
        let gameMatches = 0;
        let gameStreak = 0;
        let gameStartMs = 0;
        let gameTicker = null;
        let gameDifficulty = 'sweet';
        let timer;
        let galleryFilter = 'all';
        let galleryQuery = '';
        let galleryObserver;
        let galleryPageSize = 9;
        let galleryShown = galleryPageSize;
        let galleryCurrentOrder = null;
        let surpriseBusy = false;
        let surpriseIndex = 0;
        let surpriseAutoClose = null;

        // Set boyfriend's name (you can customize this)
        if (boyfriendName) boyfriendName.textContent = "Ajju"; // Change to your name

        // Initialize the website
        function init() {
            // This project has multiple pages now, so only initialize the features
            // that exist on the current page.
            if (photoGallery) renderPhotoGallery();
            if (memoryBoard) createMemoryGame();
            if (document.getElementById('days') || document.getElementById('countdownProgressBar')) startCountdown();

            setupLetterPager();
            setupEventListeners();
            setupHeaderDynamics();

            if (gallerySearch || shuffleGalleryBtn || document.querySelector('.chip-row')) setupGalleryControls();
            setupFooterDynamics();
            setupValentineAsk();
        }

        function shuffleArray(arr) {
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        function getFilteredPhotos() {
            let items = [...photoData];
            if (galleryFilter !== 'all') {
                items = items.filter(p => p.category === galleryFilter);
            }
            const q = galleryQuery.trim().toLowerCase();
            if (q) {
                items = items.filter(p => (p.caption || '').toLowerCase().includes(q));
            }
            return items;
        }

        function setLetterPage(page) {
            if (!letterPager) return;
            const pages = Array.from(letterPager.querySelectorAll('.letter-page'));
            if (!pages.length) return;

            const normalized = page === 'her' ? 'her' : 'my';
            letterPager.dataset.page = normalized;

            let activeIndex = 0;
            pages.forEach((p, idx) => {
                const isActive = p.getAttribute('data-letter') === normalized;
                p.classList.toggle('is-active', isActive);
                p.setAttribute('aria-hidden', String(!isActive));
                if (isActive) activeIndex = idx;
            });

            if (letterIndicator) letterIndicator.textContent = `${activeIndex + 1} / ${pages.length}`;
            if (letterPrev) letterPrev.disabled = activeIndex === 0;
            if (letterNext) letterNext.disabled = activeIndex === pages.length - 1;
        }

        function setupLetterPager() {
            if (!letterPager) return;

            setLetterPage(letterPager.dataset.page || 'my');

            if (letterPrev) {
                letterPrev.addEventListener('click', () => setLetterPage('my'));
            }
            if (letterNext) {
                letterNext.addEventListener('click', () => setLetterPage('her'));
            }
            if (letterNextBtn) {
                letterNextBtn.addEventListener('click', () => setLetterPage('her'));
            }
            if (letterBackBtn) {
                letterBackBtn.addEventListener('click', () => setLetterPage('my'));
            }
        }

        function updateGalleryCount(count) {
            if (!galleryCount) return;
            const label = count === 1 ? 'memory' : 'memories';
            const shown = Math.min(galleryShown, count);
            galleryCount.textContent = `${shown}/${count} ${label}`;
        }

        function updateGalleryMoreUi(totalCount) {
            if (!galleryMore || !viewMoreGalleryBtn) return;
            if (totalCount <= galleryPageSize) {
                galleryMore.hidden = true;
                return;
            }

            galleryMore.hidden = false;
            if (galleryShown < totalCount) {
                const left = totalCount - galleryShown;
                viewMoreGalleryBtn.textContent = `View more (${left} left)`;
            } else {
                viewMoreGalleryBtn.textContent = 'Show less';
            }
        }

        // Create + render photo gallery (filter/search aware)
        function renderPhotoGallery(photos) {
            const items = photos || getFilteredPhotos();
            galleryCurrentOrder = items;
            photoGallery.innerHTML = '';
            updateGalleryCount(items.length);
            updateGalleryMoreUi(items.length);

            if (galleryObserver) {
                galleryObserver.disconnect();
            }

            const canObserve = typeof window !== 'undefined' && 'IntersectionObserver' in window;
            if (canObserve) {
                galleryObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('in-view');
                            galleryObserver.unobserve(entry.target);
                        }
                    });
                }, { root: null, threshold: 0.15 });
            } else {
                galleryObserver = null;
            }

            items.slice(0, Math.min(items.length, galleryShown)).forEach((photo) => {
                const photoItem = document.createElement('div');
                photoItem.className = 'photo-item';
                photoItem.dataset.category = photo.category || 'all';
                photoItem.tabIndex = 0;
                photoItem.innerHTML = `
                    <img src="${photo.url}" alt="${photo.caption}" loading="lazy" decoding="async">
                    <div class="photo-caption">${photo.caption}</div>
                `;

                // Click to open modal
                photoItem.addEventListener('click', () => openModal(photo.url));
                photoItem.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(photo.url);
                    }
                });

                // Reactive tilt on pointer move (desktop only)
                photoItem.addEventListener('pointermove', (e) => {
                    if (e.pointerType && e.pointerType !== 'mouse') return;
                    const r = photoItem.getBoundingClientRect();
                    const px = (e.clientX - r.left) / r.width - 0.5;  // -0.5..0.5
                    const py = (e.clientY - r.top) / r.height - 0.5;  // -0.5..0.5
                    const rx = (-py * 6).toFixed(2);
                    const ry = (px * 7).toFixed(2);
                    const tilt = getComputedStyle(photoItem).getPropertyValue('--tilt').trim() || '0deg';
                    photoItem.style.transform = `translateY(-10px) rotate(${tilt}) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
                });

                photoItem.addEventListener('pointerleave', () => {
                    photoItem.style.transform = '';
                });

                photoGallery.appendChild(photoItem);
                if (galleryObserver) {
                    galleryObserver.observe(photoItem);
                } else {
                    photoItem.classList.add('in-view');
                }
            });
        }

        function setupGalleryControls() {
            if (gallerySearch) {
                gallerySearch.addEventListener('input', () => {
                    galleryQuery = gallerySearch.value || '';
                    galleryShown = galleryPageSize;
                    renderPhotoGallery();
                });
            }

            if (shuffleGalleryBtn) {
                shuffleGalleryBtn.addEventListener('click', () => {
                    // Shuffle the currently visible set (filter/search aware)
                    galleryShown = galleryPageSize;
                    renderPhotoGallery(shuffleArray(getFilteredPhotos()));
                });
            }

            if (viewMoreGalleryBtn) {
                viewMoreGalleryBtn.addEventListener('click', () => {
                    const list = galleryCurrentOrder || getFilteredPhotos();
                    if (galleryShown < list.length) {
                        galleryShown = Math.min(list.length, galleryShown + galleryPageSize);
                        renderPhotoGallery(list);
                    } else {
                        galleryShown = galleryPageSize;
                        renderPhotoGallery(list);
                        const section = document.getElementById('gallery');
                        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            }

            if (galleryFilterChips && galleryFilterChips.length) {
                galleryFilterChips.forEach((chip) => {
                    chip.addEventListener('click', () => {
                        galleryFilter = chip.dataset.filter || 'all';
                        galleryShown = galleryPageSize;
                        galleryFilterChips.forEach((c) => {
                            const isActive = c === chip;
                            c.classList.toggle('active', isActive);
                            c.setAttribute('aria-selected', isActive ? 'true' : 'false');
                        });
                        renderPhotoGallery();
                    });
                });
            }
        }

        // Create memory game
        function createMemoryGame() {
            // Shuffle the cards
            const shuffledCards = [...memoryCards].sort(() => Math.random() - 0.5);
            
            // Clear the board
            memoryBoard.innerHTML = '';
            
            // Create card elements
            shuffledCards.forEach((card, index) => {
                const cardElement = document.createElement('div');
                cardElement.className = 'memory-card';
                cardElement.dataset.index = index;
                cardElement.dataset.value = card;
                cardElement.innerHTML = `<span>?</span>`;
                
                cardElement.addEventListener('click', () => flipCard(cardElement));
                memoryBoard.appendChild(cardElement);
            });
            
            // Reset game stats
            moves = 0;
            matchedPairs = 0;
            movesCount.textContent = moves;
            matchesCount.textContent = matchedPairs;
            flippedCards = [];
        }

        // Flip card in memory game
        function flipCard(card) {
            // If card is already flipped or matched, do nothing
            if (card.classList.contains('flipped') || flippedCards.length >= 2) {
                return;
            }
            
            // Flip the card
            card.classList.add('flipped');
            card.innerHTML = `<span>${card.dataset.value}</span>`;
            flippedCards.push(card);
            
            // If two cards are flipped, check for match
            if (flippedCards.length === 2) {
                moves++;
                movesCount.textContent = moves;
                
                setTimeout(() => {
                    const [card1, card2] = flippedCards;
                    
                    // Check if cards match
                    if (card1.dataset.value === card2.dataset.value) {
                        // Match found
                        matchedPairs++;
                        matchesCount.textContent = matchedPairs;
                        
                        // Keep cards flipped
                        card1.style.visibility = 'hidden';
                        card2.style.visibility = 'hidden';
                        
                        // Check if game is complete
                        if (matchedPairs === 8) {
                            setTimeout(() => {
                                alert(`Congratulations! You matched all pairs in ${moves} moves! 💖`);
                            }, 500);
                        }
                    } else {
                        // No match, flip cards back
                        card1.classList.remove('flipped');
                        card2.classList.remove('flipped');
                        card1.innerHTML = `<span>?</span>`;
                        card2.innerHTML = `<span>?</span>`;
                    }
                    
                    // Reset flipped cards array
                    flippedCards = [];
                }, 1000);
            }
        }

        // --- Love Vault (Enhanced Memory Game) ---
        function stopLoveVaultTimer() {
            if (gameTicker) {
                clearInterval(gameTicker);
                gameTicker = null;
            }
        }

        function formatTimeMs(ms) {
            const total = Math.max(0, Math.floor(ms / 1000));
            const m = Math.floor(total / 60);
            const s = total % 60;
            return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }

        function updateLoveVaultHud() {
            if (movesCount) movesCount.textContent = String(gameMoves);
            if (matchesCount) matchesCount.textContent = String(gameMatches);
            if (streakCount) streakCount.textContent = String(gameStreak);

            const config = LOVE_VAULT_DIFFICULTY[gameDifficulty] || LOVE_VAULT_DIFFICULTY.sweet;
            if (matchesTotal) matchesTotal.textContent = String(config.pairs);

            if (timeCount) {
                const now = Date.now();
                const ms = gameStartMs ? (now - gameStartMs) : 0;
                timeCount.textContent = formatTimeMs(ms);
            }
        }

        function startLoveVaultTimerIfNeeded() {
            if (gameStartMs) return;
            gameStartMs = Date.now();
            updateLoveVaultHud();
            gameTicker = setInterval(updateLoveVaultHud, 250);
        }

        function loadBestScore() {
            if (!bestScore) return;
            const key = `loveVaultBest:${gameDifficulty}`;
            const raw = localStorage.getItem(key);
            if (!raw) {
                bestScore.textContent = '—';
                return;
            }
            try {
                const v = JSON.parse(raw);
                const t = typeof v.timeMs === 'number' ? formatTimeMs(v.timeMs) : '—';
                const m = typeof v.moves === 'number' ? v.moves : '—';
                bestScore.textContent = `${t} / ${m} moves`;
            } catch {
                bestScore.textContent = '—';
            }
        }

        function maybeSaveBestScore() {
            const key = `loveVaultBest:${gameDifficulty}`;
            const timeMs = gameStartMs ? (Date.now() - gameStartMs) : 0;
            const candidate = { timeMs, moves: gameMoves };

            let prev = null;
            try {
                const raw = localStorage.getItem(key);
                prev = raw ? JSON.parse(raw) : null;
            } catch {
                prev = null;
            }

            const isBetter =
                !prev ||
                (typeof prev.timeMs === 'number' && candidate.timeMs < prev.timeMs) ||
                (prev && prev.timeMs === candidate.timeMs && typeof prev.moves === 'number' && candidate.moves < prev.moves);

            if (isBetter) {
                localStorage.setItem(key, JSON.stringify(candidate));
            }
        }

        function buildLoveVaultDeck() {
            const config = LOVE_VAULT_DIFFICULTY[gameDifficulty] || LOVE_VAULT_DIFFICULTY.sweet;
            const chosen = shuffleArray(LOVE_VAULT_PAIRS).slice(0, config.pairs);
            const doubled = chosen.flatMap((p) => ([
                { ...p, cardId: `${p.key}-a` },
                { ...p, cardId: `${p.key}-b` }
            ]));
            return { config, deck: shuffleArray(doubled) };
        }

        function addLoveNote(pair) {
            if (!loveNotes) return;
            const note = document.createElement('div');
            note.className = 'note';
            note.innerHTML = `
                <div class="note-head">
                    <div class="note-title">${pair.title}</div>
                    <div class="note-symbol">${pair.symbol}</div>
                </div>
                <div class="note-body">${pair.body}</div>
            `;
            loveNotes.prepend(note);
        }

        function hideWin() {
            if (gameWin) gameWin.hidden = true;
        }

        function showWin() {
            stopLoveVaultTimer();
            maybeSaveBestScore();
            loadBestScore();

            const timeMs = gameStartMs ? (Date.now() - gameStartMs) : 0;
            if (winSummary) {
                winSummary.textContent = `Completed in ${formatTimeMs(timeMs)} with ${gameMoves} moves.`;
            }
            if (gameWin) gameWin.hidden = false;

            // Celebration burst
            for (let i = 0; i < 24; i++) createFloatingHeart();
        }

        // New implementation overrides the old createMemoryGame()
        function createMemoryGame() {
            hideWin();
            stopLoveVaultTimer();

            gameFirstCard = null;
            gameSecondCard = null;
            gameLock = false;
            gameMoves = 0;
            gameMatches = 0;
            gameStreak = 0;
            gameStartMs = 0;

            if (loveNotes) loveNotes.innerHTML = '';

            const { config, deck } = buildLoveVaultDeck();
            if (memoryBoard) {
                let cols = config.cols;
                if (window.innerWidth < 520) cols = Math.min(cols, 4);
                else if (window.innerWidth < 900) cols = Math.min(cols, 5);
                memoryBoard.style.setProperty('--cols', String(cols));
            }

            memoryBoard.innerHTML = '';
            deck.forEach((card) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'memory-card';
                btn.setAttribute('aria-label', 'Love Vault card');
                btn.dataset.key = card.key;
                btn.dataset.title = card.title;
                btn.dataset.body = card.body;
                btn.dataset.symbol = card.symbol;
                btn.innerHTML = `
                    <span class="card-inner">
                        <span class="card-face card-front" aria-hidden="true">
                            <span class="seal"><span>LV</span></span>
                        </span>
                        <span class="card-face card-back" aria-hidden="true">
                            <span class="symbol">${card.symbol}</span>
                        </span>
                    </span>
                `;
                btn.addEventListener('click', () => onLoveVaultFlip(btn));
                btn.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onLoveVaultFlip(btn);
                    }
                });
                memoryBoard.appendChild(btn);
            });

            loadBestScore();
            updateLoveVaultHud();
        }

        function onLoveVaultFlip(cardEl) {
            if (!cardEl || gameLock) return;
            if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;
            if (gameWin && !gameWin.hidden) return;

            startLoveVaultTimerIfNeeded();
            cardEl.classList.add('flipped');

            if (!gameFirstCard) {
                gameFirstCard = cardEl;
                return;
            }

            gameSecondCard = cardEl;
            gameLock = true;
            gameMoves += 1;
            updateLoveVaultHud();

            const firstKey = gameFirstCard.dataset.key;
            const secondKey = gameSecondCard.dataset.key;
            const isMatch = firstKey && secondKey && firstKey === secondKey;

            if (isMatch) {
                setTimeout(() => {
                    gameFirstCard.classList.add('matched');
                    gameSecondCard.classList.add('matched');
                    gameMatches += 1;
                    gameStreak += 1;

                    const pair = LOVE_VAULT_PAIRS.find(p => p.key === firstKey) || {
                        title: gameFirstCard.dataset.title,
                        body: gameFirstCard.dataset.body,
                        symbol: gameFirstCard.dataset.symbol
                    };
                    addLoveNote(pair);

                    gameFirstCard = null;
                    gameSecondCard = null;
                    gameLock = false;
                    updateLoveVaultHud();

                    const config = LOVE_VAULT_DIFFICULTY[gameDifficulty] || LOVE_VAULT_DIFFICULTY.sweet;
                    if (gameMatches >= config.pairs) {
                        setTimeout(showWin, 350);
                    }
                }, 420);
            } else {
                gameStreak = 0;
                gameFirstCard.classList.add('wrong');
                gameSecondCard.classList.add('wrong');
                updateLoveVaultHud();

                setTimeout(() => {
                    gameFirstCard.classList.remove('flipped', 'wrong');
                    gameSecondCard.classList.remove('flipped', 'wrong');
                    gameFirstCard = null;
                    gameSecondCard = null;
                    gameLock = false;
                }, 780);
            }
        }

        function showLoveVaultHint() {
            if (!memoryBoard || gameLock) return;
            const cards = Array.from(memoryBoard.querySelectorAll('.memory-card')).filter((c) => !c.classList.contains('matched'));
            if (!cards.length) return;

            startLoveVaultTimerIfNeeded();
            gameLock = true;
            cards.forEach((c) => c.classList.add('flipped'));
            setTimeout(() => {
                cards.forEach((c) => c.classList.remove('flipped'));
                gameFirstCard = null;
                gameSecondCard = null;
                gameLock = false;
            }, 900);
        }

        // Start countdown to next anniversary
        function startCountdown() {
            // Set your anniversary date (month is 0-indexed, so 0 = January)
            const nowDate = new Date();
            // Use end-of-day so the "days" number doesn't feel "one day short" during the day.
            const anniversaryDate = new Date(nowDate.getFullYear(), 7, 10, 23, 59, 59, 999); // August 10th
            
            // If the anniversary has already passed this year, set it for next year
            if (anniversaryDate < nowDate) {
                anniversaryDate.setFullYear(anniversaryDate.getFullYear() + 1);
            }

            // Show the target date in the UI
            if (anniversaryDateEl) {
                anniversaryDateEl.textContent = anniversaryDate.toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }

            // For progress: compute the window between anniversaries
            const lastAnniversary = new Date(anniversaryDate);
            lastAnniversary.setFullYear(anniversaryDate.getFullYear() - 1);

            const lastValues = { days: null, hours: null, minutes: null, seconds: null };

            function setTick(unit, value) {
                const el = document.getElementById(unit);
                if (!el) return;

                const next = value.toString().padStart(2, '0');
                if (lastValues[unit] !== next) {
                    el.textContent = next;
                    lastValues[unit] = next;

                    const box = el.closest('.timer-box');
                    if (box) {
                        box.classList.remove('tick');
                        void box.offsetWidth; // reflow so animation reliably restarts
                        box.classList.add('tick');
                        setTimeout(() => box.classList.remove('tick'), 260);
                    }
                } else {
                    el.textContent = next;
                }
            }

            // Clear any previous countdown interval
            if (timer) clearInterval(timer);
            
            // Update countdown tick
            function updateCountdownTick() {
                const now = Date.now();
                const distance = anniversaryDate.getTime() - now;
                const safe = Math.max(0, distance);
                
                // Calculate days, hours, minutes, seconds
                const days = Math.floor(safe / (1000 * 60 * 60 * 24));
                const hours = Math.floor((safe % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((safe % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((safe % (1000 * 60)) / 1000);
                
                // Update display (with small "tick" animation when values change)
                setTick('days', days);
                setTick('hours', hours);
                setTick('minutes', minutes);
                setTick('seconds', seconds);

                // Progress between anniversaries
                const total = anniversaryDate.getTime() - lastAnniversary.getTime();
                const elapsed = now - lastAnniversary.getTime();
                const pct = total > 0 ? Math.min(1, Math.max(0, elapsed / total)) : 0;

                if (countdownProgressBar) countdownProgressBar.style.width = `${(pct * 100).toFixed(2)}%`;
                if (countdownProgressLabel) countdownProgressLabel.textContent = `${Math.round(pct * 100)}%`;

                if (countdownMessage) {
                    if (distance <= 0) {
                        countdownMessage.textContent = "It's our day - happy anniversary!";
                    } else if (days === 0) {
                        countdownMessage.textContent = "Today's the day. Make a wish.";
                    } else if (days <= 7) {
                        countdownMessage.textContent = `So close - just ${days} day${days === 1 ? '' : 's'} left.`;
                    } else if (days <= 30) {
                        countdownMessage.textContent = `Almost there - ${days} days to go.`;
                    } else {
                        countdownMessage.textContent = `${days} days until our next anniversary.`;
                    }
                }
                
                // If the countdown is over
                if (distance <= 0) {
                    clearInterval(timer);
                    const titleEl = document.querySelector('.countdown-title');
                    if (titleEl) titleEl.textContent = "Happy Anniversary, My Love!";
                    return;
                    document.querySelector('.timer').innerHTML = `
                        <div style="font-size: 2rem; padding: 20px;">
                            Today is our special day! 💖
                        </div>
                    `;
                }
            }

            // Run once immediately, then every second
            updateCountdownTick();
            timer = setInterval(updateCountdownTick, 1000);
        }

        // Open photo modal
        function openModal(imageSrc) {
            modalImage.src = imageSrc;
            photoModal.style.display = 'flex';
        }

        // Setup event listeners
        function setupEventListeners() {
            // Surprise button
            if (surpriseBtn) surpriseBtn.addEventListener('click', (e) => {
                // Enhanced surprise UI + message (early return keeps old code below unreachable)
                if (surpriseBusy) return;
                surpriseBusy = true;

                const textEl = surpriseBtn.querySelector('.heart-btn-text');
                if (textEl) textEl.textContent = 'Surprise incoming...';
                surpriseBtn.classList.add('is-running');

                createButtonRipple(surpriseBtn, e);
                const r = surpriseBtn.getBoundingClientRect();
                createHeartBurst(r.left + r.width / 2, r.top + r.height / 2, 26);

                surpriseIndex = Math.floor(Math.random() * SURPRISES.length);
                showSurpriseOverlay(surpriseIndex);

                setTimeout(() => {
                    surpriseBtn.classList.remove('is-running');
                    if (textEl) textEl.textContent = 'Click for a Surprise!';
                    surpriseBusy = false;
                }, 650);

                return;

                // Create floating hearts animation
                for (let i = 0; i < 30; i++) {
                    createFloatingHeart();
                }
                
                // Show surprise message
                setTimeout(() => {
                    alert("You are the most amazing person I've ever known. I love you more than words can express! 💖");
                }, 1000);
            });
            
            if (surpriseMore) {
                surpriseMore.addEventListener('click', () => {
                    surpriseIndex = (surpriseIndex + 1) % SURPRISES.length;
                    showSurpriseOverlay(surpriseIndex);
                    createHeartBurst(window.innerWidth / 2, window.innerHeight * 0.22, 18);
                });
            }

            if (surpriseClose) surpriseClose.addEventListener('click', hideSurpriseOverlay);
            if (surpriseOverlay) {
                surpriseOverlay.addEventListener('click', (e) => {
                    if (e.target === surpriseOverlay) hideSurpriseOverlay();
                });
            }

            document.querySelectorAll('[data-close-surprise="true"]').forEach((el) => {
                el.addEventListener('click', () => {
                    hideSurpriseOverlay();
                });
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && surpriseOverlay && !surpriseOverlay.hidden) {
                    hideSurpriseOverlay();
                }
            });

            // Points to note
            if (notesBtn) {
                notesBtn.addEventListener('click', (e) => {
                    createButtonRipple(notesBtn, e);
                    const r = notesBtn.getBoundingClientRect();
                    createHeartBurst(r.left + r.width / 2, r.top + r.height / 2, 14);
                    showNotesOverlay();
                });
            }

            if (notesOkay) notesOkay.addEventListener('click', hideNotesOverlay);
            if (notesClose) notesClose.addEventListener('click', hideNotesOverlay);
            if (notesOverlay) {
                notesOverlay.addEventListener('click', (e) => {
                    if (e.target === notesOverlay) hideNotesOverlay();
                });
            }

            document.querySelectorAll('[data-close-notes="true"]').forEach((el) => {
                el.addEventListener('click', () => hideNotesOverlay());
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && notesOverlay && !notesOverlay.hidden) {
                    hideNotesOverlay();
                }
            });

            // Reset game button
            if (resetGameBtn) resetGameBtn.addEventListener('click', createMemoryGame);

            // Love Vault controls
            if (hintGameBtn) hintGameBtn.addEventListener('click', showLoveVaultHint);
            if (shuffleGameBtn) shuffleGameBtn.addEventListener('click', createMemoryGame);
            if (difficultySelect) {
                difficultySelect.addEventListener('change', () => {
                    gameDifficulty = difficultySelect.value || 'sweet';
                    createMemoryGame();
                });
            }
            if (playAgainBtn) playAgainBtn.addEventListener('click', () => {
                hideWin();
                createMemoryGame();
            });
            if (gameWin) {
                gameWin.addEventListener('click', (e) => {
                    if (e.target === gameWin) {
                        hideWin();
                    }
                });
            }
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && gameWin && !gameWin.hidden) {
                    hideWin();
                }
            });
            
            // Close modal when clicking X
            if (closeModal && photoModal) {
                closeModal.addEventListener('click', () => {
                    photoModal.style.display = 'none';
                });
            }
            
            // Close modal when clicking outside the image
            if (photoModal) {
                photoModal.addEventListener('click', (e) => {
                    if (e.target === photoModal) {
                        photoModal.style.display = 'none';
                    }
                });
            }
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('nav a[href^=\"#\"]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (!targetSection) return;
                    
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    const desired = link.dataset?.letterPage;
                    if (desired && targetId === '#letter') {
                        setTimeout(() => setLetterPage(desired), 420);
                    }
                });
            });
        }

        // Add dynamic header behavior (shrink + active section highlight)
        function setupHeaderDynamics() {
            const header = document.querySelector('.site-header');
            const navLinks = Array.from(document.querySelectorAll('.nav-link[href^=\"#\"]'));
            const hrefToLinks = new Map();
            navLinks.forEach((link) => {
                const href = link.getAttribute('href');
                if (!href) return;
                if (!hrefToLinks.has(href)) hrefToLinks.set(href, []);
                hrefToLinks.get(href).push(link);
            });

            const hrefs = Array.from(hrefToLinks.keys());
            const sections = hrefs.map((href) => document.querySelector(href)).filter(Boolean);

            function updateHeaderState() {
                if (!header) return;
                header.classList.toggle('scrolled', window.scrollY > 10);

                const scrollPos = window.scrollY + 120;
                let activeHref = null;

                sections.forEach((section, index) => {
                    const top = section.offsetTop;
                    const bottom = top + section.offsetHeight;
                    if (scrollPos >= top && scrollPos < bottom) {
                        activeHref = hrefs[index] || null;
                    }
                });

                navLinks.forEach((link) => link.classList.remove('active'));

                if (!activeHref) return;

                if (activeHref === '#letter') {
                    const current = (letterPager?.dataset?.page || 'my') === 'her' ? 'her' : 'my';
                    const letterLinks = hrefToLinks.get('#letter') || [];
                    const best = letterLinks.find((l) => l.dataset?.letterPage === current) || letterLinks[0];
                    if (best) best.classList.add('active');
                    return;
                }

                (hrefToLinks.get(activeHref) || []).forEach((l) => l.classList.add('active'));
            }

            updateHeaderState();
            window.addEventListener('scroll', updateHeaderState, { passive: true });
            window.addEventListener('resize', updateHeaderState);
        }

        function setupFooterDynamics() {
            if (footerYear) footerYear.textContent = String(new Date().getFullYear());

            if (footerLoveBtn) {
                footerLoveBtn.addEventListener('click', () => {
                    for (let i = 0; i < 18; i++) createFloatingHeart();
                });
            }

            if (siteFooter) {
                siteFooter.addEventListener('pointermove', (e) => {
                    const r = siteFooter.getBoundingClientRect();
                    const x = ((e.clientX - r.left) / r.width) * 100;
                    const y = ((e.clientY - r.top) / r.height) * 100;
                    siteFooter.style.setProperty('--fx', `${x.toFixed(1)}%`);
                    siteFooter.style.setProperty('--fy', `${y.toFixed(1)}%`);
                });

                siteFooter.addEventListener('pointerleave', () => {
                    siteFooter.style.setProperty('--fx', '50%');
                    siteFooter.style.setProperty('--fy', '40%');
                });
            }
        }

        function getLoveDisplayName() {
            const by = (girlfriendName?.textContent || '').trim();
            const logoTag = (document.querySelector('.logo-tag')?.textContent || '').trim();
            if (by && by !== 'Your Loving Boyfriend') return by;
            if (logoTag) return logoTag;
            return 'my love';
        }

        function showSurpriseOverlay(idx) {
            if (!surpriseOverlay || !surpriseTitle || !surpriseBody) return;
            if (surpriseAutoClose) clearTimeout(surpriseAutoClose);

            const name = getLoveDisplayName();
            const s = SURPRISES[idx % SURPRISES.length];

            surpriseTitle.textContent = `${s.title}, ${name}`;
            surpriseBody.innerHTML = '';
            s.lines.forEach((line) => {
                const p = document.createElement('p');
                p.style.margin = '0 0 10px';
                p.textContent = line;
                surpriseBody.appendChild(p);
            });

            const last = surpriseBody.lastElementChild;
            if (last && last instanceof HTMLElement) last.style.marginBottom = '0';

            surpriseOverlay.hidden = false;
            if (surpriseClose) surpriseClose.focus();

            surpriseAutoClose = setTimeout(() => {
                hideSurpriseOverlay();
            }, 9000);
        }

        function hideSurpriseOverlay() {
            if (!surpriseOverlay) return;
            surpriseOverlay.hidden = true;
            if (surpriseAutoClose) {
                clearTimeout(surpriseAutoClose);
                surpriseAutoClose = null;
            }
        }

        function showNotesOverlay() {
            if (!notesOverlay || !notesList) return;

            notesList.innerHTML = '';
            NOTE_POINTS.forEach((text) => {
                const li = document.createElement('li');

                const bullet = document.createElement('span');
                bullet.className = 'notes-bullet';
                bullet.textContent = '\u2713';

                const body = document.createElement('div');
                body.textContent = text;

                li.appendChild(bullet);
                li.appendChild(body);
                notesList.appendChild(li);
            });

            notesOverlay.hidden = false;
            if (notesClose) notesClose.focus();
        }

        function hideNotesOverlay() {
            if (!notesOverlay) return;
            notesOverlay.hidden = true;
        }

        function setupValentineAsk() {
            if (!valentineBtn || !valentineOverlay) return;

            // Restore previous answer (if any)
            const saved = localStorage.getItem('valentineAnswer');
            if (saved === 'yes') {
                valentineBtn.classList.add('answered');
                const text = valentineBtn.querySelector('.valentine-ask-text');
                if (text) text.textContent = 'Valentine: Yes';
            }

            function openValentine() {
                const answered = localStorage.getItem('valentineAnswer') === 'yes';
                if (valentineOverlay) valentineOverlay.classList.toggle('answered', answered);

                valentineOverlay.hidden = false;
                if (valentineStatus) {
                    valentineStatus.textContent = answered
                        ? "You already said yes. Still want to celebrate again?"
                        : '';
                }
                if (valentineNo) {
                    // Reset to CSS default position on open
                    valentineNo.style.left = '';
                    valentineNo.style.top = '';
                    valentineNo.style.right = '';
                    valentineNo.style.transform = '';
                }
                if (valentineYes) valentineYes.focus();
            }

            function closeValentine() {
                valentineOverlay.hidden = true;
            }

            function setAnswerYes() {
                localStorage.setItem('valentineAnswer', 'yes');
                if (valentineStatus) valentineStatus.textContent = 'Yay! I am the happiest person right now.';

                // Update hero button UI
                valentineBtn.classList.add('answered');
                const text = valentineBtn.querySelector('.valentine-ask-text');
                if (text) text.textContent = 'Valentine: Yes';

                // Celebrate
                createHeartBurst(window.innerWidth / 2, window.innerHeight * 0.25, 34);
                for (let i = 0; i < 18; i++) createFloatingHeart();

                setTimeout(() => closeValentine(), 900);
            }

            function moveNoButton(pointerEvent) {
                if (!valentineNo || !valentineChoice) return;
                const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                if (reduced) return;

                // Don't dodge on touch devices (feels annoying)
                if (pointerEvent?.pointerType && pointerEvent.pointerType !== 'mouse') return;

                const area = valentineChoice.getBoundingClientRect();
                const btn = valentineNo.getBoundingClientRect();

                const pad = 10;
                const maxX = Math.max(pad, area.width - btn.width - pad);
                const maxY = Math.max(pad, area.height - btn.height - pad);

                const px = typeof pointerEvent?.clientX === 'number' ? (pointerEvent.clientX - area.left) : area.width / 2;
                const py = typeof pointerEvent?.clientY === 'number' ? (pointerEvent.clientY - area.top) : area.height / 2;

                // Try a few random spots until we find one far from the pointer position.
                const minDist = Math.min(180, Math.max(90, Math.min(area.width, area.height) * 0.45));
                let x = pad + Math.random() * maxX;
                let y = pad + Math.random() * maxY;
                for (let i = 0; i < 10; i++) {
                    const tx = pad + Math.random() * maxX;
                    const ty = pad + Math.random() * maxY;
                    const dx = (tx + btn.width / 2) - px;
                    const dy = (ty + btn.height / 2) - py;
                    if (Math.hypot(dx, dy) >= minDist) {
                        x = tx;
                        y = ty;
                        break;
                    }
                }

                valentineNo.style.left = `${x}px`;
                valentineNo.style.top = `${y}px`;
                valentineNo.style.right = 'auto';
                valentineNo.style.transform = 'none';
            }

            valentineBtn.addEventListener('click', (e) => {
                // Always allow re-opening the popup (even after "Yes")
                createButtonRipple(valentineBtn, e);
                openValentine();
            });

            if (valentineClose) valentineClose.addEventListener('click', closeValentine);
            valentineOverlay.addEventListener('click', (e) => {
                if (e.target === valentineOverlay) closeValentine();
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && valentineOverlay && !valentineOverlay.hidden) closeValentine();
            });

            if (valentineYes) valentineYes.addEventListener('click', setAnswerYes);

            if (valentineReset) {
                valentineReset.addEventListener('click', () => {
                    localStorage.removeItem('valentineAnswer');
                    valentineOverlay.classList.remove('answered');
                    valentineBtn.classList.remove('answered');
                    const text = valentineBtn.querySelector('.valentine-ask-text');
                    if (text) text.textContent = 'Will you be my Valentine?';
                    if (valentineStatus) valentineStatus.textContent = 'Okay - asked again from scratch.';

                    // Reset dodging position
                    if (valentineNo) {
                        valentineNo.style.left = '';
                        valentineNo.style.top = '';
                        valentineNo.style.right = '';
                        valentineNo.style.transform = '';
                    }
                });
            }

            if (valentineNo) {
                valentineNo.addEventListener('pointerenter', moveNoButton);

                // Prevent the "No" from ever being successfully clicked/activated.
                valentineNo.addEventListener('pointerdown', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    moveNoButton(e);
                });

                valentineNo.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    // On touch devices, show a playful message instead of dodging.
                    if (e.pointerType && e.pointerType !== 'mouse') {
                        if (valentineStatus) valentineStatus.textContent = "Aww okay. But... are you sure?";
                        return;
                    }

                    moveNoButton(e);
                    if (valentineStatus) valentineStatus.textContent = 'Nice try.';
                });

                valentineNo.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        e.stopPropagation();
                        moveNoButton(e);
                        if (valentineStatus) valentineStatus.textContent = 'Nice try.';
                    }
                });
            }
        }

        function createButtonRipple(btn, e) {
            if (!btn) return;
            const r = btn.getBoundingClientRect();
            const x = (e?.clientX ?? (r.left + r.width / 2)) - r.left;
            const y = (e?.clientY ?? (r.top + r.height / 2)) - r.top;

            const ripple = document.createElement('span');
            ripple.className = 'btn-ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);
        }

        function createHeartBurst(x, y, count) {
            const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const n = reduced ? Math.min(8, count) : count;

            for (let i = 0; i < n; i++) {
                const heart = document.createElement('div');
                heart.textContent = '\u{1F496}';
                heart.style.position = 'fixed';
                heart.style.left = `${x}px`;
                heart.style.top = `${y}px`;
                heart.style.zIndex = '9999';
                heart.style.pointerEvents = 'none';
                heart.style.opacity = '0.9';
                heart.style.fontSize = `${Math.random() * 16 + 12}px`;
                document.body.appendChild(heart);

                const dx = (Math.random() - 0.5) * 220;
                const dy = -(Math.random() * 280 + 180);
                const rot = (Math.random() - 0.5) * 220;
                const duration = Math.random() * 600 + 900;

                const anim = heart.animate([
                    { transform: 'translate(-50%, -50%) scale(0.9) rotate(0deg)', opacity: 0.9 },
                    { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1.05) rotate(${rot}deg)`, opacity: 0 }
                ], {
                    duration,
                    easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
                });

                anim.onfinish = () => heart.remove();
            }
        }

        // Create floating hearts animation
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.textContent = '\u{1F496}';
            heart.style.position = 'fixed';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.opacity = '0.8';
            
            document.body.appendChild(heart);
            
            // Animate the heart
            const animation = heart.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
                { transform: `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });
            
            // Remove heart after animation completes
            animation.onfinish = () => {
                heart.remove();
            };
        }

        // Initialize the website when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
