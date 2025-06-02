// ShoreSquad - Interactive Beach Cleanup App
// Modern JavaScript with ES6+ features, performance optimization, and accessibility

class ShoreSquadApp {
    constructor() {
        this.cleanupEvents = [];
        this.userLocation = null;
        this.map = null;
        this.weatherData = null;
        this.crew = [];
        this.currentFilter = 'all';
        
        // Weather API (using OpenWeatherMap - free tier)
        this.weatherApiKey = 'demo_key'; // Replace with actual API key
        
        this.init();
    }

    async init() {
        // Show loading screen
        this.showLoadingScreen();
        
        // Initialize app components
        await this.initializeApp();
        
        // Hide loading screen
        this.hideLoadingScreen();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Load initial data
        await this.loadInitialData();
    }

    showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'flex';
        }
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1000);
        }
    }

    async initializeApp() {
        // Initialize map
        this.initMap();
        
        // Get user location
        await this.getUserLocation();
        
        // Initialize weather widget
        this.initWeatherWidget();
        
        // Load mock data
        this.loadMockData();
    }

    initMap() {
        const mapElement = document.getElementById('map');
        if (!mapElement) return;

        // Initialize Leaflet map
        this.map = L.map('map').setView([37.7749, -122.4194], 10); // Default to San Francisco

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        // Add custom markers for different event types
        this.eventMarkers = L.layerGroup().addTo(this.map);
        
        // Add sample markers
        this.addSampleMarkers();
    }

    addSampleMarkers() {
        const sampleEvents = [
            { lat: 37.7849, lng: -122.4094, title: 'Ocean Beach Cleanup', status: 'active' },
            { lat: 37.8049, lng: -122.4294, title: 'Baker Beach Cleanup', status: 'upcoming' },
            { lat: 37.7649, lng: -122.3894, title: 'Crissy Field Cleanup', status: 'completed' }
        ];

        sampleEvents.forEach(event => {
            const color = event.status === 'active' ? '#ff6b35' : 
                         event.status === 'upcoming' ? '#0077be' : '#20b2aa';
            
            const marker = L.circleMarker([event.lat, event.lng], {
                color: color,
                fillColor: color,
                fillOpacity: 0.7,
                radius: 8
            }).addTo(this.eventMarkers);

            marker.bindPopup(`
                <div class="map-popup">
                    <h4>${event.title}</h4>
                    <p>Status: ${event.status}</p>
                    <button class="btn btn-sm btn-primary">View Details</button>
                </div>
            `);
        });
    }

    async getUserLocation() {
        if ('geolocation' in navigator) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, {
                        timeout: 10000,
                        enableHighAccuracy: true
                    });
                });
                
                this.userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                // Update map center if location found
                if (this.map) {
                    this.map.setView([this.userLocation.lat, this.userLocation.lng], 12);
                    
                    // Add user location marker
                    L.marker([this.userLocation.lat, this.userLocation.lng])
                        .addTo(this.map)
                        .bindPopup('You are here!')
                        .openPopup();
                }
                
                // Fetch weather for user location
                await this.fetchWeather();
                
            } catch (error) {
                console.warn('Geolocation failed:', error);
                // Fallback to IP-based location or default location
            }
        }
    }

    async fetchWeather() {
        try {
            // Using a demo weather service (replace with actual API)
            const mockWeatherData = {
                temperature: 22,
                description: 'partly cloudy',
                windSpeed: 8,
                uvIndex: 5,
                visibility: 10
            };
            
            this.weatherData = mockWeatherData;
            this.updateWeatherWidget();
            
        } catch (error) {
            console.error('Weather fetch failed:', error);
            this.showWeatherError();
        }
    }

    updateWeatherWidget() {
        const widget = document.getElementById('weather-widget');
        if (!widget || !this.weatherData) return;

        const tempElement = widget.querySelector('.weather-temp');
        const descElement = widget.querySelector('.weather-desc');
        const windElement = widget.querySelector('.weather-details .detail-value');
        
        if (tempElement) tempElement.textContent = `${this.weatherData.temperature}°C`;
        if (descElement) descElement.textContent = this.weatherData.description;
        
        const detailValues = widget.querySelectorAll('.detail-value');
        if (detailValues[0]) detailValues[0].textContent = `${this.weatherData.windSpeed} mph`;
        if (detailValues[1]) detailValues[1].textContent = this.weatherData.uvIndex;
        if (detailValues[2]) detailValues[2].textContent = `${this.weatherData.visibility} mi`;
    }

    initWeatherWidget() {
        // Set up weather widget with default loading state
        const widget = document.getElementById('weather-widget');
        if (widget) {
            // Weather is already set to loading state in HTML
        }
    }

    loadMockData() {
        // Load sample cleanup events
        this.cleanupEvents = [
            {
                id: 1,
                title: 'Ocean Beach Weekly Cleanup',
                location: 'Ocean Beach, San Francisco',
                date: '2025-06-05',
                time: '10:00',
                participants: 23,
                description: 'Join us for our weekly beach cleanup at Ocean Beach!',
                status: 'upcoming'
            },
            {
                id: 2,
                title: 'Baker Beach Earth Day Special',
                location: 'Baker Beach, San Francisco',
                date: '2025-06-07',
                time: '09:00',
                participants: 45,
                description: 'Special Earth Day cleanup event with breakfast included!',
                status: 'upcoming'
            },
            {
                id: 3,
                title: 'Crissy Field Family Cleanup',
                location: 'Crissy Field, San Francisco',
                date: '2025-06-08',
                time: '14:00',
                participants: 18,
                description: 'Family-friendly cleanup event with activities for kids.',
                status: 'upcoming'
            }
        ];

        // Load sample crew data
        this.crew = [
            { id: 1, name: 'Alex Chen', points: 450, avatar: 'AC' },
            { id: 2, name: 'Maria Garcia', points: 380, avatar: 'MG' },
            { id: 3, name: 'Jordan Smith', points: 320, avatar: 'JS' },
            { id: 4, name: 'Sam Johnson', points: 290, avatar: 'SJ' }
        ];

        this.renderEvents();
        this.renderCrewMembers();
    }

    async loadInitialData() {
        // Simulate API loading delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Additional data loading can go here
    }

    setupEventListeners() {
        // Navigation toggle for mobile
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Event filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.renderEvents();
            });
        });

        // Modal controls
        this.setupModalListeners();

        // Map controls
        this.setupMapControls();

        // Form submissions
        this.setupFormListeners();
        
        // Next cleanup actions
        this.setupNextCleanupListeners();
    }

    setupModalListeners() {
        const modal = document.getElementById('create-event-modal');
        const createBtns = document.querySelectorAll('#create-event-btn, #create-event-btn-2');
        const closeBtn = document.getElementById('modal-close');
        const cancelBtn = document.getElementById('cancel-event');

        createBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('active');
            });
        });

        [closeBtn, cancelBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => {
                    modal.classList.remove('active');
                });
            }
        });

        // Close modal on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    setupMapControls() {
        const locateBtn = document.getElementById('locate-btn');
        if (locateBtn) {
            locateBtn.addEventListener('click', async () => {
                await this.getUserLocation();
            });
        }

        const filterBtn = document.getElementById('filter-btn');
        if (filterBtn) {
            filterBtn.addEventListener('click', () => {
                // Toggle map filters
                console.log('Map filter clicked');
            });
        }
    }

    setupFormListeners() {
        const createEventForm = document.getElementById('create-event-form');
        if (createEventForm) {
            createEventForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCreateEvent(e);
            });
        }
    }

    setupNextCleanupListeners() {
        // Join This Cleanup button
        const joinCleanupBtn = document.querySelector('.next-cleanup-section .btn-primary');
        if (joinCleanupBtn) {
            joinCleanupBtn.addEventListener('click', () => {
                this.handleJoinNextCleanup();
            });
        }

        // Get Directions button
        const directionsBtn = document.querySelector('.next-cleanup-section .btn-outline');
        if (directionsBtn) {
            directionsBtn.addEventListener('click', () => {
                this.handleGetDirections();
            });
        }

        // Hero Join Next Cleanup button
        const heroJoinBtn = document.getElementById('join-cleanup-btn');
        if (heroJoinBtn) {
            heroJoinBtn.addEventListener('click', () => {
                // Scroll to next cleanup section
                const nextCleanupSection = document.getElementById('next-cleanup');
                if (nextCleanupSection) {
                    nextCleanupSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    handleCreateEvent(e) {
        const formData = new FormData(e.target);
        const newEvent = {
            id: Date.now(),
            title: formData.get('title'),
            location: formData.get('location'),
            date: formData.get('date'),
            time: formData.get('time'),
            description: formData.get('description'),
            participants: 1,
            status: 'upcoming'
        };

        this.cleanupEvents.unshift(newEvent);
        this.renderEvents();
        
        // Close modal
        document.getElementById('create-event-modal').classList.remove('active');
        
        // Reset form
        e.target.reset();

        // Show success message
        this.showNotification('Event created successfully!', 'success');
    }

    renderEvents() {
        const eventsContainer = document.getElementById('events-list');
        if (!eventsContainer) return;

        let filteredEvents = this.cleanupEvents;
        
        // Apply filter
        if (this.currentFilter !== 'all') {
            const now = new Date();
            const today = now.toISOString().split('T')[0];
            const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
            const monthFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

            filteredEvents = this.cleanupEvents.filter(event => {
                switch (this.currentFilter) {
                    case 'today':
                        return event.date === today;
                    case 'week':
                        return event.date >= today && event.date <= weekFromNow;
                    case 'month':
                        return event.date >= today && event.date <= monthFromNow;
                    default:
                        return true;
                }
            });
        }

        eventsContainer.innerHTML = filteredEvents.map(event => `
            <div class="event-card" data-event-id="${event.id}">
                <div class="event-date">
                    📅 ${this.formatDate(event.date)} at ${event.time}
                </div>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-location">📍 ${event.location}</div>
                <p class="event-description">${event.description}</p>
                <div class="event-participants">
                    <span class="participants-count">${event.participants} participants</span>
                    <button class="join-btn" onclick="app.joinEvent(${event.id})">Join Event</button>
                </div>
            </div>
        `).join('');
    }

    renderCrewMembers() {
        const crewContainer = document.getElementById('crew-members');
        if (!crewContainer) return;

        crewContainer.innerHTML = this.crew.map(member => `
            <div class="crew-member">
                <div class="member-avatar">${member.avatar}</div>
                <div class="member-name">${member.name}</div>
                <div class="member-points">${member.points} pts</div>
            </div>
        `).join('');
    }

    joinEvent(eventId) {
        const event = this.cleanupEvents.find(e => e.id === eventId);
        if (event) {
            event.participants++;
            this.renderEvents();
            this.showNotification(`Joined "${event.title}"!`, 'success');
        }
    }

    handleJoinNextCleanup() {
        // Update the participant count in the next cleanup section
        const participantElement = document.querySelector('.next-cleanup-section .detail-text');
        if (participantElement && participantElement.textContent.includes('crew members')) {
            const currentCount = parseInt(participantElement.textContent.match(/\d+/)[0]);
            participantElement.textContent = `${currentCount + 1} crew members joined`;
        }
        
        this.showNotification('Successfully joined the Pasir Ris Beach cleanup!', 'success');
    }

    handleGetDirections() {
        // Open Google Maps with directions to Pasir Ris Beach
        const coordinates = '1.381497,103.955574';
        const destination = 'Pasir Ris Beach, Singapore';
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&destination_place_id=ChIJi358__89XDQR_Ct6LEsfJoI`;
        
        // Try to open in Google Maps app first, then fallback to web
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        
        if (/android/i.test(userAgent)) {
            // Android
            window.open(`google.navigation:q=${coordinates}`, '_system');
            setTimeout(() => {
                window.open(googleMapsUrl, '_blank');
            }, 500);
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
            // iOS
            window.open(`maps://maps.google.com/maps?daddr=${coordinates}&amp;ll=`, '_system');
            setTimeout(() => {
                window.open(googleMapsUrl, '_blank');
            }, 500);
        } else {
            // Desktop or other
            window.open(googleMapsUrl, '_blank');
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">&times;</button>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 3000);
    }

    showWeatherError() {
        const widget = document.getElementById('weather-widget');
        if (widget) {
            widget.innerHTML = `
                <div class="weather-error">
                    <p>Unable to load weather data</p>
                    <button onclick="app.fetchWeather()" class="btn btn-sm btn-outline">Retry</button>
                </div>
            `;
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ShoreSquadApp();
});

// Service Worker registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}