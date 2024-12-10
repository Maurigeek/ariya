import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const EventCreation = () => import('../views/EventCreation.vue');

const EventDetailPage = () => import('../views/EventDetailPage.vue');
const NotFound = () => import('../views/NotFound.vue');
const UserProfile = () => import ('../views/UserProfile.vue');
const EditProfile = () => import ('../views/EditProfile.vue');
const AgentManagement = () => import ('../views/AgentManagement.vue');
const BookingPayment = () => import ('../views/BookingPayment.vue');
const EticketConfirmation = () => import ('../views/EticketConfirmation.vue');
const Setting  = () => import ('../views/Setting.vue');
const EventTourismDetails = () => import ('../views/EventTourismDetails.vue');

const MessagingSytem = () => import ('../views/MessagingSytem.vue');
const OrganizerProfile = () => import ('../views/OrganizerProfile.vue');
const OrganizerDashboard = () => import ('../views/OrganizerDashboard.vue');
const ScanHistory = () => import ('../views/ScanHistory.vue');
const Scan = () => import ('../views/Scan.vue');
const DetailedReports = () => import ('../views/DetailedReports.vue');
const Event = () => import ('../views/Event.vue');
const CreateOrganizer = () => import ('../views/CreateOrganizer.vue');
const EditOrganizer = () => import ('../views/EditOrganizer.vue');
const AuthComponent = () => import ('../components/AuthComponent.vue');
const Help = () => import ('../views/Help.vue');
const Favoris = () => import ('../views/Favoris.vue');

const routes = [
  // User Routes
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },

  {
    path: '/favoris',
    name: 'Favoris',
    component: Favoris,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/token',
    name: 'AuthComponent',
    component: AuthComponent,
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/profile/edit',
    name: 'EditProfile',
    component: EditProfile,
  },
  {
    path: '/events',
    name: 'EventList',
    component: Event,
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: EventDetailPage,
    props: true, // Permet de passer l'ID comme prop
  },
  {
    path: '/tourism/:id',
    name: 'TourismDetail',
    component: EventTourismDetails,
    props: true,
  },
  {
    path: '/payment',
    name: 'BookingPayment',
    component: BookingPayment,
  },
  {
    path: '/confirmation',
    name: 'EticketConfirmation',
    component: EticketConfirmation,
  },
  {
    path: '/messages',
    name: 'MessagingSystem',
    component: MessagingSytem,
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan,
  },
  {
    path: '/scan/history',
    name: 'ScanHistory',
    component: ScanHistory,
  },
  {
    path: '/settings',
    name: 'UserSettings',
    component: Setting,
  },

  // Organizer Routes
  {
    path: '/organizer/dashboard',
    name: 'OrganizerDashboard',
    component: OrganizerDashboard,
  },
  {
    path: '/organizer/profile',
    name: 'OrganizerProfile',
    component: OrganizerProfile,
  },
  {
    path: '/organizer/create',
    name: 'CreateOrganizer',
    component: CreateOrganizer,
  },
  {
    path: '/organizer/edit',
    name: 'EditOrganizer',
    component: EditOrganizer,
  },
  {
    path: '/organizer/events/create',
    name: 'EventCreation',
    component: EventCreation,
  },
  {
    path: '/organizer/agent-management',
    name: 'AgentManagement',
    component: AgentManagement,
  },
  {
    path: '/organizer/report',
    name: 'DetailedReports',
    component: DetailedReports,
  },

  // Fallback Route (404)
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
